import type { MoveLogEntry } from "../engine/types";

const KEY = "ceoh:save:v3";

export interface SavedGame {
  seed: number;
  moveLog: MoveLogEntry[];
}

export function loadSave(): SavedGame | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.seed !== "number" || !Array.isArray(parsed?.moveLog)) return null;
    return parsed as SavedGame;
  } catch {
    return null;
  }
}

export function writeSave(save: SavedGame): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(save));
  } catch {
    // storage unavailable (private mode, quota) — game still works, just won't persist
  }
}

export function clearSave(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}

const DEALT_KEY = "ceoh:dealt:v1";

/** Background ids this browser has already been dealt in free play, oldest first. */
export function loadDealt(): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(DEALT_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function writeDealt(ids: string[]): void {
  try {
    localStorage.setItem(DEALT_KEY, JSON.stringify(ids));
  } catch {
    // storage unavailable — dealing falls back to plain random
  }
}
