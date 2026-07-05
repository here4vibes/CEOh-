import type { SeatConfig } from "../types";
import { CEO } from "./ceo";
import { POLITICIAN } from "./politician";

// M2 ships CEO + Politician. Remaining four seats (Economist, Counsel, Judge, Culture) are M5.
export const SEATS: Record<string, SeatConfig> = { ceo: CEO, politician: POLITICIAN };

export const SEAT_ORDER = ["ceo", "politician"];
