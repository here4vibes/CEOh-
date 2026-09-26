import { life } from "../build";

export const OKAFOR_WALKERS = life({
  id: "adjunct-academic",
  protagonist: "Amara Okafor-Walker",
  dossierTag: "EXPERT WITNESS",
  householdName: "The Okafor-Walkers",
  location: "Columbus, OH",
  tagline: "Economist, 38. PhD. Seven semesters teaching on one-semester contracts, until a consulting firm called.",
  description:
    "Amara Okafor-Walker's father came from Enugu to study engineering at Ohio State; her mother has been a nurse at a Columbus hospital for twenty-two years. Amara taught four courses at two schools for $28,000 a year with no benefits. Then an economic consulting firm offered $650 an hour to write expert reports in merger cases.",
  perspective:
    "I can explain market power better than most of the lawyers who hire me. Adjuncting taught me exactly what it's like to have none. The firm pays me to say whether a merger raises prices. Both sides of every case hire economists. Why shouldn't one of them be me?",
  closingAddendum:
    "You were dealt a life where you could see the mechanism clearly. The market paid you to describe it differently.",
  seat: {
    title: "The Expert Witness",
    role: "Consulting Economist",
    color: "#6FA8C9",
    scoreLabel: "MARKET POWER",
    dial: ["what the data says", "what the client needs"],
    dialNote: "the firm keeps the experts who win",
    board: "THE FIRM",
    firedTitle: "OFF THE CASE",
    firedBody:
      "You lost a case the firm needed. They brought in an economist from Chicago whose reports never lose. The mergers went through on schedule, with his name in the rulings.",
    pressure: [
      "A senior partner, Richard Moss, mentioned that the client 'expected a cleaner report.'",
      "The firm is 'reviewing staffing' for the next engagement. Your name isn't on the list yet.",
    ],
    ranks: [
      ["Consultant", "$650 an hour"],
      ["Senior Consultant", "your own research team"],
      ["Affiliated Expert", "your name on the letterhead"],
      ["Principal", "clients ask for you by name"],
      ["Testifying Expert", "your model is the industry standard"],
      ["Endowed Chair", "named for a client's founder"],
    ],
    intro: [
      "You're Amara Okafor-Walker. Your first case arrives on a hard drive: every price two hospitals have charged for ten years. They're the only two hospitals in the county, and they want to merge.",
      "The lights on the wall are the people who'll pay the prices: patients, travelers, grocery shoppers, fast-food workers, and your mother, who has worked nights at the same Columbus hospital for twenty-two years.",
      "The firm keeps you as long as you win. Your dial runs from what the data says to what the client needs.",
      "The people on the wall will never read your report. It will be cited for twenty years.",
    ],
    introCta: "Open the data room ›",
    outLabel: "FALLOUT THIS CASE",
    fired: "What if honest analysis were the kind that paid?",
    ended: "You finally got the life the degree promised. Whose prices paid for it?",
    people: [
      ["the hospital", "two to choose from", "one system now", "prices up a fifth", "skipped the surgery"],
      ["the flight home", "flies home for Christmas", "pays the hub premium", "drives eight hours instead", "hasn't seen family in three years"],
      ["the groceries", "a store in town", "the store changed its name", "prices up, shelves thinner", "the store closed; thirty miles to the next"],
      ["the job", "could switch across the street", "signed a non-compete", "stuck at the same wage", "can't take the better offer"],
      ["the seed", "four dealers to choose from", "two dealers left", "one price, take it or leave it", "sold the farm"],
      ["the budget", "comfortable", "watching every price", "choosing which bill to skip", "can't make it to the end of the month"],
    ],
    turns: [
      [
        2014,
        "A HOSPITAL MERGER · THE ONLY TWO IN THE COUNTY",
        ["Report what the model shows", "Your report said prices would rise. The merger was blocked, and the firm lost the client."],
        ["Define the market as the whole state", "With the whole state as the market, two hospitals looked tiny. The merger cleared, and prices rose 22%."],
        "§",
      ],
      [
        2015,
        "TWO AIRLINES, ONE HUB",
        ["Flag the fare increase", "You flagged it. The deal went through anyway, minus a few gates."],
        ["Write that efficiencies will be passed on", "Efficiencies were promised. Fares at the hub rose 27% in two years."],
        "§",
      ],
      [
        2017,
        "A SEED AND CHEMICAL MEGAMERGER",
        ["Testify to what the farmers told you", "You testified about what farmers were paying. The judge thanked you and approved it."],
        ["Testify that scale drives innovation", "'Innovation requires scale.' A handful of companies now sell most of the world's seed."],
        "§",
      ],
      [
        2018,
        "OHIO STATE OFFERS TENURE TRACK · AT A THIRD OF THE PAY",
        ["Take it; consult only on cases you believe in", "You teach antitrust to twenty-year-olds and take one case a year. Your billable hours fell by two thirds."],
        ["Stay; keep a courtesy title for credibility", "You stayed at the firm. The university title made your reports more persuasive to judges."],
      ],
      [
        2019,
        "NON-COMPETES FOR SANDWICH MAKERS",
        ["Write that they suppress wages", "Your report said they hold wages down. The client settled out of court and never hired you again."],
        ["Write that they protect training", "Your report said they protect training. A sandwich maker can't take a job across the street for two years."],
        "§",
      ],
      [
        2021,
        "YOUR MOTHER'S HOSPITAL IS MERGING · THE FIRM WANTS YOU ON IT",
        ["Turn it down", "A colleague took the case. The merger cleared anyway. Your mother never knew you were asked."],
        ["Take it — somebody will", "The merger cleared on your analysis. Your mother's unit was consolidated, and she retired early without asking what you'd testified."],
      ],
      [
        2023,
        "PRICES ARE UP · CONGRESS WANTS AN EXPERT",
        ["Testify that concentration matters", "You said it plainly. The chairman cut you off at five minutes. The clip got two million views anyway."],
        ["Testify that it's all supply chains", "'Supply chains.' The clip ran on every business channel for a week."],
        "⚡",
      ],
    ],
  },
});
