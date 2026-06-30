import { create } from "zustand";
import { mulberry32, randomSeed, type RNG } from "../engine/rng";
import { buildPopulation, clamp01 } from "../engine/population";
import { airMove, boardDelta, fastForwardFired, type AirResult } from "../engine/seatRuntime";
import { freshCharacter, replay } from "../engine/replay";
import { SEATS } from "../engine/seats";
import { FIRE } from "../engine/constants";
import { loadSave, writeSave } from "./persistence";
import type { Character, Household, MoveLogEntry, PresetOption, SeatRunState, StatKey } from "../engine/types";

function addStat(character: Character, key: StatKey, amt: number): Character {
  const cap = key === "money" ? 99 : 100;
  return { ...character, [key]: Math.min(cap, character[key] + amt) };
}

function freshRun(): SeatRunState {
  return { turn: 0, score: 0, board: 55, fired: false, ended: false };
}

interface GameStore {
  seed: number;
  moveLog: MoveLogEntry[];
  population: Household[];
  character: Character;
  seatRuns: Record<string, SeatRunState>;
  rng: RNG;

  init: () => void;
  newGame: (seed?: number) => void;
  /** Resolves one move: updates population/character/score/board, persists. Does NOT advance the
   *  turn or apply the replacement rule — call `advance` once the player has seen the consequence. */
  resolveMove: (seatId: string, move: PresetOption, dialValue: number) => AirResult;
  /** Applies the board-confidence replacement rule and turn progression after a move's consequence
   *  has been shown, mirroring the prototype's two-step "see it, then advance" flow. */
  advance: (seatId: string) => SeatRunState;
}

export const useGameStore = create<GameStore>((set, get) => ({
  seed: 0,
  moveLog: [],
  population: [],
  character: freshCharacter(),
  seatRuns: {},
  rng: mulberry32(0),

  init: () => {
    const saved = loadSave();
    if (saved) {
      const state = replay(saved.seed, saved.moveLog);
      set({
        seed: saved.seed,
        moveLog: saved.moveLog,
        population: state.population,
        character: state.character,
        seatRuns: state.seatRuns,
        rng: state.rng,
      });
      return;
    }
    get().newGame(randomSeed());
  },

  newGame: (seed = randomSeed()) => {
    const rng = mulberry32(seed);
    const population = buildPopulation(rng);
    set({ seed, moveLog: [], population, character: freshCharacter(), seatRuns: {}, rng });
    writeSave({ seed, moveLog: [] });
  },

  resolveMove: (seatId, move, dialValue) => {
    const cfg = SEATS[seatId];
    if (!cfg) throw new Error(`Unknown seat: ${seatId}`);

    const { rng } = get();
    let { population, character, seatRuns } = get();

    let run = seatRuns[seatId];
    if (!run) {
      run = freshRun();
      if (cfg.mode === "vote") {
        const startSupport = clamp01(character.fame * 0.0026 + character.money * 0.0016);
        population = population.map((h) => ({
          ...h,
          vote: clamp01(startSupport + 0.22 * clamp01(0.5 * (1 - h.econ) + 0.5 * (1 - h.civ))),
        }));
      }
    }

    const result = airMove(cfg, population, move, dialValue, rng);
    population = result.population;
    character = addStat(character, cfg.stat, result.statGain);

    const delta = boardDelta(move.type, result.capDeltaPct);
    const nextRun: SeatRunState = {
      ...run,
      board: Math.max(0, Math.min(100, run.board + delta)),
      score: run.score + result.scoreGain,
    };

    const moveLog = [...get().moveLog, { seatId, turnIndex: run.turn, move, dialValue }];
    seatRuns = { ...seatRuns, [seatId]: nextRun };

    set({ population, character, seatRuns, moveLog, rng });
    writeSave({ seed: get().seed, moveLog });

    return result;
  },

  advance: (seatId) => {
    const cfg = SEATS[seatId];
    if (!cfg) throw new Error(`Unknown seat: ${seatId}`);

    const { rng } = get();
    let { population, seatRuns } = get();
    const run = seatRuns[seatId] ?? freshRun();
    const nextRun: SeatRunState = { ...run };

    if (nextRun.board < FIRE) {
      population = fastForwardFired(cfg, population, nextRun.turn, rng);
      nextRun.fired = true;
      nextRun.ended = true;
    } else if (nextRun.turn + 1 >= cfg.turns.length) {
      nextRun.ended = true;
    } else {
      nextRun.turn += 1;
    }

    seatRuns = { ...seatRuns, [seatId]: nextRun };
    set({ population, seatRuns, rng });

    return nextRun;
  },
}));
