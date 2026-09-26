import { life } from "../build";

export const BATISTES = life({
  id: "river-parish",
  protagonist: "Denise Batiste",
  dossierTag: "PARISH COUNCIL",
  householdName: "The Batistes",
  location: "St. James Parish, LA",
  tagline: "Retired schoolteacher, 58. Parish council member. Grew up between two chemical plants on the river road.",
  description:
    "Denise Batiste's family has lived on the same stretch of River Road since 1870. Her brother, Leonard, works at the fertilizer plant. Her mother was diagnosed with lung cancer at 64 and never smoked a day. The church still holds a fish fry every Friday in Lent, a mile and a half from the fence line.",
  perspective:
    "The plants brought the only jobs that pay and the air nobody asked for, and they came together. Here you don't get one without the other. The big decisions get made in Baton Rouge and Houston. The parish votes on the details, and I'm the one who has to look my neighbors in the eye afterward.",
  closingAddendum:
    "You were dealt a parish where the jobs and the air arrived together. Every permit was approved by someone who lived there.",
  seat: {
    title: "The Council Member",
    role: "Parish Council, District 5",
    stat: "power",
    statScale: 0.9,
    sideStats: { fame: 0.018, money: 0.02 },
    color: "#D98A4D",
    scoreLabel: "INVESTMENT",
    dial: ["the people by the fence", "the tax base"],
    dialNote: "the plants are the only employer that pays",
    board: "COUNCIL",
    firedTitle: "VOTED OUT",
    firedBody:
      "The industry PAC funded your opponent. She won by two hundred votes, and the complex was approved at her first meeting, 7 to 0.",
    pressure: [
      "The chemical association's lobbyist, Mr. Guidry, stopped returning your calls.",
      "A mailer went out in your district calling you 'anti-jobs.' Nobody will say who paid for it.",
    ],
    ranks: [
      ["Council Member", "a seat and a nameplate"],
      ["Committee Chair", "the plant managers know your name"],
      ["Council Chair", "the ribbon cuttings"],
      ["Parish President", "a parish that runs on plant money"],
      ["State Representative", "a seat on the energy committee"],
      ["Industry Board", "a paid seat at the chemical association"],
    ],
    intro: [
      "You're Denise Batiste. Your first council meeting is in a room with a drop ceiling and a flag in the corner. The first item on the agenda is a plant.",
      "The lights on the wall are the parish: families who've been on the river road for generations, your brother Leonard's crew at the fertilizer plant, the kids at the elementary school a mile from the fence line, and your mother.",
      "The council counts on you to keep the investment coming. Your dial runs from the people by the fence to the tax base.",
      "Some of the lights work at the plants. Most of them live downwind.",
    ],
    introCta: "Call the meeting to order ›",
    actLabel: "VOTE",
    outLabel: "FALLOUT THIS SESSION",
    fired: "Why does a parish have to trade its air for its schools?",
    ended: "The parish got its investment. Who in the parish got to decide what it cost?",
    people: [
      ["the air", "fresh off the river", "a smell at night", "an inhaler in every room", "cancer in the family"],
      ["the house", "held since 1870", "worth less every year", "a buyout offer on the table", "sold and gone"],
      ["the plant job", "a good job at the plant", "a contractor job", "laid off after the expansion", "no work that pays"],
      ["the school", "a good school", "the music program cut", "the school sits by the fence line", "the school closed"],
      ["the church", "the Friday fish fry", "half the parish moved away", "services every other week", "the graveyard is behind a fence"],
      ["the storm", "power back in a day", "power back in a week", "three weeks in the dark", "never came home after the storm"],
    ],
    turns: [
      [
        1998,
        "A PLASTICS PLANT WANTS TO BUILD · TEN YEARS TAX-FREE",
        ["Demand a health study first", "The study took two years. The plant built in the next parish over, and the jobs went with it."],
        ["Approve it — two hundred jobs", "The plant broke ground in spring. Two hundred jobs, ten years without property taxes."],
        "✎",
      ],
      [
        2002,
        "THE STATE GRANTS THE EXEMPTION · THE SCHOOLS LOSE $4 MILLION",
        ["Fight it at the state board", "You drove to Baton Rouge and testified. The exemption passed anyway, and the board chair remembered your name."],
        ["Don't cross Baton Rouge", "You stayed home. The exemption passed. The schools cut their music program."],
      ],
      [
        2006,
        "THE FERTILIZER PLANT WANTS TO RAISE ITS EMISSIONS · LEONARD WORKS THERE",
        ["Vote against the increase", "It passed 6 to 1 without you. Leonard didn't come to Sunday dinner for a month."],
        ["Vote yes — Leonard's unit depends on it", "It passed 7 to 0. Leonard's unit got its expansion, and the permit allowed a third more ammonia."],
      ],
      [
        2010,
        "THE AIR MONITOR BY THE SCHOOL READS HIGH",
        ["Ask the state to investigate", "You asked the state. The state asked the plant. The plant said the monitor was miscalibrated."],
        ["Accept the plant's own numbers", "The plant's numbers said the air was fine. Your mother started using an inhaler that fall."],
      ],
      [
        2014,
        "BUYOUT OFFERS FOR THE HOMES ON THE FENCE LINE",
        ["Hold out for full relocation", "Two years of meetings. Six families got enough to buy a house somewhere else. The rest are still waiting."],
        ["Tell families to take the offer", "They took it as written. It didn't buy a house anywhere else, so most of them rent now."],
      ],
      [
        2018,
        "THE SURVEYORS FIND GRAVES · PEOPLE ENSLAVED ON THE OLD PLANTATION",
        ["Protect the graves", "You forced a full survey. The company fenced the graves and let descendants visit once a year."],
        ["Let the company 'relocate' them", "The remains were moved to a place the company chose. The site plan didn't change."],
      ],
      [
        2019,
        "A $9 BILLION COMPLEX · THE BIGGEST VOTE OF YOUR LIFE",
        ["Vote no", "It passed 5 to 2. Your mother called you from her hospital bed to say she was proud of you."],
        ["Vote yes", "It passed 7 to 0. The largest plastics complex in the country will sit a mile from the school where you taught."],
        "✎",
      ],
    ],
  },
});
