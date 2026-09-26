import { life } from "../build";

export const PETERSONS = life({
  id: "retiree",
  protagonist: "Jim Peterson",
  dossierTag: "PENSION TRUSTEE",
  householdName: "The Petersons",
  location: "Green Bay, WI",
  tagline: "Retired eighth-grade civics teacher, 69. Elected by his fellow retirees to the state pension board.",
  description:
    "Jim Peterson taught civics at Franklin Middle School in Green Bay for thirty-one years. He and Carol have been on the Packers season-ticket waiting list since 1987. Carol's mother lives in a nursing home in De Pere. Their neighbor, Gene, has worked twenty-eight years at the headquarters of a regional retail chain downtown.",
  perspective:
    "We did what we were told: taught, paid in, waited. The pension is a promise, and I'm on the board to make sure it's kept. That takes returns, and returns take risk. I didn't design the markets. I'm just trying to get a lot of retired teachers paid.",
  closingAddendum:
    "You were dealt a promise that was kept. The returns that kept it came out of other people's paychecks, in deals you only ever saw as a number.",
  seat: {
    title: "The Trustee",
    role: "Pension Board Trustee",
    color: "#8FA3B8",
    scoreLabel: "RETURNS",
    dial: ["invest like a steward", "chase the return"],
    dialNote: "the promise needs about 7% a year; bonds pay 3",
    board: "LEGISLATURE",
    firedBody:
      "The legislature called the fund 'underperforming' and replaced the elected trustees with appointees from finance. They doubled the private equity allocation at their first meeting.",
    pressure: [
      "A state senator called the fund's returns 'a problem for taxpayers' on the radio.",
      "The governor's office floated 'professionalizing' the board. They meant you.",
    ],
    ranks: [
      ["Trustee", "a seat and a binder"],
      ["Committee Chair", "the consultants take you to dinner"],
      ["Vice-Chair", "a conference in Scottsdale"],
      ["Board Chair", "your name in the trade press"],
      ["National Council", "other funds copy your allocation"],
      ["Industry Advisor", "a paid seat at the buyout firm"],
    ],
    intro: [
      "You're Jim Peterson. It's 2009, and you're in a conference room in Madison with a binder, a name card and a view of the Capitol dome. The fund you just joined lost a quarter of its value last year.",
      "The lights on the wall are workers at companies the fund owns through private equity: retail clerks, nursing home aides, mobile home owners, and your neighbor Gene, twenty-eight years at the retailer's headquarters downtown.",
      "The legislature watches returns. Your dial runs from investing like a steward to chasing the return.",
      "Your pension depends on these returns. So does Carol's, and so do the pensions of every teacher you ever worked with.",
    ],
    introCta: "Take your seat ›",
    outLabel: "FALLOUT THIS QUARTER",
    fired: "What if your pension didn't depend on someone else's layoff?",
    ended: "Your pension is safe. Whose paycheck is it made of?",
    people: [
      ["the store job", "a steady retail job", "hours cut after the buyout", "the store is closing", "the chain went bankrupt"],
      ["the nursing home", "Mom is well cared for", "one aide for twenty residents", "a bedsore nobody noticed", "Mom died alone on a short-staffed night"],
      ["the trailer lot", "lot rent they can afford", "lot rent up 20%", "lot rent up 60%", "sold the home for a dollar"],
      ["the paycheck", "a union wage", "wages frozen since the buyout", "a second job", "laid off when the debt came due"],
      ["the pension", "promised and paid", "frozen", "cut in bankruptcy", "gone"],
      ["the debt", "no debt", "a credit card", "a high-interest installment loan", "wages garnished"],
    ],
    turns: [
      [
        2009,
        "THE FUND LOST A QUARTER OF ITS VALUE",
        ["Stay in index funds and ride it out", "The fund recovered in four years, slower than the consultants promised."],
        ["Hire the consultants; go 'alternative'", "The consultants moved 30% into 'alternatives.' The fees are 2% a year plus a fifth of the profits."],
      ],
      [
        2011,
        "THE CAPITOL IS FULL OF TEACHERS · THE FUND NEEDS RETURNS",
        ["Accept a smaller, honest return target", "A smaller target. The governor's office called it 'fiscally irresponsible.' Carol was in the Capitol rotunda that week, with a sign."],
        ["Commit $2 billion to private equity", "$2 billion to private equity. Benefit cuts stopped being on the table."],
      ],
      [
        2014,
        "A BUYOUT FIRM LOADS GENE'S COMPANY WITH DEBT",
        ["Ask what happens to the jobs", "You asked. The firm said 'value creation' and sent a glossy deck."],
        ["Don't ask — returns are returns", "The retailer paid the buyout firm $50 million in dividends with borrowed money. The fund's return was 14%."],
        "✂",
      ],
      [
        2016,
        "THE FUND BUYS NURSING HOMES · INCLUDING CAROL'S MOTHER'S",
        ["Vote to exclude nursing homes", "Nursing homes were excluded. The fund's returns trailed its peers, and the senator noticed."],
        ["It's the best-returning sector", "Staffing was cut to the legal minimum. Most nights, Carol's mother waits forty minutes for help to the bathroom."],
      ],
      [
        2019,
        "GENE'S COMPANY GOES BANKRUPT · 14,000 JOBS",
        ["Use the fund's seat to fight for severance", "You pushed. The workers got a fraction of what they were owed. Gene got a handshake and a banker's box."],
        ["Take the fund's recovery and move on", "The fund recovered most of its money. Gene's severance was never paid. He works at a hardware store now."],
      ],
      [
        2020,
        "A MOBILE HOME PARK FUND · 14% RETURNS",
        ["Pass", "You passed. The fund raised $2 billion without you."],
        ["Allocate", "Lot rents went up 60%. Retirees on fixed incomes sold their homes for almost nothing."],
        "$",
      ],
      [
        2023,
        "FULLY FUNDED · THE CONSULTANTS WANT MORE PRIVATE CREDIT",
        ["Say publicly what the returns cost", "You said it at the annual meeting. The newspaper ran it on page 12."],
        ["Double the private credit allocation", "The private credit went to payday lenders and debt buyers. Your pension is safe."],
        "$",
      ],
    ],
  },
});
