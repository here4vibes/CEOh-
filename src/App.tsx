import { useEffect, useRef, useState } from "react";
import { useGameStore } from "./store/gameStore";
import { SEATS } from "./engine/seats";
import { Seat } from "./components/Seat";
import { Hub } from "./components/Hub";
import { BackgroundCard } from "./components/BackgroundCard";
import { ResultScreen } from "./components/ResultScreen";
import { litOf } from "./engine/population";
import type { BackgroundProfile } from "./engine/types";
import { DEATH } from "./engine/constants";
import { isInDevvit, sendWebViewReady, sendGameComplete, onDevvitInit } from "./devvitBridge";
import { submitRun } from "./services/telemetry";
import "./App.css";

type View = { kind: "background" } | { kind: "seat"; index: number } | { kind: "hub" } | { kind: "results" };

interface RunResult {
  climbScore: number;
  stewardScore: number;
  litCount: number;
  electionWon: boolean;
  /** The first seat's replacement rule fired (CEO for Sterling, the household's seat otherwise). */
  ceoBoardFired: boolean;
  politicianFired: boolean;
}

function computeScores(background: BackgroundProfile): RunResult {
  const { character, population, seatRuns } = useGameStore.getState();
  const lastSeat = SEATS[background.seats[background.seats.length - 1]];
  const climbScore = Math.round(character.money * 10 + character.fame + character.power);
  const litCount = population.filter((h) => litOf(lastSeat.mode, h) > DEATH).length;
  const civic = Math.round((population.reduce((s, h) => s + h.civ, 0) / population.length) * 100);
  const polRun = seatRuns["politician"];
  return {
    climbScore,
    stewardScore: civic + litCount,
    litCount,
    electionWon: !!polRun && polRun.ended && !polRun.fired && !polRun.electionLost,
    ceoBoardFired: !!seatRuns[background.seats[0]]?.fired,
    politicianFired: !!polRun?.fired,
  };
}

function App() {
  const initialized = useRef(false);
  const init = useGameStore((s) => s.init);
  const newGame = useGameStore((s) => s.newGame);
  const population = useGameStore((s) => s.population);
  const background = useGameStore((s) => s.background);

  const [view, setView] = useState<View>({ kind: "background" });
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
    setView({ kind: "background" });
  }

  function onRunComplete() {
    const scores = computeScores(background!);
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

    setView({ kind: "results" });
  }

  if (view.kind === "background") {
    return <BackgroundCard background={background} onBegin={() => setView({ kind: "seat", index: 0 })} />;
  }

  if (view.kind === "seat") {
    const { index } = view;
    const isLast = index === background.seats.length - 1;
    return (
      <Seat
        key={background.seats[index]}
        cfg={SEATS[background.seats[index]]}
        onSeatComplete={isLast ? onRunComplete : () => setView({ kind: "hub" })}
        onRestart={startNewGame}
        completeCta={isLast ? "See your results ›" : "Continue to the campaign ›"}
      />
    );
  }

  if (view.kind === "hub") {
    return <Hub onEnter={() => setView({ kind: "seat", index: 1 })} onRestart={startNewGame} />;
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
