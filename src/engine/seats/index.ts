import type { SeatConfig } from "../types";
import { CEO } from "./ceo";

// M1 ships the CEO seat only. The remaining five (M2+) register here as they're ported.
export const SEATS: Record<string, SeatConfig> = { ceo: CEO };

export const SEAT_ORDER = Object.keys(SEATS);
