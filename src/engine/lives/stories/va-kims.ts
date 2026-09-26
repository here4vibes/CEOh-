import { life } from "../build";

export const KIMS = life({
  id: "va-data-centers",
  protagonist: "Esther Kim",
  dossierTag: "ECONOMIC DEVELOPMENT DIRECTOR",
  householdName: "The Kims",
  location: "Loudoun County, VA",
  tagline: "County economic development director, 39. Korean-American. Her parents have run a dry cleaner in Annandale for thirty years.",
  description:
    "Esther Kim did her homework behind the counter of her parents' dry cleaner. She went to UVA, got a master's in public policy and came home to work for the county. She and her husband, Jae, have two kids and a townhouse in Ashburn. Her parents' electric bill is the biggest cost in their business.",
  perspective:
    "The county needs revenue, and data centers pay enormous taxes while sending almost no kids to our schools. It looks like free money. My job is to bring the money in. Somebody else's job is to worry about what comes with it. Lately, that's been my job too.",
  closingAddendum:
    "You were dealt the job of bringing money into a county that needed it. It came with transmission lines, a hum at night and a power bill for everyone.",
  seat: {
    title: "The Development Director",
    role: "Economic Development Director",
    color: "#7F7FBF",
    scoreLabel: "TAX REVENUE",
    dial: ["the neighbors", "the data centers"],
    dialNote: "one data center pays more tax than ten thousand homes",
    board: "SUPERVISORS",
    firedBody:
      "The board replaced you with a director who used to work for a data center developer. She approved three new campuses in her first year. The transmission lines went up through the historic district.",
    pressure: [
      "The board chair, Mr. Pemberton, asked why the new campus proposal is 'stuck' in your office.",
      "A developer's lobbyist met with three supervisors this week. None of them mentioned it to you.",
    ],
    ranks: [
      ["Director", "a county office and a staff of eight"],
      ["Deputy Administrator", "the budget runs through you"],
      ["County Administrator", "the whole county"],
      ["State Secretary", "a seat in Richmond"],
      ["Industry Advisor", "a data center association title"],
      ["Tech Executive", "site selection for a cloud company"],
    ],
    intro: [
      "You're Esther Kim. A developer's site plan is on your desk: six windowless buildings, each the size of a Costco, on a farm field off Route 7.",
      "The lights on the wall are the county: families in new subdivisions, old farms, a Black community founded by freed families in the 1870s, and everyone who pays a power bill, including your parents' dry cleaner.",
      "The Board of Supervisors watches tax revenue. Your dial runs from protecting the neighbors to landing the data centers.",
      "The data centers want land, water and power. The county has all three, for now.",
    ],
    introCta: "Take the developer's call ›",
    outLabel: "FALLOUT THIS BUDGET",
    fired: "Why does the internet get built wherever it's cheapest to ignore the neighbors?",
    ended: "The county is richer than ever. Who pays for the power lines?",
    people: [
      ["the power bill", "$150 a month", "$200 a month", "$280 a month", "can't keep the lights on"],
      ["the view", "fields out the window", "a data center across the road", "transmission towers over the yard", "moved away"],
      ["the sound", "quiet nights", "a hum at night", "a hum all the time", "can't sleep"],
      ["the water", "plenty in the reservoir", "asked to conserve", "watering restrictions", "the well ran dry"],
      ["the community", "a freedmen's community, intact", "a data center next to the church", "the cemetery surrounded", "the community rezoned away"],
      ["the house value", "rising", "flat", "falling near the lines", "sold at a loss"],
    ],
    turns: [
      [
        2012,
        "THE FIRST BIG DATA CENTER CAMPUS",
        ["Require setbacks and a public hearing", "Setbacks and a hearing. The developer threatened to go to Prince William County, then didn't."],
        ["Approve it by right, no hearing", "Approved by right. The neighbors found out when the bulldozers arrived."],
      ],
      [
        2015,
        "THE STATE TAX BREAK ON SERVERS IS UP FOR RENEWAL",
        ["Let it expire", "The board asked what you were doing. Two projects went to Ohio before Richmond renewed it anyway."],
        ["Lobby Richmond to extend it", "It was extended for decades. The state now gives up hundreds of millions a year."],
        "$",
      ],
      [
        2018,
        "A CAMPUS PROPOSED NEXT TO A FREEDMEN'S COMMUNITY",
        ["Protect the community", "The community was protected. The land stayed rural, and the developer went up the road."],
        ["Rezone it — the tax base needs it", "Rezoned. The data center stands where the church picnics used to be."],
      ],
      [
        2020,
        "THE DATA CENTERS NEED A NEW TRANSMISSION LINE",
        ["Bury it, and make the developers pay", "The line was buried. It cost $200 million more, and the neighborhood stayed a neighborhood."],
        ["Run it overhead, the cheap way", "The towers went up. Property values along the line fell 15%."],
        "⚡",
      ],
      [
        2022,
        "THE UTILITY WANTS A RATE HIKE FOR THE GRID",
        ["Make the data centers pay for it", "You fought for a separate rate for data centers. It passed the next year, partly."],
        ["Spread it to every customer", "Everyone's bill went up. Your parents' dry cleaner pays $400 more a month for the grid the data centers need."],
      ],
      [
        2023,
        "THE RESERVOIR IS LOW · THE DATA CENTERS ARE THIRSTY",
        ["Require recycled water", "Recycled water, required. The developers called it too expensive, then did it."],
        ["Let them draw from the reservoir", "In the August drought, homeowners were asked to cut back. The data centers weren't."],
      ],
      [
        2025,
        "AI CAMPUSES WANT FIVE TIMES THE POWER",
        ["Pause until the grid is ready", "You recommended a pause. The board replaced you six months later and approved them."],
        ["Approve them all", "All approved. The county's tax revenue doubled. So did the hum."],
      ],
    ],
  },
});
