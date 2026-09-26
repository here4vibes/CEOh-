import { life } from "../build";

export const CAUDILLS = life({
  id: "ky-pharmacy",
  protagonist: "Gary Caudill",
  dossierTag: "PHARMACIST",
  householdName: "The Caudills",
  location: "Hazard, KY",
  tagline: "Independent pharmacist, 58. Third generation behind the same counter on Main Street.",
  description:
    "Gary Caudill's grandfather sold patent medicine from the counter Gary works now. Gary coaches Little League, sings bass in the choir at First Baptist and knows most of his customers' grandparents by name. For a decade, the best-selling item in his store was a painkiller.",
  perspective:
    "People here work jobs that break their bodies. When a doctor writes a prescription, it's not the pharmacist's place to second-guess him. That's what we were taught, and the drug companies spent a lot of money making sure we kept believing it.",
  closingAddendum:
    "You were dealt the counter every family in town trusted. The pills came across it by the truckload, and so did the money.",
  seat: {
    title: "The Pharmacist",
    role: "Owner, Main Street Pharmacy",
    color: "#9FBF3F",
    scoreLabel: "SCRIPTS FILLED",
    dial: ["question the script", "fill what's written"],
    dialNote: "the drug rep says the risk is under one percent",
    board: "DISTRIBUTOR",
    firedTitle: "CLOSED",
    firedBody:
      "You couldn't compete. A chain pharmacy out by the bypass filled everything you wouldn't, and your customers followed. Your grandfather's store is a vape shop now.",
    pressure: [
      "The distributor's rep, Todd, says your volume is too low for the pricing you're getting.",
      "The chain opened a store by the bypass. Half your regulars haven't been back in a month.",
    ],
    ranks: [
      ["Pharmacist", "your grandfather's counter"],
      ["Owner", "a second store in Whitesburg"],
      ["Regional Chain", "five stores in the hills"],
      ["Top Dispenser", "the distributor sends a steak dinner"],
      ["Pharmacy Board", "a seat in Frankfort"],
      ["Distributor Partner", "equity in the supply chain"],
    ],
    intro: [
      "You're Gary Caudill. The drug rep left a pen, a notepad and a stack of brochures on your counter this morning: a new painkiller, twelve-hour relief, 'less than one percent risk of addiction.'",
      "The lights on the wall are Hazard: miners with ruined backs, their wives, their teenagers, the preacher, the county judge, and Shane Sturgill, who pitched for your Little League team the year you won the district.",
      "The distributor ships as much as you order. Your dial runs from questioning the script to filling what's written.",
      "Nobody told you what was happening. Everybody could see it anyway.",
    ],
    introCta: "Unlock the pharmacy ›",
    outLabel: "FALLOUT THIS MONTH",
    fired: "How did millions of pills reach a town of five thousand without anyone stopping them?",
    ended: "Your store survived. How many of your customers did?",
    people: [
      ["the prescription", "filled once for a broken wrist", "a refill every month", "running out early", "addicted"],
      ["the family", "Sunday dinner at Mamaw's", "worried about the son", "raising the grandkids", "buried a child"],
      ["the job", "working at the mine", "on disability for the back", "fired after a failed test", "can't pass a drug test"],
      ["the town", "a Main Street drugstore", "a pill mill in Corbin", "heroin on the east side", "the county leads the state in overdoses"],
      ["the naloxone", "never needed it", "keeps a kit in the truck", "used it on a neighbor", "no one had it in time"],
      ["the treatment", "clean for five years", "on a waiting list", "no clinic within fifty miles", "died waiting for a bed"],
    ],
    turns: [
      [
        1998,
        "A NEW PAINKILLER · 'LESS THAN ONE PERCENT RISK'",
        ["Wait and see", "You waited. The pharmacy in Whitesburg took the new scripts, and a few of your customers with them."],
        ["Stock it — every doctor is prescribing it", "You stocked it. Within a year it was your best-selling item, ahead of insulin."],
        "℞",
      ],
      [
        2001,
        "SHANE STURGILL, 19, HURT HIS BACK ROOFING · 80 MG, TWICE A DAY",
        ["Call the doctor about the dose", "The doctor lowered it and told you to stay in your lane. Shane grumbled and filled it."],
        ["Fill it — the doctor knows his patient", "You filled it and asked about his pitching arm. He said he'd be back on a roof in a month."],
        "℞",
      ],
      [
        2004,
        "ONE DOCTOR WRITES SIXTY SCRIPTS A DAY",
        ["Report him to the pharmacy board", "The board opened an investigation that took four years. He kept writing the whole time."],
        ["Fill them — he's licensed", "His patients drove in from four counties. Your parking lot needed a second row."],
        "℞",
      ],
      [
        2008,
        "CARS FROM OHIO AT 7 A.M. · THE DISTRIBUTOR OFFERS A VOLUME DEAL",
        ["Refuse out-of-state scripts", "The cars with Ohio plates went down the street. Todd from the distributor stopped bringing doughnuts."],
        ["Take the volume deal", "Four million pills in six years. Hazard has about five thousand people."],
        "$",
      ],
      [
        2012,
        "SHANE STURGILL IS FOUND IN HIS TRUCK",
        ["Tell his mother the truth at the visitation", "You told her where the pills came from. She held your hand for a long time. Then she stopped coming to the store."],
        ["Say nothing — you followed the law", "You sent flowers. She never knew where the pills came from, and you never told her."],
      ],
      [
        2016,
        "HEROIN MOVES IN · A NALOXONE KIT COSTS $140",
        ["Give naloxone away at the counter", "It saved eleven people that you know of in the first year. You paid for it out of the store's margin."],
        ["Stock it at full price", "It sat on the shelf behind the counter. Most of the people who needed it couldn't afford it."],
      ],
      [
        2022,
        "THE SETTLEMENT MONEY ARRIVES · THE COUNTY ASKS YOUR ADVICE",
        ["Treatment beds, here in Hazard", "The county opened forty treatment beds in the old hospital. There's a waiting list, but it moves."],
        ["A bigger jail — that's where they end up", "The county built a bigger jail. It filled within a year."],
      ],
    ],
  },
});
