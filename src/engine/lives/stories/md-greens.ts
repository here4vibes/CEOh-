import { life } from "../build";

export const GREENS = life({
  id: "md-contractor",
  protagonist: "Marcus Green",
  dossierTag: "PROGRAM MANAGER",
  householdName: "The Greens",
  location: "Bowie, MD",
  tagline: "Defense program manager, 46. Retired Army lieutenant colonel. Two daughters, one at Howard and one headed there.",
  description:
    "Marcus Green did twenty years in the Army, including two tours in Iraq. Now he runs a $400 million program for a defense contractor in Maryland. His wife, Monique, is a middle school assistant principal. They're the first in either family to own a house outright.",
  perspective:
    "The military gave me everything: discipline, a career, a way up. Contractors are how the work gets done now. If the Pentagon is going to pay for it, somebody's going to deliver it, and it ought to be somebody who knows what it's like to carry the gear.",
  closingAddendum:
    "You were dealt the ladder the military offered. It led to a contract with no ceiling, paid for by people who never got a ladder.",
  seat: {
    title: "The Program Manager",
    role: "Program Manager, Defense Contractor",
    color: "#5F7F3F",
    scoreLabel: "CONTRACT VALUE",
    dial: ["deliver what works", "grow the program"],
    dialNote: "cost overruns are billed to the government",
    board: "EXECUTIVE VP",
    firedBody:
      "The company moved you to a smaller program and put a retired Pentagon official in charge of yours. He grew it to $900 million by the next budget cycle. It still doesn't work in the field.",
    pressure: [
      "The executive VP, Stan Ruckert, asked why your program didn't request an increase this year.",
      "A former deputy assistant secretary just joined the company, and he's been asking about your program.",
    ],
    ranks: [
      ["Program Manager", "a $400 million program"],
      ["Senior PM", "a billion-dollar portfolio"],
      ["Vice President", "the Pentagon's cell numbers"],
      ["Senior VP", "a trip to the Paris Air Show"],
      ["Board Seat", "a seat on the contractor's board"],
      ["Revolving Door", "the Pentagon job, then back"],
    ],
    intro: [
      "You're Marcus Green. Your badge opens a windowless room in Columbia, Maryland, where you manage a radio system the Army has been waiting on for three years.",
      "The lights on the wall are the people who pay for it and the people who carry it: taxpayers whose schools and clinics compete for the same dollars, and soldiers like Staff Sergeant Tyrell Banks, who served under you in Iraq and now leads a squad at Fort Bliss.",
      "Your executive VP watches contract value. Your dial runs from delivering what works to growing the program.",
      "Nobody has ever been fired for a cost overrun. People get fired for shrinking a program.",
    ],
    introCta: "Badge into the lab ›",
    outLabel: "FALLOUT THIS BUDGET CYCLE",
    fired: "Why does defense spending only ever move in one direction?",
    ended: "The program is worth $2 billion now. Does it do what it was supposed to do?",
    people: [
      ["the school", "a new building", "the roof needs work", "the roof leaks into classrooms", "the school closed for repairs"],
      ["the clinic", "open five days a week", "cut to three days", "a two-month wait", "the clinic closed"],
      ["the road", "freshly paved", "potholes", "a bridge with a weight limit", "the bridge was closed"],
      ["the soldier", "gear that works", "gear that half works", "a radio that failed in the field", "hurt when the system failed"],
      ["the taxes", "paying their share", "paying more for less", "the county cut services", "services gone, taxes the same"],
      ["the veteran", "a job after the Army", "waiting on the VA", "a claim denied", "on the street"],
    ],
    turns: [
      [
        2010,
        "SIX MONTHS BEHIND AT YOUR FIRST REVIEW",
        ["Tell the Army now", "The program was restructured and your bonus shrank. The Army's program officer thanked you, privately."],
        ["Rebaseline the schedule; call it progress", "The new schedule made the delay disappear on paper. It came back two years later, bigger."],
      ],
      [
        2012,
        "SEQUESTRATION · PROGRAMS WITH FRIENDS IN CONGRESS SURVIVE",
        ["Keep suppliers where they're best", "The supply chain stayed efficient. When the cuts came, your program had eleven friends in Congress."],
        ["Spread subcontracts across forty districts", "Subcontracts in forty districts. Now forty members of Congress will vote to save it."],
      ],
      [
        2014,
        "A $40 BOLT IS INVOICED AT $1,400",
        ["Flag the markup to the Army", "The markup was cut on that bolt. On that bolt only."],
        ["Keep it — it's allowable", "The $1,400 bolt stayed on the invoice. It was allowable. Most things are."],
        "$",
      ],
      [
        2016,
        "FIELD TEST AT FORT BLISS · TYRELL BANKS'S SQUAD CAN'T GET A SIGNAL",
        ["Report the failures in full", "The report ran forty pages, and the program slipped six months. Tyrell sent you a text: 'Thanks, sir.'"],
        ["Report 'progress toward requirements'", "'Progress toward requirements.' The radios shipped to units, and soldiers found out what they couldn't do."],
      ],
      [
        2018,
        "A CONGRESSMAN WANTS THE NEW PLANT IN HIS DISTRICT",
        ["Build it where the engineers are", "You built it near the engineers. The congressman voted against your next budget line."],
        ["Build it in his district", "The plant went to his district. He became the program's loudest defender."],
        "⚡",
      ],
      [
        2021,
        "BOTH DAUGHTERS' TUITION IS DUE · YOUR BONUS RIDES ON THE BUDGET ASK",
        ["Ask for what the program needs", "An honest request and a smaller bonus. Your older daughter took out her first loan. She said she didn't mind. She did."],
        ["Ask for 20% more — everyone pads", "The request went through, and both girls are paid through spring. A barracks mold repair at Fort Meade slid another year."],
      ],
      [
        2023,
        "THE ARMY WANTS TO CANCEL THE PROGRAM",
        ["Let it end", "The program ended. Two hundred engineers moved to other work. The Army bought a commercial radio that worked."],
        ["Call the forty districts", "Congress saved it. It costs $2 billion now, and the Army still doesn't want it."],
        "⚡",
      ],
    ],
  },
});
