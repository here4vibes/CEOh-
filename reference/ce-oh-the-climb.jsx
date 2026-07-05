import React, { useState, useEffect, useMemo, useRef } from "react";

// CE Oh! — THE CLIMB
// One person. Six chairs. One country that remembers.
// Money and fame extracted in one seat fund the next. The public you hollow out becomes
// the electorate that lifts you. Any seat → any seat; the character and the country persist.

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500&display=swap');`;
const KF = `
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
@keyframes flick{0%,100%{opacity:1}50%{opacity:.55}}
@keyframes rise{0%{opacity:0;transform:translateY(14px)}100%{opacity:1;transform:translateY(0)}}
@keyframes glowpulse{0%,100%{box-shadow:0 0 14px var(--g)}50%{box-shadow:0 0 30px var(--g)}}
@keyframes sweep{0%{transform:translateX(-120%)}100%{transform:translateX(120%)}}
@keyframes ring{0%{box-shadow:0 0 0 0 #E23B2E}100%{box-shadow:0 0 0 3px transparent}}
`;
const C = {
  ink: "#0A0E12", panel: "#121A22", panel2: "#192430", edge: "rgba(231,227,216,0.09)",
  phosphor: "#E7E3D8", muted: "#6B7B86", air: "#E23B2E", gold: "#F6C760",
  amber: "#F0A92C", ember: "#5FB6C9", green: "#46B17F", warm: "#E8A24A",
  dark: [22, 28, 35],
};
const COLS = 16, ROWS = 7, N = COLS * ROWS, FIRE = 25, DEATH = 0.12;
const THRESH = [0, 18, 42, 72, 108, 150];
const SUR = ["Reyes", "Okafor", "Nguyen", "Halloran", "Mbeki", "Castellanos", "Park", "Goldberg", "Petrova", "Osei", "Lindqvist", "Bianchi", "Haddad", "Yamamoto", "Delgado", "Friel", "Nakamura", "Abara", "Sokolov", "Bauer", "Romano", "Khan", "Ferreira", "Olsen", "Vargas", "Tran", "Cohen", "Adeyemi", "Marek", "Russo"];
const CIV_LIVES = [["the PTA", ["chairs the PTA", "keeps meaning to make the PTA", "shares PTA posts", "couldn't name a board member"]], ["the rezoning", ["reads every notice", "skims the notices", "reacts to zoning posts", "didn't know about the rezoning"]], ["the city paper", ["reads it cover to cover", "reads the headlines", "reads the comments", "gets it from the feed"]], ["the block", ["knows the whole block", "waves at the block", "follows the block group", "hasn't met next door"]], ["elections", ["votes every local race", "votes the big ones", "means to register", "skipped it again"]], ["town hall", ["speaks at town hall", "sits in", "watches the clip", "never heard it happened"]], ["the facts", ["checks before sharing", "mostly trusts the source", "shares the headline", "believes the loudest voice"]], ["the meal train", ["runs the meal train", "pitches in sometimes", "boosts the post", "missed that they needed help"]]];
const ECON_LIVES = [["the mortgage", ["pays it easily", "still covers it", "behind on it", "lost the house"]], ["benefits", ["full family benefits", "a high-deductible plan", "skips the doctor", "no coverage"]], ["the kids", ["college fund growing", "saving what they can", "the kid took loans", "the kid skipped college"]], ["downtown", ["thriving", "a few empty storefronts", "half-shuttered", "the town is hollowed out"]], ["retirement", ["pension on track", "a thin 401(k)", "cashed it out early", "working past 70"]], ["the shift", ["steady full-time", "hours getting cut", "two gig jobs now", "no steady work"]], ["the union", ["a strong union job", "the union's gutted", "no leverage", "misclassified as a contractor"]], ["the house", ["paid down", "refinanced twice", "underwater", "renting a room"]]];

