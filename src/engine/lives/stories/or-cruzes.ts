import { life } from "../build";

export const CRUZES = life({
  id: "or-labor-contractor",
  protagonist: "Maribel Cruz",
  dossierTag: "FARM LABOR CONTRACTOR",
  householdName: "The Cruzes",
  location: "Hood River, OR",
  tagline: "Farm labor contractor, 40. Came from Oaxaca at fourteen. Picked pears before she ran the crews.",
  description:
    "Maribel Cruz came to Oregon with her uncle Chuy and picked pears through high school. She learned English at night and became a citizen at twenty-six. Now she runs a labor contracting business that supplies crews to orchards up and down the Hood River Valley. Chuy, 61, still picks on one of her crews.",
  perspective:
    "The growers need workers, and the workers need jobs. I'm the one in the middle. The growers set the price per bin, and I make my margin from what's left. Everyone complains about contractors, but nobody else wants this job, and nobody else speaks both languages.",
  closingAddendum:
    "You were dealt the ladder out of the orchard. It turned out to be the one standing between the growers and the crews.",
  seat: {
    title: "The Labor Contractor",
    role: "Farm Labor Contractor",
    color: "#9FBF5F",
    scoreLabel: "CREWS PLACED",
    dial: ["pay the crews", "keep the margin"],
    dialNote: "the grower pays a flat rate per bin",
    board: "GROWERS",
    firedBody:
      "The growers switched to a contractor from California who brings guest workers on visas and houses them in shipping containers. He charges them for the containers.",
    pressure: [
      "The biggest grower in the valley, Mr. Ostrander, says the contractor from Yakima is cheaper.",
      "Two growers didn't renew for next season. They're 'looking at H-2A.'",
    ],
    ranks: [
      ["Contractor", "two crews and a van"],
      ["Crew Boss", "six crews"],
      ["Big Contractor", "the whole valley"],
      ["H-2A Recruiter", "workers from Mexico by contract"],
      ["Grower", "your own orchard"],
      ["Industry Voice", "the growers' association"],
    ],
    intro: [
      "You're Maribel Cruz. It's 4:30 a.m. in a gravel lot in Odell: three vans, thirty-one pickers and a grower who wants forty bins by noon.",
      "The lights on the wall are the crews and their families: pickers on ladders, packers in the sheds, teenagers who work the harvest in summer, and your uncle Chuy, who taught you to pick in 2000.",
      "The growers watch the price. Your dial runs from paying the crews to keeping your margin.",
      "The growers set the rate. You set what the crews get. The difference is your business.",
    ],
    introCta: "Load up the vans ›",
    outLabel: "FALLOUT THIS HARVEST",
    fired: "Why can't the people who pick the fruit afford it?",
    ended: "Your business survived. What do the crews make now?",
    people: [
      ["the pay", "an hourly wage", "piece rate", "six dollars an hour on a slow day", "wages stolen"],
      ["the housing", "a clean cabin", "a crowded bunkhouse", "twelve men, one bathroom", "sleeping in the car"],
      ["the heat", "shade breaks at noon", "working through the heat", "heat exhaustion", "collapsed in the rows"],
      ["the visa", "a green card", "an H-2A visa tied to one grower", "owes the recruiter back home", "can't quit, can't leave"],
      ["the kids", "in school in Hood River", "work the harvest in summer", "out of school to work", "left school for good"],
      ["the health", "healthy", "back pain from the ladders", "sick in the pandemic", "no care, no coverage"],
    ],
    turns: [
      [
        2012,
        "THE GROWERS WANT A LOWER RATE PER BIN",
        ["Hold your rate", "You held. Two growers went with a cheaper contractor from Yakima."],
        ["Cut the pickers' share to match", "The pickers' share was cut to match. Some didn't come back next season."],
      ],
      [
        2014,
        "PIECE RATE ONLY · NO HOURLY FLOOR",
        ["Guarantee the minimum wage", "Minimum wage guaranteed. On slow days, you made nothing."],
        ["Pay by the bin", "Pay by the bin. On a bad day, a picker made six dollars an hour."],
        "$",
      ],
      [
        2016,
        "HOUSING IS FULL · THE OLD BUNKHOUSE HAS NO HEAT",
        ["Rent real housing out of your margin", "Real housing, paid out of your pocket. The crews came back the next year, every one."],
        ["Use the bunkhouse", "Twelve men, one bathroom, no heat in October. Chuy slept in his coat."],
      ],
      [
        2018,
        "H-2A · WORKERS WHO CAN'T SWITCH EMPLOYERS",
        ["Keep hiring locally", "You kept hiring locally. Your costs ran higher than every H-2A contractor in the valley."],
        ["Recruit H-2A through a partner in Mexico", "H-2A workers who can't quit. Many paid a recruiter in Mexico to get the job."],
        "✈",
      ],
      [
        2020,
        "COVID · THE CREWS SHARE HOUSING",
        ["Pay for separate quarters for the sick", "Separate quarters for the sick. It cost you the season's profit."],
        ["Keep the crews together — the pears won't wait", "The crews stayed together. Half of them got sick. The pears got picked."],
      ],
      [
        2021,
        "115 DEGREES · CHUY IS ON THE LADDER",
        ["Stop the harvest at noon", "You stopped at noon and lost a day's bins, and the grower docked you. Chuy slept through the afternoon in the only cool room in the house."],
        ["Keep picking — the fruit will cook", "Chuy fainted at 2:40 and came to in the shade. A man on another crew, two counties over, did not."],
        "☀",
      ],
      [
        2023,
        "A WAGE-THEFT LAWSUIT NAMES YOUR COMPANY",
        ["Settle and pay the workers", "You settled for $300,000 and paid every worker on the list. Chuy's name was on it."],
        ["Fight it — everyone does it", "You fought it. It has been in court for four years. Most of the workers on the list have moved on."],
        "§",
      ],
    ],
  },
});
