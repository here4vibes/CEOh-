# CE Oh! — Project Brief & CLAUDE.md

> The durable context for the build. Keep as `CLAUDE.md` at repo root.
> Companion file in this repo: `reference/ce-oh-the-climb.jsx` (working prototype — the source of
> truth for mechanics; port, don't reinvent). `reference/ce-oh-result-card.html` (visual mock of
> the share asset) will be added before Milestone 4.

---

## 1. Concept

A satirical systems game after Kurt Andersen's *Evil Geniuses*. One ambitious figure —
**J. R. Sterling, "The Outsider"** (Trump-evocative, never named) — climbs through the seats of
the American political economy: Economist, Counsel, Judge, CEO, Culture chief, Politician.

Thesis, delivered as *mechanics not narration*: there is no villain. Each seat makes the locally
rational call given its incentives, and the aggregate comes out rigged. Wealth and fame extracted
in one seat fund the next; the public hollowed out in early seats becomes the electorate that lifts
the Outsider in the Politician seat. **The damage is the fuel.**

Tone: *Papers, Please* meets *Suzerain*, but you play the system. Endings state nothing; they show
the numbers. Closing line: "Every call was defensible. No one in the building decided this."

Positioning (locked): keep Sterling evocative, never named; let the whole system be the indictment
so it reads as a mirror, not a partisan dunk. Andersen's claim is bipartisan — both parties built it.

## 2. The four load-bearing mechanics (do not lose these)

1. **The replacement rule.** Choose restraint and the board's confidence falls; cross the line and
   you're fired — an NPC successor makes the extractive call anyway and the harm lands *faster*.
   Lesson: individual virtue is futile; the fix is structural.
2. **Consequence fog.** The metric you're graded on is loud and immediate; the human cost is quiet
   and lagged — the dashboard shows last period's civic health, not this one's.
3. **Persistent character + persistent country.** Money, fame, power carry across seats. ONE shared
   population of 112 households persists across all seats, each with dimensions {att, econ, civ,
   vote}. Seats read/write the same people.
4. **The damaged public elects you.** In the Politician seat, conversion to your side scales with a
   household's precarity (low econ + low civ). The families you hurt flip easiest, and you arrive
   with a vote floor seeded by your accumulated fame + money.

## 3. Architecture (validated in the prototype)

- **Config-driven seat engine.** Every seat is data: `{ id, role, mode, scoreLabel, litLabel,
  ranks[], dial[lo,hi], turns[{year, headline, options[]}], lives[] (tiered hover lines), colors }`.
  One `<Seat>` component runs them all. Three apply-modes: `attn` (burns civ), `extract` (burns
  econ), `vote` (converts precarious households, burns civ).
- **Shared state:** `population[112]` of `{att,econ,civ,vote}` + `character{money,fame,power,clout,
  doctrine,orthodoxy}` + `results{}`. National meters (civic, the gap) are DERIVED from population,
  computed live so they tick visibly.
- **Selectors:** `cap(mode,h)` drives the glow (what you harvest); `lit(mode,h)` drives the dying
  dot. Death threshold = 0.12.
- **Natural-language moves (optional, M3):** text box -> LLM classifies into
  `{type,pull,label,result}` -> engine resolves. ALWAYS provide a keyword-heuristic fallback. Not
  the core loop; presets are the spine.

## 4. The competitive / viral layer (this IS the demo's growth engine)

The game critiques attention/dopamine optimization, so DO NOT bolt on generic streaks/leaderboards
that become the thing it indicts. Competition must be commentary.

- **Weekly seed (Wordle model).** Everyone plays the same starting country + seat conditions each
  week, so scores compare and sharing is natural. Requires full determinism (see 5).
- **Shareable result card.** Every run ends on an exportable image (spec in 6). The single highest-
  leverage marketing asset — each share is a 2-second-legible ad.
- **Dual leaderboard, the honest twist:**
  - **The Climb** — raw power/money/titles. The obvious board; topping it quietly implicates you.
  - **The Steward** — how much civic capacity + how many lit households you preserved *while still
    surviving the seat* (restraint gets you fired, so this is brutally hard). Staying good is the
    rare flex. This inversion turns the competitive instinct into the lesson.
- **North star (post-validation, M5):** async multiplayer — each player takes a different seat
  affecting ONE shared country; the emergent national outcome is the tragedy-of-the-commons result,
  proven by real humans each being locally rational. Unfilled or fired seats run on NPC. Full
  design in §11.