function hexRgb(h) { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function mix(a, b, t) { return [Math.round(a[0] + (b[0] - a[0]) * t), Math.round(a[1] + (b[1] - a[1]) * t), Math.round(a[2] + (b[2] - a[2]) * t)]; }
function rgbs(a) { return `rgb(${a[0]},${a[1]},${a[2]})`; }
function cl(x) { return Math.max(0, Math.min(1, x)); }
function tierOf(c) { return c >= 0.55 ? 0 : c >= 0.30 ? 1 : c >= DEATH ? 2 : 3; }
function usePRM() { const [r, setR] = useState(false); useEffect(() => { const m = window.matchMedia("(prefers-reduced-motion: reduce)"); setR(m.matches); const h = () => setR(m.matches); m.addEventListener?.("change", h); return () => m.removeEventListener?.("change", h); }, []); return r; }

/* ── seats ── */
const SEATS = {
  economist: { id: "economist", title: "The Economist", role: "Economist", mode: "attn", stat: "orthodoxy", statScale: 0.8, sc: "#5FB0A6", lc: C.ember, scoreLabel: "ORTHODOXY", litLabel: "still weighs other ideas", lives: CIV_LIVES, dial: ["humble", "absolute"], dialNote: "certainty travels further than nuance", archetype: "the economist who made shareholder primacy common sense", ranks: [["Contrarian", "a controversial paper"], ["Tenured", "a school of followers"], ["Nobel Laureate", "the prize and the pulpit"], ["The Water", "it's just how things are now"]], resCap: "The idea spread. It stopped sounding like an opinion.", resPro: "Careful, fair — and quoted by no one.", out: "MINDS CLOSED",
    turns: [{ y: 1970, ch: "WHAT DO FIRMS OWE SOCIETY?", o: [["a", "Stakeholders & duty", "◍", "protect", .30], ["b", "Only the shareholder", "⚡", "capture", .65]] }, { y: 1976, ch: "TRAIN THE NEXT GENERATION", o: [["a", "Teach many schools", "◍", "protect", .30], ["b", "One school, repeated", "⚡", "capture", .72]] }, { y: 1981, ch: "ADVISE THE THRONE", o: [["a", "Counsel caution", "◍", "protect", .32], ["b", "Deregulate everything", "⚡", "capture", .80]] }, { y: 1990, ch: "IT'S JUST COMMON SENSE NOW", o: [["a", "Keep it contestable", "◍", "protect", .30], ["b", "Make it the water", "⚡", "capture", .85]] }] },
  counsel: { id: "counsel", title: "The Counsel", role: "General Counsel", mode: "attn", stat: "clout", statScale: 0.8, sc: "#B57BD6", lc: C.ember, scoreLabel: "INFLUENCE", litLabel: "still shares a common reality", lives: CIV_LIVES, dial: ["civic", "partisan"], dialNote: "an organized minority beats a diffuse majority", archetype: "the strategist of the Powell Memo, arming business to fight", ranks: [["Junior Counsel", "a memo nobody asked for"], ["General Counsel", "the boardroom listens"], ["Movement Architect", "a network of institutes"], ["Kingmaker", "you fund the next generation"]], resCap: "The machine grew another arm. The field tilted.", resPro: "Even-handed, and out-organized.", out: "GROUND CEDED",
    turns: [{ y: 1971, ch: "BUSINESS IS POLITICALLY NAKED", o: [["a", "Fund nonpartisan civics", "◍", "protect", .30], ["b", "Write the battle plan", "⚡", "capture", .60]] }, { y: 1973, ch: "FUND THE PIPELINE", o: [["a", "Back open inquiry", "◍", "protect", .30], ["b", "Found the institutes", "⚡", "capture", .70]] }, { y: 1980, ch: "CAPTURE THE LAW SCHOOLS", o: [["a", "Fund all viewpoints", "◍", "protect", .32], ["b", "Law & economics only", "⚡", "capture", .78]] }, { y: 1987, ch: "A MEDIA OF YOUR OWN", o: [["a", "Support public media", "◍", "protect", .30], ["b", "Build talk radio", "⚡", "capture", .85]] }] },
  judge: { id: "judge", title: "The Judge", role: "Judge", mode: "extract", stat: "doctrine", statScale: 0.42, sc: "#C98A3C", lc: C.warm, scoreLabel: "DOCTRINE", litLabel: "still has a fair shot", lives: ECON_LIVES, dial: ["scrutiny", "deference"], dialNote: "the new doctrine asks only about prices", archetype: "the jurist who narrowed antitrust to consumer prices alone", ranks: [["Clerk", "a sharp dissent"], ["Appellate Judge", "your opinions get cited"], ["The Standard", "your test is the law"], ["Architect", "a generation of mergers wave through"]], resCap: "Cleared. The doctrine held; the concentration grew.", resPro: "You blocked it — and got overturned.", out: "SHUT OUT",
    turns: [{ y: 1978, ch: "WHAT IS ANTITRUST FOR?", o: [["a", "Bigness itself is a harm", "◍", "protect", .30], ["b", "Only consumer prices matter", "⚡", "capture", .70]] }, { y: 1984, ch: "THE MERGER WAVE", o: [["a", "Block the megamerger", "◍", "protect", .30], ["b", "Wave them through", "⚡", "capture", .80]] }, { y: 1999, ch: "PLATFORM POWER", o: [["a", "Rein in the platform", "◍", "protect", .32], ["b", "Let it consolidate", "⚡", "capture", .85]] }, { y: 2010, ch: "TOO BIG TO FAIL", o: [["a", "Break them up", "◍", "protect", .30], ["b", "Bless the scale", "⚡", "capture", .88]] }] },
  ceo: { id: "ceo", title: "The CEO", role: "Chief Executive", mode: "extract", stat: "money", statScale: 0.06, sc: C.green, lc: C.warm, scoreLabel: "SHARE PRICE", litLabel: "still a stable living", lives: ECON_LIVES, dial: ["reinvest", "extract"], dialNote: "the Street rewards extraction", archetype: "the CEO under the new rule that the share price is the only duty", ranks: [["CEO, regional", "a target on your back"], ["CEO, mid-cap", "options that vest when it climbs"], ["CEO, large-cap", "a jet and an adoring comp committee"], ["CEO, S&P 500", "your face on the magazine"], ["Chairman & CEO", "you pick the board now"], ["Legend", "they teach your playbook in B-school"]],
    resCap: "The Street loved it. “You’re fired,” to a few thousand. Stock popped.", resPro: "Analysts called it undisciplined. The stock slid; the board noticed.", out: "FALLOUT THIS QUARTER",
    turns: [{ y: 1981, ch: "A NEW DOCTRINE · MAXIMIZE THE SHARE PRICE", o: [["a", "Reinvest in the plant", "◍", "protect", .26], ["b", "The first buyback", "$", "capture", .55]] }, { y: 1985, ch: "A RAIDER IS CIRCLING", o: [["a", "Defend the jobs", "◍", "protect", .30], ["b", "Cut deep to fight him off", "✂", "capture", .70]] }, { y: 1991, ch: "THE PLANT COSTS LESS OVERSEAS", o: [["a", "Keep it in the town", "◍", "protect", .30], ["b", "Move it offshore", "✈", "capture", .76]] }, { y: 1997, ch: "DOWNSIZE AND DISTRIBUTE", o: [["a", "Profit-share with workers", "◍", "protect", .32], ["b", "Layoffs, raise the dividend", "✂", "capture", .82]] }, { y: 2001, ch: "THE DIP · PROTECT THE QUARTER", o: [["a", "Hold headcount", "◍", "protect", .30], ["b", "Cut 10%, beat estimates", "✂", "capture", .84]] }, { y: 2008, ch: "THE CRASH · A BAILOUT ARRIVES", o: [["a", "Keep everyone, take the hit", "◍", "protect", .30], ["b", "Layoffs + retention bonuses", "$", "capture", .90]] }, { y: 2013, ch: "RECORD PROFITS", o: [["a", "Raise the floor wage", "◍", "protect", .32], ["b", "Record buyback", "$", "capture", .92]] }, { y: 2018, ch: "AUTOMATE · CONTRACT OUT", o: [["a", "Hire them as staff", "◍", "protect", .30], ["b", "Automate, classify as gig", "⚙", "capture", .92]] }, { y: 2020, ch: "A HARD YEAR · STOCK SOARS ANYWAY", o: [["a", "Hazard pay, stay safe", "◍", "protect", .32], ["b", "Cut hours, ride the rally", "$", "capture", .94]] }] },
  culture: { id: "culture", title: "The Culture Seat", role: "Head of Programming", mode: "attn", stat: "fame", statScale: 0.4, sc: C.amber, lc: C.ember, scoreLabel: "ATTENTION", litLabel: "still holds a thought", lives: CIV_LIVES, dial: ["calm", "inflame"], dialNote: "outrage and nostalgia hold best", archetype: "the entertainment chiefs who learned what holds an audience", ranks: [["Head of Programming", "something to prove"], ["VP, Programming", "your name on the door"], ["SVP, Network Group", "a floor that reports to you"], ["President, Entertainment", "a car and your name on the spot"], ["Chief Content Officer", "a seat where it's decided"], ["Chairman", "you decide now"]],
    resCap: "The wall lit up. The gauge climbed; the board relaxed.", resPro: "Only a corner lit. The board is unimpressed; the embers held.", out: "LIGHTS OUT TONIGHT",
    turns: [{ y: 1980, ch: "CABLE ARRIVES · CHANNELS MULTIPLY", o: [["a", "The Documentary", "◍", "protect", .26], ["b", "The Tabloid", "✦", "capture", .52]] }, { y: 1987, ch: "THE FAIRNESS DOCTRINE IS GONE", o: [["a", "Balanced Panel", "◍", "protect", .30], ["b", "The Opinion Host", "⚡", "capture", .68]] }, { y: 1992, ch: "24 HOURS TO FILL · FEAR IS STICKY", o: [["a", "Foreign Desk", "◍", "protect", .30], ["b", "The Manhunt", "▲", "capture", .74]] }, { y: 1996, ch: "TELECOM ACT · BUY THE LOCALS", o: [["a", "Keep local newsrooms", "◍", "protect", .32], ["b", "Reality, cheap", "✦", "capture", .72]] }, { y: 1999, ch: "ANGER OUT-HOLDS EXPLAINING", o: [["a", "The Expert", "◍", "protect", .30], ["b", "The Brawl", "⚡", "capture", .84]] }, { y: 2008, ch: "EVERYONE HAS A PHONE · OPTIMIZE SHARES", o: [["a", "The Long Read", "◍", "protect", .30], ["b", "The Hot Take", "✦", "capture", .90]] }, { y: 2012, ch: "HAND IT TO THE ALGORITHM", o: [["a", "Editor in the loop", "◍", "protect", .32], ["b", "Let the feed decide", "↻", "capture", .92]] }, { y: 2016, ch: "POST FIRST · CHECK LATER", o: [["a", "Slow verification", "◍", "protect", .30], ["b", "Post first", "⚡", "capture", .94]] }, { y: 2020, ch: "THE MOST DURABLE CATEGORY: THE PAST", o: [["a", "Tomorrow", "◍", "protect", .34], ["b", "The Loop", "↺", "capture", .90]] }, { y: 2024, ch: "NINE-SECOND CLIPS · ENDLESS SCROLL", o: [["a", "Make them think", "◍", "protect", .32], ["b", "Make it scroll", "✦", "capture", .95]] }] },
  politician: { id: "politician", title: "The Politician", role: "Candidate", mode: "vote", stat: "power", statScale: 1.4, sc: "#D9544D", lc: "#6FA8C9", scoreLabel: "SUPPORT", litLabel: "still votes on reality", lives: CIV_LIVES, dial: ["persuade", "enrage"], dialNote: "a precarious, distracted public is easy to move", archetype: "the gilded outsider who runs against the wreckage he helped make", ranks: [["Candidate", "a podium and a slogan"], ["Front-Runner", "the party falls in line"], ["Nominee", "the stage is yours"], ["President-Elect", "a country holding its breath"], ["President", "the most powerful seat there is"], ["Two-Term", "they will never be rid of you"]],
    resCap: "The crowd roared. The room was yours. More of them are too.", resPro: "Thoughtful. Polite applause. The numbers barely moved.", out: "TURNED OUT TONIGHT",
    turns: [{ y: 0, ch: "A GILDED ESCALATOR · THE OUTSIDER DESCENDS", o: [["a", "A ten-point plan", "◍", "protect", .30], ["b", "“The system is rigged”", "⚡", "capture", .70]] }, { y: 1, ch: "THE PRIMARY · ELDERS VS THE BASE", o: [["a", "Build a real coalition", "◍", "protect", .32], ["b", "Nickname your rivals", "⚡", "capture", .80]] }, { y: 2, ch: "THE DEBATE · FACTS VS DOMINANCE", o: [["a", "Tell them a hard truth", "◍", "protect", .30], ["b", "Dominate, never concede", "⚡", "capture", .85]] }, { y: 3, ch: "THE RALLY · MAKE IT LIKE IT WAS", o: [["a", "Speak to everyone", "◍", "protect", .32], ["b", "“Take it back”", "↺", "capture", .90]] }, { y: 4, ch: "ELECTION DAY · TURNOUT IS EVERYTHING", o: [["a", "Persuade the middle", "◍", "protect", .30], ["b", "Rage drives turnout", "⚡", "capture", .92]] }, { y: 5, ch: "IN OFFICE · GOVERN, OR JUST WIN AGAIN", o: [["a", "Actually deliver", "◍", "protect", .34], ["b", "Govern by grievance", "⚡", "capture", .90]] }] },
};
const ORDER = ["economist", "counsel", "judge", "ceo", "culture", "politician"];

/* ── shared population ── */
function buildPop() { return Array.from({ length: N }, () => ({ att: .10 + Math.random() * .10, econ: .60 + Math.random() * .20, civ: .60 + Math.random() * .20, vote: 0 })); }
function buildMeta(lives) { return Array.from({ length: N }, (_, i) => ({ name: `The ${SUR[(i * 7) % SUR.length]}s`, life: lives[(i * 3 + Math.floor(i / COLS)) % lives.length] })); }
const capOf = (m, h) => m === "extract" ? 1 - h.econ : m === "vote" ? h.vote : h.att;
const litOf = (m, h) => m === "extract" ? h.econ : h.civ;

function applyH(mode, h, P, type, npc) {
  const R = Math.random; let g = 0, nh;
  if (mode === "extract") {
    if (type === "capture") { const e = cl(h.econ - (P * (.16 + .10 * R()) + (npc ? .05 : 0))); g = P * (.5 + .5 * R()); nh = { ...h, econ: e }; }
    else { const e = cl(h.econ + (1 - h.econ) * P * .14 * R()); g = P * .1; nh = { ...h, econ: e }; }
    return { nh, g, died: h.econ >= DEATH && nh.econ < DEATH };
  }
  if (mode === "vote") {
    const precar = cl(.5 * (1 - h.econ) + .5 * (1 - h.civ));
    if (type === "capture") { const conv = (1 - h.vote) * P * (.30 + .70 * precar) * (.6 + .4 * R()); const v = cl(h.vote + conv); const c = cl(h.civ - P * (.10 + .06 * R())); g = conv; nh = { ...h, vote: v, civ: c }; }
    else { const win = (1 - h.vote) * P * .25 * h.civ * (.6 + .4 * R()); const v = cl(h.vote + win); const c = cl(h.civ + (1 - h.civ) * P * .06 * R()); g = win; nh = { ...h, vote: v, civ: c }; }
    return { nh, g, died: h.civ >= DEATH && nh.civ < DEATH };
  }
  if (type === "capture") { const a = cl(h.att + (1 - h.att) * P * (.45 + .5 * R())); const c = cl(h.civ - (P * (.16 + .10 * R()) + (npc ? .05 : 0))); g = a - h.att; nh = { ...h, att: a, civ: c }; }
  else { const a = cl(h.att + (1 - h.att) * P * .3 * R()); const c = cl(h.civ + (1 - h.civ) * P * .14 * R()); g = a - h.att; nh = { ...h, att: a, civ: c }; }
  return { nh, g, died: h.civ >= DEATH && nh.civ < DEATH };
}

/* ── engine ── */
function Seat({ cfg, pop, setPop, char, addStat, onExit, onFinish }) {
  const reduced = usePRM();
  const sRGB = useMemo(() => hexRgb(cfg.sc), [cfg]);
  const meta = useMemo(() => buildMeta(cfg.lives), [cfg]);
  const [turn, setTurn] = useState(0);
  const [phase, setPhase] = useState(cfg.mode === "vote" ? "intro" : "desk");
  const [lead, setLead] = useState(null);
  const [dial, setDial] = useState(50);
  const [board, setBoard] = useState(55);
  const [score, setScore] = useState(0);
  const [airing, setAiring] = useState(false);
  const [focus, setFocus] = useState(null);
  const [cons, setCons] = useState(null);
  const [promo, setPromo] = useState(null);
  const [nl, setNl] = useState("");
  const [nlBusy, setNlBusy] = useState(false);
  const seeded = useRef(false);
  const delay = useMemo(() => Array.from({ length: N }, () => Math.random() * 700), []);
  const data = cfg.turns[turn];

  // Politician seed: fame + money + an already-precarious public set your floor before you speak.
  const startSupport = useMemo(() => cl(char.fame * .0026 + char.money * .0016), [char]);
  useEffect(() => {
    if (cfg.mode === "vote" && !seeded.current) {
      seeded.current = true;
      setPop((p) => p.map((h) => ({ ...h, vote: cl(startSupport + .22 * cl(.5 * (1 - h.econ) + .5 * (1 - h.civ))) })));
    }
  }, [cfg, startSupport, setPop]);

  const avgCap = useMemo(() => pop.reduce((s, h) => s + capOf(cfg.mode, h), 0) / N, [pop, cfg]);
  const lit = useMemo(() => pop.filter((h) => litOf(cfg.mode, h) >= DEATH).length, [pop, cfg]);
  const ri = Math.min((() => { let i = 0; THRESH.forEach((t, k) => { if (score >= t) i = k; }); return i; })(), cfg.ranks.length - 1);
  const nextThr = ri + 1 < cfg.ranks.length ? THRESH[ri + 1] : null;
  const prog = nextThr != null ? cl((score - THRESH[ri]) / (nextThr - THRESH[ri])) : 1;

  function doAir(move) {
    setAiring(true);
    const before = { cap: avgCap, civ: pop.reduce((s, h) => s + h.civ, 0) / N, econ: pop.reduce((s, h) => s + h.econ, 0) / N };
    let g = 0; const ev = []; const di = [];
    const next = pop.map((h, i) => { const r = applyH(cfg.mode, h, cl(move.pull * (.45 + .55 * dial / 100)), move.type, false); g += r.g; if (r.died) { ev.push({ name: meta[i].name, line: meta[i].life[1][3] }); di.push(i); } return r.nh; });
    const finish = () => {
      setAiring(false);
      const sgain = Math.round(g * cfg.statScale * 10) / 10;
      const after = { civ: next.reduce((s, h) => s + h.civ, 0) / N, econ: next.reduce((s, h) => s + h.econ, 0) / N };
      const ns = score + Math.round(g);
      setPop(next); setScore(ns); addStat(cfg.stat, g * cfg.statScale);
      const dAtt = (next.reduce((s, h) => s + capOf(cfg.mode, h), 0) / N - before.cap) * 100;
      const bd = move.type === "protect" ? Math.min(-9, Math.round(dAtt * 1.3 - 9)) : Math.max(3, Math.round(dAtt * 1.3 - 9));
      setBoard((b) => Math.max(0, Math.min(100, b + bd)));
      setCons({ stat: cfg.stat, statGain: sgain, scoreLabel: cfg.scoreLabel, capDelta: Math.round(dAtt), died: ev, diedIdx: di, civDelta: Math.round((after.civ - before.civ) * 100), gapDelta: Math.round((before.econ - after.econ) * 100), type: move.type, label: move.name, resLine: move.result });
      const rk = Math.min((() => { let i = 0; THRESH.forEach((t, k) => { if (ns >= t) i = k; }); return i; })(), cfg.ranks.length - 1);
      if (rk > ri) { setPromo(cfg.ranks[rk]); setPhase("promoted"); } else setPhase("aired");
    };
    reduced ? finish() : setTimeout(finish, 1150);
  }

  function pickPreset(o) { const move = { id: o[0], name: o[1], glyph: o[2], type: o[3], pull: o[4] }; setLead(move); }
  function airLead() { if (lead) doAir(lead); }

  async function airNL() {
    if (!nl.trim()) return;
    setNlBusy(true);
    let move = null;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1000, messages: [{ role: "user", content: `Satirical systems game. The player sits in the ${cfg.role} seat (${cfg.scoreLabel} is the metric they're graded on). Year/scene: ${data.ch}. The player's move, in their words: "${nl.trim()}". Classify it. "capture" = chases ${cfg.scoreLabel} at the public's expense; "protect" = restraint that helps people but costs the metric. Return ONLY compact JSON, no prose: {"type":"capture"|"protect","pull":<0..1 how aggressive>,"label":"<=4 word name","result":"one wry in-world sentence describing what happens"}` }] }) });
      const d = await res.json();
      const txt = (d.content || []).map((b) => b.text || "").join("").replace(/```json|```/g, "").trim();
      const j = JSON.parse(txt);
      move = { id: "nl", name: j.label || "Your move", glyph: "✎", type: j.type === "protect" ? "protect" : "capture", pull: cl(+j.pull || .6), result: j.result };
    } catch (e) {
      const t = nl.toLowerCase();
      const cap = /(cut|fire|layoff|buyback|outrage|attack|rig|grievance|extract|profit|viral|scroll|dominate|blame|offshor|automat|enrage|insult)/.test(t);
      const pro = /(invest|protect|truth|fair|honest|reinvest|wage|local|balance|substance|depth|unity|persuade|coalition|deliver)/.test(t);
      move = { id: "nl", name: nl.trim().split(/\s+/).slice(0, 4).join(" "), glyph: "✎", type: pro && !cap ? "protect" : "capture", pull: cap ? .8 : pro ? .45 : .6, result: null };
    }
    setNlBusy(false); setNl(""); setLead(move); doAir(move);
  }

  function advance() {
    if (board < FIRE) { let p = pop; for (let i = turn; i < cfg.turns.length; i++) { const w = cfg.turns[i].o.map((x) => ({ type: x[3], pull: x[4] })).reduce((a, b) => (b.type === "capture" && b.pull > (a?.pull || 0) ? b : a), null) || { type: "capture", pull: .6 }; p = p.map((h) => applyH(cfg.mode, h, cl(w.pull), "capture", true).nh); } setPop(p); setPhase("fired"); return; }
    if (turn + 1 >= cfg.turns.length) { setPhase("ended"); return; }
    setTurn((n) => n + 1); setLead(null); setCons(null); setPhase("desk");
  }
  function leave(fired) { onFinish({ seatId: cfg.id, rank: cfg.ranks[ri][0], lit, fired }); onExit(); }

  const fhh = focus != null ? { ...pop[focus], ...meta[focus] } : null;
  const fhhLit = fhh ? litOf(cfg.mode, fhh) : 0;

  return (
    <div style={shell}>
      <Dossier char={char} pop={pop} cfg={cfg} avgCap={avgCap} board={board} />
      <button onClick={() => onExit()} style={{ ...backBtn, margin: "10px 0 0" }}>‹ leave for the career map</button>

      <div style={climb}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
          <div><div style={{ ...mono, fontSize: 9.5, letterSpacing: 3, color: C.muted }}>{cfg.role.toUpperCase()} · YOUR CLIMB</div>
            <div style={{ fontFamily: "'Oswald'", fontWeight: 700, fontSize: "clamp(18px,3vw,26px)", color: C.gold, textShadow: "0 0 22px rgba(246,199,96,.26)" }}>{cfg.ranks[ri][0]}</div></div>
          <div style={{ ...mono, textAlign: "right", fontSize: 10, color: C.muted }}>{nextThr != null ? <>next: <span style={{ color: C.phosphor }}>{cfg.ranks[ri + 1][0]}</span></> : "top of the building"}</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", marginTop: 10 }}>
          {cfg.ranks.map((r, i) => { const cur = i === ri; return (<React.Fragment key={i}>{i > 0 && <div style={{ flex: 1, height: 2, background: i <= ri ? C.gold : "#26303a", margin: "0 2px", alignSelf: "center" }} />}<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}><div style={{ width: cur ? 14 : 9, height: cur ? 14 : 9, borderRadius: "50%", background: i <= ri ? C.gold : "#26303a", "--g": C.gold, boxShadow: cur ? `0 0 14px ${C.gold}` : "none", animation: cur && !reduced ? "glowpulse 2.4s infinite" : "none" }} /><span style={{ ...mono, fontSize: 7.5, color: cur ? C.gold : C.muted, textAlign: "center", maxWidth: 56, lineHeight: 1.1, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{r[0].split(",")[0]}</span></div></React.Fragment>); })}
        </div>
        {nextThr != null && <div style={{ height: 3, background: "#1f2832", borderRadius: 2, marginTop: 8 }}><div style={{ height: "100%", width: `${prog * 100}%`, background: C.gold, transition: "width 700ms ease" }} /></div>}
      </div>

      <div style={wallWrap}>
        <div style={wallHead}><span style={{ ...mono, fontSize: 10, letterSpacing: 2, color: C.muted }}>THE PEOPLE · {N}</span><span style={{ ...mono, fontSize: 10, color: C.muted }}><span style={{ color: cfg.lc }}>●</span> {cfg.litLabel}</span></div>
        <div style={{ display: "grid", gap: 4, gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
          {pop.map((h, i) => { const cv = capOf(cfg.mode, h), lv = litOf(cfg.mode, h); const justDied = phase === "aired" && cons?.diedIdx?.includes(i); return (
            <div key={i} onMouseEnter={() => setFocus(i)} onClick={() => setFocus(i)} style={{ position: "relative", aspectRatio: "1/1", borderRadius: 3, cursor: "pointer", background: rgbs(mix(C.dark, sRGB, cv)), outline: justDied ? `2px solid ${C.air}` : focus === i ? `1.5px solid ${C.phosphor}` : "none", outlineOffset: 1, boxShadow: cv > .55 ? `0 0 ${Math.round(cv * 9)}px ${cfg.sc}66` : "none", transition: reduced ? "none" : `background-color 1000ms ease ${delay[i]}ms` }}>
              <span style={{ position: "absolute", right: 2, bottom: 2, width: 4, height: 4, borderRadius: "50%", background: cfg.lc, opacity: lv, transform: `scale(${.5 + lv})`, transition: reduced ? "none" : `opacity 1000ms ease ${delay[i]}ms` }} /></div>); })}
        </div>
        <div style={{ marginTop: 10, minHeight: 22, display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          {fhh ? (<><span style={{ fontFamily: "'Oswald'", fontWeight: 600, fontSize: 14, color: tierOf(fhhLit) === 3 ? C.muted : C.phosphor }}>{fhh.name}</span><span style={{ color: C.muted, margin: "0 8px" }}>·</span><span style={{ fontSize: 13, color: tierOf(fhhLit) === 3 ? C.air : tierOf(fhhLit) === 2 ? C.muted : cfg.lc }}>{fhh.life[1][tierOf(fhhLit)]}</span>{cfg.mode === "vote" && fhh.vote > .5 && <span style={{ ...mono, fontSize: 11, color: cfg.sc, marginLeft: 8 }}>· votes for you</span>}</>) : <span style={{ ...mono, fontSize: 11, color: C.muted }}>hover one to meet them</span>}
        </div>
        <div style={chyron}><span style={chyronTag}>{data && data.y > 1900 ? data.y : cfg.mode === "vote" ? `STEP ${turn + 1}` : "—"}</span><span style={chyronText}>{data ? data.ch : ""}</span></div>
      </div>

      <div style={desk}>
        {phase === "intro" && (
          <div style={{ gridColumn: "1/-1" }}>
            <p style={{ ...lede, margin: "0 0 8px" }}>You arrive with <b style={{ color: C.gold }}>${Math.round(char.money)}B</b> and <b style={{ color: C.amber }}>{Math.round(char.fame)}</b> name recognition. Before you say a word, that — and a public already stretched thin and checked out — puts you near <b style={{ color: cfg.sc }}>{Math.round(startSupport * 100 + 11)}%</b>.</p>
            <p style={{ ...lede, color: C.muted, fontSize: 14, margin: "0 0 16px" }}>The ones easiest to win are the ones you hurt. Grievance moves the precarious fastest.</p>
            <button style={{ ...primaryBtn, borderColor: cfg.sc, color: cfg.sc }} onClick={() => setPhase("desk")} onMouseEnter={(e) => { e.currentTarget.style.background = cfg.sc; e.currentTarget.style.color = C.ink; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = cfg.sc; }}>Descend the escalator ›</button>
          </div>
        )}

        {phase === "desk" && (<>
          <div style={bay}>
            <div style={{ ...bayLabel, color: cfg.sc }}>01 · THE CALL</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {data.o.map((o) => { const sel = lead?.id === o[0]; return (<button key={o[0]} onClick={() => pickPreset(o)} style={{ ...gcard, borderColor: sel ? cfg.sc : C.edge, background: sel ? C.panel2 : C.panel, boxShadow: sel ? `0 0 0 1px ${cfg.sc}` : "none" }}><span style={{ fontSize: 18, color: o[3] === "capture" ? cfg.sc : cfg.lc }}>{o[2]}</span><span style={gname}>{o[1]}</span><span style={ptell}>{[0, 1, 2, 3, 4].map((k) => <i key={k} style={{ width: 5, height: 5, borderRadius: 1, background: k < Math.round(o[4] * 5) ? (o[3] === "capture" ? cfg.sc : cfg.lc) : "#2a343d", display: "inline-block", marginRight: 2 }} />)}<span style={{ marginLeft: 4, color: C.muted }}>pull</span></span></button>); })}
            </div>
            <div style={{ marginTop: 6, borderTop: `1px solid ${C.edge}`, paddingTop: 8 }}>
              <div style={{ ...mono, fontSize: 9.5, color: C.muted, marginBottom: 5 }}>✎ OR SAY IT IN YOUR OWN WORDS</div>
              <textarea value={nl} onChange={(e) => setNl(e.target.value)} placeholder={cfg.mode === "vote" ? "e.g. promise to bring back the factories and name an enemy" : "e.g. quietly gut pensions but call it a modernization"} rows={2} style={nlBox} />
              <button onClick={airNL} disabled={!nl.trim() || nlBusy} style={{ ...primaryBtn, marginTop: 6, opacity: nl.trim() && !nlBusy ? 1 : .4, fontSize: 11, padding: "7px 14px" }}>{nlBusy ? "interpreting…" : "Play my move ›"}</button>
            </div>
          </div>
          <div style={bay}>
            <div style={{ ...bayLabel, color: cfg.sc }}>02 · {cfg.dial[0].toUpperCase()} → {cfg.dial[1].toUpperCase()}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={dEnd}>{cfg.dial[0]}</span><input type="range" min={0} max={100} value={dial} onChange={(e) => setDial(+e.target.value)} aria-label="dial" style={{ flex: 1, accentColor: cfg.sc }} /><span style={{ ...dEnd, color: cfg.sc }}>{cfg.dial[1]}</span></div>
            <div style={{ ...mono, fontSize: 10, color: C.muted, marginTop: 6, textAlign: "center" }}>{cfg.dialNote}</div>
          </div>
          <div style={{ ...bay, alignItems: "center", justifyContent: "center" }}>
            <div style={{ ...bayLabel, color: cfg.sc }}>03</div>
            <button disabled={!lead} onClick={airLead} style={{ ...lever, opacity: lead ? 1 : .4, cursor: lead ? "pointer" : "not-allowed", borderColor: cfg.sc, color: C.phosphor }} onMouseEnter={(e) => { if (lead) e.currentTarget.style.background = cfg.sc; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>{cfg.mode === "vote" ? "GO" : "AIR IT"}</button>
            {lead && <div style={{ ...mono, fontSize: 9.5, color: C.muted, marginTop: 6, textAlign: "center" }}>{lead.name}</div>}
          </div>
        </>)}

        {phase === "promoted" && promo && (
          <div style={{ gridColumn: "1/-1", position: "relative", overflow: "hidden", border: `1px solid ${C.gold}`, borderRadius: 10, padding: "20px 22px", background: "linear-gradient(180deg,rgba(246,199,96,.10),rgba(246,199,96,.02))", animation: reduced ? "none" : "rise 460ms ease" }}>
            {!reduced && <div style={{ position: "absolute", top: 0, left: 0, width: "60%", height: "100%", background: "linear-gradient(90deg,transparent,rgba(246,199,96,.16),transparent)", animation: "sweep 2.2s ease-in-out infinite" }} />}
            <div style={{ position: "relative" }}><div style={{ ...mono, fontSize: 11, letterSpacing: 4, color: C.gold }}>{cfg.mode === "vote" ? "YOU WIN" : "PROMOTED"}</div><div style={{ fontFamily: "'Oswald'", fontWeight: 700, fontSize: "clamp(22px,3.6vw,32px)", color: C.gold, margin: "4px 0 6px", textShadow: "0 0 24px rgba(246,199,96,.36)" }}>{promo[0]}</div><p style={{ ...lede, margin: "0 0 4px" }}>The perk: {promo[1]}.</p><p style={{ ...mono, fontSize: 11.5, color: C.muted, margin: "0 0 16px" }}>{lit}/{N} {cfg.litLabel}.</p><button style={{ ...primaryBtn, borderColor: C.gold, color: C.gold }} onClick={() => setPhase("aired")} onMouseEnter={(e) => { e.currentTarget.style.background = C.gold; e.currentTarget.style.color = C.ink; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.gold; }}>Carry on ›</button></div>
          </div>
        )}

        {phase === "aired" && cons && (
          <div style={{ gridColumn: "1/-1" }}>
            <div style={{ ...mono, fontSize: 10, letterSpacing: 2, color: C.muted, marginBottom: 8 }}>WHAT YOU JUST DID — "{cons.label}"</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
              <Delta big up label={cons.scoreLabel} v={`+${cons.capDelta}`} color={cfg.sc} />
              <Delta big up label={cons.stat.toUpperCase()} v={`+${cons.statGain}`} color={C.gold} />
              <Delta down label="THE GAP" v={`${cons.gapDelta >= 0 ? "+" : ""}${cons.gapDelta}`} color={C.air} />
              <Delta down label="CIVIC" v={`${cons.civDelta >= 0 ? "+" : ""}${cons.civDelta}`} color={C.ember} />
              <Delta down label="WENT DARK" v={`${cons.died.length}`} color={C.air} />
            </div>
            <p style={{ ...lede, margin: "0 0 8px" }}>{cons.resLine || (cons.type === "capture" ? cfg.resCap : cfg.resPro)}</p>
            {cons.died.length > 0 && (<div style={{ borderLeft: `2px solid ${C.air}`, paddingLeft: 12, marginBottom: 8 }}><div style={{ ...mono, fontSize: 10, letterSpacing: 2, color: C.air, marginBottom: 5 }}>{cfg.out}</div>{cons.died.slice(0, 4).map((e, k) => <div key={k} style={{ fontSize: 13, color: C.phosphor, lineHeight: 1.5 }}><span style={{ color: C.muted }}>{e.name}</span> — now {e.line}.</div>)}{cons.died.length > 4 && <div style={{ fontSize: 12, color: C.muted }}>+{cons.died.length - 4} more.</div>}</div>)}
            <button style={primaryBtn} onClick={advance} onMouseEnter={(e) => { e.currentTarget.style.background = C.amber; e.currentTarget.style.color = C.ink; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.amber; }}>{turn + 1 >= cfg.turns.length ? "Close the books ›" : "Next ›"}</button>
          </div>
        )}

        {phase === "fired" && (
          <div style={{ gridColumn: "1/-1" }}><div style={{ fontFamily: "'Oswald'", fontWeight: 600, letterSpacing: 2, color: C.air, fontSize: 14, marginBottom: 6 }}>REPLACED</div><p style={{ ...lede, margin: "0 0 14px" }}>Your restraint cost the board its confidence. They brought in someone who wouldn't hesitate, and it played out without you — faster. You left as {cfg.ranks[ri][0]}.</p><button style={primaryBtn} onClick={() => setPhase("ended")} onMouseEnter={(e) => { e.currentTarget.style.background = C.amber; e.currentTarget.style.color = C.ink; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.amber; }}>See the record ›</button></div>
        )}

        {phase === "ended" && (
          <div style={{ gridColumn: "1/-1" }}><div style={{ fontFamily: "'Oswald'", fontWeight: 600, letterSpacing: 2, color: cfg.sc, fontSize: 14, marginBottom: 12 }}>THE RECORD</div>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", alignItems: "baseline", marginBottom: 14 }}><Stat n={`${Math.round(avgCap * 100)}`} l={cfg.scoreLabel.toLowerCase()} c={cfg.sc} /><Stat n={`${lit}/${N}`} l={cfg.litLabel} c={lit < N * .3 ? C.air : cfg.lc} /><Stat n={cfg.ranks[ri][0].split(",")[0]} l="final title" c={C.gold} small /></div>
            <p style={{ ...lede, color: C.muted, fontSize: 14, margin: "0 0 18px" }}>By every number they gave you, an exceptional run. Take it to the next chair.</p>
            <button style={{ ...primaryBtn, borderColor: cfg.sc, color: cfg.sc }} onClick={() => leave(false)} onMouseEnter={(e) => { e.currentTarget.style.background = cfg.sc; e.currentTarget.style.color = C.ink; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = cfg.sc; }}>To the career map ›</button>
          </div>
        )}
      </div>
    </div>
  );
}

function Delta({ label, v, color, up, big }) {
  return (<div style={{ background: C.panel, border: `1px solid ${C.edge}`, borderRadius: 8, padding: "8px 12px", minWidth: 78 }}><div style={{ ...mono, fontSize: 8.5, letterSpacing: 1.5, color: C.muted }}>{label}</div><div style={{ ...mono, fontWeight: 600, fontSize: big ? 22 : 18, color, lineHeight: 1.1 }}>{v}</div></div>);
}

function Dossier({ char, pop, cfg, avgCap, board }) {
  const civic = Math.round(pop.reduce((s, h) => s + h.civ, 0) / N * 100);
  const gap = Math.round((1 - pop.reduce((s, h) => s + h.econ, 0) / N) * 100);
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, paddingBottom: 12, borderBottom: `1px solid ${C.edge}`, flexWrap: "wrap" }}>
      <div style={{ minWidth: 0 }}><div style={{ fontFamily: "'Oswald'", fontWeight: 700, fontSize: 18, color: C.gold, letterSpacing: .5 }}>J. R. STERLING</div><div style={{ ...mono, fontSize: 9, letterSpacing: 2, color: C.muted }}>THE OUTSIDER</div></div>
      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <Mini label="MONEY" v={`$${Math.round(char.money)}B`} c={C.green} />
        <Mini label="FAME" v={Math.round(char.fame)} c={C.amber} />
        <Mini label="POWER" v={Math.round(char.power)} c="#D9544D" />
        <div style={{ width: 1, height: 26, background: C.edge }} />
        <Mini label="CIVIC" v={civic} c={C.ember} />
        <Mini label="THE GAP" v={gap} c={C.air} />
        {cfg && <><div style={{ width: 1, height: 26, background: C.edge }} /><Mini label={cfg.scoreLabel} v={Math.round(avgCap * 100)} c={cfg.sc} big /><Mini label="BOARD" v={board} c={board < FIRE + 12 ? C.air : C.muted} /></>}
      </div>
    </div>
  );
}
function Mini({ label, v, c, big }) { return (<div style={{ textAlign: "right" }}><div style={{ ...mono, fontSize: 8, letterSpacing: 1.5, color: C.muted }}>{label}</div><div style={{ ...mono, fontWeight: 600, fontSize: big ? 22 : 15, color: c, lineHeight: 1, textShadow: big ? `0 0 14px ${c}55` : "none" }}>{v}</div></div>); }

function Hub({ char, pop, results, onPick, onFinal }) {
  const seatsServed = Object.keys(results).length;
  return (
    <div style={shell}>
      <Dossier char={char} pop={pop} />
      <div style={{ margin: "14px 0 6px" }}><span style={{ fontFamily: "'Oswald'", fontWeight: 700, fontSize: 26, color: C.amber }}>CE&nbsp;Oh!</span><span style={{ ...mono, fontSize: 12, letterSpacing: 3, color: C.muted, marginLeft: 12 }}>THE CAREER MAP — TAKE ANY CHAIR</span></div>
      <p style={{ ...lede, color: C.muted, fontSize: 14, margin: "0 0 16px", maxWidth: 620 }}>One life, many seats. What you take from each — money, fame, a country bent a little further — you carry into the next. The order is yours.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 12 }}>
        {ORDER.map((id) => { const s = SEATS[id]; const done = results[id]; return (
          <div key={id} style={{ ...seatCard, borderColor: done ? C.gold : s.sc + "55" }}>
            <div style={{ ...mono, fontSize: 10, letterSpacing: 2, color: s.sc }}>{s.scoreLabel}{done ? " · SERVED" : ""}</div>
            <div style={{ fontFamily: "'Oswald'", fontWeight: 600, fontSize: 19, color: C.phosphor, margin: "2px 0 4px" }}>{s.title}</div>
            <p style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.5, margin: "0 0 12px", minHeight: 52 }}>You play {s.archetype}.</p>
            {done && <div style={{ ...mono, fontSize: 10.5, color: C.gold, marginBottom: 8 }}>left as {done.rank}{done.fired ? " (replaced)" : ""}</div>}
            <button style={{ ...primaryBtn, borderColor: s.sc, color: s.sc }} onClick={() => onPick(id)} onMouseEnter={(e) => { e.currentTarget.style.background = s.sc; e.currentTarget.style.color = C.ink; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = s.sc; }}>{done ? "Sit again ›" : "Sit ›"}</button>
          </div>
        ); })}
      </div>
      {seatsServed >= 2 && <div style={{ marginTop: 18, textAlign: "center" }}><button style={{ ...primaryBtn, borderColor: C.gold, color: C.gold, padding: "12px 24px", fontSize: 14 }} onClick={onFinal} onMouseEnter={(e) => { e.currentTarget.style.background = C.gold; e.currentTarget.style.color = C.ink; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.gold; }}>The view from above ›</button></div>}
    </div>
  );
}

