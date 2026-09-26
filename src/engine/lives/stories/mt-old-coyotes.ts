import { life } from "../build";

export const OLD_COYOTES = life({
  id: "mt-coal-lease",
  protagonist: "Vernon Old Coyote",
  dossierTag: "TRIBAL LEGISLATOR",
  householdName: "The Old Coyotes",
  location: "Crow Agency, MT",
  tagline: "Crow Nation legislator, 57. Rode saddle bronc in his twenties and worked the coal mine for eighteen years.",
  description:
    "Vernon Old Coyote grew up speaking Crow at home and dances at Crow Fair every August. After eighteen years at the mine on the reservation, he was elected to the tribal legislature. He and his wife, Marlene, are raising their grandson, Tyson, who is seventeen and fast on a basketball court.",
  perspective:
    "Coal paid for our government, our schools and our elders' checks for forty years. Now the world says coal is over, and nobody is offering to replace what it paid for. We didn't make climate change. We're just the people told to pay for fixing it first.",
  closingAddendum:
    "You were dealt a nation whose budget came out of the ground. The world moved on from coal and left no road for your people to follow.",
  seat: {
    title: "The Legislator",
    role: "Crow Tribal Legislator",
    stat: "power",
    statScale: 0.9,
    sideStats: { fame: 0.018, money: 0.02 },
    color: "#BF7F3F",
    scoreLabel: "COAL ROYALTIES",
    dial: ["the land", "the lease"],
    dialNote: "coal pays for most of the tribal government",
    board: "DISTRICT",
    firedTitle: "VOTED OUT",
    firedBody:
      "Your district voted you out for a candidate who promised to keep the mine open at any cost. He signed the next lease extension his first week, at a lower royalty than yours.",
    pressure: [
      "Elders in Lodge Grass are asking why their per capita check shrank.",
      "The chairman says you're 'standing in the way of jobs,' and your opponent says it in every gym on the reservation.",
    ],
    ranks: [
      ["Legislator", "a seat and a district"],
      ["Committee Chair", "the resources committee"],
      ["Speaker", "the legislature follows you"],
      ["Chairman", "the whole Crow Nation"],
      ["National Voice", "the tribal energy council"],
      ["Industry Partner", "an advisory seat at the coal company"],
    ],
    intro: [
      "You're Vernon Old Coyote. The legislature meets in Crow Agency on a gray morning. On the table: the coal company wants to extend its lease.",
      "The lights on the wall are the Crow people: elders who count on the per capita checks, miners with the best jobs on the reservation, kids in schools the royalties pay for, and your grandson, Tyson.",
      "Your district watches royalties and jobs. Your dial runs from protecting the land to extending the lease.",
      "The power plants that burn your coal are getting old. The mine is dying either way. The only question is what comes after.",
    ],
    introCta: "Take your seat ›",
    actLabel: "VOTE",
    outLabel: "FALLOUT THIS SESSION",
    fired: "When did the Crow Nation ever get a real choice about coal?",
    ended: "The mine is closing. What does the Crow Nation's budget run on now?",
    people: [
      ["the job", "a mine job with good pay", "hours cut", "laid off", "no work on the reservation"],
      ["the per capita check", "a check that helps", "a smaller check", "the check was cut", "no check this year"],
      ["the land", "sacred sites protected", "a mine near the sites", "a burial ground in the pit", "the land is dug up"],
      ["the tribal services", "a full clinic and police", "cuts at the clinic", "six officers laid off", "services closed"],
      ["the language", "speaks Crow at home", "the grandkids understand it", "the grandkids don't speak it", "the last fluent speaker in the family died"],
      ["the future", "a plan after coal", "a solar lease", "waiting on the grant", "no plan and no coal"],
    ],
    turns: [
      [
        2008,
        "THE MINE WANTS A LEASE EXTENSION",
        ["Negotiate harder, even if it takes a year", "Nine months of meetings. The royalty went up two points, and the company never forgot it."],
        ["Sign it — the budget runs on royalties", "Signed in a week. The royalty stayed the lowest in the Powder River Basin."],
        "✎",
      ],
      [
        2011,
        "A NEW PIT WOULD REACH AN OLD BURIAL SITE",
        ["Protect the site", "The pit was redrawn around the site. The company cut its production estimate, and the royalty with it."],
        ["Approve it; move the remains with ceremony", "The remains were moved with a ceremony and a check. The pit is where they were."],
      ],
      [
        2013,
        "A COAL COMPANY OFFERS AN OPTION ON MORE COAL · FOR EXPORT TO ASIA",
        ["Hold out for a better deal", "You held out. No better deal came. The district asked what holding out pays."],
        ["Take it — nobody else is offering anything", "The Nation signed. The coal would ship to Asia through a new terminal in Washington State, if the terminal got built."],
      ],
      [
        2016,
        "THE LUMMI NATION BLOCKS THE TERMINAL · TO PROTECT ITS FISHERIES",
        ["Respect the Lummi's fight", "You called the Lummi chairman to say you understood. The deal died. Your district asked what understanding pays."],
        ["Lobby Washington State for the terminal", "You testified in Olympia that your people need that terminal. It was blocked anyway, and the Lummi chairman didn't return your call."],
        "⚡",
      ],
      [
        2019,
        "THE POWER PLANTS THAT BURN YOUR COAL WILL CLOSE",
        ["Start planning for life after coal", "You started a committee. It had no budget, because the budget was coal."],
        ["Sue to keep the plants open", "The Nation sued. It lost, and it spent $2 million on lawyers."],
        "§",
      ],
      [
        2021,
        "HALF THE MINE'S CREW IS LAID OFF · INCLUDING TYSON",
        ["Fund job training from the reserves", "Forty young men and women started a lineman program. Tyson climbed his first pole in May."],
        ["Protect the per capita checks instead", "The checks went out in full. Tyson sat on the couch for a year, then left for Billings."],
      ],
      [
        2024,
        "FEDERAL CLEAN-ENERGY MONEY · IF THE NATION APPLIES",
        ["Apply — solar on the old mine land", "The grant came through: solar panels on reclaimed mine land. Tyson is on the installation crew."],
        ["Lobby to reopen the mine instead", "You lobbied for coal. The mine didn't reopen, and the grant went to another tribe."],
      ],
    ],
  },
});
