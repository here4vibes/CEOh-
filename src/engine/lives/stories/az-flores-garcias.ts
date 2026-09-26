import { life } from "../build";

export const FLORES_GARCIAS = life({
  id: "urban-gig",
  protagonist: "Maria Flores-Garcia",
  dossierTag: "FLEET PARTNER",
  householdName: "The Flores-Garcias",
  location: "Phoenix, AZ",
  tagline: "Rideshare driver turned fleet partner, 36. Leases cars to other drivers. Rent is $1,780, and there's no cushion.",
  description:
    "Maria and Luis Flores-Garcia have two kids at Maryvale High, a car note and no employer health coverage. Maria drove for the app for four years with a 4.97 rating. Luis still drives nights and does deliveries on weekends.",
  perspective:
    "Nobody hands you a ladder in this city. You build one out of whatever's lying around. The app takes its cut, the landlord takes his, and whatever's left is ours. If I can own the cars instead of driving them, that's the first real step up anyone in my family has taken.",
  closingAddendum:
    "You were dealt a life one breakdown from the edge. The step up the app offered was built on people one breakdown closer.",
  seat: {
    title: "The Fleet Partner",
    role: "Fleet Partner",
    color: "#3FA7A0",
    scoreLabel: "FLEET REVENUE",
    dial: ["fair terms", "squeeze the lease"],
    dialNote: "the app takes its cut first, and you take yours second",
    board: "PLATFORM",
    firedBody:
      "The platform moved your drivers to a fleet company out of Scottsdale with three hundred cars and no idea anyone's name. The weekly lease went up forty dollars. The cars never stopped moving.",
    pressure: [
      "The app bumped you down a partner tier. Fewer rides are being routed to your cars.",
      "An email from 'Partner Success': fleets below target will be 'transitioned' at the end of the quarter.",
    ],
    ranks: [
      ["Fleet Partner", "two cars and a spreadsheet"],
      ["Top Partner", "a badge in the app"],
      ["Fleet Owner", "an LLC and an accountant"],
      ["Platinum Partner", "the app returns your calls"],
      ["Regional Fleet", "forty cars in three cities"],
      ["The Commercial", "they put you in the ad about opportunity"],
    ],
    intro: [
      "You're Maria Flores-Garcia. The email came at 2 a.m. while you waited for a ride at Sky Harbor: 'Congratulations — you're eligible to become a Fleet Partner.'",
      "The lights on the wall are drivers and their families: your cousin Tomás, who just got to Phoenix; Yesenia from the church Facebook group; men who nap in their cars in the airport cell-phone lot.",
      "The platform ranks its partners by revenue. Your dial runs from fair terms to squeezing the lease.",
      "They'll sign whatever you put in front of them. They need the car.",
    ],
    introCta: "Accept the invitation ›",
    outLabel: "FALLOUT THIS WEEK",
    fired: "Why is the lease the business, and the driving the risk?",
    ended: "You got out of the driver's seat. How many people are sitting in it for you?",
    people: [
      ["the car", "owns it outright", "making the lease", "behind on the lease", "the car was repossessed"],
      ["the rating", "4.9 and steady", "slipping under the new rules", "one complaint from deactivation", "deactivated"],
      ["the hours", "drives when they want", "fifty hours a week", "naps between rides in the car", "living in the car"],
      ["the rent", "paid on the first", "paid late", "two months behind", "evicted"],
      ["the kids", "in the after-school program", "home alone after school", "the oldest works nights", "the oldest dropped out to drive"],
      ["the health", "insured through a spouse", "a plan with a huge deductible", "skips the doctor", "an ER bill in collections"],
    ],
    turns: [
      [
        2019,
        "PARTNER STATUS · YOUR COUSIN TOMÁS NEEDS A CAR",
        ["Lease Tomás a car at cost", "Tomás drove seventy hours a week and paid you back in eleven months. The app labeled you a 'low-growth partner.'"],
        ["Sign ten drivers for the referral bonus", "Ten new drivers, $5,000 in bonuses, ten weekly lease payments. Tomás got the car with the bad transmission."],
      ],
      [
        2020,
        "RIDES DROP 70% · THE LEASES ARE DUE FRIDAY",
        ["Pause every lease; float the notes yourself", "You paused the leases and emptied your savings to cover the notes. Four drivers made it through. So did you, barely."],
        ["Collect Friday — your notes are due too", "Two drivers turned in their keys. One kept driving through the outbreak to make the payment, and got sick in July."],
      ],
      [
        2021,
        "THE APP WANTS ITS FLYER IN EVERY CAR · 'STAY INDEPENDENT'",
        ["Tell your drivers what the flyer leaves out", "You told them what staying contractors costs: no overtime, no sick days, no unemployment. They listened. The bill passed anyway."],
        ["Hang the flyers — the app pays partners who do", "A flyer in every seatback and a $500 'advocacy bonus' for you. The bill passed with the app's money behind it."],
        "⚡",
      ],
      [
        2022,
        "GAS HITS FIVE DOLLARS",
        ["Eat the surcharge for a month", "Your margin vanished for a month. Three drivers said it was the first time anyone had eaten anything for them."],
        ["Pass it to the drivers, like every fleet", "The drivers paid for the gas. After the lease and the fuel, some cleared nine dollars an hour."],
      ],
      [
        2022,
        "YESENIA IS DEACTIVATED · NO REASON GIVEN",
        ["Fight the app for her", "Two weeks of hold music and appeal forms. She got reinstated. The app never said why she'd been cut."],
        ["Give her car to the next name on the list", "Her car went to the next name that afternoon. She still doesn't know what she did."],
        "✂",
      ],
      [
        2023,
        "LEASE RENEWALS · LUIS IS ONE OF YOUR DRIVERS NOW",
        ["Write a path to ownership into every lease", "Luis will own his car in two years. So will eleven other drivers. Your revenue projections won't recover."],
        ["Same terms for everyone — no favorites", "Luis signed at the kitchen table. The mileage cap applies to him too. He started sleeping in the airport lot between rides to save miles."],
      ],
      [
        2024,
        "THE APP CUTS DRIVER PAY 15% · PARTNER FEES STAY THE SAME",
        ["Stop recruiting until it's reversed", "You stopped. The app routed fewer rides to your fleet. Luis's pay went down anyway."],
        ["Recruit harder — new drivers don't know the old rates", "You signed fourteen new drivers. None of them had ever been paid the old rate, so none of them missed it."],
      ],
    ],
  },
});
