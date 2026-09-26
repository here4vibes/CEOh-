import type { BackgroundProfile, SeatConfig, StatKey } from "../types";

/** [protect, capture] pull per turn — the escalation every story shares. */
const PULLS: [number, number][] = [
  [0.26, 0.55],
  [0.3, 0.68],
  [0.3, 0.76],
  [0.32, 0.8],
  [0.3, 0.84],
  [0.3, 0.88],
  [0.32, 0.93],
];

/** [what you choose, what happens because you chose it] */
export type Choice = [string, string];

/** [year, headline, the restraint choice, the choice the number rewards, glyph for that choice] */
export type TurnSpec = [number, string, Choice, Choice, string?];

/** [what it's about, thriving, getting by, struggling, gone dark]. The dark line follows "The Reyeses — ". */
export type Situation = [string, string, string, string, string];

export interface LifeSpec {
  id: string;
  protagonist: string;
  dossierTag: string;
  householdName: string;
  location: string;
  tagline: string;
  description: string;
  /** First person: the case for how they see things, argued as they'd argue it. */
  perspective: string;
  closingAddendum: string;
  seat: {
    title: string;
    role: string;
    mode?: "extract" | "attn";
    stat?: StatKey;
    statScale?: number;
    sideStats?: Partial<Record<StatKey, number>>;
    color: string;
    scoreLabel: string;
    /** What a lit household still has; defaults by mode. */
    litLabel?: string;
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
    outLabel: string;
    /** Closing question after being replaced. */
    fired: string;
    /** Closing question after lasting to the end. */
    ended: string;
    people: Situation[];
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
  const expect = (ok: boolean, what: string) => {
    if (!ok) throw new Error(`${spec.id}: ${what}`);
  };
  expect(s.turns.length === PULLS.length, `expected ${PULLS.length} turns`);
  expect(s.ranks.length === 6, "expected 6 ranks");
  expect(s.people.length === 6, "expected 6 situations");
  expect(s.intro.length === 4, "expected 4 intro paragraphs");

  const seat: SeatConfig = {
    id: spec.id,
    title: s.title,
    role: s.role,
    mode,
    stat: s.stat ?? "money",
    statScale: s.statScale ?? 0.06,
    sideStats: s.sideStats ?? { fame: 0.018 },
    scoreColor: s.color,
    litColor: mode === "attn" ? "#F2C46D" : "#E8A24A",
    scoreLabel: s.scoreLabel,
    litLabel: s.litLabel ?? (mode === "attn" ? "still reads past the headline" : "still a stable living"),
    lives: s.people.map(([label, ...tiers]) => [label, tiers as [string, string, string, string]]),
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
    outLabel: s.outLabel,
    closingQuestion: { fired: s.fired, ended: s.ended },
    turns: s.turns.map(([y, ch, [protect, protectResult], [capture, captureResult], glyph], i) => ({
      y,
      ch,
      o: [
        { id: "a", name: protect, glyph: "◍", type: "protect", pull: PULLS[i][0], result: protectResult },
        { id: "b", name: capture, glyph: glyph ?? "$", type: "capture", pull: PULLS[i][1], result: captureResult },
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
