import { life } from "../build";

export const GALLEGOSES = life({
  id: "nm-state-land",
  protagonist: "Ramona Gallegos",
  dossierTag: "DEPUTY LAND COMMISSIONER",
  householdName: "The Gallegoses",
  location: "Santa Fe, NM",
  tagline: "Nuevomexicana. Deputy state land commissioner, 43. Her family was in northern New Mexico two centuries before it was American.",
  description:
    "Ramona Gallegos grew up in Chimayó, where her family has lived for three hundred years. Her grandfather lost the family's grazing land when it became a national forest. She went to law school at UNM and now helps run the office that leases state trust land to oil companies. Her cousin Sylvia teaches second grade in Hobbs.",
  perspective:
    "Oil pays for our schools, our hospitals, nearly everything. New Mexico is one of the poorest states in the country, and without oil money it would be poorer. I believe in those schools. I also know the kids who breathe the air around the wells go to them.",
  closingAddendum:
    "You were dealt a poor state's biggest check. It came out of the Permian, and so did the air the kids in Hobbs were breathing.",
  seat: {
    title: "The Land Commissioner",
    role: "Deputy State Land Commissioner",
    color: "#BF9F5F",
    scoreLabel: "LEASE REVENUE",
    dial: ["the air", "the schools"],
    dialNote: "a third of the state budget is oil money",
    board: "COMMISSIONER",
    firedBody:
      "The commissioner replaced you with a deputy who used to be an oil company's lawyer. She opened a million new acres to leasing in her first year, and the school fund had its best year ever.",
    pressure: [
      "Commissioner Baca asked why lease revenue came in under projection.",
      "The oil industry endorsed the commissioner's opponent. The commissioner wants 'results by fall.'",
    ],
    ranks: [
      ["Deputy Commissioner", "the leasing office"],
      ["Chief of Staff", "the commissioner's office"],
      ["Land Commissioner", "the office is yours"],
      ["Cabinet Secretary", "the energy department"],
      ["Congress", "a seat in Washington"],
      ["Industry Board", "a seat at an oil company"],
    ],
    intro: [
      "You're Ramona Gallegos. It's 2012, and fracking has just turned the Permian Basin into the richest oil field in America. The leasing office's phones haven't stopped ringing.",
      "The lights on the wall are New Mexicans: kids in schools from Farmington to Las Cruces, families in the Permian who live next to the wells, and your cousin Sylvia's second-graders in Hobbs.",
      "The commissioner watches lease revenue. Your dial runs from protecting the air to funding the schools.",
      "Every lease you sign pays for a classroom. Some of those classrooms are downwind.",
    ],
    introCta: "Open the lease file ›",
    outLabel: "FALLOUT THIS SALE",
    fired: "How does a poor state pay for its schools without the thing that's hurting its kids?",
    ended: "The school fund is the biggest it's ever been. What's the air like in Hobbs?",
    people: [
      ["the air", "clear most days", "flares at night", "an inhaler at school", "asthma attacks all year"],
      ["the school", "fully funded by oil money", "funded, but next to a well", "the budget crashed with prices", "the school closed a wing"],
      ["the job", "an oilfield job", "a contractor at half the pay", "laid off in the bust", "no work in the Permian"],
      ["the water", "clean from the well", "tastes wrong", "contaminated", "hauling water"],
      ["the land", "family grazing land", "a pad on the lease next door", "the land is scarred", "sold to the operator"],
      ["the sacred sites", "Chaco protected", "drilling within view", "a road past the ruins", "the sites are surrounded"],
    ],
    turns: [
      [
        2012,
        "FRACKING OPENS THE PERMIAN",
        ["Lease slowly, with strict rules", "Slower leasing, stricter rules. Texas signed three leases for every one of yours."],
        ["Lease everything, fast — the schools need it", "Everything leased, fast. The school fund grew by a fifth in two years."],
      ],
      [
        2014,
        "METHANE IS LEAKING FROM THE WELLS",
        ["Require leak detection on state leases", "Leak detection on every state lease. The companies grumbled and complied."],
        ["Leave it to Washington", "Washington left it to the states. Methane leaked unchecked for years."],
      ],
      [
        2016,
        "OIL CRASHES · THE SCHOOL BUDGET IS SHORT",
        ["Hold the royalty rate", "The rate held. Rigs moved to Texas, and the legislature trimmed school budgets in a special session."],
        ["Cut the royalty rate to keep rigs running", "The rigs stayed. The school fund earned less on every barrel for the next decade."],
        "$",
      ],
      [
        2018,
        "A WELL PAD NEAR SYLVIA'S SCHOOL IN HOBBS",
        ["Require a half-mile setback", "The pad moved half a mile. The company took its complaint to the governor."],
        ["Approve it — the school's budget is oil", "The pad went in across the road. Sylvia keeps her classroom windows closed now."],
      ],
      [
        2020,
        "FLARING HITS RECORD LEVELS",
        ["Push to ban routine flaring", "The state banned routine flaring. Other states started calling to ask how you did it."],
        ["Let prices sort it out", "The flares near Carlsbad lit the sky orange every night that year."],
        "▲",
      ],
      [
        2022,
        "A RECORD SURPLUS · BILLIONS IN OIL MONEY",
        ["Build a fund for life after oil", "A fund for life after oil. It's a start, and it's small."],
        ["Cut taxes and keep leasing", "Taxes cut, leasing up. New Mexico depends on oil more than ever."],
      ],
      [
        2023,
        "LEASES NEAR CHACO CANYON",
        ["Protect Chaco", "The land near Chaco was withdrawn. The pueblos celebrated. The Diné families who'd wanted the royalties did not."],
        ["Lease it — the bids are high", "Drilling rigs are now visible from sites a thousand years old."],
        "✎",
      ],
    ],
  },
});
