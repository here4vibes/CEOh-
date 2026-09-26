import { life } from "../build";

export const PATELS = life({
  id: "nj-motels",
  protagonist: "Rakesh Patel",
  dossierTag: "MOTEL OWNER",
  householdName: "The Patels",
  location: "Edison, NJ",
  tagline: "Motel owner, 56. Three motels on Route 1. His daughter is a pediatrics resident in New Brunswick.",
  description:
    "Rakesh Patel came from Gujarat in 1992 and worked the front desk at his uncle's motel in Delaware. He bought his first motel in 1999 with money from four relatives. The family lived above the office for twenty years. His wife, Meena, still does the books at the kitchen table. Their daughter, Anjali, is the first doctor in the family.",
  perspective:
    "Everyone thinks motel owners are rich. We are rich in rooms, and every room is a debt. The tourists stopped coming, the county pays on time, and you don't choose who needs a room. You rent the room, and you pray the heat holds.",
  closingAddendum:
    "You were dealt a family business built one room at a time. The county paid for the rooms. Nobody paid for what it was like to live in them.",
  seat: {
    title: "The Motel Owner",
    role: "Owner, Route 1 Motels",
    color: "#D9A74D",
    scoreLabel: "OCCUPANCY",
    dial: ["a home for the night", "a bed at the county rate"],
    dialNote: "the county pays per room, not per repair",
    board: "THE BANK",
    firedTitle: "FORECLOSED",
    firedBody:
      "The bank foreclosed on your second motel. A real estate trust bought it, kept the county contract and cut the cleaning staff to one. The rooms stayed full.",
    pressure: [
      "The bank's commercial officer, Mr. Kaplan, asked about 'occupancy trends' twice on one call.",
      "The note on the second motel is under review. The bank sent an appraiser without asking.",
    ],
    ranks: [
      ["Owner", "one motel and a family"],
      ["Hotelier", "three properties on Route 1"],
      ["Franchisee", "a national flag out front"],
      ["Developer", "a new build by the turnpike"],
      ["Association Chair", "the county returns your calls"],
      ["Portfolio", "a dozen hotels and a management company"],
    ],
    intro: [
      "You're Rakesh Patel. It's 2009, and the vacancy sign has been lit for eleven straight months. The truckers and the families headed for the shore have stopped coming.",
      "The lights on the wall are the people in your rooms and the neighborhoods around them: families between apartments, men just out of rehab, and kids who catch the school bus in your parking lot.",
      "The bank watches occupancy. Your dial runs from a home for the night to a bed at the county rate.",
      "Nobody planned for motels to become the housing system. They just did, because nothing else got built.",
    ],
    introCta: "Turn on the vacancy sign ›",
    outLabel: "FALLOUT THIS MONTH",
    fired: "When did motel rooms become the housing plan?",
    ended: "The motels made it. How many families left your rooms for somewhere better?",
    people: [
      ["the room", "a clean room with heat", "a room with a broken heater", "mold on the ceiling", "locked out"],
      ["the kids", "catch the school bus on time", "miss the bus some days", "switched schools twice", "haven't been to school in months"],
      ["the apartment search", "found an apartment", "on a waiting list", "no landlord will call back", "gave up looking"],
      ["the job", "a steady job nearby", "a job two buses away", "lost the job after the move", "no work"],
      ["the food", "a hot plate and groceries", "fast food most nights", "the food pantry", "skipping meals"],
      ["the stay", "a week, then home", "three months", "a year and a half", "living in the car in the lot"],
    ],
    turns: [
      [
        2009,
        "THE RECESSION · THE TOURISTS STOP COMING",
        ["Cut your own salary; keep the staff", "You and Meena took nothing for a year. She started doing other people's taxes at night."],
        ["Cut housekeeping to every third day", "Housekeeping every third day. The reviews said 'dirty,' and the room rate fell again."],
        "✂",
      ],
      [
        2012,
        "THE COUNTY NEEDS ROOMS FOR EMERGENCY HOUSING",
        ["Give them a few rooms", "Twelve rooms for the county, the rest for travelers. Occupancy stayed at sixty percent."],
        ["Give them every room at the county rate", "Every room, every night, at the county rate. The motel is full, and nobody is on vacation."],
      ],
      [
        2015,
        "CARLA LOPEZ AND HER THREE KIDS · ROOM 22 · A YEAR NOW",
        ["Help her find an apartment, even at a loss", "You called four landlords you knew. She signed a lease in Perth Amboy. Room 22 went to someone else in need."],
        ["Keep her — steady money", "She stayed another year and a half. The kids learned to do homework sitting on the bed."],
      ],
      [
        2018,
        "THE INSPECTOR FINDS MOLD IN ROOM 22",
        ["Close the room and fix it right", "Closed for six weeks. The county moved the family to another motel, farther from school."],
        ["Paint over it and reopen by morning", "Painted over and reopened by morning. The toddler in Room 22 developed a cough that didn't stop."],
      ],
      [
        2020,
        "THE STATE NEEDS ISOLATION ROOMS",
        ["Take them at cost", "The state got its rooms at cost. You broke even for the year, which in 2020 felt like winning."],
        ["Charge the emergency rate", "The emergency rate paid off the second motel's note in eleven months."],
        "$",
      ],
      [
        2023,
        "THE HEAT GOES OUT IN JANUARY · THE BOILER IS $14,000",
        ["Fix it now; move families to your other motel", "The new boiler went in within a week. The families spent five nights at your other place, two to a room."],
        ["Hand out space heaters and wait for spring", "Three space heaters, one extension cord. Anjali, on her ER rotation, treated a burn from Room 14. She recognized the address."],
      ],
      [
        2024,
        "A NONPROFIT WANTS TO BUY FOR AFFORDABLE APARTMENTS · FOR LESS",
        ["Sell to the nonprofit", "Forty families have leases now, and kitchens. You got less than the motel was worth. Anjali says it's the best thing the family ever built."],
        ["Keep the county contract", "The rooms are still full every night. Kids still catch the bus in your parking lot."],
      ],
    ],
  },
});
