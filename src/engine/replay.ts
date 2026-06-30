import { mulberry32, type RNG } from "./rng";
import { buildPopulation, clamp01 } from "./population";
import { airMove, boardDelta, fastForwardFired } from "./seatRuntime";
import { SEATS } from "./seats";
import { FIRE } from "./constants";
import type { Character, Household, MoveLogEntry, SeatRunState, StatKey } from "./types";

export function freshCharacter(): Character {
  return { money: 0, fame: 0, power: 0, clout: 0, doctrine: 0, orthodoxy: 0 };
}

function addStat(character: Character, key: StatKey, amt: number): Character {
  const cap = key === "money" ? 99 : 100;
  return { ...character, [key]: Math.min(cap, character[key] + amt) };
}

export interface ReplayState {
  population: Household[];
  character: Character;
  seatRuns: Record<string, SeatRunState>;
  rng: RNG; // left advanced exactly where the log ends, so live play can continue from here
}

/**
 * Deterministically reconstructs game state from a seed + ordered move list. This is the same
 * mechanism a server would use to verify a submitted score (CLAUDE.md §5: the client submits
 * seed + moves, never a raw score) and what powers localStorage save/load in M1.
 */
export function replay(seed: number, moveLog: MoveLogEntry[]): ReplayState {
  const rng = mulberry32(seed);
  let population = buildPopulation(rng);
  let character = freshCharacter();
  const seatRuns: Record<string, SeatRunState> = {};

  for (const entry of moveLog) {
    const cfg = SEATS[entry.seatId];
    if (!cfg) continue;

    let run = seatRuns[entry.seatId];
    if (!run) {
      run = { turn: 0, score: 0, board: 55, fired: false, ended: false };
      seatRuns[entry.seatId] = run;
      if (cfg.mode === "vote") {
        const startSupport = clamp01(character.fame * 0.0026 + character.money * 0.0016);
        population = population.map((h) => ({
          ...h,
          vote: clamp01(startSupport + 0.22 * clamp01(0.5 * (1 - h.econ) + 0.5 * (1 - h.civ))),
        }));
      }
    }
    if (run.fired || run.ended) continue;

    const air = airMove(cfg, population, entry.move, entry.dialValue, rng);
    population = air.population;
    run.score += air.scoreGain;
    character = addStat(character, cfg.stat, air.statGain);

    const delta = boardDelta(entry.move.type, air.capDeltaPct);
    run.board = Math.max(0, Math.min(100, run.board + delta));

    if (run.board < FIRE) {
      population = fastForwardFired(cfg, population, run.turn, rng);
      run.fired = true;
      run.ended = true;
    } else if (run.turn + 1 >= cfg.turns.length) {
      run.ended = true;
    } else {
      run.turn += 1;
    }
  }

  return { population, character, seatRuns, rng };
}
