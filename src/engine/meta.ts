import { COLS, N, SURNAMES } from "./constants";
import type { SeatConfig } from "./types";

export interface HouseholdMeta {
  name: string;
  life: SeatConfig["lives"][number];
}

/** Cosmetic only — a deterministic function of index, not the rng stream, so it never affects sim state. */
export function buildMeta(lives: SeatConfig["lives"]): HouseholdMeta[] {
  return Array.from({ length: N }, (_, i) => ({
    name: `The ${SURNAMES[(i * 7) % SURNAMES.length]}s`,
    life: lives[(i * 3 + Math.floor(i / COLS)) % lives.length],
  }));
}
