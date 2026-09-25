import type { SeatConfig } from "../types";
import { CEO } from "./ceo";
import { POLITICIAN } from "./politician";
import { ENGINEER, EXPERT, FARMER, FLEET, LANDLORD, OWNER, SUPERVISOR, TRUSTEE } from "./households";

export const SEATS: Record<string, SeatConfig> = Object.fromEntries(
  [CEO, POLITICIAN, SUPERVISOR, FLEET, ENGINEER, OWNER, EXPERT, FARMER, LANDLORD, TRUSTEE].map((c) => [c.id, c]),
);
