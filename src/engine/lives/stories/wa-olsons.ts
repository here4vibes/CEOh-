import { life } from "../build";

export const OLSONS = life({
  id: "wa-detention",
  protagonist: "Jake Olson",
  dossierTag: "DETENTION OFFICER",
  householdName: "The Olsons",
  location: "Tacoma, WA",
  tagline: "Army veteran, 26. Officer at a privately run immigration detention center. The best-paying job he could find.",
  description:
    "Jake Olson grew up in Puyallup and enlisted at eighteen. He did a tour in Afghanistan and came home to Joint Base Lewis-McChord with a bad knee and a TBI diagnosis. The company that runs the detention center on the Tacoma tideflats hired him fast. His girlfriend, Ashley, is pregnant with their first.",
  perspective:
    "I didn't write the immigration laws. People are there because the government says they have to be. My job is to keep them safe and keep order, same as it was overseas. It's a job with benefits, and I've got a kid on the way.",
  closingAddendum:
    "You were dealt a veteran's homecoming with one good job in it. The company was paid by the bed, and you guarded the beds.",
  seat: {
    title: "The Officer",
    role: "Detention Officer",
    mode: "attn",
    color: "#5F5F8F",
    scoreLabel: "BEDS FILLED",
    litLabel: "still has a fighting chance",
    dial: ["treat them as people", "run it by the contract"],
    dialNote: "the company is paid per bed, per night",
    board: "ADMIN",
    firedBody:
      "The facility administrator replaced you with an officer transferred from a facility in Texas. He enforced every rule to the letter, including the ones that end in solitary.",
    pressure: [
      "Administrator Kowalski says your unit logs too many 'accommodations.'",
      "Corporate is reviewing staffing in Tacoma. Your lieutenant says to 'watch it.'",
    ],
    ranks: [
      ["Officer", "a unit and a badge"],
      ["Sergeant", "the whole shift"],
      ["Lieutenant", "the facility's security"],
      ["Assistant Administrator", "operations"],
      ["Administrator", "the facility is yours"],
      ["Corporate", "an office at headquarters in Florida"],
    ],
    intro: [
      "You're Jake Olson. Your first shift starts at 6 p.m. behind two locked doors on the Tacoma tideflats. The facility holds 1,500 people, and the company is paid for every bed, every night.",
      "The lights on the wall are the detained and their families: asylum seekers, people picked up at traffic stops, parents whose kids are waiting at home, and Eduardo, a Honduran carpenter on your unit who shows everyone a photo of his daughter.",
      "The facility administrator watches the beds. Your dial runs from treating them as people to running it by the contract.",
      "The contract guarantees payment for a minimum number of beds, full or not. The company prefers full.",
    ],
    introCta: "Report for shift ›",
    outLabel: "FALLOUT THIS SHIFT",
    fired: "What if detention weren't paid by the bed?",
    ended: "The beds stayed full. What happened to the people in them?",
    people: [
      ["the case", "released on bond", "waiting on a hearing", "months in detention", "deported"],
      ["the family", "visits every week", "phone calls only", "the kids haven't visited in months", "the family was separated"],
      ["the medical care", "seen quickly", "waited days", "waited nine hours in pain", "died in custody"],
      ["the work", "no work", "works for $1 a day", "on a hunger strike", "in solitary"],
      ["the lawyer", "a lawyer from day one", "a volunteer lawyer, sometimes", "no lawyer at the hearing", "deported without seeing one"],
      ["the kids at home", "with the other parent", "with an aunt", "in foster care", "lost track of their father"],
    ],
    turns: [
      [
        2018,
        "DETAINEES COOK AND CLEAN FOR $1 A DAY",
        ["Report it up the chain", "Your lieutenant said it was voluntary. You said it didn't look voluntary. He wrote that down."],
        ["It's voluntary — don't ask", "You didn't ask. Eduardo mopped your unit for a dollar a day, and was grateful for the dollar."],
      ],
      [
        2019,
        "A HUNGER STRIKE ON YOUR UNIT · EDUARDO IS ON DAY NINE",
        ["Hear them out and pass it up", "Two of their demands were met. Most weren't. Eduardo ate on day eleven."],
        ["Move the leaders to solitary", "The leaders went to solitary. The strike ended on day twenty."],
        "▣",
      ],
      [
        2020,
        "COVID · 1,500 PEOPLE, SHARED CELLS",
        ["Push for releases of the sick and old", "Forty people were released to their families. The rest stayed."],
        ["Lock the units down", "Locked down twenty-three hours a day. The virus moved through anyway."],
        "▣",
      ],
      [
        2021,
        "THE STATE BANS PRIVATE DETENTION · THE COMPANY SUES",
        ["Start applying for other jobs", "You sent out twenty applications and got one call back: hospital security, for less."],
        ["Stay — the company says it will win", "You stayed. The company won in federal court, and the facility stayed open."],
      ],
      [
        2022,
        "A DETAINEE'S CHEST PAIN · PROTOCOL SAYS CALL THE CONTRACTOR",
        ["Call 911 yourself", "The ambulance came in twelve minutes, and he lived. The company wrote you up for breaking protocol."],
        ["Follow protocol and wait", "The contractor's nurse arrived nine hours later. He was taken to the hospital that night."],
      ],
      [
        2023,
        "A REPORTER ASKS ABOUT CONDITIONS · YOUR SON IS TWO WEEKS OLD",
        ["Tell her the truth", "Your name was in the story, and you were put on leave with a newborn at home. Ashley said she was proud of you and asked how long the savings would last."],
        ["Refer her to corporate", "Corporate told her conditions were 'humane.' You held your son that night and didn't say much."],
      ],
      [
        2025,
        "THE FACILITY IS EXPANDING TO 3,000 BEDS · A LIEUTENANT'S SLOT IS OPEN",
        ["Transfer out", "You work security at Tacoma General now, for less. You sleep better. Mostly."],
        ["Take the promotion", "You took the promotion. The facility will hold three thousand people."],
        "$",
      ],
    ],
  },
});
