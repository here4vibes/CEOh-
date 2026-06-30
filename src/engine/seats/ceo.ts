import type { SeatConfig } from "../types";
import { ECON_LIVES } from "../constants";

const GREEN = "#46B17F";
const WARM = "#E8A24A";

/** Ported from reference/ce-oh-the-climb.jsx — port, don't reinvent (CLAUDE.md §3). */
export const CEO: SeatConfig = {
  id: "ceo",
  title: "The CEO",
  role: "Chief Executive",
  mode: "extract",
  stat: "money",
  statScale: 0.06,
  scoreColor: GREEN,
  litColor: WARM,
  scoreLabel: "SHARE PRICE",
  litLabel: "still a stable living",
  lives: ECON_LIVES,
  dial: ["reinvest", "extract"],
  dialNote: "the Street rewards extraction",
  archetype: "the CEO under the new rule that the share price is the only duty",
  ranks: [
    { title: "CEO, regional", perk: "a target on your back" },
    { title: "CEO, mid-cap", perk: "options that vest when it climbs" },
    { title: "CEO, large-cap", perk: "a jet and an adoring comp committee" },
    { title: "CEO, S&P 500", perk: "your face on the magazine" },
    { title: "Chairman & CEO", perk: "you pick the board now" },
    { title: "Legend", perk: "they teach your playbook in B-school" },
  ],
  resultCapture: "The Street loved it. “You’re fired,” to a few thousand. Stock popped.",
  resultProtect: "Analysts called it undisciplined. The stock slid; the board noticed.",
  outLabel: "FALLOUT THIS QUARTER",
  turns: [
    {
      y: 1981,
      ch: "A NEW DOCTRINE · MAXIMIZE THE SHARE PRICE",
      o: [
        { id: "a", name: "Reinvest in the plant", glyph: "◍", type: "protect", pull: 0.26 },
        { id: "b", name: "The first buyback", glyph: "$", type: "capture", pull: 0.55 },
      ],
    },
    {
      y: 1985,
      ch: "A RAIDER IS CIRCLING",
      o: [
        { id: "a", name: "Defend the jobs", glyph: "◍", type: "protect", pull: 0.3 },
        { id: "b", name: "Cut deep to fight him off", glyph: "✂", type: "capture", pull: 0.7 },
      ],
    },
    {
      y: 1991,
      ch: "THE PLANT COSTS LESS OVERSEAS",
      o: [
        { id: "a", name: "Keep it in the town", glyph: "◍", type: "protect", pull: 0.3 },
        { id: "b", name: "Move it offshore", glyph: "✈", type: "capture", pull: 0.76 },
      ],
    },
    {
      y: 1997,
      ch: "DOWNSIZE AND DISTRIBUTE",
      o: [
        { id: "a", name: "Profit-share with workers", glyph: "◍", type: "protect", pull: 0.32 },
        { id: "b", name: "Layoffs, raise the dividend", glyph: "✂", type: "capture", pull: 0.82 },
      ],
    },
    {
      y: 2001,
      ch: "THE DIP · PROTECT THE QUARTER",
      o: [
        { id: "a", name: "Hold headcount", glyph: "◍", type: "protect", pull: 0.3 },
        { id: "b", name: "Cut 10%, beat estimates", glyph: "✂", type: "capture", pull: 0.84 },
      ],
    },
    {
      y: 2008,
      ch: "THE CRASH · A BAILOUT ARRIVES",
      o: [
        { id: "a", name: "Keep everyone, take the hit", glyph: "◍", type: "protect", pull: 0.3 },
        { id: "b", name: "Layoffs + retention bonuses", glyph: "$", type: "capture", pull: 0.9 },
      ],
    },
    {
      y: 2013,
      ch: "RECORD PROFITS",
      o: [
        { id: "a", name: "Raise the floor wage", glyph: "◍", type: "protect", pull: 0.32 },
        { id: "b", name: "Record buyback", glyph: "$", type: "capture", pull: 0.92 },
      ],
    },
    {
      y: 2018,
      ch: "AUTOMATE · CONTRACT OUT",
      o: [
        { id: "a", name: "Hire them as staff", glyph: "◍", type: "protect", pull: 0.3 },
        { id: "b", name: "Automate, classify as gig", glyph: "⚙", type: "capture", pull: 0.92 },
      ],
    },
    {
      y: 2020,
      ch: "A HARD YEAR · STOCK SOARS ANYWAY",
      o: [
        { id: "a", name: "Hazard pay, stay safe", glyph: "◍", type: "protect", pull: 0.32 },
        { id: "b", name: "Cut hours, ride the rally", glyph: "$", type: "capture", pull: 0.94 },
      ],
    },
  ],
};
