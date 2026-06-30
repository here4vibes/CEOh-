import type { RNG } from "./rng";
import type { Household, MoveType, PresetOption, SeatConfig } from "./types";
import { N, FIRE, THRESH, DEATH } from "./constants";
import { applyHousehold, capOf, litOf, clamp01 } from "./population";

export function avgCap(mode: SeatConfig["mode"], population: Household[]): number {
  return population.reduce((s, h) => s + capOf(mode, h), 0) / population.length;
}
export function avgCiv(population: Household[]): number {
  return population.reduce((s, h) => s + h.civ, 0) / population.length;
}
export function avgEcon(population: Household[]): number {
  return population.reduce((s, h) => s + h.econ, 0) / population.length;
}
export function litCount(mode: SeatConfig["mode"], population: Household[]): number {
  return population.filter((h) => litOf(mode, h) >= DEATH).length;
}

export interface AirResult {
  population: Household[];
  scoreGain: number;
  statGain: number;
  capDeltaPct: number;
  civDeltaPct: number;
  gapDeltaPct: number;
  deaths: { index: number }[];
}

/** Resolves one move against the whole population. Consumes the rng stream once per household. */
export function airMove(
  cfg: SeatConfig,
  population: Household[],
  move: PresetOption,
  dialValue: number,
  rng: RNG,
): AirResult {
  const before = { cap: avgCap(cfg.mode, population), civ: avgCiv(population), econ: avgEcon(population) };
  const pull = clamp01(move.pull * (0.45 + 0.55 * (dialValue / 100)));

  let gain = 0;
  const deaths: { index: number }[] = [];
  const next = population.map((h, i) => {
    const r = applyHousehold(cfg.mode, h, pull, move.type, false, rng);
    gain += r.g;
    if (r.died) deaths.push({ index: i });
    return r.nh;
  });

  const after = { cap: avgCap(cfg.mode, next), civ: avgCiv(next), econ: avgEcon(next) };

  return {
    population: next,
    scoreGain: Math.round(gain),
    statGain: Math.round(gain * cfg.statScale * 10) / 10,
    capDeltaPct: Math.round((after.cap - before.cap) * 100),
    civDeltaPct: Math.round((after.civ - before.civ) * 100),
    gapDeltaPct: Math.round((before.econ - after.econ) * 100),
    deaths,
  };
}

/** The board's confidence swing: restraint always reads badly, capture always reads well. */
export function boardDelta(type: MoveType, capDeltaPct: number): number {
  return type === "protect"
    ? Math.min(-9, Math.round(capDeltaPct * 1.3 - 9))
    : Math.max(3, Math.round(capDeltaPct * 1.3 - 9));
}

export function rankIndexForScore(cfg: SeatConfig, score: number): number {
  let i = 0;
  THRESH.forEach((t, k) => {
    if (score >= t) i = k;
  });
  return Math.min(i, cfg.ranks.length - 1);
}

/**
 * The replacement rule: once board confidence drops below FIRE, the player is replaced and an
 * NPC successor plays the most extractive remaining option each turn, harder and faster than the
 * player would have. Consumes the rng stream once per household per remaining turn.
 */
export function fastForwardFired(
  cfg: SeatConfig,
  population: Household[],
  fromTurn: number,
  rng: RNG,
): Household[] {
  let pop = population;
  for (let i = fromTurn; i < cfg.turns.length; i++) {
    const worst = cfg.turns[i].o.reduce<PresetOption | null>(
      (a, b) => (b.type === "capture" && b.pull > (a?.pull ?? 0) ? b : a),
      null,
    ) ?? { id: "npc", name: "npc", glyph: "", type: "capture", pull: 0.6 };
    pop = pop.map((h) => applyHousehold(cfg.mode, h, clamp01(worst.pull), "capture", true, rng).nh);
  }
  return pop;
}

export { N, FIRE };
