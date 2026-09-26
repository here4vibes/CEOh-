import { life } from "../build";

export const GADSDENS = life({
  id: "sc-heirs-property",
  protagonist: "Ernestine Gadsden",
  dossierTag: "FAMILY LANDHOLDER",
  householdName: "The Gadsdens",
  location: "Johns Island, SC",
  tagline: "Retired schoolteacher, 66. Gullah Geechee. Her family has held twelve acres on Johns Island since 1868.",
  description:
    "Ernestine Gadsden's great-great-grandfather bought the land after emancipation. It passed down without a will, so now it belongs to forty-one heirs in six states. She's the one who stayed. She pays the taxes, cuts the grass and keeps the family cemetery clean. Her cousin Cornelius, in Newark, has never seen it.",
  perspective:
    "Our people held this land through things you would not believe. Now the resorts want it, and the law makes it easy: any one heir can sell a share, and whoever buys it can force the whole place to auction. We didn't lose our land. It's being taken, one cousin at a time.",
  closingAddendum:
    "You were dealt twelve acres your family held through everything. Keeping them came down to forty-one cousins and a developer's checkbook.",
  seat: {
    title: "The Family Steward",
    role: "Heirs' Property Steward",
    color: "#3F9FBF",
    scoreLabel: "LAND VALUE",
    dial: ["keep the land", "take the offer"],
    dialNote: "one heir selling can force the whole property to auction",
    board: "THE COUSINS",
    firedTitle: "PARTITIONED",
    firedBody:
      "A cousin sold his share to a developer's LLC. The LLC asked the court to sell the whole property, and the twelve acres went to auction. The developer was the only bidder. The cemetery is behind a gate now.",
    pressure: [
      "Three cousins called about the developer's letter. They want to know why you're 'sitting on money.'",
      "The developer's lawyer sent a letter about 'partition.' The cousins in Atlanta are listening.",
    ],
    ranks: [
      ["Steward", "the keys to the family house"],
      ["Family Voice", "the cousins call you first"],
      ["Community Leader", "the land trust asks your advice"],
      ["Seller", "a check for your share"],
      ["Developer Partner", "a stake in the new resort"],
      ["Consultant", "the developer pays you to talk to other families"],
    ],
    intro: [
      "You're Ernestine Gadsden. The letter came certified: a developer wants to buy one cousin's share of your family's land. It's the fourth letter this year.",
      "The lights on the wall are the island: families like yours, the praise house, people who fish and crab the creeks and work at the resorts across the bridge, and forty-one cousins, most of whom have never seen the place.",
      "The cousins want money, and the developer wants the land. Your dial runs from keeping the land to taking the offer.",
      "Every family on the island is getting the same letters. What one family does, the developer shows to the next.",
    ],
    introCta: "Walk the property line ›",
    outLabel: "FALLOUT THIS YEAR",
    fired: "Why does the law make land held the way your family held it so easy to take?",
    ended: "The land is still yours, or it isn't. What's left of the island that raised you?",
    people: [
      ["the land", "held by the family since 1868", "a cousin sold a share", "a developer owns a piece", "sold at partition auction"],
      ["the taxes", "paid every year", "tripled after reassessment", "behind on the taxes", "lost it at tax sale"],
      ["the cemetery", "tended every spring", "a road runs past it", "behind a developer's gate", "the graves were moved"],
      ["the family", "the cousins gather every July", "the cousins argue about selling", "the cousins voted to sell", "the family scattered"],
      ["the creek", "fishing and crabbing", "posted 'private'", "fenced for the resort", "no way down to the water"],
      ["the island", "neighbors who've been here forever", "new houses, new faces", "gated communities", "priced off the island"],
    ],
    turns: [
      [
        2006,
        "A DEVELOPER OFFERS TO BUY COUSIN CORNELIUS'S SHARE",
        ["Call Cornelius and talk him out of it", "You talked to him for two hours. He agreed to wait a year. He wants to be asked again."],
        ["Let him sell — it's his share", "Cornelius sold his share. A developer's LLC now owns a piece of your family's land."],
      ],
      [
        2009,
        "THE COUNTY REASSESSES · THE TAXES TRIPLE",
        ["Pay the taxes yourself", "You paid them. It was two months of your pension."],
        ["Let the cousins figure it out", "Nobody paid in time. The county put it up for tax sale, and a speculator from Charleston bought the lien."],
      ],
      [
        2012,
        "A RESORT WANTS AN EASEMENT FOR A ROAD",
        ["Refuse the easement", "You refused. The resort built a longer road around the property."],
        ["Sell the easement for cash", "The road runs past the family cemetery now. The check paid three years of taxes."],
        "$",
      ],
      [
        2015,
        "THE CEMETERY IS IN THE DEVELOPER'S SITE PLAN",
        ["Fight to protect the graves", "You fought, and the county required a buffer around the graves."],
        ["Let the family vote to sell that corner", "The family voted to sell that corner. The graves were 'relocated' to a place the developer chose."],
      ],
      [
        2018,
        "A LAND TRUST OFFERS TO HELP CLEAR THE TITLE",
        ["Spend two years clearing it", "Two years of paperwork and forty-one signatures. The land is clearly yours now, and much harder to take."],
        ["Skip it — clearing a title takes years", "The title stayed tangled. Any cousin can still sell a share, and two more got letters that month."],
      ],
      [
        2021,
        "THE PRICE HITS $400,000 AN ACRE",
        ["Make the case for keeping it at the reunion", "You made the case for the grandchildren. The cousins cried, and agreed to vote in August anyway."],
        ["Make the case for selling at the reunion", "You told them what $400,000 an acre could do for their children. The cousins agreed to vote in August."],
      ],
      [
        2024,
        "THE COUSINS VOTE · 22 TO 19 TO SELL",
        ["Buy out the ones who want to sell", "It took everything you had and a loan from the land trust. The land stays in the family, and the cemetery stays open."],
        ["Sign with the majority", "The land your family held since 1868 sold in one afternoon. Each heir got about $117,000. It's a golf course now."],
        "✎",
      ],
    ],
  },
});
