import type { SeatConfig } from "../types";
import { LIVES } from "../lives";
import { CEO } from "./ceo";
import { POLITICIAN } from "./politician";
import { COUNCIL, ENGINEER, EXPERT, FARMER, FLEET, LANDLORD, MILL, OWNER, PASTOR, UNION_LOCAL, SUPERVISOR, TRUSTEE } from "./households";

export const SEATS: Record<string, SeatConfig> = Object.fromEntries(
  [CEO, POLITICIAN, SUPERVISOR, FLEET, ENGINEER, OWNER, EXPERT, FARMER, LANDLORD, TRUSTEE, COUNCIL, PASTOR, UNION_LOCAL, MILL, ...LIVES.map((l) => l.seat)].map((c) => [c.id, c]),
);
