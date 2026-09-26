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
  sideStats: { fame: 0.018 },
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
        { id: "a", name: "Run it like workers are the point", glyph: "◍", type: "protect", pull: 0.26, result: "You raised wages and kept the pension. The analysts called you 'old-fashioned.'" },
        { id: "b", name: "The first buyback", glyph: "$", type: "capture", pull: 0.55, result: "The buyback lifted the stock 6%. The money for the new plant went to shareholders instead." },
      ],
    },
    {
      y: 1985,
      ch: "A RAIDER IS CIRCLING · HE WANTS YOUR BEST DIVISIONS",
      o: [
        { id: "a", name: "Tell the board the jobs stay", glyph: "◍", type: "protect", pull: 0.3, result: "The jobs stayed. The raider bought 9% of your stock and started calling your board members at home." },
        { id: "b", name: "Cut deep, strip it clean", glyph: "✂", type: "capture", pull: 0.7, result: "You sold two divisions for parts. Four thousand jobs went with them, and the stock doubled." },
      ],
    },
    {
      y: 1991,
      ch: "THE PLANT COSTS LESS IN MEXICO · THE ANALYSTS ARE CLEAR",
      o: [
        { id: "a", name: "The town needs it to stay", glyph: "◍", type: "protect", pull: 0.3, result: "The plant stayed in Ohio. Your margins trail every competitor who moved." },
        { id: "b", name: "Move it offshore, take the credit", glyph: "✈", type: "capture", pull: 0.76, result: "The plant moved to Juárez. The town's high school lost a third of its students in five years." },
      ],
    },
    {
      y: 1997,
      ch: "THE BEST DECADE IN AMERICAN BUSINESS",
      o: [
        { id: "a", name: "Share it with the floor", glyph: "◍", type: "protect", pull: 0.32, result: "Profit-sharing checks went to the floor. The Street called it 'margin leakage.'" },
        { id: "b", name: "The Street wants to see the number", glyph: "✂", type: "capture", pull: 0.82, result: "Record profits, flat wages. Your bonus was bigger than the plant's payroll." },
      ],
    },
    {
      y: 2001,
      ch: "THE DOT-COM CRASH · PROTECT THE QUARTER",
      o: [
        { id: "a", name: "Don't use the people as the buffer", glyph: "◍", type: "protect", pull: 0.3, result: "You cut your own pay and froze hiring. The stock missed by a penny and fell 11%." },
        { id: "b", name: "Cut 12%. Beat every estimate.", glyph: "✂", type: "capture", pull: 0.84, result: "Twelve percent cut, every estimate beaten. The people left are doing two jobs." },
      ],
    },
    {
      y: 2008,
      ch: "THE CRASH · CONGRESS IS WRITING THE CHECK",
      o: [
        { id: "a", name: "Keep everyone whole, take the hit", glyph: "◍", type: "protect", pull: 0.3, result: "Nobody lost a job. You lost a quarter of your stock value, and the board lost patience." },
        { id: "b", name: "Layoffs for them, bonuses for us", glyph: "$", type: "capture", pull: 0.9, result: "Five thousand layoffs, then retention bonuses for the executive team. The bailout covered both." },
      ],
    },
    {
      y: 2013,
      ch: "THE BEST YEAR IN COMPANY HISTORY",
      o: [
        { id: "a", name: "Let it reach the people who made it", glyph: "◍", type: "protect", pull: 0.32, result: "A raise for everyone on the floor. An activist investor bought a stake the next week." },
        { id: "b", name: "Every dollar back to the shareholders", glyph: "$", type: "capture", pull: 0.92, result: "Every dollar went back to shareholders. The workers read about the record year in the paper." },
      ],
    },
    {
      y: 2018,
      ch: "AUTOMATE · THE LABOR COST IS THE PROBLEM",
      o: [
        { id: "a", name: "Keep them on with full benefits", glyph: "◍", type: "protect", pull: 0.3, result: "Everyone kept their job and their benefits. The consultants said you were 'behind the curve.'" },
        { id: "b", name: "Automate it, classify them as gig", glyph: "⚙", type: "capture", pull: 0.92, result: "The warehouse runs on robots and contractors now. The contractors don't get health insurance." },
      ],
    },
    {
      y: 2020,
      ch: "A HARD YEAR · THE MARKET DOESN'T CARE",
      o: [
        { id: "a", name: "Hazard pay, extended sick leave", glyph: "◍", type: "protect", pull: 0.32, result: "Hazard pay and sick leave. The stock lagged the index. Nobody in the building died." },
        { id: "b", name: "They'll stay for the hours. The stock won't wait.", glyph: "$", type: "capture", pull: 0.94, result: "The stock hit a record. Three workers at the Memphis plant died in April." },
      ],
    },
  ],
};
