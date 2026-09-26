import { life } from "../build";

export const WHITMORES = life({
  id: "ct-newspapers",
  protagonist: "Caroline Whitmore",
  dossierTag: "PRIVATE EQUITY PARTNER",
  householdName: "The Whitmores",
  location: "Greenwich, CT",
  tagline: "Private equity partner, 47. Yale on financial aid, Wharton on loans. Her father set type at the Hartford Courant for thirty years.",
  description:
    "Caroline Whitmore grew up in a triple-decker in Hartford's South End. Now she lives in Greenwich with her husband, a surgeon, and two kids at Greenwich Country Day. Her fund buys local newspapers, because they're cheap and the buildings under them aren't.",
  perspective:
    "Nobody stopped subscribing because of me. The papers were dying before we bought them; the internet took their business in five years. Somebody was going to own the decline. I'd rather it be someone who can read a balance sheet than someone who pretends.",
  closingAddendum:
    "You were dealt the life that bought the paper your father set type for. The limited partners got their return. The towns got silence.",
  seat: {
    title: "The Fund Partner",
    role: "Partner, Media Fund",
    mode: "attn",
    color: "#8C7AB8",
    scoreLabel: "EBITDA",
    dial: ["keep the newsroom", "harvest the masthead"],
    dialNote: "a newspaper's building is worth more than its reporters",
    board: "LPs",
    firedBody:
      "The limited partners moved their money to a hedge fund in Manhattan that runs two hundred papers from a single copy desk. Your forty papers were folded in by Christmas. Nobody covered it.",
    pressure: [
      "On the quarterly call, an LP asked why your margins trail the sector's by nine points.",
      "Two of your biggest LPs passed on Fund IV. The founding partner wants lunch, just the two of you.",
    ],
    ranks: [
      ["Partner", "carried interest and a corner office"],
      ["Senior Partner", "your name on the fund"],
      ["Managing Partner", "seats on eleven boards"],
      ["Media Mogul", "two hundred mastheads"],
      ["Billionaire", "a Palm Beach address"],
      ["Philanthropist", "a journalism school named for you"],
    ],
    intro: [
      "You're Caroline Whitmore. Your fund just bought forty New England newspapers for less than your neighbor paid for his house. The closing dinner was at a steakhouse in Stamford.",
      "The lights on the wall are readers: the people who learn about the school budget, the zoning fight and the plant closing from a paper you now own. Ellen Tierney has covered city hall in Ansonia for the Valley Ledger for thirty-one years.",
      "Your limited partners watch EBITDA. Your dial runs from keeping the newsroom to harvesting the masthead.",
      "No one notices the day a paper stops covering the city council. They notice years later, when nobody knows what the council did.",
    ],
    introCta: "Sign the closing papers ›",
    outLabel: "FALLOUT THIS QUARTER",
    fired: "Who is supposed to pay for knowing what your town council did?",
    ended: "The fund returned three times its money. Who covers the council now?",
    people: [
      ["the paper", "reads it every morning", "reads it online, sometimes", "sees headlines in the feed", "the paper stopped covering their town"],
      ["the council", "knows how the council voted", "hears about it later", "hears it as a rumor", "can't name anyone on the council"],
      ["the school budget", "went to the hearing", "read the summary", "saw an angry post about it", "didn't know there was a vote"],
      ["local elections", "votes in every local race", "votes when there's news", "skips the races nobody covers", "stopped voting locally"],
      ["the obituaries", "reads them to keep up", "sees them on Facebook", "misses most of them", "found out a friend died months later"],
      ["the facts", "trusts a reporter by name", "trusts the paper, mostly", "trusts whatever is shared", "trusts no one"],
    ],
    turns: [
      [
        2012,
        "FORTY PAPERS FOR THE PRICE OF ONE HOUSE",
        ["Keep every newsroom for a year", "Every newsroom kept for a year. The LPs asked, twice, when the 'value creation' would start."],
        ["Cut a third on day one — the model depends on it", "A third of the newsrooms gone the first week. One paper now has a single reporter covering three towns."],
        "✂",
      ],
      [
        2014,
        "SIX PRINTING PLANTS · YOU NEED ONE",
        ["Keep printing locally, with late deadlines", "The presses stayed local. The paper still lands on porches by six, with last night's scores."],
        ["Print everything three hours away", "Deadlines moved to 4 p.m. The school board votes at 7, so the paper reports it two days late."],
        "⚙",
      ],
      [
        2016,
        "THE LEDGER'S BUILDING IS WORTH MORE THAN THE LEDGER",
        ["Keep the newsroom across from City Hall", "The newsroom stayed downtown. Ellen still eats lunch at the diner where the aldermen eat."],
        ["Sell it for condos; reporters go remote", "The building sold for condos. Reporters work from their kitchens and never run into a council member in the hall."],
      ],
      [
        2018,
        "ELLEN TIERNEY MAKES $71,000 · HER BEAT COULD BE AGGREGATED",
        ["Keep Ellen", "Ellen stayed. She found the towing contract the mayor steered to his brother-in-law: four stories, one resignation. The LPs didn't read them."],
        ["Buy her out; publish the council minutes instead", "Ellen took the buyout. The next spring the towing contract went to the mayor's brother-in-law, and nobody wrote it down."],
        "✂",
      ],
      [
        2020,
        "THE PANDEMIC · ADS COLLAPSE · THE STORY OF THE CENTURY",
        ["Take the loss; keep reporters on it", "Your reporters covered the nursing home outbreaks by name. The fund had the worst year in its history."],
        ["Furlough the newsroom; keep the paywall up", "The newsroom was furloughed. The nursing home outbreak in Ansonia was reported by the state, two weeks late."],
        "✂",
      ],
      [
        2021,
        "YOUR FATHER'S OLD PAPER IS FOR SALE · YOUR FUND COULD BUY IT",
        ["Pass — let a local buyer try", "A hedge fund bought it instead and cut deeper than you would have. Your father mailed you the clipping without a note."],
        ["Buy it and run it like the others", "You bought it. Your father, 81, canceled his subscription and still hasn't told you why."],
      ],
      [
        2024,
        "THE LAST PAPER IN THREE COUNTIES LOSES MONEY",
        ["Give it to a local nonprofit", "A nonprofit took it over with four reporters and a grant. It's small, and it's still there."],
        ["Close it and sell the name", "The paper closed. At the next town election, turnout dropped nine points, and nobody could say why."],
        "✂",
      ],
    ],
  },
});
