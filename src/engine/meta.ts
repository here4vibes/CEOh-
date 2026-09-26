import { COLS, N, SURNAMES } from "./constants";
import type { SeatConfig } from "./types";

export interface HouseholdMeta {
  name: string;
  life: SeatConfig["lives"][number];
}

/** Cosmetic only — a deterministic function of index, not the rng stream, so it never affects sim state. */
export function buildMeta(lives: SeatConfig["lives"]): HouseholdMeta[] {
  return Array.from({ length: N }, (_, i) => ({
    name: `The ${plural(SURNAMES[(i * 7) % SURNAMES.length])}`,
    life: lives[(i * coprimeStep(lives.length) + Math.floor(i / COLS)) % lives.length],
  }));
}

function plural(surname: string): string {
  return /(s|x|z|ch|sh)$/.test(surname) ? `${surname}es` : `${surname}s`;
}

/** A stride that visits every situation, so neighbors don't all share the same two. */
function coprimeStep(n: number): number {
  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
  for (let step = 3; step < n + 3; step++) if (gcd(step, n) === 1) return step;
  return 1;
}
