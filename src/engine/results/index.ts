import type { TurnResults } from "./types";
import { HAND_BUILT_RESULTS } from "./handBuilt";
import { NORTHEAST_RESULTS } from "./northeast";
import { SOUTH_RESULTS } from "./south";
import { MIDWEST_RESULTS } from "./midwest";
import { WEST_RESULTS } from "./west";

export const TURN_RESULTS: TurnResults = {
  ...HAND_BUILT_RESULTS,
  ...NORTHEAST_RESULTS,
  ...SOUTH_RESULTS,
  ...MIDWEST_RESULTS,
  ...WEST_RESULTS,
};
