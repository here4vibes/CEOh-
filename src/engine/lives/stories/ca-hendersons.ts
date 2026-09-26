import { life } from "../build";

export const HENDERSONS = life({
  id: "coastal-renter",
  protagonist: "Keisha Henderson",
  dossierTag: "LANDLORD",
  householdName: "The Hendersons",
  location: "Oakland, CA",
  tagline: "ER nurse, 34. Makes $88,000. Has been three months from a down payment for six years.",
  description:
    "Keisha Henderson grew up in West Oakland and works nights in the ER at Highland Hospital. When her Aunt Bernice died, she left Keisha a share of the fourplex on Chester Street where Keisha spent every childhood summer, and a buyout she can't afford.",
  perspective:
    "In this city, wealth isn't about what you earn. It's about when your family got in. The people who bought in 1995 aren't smarter than me. They just got here before the price became a wall. This building is my family's one foot in the door, and I'm not letting go.",
  closingAddendum:
    "You were dealt a life where wealth depended on when you got in. You got in. Someone else is three months away now.",
  seat: {
    title: "The Landlord",
    role: "Landlord, Chester Street",
    color: "#C96F8F",
    scoreLabel: "RENT ROLL",
    dial: ["rent a neighbor can pay", "rent the market will bear"],
    dialNote: "every landlord's rent is every other landlord's comp",
    board: "LENDER",
    firedTitle: "FORECLOSED",
    firedBody:
      "You fell behind on the note. The lender sold the building to a fund that owns eleven hundred units in the East Bay. The new rents went out on letterhead from Dallas.",
    pressure: [
      "The lender sent a letter about your debt-service coverage ratio. You had to look it up.",
      "Your loan is 'under review.' The fund that owns the building next door slid a friendly offer under your door.",
    ],
    ranks: [
      ["Landlord", "one building, one note"],
      ["Small Landlord", "a property manager on speed dial"],
      ["Investor", "a second building in Fruitvale"],
      ["Portfolio", "an LLC for each property"],
      ["Association Board", "city council takes your calls"],
      ["The Market", "your rents are everyone's comps"],
    ],
    intro: [
      "You're Keisha Henderson. You're on the porch of Aunt Bernice's fourplex with a key ring you inherited, a buyout you can't afford and an ER shift at seven.",
      "The lights on the wall are tenants, in your building and every building like it: Mr. Otis Bell in Unit A, who played dominoes with your aunt every Sunday since 1979; the Ramirez family in Unit C; everyone in the East Bay whose rent follows everyone else's.",
      "The lender watches whether the building covers the note. Your dial runs from rent a neighbor can pay to rent the market will bear.",
      "The market price isn't set by anyone. It's set by every landlord, including you.",
    ],
    introCta: "Unlock the front door ›",
    outLabel: "FALLOUT THIS YEAR",
    fired: "Why is a place to live an investment at all?",
    ended: "You finally got in. What did it cost the people who came after you?",
    people: [
      ["the rent", "fair and steady", "up 10% this year", "half their paycheck", "priced out"],
      ["the lease", "a long lease with a neighbor", "year to year", "cash for keys on the table", "evicted"],
      ["the commute", "walks to work", "a bus across town", "an hour from Antioch", "two hours from Stockton"],
      ["the kids' school", "the neighborhood school", "switched schools twice", "switched three times this year", "left the district"],
      ["the savings", "saving for a down payment", "savings going to rent", "no savings", "a payday loan for the deposit"],
      ["the block", "knows every family", "new faces every year", "suitcases next door every weekend", "the block doesn't know them anymore"],
    ],
    turns: [
      [
        2018,
        "AUNT BERNICE'S FOURPLEX · YOUR COUSINS WANT THEIR SHARE",
        ["Buy them out slowly; keep the rents", "A slow buyout, same rents. The tenants stayed. Your savings didn't; you picked up two extra shifts a month."],
        ["Refinance to the max; raise rents to cover it", "The cousins got paid in one check. Rents went up 30%, and the Ramirezes started looking in Antioch."],
      ],
      [
        2019,
        "SOFTWARE THAT PRICES YOUR UNITS · 'MAXIMIZE REVENUE'",
        ["Set the rents yourself, below market", "Your rents stayed $400 under the building next door. The lender asked, politely, whether you understood the market."],
        ["Let the software set them", "The software priced your units from the same data as every other building in the zip code. They all went up together."],
        "⚙",
      ],
      [
        2020,
        "THE MORATORIUM · THE RAMIREZES STOP PAYING",
        ["Forgive the back rent", "You forgave eight months and missed two mortgage payments. Mrs. Ramirez brought tamales every Christmas after that."],
        ["Offer them cash to leave", "Three thousand dollars to go. They took it and moved in with her sister in Vallejo. The kids changed schools in March."],
        "✂",
      ],
      [
        2021,
        "A NIGHTLY RENTAL WOULD TRIPLE UNIT B",
        ["Keep Unit B a home", "Unit B stayed a home. A family of four moved in and signed a two-year lease."],
        ["List Unit B by the night", "Unit B became a nightly rental with a five-star rating. Mr. Bell complains about rolling suitcases at 1 a.m."],
      ],
      [
        2022,
        "TWELVE NEW APARTMENTS PROPOSED NEXT DOOR",
        ["Speak for them at the hearing", "It passed. Twelve families will live there. Your building's comps will soften, and you know exactly by how much."],
        ["Sign the neighbors' letter against it", "Parking and 'neighborhood character.' The letter worked, and the lot is still a lot."],
        "✎",
      ],
      [
        2023,
        "MR. BELL IS 84 · HIS RENT IS $900 UNDER MARKET",
        ["Leave Mr. Bell's rent alone", "His rent stayed where your aunt left it. The building runs a little short every month, and you cover it."],
        ["Raise it to market — the note demands it", "Mr. Bell paid it for four months, then moved in with his son in Sacramento. He left your aunt's photo on the mantel."],
      ],
      [
        2025,
        "A FUND OFFERS CASH FOR THE BUILDING",
        ["Sell to the tenants' land trust, for less", "The tenants own it now, through the land trust. You got $300,000 less and a thank-you card signed by every unit."],
        ["Take the fund's cash", "The check cleared on a Tuesday. Rents went up 18% the first year, on letterhead from Dallas."],
      ],
    ],
  },
});
