# CE Oh! — The Climb

A satirical systems game about climbing through seats of power. See `CLAUDE.md` for the full
project brief and milestone breakdown.

Milestone 1 ships the config-driven seat engine, the shared population/character store, and the
CEO seat end-to-end.

## Development

```
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build
npm run lint      # oxlint
npm run harness   # scripted balancing playthroughs (all-extract / all-restraint / mixed)
```

## Architecture

- `src/engine/` — pure, deterministic simulation: seeded PRNG (`rng.ts`), population/household
  rules (`population.ts`), per-seat turn resolution (`seatRuntime.ts`), and the `replay()` function
  that reconstructs full game state from a `seed + moveLog`.
- `src/engine/seats/` — each seat is data only (a `SeatConfig`), consumed by one generic UI.
- `src/store/gameStore.ts` — Zustand store wiring the engine to React, plus localStorage
  save/load built on the same replay mechanism intended for future server-side score verification.
- `src/components/` — `Seat` (the playable seat UI) and `Dossier` (persistent character/country
  header).
- `scripts/harness.ts` — offline balancing harness, run via `npm run harness`.