function Final({ char, pop, results, onRestart }) {
  const civic = Math.round(pop.reduce((s, h) => s + h.civ, 0) / N * 100);
  const gap = Math.round((1 - pop.reduce((s, h) => s + h.econ, 0) / N) * 100);
  const won = char.power > 60;
  return (
    <div style={shell}>
      <Dossier char={char} pop={pop} />
      <div style={{ fontFamily: "'Oswald'", fontWeight: 700, fontSize: 26, color: C.amber, margin: "16px 0 2px" }}>THE VIEW FROM ABOVE</div>
      <div style={{ ...mono, fontSize: 11, letterSpacing: 2, color: C.muted, marginBottom: 18 }}>ONE CAREER · THE COUNTRY IT ADDS UP TO</div>
      <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginBottom: 18 }}>
        <Stat n={`$${Math.round(char.money)}B`} l="taken out" c={C.green} /><Stat n={Math.round(char.fame)} l="fame" c={C.amber} /><Stat n={Math.round(char.power)} l="power" c="#D9544D" /><Stat n={civic} l="civic capacity left" c={civic < 30 ? C.air : C.ember} /><Stat n={gap} l="the gap" c={C.air} />
      </div>
      <div style={{ display: "grid", gap: 8, marginBottom: 18 }}>
        {ORDER.filter((id) => results[id]).map((id) => <div key={id} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "10px 14px", background: C.panel, border: `1px solid ${C.edge}`, borderRadius: 8, flexWrap: "wrap" }}><span style={{ fontFamily: "'Oswald'", fontWeight: 600, fontSize: 15, color: C.phosphor }}>{SEATS[id].title}</span><span style={{ ...mono, fontSize: 12, color: C.gold }}>left as {results[id].rank}</span></div>)}
      </div>
      <p style={{ ...lede, margin: "0 0 6px" }}>{won ? "You won. The people you hollowed out put you there." : "You climbed. The country is thinner for it."}</p>
      <p style={{ ...lede, color: C.muted, fontSize: 14, margin: "0 0 20px" }}>Every call was defensible. No one in the building decided this.</p>
      <button style={{ ...primaryBtn, borderColor: C.amber, color: C.amber }} onClick={onRestart} onMouseEnter={(e) => { e.currentTarget.style.background = C.amber; e.currentTarget.style.color = C.ink; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.amber; }}>Begin again ›</button>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("hub");
  const [pop, setPop] = useState(buildPop);
  const [char, setChar] = useState({ money: 0, fame: 0, power: 0, clout: 0, doctrine: 0, orthodoxy: 0 });
  const [results, setResults] = useState({});
  const addStat = (k, amt) => setChar((c) => ({ ...c, [k]: Math.min(k === "money" ? 99 : 100, (c[k] || 0) + amt) }));
  const onFinish = (r) => setResults((p) => ({ ...p, [r.seatId]: r }));
  const restart = () => { setView("hub"); setPop(buildPop()); setChar({ money: 0, fame: 0, power: 0, clout: 0, doctrine: 0, orthodoxy: 0 }); setResults({}); };
  return (
    <div style={{ background: `radial-gradient(130% 90% at 50% -15%, #16212c 0%, ${C.ink} 62%)`, minHeight: "100vh" }}>
      <style>{FONTS}{KF}</style>
      {view === "hub" && <Hub char={char} pop={pop} results={results} onPick={(id) => setView(id)} onFinal={() => setView("final")} />}
      {SEATS[view] && <Seat cfg={SEATS[view]} pop={pop} setPop={setPop} char={char} addStat={addStat} onExit={() => setView("hub")} onFinish={onFinish} />}
      {view === "final" && <Final char={char} pop={pop} results={results} onRestart={restart} />}
    </div>
  );
}

