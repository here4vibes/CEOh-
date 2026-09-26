import { life } from "../build";

export const JACKSONS = life({
  id: "mi-flint",
  protagonist: "Sharon Jackson",
  dossierTag: "CITY FINANCE DIRECTOR",
  householdName: "The Jacksons",
  location: "Flint, MI",
  tagline: "City finance director, 51. Born and raised in Flint. Her father built Buicks for thirty-two years.",
  description:
    "Sharon Jackson went to Northwestern High and Michigan State and came home to work for the city she grew up in. She's watched Flint lose half its people. Her son, Darius, is a junior at Southwestern Academy. Her mother still lives four blocks away, in the house Sharon grew up in.",
  perspective:
    "The state decided Flint can't manage its own money, so it sent a man to do it for us. I work for him now. You can quit and let someone who doesn't know this town run the numbers, or you can stay and try to keep them from breaking something. I stayed.",
  closingAddendum:
    "You were dealt the city you grew up in, run by someone the state sent. The water came out of your mother's tap too.",
  seat: {
    title: "The Finance Director",
    role: "Finance Director, City of Flint",
    color: "#3F7FBF",
    scoreLabel: "SAVINGS",
    dial: ["the residents", "the budget"],
    dialNote: "the emergency manager answers to Lansing, not to Flint",
    board: "LANSING",
    firedBody:
      "The emergency manager replaced you with a consultant from Lansing who had never lived in Flint. He signed everything you wouldn't, and he was gone before anyone asked him about it.",
    pressure: [
      "The emergency manager says your department is 'resisting efficiencies.'",
      "The state treasurer's office asked for all of your correspondence. Somebody is building a file.",
    ],
    ranks: [
      ["Finance Director", "the city's checkbook"],
      ["Deputy Administrator", "every department's budget"],
      ["City Administrator", "the whole city, when Lansing allows it"],
      ["State Appointee", "a seat on the review board"],
      ["Treasury", "other cities' emergency managers"],
      ["Consultant", "other broke cities hire you"],
    ],
    intro: [
      "You're Sharon Jackson. There's a new name on the door at City Hall: the emergency manager, appointed by the governor. He can overrule the mayor and the council. You report to him now.",
      "The lights on the wall are Flint: your neighbors, your old teachers, the church ladies at Mt. Olivet, and your mother, four blocks away, who still drinks from the tap because it's always been fine.",
      "The emergency manager watches savings. Your dial runs from protecting the residents to balancing the budget.",
      "The city is about to switch water sources to save $5 million. Nobody has asked what's in the river.",
    ],
    introCta: "Sign in at City Hall ›",
    outLabel: "FALLOUT THIS MONTH",
    fired: "Why was a city of 100,000 run by one man nobody there elected?",
    ended: "The books balanced. How many kids in Flint have lead in their blood?",
    people: [
      ["the water", "clean from the tap", "smells strange", "brown from the tap", "lead in the blood"],
      ["the kids", "healthy", "rashes in the bath", "lead in their blood tests", "a child with lifelong damage"],
      ["the trust", "trusts the city", "doubts the city", "trusts no one in government", "believes nothing they're told"],
      ["the house", "a family home", "bills for water they can't drink", "a lien for unpaid water bills", "walked away from the house"],
      ["the bottled water", "never needed it", "cases from the fire station", "cases every week", "can't afford water anymore"],
      ["the town", "a proud Buick town", "half the people gone", "a city run by the state", "the town that was poisoned"],
    ],
    turns: [
      [
        2011,
        "THE STATE APPOINTS AN EMERGENCY MANAGER",
        ["Say publicly that Flint should run itself", "You said it at a council meeting. The emergency manager moved you to a smaller office and kept you."],
        ["Stay quiet and make yourself useful", "You made yourself useful. By summer he trusted you with the whole budget."],
      ],
      [
        2013,
        "A NEW PIPELINE WILL SAVE $5 MILLION · RIVER WATER IN THE MEANTIME",
        ["Stay on Detroit's water until the pipeline", "You argued for Detroit's water in writing. The emergency manager thanked you and overruled you."],
        ["Switch to the river in the meantime", "The switch was scheduled for April. There was a ceremony, and the mayor toasted with a glass of tap water."],
      ],
      [
        2014,
        "CORROSION CONTROL WOULD COST ABOUT $100 A DAY",
        ["Insist on the treatment", "You insisted, in two emails. The state said it wasn't required yet."],
        ["It isn't required — skip it", "The treatment was skipped. Inside the old pipes, the lead began to come loose."],
        "✂",
      ],
      [
        2014,
        "YOUR MOTHER'S TAP RUNS BROWN",
        ["Demand an independent test", "You paid for a test yourself. It came back with lead. The state said one house isn't a sample."],
        ["Tell residents the water meets standards", "You said it at a town hall. Residents held up jugs of brown water. One of them was your mother's neighbor."],
      ],
      [
        2015,
        "A PEDIATRICIAN FINDS LEAD IN CHILDREN'S BLOOD",
        ["Back her findings publicly", "You stood next to her at the press conference. The state called her data 'unfortunate.' She was right."],
        ["Question her data, as the state does", "You questioned her numbers on the radio. Three weeks later, the state admitted she was right."],
        "⚡",
      ],
      [
        2016,
        "BOTTLED WATER ARRIVES · THE PIPES STAY IN THE GROUND",
        ["Push to replace every lead pipe now", "You pushed until the digging started. It took years, but the pipes came out."],
        ["Wait for the federal money", "Water was handed out at the fire stations. The pipes waited for Washington."],
      ],
      [
        2018,
        "THE STATE ENDS FREE BOTTLED WATER",
        ["Fight to keep it", "You lost. The water was declared safe. Your mother still buys cases at Kroger every Saturday."],
        ["Say the water is safe now", "You said it was safe, and by the test results it was. Most of your neighbors still don't believe you."],
      ],
    ],
  },
});
