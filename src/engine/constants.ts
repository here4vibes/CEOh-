export const COLS = 16;
export const ROWS = 7;
export const N = COLS * ROWS; // 112 households — one shared population across all seats

export const FIRE = 25; // board confidence below this triggers the replacement rule
export const DEATH = 0.12; // a household's lit dimension below this counts as "gone dark"

// Score thresholds for the six rank tiers (index by how many tiers a seat actually has).
export const THRESH = [0, 18, 42, 72, 108, 150];

export const SURNAMES = [
  "Reyes", "Okafor", "Nguyen", "Halloran", "Mbeki", "Castellanos", "Park", "Goldberg",
  "Petrova", "Osei", "Lindqvist", "Bianchi", "Haddad", "Yamamoto", "Delgado", "Friel",
  "Nakamura", "Abara", "Sokolov", "Bauer", "Romano", "Khan", "Ferreira", "Olsen",
  "Vargas", "Tran", "Cohen", "Adeyemi", "Marek", "Russo",
];

// Tiered hover lines: index 0 = thriving, 3 = gone dark. Shared across "attn"/"vote" seats (civic)
// and "extract" seats (econ).
export const CIV_LIVES: [string, [string, string, string, string]][] = [
  ["the PTA", ["chairs the PTA", "keeps meaning to make the PTA", "shares PTA posts", "couldn't name a board member"]],
  ["the rezoning", ["reads every notice", "skims the notices", "reacts to zoning posts", "didn't know about the rezoning"]],
  ["the city paper", ["reads it cover to cover", "reads the headlines", "reads the comments", "gets it from the feed"]],
  ["the block", ["knows the whole block", "waves at the block", "follows the block group", "hasn't met next door"]],
  ["elections", ["votes every local race", "votes the big ones", "means to register", "skipped it again"]],
  ["town hall", ["speaks at town hall", "sits in", "watches the clip", "never heard it happened"]],
  ["the facts", ["checks before sharing", "mostly trusts the source", "shares the headline", "believes the loudest voice"]],
  ["the meal train", ["runs the meal train", "pitches in sometimes", "boosts the post", "missed that they needed help"]],
];

export const ECON_LIVES: [string, [string, string, string, string]][] = [
  ["the mortgage", ["pays it easily", "still covers it", "behind on it", "lost the house"]],
  ["benefits", ["full family benefits", "a high-deductible plan", "skips the doctor", "no coverage"]],
  ["the kids", ["college fund growing", "saving what they can", "the kid took loans", "the kid skipped college"]],
  ["downtown", ["thriving", "a few empty storefronts", "half-shuttered", "the town is hollowed out"]],
  ["retirement", ["pension on track", "a thin 401(k)", "cashed it out early", "working past 70"]],
  ["the shift", ["steady full-time", "hours getting cut", "two gig jobs now", "no steady work"]],
  ["the union", ["a strong union job", "the union's gutted", "no leverage", "misclassified as a contractor"]],
  ["the house", ["paid down", "refinanced twice", "underwater", "renting a room"]],
];