## 5. Determinism (required for fair weekly leaderboards)

- Replace all `Math.random` with a seeded PRNG (e.g. mulberry32). Derive the seed from the ISO week
  for weekly mode; allow a "free play" mode with a random seed.
- Seed the population init AND any per-action randomness from the same stream, consumed in a fixed
  order, so identical move-sequences -> identical outcomes.
- **Cheat-resistant scoring:** the client submits the *seed + ordered move list*, not a raw score.
  The server replays the moves deterministically against the seed to compute/verify the score.
  This makes the leaderboard tamper-resistant for free and reuses the exact engine.

## 6. Result-card spec (see `reference/ce-oh-result-card.html` for the rendered mock, once added)

- Primary 1200x675 (X/OG link previews) + a 1080x1080 square variant (IG/feed), same anatomy.
- **Left = the verdict:** brand + "WEEK NN"; your final title BIG in gold ("PRESIDENT"); the cost
  line in plain language with the dead count in red ("14 of 112 households still hold a thought");
  a one-line "how you played" summary; the dual scores (Climb gold / Steward cool); CTA "How light
  can you keep it?" + url.
- **Right = the wall (the signature image):** the 112-dot grid in its final state — mostly amber/
  captured with the few surviving embers. This is what makes the card instantly recognizable.
- Export via canvas/`html-to-image`; offer "copy image" + prefilled share text.
- Design rule: a viewer must feel the contrast (I won / the country is dark) in ~2 seconds, and the
  Steward score must create an "I can do better" itch.

## 7. Stack

- **Vite + React + TypeScript**, **Zustand** for state, plain CSS (or vanilla-extract). No engine.
- Leaderboard + multiplayer backend: **Neon** (serverless Postgres) + a small serverless function
  layer for replay-verification and the daily multiplayer resolution job (see §11). Keep it
  optional behind a flag so the solo game runs fully offline too.
- Deploy: static web build -> **itch.io** (free HTML5 demo, the front door) + embed on a landing
  page. Stand up a **Steam "Coming Soon"** page in parallel to capture wishlists. Tauri desktop
  wrapper only later, if validated.
- Analytics: PostHog or Plausible — track plays, completion %, drop-off per turn, replays, and
  (critically) result-card share clicks.

## 8. Milestones

- **M1 — engine + harness.** Scaffold Vite/TS. Port the config-driven engine + shared population +
  character into Zustand with localStorage save/load and a **seeded PRNG**. One seat (CEO) fully
  playable: replacement rule, consequence fog, lights-out ticker, rank ladder. Build a **balancing
  harness** (scripted all-extract / all-restraint / mixed runs that log final civic/gap/title/fired)
  to tune constants programmatically. No new content or art. (Two prototype bugs were tuning issues
  the harness would have caught: proportional burn never crossing the death line, and board math
  making firing unreachable.)
- **M2 — the arc (demo spine).** CEO + Politician as a two-seat vertical slice with carry-over,
  the damaged-public-elects-you seeding, the career-map hub, and the spare final reckoning.
  NOTE: the demo ships these TWO seats, not all six — the arc is the unique hook; one seat alone
  reads as a Papers, Please clone.
- **M3 — feel.** Loud consequence panel; ember-death legibility + a sound that lands; per-seat art
  direction for the two demo seats; optional NL moves with mandatory fallback.
- **M4 — viral layer + ship.** Deterministic **weekly seed**; **shareable result card** (image
  export + share text); **dual leaderboard** (Climb / Steward) with server-side replay verification;
  analytics; itch.io web build; Steam Coming Soon page. This is the demo that tests whether it spreads.
- **M5 — post-validation only.** Remaining four seats (Economist, Counsel, Judge, Culture as full
  configs); async multiplayer shared-country per the design in §11.

## 9. Pre-committed launch gate (decide numbers BEFORE shipping)

Treat the first release as an experiment with a written go/no-go. Example: "30 days post-demo —
greenlight the full build only if I hit >= X plays, >= Y% completion, >= Z wishlists, and a share
rate > N%. Below that, re-cut the hook or shelve." Fill in X/Y/Z/N now; don't rationalize later.

## 10. Open design risks to watch

- A player must be ABLE to reach a non-Andersen conclusion; a sim that always says "evil" reads as
  propaganda and confirms cynicism. Let the systemic outcome emerge; don't force it.
