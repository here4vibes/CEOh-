import type { SeatConfig } from "../types";
import { CIV_LIVES } from "../constants";

const RED = "#D9544D";
const BLUE = "#6FA8C9";

/** Ported from reference/ce-oh-the-climb.jsx — port, don't reinvent (CLAUDE.md §3). */
export const POLITICIAN: SeatConfig = {
  id: "politician",
  title: "The Politician",
  role: "Candidate",
  mode: "vote",
  stat: "power",
  statScale: 1.4,
  sideStats: { fame: 0.45 },
  boardLabel: "PARTY",
  firedTitle: "DROPPED",
  firedBody: "The party machine withdrew its support. Someone else stepped up with the same message and fewer principles — and the movement went on without you.",
  boardPressure: [
    "The donor network sent a message. They want to see different numbers at the next rally.",
    "The party chair called. They're watching the next event very closely.",
  ],
  scoreColor: RED,
  litColor: BLUE,
  scoreLabel: "SUPPORT",
  litLabel: "still votes on reality",
  lives: CIV_LIVES,
  dial: ["persuade", "enrage"],
  dialNote: "a precarious, distracted public is easy to move",
  archetype: "the gilded outsider who runs against the wreckage he helped make",
  ranks: [
    { title: "Candidate", perk: "a podium and a slogan" },
    { title: "Front-Runner", perk: "the party falls in line" },
    { title: "Nominee", perk: "the stage is yours" },
    { title: "President-Elect", perk: "a country holding its breath" },
    { title: "President", perk: "the most powerful seat there is" },
    { title: "Two-Term", perk: "they will never be rid of you" },
  ],
  outLabel: "TURNED OUT TONIGHT",
  closingQuestion: {
    fired: "Someone else came in and did it anyway. What would have had to change for that not to be an option?",
    ended: "Every call was defensible. No one in the building decided this. You're in the building now — what changes?",
    electionLost: "You lost. What did the people who almost voted for you need — and did they need it before you started asking?",
  },
  /** Election Day is turn index 4. Clear 50% avg vote to proceed to "IN OFFICE". */
  electionGate: { turnIndex: 4, threshold: 0.5 },
  turns: [
    {
      y: 0,
      ch: "A GILDED ESCALATOR · THE OUTSIDER DESCENDS",
      o: [
        { id: "a", name: "A ten-point plan", glyph: "◍", type: "protect", pull: 0.3, result: "The plan was solid. Nobody clipped it. The cable networks ran the other guy all night." },
        { id: "b", name: "“The system is rigged”", glyph: "⚡", type: "capture", pull: 0.7, result: "'Rigged' trended for three days. People who'd lost the most heard their own anger said out loud." },
      ],
    },
    {
      y: 1,
      ch: "THE PRIMARY · ELDERS VS THE BASE",
      o: [
        { id: "a", name: "Build a real coalition", glyph: "◍", type: "protect", pull: 0.32, result: "The coalition came together slowly. The base called you 'establishment.'" },
        { id: "b", name: "Nickname your rivals", glyph: "⚡", type: "capture", pull: 0.8, result: "The nicknames stuck. Your rivals spent the primary answering to them." },
      ],
    },
    {
      y: 2,
      ch: "THE DEBATE · FACTS VS DOMINANCE",
      o: [
        { id: "a", name: "Tell them a hard truth", glyph: "◍", type: "protect", pull: 0.3, result: "You told the truth about what it would take. The instant polls called it a loss." },
        { id: "b", name: "Dominate, never concede", glyph: "⚡", type: "capture", pull: 0.85, result: "You never conceded a point. Nobody remembered a fact, and everybody remembered you." },
      ],
    },
    {
      y: 3,
      ch: "THE RALLY · MAKE IT LIKE IT WAS",
      o: [
        { id: "a", name: "Speak to everyone", glyph: "◍", type: "protect", pull: 0.32, result: "You spoke to the whole state. The crowd was polite and half the size." },
        { id: "b", name: "“Take it back”", glyph: "↺", type: "capture", pull: 0.9, result: "'Take it back' ran on every channel. The crowd chanted it all the way to the cars." },
      ],
    },
    {
      y: 4,
      ch: "ELECTION DAY · TURNOUT IS EVERYTHING",
      o: [
        { id: "a", name: "Persuade the middle", glyph: "◍", type: "protect", pull: 0.3, result: "You made the case to the middle. Turnout in the counties you needed was soft." },
        { id: "b", name: "Rage drives turnout", glyph: "⚡", type: "capture", pull: 0.92, result: "Rage drove turnout. Counties that hadn't voted in decades came out in the rain." },
      ],
    },
    {
      y: 5,
      ch: "IN OFFICE · GOVERN, OR JUST WIN AGAIN",
      o: [
        { id: "a", name: "Actually deliver", glyph: "◍", type: "protect", pull: 0.34, result: "You delivered a bill that fixed something real. The base asked where the fight went." },
        { id: "b", name: "Govern by grievance", glyph: "⚡", type: "capture", pull: 0.9, result: "Every day was a new enemy. Nothing got built, and the ratings never dipped." },
      ],
    },
  ],
};
