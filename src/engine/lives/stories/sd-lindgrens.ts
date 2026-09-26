import { life } from "../build";

export const LINDGRENS = life({
  id: "sd-trusts",
  protagonist: "Scott Lindgren",
  dossierTag: "TRUST COMPANY PRESIDENT",
  householdName: "The Lindgrens",
  location: "Sioux Falls, SD",
  tagline: "Trust company president, 52. Lutheran. Coaches his daughter's volleyball team.",
  description:
    "Scott Lindgren grew up in Mitchell, where his dad ran the hardware store until a big-box store opened by the interstate. He went to Augustana and law school and came home to a small Sioux Falls trust company. South Dakota changed its laws, and that company now holds billions for families from all over the world.",
  perspective:
    "South Dakota didn't break any laws. We wrote better ones. If a family wants to keep its money private and pass it down forever, why shouldn't it? Every state competes for business. We just won.",
  closingAddendum:
    "You were dealt a hardware-store kid's life in a state that learned to sell secrecy. The money stayed hidden, and someone else's taxes covered the difference.",
  seat: {
    title: "The Trust Officer",
    role: "President, Trust Company",
    color: "#3F5FBF",
    scoreLabel: "ASSETS HELD",
    dial: ["know your client", "don't ask"],
    dialNote: "a dynasty trust never has to pay estate tax",
    board: "SHAREHOLDERS",
    firedBody:
      "The shareholders sold the company to a bigger trust firm that asks no questions at all. Its client list includes two sanctioned oligarchs and a family that owns a good part of a Latin American country.",
    pressure: [
      "A shareholder asked why your assets grew slower than the firm's down the street.",
      "The shareholders took a call from a larger firm that wants to buy you. They haven't told you what they said.",
    ],
    ranks: [
      ["Trust Officer", "a desk in Sioux Falls"],
      ["President", "the whole company"],
      ["Industry Leader", "the legislature asks you to draft the bills"],
      ["Billionaire Whisperer", "families fly in on private jets"],
      ["Firm Owner", "a stake in the assets"],
      ["Legacy", "a wing at the hospital"],
    ],
    intro: [
      "You're Scott Lindgren. Your office is on Phillips Avenue in Sioux Falls, above a coffee shop. In the vault downstairs is paperwork for more money than the state of South Dakota has.",
      "The lights on the wall are everyone else: people whose taxes rise when the richest pay none, in South Dakota and in every country the money comes from, including the one your church sends a mission team to every spring.",
      "Your shareholders watch assets held. Your dial runs from knowing your client to not asking.",
      "Nobody in Sioux Falls knows whose money is in the building. That's the product.",
    ],
    introCta: "Open the vault ›",
    outLabel: "FALLOUT THIS QUARTER",
    fired: "Why is secrecy something a state is allowed to sell?",
    ended: "South Dakota holds hundreds of billions in trust. Whose taxes filled the gap?",
    people: [
      ["the taxes", "paying their fair share", "paying more as the richest pay less", "the state leans on sales tax", "paying more than billionaires do"],
      ["the public schools", "fully funded", "flat budgets", "cutting teachers", "the district closed a school"],
      ["the country the money left", "a government that works", "tax revenue shrinking", "hospitals underfunded", "a clinic with no medicine"],
      ["the paycheck", "all theirs", "taxed on every dollar", "sales tax on groceries", "two jobs to cover the difference"],
      ["the fairness", "believes the rules are fair", "suspects they're not", "knows they're not", "gave up on the system"],
      ["the town services", "a library open every day", "library hours cut", "the pool closed", "the town sold the pool"],
    ],
    turns: [
      [
        2000,
        "OUT-OF-STATE MONEY DISCOVERS SOUTH DAKOTA'S FOREVER TRUSTS",
        ["Stay a small hometown trust company", "You stayed small. The firm down the street grew twenty times bigger."],
        ["Market dynasty trusts nationwide", "Money that will never pay estate tax started arriving from New York and California."],
      ],
      [
        2005,
        "A BILL TO SEAL TRUST RECORDS FOREVER",
        ["Testify against the secrecy clause", "You testified. The bill passed anyway."],
        ["Help draft it", "You helped write it. Trust records can be sealed from the courts forever."],
        "§",
      ],
      [
        2010,
        "FOREIGN CLIENTS START CALLING",
        ["Require documented sources for every dollar", "Full documentation for every dollar. Half the prospects never called back."],
        ["Accept what their lawyers send", "You accepted what the lawyers sent. Some of the money came from places where nobody asks either."],
      ],
      [
        2016,
        "THE PANAMA PAPERS · FAMILIES WANT A NEW HOME FOR THEIR MONEY",
        ["Turn away the shell companies", "You turned them away. The firm next door took them."],
        ["Welcome them to Sioux Falls", "The money came home to Sioux Falls. Assets grew by a billion dollars in a year."],
        "$",
      ],
      [
        2019,
        "A CLIENT LANDS ON A WATCH LIST · NOT SANCTIONED, YET",
        ["Close the account", "You closed it. He moved his money to Nevada in a week."],
        ["Keep it until the rules say otherwise", "You kept him. Six months later he was sanctioned, and your lawyers earned their fees."],
      ],
      [
        2020,
        "A MINISTER FROM YOUR CHURCH'S MISSION COUNTRY WANTS A TRUST",
        ["Decline the minister's trust", "You declined. His $60 million went to a firm in Wyoming."],
        ["Accept — his lawyers say it's clean", "His trust cleared in nine days. That spring, your church's team sent photos of a clinic in his province with empty shelves."],
      ],
      [
        2021,
        "THE PANDORA PAPERS NAME SOUTH DAKOTA",
        ["Call for disclosure rules, publicly", "You called for disclosure on the front page of the Argus Leader. Two large clients left that month."],
        ["Defend the industry to the press", "You defended the industry. The legislature passed nothing, and the money kept coming."],
        "⚡",
      ],
    ],
  },
});
