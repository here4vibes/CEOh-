import { life } from "../build";

export const PEDERSENS = life({
  id: "farmer",
  protagonist: "Dale Pedersen",
  dossierTag: "FOURTH GENERATION",
  householdName: "The Pedersens",
  location: "Blue Earth County, MN",
  tagline: "Corn and soybean farmer, 61. Fourth generation on the same section. The land is worth more than he'll ever earn from it.",
  description:
    "Dale Pedersen farms the section his great-grandfather broke with oxen in 1889. The land is collateral, the seed comes from three companies, the price is set in Chicago, and the note comes due in February. His son, Erik, wants to farm. His wife, Marlys, keeps the books and the peace.",
  perspective:
    "Independence is the story they tell about farmers. The truth is, the subsidy keeps you in the game just long enough to stay dependent. You get big or you get out. I didn't make those rules. I just intend to still be here when they change.",
  closingAddendum:
    "You were dealt a life where the asset and the trap are the same piece of ground. Every acre you kept was one a neighbor couldn't.",
  seat: {
    title: "The Farmer",
    role: "Fourth-Generation Farmer",
    color: "#B5A642",
    scoreLabel: "ACRES FARMED",
    dial: ["farm like a neighbor", "farm like a fund"],
    dialNote: "get big or get out",
    board: "THE BANK",
    firedTitle: "FORECLOSED",
    firedBody:
      "The bank didn't renew the operating loan. The land sold at auction to the operation across the road, which already farms nine thousand acres. They tore out the windbreak your grandfather planted in 1936.",
    pressure: [
      "Your loan officer, Wayne, mentioned your 'growth trajectory' twice in one meeting.",
      "The bank wants to see you before planting. Wayne mailed the paperwork ahead.",
    ],
    ranks: [
      ["Family Farm", "a section and a note"],
      ["Growing Operation", "a new combine"],
      ["Large Operation", "3,000 acres, some rented"],
      ["Farm Bureau Board", "a voice in St. Paul"],
      ["Mega-Farm", "10,000 acres, GPS-steered"],
      ["Ag Investor", "the land is a line in a portfolio"],
    ],
    intro: [
      "You're Dale Pedersen. It's the fall of 1998, the combine is running, and hog prices just fell to eight cents a pound. The Nelson farm down the road goes to auction on Tuesday.",
      "The lights on the wall are Blue Earth County: neighbors, the co-op, the Lutheran church, the school that has consolidated twice, and a young couple, Jake and Amy Lindahl, hoping to buy the Nelson place.",
      "The ag lender reads one number: whether you're growing. Your dial runs from farming like a neighbor to farming like a fund.",
      "Every acre you add was someone else's. That's how farming has worked for fifty years. Nobody decided it.",
    ],
    introCta: "Head out to the field ›",
    outLabel: "FALLOUT THIS SEASON",
    fired: "Why can't a section be enough anymore?",
    ended: "You held the land. How many farms did it take to hold it?",
    people: [
      ["the farm", "fourth generation, still farming", "renting out half", "farming someone else's ground", "sold at auction"],
      ["the co-op", "a member with a vote", "the elevator merged", "forty miles to deliver grain", "the co-op is gone"],
      ["the water", "clean from the well", "nitrates in the tap", "buying bottled water", "the well is unusable"],
      ["the school", "walks to school in town", "the school consolidated", "an hour each way on the bus", "the family moved to Mankato"],
      ["the church", "every Sunday, full pews", "every other Sunday", "shares a pastor with three towns", "the church closed"],
      ["the barn", "their own hogs", "contract hogs for the integrator", "the contract wasn't renewed", "the barn is empty and the loan isn't"],
    ],
    turns: [
      [
        1998,
        "HOGS AT EIGHT CENTS · THE NELSON FARM GOES TO AUCTION",
        ["Let the Lindahls outbid you", "Jake and Amy Lindahl got the farm. They made it eleven years and raised three kids on it."],
        ["Buy it on the courthouse steps", "You bought it on the courthouse steps at sixty cents on the dollar. The whole township noticed who bid."],
      ],
      [
        2002,
        "THE INTEGRATOR OFFERS A CONTRACT · THEIR PIGS, YOUR BARN",
        ["Stay independent", "You stayed independent. Hog prices stayed low, and the bank noticed."],
        ["Sign, build the barn, take the debt", "You built the barn. The integrator owns the pigs, sets the price and can cancel on thirty days' notice."],
      ],
      [
        2006,
        "ETHANOL · CORN GOES TO $4",
        ["Keep the rotation, keep the soil", "The rotation kept the soil. You made less than your neighbors in the good years."],
        ["Corn on corn, tile every acre", "Corn on corn, tiled to the ditch. Nitrates in the Blue Earth River hit a record that spring."],
        "⚙",
      ],
      [
        2012,
        "A PENSION FUND WANTS FARMLAND IN BLUE EARTH COUNTY",
        ["Sell only to farmers", "You held out. The fund bought the section next to yours anyway."],
        ["Farm the fund's ground for cash rent", "You farm the fund's ground now. A pension fund in Canada owns the Johnson place across the road."],
      ],
      [
        2016,
        "THE CO-OP VOTES ON A MERGER",
        ["Vote to stay local", "You voted to stay local. The merger passed 60 to 40."],
        ["Vote for it — bigger is more efficient", "The co-op merged. The elevator in town closed; the new one is forty miles away."],
      ],
      [
        2019,
        "THE TRADE WAR · A BAILOUT CHECK, SIZED BY ACRES",
        ["Push for a cap on the payments", "You pushed. The Farm Bureau dropped you from the committee."],
        ["Take the biggest check in the township", "The biggest check in the township. The small dairy down the road got $1,100."],
      ],
      [
        2023,
        "ERIK WANTS TO FARM · A FUND WANTS THE WHOLE SECTION",
        ["Sell to Erik on a contract for deed", "Erik farms it now, on a contract he'll pay off over thirty years. Marlys says it's the best thing you ever did."],
        ["Sell to the fund — they'll rent it back", "The fund owns it now. They rent it back to Erik at market rate."],
      ],
    ],
  },
});
