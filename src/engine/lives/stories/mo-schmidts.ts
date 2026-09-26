import { life } from "../build";

export const SCHMIDTS = life({
  id: "mo-municipal-fines",
  protagonist: "Linda Schmidt",
  dossierTag: "CITY ADMINISTRATOR",
  householdName: "The Schmidts",
  location: "North St. Louis County, MO",
  tagline: "City administrator, 48. Runs a town of 9,000. A third of its budget comes from the municipal court.",
  description:
    "Linda Schmidt grew up in St. Charles and got her public administration degree at Mizzou. She has run the town for eight years. It was mostly white when she was born; it's mostly Black now. She lives thirty minutes away and drives in every morning past the court, which meets once a month, at night.",
  perspective:
    "The tax base left when the plants did, and the state won't let us raise taxes without a vote nobody will pass. So the town is funded by its court. I didn't design that. I'm trying to keep the police paid and the streetlights on with what I've got.",
  closingAddendum:
    "You were dealt a town that had to fund itself somehow. It ended up funded by its own residents, one ticket at a time.",
  seat: {
    title: "The City Administrator",
    role: "City Administrator",
    color: "#7F5FBF",
    scoreLabel: "COURT REVENUE",
    dial: ["the residents", "the budget"],
    dialNote: "the court pays for the police",
    board: "COUNCIL",
    firedBody:
      "The council hired an administrator from a neighboring town where fines covered 40% of the budget. He brought his police chief with him. The court docket doubled in a year.",
    pressure: [
      "The finance committee says court revenue is $80,000 behind projection.",
      "Mayor Kirchner says the chief 'has ideas' about traffic enforcement and wants you to listen.",
    ],
    ranks: [
      ["Administrator", "a town of 9,000"],
      ["Rising Star", "the county municipal league"],
      ["Bigger City", "a suburb with a real tax base"],
      ["State Association", "you speak for Missouri's cities"],
      ["Consultant", "other towns hire your model"],
      ["Court Vendor", "a stake in the ticketing software"],
    ],
    intro: [
      "You're Linda Schmidt. Your town has a mayor, a council, a police department and a municipal court. It has almost no tax base. This year's budget is on your desk, and it's short.",
      "The lights on the wall are residents: nurses, bus drivers and retirees, most of them Black, many of them one ticket from a warrant. Loretta Jones, a home health aide on Chambers Road, is one of them.",
      "The council watches court revenue. Your dial runs from protecting the residents to balancing the budget.",
      "A $75 ticket becomes $400 with fees. A missed court date becomes a warrant. A warrant becomes a lost job.",
    ],
    introCta: "Open the budget ›",
    outLabel: "FALLOUT THIS BUDGET",
    fired: "How should a town with no tax base pay for itself, if not with its residents?",
    ended: "The budget balanced every year. How many people in town have a warrant?",
    people: [
      ["the ticket", "never been stopped", "a ticket, paid on time", "a $75 ticket turned into $400", "a warrant for an unpaid ticket"],
      ["the court", "never been", "missed one date", "a failure-to-appear fee", "a weekend in jail"],
      ["the job", "steady work", "missed work for court", "lost a shift for court", "fired after the arrest"],
      ["the license", "a valid license", "suspended for unpaid fines", "driving without one", "no way to get to work"],
      ["the trust", "trusts the police", "avoids the police", "afraid of the police", "moved out of town"],
      ["the debt", "no fines", "a payment plan", "probation fees every month", "owes more than a month's pay"],
    ],
    turns: [
      [
        2008,
        "SALES TAX FALLS · THE BUDGET IS $600,000 SHORT",
        ["Cut City Hall, starting with your raise", "You cut City Hall, starting with yourself. The budget still came up short, and the mayor said so."],
        ["Ask the chief to 'step up enforcement'", "Traffic stops tripled. A broken taillight became $300 in fines and fees."],
        "⚡",
      ],
      [
        2010,
        "A $120 'FAILURE TO APPEAR' FEE",
        ["Waive it for first offenses", "First offenses waived. Court revenue fell 8%, and the finance committee asked why."],
        ["Add it to every missed date", "The fee went on every missed date. Missed dates went up, because court meets at night and people work nights."],
        "$",
      ],
      [
        2012,
        "LORETTA JONES OWES $1,100 ON A $75 TICKET",
        ["Clear it with community service", "She did forty hours at the library. The court clerk said you were setting a precedent."],
        ["Let the court handle it — it's not your call", "The warrant went out in May. She spent a weekend in the county jail and lost her home health job."],
      ],
      [
        2014,
        "FERGUSON · THE COUNTRY IS LOOKING AT TOWNS LIKE YOURS",
        ["Audit your own court and publish it", "The audit was ugly, and you published it. The council censured you, 4 to 3."],
        ["Say your town is different", "You told a reporter your town was different. The Justice Department's report on Ferguson, when it came, described your court too."],
      ],
      [
        2015,
        "THE STATE CAPS FINES AT 12.5% OF THE BUDGET",
        ["Comply fully and cut the budget", "You complied. The police department lost two officers, and the mayor blamed Jefferson City, and you."],
        ["Reclassify fines as 'fees'", "Fines became fees. The revenue stayed the same. So did the tickets."],
        "§",
      ],
      [
        2018,
        "A PRIVATE PROBATION COMPANY WILL SUPERVISE FOR FREE",
        ["Keep probation public", "Probation stayed public, and it cost the town $60,000 a year."],
        ["Take the free contract — they bill defendants", "The company charges defendants $45 a month. Some went back to jail for failing to pay it."],
      ],
      [
        2022,
        "A PLAN TO MERGE WITH THREE NEIGHBORING TOWNS",
        ["Back the merger, and your own job's end", "You backed it. The council voted it down, and then voted you out."],
        ["Protect your town's court", "The town kept its name, its police and its court. The court still meets once a month, at night."],
      ],
    ],
  },
});
