import { life } from "../build";

export const KELLERMANS = life({
  id: "small-business",
  protagonist: "Sandra Kellerman",
  dossierTag: "FOUNDER & CEO",
  householdName: "The Kellermans",
  location: "Tulsa, OK",
  tagline: "HVAC contractor, 49. Built it with her father's tools and a used pickup. Seven employees, four vans with his name on the side.",
  description:
    "Sandra Kellerman started Kellerman Heating & Air in 2003 with her father's tools and a used Chevy pickup. She pays above market and is proud of it. Her lead tech, Javi Ruiz, has been with her twelve years. Her father, Lyle, is eighty and still stops by the shop every morning with doughnuts.",
  perspective:
    "Risk is real. The rules come from people who've never signed the front of a paycheck. My employees aren't abstractions. They're families whose health insurance I negotiate every year. If I don't grow, somebody bigger eats me. That's not greed. That's Tulsa.",
  closingAddendum:
    "You were dealt a life where every decision had your name on it. Then someone offered to buy the name.",
  seat: {
    title: "The Owner",
    role: "CEO, Kellerman Heating & Air",
    color: "#46B17F",
    scoreLabel: "MARGIN",
    dial: ["run it for the people", "run it for a buyer"],
    dialNote: "a buyer pays for margin, not loyalty",
    board: "LENDER",
    firedTitle: "BOUGHT OUT",
    firedBody:
      "The bank called the note. The private equity firm bought the company out of the wreckage at half the price, put a new logo on your father's vans and did everything you wouldn't, the same year.",
    pressure: [
      "Your banker, Curtis, asked to 'grab coffee.' It wasn't about coffee.",
      "The line of credit is 'under review.' The firm's new offer is on your desk, and it's smaller than the last one.",
    ],
    ranks: [
      ["Owner", "four vans and a line of credit"],
      ["Founder-CEO", "a logo someone else designed"],
      ["Platform CEO", "three acquired shops"],
      ["Regional CEO", "the roll-up's poster company"],
      ["Operating Partner", "equity in the fund"],
      ["Exited", "a lake house and a nondisclosure"],
    ],
    intro: [
      "You're Sandra Kellerman. It's July in Tulsa, 104 degrees, and every phone line in the shop is lit. A man in a quarter-zip is waiting in your office. He's from a private equity firm.",
      "The lights on the wall are your crew, your customers and the families who've called you at 2 a.m. when the furnace quit, including Mrs. Alvarez on South Peoria, who has called you for fifteen years.",
      "The bank watches your margin. Your dial runs from running it for the people to running it for a buyer.",
      "The firm has bought eleven shops in Oklahoma this year. It will buy a twelfth whether or not it's yours.",
    ],
    introCta: "Unlock the shop ›",
    outLabel: "FALLOUT THIS QUARTER",
    fired: "Why is 'grow or get bought' the only choice for a good small business?",
    ended: "You built something and sold it for what it was worth. What was it worth to the people who worked there?",
    people: [
      ["the furnace", "fixed right the first time", "upsold a new unit", "financed a unit they didn't need", "paying off a $14,000 unit on a card"],
      ["the job", "a Kellerman tech for ten years", "on commission now", "trapped by a non-compete", "left the trade"],
      ["the health plan", "the family plan", "a high deductible", "skips the checkups", "medical debt in collections"],
      ["the membership", "never needed one", "signed up at the door", "can't find how to cancel", "still paying for a house they sold"],
      ["the paycheck", "above market", "flat for three years", "picks up weekend calls", "working two jobs"],
      ["the service", "the local shop answers the phone", "the shop was bought out", "a call center in Arizona", "no one comes out after dark anymore"],
    ],
    turns: [
      [
        2015,
        "A PRIVATE EQUITY FIRM IS ROLLING UP HVAC IN OKLAHOMA",
        ["Stay independent", "You stayed independent. The firm bought the two shops across town and started undercutting you."],
        ["Take their growth money", "The money came in. So did a board seat and a man named Preston who reads your books every Monday."],
      ],
      [
        2016,
        "THE PARTNERS WANT TECHS ON COMMISSION",
        ["Pay techs to fix, not to sell", "Techs fix what's broken. Revenue per call stayed flat, and Preston made a chart."],
        ["Commission on every replacement sold", "Mrs. Alvarez paid $14,000 for a unit that needed a $300 part. Javi sold it to her, and he couldn't look at you."],
      ],
      [
        2018,
        "THE HEALTH PLAN RENEWAL IS UP 31%",
        ["Absorb it — skip your own salary", "You skipped your own salary for two months and kept the family plan."],
        ["Move everyone to a high-deductible plan", "High-deductible plans for everyone. Javi put off his knee surgery another year."],
        "✂",
      ],
      [
        2020,
        "EVERYONE'S HOME · EVERY AC IN TULSA IS RUNNING",
        ["Hire and train two more techs", "Two new techs, trained by Javi. Wait times dropped, and so did the margin."],
        ["Sixty-hour weeks, no new hires", "Sixty-hour weeks through August. Javi's knee finally gave out on a roof in Broken Arrow."],
      ],
      [
        2021,
        "NON-COMPETES FOR EVERY TECH",
        ["Let them work wherever they want", "Two techs left for a competitor. Everyone else stayed because they wanted to."],
        ["Two years, fifty miles — sign or go", "Everyone signed. Javi wanted to open his own shop. Now he can't, for two years."],
        "✎",
      ],
      [
        2022,
        "MAINTENANCE MEMBERSHIPS · YOUR FATHER SIGNED UP",
        ["Make canceling one click, for everyone", "One-click cancel. Renewals fell by a third. Lyle said it was the most honest thing on the website."],
        ["Auto-renew, and make it hard to cancel", "Auto-renew. Lyle has been paying for a membership on a house he sold in 2019. You found out from your mom."],
      ],
      [
        2023,
        "THE FIRM OFFERS NINE TIMES EARNINGS",
        ["Sell to your employees instead", "The shop is employee-owned now. You got less. Javi is on the board."],
        ["Take the check", "You took the check. The firm cut the crew by two in six months. The vans still say Kellerman."],
        "$",
      ],
    ],
  },
});
