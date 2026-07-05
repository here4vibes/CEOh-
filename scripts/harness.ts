/**
 * Balancing harness (CLAUDE.md M2): scripted CEO→Politician playthroughs that exercise the
 * engine through the same `replay()` path used for save/load and (eventually) server-side score
 * verification, so these numbers reflect exactly what a real player's seed + moveLog would produce.
 */
import { CEO } from "../src/engine/seats/ceo";
import { POLITICIAN } from "../src/engine/seats/politician";
import { replay } from "../src/engine/replay";
import { avgCiv, avgEcon, litCount, rankIndexForScore } from "../src/engine/seatRuntime";
import { N } from "../src/engine/constants";
import type { MoveLogEntry, PresetOption } from "../src/engine/types";

const SEED = 20260630;
const DIAL = 50;

type Strategy = "all-extract" | "all-restraint" | "mixed";

function pickMove(strategy: Strategy, turnIndex: number, options: PresetOption[]): PresetOption {
  const protect = options.find((o) => o.type === "protect")!;
  const capture = options.find((o) => o.type === "capture")!;
  if (strategy === "all-extract") return capture;
  if (strategy === "all-restraint") return protect;
  return turnIndex % 2 === 0 ? protect : capture;
}

function buildArc(ceoStrategy: Strategy, politStrategy: Strategy): MoveLogEntry[] {
  const ceoMoves = CEO.turns.map((turn, i) => ({
    seatId: CEO.id,
    turnIndex: i,
    move: pickMove(ceoStrategy, i, turn.o),
    dialValue: DIAL,
  }));
  const politMoves = POLITICIAN.turns.map((turn, i) => ({
    seatId: POLITICIAN.id,
    turnIndex: i,
    move: pickMove(politStrategy, i, turn.o),
    dialValue: DIAL,
  }));
  return [...ceoMoves, ...politMoves];
}

function politOutcome(fired: boolean, ended: boolean, electionLost: boolean): string {
  if (fired) return "party fired";
  if (electionLost) return "lost election";
  if (ended) return "won";
  return "in progress";
}

function runArc(ceoStrategy: Strategy, politStrategy: Strategy) {
  const moveLog = buildArc(ceoStrategy, politStrategy);
  const state = replay(SEED, moveLog);
  const ceo = state.seatRuns[CEO.id];
  const pol = state.seatRuns[POLITICIAN.id];

  return {
    "CEO strat": ceoStrategy,
    "POL strat": politStrategy,
    "CEO rank": CEO.ranks[rankIndexForScore(CEO, ceo.score)].title.split(",")[0],
    "CEO fired": ceo.fired,
    "POL outcome": pol ? politOutcome(pol.fired, pol.ended, pol.electionLost) : "—",
    "POL rank": pol ? POLITICIAN.ranks[rankIndexForScore(POLITICIAN, pol.score)].title.split(",")[0] : "—",
    civicPct: Math.round(avgCiv(state.population) * 100),
    gapPct: Math.round((1 - avgEcon(state.population)) * 100),
    stable: `${litCount(POLITICIAN.mode, state.population)}/${N}`,
  };
}

const combos: [Strategy, Strategy][] = [
  ["all-extract", "all-extract"],
  ["all-extract", "all-restraint"],
  ["all-extract", "mixed"],
  ["all-restraint", "all-extract"],
  ["mixed", "mixed"],
];

const results = combos.map(([c, p]) => runArc(c, p));

console.log(`CE Oh! — balancing harness (seed ${SEED}, dial ${DIAL})\n`);
console.table(results);
