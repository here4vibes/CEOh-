import type { RNG } from "./rng";
import type { Household, Mode, MoveType } from "./types";
import { N, DEATH } from "./constants";

export function clamp01(x: number): number {
  return Math.max(0, Math.min(1, x));
}

/** Seeds the one shared population. Consumes the rng stream in fixed per-household order. */
export function buildPopulation(rng: RNG): Household[] {
  return Array.from({ length: N }, () => ({
    att: 0.1 + rng() * 0.1,
    econ: 0.6 + rng() * 0.2,
    civ: 0.6 + rng() * 0.2,
    vote: 0,
  }));
}

/** The dimension a seat harvests — drives the glow. */
export function capOf(mode: Mode, h: Household): number {
  return mode === "extract" ? 1 - h.econ : mode === "vote" ? h.vote : h.att;
}

/** The dimension a seat burns — drives the dying dot. */
export function litOf(mode: Mode, h: Household): number {
  return mode === "extract" ? h.econ : h.civ;
}

/** 0 = thriving .. 3 = gone dark, matching the four hover lines per life category. */
export function tierOf(lit: number): 0 | 1 | 2 | 3 {
  if (lit >= 0.55) return 0;
  if (lit >= 0.3) return 1;
  if (lit >= DEATH) return 2;
  return 3;
}

export interface ApplyResult {
  nh: Household;
  g: number; // this household's contribution to the move's gain
  died: boolean; // crossed the DEATH threshold this step
}

/**
 * Resolves one household against one move. `npc` marks moves played by the replacement-rule
 * successor after a firing (slightly harsher than a player-chosen capture). Each call consumes
 * the rng stream the same fixed number of times regardless of branch, so replay stays in lockstep.
 */
export function applyHousehold(
  mode: Mode,
  h: Household,
  pull: number,
  type: MoveType,
  npc: boolean,
  rng: RNG,
): ApplyResult {
  if (mode === "extract") {
    if (type === "capture") {
      const econ = clamp01(h.econ - (pull * (0.16 + 0.1 * rng()) + (npc ? 0.05 : 0)));
      const g = pull * (0.5 + 0.5 * rng());
      const nh = { ...h, econ };
      return { nh, g, died: h.econ >= DEATH && nh.econ < DEATH };
    }
    const econ = clamp01(h.econ + (1 - h.econ) * pull * 0.14 * rng());
    const g = pull * 0.1;
    const nh = { ...h, econ };
    return { nh, g, died: h.econ >= DEATH && nh.econ < DEATH };
  }

  if (mode === "vote") {
    const precarity = clamp01(0.5 * (1 - h.econ) + 0.5 * (1 - h.civ));
    if (type === "capture") {
      const conv = (1 - h.vote) * pull * (0.3 + 0.7 * precarity) * (0.6 + 0.4 * rng());
      const vote = clamp01(h.vote + conv);
      const civ = clamp01(h.civ - pull * (0.1 + 0.06 * rng()));
      const nh = { ...h, vote, civ };
      return { nh, g: conv, died: h.civ >= DEATH && nh.civ < DEATH };
    }
    const win = (1 - h.vote) * pull * 0.25 * h.civ * (0.6 + 0.4 * rng());
    const vote = clamp01(h.vote + win);
    const civ = clamp01(h.civ + (1 - h.civ) * pull * 0.06 * rng());
    const nh = { ...h, vote, civ };
    return { nh, g: win, died: h.civ >= DEATH && nh.civ < DEATH };
  }

  // mode === "attn"
  if (type === "capture") {
    const att = clamp01(h.att + (1 - h.att) * pull * (0.45 + 0.5 * rng()));
    const civ = clamp01(h.civ - (pull * (0.16 + 0.1 * rng()) + (npc ? 0.05 : 0)));
    const nh = { ...h, att, civ };
    return { nh, g: att - h.att, died: h.civ >= DEATH && nh.civ < DEATH };
  }
  const att = clamp01(h.att + (1 - h.att) * pull * 0.3 * rng());
  const civ = clamp01(h.civ + (1 - h.civ) * pull * 0.14 * rng());
  const nh = { ...h, att, civ };
  return { nh, g: att - h.att, died: h.civ >= DEATH && nh.civ < DEATH };
}