- The wall must be fun to light up AND make ember-death sting, or it's just fireworks. The sting
  comes from households being legible as specific named people.
- Keep the competitive layer as commentary (the Steward board), never a dopamine sugar-high stapled
  on — that would make the game the thing it criticizes.

## 11. Shared-state multiplayer (M5 design)

A **state** is a private lobby of up to 6 players (one per seat: Economist, Counsel, Judge, CEO,
Culture, Politician), all reading and writing ONE shared `population[112]` for the week. This is
the §4 north star, scoped to a buildable spec. Solo play is untouched — this is an additional mode.

**Ownership model.** Per-seat character stats (money/fame/power), shared population. Five
different people occupy five different seats *simultaneously*, so there is no single Sterling to
carry stats between them — that would force players to fight over one stat block and breaks the
"no villain, every seat is locally rational" thesis. What *does* carry between seats is
institutional residue: one seat's extraction lowers the population floor every other seat inherits.

**Weekly cycle.**
- Monday: state opens on that week's seed (same ISO-week seed as solo weekly mode, §5). Empty
  seats and any seat without a claimed player default to NPC control from day one.
- Five decision rounds, Monday–Friday, one per seat per day.
- Each day, every seat-holder submits a **sealed bid** (their chosen option + dial) before a daily
  deadline. Bids are invisible to other players until resolution — nobody can react to a co-state's
  move same-day.
- At rollover, the day's bids **resolve together** and the result becomes visible the next morning.
  This is consequence fog raised to the state level: you commit blind to today's move without
  having seen the full impact of yesterday's other seats yet, same as the solo "last period's
  numbers" mechanic.
- No submission by the deadline = that seat auto-resolves to its NPC strategy for that day only
  (not a firing) — the seat doesn't pause for an absent player.

**Resolution must be simultaneous, not sequential.** All seats' moves for day N are computed as
deltas off the *same* pre-day population snapshot, then summed and applied once. Resolving seat by
seat would let whichever seat resolves first work off a fresher population than the others —
unfair and order-dependent. This is the one real change needed in the engine: `resolveMove` /
`replay` currently apply one seat's move at a time; multiplayer needs a batched variant
(snapshot → N parallel deltas → sum → apply once).

**The replacement rule, live.** A seat that crosses the fire threshold during a day's resolution
flips to NPC control (harsher strategy, per §2's replacement rule) for the remainder of the week —
exactly the solo-mode mechanic, just visible to the other four players in real time instead of
ending their own run. Same for the Politician's election gate (`electionGate`, M2): if that seat's
avg vote share is under the bar on election day, the state's campaign is over for that seat
regardless of the other seats' standing.

**NPC strategy.** Reuse `scripts/harness.ts`'s `pickMove(strategy, turnIndex, options)` — it
already encodes all-extract / all-restraint / mixed heuristics — as the live decision-maker for
unfilled seats, no-show days, and post-firing takeovers.

**Two leaderboards per week, same Climb/Steward inversion as solo play (§4), at two scopes:**
- **State leaderboard** (collective, 5-player groups vs other states). Default view is
  Steward-scored — civic capacity + lit households preserved across all seats at week's end — so
  the headline state-vs-state board doesn't become the extraction race the game critiques. Climb
  ("most extracted, collectively") is the shadow board, same inversion trick as solo.
- **Individual leaderboard** (per player, per seat type, across all states that week) — "best CEO
  this week," Climb/Steward split, same as solo scoring.

**Resolution job, conceptually** (runs once per state per day, after the deadline):
1. Gather day-N bids per seat; missing bids default to NPC pick.
2. Snapshot the population as of end of day N-1.
3. Compute each seat's delta independently off that snapshot (reuse the pure resolve functions
   already in `replay.ts` — do not reimplement them server-side).
4. Sum all deltas, apply once → day-N population.
5. Advance each seat's `SeatRunState` (turn/score/board); check fire threshold and election gate.
6. Any newly-fired seat → mark NPC-controlled for the rest of the week.
7. Persist the day's full move log (all seats) — this is the literal cheat-resistant audit trail
   §5 already specifies for solo play, just keyed by state+day instead of by single player.
8. Reveal day-N results to all players starting day N+1.

This reuses the seed+moveLog replay architecture built in M1 almost unchanged — multiplayer
resolution is "replay, but the moveLog for a given day is contributed by N independent players
instead of one," fed into the same deterministic engine.
