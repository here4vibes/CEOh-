import { life } from "../build";

export const PRYORS = life({
  id: "nc-mortgages",
  protagonist: "Lauren Pryor",
  dossierTag: "MORTGAGE BANKER",
  householdName: "The Pryors",
  location: "Charlotte, NC",
  tagline: "Mortgage banker, 35 in 2004. Top producer in the Southeast. Her dad supervised a Gastonia textile mill until it closed.",
  description:
    "Lauren Pryor took a job at the bank after UNC and was writing loans at twenty-four. By thirty-five she was the best producer in the region, with a BMW, a house in Ballantyne and a husband, Chad, in commercial real estate. Her father still lives in Gastonia, in the house the mill paid for.",
  perspective:
    "Homeownership is how regular families build wealth. Everybody said so: the President, Congress, the bank, my dad. If a family wants a house and the bank says yes, who am I to say no? Everybody's making money, and everybody's house is going up.",
  closingAddendum:
    "You were dealt the life that climbed out of a mill town on commission. Every loan was legal. Most of them were somebody's house.",
  seat: {
    title: "The Mortgage Banker",
    role: "Senior Loan Officer",
    color: "#3FBF7F",
    scoreLabel: "LOAN VOLUME",
    dial: ["loans they can repay", "loans that close"],
    dialNote: "you're paid when it closes, not when it's repaid",
    board: "BRANCH",
    firedBody:
      "The bank replaced you with a loan officer from California who wrote twice your volume in adjustable-rate loans. Every one of them was sold to Wall Street before the first payment was due.",
    pressure: [
      "Your branch manager, Trent, posted the volume board. You're third, behind two guys who started last year.",
      "The regional director asked if you 'still have the hunger.' Your pipeline is being reassigned.",
    ],
    ranks: [
      ["Loan Officer", "a desk and a phone"],
      ["Top Producer", "a trip to Cabo"],
      ["Branch Manager", "a team of twelve"],
      ["Regional Director", "the whole Southeast"],
      ["Executive VP", "the secondary-market desk"],
      ["Rescued", "a bailout and a bonus"],
    ],
    intro: [
      "You're Lauren Pryor. It's 2004, home prices are rising everywhere, and the bank will sell every mortgage you write to Wall Street within thirty days.",
      "The lights on the wall are borrowers: first-time buyers in Charlotte and Durham, retirees refinancing, families who've never owned anything, and Dorothy McCall, 67, a retired spinner from Gastonia who used to bring your dad pound cake.",
      "Your branch watches loan volume. Your dial runs from loans they can repay to loans that close.",
      "You'll never hold the loan. By the time anyone knows whether they can pay, it's someone else's problem.",
    ],
    introCta: "Open the pipeline ›",
    outLabel: "FALLOUT THIS MONTH",
    fired: "When did the bank stop caring whether you could pay?",
    ended: "You made it through the crash. What happened to the families you wrote loans for?",
    people: [
      ["the mortgage", "a fixed rate they can afford", "an adjustable, still manageable", "the rate reset", "foreclosed"],
      ["the house", "a home of their own", "underwater", "behind on payments", "lost the house"],
      ["the loan", "prime, like they qualified for", "a teaser rate", "steered into subprime", "a loan they could never repay"],
      ["the neighborhood", "every house owned", "a few foreclosures", "boarded-up houses", "a fund owns the whole street"],
      ["the savings", "a down payment saved", "savings into the house", "savings gone to the payment", "bankruptcy"],
      ["the rent", "never rented again", "renting a house they used to own", "rent up 40%", "renting a room"],
    ],
    turns: [
      [
        2004,
        "'NO-DOC' LOANS · NO PAYSTUBS NEEDED",
        ["Verify every income", "Every income verified. Your volume was a third of the top producer's, and Trent printed the board in color."],
        ["Take their word — the bank sells it anyway", "Stated income. A waiter's application listed $140,000 a year, and it closed in nine days."],
      ],
      [
        2005,
        "DOROTHY McCALL WANTS TO REFINANCE",
        ["Keep her in a fixed rate", "A small fixed-rate loan, a new roof and a payment she can make on Social Security."],
        ["Sell her the cash-out adjustable", "She took $60,000 out of her house for her grandson's tuition and a new roof. The rate resets in 2007."],
      ],
      [
        2006,
        "A BORROWER QUALIFIES FOR PRIME · SUBPRIME PAYS YOU DOUBLE",
        ["Give her the prime loan", "She got the prime loan. You made half the commission."],
        ["Steer her to subprime", "She'll pay $80,000 more over the life of the loan, if she keeps the house that long."],
        "$",
      ],
      [
        2007,
        "THE APPRAISAL COMES IN LOW",
        ["Let the deal die", "The deal died. The buyers were furious, and they were lucky."],
        ["Call the appraiser who always hits the number", "He hit the number. So did every appraiser on the street, and every house on it was worth less a year later."],
      ],
      [
        2008,
        "THE CRASH · THREE HUNDRED OF YOUR BORROWERS ARE UNDERWATER",
        ["Fight the bank to modify their loans", "Months of lost paperwork. Forty modifications came through. The rest went to foreclosure anyway."],
        ["Let foreclosures run their course", "Foreclosure signs went up across Mint Hill and Gastonia. Your dad called to ask whether you knew any of those families."],
        "✂",
      ],
      [
        2010,
        "ROBO-SIGNING · 400 AFFIDAVITS BY FRIDAY",
        ["Refuse to sign what you haven't read", "HR scheduled a meeting. Six months later, the whole industry was explaining itself to judges."],
        ["Sign them — the lawyers say it's fine", "You signed four hundred by Friday. Some of the signatures in the pile weren't yours, and neither were the facts."],
        "✎",
      ],
      [
        2012,
        "A FUND OFFERS TO BUY 300 FORECLOSED HOMES AT ONCE",
        ["Sell to families first, slowly", "It took two years. Two hundred families bought houses they could afford."],
        ["Sell the whole block to the fund", "The fund bought three hundred houses in one sale. They rent for 40% more than the old mortgages."],
        "$",
      ],
    ],
  },
});
