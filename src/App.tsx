import { useEffect, useRef, useState } from "react";
import { useGameStore } from "./store/gameStore";
import { SEATS } from "./engine/seats";
import { Seat } from "./components/Seat";
import { Hub } from "./components/Hub";
import { litOf } from "./engine/population";
import { DEATH } from "./engine/constants";
import { isInDevvit, sendWebViewReady, sendGameComplete, onDevvitInit } from "./devvitBridge";
import "./App.css";

type View = "ceo" | "hub" | "politician";

function App() {
  const initialized = useRef(false);
  const init = useGameStore((s) => s.init);
  const newGame = useGameStore((s) => s.newGame);
  const population = useGameStore((s) => s.population);

  const [view, setView] = useState<View>("ceo");
  // Devvit mode: hold rendering until the parent sends the weekly seed.
  const [ready, setReady] = useState(() => !isInDevvit());

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (!isInDevvit()) {
      init();
      return;
    }

    // Running inside a Reddit webview — request the weekly seed before starting.
    const cleanup = onDevvitInit((data) => {
      newGame(data.weekSeed);
      setReady(true);
    });
    sendWebViewReady();
    return cleanup;
  }, [init, newGame]);

  if (!ready || population.length === 0) return null;

  function restartGame() {
    newGame();
    setView("ceo");
  }

  function onPoliticianComplete() {
    if (isInDevvit()) {
      const { character, population: pop } = useGameStore.getState();
      const climbScore = Math.round(character.money * 10 + character.fame + character.power);
      const litHouseholds = pop.filter((h) => litOf("vote", h) > DEATH).length;
      const civic = Math.round((pop.reduce((s, h) => s + h.civ, 0) / pop.length) * 100);
      sendGameComplete({ climbScore, stewardScore: civic + litHouseholds, lit: litHouseholds });
    }
    restartGame();
  }

  if (view === "ceo") {
    return (
      <Seat
        cfg={SEATS.ceo}
        onSeatComplete={() => setView("hub")}
        onRestart={restartGame}
        completeCta="Continue to the campaign ›"
      />
    );
  }

  if (view === "hub") {
    return <Hub onEnter={() => setView("politician")} onRestart={restartGame} />;
  }

  return (
    <Seat
      cfg={SEATS.politician}
      onSeatComplete={onPoliticianComplete}
      onRestart={restartGame}
      completeCta="Play again ›"
    />
  );
}

export default App;