const mono = { fontFamily: "'IBM Plex Mono', monospace" };
const shell = { color: C.phosphor, width: "100%", minHeight: "100vh", padding: "16px clamp(12px,3vw,30px) 30px", boxSizing: "border-box", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" };
const backBtn = { ...mono, fontSize: 11, letterSpacing: 1, color: C.muted, background: "transparent", border: `1px solid ${C.edge}`, borderRadius: 6, padding: "6px 12px", cursor: "pointer" };
const climb = { marginTop: 12, background: "linear-gradient(180deg,rgba(246,199,96,.06),transparent)", border: `1px solid ${C.edge}`, borderRadius: 12, padding: "12px 16px 14px" };
const wallWrap = { marginTop: 12, background: "#0b1116", border: `1px solid ${C.edge}`, borderRadius: 12, padding: "12px 12px 0", position: "relative" };
const wallHead = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 6 };
const chyron = { display: "flex", alignItems: "center", gap: 10, marginTop: 6, borderTop: `1px solid ${C.edge}`, padding: "9px 2px", overflow: "hidden" };
const chyronTag = { ...mono, fontWeight: 600, fontSize: 12, color: C.ink, background: C.amber, padding: "2px 8px", borderRadius: 3, letterSpacing: 1, flexShrink: 0 };
const chyronText = { fontFamily: "'Oswald'", fontWeight: 500, fontSize: 13, letterSpacing: 2.5, color: C.phosphor, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" };
const desk = { marginTop: 12, display: "grid", gridTemplateColumns: "1.6fr 1.2fr 0.7fr", gap: 12, alignItems: "stretch" };
const bay = { background: C.panel, border: `1px solid ${C.edge}`, borderRadius: 10, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8, minWidth: 0 };
const bayLabel = { ...mono, fontSize: 10, letterSpacing: 2.5 };
const gcard = { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 5, padding: "10px 12px", borderRadius: 8, border: `1px solid ${C.edge}`, cursor: "pointer", color: C.phosphor, minWidth: 112, transition: "border-color 150ms,background 150ms" };
const gname = { fontFamily: "'Oswald'", fontWeight: 500, fontSize: 14 };
const ptell = { display: "flex", alignItems: "center", ...mono, fontSize: 9 };
const dEnd = { ...mono, fontSize: 10, letterSpacing: 1.5, color: C.muted, textTransform: "uppercase" };
const lever = { fontFamily: "'Oswald'", fontWeight: 700, fontSize: 18, letterSpacing: 2, background: "transparent", border: "1px solid", borderRadius: 9, padding: "16px 18px", width: "100%", transition: "background 160ms" };
const nlBox = { width: "100%", boxSizing: "border-box", background: C.ink, color: C.phosphor, border: `1px solid ${C.edge}`, borderRadius: 7, padding: "8px 10px", fontFamily: "'IBM Plex Sans'", fontSize: 13, resize: "vertical" };
const lede = { fontSize: 15, lineHeight: 1.55, color: C.phosphor };
const primaryBtn = { fontFamily: "'Oswald'", fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", background: "transparent", color: C.amber, border: `1px solid ${C.amber}`, borderRadius: 7, padding: "10px 18px", cursor: "pointer", transition: "background 170ms,color 170ms" };
const seatCard = { background: C.panel, border: `1px solid ${C.edge}`, borderRadius: 12, padding: "14px 16px", display: "flex", flexDirection: "column" };
function Stat({ n, l, c, small }) { return (<div><div style={{ ...mono, fontWeight: 600, fontSize: small ? 18 : 28, color: c, lineHeight: 1 }}>{n}</div><div style={{ ...mono, fontSize: 9.5, letterSpacing: 1, color: C.muted, marginTop: 3 }}>{l}</div></div>); }
