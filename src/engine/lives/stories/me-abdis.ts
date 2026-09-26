import { life } from "../build";

export const ABDIS = life({
  id: "me-home-care",
  protagonist: "Hodan Abdi",
  dossierTag: "HOME CARE AGENCY OWNER",
  householdName: "The Abdis",
  location: "Lewiston, ME",
  tagline: "Home care agency owner, 34. Came to Maine at nine as a refugee. Forty aides, all paid by Medicaid.",
  description:
    "Hodan Abdi arrived in Lewiston in 2001 with her mother and two brothers. She was a home health aide at nineteen and started her own agency at twenty-eight. Her aides are Somali, Congolese and French-Canadian. Her clients are old, mostly white and mostly alone. Her mother is one of her aides.",
  perspective:
    "The state sets the rate, and the rate doesn't cover a living wage. Everybody knows it: the legislature, the hospital, the families. So the work gets done by women who can't afford to say no, and everyone calls it a labor shortage. I'm trying to run something decent inside a number that isn't.",
  closingAddendum:
    "You were dealt the job of caring for people the state pays too little to care for. The margin had to come from somewhere, and it always came out of someone's hours.",
  seat: {
    title: "The Agency Owner",
    role: "Owner, Home Care Agency",
    color: "#4DA38A",
    scoreLabel: "BILLABLE HOURS",
    dial: ["pay the aides", "cover the rate"],
    dialNote: "MaineCare pays what it pays",
    board: "PAYROLL",
    firedTitle: "SOLD",
    firedBody:
      "You couldn't make payroll. A national home care chain bought your client list for a fraction of what you'd built. Your aides were rehired at a dollar less an hour. Mrs. Pelletier gets a new aide every month.",
    pressure: [
      "Payroll cleared by $212 this week. Your accountant, Mr. Gagnon, called it 'a warning.'",
      "The bank froze your line of credit, and a national chain's recruiter is texting your aides.",
    ],
    ranks: [
      ["Owner", "forty aides and a fax machine"],
      ["Growing Agency", "an office on Lisbon Street"],
      ["Regional Agency", "clients in three counties"],
      ["State Leader", "a seat on the governor's task force"],
      ["Acquirer", "you buy the small agencies now"],
      ["Exited", "a check from the national chain"],
    ],
    intro: [
      "You're Hodan Abdi. It's 6:10 a.m., and the schedule is already broken: two aides out sick, a hospital discharge at nine, and a fax machine that works if you hit it.",
      "The lights on the wall are aides and the people they keep going: Deqa, who drives eighty miles a day between clients; Mrs. Pelletier, 88, in Little Canada, who won't let anyone else do her hair; and the families who depend on both.",
      "The state pays a fixed rate per hour of care. Your dial runs from paying the aides to covering the rate.",
      "Every dollar you don't pay an aide keeps the agency open. Every aide you lose is a client who goes without.",
    ],
    introCta: "Open the schedule ›",
    outLabel: "FALLOUT THIS MONTH",
    fired: "Why is the most human job in the economy paid like the least?",
    ended: "The agency survived. Who carried it?",
    people: [
      ["the care", "the same aide every morning", "a new aide every month", "visits cut short", "nobody came today"],
      ["the aide's wage", "a living wage", "$15 an hour", "unpaid drive time", "quit for the warehouse"],
      ["the aide's hours", "full-time with benefits", "part-time, split shifts", "on an app, no benefits", "no steady work"],
      ["getting up", "helped out of bed at eight", "helped up at eleven", "waits all morning", "fell and waited for hours"],
      ["the family", "visits on weekends", "calls from Portland", "can't take more time off", "moved Mom to a home two hours away"],
      ["the aide's own kids", "home by dinner", "a neighbor watches them", "the oldest watches the youngest", "the kids are on their own"],
    ],
    turns: [
      [
        2018,
        "THE STATE RATE IS FLAT FOR THE FIFTH YEAR",
        ["Raise aide pay anyway", "A dollar more an hour for everyone. The agency ran at a loss for a quarter, and nobody quit."],
        ["Hold wages; the rate is the rate", "Wages held. Two of your best aides left for the warehouse off the turnpike."],
      ],
      [
        2019,
        "DEQA ASKS TO BE PAID FOR THE DRIVE BETWEEN CLIENTS",
        ["Pay drive time for everyone", "Drive time paid. The margin got thinner, and the aides stopped leaving."],
        ["Drive time isn't billable — tell her no", "No drive time. Deqa spends two unpaid hours a day in her car between clients."],
      ],
      [
        2020,
        "COVID · YOUR AIDES ARE AFRAID TO GO IN",
        ["Hazard pay and masks, from your savings", "Your savings covered hazard pay and masks. No aide got sick on shift that spring."],
        ["Visits continue; aides bring their own masks", "Visits continued. Three aides and one client got sick in April. Your mother was one of the aides."],
      ],
      [
        2021,
        "THE HOSPITAL WANTS SAME-DAY DISCHARGES",
        ["Take only what you can staff", "You said no twice. The hospital started calling a different agency first."],
        ["Take them all — hospitals call whoever says yes", "Yes to everything. An aide did four discharges in one shift and fell asleep at a red light on the way home."],
      ],
      [
        2022,
        "A VENDOR OFFERS GPS CLOCKS FOR EVERY AIDE",
        ["Trust your aides", "No GPS. Deqa stays a few extra minutes with Mrs. Pelletier when she's confused, and nobody docks her."],
        ["Clock them to the minute", "Clocked to the minute. Deqa was docked six minutes for helping Mrs. Pelletier find her glasses."],
        "⚙",
      ],
      [
        2023,
        "YOUR MOTHER ASKS FOR A RAISE · SHE'S ONE OF YOUR AIDES",
        ["Raise everyone to $20 an hour", "Everyone got $20. You took no salary for four months. Your mother said it was the first time the job had felt like a job."],
        ["Say no — you can't favor family", "You said no, and it was fair. She's still at $16.50. She hasn't asked again."],
      ],
      [
        2024,
        "A NATIONAL CHAIN OFFERS TO BUY YOUR CLIENT LIST",
        ["Make it a worker co-op", "The aides own the agency now. You make less; they make more. Mrs. Pelletier still gets her hair done on Tuesdays."],
        ["Sell to the chain", "The chain bought the list. The aides were rehired at a dollar less, and Mrs. Pelletier gets a new aide every month."],
        "$",
      ],
    ],
  },
});
