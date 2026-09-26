import { life } from "../build";

export const HARRISES = life({
  id: "ms-dollar-store",
  protagonist: "Lamont Harris",
  dossierTag: "STORE MANAGER",
  householdName: "The Harrises",
  location: "Greenwood, MS",
  tagline: "Dollar store manager, 27. Makes $38,000. Runs the only store in walking distance for three thousand people.",
  description:
    "Lamont Harris grew up in Greenwood with his grandmother, Miss Bertha, who still lives three blocks from the store. He did a year at Mississippi Valley State before the money ran out. His daughter, Nia, is four; her mother works nights at the catfish plant.",
  perspective:
    "The grocery store left years ago. The pharmacy left. Now it's us, the gas station and the church. People need what we sell, and we're the only ones selling it. Corporate sets the prices in Tennessee. I keep the lights on and the doors open.",
  closingAddendum:
    "You were dealt the only store in a neighborhood nobody else would build in. You kept it open. Corporate decided what it sold.",
  seat: {
    title: "The Store Manager",
    role: "Store Manager, Dollar Store",
    color: "#E5D23F",
    scoreLabel: "SALES PER LABOR HOUR",
    dial: ["staff the store", "hit the labor budget"],
    dialNote: "corporate budgets two people a shift, then one",
    board: "DISTRICT",
    firedBody:
      "District sent a manager from Jackson who ran the store with one clerk a shift and a self-checkout 'pilot.' The store was robbed twice in a year. Corporate called it shrink.",
    pressure: [
      "Your district manager, Ms. Tate, says your labor hours are over budget again.",
      "Ms. Tate is coming Thursday with someone from loss prevention. That's never good.",
    ],
    ranks: [
      ["Store Manager", "a set of keys"],
      ["Manager of the Quarter", "a plaque in the back room"],
      ["District Manager", "twelve stores in the Delta"],
      ["Regional Director", "the whole state"],
      ["Corporate", "an office in Tennessee"],
      ["VP of Operations", "stock options"],
    ],
    intro: [
      "You're Lamont Harris. You unlock the store at 7:45, and somebody is already waiting: Mr. Roosevelt, who buys one tall can and a honey bun every morning of his life.",
      "The lights on the wall are the neighborhood: your grandmother's friends, kids from your old school, young mothers pushing strollers two miles, and everyone who has no car and no other store.",
      "District gives you a labor budget. Your dial runs from staffing the store to hitting the budget.",
      "There's always somebody in the aisles who can't make the math work. The prices are set in Tennessee.",
    ],
    introCta: "Unlock the store ›",
    outLabel: "FALLOUT THIS WEEK",
    fired: "Why is the only store in the neighborhood designed to stay the only store?",
    ended: "The store hit its numbers. What does a neighborhood look like when this is its store?",
    people: [
      ["the groceries", "a store with fresh food", "the dollar store plus a weekly ride", "chips and canned goods", "eleven miles from a vegetable"],
      ["the formula", "on the shelf", "one can per customer", "the store ran out", "watered down to make it last"],
      ["the cashier's job", "full-time with sick days", "part-time, no sick days", "alone on the night shift", "robbed at gunpoint and quit"],
      ["the health", "blood sugar under control", "blood sugar high", "an amputation", "a stroke at fifty-one"],
      ["the prices", "fair prices", "smaller packages, same price", "prices up on the staples", "can't afford the basics"],
      ["the neighborhood", "a grocery, a pharmacy, a bank", "the grocery left", "the pharmacy left", "the dollar store is all that's left"],
    ],
    turns: [
      [
        2018,
        "CORPORATE ENDS THE FRESH PRODUCE PILOT",
        ["Keep one cooler of produce anyway", "One cooler of greens and tomatoes by the register. It sells out every Tuesday, and district calls it 'off-plan.'"],
        ["Fill the space with chips and soda", "Chips and soda sell. The closest fresh vegetable is now eleven miles away."],
      ],
      [
        2019,
        "SAME PRICE, SMALLER PACKAGE",
        ["Put up a sign that says so", "You put up a handwritten sign. Miss Bertha's friends said nobody had ever told them before."],
        ["Re-shelve it quietly", "Re-shelved quietly. Your grandmother's friends paid the same for less and never knew."],
      ],
      [
        2020,
        "THE STORE IS 'ESSENTIAL' · YOUR CASHIER TASHA IS COUGHING",
        ["Send her home; cover the shift yourself", "You worked twenty-two days straight. Tasha got better. Somehow, you never got sick."],
        ["She works — there's no one else", "Tasha worked the register for three days, coughing. Two regulars got sick that week. She didn't have sick pay."],
      ],
      [
        2021,
        "THE LAST GROCERY STORE IN TOWN CLOSES",
        ["Beg corporate for a real produce section", "Corporate sent one more cooler. It's something."],
        ["Raise prices on the staples — demand is up", "Sales went up 30%. People had nowhere else to go."],
        "$",
      ],
      [
        2022,
        "THE FORMULA SHORTAGE · SHANICE NEEDS TWO CANS",
        ["Set cans aside for mothers you know", "You kept a box in the back for mothers with babies. Ms. Tate called it 'shrink' and wrote you up."],
        ["First come, first served, one per customer", "Fair by the rules. Shanice got there second. She watered down the formula to make it last until Thursday."],
      ],
      [
        2023,
        "CORPORATE WANTS ONE CLERK AT NIGHT · YOUR COUSIN DEVONTE WORKS NIGHTS",
        ["Keep two on nights; cover it with your hours", "Two on nights, and seventy-hour weeks for you. Ms. Tate docked your bonus."],
        ["Schedule one clerk — Devonte can handle it", "Devonte was robbed at gunpoint in March. He quit, and corporate hired someone who didn't know anyone."],
        "✂",
      ],
      [
        2024,
        "A GROCERY CHAIN WANTS THE EMPTY LOT · WITH A CITY TAX BREAK",
        ["Help the city recruit it", "You testified at City Hall. The grocery store opens next spring. Your store's sales will drop, and you're fine with that."],
        ["Tell corporate — they'll want to block it", "Corporate bought the lot and put a deed restriction on it: no grocery store, ever."],
      ],
    ],
  },
});
