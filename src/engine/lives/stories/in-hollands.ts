import { life } from "../build";

export const HOLLANDS = life({
  id: "in-insulin",
  protagonist: "Rachel Holland",
  dossierTag: "PRICING STRATEGIST",
  householdName: "The Hollands",
  location: "Carmel, IN",
  tagline: "Drug pricing strategist, 42. Purdue MBA. Her brother Nate has had Type 1 diabetes since he was nine.",
  description:
    "Rachel Holland grew up in Kokomo, where her dad built transmissions. She's spent fifteen years at a drug company in Indianapolis that sponsors the Little League and the symphony. Her brother, Nate, runs a support group for young adults with diabetes. She has quietly paid for his insulin more than once.",
  perspective:
    "The list price isn't the real price. The middlemen take rebates, the insurers take their cut, and the company gets the blame. Everyone in the chain gets paid off the sticker, so nobody wants it lower, including us. I didn't design that. I just price inside it.",
  closingAddendum:
    "You were dealt a good job at a company that makes something people die without. You could always cover your brother. Most brothers don't have a sister like you.",
  seat: {
    title: "The Pricing Strategist",
    role: "Director of Pricing Strategy",
    color: "#BF3F3F",
    scoreLabel: "NET REVENUE",
    dial: ["price for patients", "price for the rebate game"],
    dialNote: "a higher list price means a bigger rebate for the middlemen",
    board: "EXECUTIVES",
    firedBody:
      "The executives brought in a pricing chief from a rival who had raised insulin prices eleven times in eight years. He raised them twice more, and the stock hit a record.",
    pressure: [
      "The CFO, Martin Hale, said your recommendation 'leaves money on the table.'",
      "The executives are meeting a pricing consultant on Thursday. You weren't invited.",
    ],
    ranks: [
      ["Director", "a team of analysts"],
      ["Senior Director", "the diabetes portfolio"],
      ["VP of Pricing", "every list price in the company"],
      ["Chief Commercial Officer", "the earnings call"],
      ["CEO", "a jet and a museum wing"],
      ["Board Member", "three pharma boards"],
    ],
    intro: [
      "You're Rachel Holland. On your second monitor is the list price of your company's insulin. A vial costs about six dollars to make.",
      "The lights on the wall are people with diabetes and the families paying for it: the insured, the underinsured, the uninsured, and your brother, Nate, and the twelve people in his support group.",
      "The executives watch net revenue. Your dial runs from pricing for patients to pricing for the rebate game.",
      "The middlemen want a high list price so they can collect a bigger rebate. The patient without insurance pays the list price.",
    ],
    introCta: "Open the pricing model ›",
    outLabel: "FALLOUT THIS QUARTER",
    fired: "Why does a six-dollar drug have a three-hundred-dollar price?",
    ended: "The stock is at a record high. How many people rationed a vial to get it there?",
    people: [
      ["the insulin", "covered, $25 a month", "a $300 vial against a deductible", "rationing to make it last", "died rationing insulin"],
      ["the insurance", "a good employer plan", "a high deductible", "between jobs, uninsured", "aged off a parent's plan"],
      ["the budget", "insulin is just another bill", "insulin before groceries", "insulin or rent", "can't afford either"],
      ["the supply", "a pharmacy down the street", "drives to Canada twice a year", "buys it from strangers online", "ran out"],
      ["the pen", "a pen that works", "switched brands for the formulary", "switched back to the old vial", "no vial left to buy"],
      ["the health", "blood sugar stable", "high more often than not", "in the ICU once", "kidney failure"],
    ],
    turns: [
      [
        2010,
        "A COMPETITOR RAISES INSULIN 12% · WALL STREET IS WATCHING",
        ["Hold your price", "You held. The competitor's revenue grew faster than yours, and Martin Hale forwarded you the analyst note."],
        ["Match it within the week", "You matched it in six days. Insulin prices moved together, the way they always had."],
      ],
      [
        2012,
        "THE MIDDLEMEN WANT BIGGER REBATES",
        ["Cut the list price instead", "The list price came down. Two middlemen dropped your insulin from their formularies within the quarter."],
        ["Raise the list price to fund the rebate", "The list price went up to pay for the rebate. The people without insurance paid the difference at the counter."],
      ],
      [
        2014,
        "A NEW PEN · THE OLD VIAL STILL WORKS",
        ["Keep the vial cheap", "The vial stayed cheap. Nate kept using it, and so did everyone who couldn't afford a pen."],
        ["Phase out the vial", "The vial was phased out. People who could afford the vial couldn't always afford the pen."],
        "✂",
      ],
      [
        2016,
        "A GENERIC IS COMING · UNLESS YOU FILE NEW PATENTS",
        ["Let the generic come", "The generic came. Your revenue fell, and prices for patients fell further."],
        ["File on every tweak you can find", "Forty new patents on the pen, the cap and the dose counter. The generic was delayed eight years."],
        "§",
      ],
      [
        2018,
        "RATIONING DEATHS ARE IN THE NEWS",
        ["Cut the list price in half", "The list price was cut in half. The stock dropped 6% in a day, and the story was off the front page by Friday."],
        ["Launch a patient assistance program", "A patient assistance program with a six-page application. Most people never finished it."],
      ],
      [
        2019,
        "NATE IS RATIONING · HE DIDN'T TELL YOU",
        ["Take the price cut to the CEO — for everyone", "The CEO listened for eleven minutes. The price didn't move. Nate found out you'd tried and cried on the phone."],
        ["Pay for Nate's insulin yourself, quietly", "You send him $900 a month. He's fine. Two people in his support group aren't."],
      ],
      [
        2022,
        "CONGRESS CAPS INSULIN AT $35 · FOR MEDICARE ONLY",
        ["Extend the cap to everyone", "The cap went to everyone. It costs the company $400 million a year. Nate's group texted you a photo of a cake."],
        ["Keep list price for everyone else", "Everyone under 65 without good insurance still pays list. Nate turns 65 in 2052."],
      ],
    ],
  },
});
