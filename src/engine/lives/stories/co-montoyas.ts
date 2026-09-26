import { life } from "../build";

export const MONTOYAS = life({
  id: "co-prison-town",
  protagonist: "Daniel Montoya",
  dossierTag: "CORRECTIONS LIEUTENANT",
  householdName: "The Montoyas",
  location: "Cañon City, CO",
  tagline: "Corrections lieutenant, 38. Hispano family in southern Colorado for six generations. The town has thirteen prisons.",
  description:
    "Daniel Montoya's father was a guard. His uncle was a guard. His cousin Gilbert is doing eight years at the state pen down the road. Daniel and Alicia have three boys, go to Mass at St. Michael's and eat green chile on Fridays.",
  perspective:
    "Without the prisons, Cañon City is a ghost town with a nice river. I didn't write the laws that fill the beds. I run the place where they end up, and I try to run it decent. Most of the guys inside would tell you I'm fair.",
  closingAddendum:
    "You were dealt a town that runs on prisons. Every empty bed was a job, and every full one was somebody's cousin.",
  seat: {
    title: "The Lieutenant",
    role: "Corrections Lieutenant",
    mode: "attn",
    color: "#8F8F8F",
    scoreLabel: "BEDS FILLED",
    litLabel: "still has a way home",
    dial: ["get them home", "keep the beds full"],
    dialNote: "a prison's budget follows its headcount",
    board: "WARDEN",
    firedBody:
      "The warden promoted a lieutenant from the private prison in Crowley County. He ended the GED classes, doubled the write-ups and kept every bed full. The parole board's calendar got lighter.",
    pressure: [
      "Warden Kessler says your unit's write-ups are 'soft,' and he's getting calls from the union.",
      "The state might close a unit. Kessler says it won't be yours, if your numbers change.",
    ],
    ranks: [
      ["Lieutenant", "a unit of two hundred"],
      ["Captain", "the whole shift"],
      ["Major", "the facility's security"],
      ["Warden", "the prison is yours"],
      ["Regional Director", "five facilities"],
      ["Private Operator", "a contract with a prison company"],
    ],
    intro: [
      "You're Daniel Montoya. Your first shift as lieutenant starts at 6 a.m. in a cellhouse built in 1871. Your father worked this same tier.",
      "The lights on the wall are the men inside and the families outside: Anthony Duran, 24, who plays chess with the night sergeant; mothers who drive four hours from Denver for a one-hour visit; and a town that counts on every bed.",
      "The warden watches headcount and discipline. Your dial runs from getting them home to keeping the beds full.",
      "Every write-up you file adds time to someone's sentence. Every empty bed is a job in town.",
    ],
    introCta: "Report for shift ›",
    outLabel: "FALLOUT THIS SHIFT",
    fired: "What would a town like this need so that it doesn't need its prisons full?",
    ended: "The beds stayed full. How many of the men who went home stayed home?",
    people: [
      ["the sentence", "home on schedule", "a write-up, time added", "parole date lost", "sixty days in solitary"],
      ["the visits", "every Saturday", "once a month", "phone calls at $15 each", "no contact in a year"],
      ["the GED", "earned it inside", "enrolled, then the class was cut", "on a waiting list", "no classes at all"],
      ["the kids", "visit their dad often", "visit on holidays", "can't afford the drive", "haven't seen him in years"],
      ["coming home", "a job and a place to stay", "a halfway house", "no job, no references", "back inside within a year"],
      ["the officer's job", "a state job with a pension", "mandatory overtime", "burned out", "moved to the private prison for less"],
    ],
    turns: [
      [
        2008,
        "BUDGET CUTS · THE GED PROGRAM OR TWO OFFICER POSTS",
        ["Keep the GED classes", "Eleven men on your tier passed the GED that spring. Your officers worked doubles to cover the posts."],
        ["Keep the posts — security first", "The classroom became a storage room. The men on your tier spent the hours in their cells instead."],
        "✂",
      ],
      [
        2011,
        "ANTHONY DURAN MOUTHS OFF AT A SERGEANT",
        ["Write it as a warning", "A warning in his file. Anthony apologized to the sergeant the next day. The sergeant filed a complaint about you."],
        ["Write it up — the sergeant expects your backing", "Thirty days in segregation. His parole hearing moved back eleven months."],
        "▣",
      ],
      [
        2013,
        "A PRIVATE PRISON WANTS THE STATE'S OVERFLOW",
        ["Speak against it at the county meeting", "The contract passed anyway, 2 to 1. The private prison pays its officers four dollars an hour less than you make."],
        ["Stay quiet — more beds, more jobs", "The contract passed. The private prison filled its beds by summer and hired half your academy class."],
      ],
      [
        2016,
        "PHONE CALLS COST $15 · THE CONTRACT FUNDS THE REC YARD",
        ["Push to cut the rates", "Rates dropped to $3 a call. Anthony called his daughter every Sunday. The rec yard went unrepaired for a year."],
        ["Keep the contract — the yard needs it", "The yard got new hoops. A mother in Pueblo spends $200 a month to hear her son's voice."],
      ],
      [
        2020,
        "COVID IN UNIT FOUR · SIXTY MEN, ONE SINK PER TIER",
        ["Push for early release of the old and sick", "Forty-one men went home early. Two came back. Thirty-nine didn't."],
        ["Lock it down, twenty-three hours a day", "Twenty-three hours a day in the cell for five months. The virus moved through the unit anyway."],
        "▣",
      ],
      [
        2021,
        "A REFORM BILL WOULD SHORTEN SENTENCES · INCLUDING GILBERT'S",
        ["Testify for it — for Gilbert and the others", "The union called you a traitor. The bill passed with your testimony in the record. Gilbert came home at Christmas."],
        ["Testify against it — it's the union's position", "You testified about public safety. The bill was cut in half, and Gilbert's part didn't survive. He has three more years."],
        "⚡",
      ],
      [
        2023,
        "THE STATE WILL CLOSE ONE PRISON · YOURS OR THE ONE ACROSS TOWN",
        ["Help plan the town's transition", "Your prison closed. You run a reentry program at the community college now, for less money. Some of your students used to be on your tier."],
        ["Lobby to close the other one", "The other prison closed, and yours absorbed its men. Every bed on your tier is full, and the town is grateful."],
        "⚡",
      ],
    ],
  },
});
