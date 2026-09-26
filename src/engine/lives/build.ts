import type { BackgroundProfile, SeatConfig } from "../types";
import { CIV_LIVES, ECON_LIVES } from "../constants";

/** [protect, capture] pull per turn — the same escalation every hand-built seat uses. */
const PULLS: [number, number][] = [
  [0.26, 0.55],
  [0.3, 0.68],
  [0.3, 0.76],
  [0.32, 0.8],
  [0.3, 0.84],
  [0.3, 0.88],
  [0.32, 0.93],
];

/** [year, headline, protect option, capture option, capture glyph?] */
export type TurnSpec = [number, string, string, string, string?];

export interface LifeSpec {
  id: string;
  protagonist: string;
  dossierTag: string;
  householdName: string;
  location: string;
  tagline: string;
  description: string;
  perspective: string;
  closingAddendum: string;
  seat: {
    title: string;
    role: string;
    mode?: "extract" | "attn";
    color: string;
    scoreLabel: string;
    dial: [string, string];
    dialNote: string;
    board: string;
    firedTitle?: string;
    firedBody: string;
    pressure: [string, string];
    ranks: [string, string][];
    intro: string[];
    introCta: string;
    actLabel?: string;
    capture: string;
    protect: string;
    outLabel: string;
    fired: string;
    ended: string;
    turns: TurnSpec[];
  };
}

export interface Life {
  background: BackgroundProfile;
  seat: SeatConfig;
}

export function life(spec: LifeSpec): Life {
  const s = spec.seat;
  const mode = s.mode ?? "extract";
  if (s.turns.length !== PULLS.length) throw new Error(`${spec.id}: expected ${PULLS.length} turns`);
  if (s.ranks.length !== 6) throw new Error(`${spec.id}: expected 6 ranks`);

  const seat: SeatConfig = {
    id: spec.id,
    title: s.title,
    role: s.role,
    mode,
    stat: "money",
    statScale: 0.06,
    sideStats: { fame: 0.018 },
    scoreColor: s.color,
    litColor: mode === "attn" ? "#F2C46D" : "#E8A24A",
    scoreLabel: s.scoreLabel,
    litLabel: mode === "attn" ? "still reads past the headline" : "still a stable living",
    lives: mode === "attn" ? CIV_LIVES : ECON_LIVES,
    dial: s.dial,
    dialNote: s.dialNote,
    archetype: s.title,
    actLabel: s.actLabel ?? "DECIDE",
    boardLabel: s.board,
    firedTitle: s.firedTitle ?? "REPLACED",
    firedBody: s.firedBody,
    boardPressure: s.pressure,
    ranks: s.ranks.map(([title, perk]) => ({ title, perk })),
    intro: s.intro,
    introCta: s.introCta,
    resultCapture: s.capture,
    resultProtect: s.protect,
    outLabel: s.outLabel,
    closingQuestion: { fired: s.fired, ended: s.ended },
    turns: s.turns.map(([y, ch, protect, capture, glyph], i) => ({
      y,
      ch,
      o: [
        { id: "a", name: protect, glyph: "◍", type: "protect", pull: PULLS[i][0] },
        { id: "b", name: capture, glyph: glyph ?? "$", type: "capture", pull: PULLS[i][1] },
      ],
    })),
  };

  const background: BackgroundProfile = {
    id: spec.id,
    seats: [spec.id],
    protagonist: spec.protagonist,
    dossierTag: spec.dossierTag,
    moneyUnit: "K",
    householdName: spec.householdName,
    location: spec.location,
    tagline: spec.tagline,
    description: spec.description,
    perspective: spec.perspective,
    closingAddendum: spec.closingAddendum,
  };

  return { background, seat };
}
