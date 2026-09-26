import type { SeatConfig } from "../types";
import { LIVES } from "../lives";
import { CEO } from "./ceo";
import { POLITICIAN } from "./politician";

export const SEATS: Record<string, SeatConfig> = Object.fromEntries(
  [CEO, POLITICIAN, ...LIVES.map((l) => l.seat)].map((c) => [c.id, c]),
);
