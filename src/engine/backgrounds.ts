import type { BackgroundProfile } from "./types";
import { LIVES } from "./lives";

/** The one life that plays two seats: CEO, then Politician. */
const STERLINGS: BackgroundProfile = {
  id: "outsider",
  seats: ["ceo", "politician"],
  protagonist: "J. R. Sterling",
  dossierTag: "THE OUTSIDER",
  moneyUnit: "B",
  householdName: "The Sterlings",
  location: "Manhattan, NY",
  tagline: "Second-generation real estate heir. Born with his name already on the building.",
  description:
    "J. R. Sterling's father built apartment blocks in the outer boroughs with federal loans and never let his son forget it. J. R. has his father's name, his father's lawyers and a gift for television. The family business needs a bigger stage.",
  perspective:
    "Every rule is negotiable, and every loss belongs to somebody else. People say the system is rigged. They're right, and I know how it works, which is more than they can say.",
  closingAddendum:
    "You were dealt the one life in this deck built to climb. Everyone else was dealt the country you climbed through.",
};

export const BACKGROUNDS: BackgroundProfile[] = [...LIVES.map((l) => l.background), STERLINGS];
