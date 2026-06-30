import { useEffect, useRef } from "react";
import { useGameStore } from "./store/gameStore";
import { SEATS } from "./engine/seats";
import { Seat } from "./components/Seat";
import "./App.css";

function App() {
  const initialized = useRef(false);
  const init = useGameStore((s) => s.init);
  const population = useGameStore((s) => s.population);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    init();
  }, [init]);

  if (population.length === 0) return null;

  return <Seat cfg={SEATS.ceo} />;
}

export default App;
