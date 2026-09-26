import { life } from "../build";

export const HALVORSONS = life({
  id: "nd-oil-boom",
  protagonist: "Kyle Halvorson",
  dossierTag: "RIG MANAGER",
  householdName: "The Halvorsons",
  location: "Williston, ND",
  tagline: "Roughneck turned rig manager, 24. Makes $140,000. Lives in a camper behind a truck stop.",
  description:
    "Kyle Halvorson grew up on a farm outside Minot and came to Williston at nineteen when the boom hit. He started on a drilling crew, got promoted fast and now runs a rig. He sends money home to his mom. His girlfriend, Kayla, is an ER nurse in Williston, where she sees a lot of the same injuries.",
  perspective:
    "Nobody here asked for a boom. But when it came, a kid with no degree could make six figures. That's the American dream, and it's real. You work hard, you take the risk and you get paid for it.",
  closingAddendum:
    "You were dealt a boom where a kid could make six figures. The risk was real, and you got paid for yours. Not everybody on your crew got paid for theirs.",
  seat: {
    title: "The Rig Manager",
    role: "Rig Manager",
    color: "#6F6F6F",
    scoreLabel: "BARRELS PER DAY",
    dial: ["keep the crew safe", "keep the rig turning"],
    dialNote: "a rig costs $30,000 a day to run, stopped or not",
    board: "OPERATOR",
    firedBody:
      "The operator replaced you with a manager from Midland who had run rigs through two booms. He cut safety meetings to Mondays. The rig never stopped, and neither did the ambulance runs to Williston.",
    pressure: [
      "The operator's company man, Rusty, says your rig is three days behind.",
      "The operator is sending a manager from Midland to 'help.' Everybody on the crew knows what that means.",
    ],
    ranks: [
      ["Rig Manager", "a rig and a crew of twenty"],
      ["Superintendent", "six rigs in the Bakken"],
      ["Operations Manager", "the whole field"],
      ["Vice President", "an office in Houston"],
      ["Owner", "your own service company"],
      ["Oil Money", "a lake house and a boat"],
    ],
    intro: [
      "You're Kyle Halvorson. It's 2011, it's twenty below, and every rig in the Bakken is turning at once. The operators will pay whatever it takes to get the wells drilled before prices drop.",
      "The lights on the wall are the Bakken: roughneck crews, ranchers with wells on their pasture, Williston families whose rent went up 400%, and Tanner Lund, 19, from Brainerd, your newest floorhand.",
      "The operator watches barrels per day. Your dial runs from keeping the crew safe to keeping the rig turning.",
      "Oilfield work is some of the most dangerous in America. Everybody out here knows somebody.",
    ],
    introCta: "Climb the rig ›",
    outLabel: "FALLOUT THIS WELL",
    fired: "Why does every boom burn through the people who work it?",
    ended: "The boom made you money. What's left in Williston?",
    people: [
      ["the rent", "$600 a month", "$1,500 a month", "$2,500 a month", "living in a camper in a parking lot"],
      ["the crew", "a safe crew", "sixteen-hour shifts", "hurt on the rig", "killed on the job"],
      ["the ranch", "cattle on clean grass", "a well pad in the pasture", "a saltwater spill", "the land is poisoned"],
      ["the town", "a quiet town of 12,000", "doubled overnight", "crime and traffic", "boom went bust"],
      ["the paycheck", "six figures", "overtime cut", "laid off in the crash", "no work, truck repossessed"],
      ["the family", "home every weekend", "home once a month", "divorced", "lost touch with the kids"],
    ],
    turns: [
      [
        2011,
        "EVERY RIG IS TURNING · YOU NEED TWENTY HANDS",
        ["Hire slowly and train them right", "Twelve good hands in a month instead of twenty. The rig ran behind, and nobody got hurt."],
        ["Hire anyone who passes the drug test", "Twenty hands by Friday. Two of them didn't know which end of the tongs to hold."],
      ],
      [
        2012,
        "SIXTEEN-HOUR HITCHES · TANNER LUND NODS OFF ON THE FLOOR",
        ["Cap shifts at twelve hours", "Twelve-hour shifts. The rig ran a day behind. Tanner slept, and kept all ten fingers."],
        ["Keep sixteen — they want the overtime", "Tanner's hand was caught in the tongs in hour fifteen. Kayla was on shift when they brought him in."],
        "⚙",
      ],
      [
        2013,
        "NO PIPELINE FOR THE GAS · FLARE IT",
        ["Push the operator to capture it", "The operator built a small gathering line a year later. It caught about half."],
        ["Flare it — everybody does", "The gas burned off day and night. From space, the Bakken looked like a city."],
        "▲",
      ],
      [
        2014,
        "SALTWATER SPILLS ON BUD TOLLEFSON'S PASTURE",
        ["Report it today", "The rig stopped for two days, the pasture was cleaned up, and Bud got paid."],
        ["Clean it up quietly — reports stop rigs", "It was cleaned up quietly. Bud's cattle wouldn't graze that corner for three years, and he never knew why."],
        "✂",
      ],
      [
        2015,
        "OIL CRASHES · THE OPERATOR WANTS HALF THE CREW GONE",
        ["Fight for your crew", "You fought for them and lost half anyway, plus your own bonus."],
        ["Keep the best half", "You kept the best half. The other half drove back to Minnesota with their trucks still unpaid."],
        "✂",
      ],
      [
        2018,
        "THE BOOM RETURNS · THE NEW RIG RUNS WITH HALF A CREW",
        ["Keep a full crew anyway", "A full crew. The operator asked why your costs were the highest in the field."],
        ["Run it lean", "Half the crew, more machines. The ones left worked twice as hard, and Kayla's ER got busier."],
        "⚙",
      ],
      [
        2022,
        "A BIGGER COMPANY BUYS YOURS · A BONUS IF YOU CUT COSTS",
        ["Stay and protect your crew", "You protected them for a year. Then the new company cut them anyway, and you with them."],
        ["Take the bonus and cut", "You made the cuts and took the bonus. You and Kayla bought a place on Lake Sakakawea. She still works nights."],
        "$",
      ],
    ],
  },
});
