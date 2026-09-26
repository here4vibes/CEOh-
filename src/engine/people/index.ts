import type { SeatPeople } from "./types";
import { HAND_BUILT_PEOPLE } from "./handBuilt";
import { NORTHEAST_PEOPLE } from "./northeast";
import { SOUTH_PEOPLE } from "./south";
import { MIDWEST_PEOPLE } from "./midwest";
import { WEST_PEOPLE } from "./west";

export const SEAT_PEOPLE: SeatPeople = {
  ...HAND_BUILT_PEOPLE,
  ...NORTHEAST_PEOPLE,
  ...SOUTH_PEOPLE,
  ...MIDWEST_PEOPLE,
  ...WEST_PEOPLE,
};
