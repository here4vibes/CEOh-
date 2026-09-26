import type { SeatConfig } from "../types";
import { LIVES } from "../lives";
import { TURN_RESULTS } from "../results";
import { CEO } from "./ceo";
import { POLITICIAN } from "./politician";
import { COUNCIL, ENGINEER, EXPERT, FARMER, FLEET, LANDLORD, MILL, OWNER, PASTOR, UNION_LOCAL, SUPERVISOR, TRUSTEE } from "./households";

export const SEATS: Record<string, SeatConfig> = Object.fromEntries(
  [CEO, POLITICIAN, SUPERVISOR, FLEET, ENGINEER, OWNER, EXPERT, FARMER, LANDLORD, TRUSTEE, COUNCIL, PASTOR, UNION_LOCAL, MILL, ...LIVES.map((l) => l.seat)].map((c) => [c.id, withResults(c)]),
);

function withResults(cfg: SeatConfig): SeatConfig {
  const results = TURN_RESULTS[cfg.id];
  if (!results) return cfg;
  return {
    ...cfg,
    turns: cfg.turns.map((t, i) => ({
      ...t,
      o: t.o.map((o) => ({ ...o, result: results[i]?.[o.type === "protect" ? 0 : 1] })),
    })),
  };
}
