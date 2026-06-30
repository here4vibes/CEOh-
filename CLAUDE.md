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
  proven by real humans each being locally rational. No scripted NPCs needed.

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
- Leaderboard backend: **Supabase** (Postgres + edge function for replay-verification) or a small
  serverless endpoint + KV. Keep it optional behind a flag so the game runs fully offline too.
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
  configs); async multiplayer shared-country.

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
