import { life } from "../build";

export const NOVAKS = life({
  id: "pa-fracking",
  protagonist: "Joe Novak",
  dossierTag: "TOWNSHIP SUPERVISOR",
  householdName: "The Novaks",
  location: "Washington County, PA",
  tagline: "Retired steelworker, 61. Township supervisor. Forty acres of his grandfather's land sit on the Marcellus Shale.",
  description:
    "Joe Novak worked thirty years at the mill in Monessen until it closed. His wife, Donna, is a nurse at the hospital in Washington. They go to St. Stanislaus every Sunday. Their son, Matt, drives a water truck for the gas company. It's the best job he's ever had.",
  perspective:
    "After the mills, nothing came back for thirty years. Then the gas came, and people around here had money for the first time in my adult life. Don't tell a man who watched his town die that the thing paying his son's mortgage is the problem.",
  closingAddendum:
    "You were dealt a town that had already lost its first fortune. The second one came out of the ground, and so did the water.",
  seat: {
    title: "The Township Supervisor",
    role: "Township Supervisor",
    stat: "power",
    statScale: 0.9,
    sideStats: { fame: 0.018, money: 0.02 },
    color: "#6F7D8C",
    scoreLabel: "GAS REVENUE",
    dial: ["the neighbors", "the drilling"],
    dialNote: "the impact fee paid for the new fire truck",
    board: "SUPERVISORS",
    firedTitle: "VOTED OUT",
    firedBody:
      "A slate of candidates funded by the gas industry unseated you by 140 votes. The new board approved every permit on the table in one night.",
    pressure: [
      "The other two supervisors took the gas company's lobbyist to dinner without you.",
      "Yard signs went up overnight: NOVAK IS ANTI-JOBS. Nobody will say who printed them.",
    ],
    ranks: [
      ["Supervisor", "a seat and a gavel"],
      ["Chairman", "the ribbon cuttings"],
      ["County Commissioner", "the whole county's leases"],
      ["State Rep", "a vote on the impact fee"],
      ["Industry Liaison", "a consulting fee from the driller"],
      ["Landowner Coalition", "you speak for the royalty owners"],
    ],
    intro: [
      "You're Joe Novak. It's 2008, and there's a man in a clean pickup at your kitchen door with a lease, a pen and a check for $2,500 an acre. He's the third landman this week.",
      "The lights on the wall are the township: farmers who leased, neighbors who didn't, the Yablonskis on Brush Run Road, and three hundred kids at the elementary school on the hill.",
      "Every permit comes before your board. Your dial runs from protecting the neighbors to welcoming the drilling.",
      "The royalty checks are real. So is what comes out of the tap.",
    ],
    introCta: "Gavel in ›",
    actLabel: "VOTE",
    outLabel: "FALLOUT THIS MEETING",
    fired: "Why does a town that already lost everything once have to bet everything again?",
    ended: "The township got its revenue. What did it cost the people who never signed a lease?",
    people: [
      ["the water", "clean from the well", "tastes different", "the color of tea", "buying bottled water for eleven years"],
      ["the lease", "royalty checks every month", "checks shrinking with deductions", "never got a check", "the lease isn't worth the damage"],
      ["the sleep", "quiet nights", "trucks all night", "the compressor hums", "sleeps in the basement"],
      ["the health", "healthy", "headaches and nosebleeds", "a child's rash that won't go away", "cancer in the family"],
      ["the neighbors", "friends on both sides", "arguing about the lease", "not speaking", "moved away"],
      ["the farm", "a family farm, still farming", "a well pad in the pasture", "the cattle got sick", "sold the farm"],
    ],
    turns: [
      [
        2008,
        "THE LANDMEN ARRIVE · $2,500 AN ACRE",
        ["Tell neighbors to get a lawyer before signing", "Some neighbors got lawyers and better leases. Most signed anyway."],
        ["Sign first — show them it's safe", "You signed first, and your neighbors signed because you did."],
        "✎",
      ],
      [
        2010,
        "A WELL PAD 600 FEET FROM THE ELEMENTARY SCHOOL",
        ["Vote for a bigger setback", "You voted for a bigger setback. The driller sued the township."],
        ["Approve it — the state sets the rules", "The pad went in on the hill. Teachers keep the windows shut in the fall."],
      ],
      [
        2012,
        "THE STATE TAKES AWAY LOCAL ZONING · AND PAYS AN IMPACT FEE",
        ["Join the townships suing the state", "The townships won in the state supreme court the next year. Zoning came home."],
        ["Take the fee and fix the roads", "The fee paved the roads the trucks had wrecked, and bought the new fire truck."],
        "§",
      ],
      [
        2014,
        "THE YABLONSKIS' WELL WATER TURNS BROWN",
        ["Demand the state test it", "The state tested it and found methane. The company parked a water tank in their yard, and it's still there."],
        ["Accept the company's report", "The company's report said it was naturally occurring. The Yablonskis have been buying water for eleven years."],
      ],
      [
        2016,
        "A COMPRESSOR STATION · IT WILL RUN DAY AND NIGHT",
        ["Require air monitoring", "Monitoring was required. The company appealed and won a waiver."],
        ["Approve it as written", "The compressor hums all night. The family next to it sleeps in the basement."],
      ],
      [
        2019,
        "A WASTEWATER INJECTION WELL · MATT WOULD DRIVE THE ROUTE",
        ["Vote no, even with Matt's route on the line", "The well went to the next township. Matt drives farther now, and he's still mad at you."],
        ["Vote yes — it's Matt's paycheck", "It passed 3 to 0. Matt drives the route every day, past the elementary school on the hill."],
      ],
      [
        2022,
        "CHILDHOOD CANCERS CLUSTER IN THE COUNTY",
        ["Call for a state study, loudly", "The state funded a study. It found a link between living near wells and childhood lymphoma."],
        ["Say the data isn't conclusive", "'The data isn't conclusive.' Three more kids were diagnosed that year. One of them was a Yablonski."],
        "⚡",
      ],
    ],
  },
});
