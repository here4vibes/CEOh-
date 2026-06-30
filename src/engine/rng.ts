// Deterministic PRNG so a given seed always produces the same playthrough.
// Required for weekly-seed leaderboards and server-side replay verification (see CLAUDE.md §5).

export type RNG = () => number;

/** mulberry32 — fast, small, good-enough statistical quality for a game sim. */
export function mulberry32(seed: number): RNG {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministic 32-bit hash (FNV/xmur3-style) so a string seed maps to a numeric one. */
export function hashStringToSeed(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  h = Math.imul(h ^ (h >>> 16), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^ (h >>> 16)) >>> 0;
}

/** ISO week string, e.g. "2026-W27", stable across a Mon-Sun week per the ISO-8601 definition. */
export function isoWeekString(date: Date = new Date()): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

/** Everyone who plays in the same ISO week gets the same seed (the Wordle model, CLAUDE.md §4). */
export function weeklySeed(date: Date = new Date()): number {
  return hashStringToSeed(isoWeekString(date));
}

/** Free-play mode: a fresh, non-comparable seed. */
export function randomSeed(): number {
  return Math.floor(Math.random() * 0xffffffff) >>> 0;
}
