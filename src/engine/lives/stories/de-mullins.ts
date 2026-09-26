import { life } from "../build";

export const MULLINS = life({
  id: "de-collections",
  protagonist: "Tara Mullin",
  dossierTag: "COLLECTIONS TEAM LEAD",
  householdName: "The Mullins",
  location: "Newark, DE",
  tagline: "Collections team lead, 36. Single mom. Owes $11,000 on a credit card at 29%.",
  description:
    "Tara Mullin works for one of the credit card banks that came to Delaware because the state lets them charge whatever interest they want. Her son, Aiden, is eleven and needs braces. She got promoted because she's good on the phone: good at making people feel heard, and then making them pay.",
  perspective:
    "I know what it's like on the other end of that call. That's why I'm good at it. Everybody's one bad month from the list. The trick is to be the one making the calls, not the one getting them.",
  closingAddendum:
    "You were dealt a job calling people exactly like you. It paid your card down, one of theirs at a time.",
  seat: {
    title: "The Collector",
    role: "Collections Team Lead",
    color: "#BF5F3F",
    scoreLabel: "RECOVERY RATE",
    dial: ["work it out", "collect in full"],
    dialNote: "the bank pays bonuses on dollars recovered",
    board: "FLOOR MANAGER",
    firedBody:
      "Your team missed quota two months running. The bank sold your whole book to a debt buyer in Georgia that sues first and calls later. Your people were moved to fraud prevention, and your accounts got court dates.",
    pressure: [
      "Rich Barone, the floor manager, put your team's recovery rate on the big board. In red.",
      "HR scheduled a 'performance conversation' and froze your team's bonuses.",
    ],
    ranks: [
      ["Team Lead", "a headset and a quota"],
      ["Supervisor", "three teams"],
      ["Floor Manager", "an office with a window"],
      ["Director of Recovery", "a bonus tied to charge-offs"],
      ["VP of Collections", "the debt sales go through you"],
      ["Debt Buyer", "your own portfolio of paper"],
    ],
    intro: [
      "You're Tara Mullin. Row 14, headset on, and a sticky note on your monitor: AIDEN — BRACES — $5,200.",
      "The lights on the wall are cardholders: nurses, truckers, laid-off store managers and people whose hospital bills went on plastic. One of them is Carl Pettiford, a school bus driver in Dover. You'll get to know his voice.",
      "The floor manager watches your recovery rate. Your dial runs from working it out to collecting in full.",
      "Every dollar you don't collect, the bank sells to a debt buyer for four cents. They'll get it one way or another.",
    ],
    introCta: "Put on the headset ›",
    outLabel: "FALLOUT THIS SHIFT",
    fired: "Why is being broke such a good business?",
    ended: "Your team's recovery rate went up every year. How many of those people were you?",
    people: [
      ["the card", "paid off monthly", "carrying a balance", "ninety days late", "charged off and sold"],
      ["the calls", "no calls", "a call a week", "calls every night at dinner", "stopped answering the phone"],
      ["the 401(k)", "growing", "borrowed against", "cashed out to pay the card", "empty"],
      ["the medical bill", "covered by insurance", "on a card at 29%", "sent to collections", "sued over it"],
      ["the credit score", "excellent", "fair", "poor", "ruined"],
      ["the paycheck", "all theirs", "stretched thin", "one bad month from the list", "garnished"],
    ],
    turns: [
      [
        2009,
        "DELINQUENCIES DOUBLE · THE BANK WANTS DOLLARS, NOT EXCUSES",
        ["Offer hardship plans", "Hardship plans for the laid-off. Your team's rate was the lowest on the floor, and most of your plans held."],
        ["Push for full balances; call every day", "A man in Smyrna cashed out his 401(k) to make the calls stop. Your team hit quota."],
        "☎",
      ],
      [
        2010,
        "A NEW LAW CAPS SOME FEES · THE BANK HAS IDEAS",
        ["Follow the spirit of it", "Your team stopped stacking fees. Fee revenue dropped, and Rich asked whose side you were on."],
        ["Find the fees it didn't cover", "You found three. The average late customer paid $41 more that year, all of it legal."],
      ],
      [
        2013,
        "THE NEW SCRIPT SAYS 'LEGAL ACTION' ON EVERY CALL",
        ["Keep your team honest on the phone", "Fewer people paid on the first call. The ones who did said thank you."],
        ["Use the script — it works", "People paid out of fear. Almost none of them were ever sued. They didn't know that."],
        "☎",
      ],
      [
        2016,
        "CARL PETTIFORD'S BALANCE IS HIS WIFE'S CHEMO",
        ["Flag it for a hardship settlement", "He settled for a third. He cried on the phone, then apologized for crying."],
        ["Treat it like any balance — quota is quota", "He paid it off in eighteen months on a bus driver's salary. His wife finished chemo in the second month."],
      ],
      [
        2020,
        "FORBEARANCE ENDS · THE BACK BALANCES COME DUE",
        ["Stretch the plans quietly", "You stretched forty accounts past policy. Nobody caught it. This time."],
        ["Collect the back balance in full", "A nurse who'd worked every shift of the pandemic fell behind for good in October."],
      ],
      [
        2022,
        "A NEW BONUS · 2% OF WHAT YOUR TEAM COLLECTS",
        ["Keep your team's approach; skip the bonus", "Your card is still at $9,000. Aiden's braces are on a payment plan, at 26%."],
        ["Take it — your own card is at 29%", "Your card was paid off by August. Your team called 40% more people at dinnertime to get you there."],
        "$",
      ],
      [
        2023,
        "THE BANK WILL SELL 30,000 OLD ACCOUNTS TO A DEBT BUYER",
        ["Push to settle them first", "You settled nine thousand accounts for pennies. People got letters saying they were done. Some framed them."],
        ["Sell them — they're charge-offs", "The debt buyer sued four hundred people in its first month, over balances some of them had forgotten existed."],
      ],
    ],
  },
});
