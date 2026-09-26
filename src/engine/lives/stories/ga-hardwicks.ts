import { life } from "../build";

export const HARDWICKS = life({
  id: "carpet-mill",
  protagonist: "Tom Hardwick",
  dossierTag: "THIRD-GENERATION CEO",
  householdName: "The Hardwicks",
  location: "Dalton, GA",
  tagline: "Third-generation CEO of the family carpet mill, 58. Three plants, nine hundred jobs, forty cousins on the shareholder list.",
  description:
    "Tom Hardwick did his homework on the shipping desk at his grandfather's mill. He coaches Little League, sits on the hospital board and knows which of his line workers have kids at Dalton High, because his did too. His daughter, Emily, is a nurse in Rome, forty miles downriver.",
  perspective:
    "The family name is on the mill, the stadium lights and the fellowship hall at First Methodist. That means you answer for things. It also means forty cousins in Atlanta and Charlotte expect a check every quarter, and most of them have never smelled a dye house.",
  closingAddendum:
    "You were dealt the family name on the building. The family and the town wanted different things from it, and so did the river.",
  seat: {
    title: "The Mill Owner",
    role: "CEO, Hardwick Mills",
    color: "#7FA35A",
    scoreLabel: "DIVIDEND",
    dial: ["keep the town whole", "keep the family paid"],
    dialNote: "forty cousins own shares, and almost none live in Dalton",
    board: "THE FAMILY",
    firedBody:
      "The family board brought in a turnaround CEO from Atlanta. He closed two plants, sold the brand to a Belgian conglomerate and paid the biggest dividend in the family's history. The Hardwick name is still on the stadium lights.",
    pressure: [
      "Cousin Bradley in Charlotte called about 'the family's returns.' He has never been inside the mill.",
      "The family board is meeting in Buckhead without you. Aunt June says it's 'just a lunch.'",
    ],
    ranks: [
      ["President", "your grandfather's office"],
      ["CEO", "your name on the stadium lights"],
      ["Chairman & CEO", "the family defers to you"],
      ["Industry Chair", "you speak for carpet in Washington"],
      ["Chamber President", "the governor comes to your ribbon cuttings"],
      ["Hall of Fame", "a portrait at the trade association"],
    ],
    intro: [
      "You're Tom Hardwick. Your grandfather started tufting bedspreads in a Dalton garage in 1948. This morning the family board made you the third Hardwick to run the company.",
      "The lights on the wall are Dalton: line workers, the families who came from Mexico in the nineties to run the machines, and everyone downstream who drinks the river. Graciela Solís has run the dye house for nineteen years.",
      "The cousins watch one number: the dividend. Your dial runs from keeping the town whole to keeping the family paid.",
      "Everything a carpet mill uses goes somewhere when it's done. In Dalton, somewhere is downstream.",
    ],
    introCta: "Walk the mill floor ›",
    outLabel: "FALLOUT THIS YEAR",
    fired: "Why did forty cousins get a vote the town never had?",
    ended: "Hardwick Mills made it. What did it leave in the river?",
    people: [
      ["the line", "a steady mill job", "short weeks", "the line moved to Mexico", "laid off when the mill closed"],
      ["the water", "clean from the tap", "a notice about 'forever chemicals'", "a surcharge to filter it", "buying bottled water for the baby"],
      ["the wages", "overtime at Christmas", "no raise in years", "a labor contractor's rate", "cash wages, no papers, no rights"],
      ["the town", "stadium lights on Friday", "stores closing on Hamilton Street", "half the mills empty", "the town is hollowed out"],
      ["the health", "family insurance", "a high deductible", "worked sick through the outbreak", "no coverage"],
      ["the family", "three generations in Dalton", "the kids moved to Chattanooga", "the kids moved to Atlanta", "nobody left to stay"],
    ],
    turns: [
      [
        1994,
        "A NEW TRADE DEAL · A PLANT IN MEXICO COSTS HALF",
        ["Keep every line in Dalton", "Every line stayed. Your margins fell below every competitor's, and the cousins' checks got smaller."],
        ["Move the backing line south", "The backing line moved to Monterrey. Two hundred Dalton jobs went with it."],
        "✈",
      ],
      [
        1999,
        "A STAIN-PROOF COATING · RETAILERS WON'T BUY WITHOUT IT",
        ["Test the wastewater first", "The tests came back bad. You stopped using the coating and lost a national account."],
        ["Use it — the supplier vouches for it", "The coating shipped on every roll. It went into the river with the wastewater for twenty years."],
        "⚗",
      ],
      [
        2005,
        "YOU NEED 200 WORKERS BY MONDAY · A CONTRACTOR HAS CREWS",
        ["Hire direct, at full wages", "Fewer applicants, and more of them stayed. Graciela trained every one herself."],
        ["Take the crews; don't ask about papers", "The contractor's crews ran the lines. Nobody asked about their papers, or what the contractor paid them."],
      ],
      [
        2009,
        "HOUSING CRASHES · ORDERS DOWN 40%",
        ["Short weeks for everyone", "Everyone kept a job and everyone lost a day's pay. The family dividend was cut in half."],
        ["Close the oldest mill", "The Walnut Avenue mill closed: three hundred jobs, and the diner across the street."],
        "✂",
      ],
      [
        2016,
        "ROME'S WATER TESTS HIGH FOR 'FOREVER CHEMICALS'",
        ["Fund the filters", "You wrote a check for Rome's new filters. The cousins called an emergency family meeting."],
        ["Let the lawyers answer", "The lawyers answered. Rome's water customers paid a surcharge to filter your chemicals out."],
        "⚗",
      ],
      [
        2019,
        "EMILY IS PREGNANT · SHE ASKS WHAT'S IN ROME'S WATER",
        ["Tell her everything you know", "She bought a filter that afternoon. Three weeks later, your email to her was Exhibit 14 in Rome's lawsuit."],
        ["Tell her the utility says it's safe", "She believed you. The utility's new filters came online eighteen months later. Your granddaughter was born in between."],
      ],
      [
        2023,
        "A GLOBAL RIVAL OFFERS $400 MILLION · THE COUSINS WANT IT",
        ["Buy out the cousins and stay in Dalton", "The mill stayed in Dalton. So did the debt, which you'll be paying until you're seventy."],
        ["Sell — the family has earned it", "The mill sold. Within two years the new owner moved the Dalton lines to a single plant in Tennessee."],
      ],
    ],
  },
});
