/** How a seat's "capture" actions hurt the population. */
export type Mode = "attn" | "extract" | "vote";

export type MoveType = "capture" | "protect";

export interface Household {
  att: number; // attention captured (attn-mode seats)
  econ: number; // economic standing (extract-mode seats)
  civ: number; // civic capacity (attn/vote-mode seats' "lit" dimension)
  vote: number; // support for the Outsider (vote-mode seats)
}

export type StatKey = "money" | "fame" | "power" | "clout" | "doctrine" | "orthodoxy";

export type Character = Record<StatKey, number>;

export interface PresetOption {
  id: string;
  name: string;
  glyph: string;
  type: MoveType;
  pull: number; // 0..1, how aggressively this option pulls the dial
}

export interface SeatTurn {
  y: number; // year/step shown in the chyron
  ch: string; // headline
  o: PresetOption[]; // the two (or more) preset moves offered this turn
}

export interface RankTier {
  title: string;
  perk: string;
}

export interface SeatConfig {
  id: string;
  title: string;
  role: string;
  mode: Mode;
  stat: StatKey;
  statScale: number;
  scoreColor: string;
  litColor: string;
  scoreLabel: string;
  litLabel: string;
  lives: [string, [string, string, string, string]][];
  dial: [string, string];
  dialNote: string;
  archetype: string;
  ranks: RankTier[];
  resultCapture: string;
  resultProtect: string;
  outLabel: string;
  turns: SeatTurn[];
  closingQuestion: { fired: string; ended: string; electionLost?: string };
  /** Politician only: after this turn index, check avg vote against threshold. */
  electionGate?: { turnIndex: number; threshold: number };
}

export interface MoveLogEntry {
  seatId: string;
  turnIndex: number;
  move: PresetOption;
  dialValue: number;
}

export interface SeatRunState {
  turn: number;
  score: number;
  board: number;
  fired: boolean;
  ended: boolean;
  electionLost: boolean;
}

export interface SeatResult {
  seatId: string;
  rank: string;
  lit: number;
  fired: boolean;
}
