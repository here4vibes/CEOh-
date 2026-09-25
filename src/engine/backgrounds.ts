import type { BackgroundProfile } from "./types";

export const BACKGROUNDS: BackgroundProfile[] = [
  {
    id: "rural-displaced",
    seats: ["supervisor"],
    protagonist: "Roger Morrison",
    dossierTag: "SHIFT SUPERVISOR",
    moneyUnit: "K",
    householdName: "The Morrisons",
    location: "McDowell County, WV",
    tagline: "Former electrician at the Arch Coal plant. 56. The mine closed four years ago.",
    description:
      "Roger and Diane Morrison have owned their house since 2001, but the HVAC needs replacing and retirement is thin. Their two kids moved to Columbus and Charlotte. The church is the last thing on Main Street still open.",
    perspective:
      "Jobs left before the explanations did. Politicians came through and promised to bring them back. They didn't. The county has been in managed decline so long that 'managed' is the lie.",
    closingAddendum:
      "You were dealt a county where the exits had already closed. The rate was set by people who'd never seen Route 52 — and it ran through you.",
  },
  {
    id: "urban-gig",
    seats: ["fleet"],
    protagonist: "Maria Flores-Garcia",
    dossierTag: "FLEET PARTNER",
    moneyUnit: "K",
    householdName: "The Flores-Garcias",
    location: "Phoenix, AZ",
    tagline: "Two adults, three gig jobs between them. Monthly rent is $1,780. There is no cushion.",
    description:
      "Maria and Luis have two kids in public school, no employer-sponsored health coverage, and a car note three months behind. They are not poor by any headline measure. They are one breakdown away from it.",
    perspective:
      "The floor people talk about — minimum wage, employer benefits, the forty-hour week — doesn't apply to how this work is classified. The way the work is classified determines what protections attach to it.",
    closingAddendum:
      "You were dealt a life one breakdown from the edge. The way out the app offered was standing on people one breakdown closer.",
  },
  {
    id: "suburban-professional",
    seats: ["engineer"],
    protagonist: "David Nguyen",
    dossierTag: "SENIOR ENGINEER",
    moneyUnit: "K",
    householdName: "The Nguyens",
    location: "Naperville, IL",
    tagline: "Software engineer, 44. Mortgage, 401k, two kids in the good school district. Technically fine.",
    description:
      "David Nguyen has done everything the script said. The house is appreciating. The kids are in AP classes. He checks his retirement account too often. Something about the trajectory feels like a treadmill he can't see the end of.",
    perspective:
      "The system appears to be working, which is why it is so hard to say something is wrong. The dysfunction is quiet. The cost is diffuse. The alternative is unspecified.",
    closingAddendum:
      "You were dealt a life insulated enough never to see the feed's effects firsthand. Every launch was reviewed. None of the consequences were.",
  },
  {
    id: "small-business",
    seats: ["owner"],
    protagonist: "Sandra Kellerman",
    dossierTag: "FOUNDER & CEO",
    moneyUnit: "K",
    householdName: "The Kellermans",
    location: "Tulsa, OK",
    tagline: "HVAC contractor. Built it herself. Seven employees. The insurance renewal is next month.",
    description:
      "Sandra Kellerman started with a pickup truck and her father's tools in 2003. She employs seven people, pays above market, and is genuinely proud of that. The regulatory paperwork has tripled. The margins haven't.",
    perspective:
      "Risk is real. Rules come from people who have never signed the front of a check. The employees are not abstractions — they are families whose health insurance Sandra negotiates every year.",
    closingAddendum:
      "You were dealt a life where every decision had your name on it. Then someone offered to buy the name.",
  },
  {
    id: "adjunct-academic",
    seats: ["expert"],
    protagonist: "Amara Okafor-Walker",
    dossierTag: "EXPERT WITNESS",
    moneyUnit: "K",
    householdName: "The Okafor-Walkers",
    location: "Columbus, OH",
    tagline: "University lecturer, 38. PhD. Seventh semester on a one-semester contract.",
    description:
      "Amara Okafor-Walker teaches four courses at two institutions. She knows more about labor economics than most of the administrators who denied her benefits. She is not bitter yet. She is getting there.",
    perspective:
      "You can see the mechanism clearly and still be caught in it. The credential was supposed to be the exit. It turned out to be the admission price to a room where the jobs already left.",
    closingAddendum:
      "You were dealt a life where you could see the mechanism clearly. The market paid you to describe it differently.",
  },
  {
    id: "farmer",
    seats: ["farmer"],
    protagonist: "Dale Pedersen",
    dossierTag: "FOURTH GENERATION",
    moneyUnit: "K",
    householdName: "The Pedersens",
    location: "Blue Earth County, MN",
    tagline: "Corn and soy, 61. Fourth generation. The land is worth more than he'll ever earn from it.",
    description:
      "Dale Pedersen farms the same section his great-grandfather broke. The land is collateral. The inputs come from three companies. The price is set in Chicago. The bank note comes due in February.",
    perspective:
      "The subsidy keeps you in the game long enough to stay dependent. Independence is the story; the structure is the opposite. The land is both the asset and the trap.",
    closingAddendum:
      "You were dealt a life where the asset and the trap are the same thing. Every acre you kept was one a neighbor couldn't.",
  },
  {
    id: "coastal-renter",
    seats: ["landlord"],
    protagonist: "Keisha Henderson",
    dossierTag: "LANDLORD",
    moneyUnit: "K",
    householdName: "The Hendersons",
    location: "Oakland, CA",
    tagline: "Nurse, 34. Income is good. Rent is $2,900. Savings rate is approximately zero.",
    description:
      "Keisha Henderson makes $88,000 a year and cannot afford to buy property in the city where she grew up. She is three months from a down payment and has been three months away for six years.",
    perspective:
      "Wealth is not about income. It is about when your family got in. The people who bought in 1995 are not smarter. They got there before the price became the barrier.",
    closingAddendum:
      "You were dealt a life where wealth depended on when you got in. You got in. Someone else is three months away now.",
  },
  {
    id: "retiree",
    seats: ["trustee"],
    protagonist: "Jim Peterson",
    dossierTag: "PENSION TRUSTEE",
    moneyUnit: "K",
    householdName: "The Petersons",
    location: "Green Bay, WI",
    tagline: "Retired teacher, 69. Social Security and a pension the state has been renegotiating for eight years.",
    description:
      "Jim and Carol Peterson did what they were told: taught, paid in, waited. The pension they were promised is being renegotiated by people who arrived after the promise was made. The Medicare supplement premium went up again.",
    perspective:
      "The contract was real until it wasn't. The people changing the terms were not there when they were set. The argument is always about what is sustainable. The question of who bears that cost is never in the headline.",
    closingAddendum:
      "You were dealt a life where the promise was kept — out of someone else's paycheck, in deals you only ever saw as a return.",
  },
  {
    id: "river-parish",
    seats: ["council"],
    protagonist: "Denise Batiste",
    dossierTag: "PARISH COUNCIL",
    moneyUnit: "K",
    householdName: "The Batistes",
    location: "St. James Parish, LA",
    tagline: "Retired schoolteacher, 58. Parish council member. Grew up between two plants.",
    description:
      "Denise Batiste's family has lived on the same river road since 1870. Her brother works at the fertilizer plant. Her mother had lung cancer at 64. The church still holds a fish fry every Friday in Lent, a mile and a half from the fence line.",
    perspective:
      "The plants brought the only jobs that pay and the air nobody asked for, and they arrived together. Here you don't get one without the other. The decisions get made in Baton Rouge and at the corporate office. The parish just votes on the details.",
    closingAddendum:
      "You were dealt a parish where the jobs and the air arrived together. Every exemption was approved by someone who lived there.",
  },
  {
    id: "small-town-church",
    seats: ["pastor"],
    protagonist: "Wade Tillman",
    dossierTag: "SENIOR PASTOR",
    moneyUnit: "K",
    householdName: "The Tillmans",
    location: "Muscle Shoals, AL",
    tagline: "Pastor, 47. A growing church, a new sanctuary, and a twelve-million-dollar note.",
    description:
      "Wade and Leanne Tillman started Crossroads Church with forty people and a rented sound system. Their three kids grew up in the nursery. Leanne runs the food pantry, which fed more families last year than the year before, and the year before that.",
    perspective:
      "When the plant closed and the paper folded, the church was what was left. People come here for work, for meals, for each other. Folks in Washington talk about this town like it's a punchline. The church is the only institution that still shows up.",
    closingAddendum:
      "You were dealt the last room in town where everyone still showed up. Filling it and holding it together turned out to be different jobs.",
  },
  {
    id: "outsider",
    seats: ["ceo", "politician"],
    protagonist: "J. R. Sterling",
    dossierTag: "THE OUTSIDER",
    moneyUnit: "B",
    householdName: "The Sterlings",
    location: "Manhattan, NY",
    tagline: "Second-generation real estate. Born with a name already on the building.",
    description:
      "Your father built apartment blocks in the outer boroughs with federal loans and never let you forget it. You have his name, his lawyers, and a gift for television. The family business needs a bigger stage.",
    perspective:
      "From here, every rule is negotiable and every loss belongs to someone else. The system isn't rigged against you. It's the thing you're about to learn to drive.",
    closingAddendum:
      "You were dealt the one life in this deck built to climb. Everyone else was dealt the country you climbed through.",
  },
];
