import { useEffect, useRef, useState } from "react";
import { useGameStore } from "./store/gameStore";
import { SEATS } from "./engine/seats";
import { Seat } from "./components/Seat";
import { Hub } from "./components/Hub";
import "./App.css";

type View = "ceo" | "hub" | "politician";

function App() {
  const initialized = useRef(false);
  const init = useGameStore((s) => s.init);
  const newGame = useGameStore((s) => s.newGame);
  const population = useGameStore((s) => s.population);

  const [view, setView] = useState<View>("ceo");

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    init();
  }, [init]);

  if (population.length === 0) return null;

  function restartGame() {
    newGame();
    setView("ceo");
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
      onSeatComplete={restartGame}
      onRestart={restartGame}
      completeCta="Play again ›"
    />
  );
}

export default App;
