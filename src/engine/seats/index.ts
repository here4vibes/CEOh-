import type { SeatConfig } from "../types";
import { CEO } from "./ceo";
import { POLITICIAN } from "./politician";
import { COUNCIL, ENGINEER, EXPERT, FARMER, FLEET, LANDLORD, OWNER, PASTOR, SUPERVISOR, TRUSTEE } from "./households";

export const SEATS: Record<string, SeatConfig> = Object.fromEntries(
  [CEO, POLITICIAN, SUPERVISOR, FLEET, ENGINEER, OWNER, EXPERT, FARMER, LANDLORD, TRUSTEE, COUNCIL, PASTOR].map((c) => [c.id, c]),
);
