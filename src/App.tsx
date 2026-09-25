import { useEffect, useRef, useState } from "react";
import { useGameStore } from "./store/gameStore";
import { SEATS } from "./engine/seats";
import { Seat } from "./components/Seat";
import { Hub } from "./components/Hub";
import { BackgroundCard } from "./components/BackgroundCard";
import { ResultScreen } from "./components/ResultScreen";
import { litOf } from "./engine/population";
import { DEATH } from "./engine/constants";
import { isInDevvit, sendWebViewReady, sendGameComplete, onDevvitInit } from "./devvitBridge";
import { submitRun } from "./services/telemetry";
import "./App.css";

type View = "background" | "ceo" | "hub" | "politician" | "results";

interface RunResult {
  climbScore: number;
  stewardScore: number;
  litCount: number;
  electionWon: boolean;
  ceoBoardFired: boolean;
  politicianFired: boolean;
}

function computeScores(): RunResult {
  const { character, population, seatRuns } = useGameStore.getState();
  const climbScore = Math.round(character.money * 10 + character.fame + character.power);
  const litCount = population.filter((h) => litOf("vote", h) > DEATH).length;
  const civic = Math.round((population.reduce((s, h) => s + h.civ, 0) / population.length) * 100);
  const stewardScore = civic + litCount;
  const polRun = seatRuns["politician"];
  const ceoRun = seatRuns["ceo"];
  return {
    climbScore,
    stewardScore,
    litCount,
    electionWon: !!polRun && polRun.ended && !polRun.fired && !polRun.electionLost,
    ceoBoardFired: !!ceoRun?.fired,
    politicianFired: !!polRun?.fired,
  };
}

function App() {
  const initialized = useRef(false);
  const init = useGameStore((s) => s.init);
  const newGame = useGameStore((s) => s.newGame);
  const population = useGameStore((s) => s.population);
  const background = useGameStore((s) => s.background);

  const [view, setView] = useState<View>("background");
  const [result, setResult] = useState<RunResult | null>(null);
  // Devvit: hold rendering until the parent sends the weekly seed.
  const [ready, setReady] = useState(() => !isInDevvit());

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (!isInDevvit()) {
      init();
      return;
    }

    const cleanup = onDevvitInit((data) => {
      newGame(data.weekSeed);
      setReady(true);
    });
    sendWebViewReady();
    return cleanup;
  }, [init, newGame]);

  if (!ready || population.length === 0 || !background) return null;

  function startNewGame() {
    newGame();
    setResult(null);
    setView("background");
  }

  function onPoliticianComplete() {
    const scores = computeScores();
    setResult(scores);

    // Submit to Supabase (fire and forget — never blocks the game).
    const { moveLog } = useGameStore.getState();
    void submitRun({
      background_id: background!.id,
      choices: moveLog,
      climb_score: scores.climbScore,
      steward_score: scores.stewardScore,
      lit_count: scores.litCount,
      election_won: scores.electionWon,
      ceo_fired: scores.ceoBoardFired,
      politician_fired: scores.politicianFired,
    });

    if (isInDevvit()) {
      sendGameComplete({
        climbScore: scores.climbScore,
        stewardScore: scores.stewardScore,
        lit: scores.litCount,
      });
      // In Devvit the post is the UI — restart directly instead of showing the result screen.
      startNewGame();
      return;
    }

    setView("results");
  }

  if (view === "background") {
    return <BackgroundCard background={background} onBegin={() => setView("ceo")} />;
  }

  if (view === "ceo") {
    return (
      <Seat
        cfg={SEATS.ceo}
        onSeatComplete={() => setView("hub")}
        onRestart={startNewGame}
        completeCta="Continue to the campaign ›"
      />
    );
  }

  if (view === "hub") {
    return <Hub onEnter={() => setView("politician")} onRestart={startNewGame} />;
  }

  if (view === "politician") {
    return (
      <Seat
        cfg={SEATS.politician}
        onSeatComplete={onPoliticianComplete}
        onRestart={startNewGame}
        completeCta="See your results ›"
      />
    );
  }

  // results
  if (!result) return null;
  return (
    <ResultScreen
      background={background}
      {...result}
      onPlayAgain={startNewGame}
    />
  );
}

export default App;
