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
  intro: [
    "You've just been handed the corner office. Regional operation — a thousand employees, plants in three states, a board that wants to see growth.",
    "Those lights on the wall are them. Workers, retirees, families in towns that exist because of this company. Right now they're doing fine.",
    "The board gave you one number to move: the share price. There's a dial between reinvesting and extracting. The Street rewards extraction. The board is watching the dial.",
    "The people on the wall are watching too — but quietly. Their costs don't show up until next quarter.",
  ],
  resultCapture: "The Street loved it. “You’re fired,” to a few thousand. Stock popped.",
  resultProtect: "Analysts called it undisciplined. The stock slid; the board noticed.",
  outLabel: "FALLOUT THIS QUARTER",
  closingQuestion: {
    fired: "Someone else came in and did it anyway. What would have had to change for that not to be an option?",
    ended: "The numbers went up. Did anyone's life get better?",
  },
  turns: [
    {
      y: 1981,
      ch: "A NEW DOCTRINE · THE SHARE PRICE IS THE ONLY DUTY",
      o: [
        { id: "a", name: "Run it like workers are the point", glyph: "◍", type: "protect", pull: 0.26 },
        { id: "b", name: "The first buyback", glyph: "$", type: "capture", pull: 0.55 },
      ],
    },
    {
      y: 1985,
      ch: "A RAIDER IS CIRCLING · HE WANTS YOUR BEST DIVISIONS",
      o: [
        { id: "a", name: "Tell the board the jobs stay", glyph: "◍", type: "protect", pull: 0.3 },
        { id: "b", name: "Cut deep, strip it clean", glyph: "✂", type: "capture", pull: 0.7 },
      ],
    },
    {
      y: 1991,
      ch: "THE PLANT COSTS LESS IN MEXICO · THE ANALYSTS ARE CLEAR",
      o: [
        { id: "a", name: "The town needs it to stay", glyph: "◍", type: "protect", pull: 0.3 },
        { id: "b", name: "Move it offshore, take the credit", glyph: "✈", type: "capture", pull: 0.76 },
      ],
    },
    {
      y: 1997,
      ch: "THE BEST DECADE IN AMERICAN BUSINESS",
      o: [
        { id: "a", name: "Share it with the floor", glyph: "◍", type: "protect", pull: 0.32 },
        { id: "b", name: "The Street wants to see the number", glyph: "✂", type: "capture", pull: 0.82 },
      ],
    },
    {
      y: 2001,
      ch: "THE DOT-COM CRASH · PROTECT THE QUARTER",
      o: [
        { id: "a", name: "Don't use the people as the buffer", glyph: "◍", type: "protect", pull: 0.3 },
        { id: "b", name: "Cut 12%. Beat every estimate.", glyph: "✂", type: "capture", pull: 0.84 },
      ],
    },
    {
      y: 2008,
      ch: "THE CRASH · CONGRESS IS WRITING THE CHECK",
      o: [
        { id: "a", name: "Keep everyone whole, take the hit", glyph: "◍", type: "protect", pull: 0.3 },
        { id: "b", name: "Layoffs for them, bonuses for us", glyph: "$", type: "capture", pull: 0.9 },
      ],
    },
    {
      y: 2013,
      ch: "THE BEST YEAR IN COMPANY HISTORY",
      o: [
        { id: "a", name: "Let it reach the people who made it", glyph: "◍", type: "protect", pull: 0.32 },
        { id: "b", name: "Every dollar back to the shareholders", glyph: "$", type: "capture", pull: 0.92 },
      ],
    },
    {
      y: 2018,
      ch: "AUTOMATE · THE LABOR COST IS THE PROBLEM",
      o: [
        { id: "a", name: "Keep them on with full benefits", glyph: "◍", type: "protect", pull: 0.3 },
        { id: "b", name: "Automate it, classify them as gig", glyph: "⚙", type: "capture", pull: 0.92 },
      ],
    },
    {
      y: 2020,
      ch: "A HARD YEAR · THE MARKET DOESN'T CARE",
      o: [
        { id: "a", name: "Hazard pay, extended sick leave", glyph: "◍", type: "protect", pull: 0.32 },
        { id: "b", name: "They'll stay for the hours. The stock won't wait.", glyph: "$", type: "capture", pull: 0.94 },
      ],
    },
  ],
};
