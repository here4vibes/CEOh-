/**
 * Balancing harness (CLAUDE.md M1): scripted CEO playthroughs that exercise the engine through
 * the same `replay()` path used for save/load and (eventually) server-side score verification,
 * so these numbers reflect exactly what a real player's seed + moveLog would produce.
 */
import { CEO } from "../src/engine/seats/ceo";
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

function buildMoveLog(strategy: Strategy): MoveLogEntry[] {
  return CEO.turns.map((turn, i) => ({
    seatId: CEO.id,
    turnIndex: i,
    move: pickMove(strategy, i, turn.o),
    dialValue: DIAL,
  }));
}

function runStrategy(strategy: Strategy) {
  const moveLog = buildMoveLog(strategy);
  const state = replay(SEED, moveLog);
  const run = state.seatRuns[CEO.id];

  return {
    strategy,
    score: run.score,
    rank: CEO.ranks[rankIndexForScore(CEO, run.score)].title,
    board: run.board,
    fired: run.fired,
    turnsPlayed: run.turn + 1,
    civicPct: Math.round(avgCiv(state.population) * 100),
    gapPct: Math.round((1 - avgEcon(state.population)) * 100),
    stillStable: `${litCount(CEO.mode, state.population)}/${N}`,
  };
}

const strategies: Strategy[] = ["all-extract", "all-restraint", "mixed"];
const results = strategies.map(runStrategy);

console.log(`CE Oh! — balancing harness (seed ${SEED}, dial ${DIAL})\n`);
console.table(results);
