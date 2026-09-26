import { life } from "../build";

export const HANSENS = life({
  id: "wy-coal-bankruptcy",
  protagonist: "Curt Hansen",
  dossierTag: "MINE GENERAL MANAGER",
  householdName: "The Hansens",
  location: "Gillette, WY",
  tagline: "Coal mine general manager, 53. Thirty years at the mine. His son drives a haul truck there.",
  description:
    "Curt Hansen grew up in Gillette when it was a boomtown. He started driving a haul truck at nineteen and worked his way up to running one of the biggest coal mines in America. His wife, Deb, is a nurse. His son, Colton, drives a truck at the mine, the same job Curt started in.",
  perspective:
    "Coal built this town and kept the lights on for half the country. We did our job. Now everybody says coal is dirty, the company's in bankruptcy court and the people who got rich off it are nowhere to be found. Somebody has to keep this place running to the end.",
  closingAddendum:
    "You were dealt the mine that powered a country. When it went bankrupt, you were the one left deciding who got paid.",
  seat: {
    title: "The General Manager",
    role: "General Manager, Coal Mine",
    color: "#5F5F5F",
    scoreLabel: "TONS SHIPPED",
    dial: ["the workers and the land", "the creditors"],
    dialNote: "bankruptcy court puts the creditors first",
    board: "COURT",
    firedBody:
      "The bankruptcy court approved a sale to a new owner who laid off a third of the workers and walked away from the cleanup bonds. The pit is the state's problem now.",
    pressure: [
      "The creditors' committee says your mine's costs are 'unsustainable.'",
      "The judge is weighing a sale. The buyer's people are touring your mine next week.",
    ],
    ranks: [
      ["General Manager", "a mine and 500 workers"],
      ["Regional VP", "three mines in the Powder River Basin"],
      ["COO", "the whole company's operations"],
      ["CEO", "the company, through bankruptcy"],
      ["Industry Board", "the coal association"],
      ["Buyer", "a stake in the new owner"],
    ],
    intro: [
      "You're Curt Hansen. The company that owns your mine filed for bankruptcy this morning in a courtroom in St. Louis. You're running the mine while a judge decides who gets what.",
      "The lights on the wall are Gillette: miners and their families, retirees counting on pensions and health coverage, the land the company promised to restore, and your son Colton, on the day shift.",
      "The court watches the creditors. Your dial runs from the workers and the land to the creditors.",
      "The company promised to put the land back when the mining was done. That money is in the bankruptcy too.",
    ],
    introCta: "Walk the pit ›",
    outLabel: "FALLOUT THIS HEARING",
    fired: "Why do the people who dug the coal stand last in line?",
    ended: "The mine is still running. Who's going to clean it up?",
    people: [
      ["the job", "hauling coal for twenty years", "hours cut", "the paycheck bounced", "laid off in the sale"],
      ["the pension", "a promised pension", "reduced in bankruptcy", "frozen", "gone"],
      ["the health coverage", "full coverage in retirement", "cut in half", "lost it", "black lung and no coverage"],
      ["the house", "paid off in Gillette", "worth less every year", "for sale, no buyers", "walked away from the house"],
      ["the land", "reclaimed and grazed again", "reclamation on hold", "an open pit next door", "the pit will stay forever"],
      ["the town", "a boomtown", "empty storefronts", "the school lost students", "the town is shrinking"],
    ],
    turns: [
      [
        2015,
        "THE COMPANY FILES FOR BANKRUPTCY",
        ["Tell the workers the truth", "You told them in the break room. Twenty left for jobs in North Dakota. The rest thanked you."],
        ["Call it 'just a restructuring'", "'Just a restructuring.' The workers read the rest in the Gillette News Record."],
      ],
      [
        2016,
        "THE COURT APPROVES EXECUTIVE BONUSES",
        ["Speak against them", "You spoke against them. The judge approved them anyway."],
        ["Stay quiet and take yours", "Executives got $12 million the week retirees got letters. Yours was in there."],
        "$",
      ],
      [
        2017,
        "RETIREE HEALTH COVERAGE IS ON THE TABLE",
        ["Fight to protect it", "It was cut in half, not eliminated. The retirees' association sent you a plaque."],
        ["Let it be cut", "It was cut. A retired miner with black lung lost his coverage in the spring."],
        "✂",
      ],
      [
        2019,
        "A SECOND BANKRUPTCY · PAYCHECKS BOUNCE, COLTON'S TOO",
        ["Push the court to pay the miners first", "You pushed. The miners were paid three weeks late. Colton paid his rent with a credit card."],
        ["Follow the court's order of creditors", "The court's order stood. The miners' paychecks bounced, and the lawyers got paid on time."],
      ],
      [
        2020,
        "THE CLEANUP BONDS ARE UNDERFUNDED",
        ["Report it to the state", "You reported it. The state asked the company for more bonds, and got some."],
        ["Keep it quiet — it's legal", "It stayed quiet. When the mine closes, the state will pay to clean it up."],
      ],
      [
        2022,
        "A BUYER FOR THE MINE",
        ["Push for a buyer who'll keep the workers", "The mine went to a coal company from Kentucky that kept most of the crew, including Colton."],
        ["Back the highest bid", "The highest bid won. The new owner cut a third of the workforce."],
        "$",
      ],
      [
        2024,
        "THE MINE WILL CLOSE BY 2030",
        ["Plan for Gillette's future", "You started planning with the county. Colton is training as an electrician."],
        ["Mine as fast as you can while it lasts", "You mined as fast as you could. The mine will close in 2030, and the pit will stay."],
        "⚙",
      ],
    ],
  },
});
