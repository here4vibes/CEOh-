import type { MoveLogEntry } from "../engine/types";

const KEY = "ceoh:save:v1";

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
