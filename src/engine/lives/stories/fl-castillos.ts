import { life } from "../build";

export const CASTILLOS = life({
  id: "fl-insurance",
  protagonist: "Marisol Castillo",
  dossierTag: "CLAIMS MANAGER",
  householdName: "The Castillos",
  location: "Hialeah, FL",
  tagline: "Claims manager, 45. Cuban-American. Her parents' roof blew off in Hurricane Andrew, and the check took eighteen months.",
  description:
    "Marisol Castillo was thirteen when Andrew tore the roof off her parents' house in Kendall. She went into insurance to be the one who picks up the phone. Her husband, Rafael, drives for a produce distributor. Her mother, Olga, lives alone in Fort Myers in a house she paid off in 2004.",
  perspective:
    "Florida is in denial about what it costs to live here. The storms get worse, the insurers leave, and whoever's still here has to decide who gets paid and how much. Nobody wants that job. I took it so it would be done by somebody who remembers the blue tarp.",
  closingAddendum:
    "You were dealt a family that waited eighteen months for a check. You became the one who decided how long everyone else would wait.",
  seat: {
    title: "The Claims Manager",
    role: "Claims Manager, Home Insurer",
    color: "#3FBFBF",
    scoreLabel: "RESERVES",
    dial: ["pay the claim", "protect the reserves"],
    dialNote: "every claim paid is a hole in the reserves",
    board: "HOME OFFICE",
    firedBody:
      "Home office brought in a manager from a Texas carrier who ran every claim through the software and every appeal through the lawyers. Payouts fell 30%. The company failed anyway, and the state's insurer of last resort took the policies.",
    pressure: [
      "Home office flagged your region's payout ratio as 'outside tolerance.'",
      "The reinsurers raised rates 40%, and your VP, Ron Farris, says it's your region's fault.",
    ],
    ranks: [
      ["Claims Manager", "a team of adjusters"],
      ["Regional Director", "all of South Florida"],
      ["VP of Claims", "the state's biggest book"],
      ["Chief Claims Officer", "the rating agencies know your name"],
      ["Industry Voice", "the legislature asks your advice"],
      ["Reinsurer", "you bet on the storms now"],
    ],
    intro: [
      "You're Marisol Castillo. It's the first morning after the storm. The phone tree is full, the adjusters' cars are gassed, and your coffee mug says I SURVIVED ANDREW.",
      "The lights on the wall are homeowners in Hialeah, Homestead and Fort Myers, people who paid premiums for twenty years and now need a roof. Your mother is one of them.",
      "Home office watches the reserves. Your dial runs from paying the claim to protecting the reserves.",
      "You remember the blue tarp on your parents' roof. So does everybody on the wall.",
    ],
    introCta: "Open the claims queue ›",
    outLabel: "FALLOUT THIS STORM",
    fired: "What would it take for a hurricane not to be a coin flip on your policy?",
    ended: "The company survived the storms. Did the people who paid the premiums?",
    people: [
      ["the roof", "a new roof, fully covered", "patched after the storm", "a blue tarp for a year", "the roof caved in"],
      ["the claim", "paid in six weeks", "paid in six months", "lowballed by the software", "denied as flood"],
      ["the premium", "$2,000 a year", "$5,000 a year", "$11,000 a year", "dropped at renewal"],
      ["the house", "home, repaired", "living in half of it", "living with the daughter", "sold for the lot value"],
      ["the savings", "untouched", "spent on the deductible", "spent on the roof", "gone"],
      ["the lawsuit", "never needed one", "hired a public adjuster", "three years in court", "gave up and walked away"],
    ],
    turns: [
      [
        2005,
        "WILMA · 100,000 CLAIMS AND 400 ADJUSTERS",
        ["Send an adjuster to every house", "It took four months, and every house got seen. Most of the claims that looked like flood weren't."],
        ["Deny what 'looks like flood' — most of it is", "The denials went out in batches. Most of those homes had no flood insurance, so the answer was simply no."],
        "✂",
      ],
      [
        2011,
        "OLD ROOFS ARE THE BIGGEST RISK ON THE BOOKS",
        ["Grandfather in longtime customers", "Longtime customers kept their coverage. The book got riskier, and the reinsurers noticed."],
        ["Cut coverage on roofs older than fifteen years", "Retirees in Hialeah paid $18,000 for new roofs or went without. Many went without."],
      ],
      [
        2014,
        "NEW SOFTWARE WRITES THE ESTIMATE · IT RUNS LOW",
        ["Let adjusters override it", "Your adjusters overrode the software on one claim in three. Estimates came in closer to the truth, and higher."],
        ["Make the software's number final", "A homeowner's $62,000 estimate became $19,000. The software doesn't have a phone number."],
        "⚙",
      ],
      [
        2017,
        "IRMA · THE RESERVES WON'T COVER EVERY CLAIM",
        ["Pay them all, then ask for a rate hike", "Every claim paid. Premiums rose 30% for everyone the next year, including the people you paid."],
        ["Slow-walk every claim over $50,000", "Families lived under blue tarps into the next hurricane season. The reserves held."],
      ],
      [
        2019,
        "A LAWSUIT ON EVERY CLAIM · LAWYERS WORK THE NEIGHBORHOODS",
        ["Settle the fair ones early", "Legal costs fell by a third. Some lawyers still sued; fewer won."],
        ["Fight every one — make them wait", "The average claim took three years to resolve. Homeowners who couldn't wait took whatever you offered."],
        "§",
      ],
      [
        2022,
        "IAN · THE SOFTWARE VALUES YOUR MOTHER'S ROOF AT $9,000",
        ["Override it — for her and everyone like her", "You overrode it for every claim in Lee County. Home office took away your override authority in March. Your mother's roof was fixed by Christmas."],
        ["Let it stand — you can't make exceptions", "Your mother got $9,000 for a $31,000 roof. She didn't ask you for help. She asked your brother."],
      ],
      [
        2023,
        "YOUR COMPANY WANTS TO DROP 60,000 COASTAL POLICIES",
        ["Keep the longtime customers", "The longtime customers stayed. So did the risk. The next storm season will decide whether you were right."],
        ["Drop them — or the company goes under", "Sixty thousand letters went out in May. Most of those homes went to the state's insurer of last resort, at twice the price."],
        "✂",
      ],
    ],
  },
});
