/**
 * Lightweight telemetry for the worldview feature.
 * Submits anonymised game runs to Supabase and reads per-background aggregate stats.
 *
 * Setup: create a .env.local file at the repo root with:
 *   VITE_SUPABASE_URL=https://<project>.supabase.co
 *   VITE_SUPABASE_ANON_KEY=<anon public key>
 *
 * Run the SQL in supabase/schema.sql in your Supabase project's SQL editor first.
 * If the env vars are absent, every call is a silent no-op — the game works offline.
 */

import type { MoveLogEntry } from "../engine/types";

const URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const enabled = Boolean(URL && KEY);

export interface GameRunData {
  background_id: string;
  choices: MoveLogEntry[];
  climb_score: number;
  steward_score: number;
  lit_count: number;
  election_won: boolean;
  ceo_fired: boolean;
  politician_fired: boolean;
}

export interface BackgroundStats {
  background_id: string;
  total_runs: number;
  avg_climb: number;
  avg_steward: number;
  avg_lit: number;
  election_win_pct: number;
  ceo_fire_pct: number;
}

function headers(): HeadersInit {
  return {
    "Content-Type": "application/json",
    apikey: KEY!,
    Authorization: `Bearer ${KEY}`,
  };
}

export async function submitRun(data: GameRunData): Promise<void> {
  if (!enabled) return;
  try {
    await fetch(`${URL}/rest/v1/game_runs`, {
      method: "POST",
      headers: { ...headers(), Prefer: "return=minimal" },
      body: JSON.stringify({ ...data, choices: JSON.stringify(data.choices) }),
    });
  } catch {
    // Telemetry failure never breaks the game.
  }
}

export async function fetchBackgroundStats(backgroundId: string): Promise<BackgroundStats | null> {
  if (!enabled) return null;
  try {
    const res = await fetch(
      `${URL}/rest/v1/background_stats?background_id=eq.${encodeURIComponent(backgroundId)}&select=*`,
      { headers: headers() },
    );
    if (!res.ok) return null;
    const rows = (await res.json()) as BackgroundStats[];
    return rows[0] ?? null;
  } catch {
    return null;
  }
}
