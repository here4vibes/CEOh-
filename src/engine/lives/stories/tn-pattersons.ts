import { life } from "../build";

export const PATTERSONS = life({
  id: "tn-hospital-billing",
  protagonist: "Brittany Patterson",
  dossierTag: "REVENUE CYCLE MANAGER",
  householdName: "The Pattersons",
  location: "Nashville, TN",
  tagline: "Hospital revenue manager, 34. Still paying off her own ER bill from 2017.",
  description:
    "Brittany Patterson grew up in Murfreesboro and studied accounting at MTSU. She manages billing and collections for four hospitals owned by a company headquartered in Nashville, the capital of the for-profit hospital business. Her fiancé, Tyler, is a freelance sound engineer on Music Row with no health insurance.",
  perspective:
    "Hospitals aren't charities, even the nonprofits. Somebody has to pay for the building and the nurses. The bill is complicated because the whole system is complicated. I make sure the hospital gets paid for the care it gives. That's not cruelty. That's accounting.",
  closingAddendum:
    "You were dealt the desk where a hospital stay becomes a debt. You'd been on the other side of that bill yourself.",
  seat: {
    title: "The Revenue Manager",
    role: "Revenue Cycle Manager",
    color: "#BF3F7F",
    scoreLabel: "COLLECTIONS",
    dial: ["bill what's fair", "bill what's allowed"],
    dialNote: "the list price is whatever the hospital says it is",
    board: "CFO",
    firedBody:
      "The company outsourced billing to a firm that sues patients by the thousand. Collections rose. So did the wage garnishments in Rutherford County.",
    pressure: [
      "The CFO, Mr. Whitfield, says your hospitals' collections trail the company average.",
      "The company is 'evaluating outsourcing partners' for billing. You're in the meeting, for now.",
    ],
    ranks: [
      ["Manager", "four hospitals' billing"],
      ["Director", "the Tennessee division"],
      ["VP of Revenue Cycle", "the whole company's collections"],
      ["CFO", "the earnings call"],
      ["Consultant", "other hospitals license your model"],
      ["Industry Board", "a seat at the hospital association"],
    ],
    intro: [
      "You're Brittany Patterson. The monthly aging report is on your screen: $41 million owed to four hospitals by 38,000 patients. On your fridge at home is a $2,300 bill from a kidney stone in 2017.",
      "The lights on the wall are patients: the uninsured, the underinsured, people surprised by a doctor they never picked, Doyle Hensley, a school custodian in Smyrna, and Tyler, who rides a motorcycle and has no insurance.",
      "The CFO watches collections. Your dial runs from billing what's fair to billing what's allowed.",
      "You know exactly what the letter looks like. You've opened one.",
    ],
    introCta: "Open the aging report ›",
    outLabel: "FALLOUT THIS QUARTER",
    fired: "Why does getting sick come with a debt?",
    ended: "Collections rose every year. How many of those patients had insurance?",
    people: [
      ["the bill", "covered by insurance", "a surprise bill from a doctor they never chose", "sent to collections", "sued over it"],
      ["charity care", "qualified and approved", "qualified, never told", "applied, lost in paperwork", "never knew it existed"],
      ["the paycheck", "all theirs", "a payment plan", "garnished", "lost the job over the court date"],
      ["the doctor", "goes when sick", "waits until it's bad", "avoids the hospital", "died at home rather than go back"],
      ["the credit", "good credit", "a medical collection", "ruined credit", "can't rent an apartment"],
      ["the price", "knew the price up front", "a posted price nobody could read", "billed the list price", "billed triple for being uninsured"],
    ],
    turns: [
      [
        2014,
        "AN MRI LISTS AT $3,800 · FOR THE UNINSURED",
        ["Give the uninsured a real price", "Uninsured patients got a real price: $600 for the MRI. Mr. Whitfield called it 'leakage.'"],
        ["Bill the list price", "The uninsured paid more for the same scan than anyone with a card: $3,800."],
      ],
      [
        2016,
        "CHARITY CARE IS OPTIONAL · NOBODY HAS TO MENTION IT",
        ["Screen every patient for it", "A third of your collections cases qualified. Your numbers dropped, and your inbox filled with thank-yous."],
        ["Don't mention it unless they ask", "Most eligible patients never knew it existed. The ones who asked had usually been told by a nurse."],
        "✂",
      ],
      [
        2018,
        "A VENDOR WILL SUE OVER ANY BALANCE ABOVE $500",
        ["Keep lawsuits a last resort", "Lawsuits stayed rare. Collections stayed flat."],
        ["Sign with the vendor", "The vendor sued 3,000 patients in a year. Most never showed up to court, and their wages were garnished."],
        "§",
      ],
      [
        2019,
        "DOYLE HENSLEY OWES $8,400 FOR HIS APPENDIX",
        ["Apply charity care after the fact", "You applied it retroactively. His balance went to zero. He called twice to make sure it wasn't a mistake."],
        ["Let the vendor file", "The vendor sued in Rutherford County. A quarter of his paycheck went to the hospital for two years."],
      ],
      [
        2020,
        "RELIEF MONEY ARRIVES · COLLECTIONS CONTINUE",
        ["Pause collections for the year", "Collections paused. Mr. Whitfield called it 'generous,' which was not a compliment."],
        ["Bank the relief and keep collecting", "The relief money was booked as profit, and the letters kept going out."],
      ],
      [
        2021,
        "TYLER'S CRASH · AN OUT-OF-NETWORK SURGEON · $38,000",
        ["Push to end surprise bills for everyone", "You took it to the CFO. He said a new federal law would fix it in January. It did, for everyone after Tyler."],
        ["Get Tyler's bill fixed quietly", "You called a friend in billing. Tyler's bill disappeared. Nobody else's did."],
      ],
      [
        2024,
        "THE COMPANY WANTS TO SELL 40,000 OLD PATIENT DEBTS",
        ["Forgive them instead", "Forty thousand families got a letter saying they owe nothing. Some framed it."],
        ["Sell them for three cents on the dollar", "The debt sold. The buyers started calling the next week."],
        "$",
      ],
    ],
  },
});
