import { life } from "../build";

export const CHARLESES = life({
  id: "ak-native-corporation",
  protagonist: "Rose Charles",
  dossierTag: "CORPORATION BOARD MEMBER",
  householdName: "The Charleses",
  location: "Bethel, AK",
  tagline: "Yup'ik nurse and Native corporation board member, 49. Her father still runs a fish camp on the Kuskokwim.",
  description:
    "Rose Charles grew up in a village upriver from Bethel, where stove oil runs twelve dollars a gallon. She works nights at the regional hospital. Her father, Moses, is seventy-six and still sets his net every June at the family fish camp. Her daughter, Tatiana, studies engineering in Anchorage.",
  perspective:
    "In 1971, Congress made us shareholders instead of nations. So our land has to earn money, and I sit on the board that decides how. The dividend isn't greed. It's stove oil in January for villages with no road. But the fish on my father's racks are what make us Yup'ik. You try choosing.",
  closingAddendum:
    "You were dealt a people's land held as a corporation. The dividend kept the villages warm, and the river kept them who they are. The law made you pick.",
  seat: {
    title: "The Board Member",
    role: "Board Member, Native Corporation",
    color: "#3F8FBF",
    scoreLabel: "DIVIDENDS",
    dial: ["the river", "the dividend"],
    dialNote: "by law, the corporation has to turn a profit",
    board: "SHAREHOLDERS",
    firedTitle: "VOTED OFF",
    firedBody:
      "At the annual meeting, shareholders voted you off for a slate that promised a bigger check. The new board signed everything the mining company put in front of it before the ice went out.",
    pressure: [
      "An elder stood up at the Akiachak meeting and asked why the dividend shrank. Everyone clapped.",
      "A slate backed by the mine's supporters is running for your seat. They're flying to every village.",
    ],
    ranks: [
      ["Board Member", "a seat at the table in Anchorage"],
      ["Lands Committee Chair", "every lease crosses your desk"],
      ["Board Chair", "the corporation speaks through you"],
      ["Federation Leader", "the statewide Native convention"],
      ["Mine Advisory Board", "a stipend from the gold company"],
      ["Washington Witness", "you testify before Congress"],
    ],
    intro: [
      "You're Rose Charles. It's your first board meeting, in an Anchorage conference room with a view of the inlet. On the table is a gold company's offer to lease the land your grandparents hunted, for one of the largest gold mines on Earth.",
      "The lights on the wall are the villages along the Kuskokwim: fish camps, church potlucks, a school with eleven kids, and your father's smokehouse, downstream of wherever the mine would go.",
      "Shareholders watch one number: the dividend. Your dial runs from the river to the dividend. The mine would move it more than anything in the corporation's history.",
      "The gold is at the headwaters. Everything downstream eats from the river.",
    ],
    introCta: "Take your seat ›",
    actLabel: "VOTE",
    outLabel: "FALLOUT THIS SEASON",
    fired: "Why was a people's homeland ever put inside a company that has to make a profit?",
    ended: "The dividends grew. How are the fish?",
    people: [
      ["the salmon", "a full smokehouse by August", "a thin run, but enough", "fishing closed at the peak", "an empty smokehouse all winter"],
      ["the river", "drinks from it and fishes it", "a mine road upstream", "fuel barges for the mine", "won't eat what comes out of it"],
      ["the stove oil", "a full tank in October", "twelve dollars a gallon", "heating one room", "a cold house in January"],
      ["the dividend", "a check that helps", "a check that pays the fuel bill", "a check that's all they have", "the check is all that's left"],
      ["the village", "Yup'ik at every table", "the young people leaving for Anchorage", "the school down to eleven kids", "the village is emptying"],
      ["the caribou", "the herd comes through every fall", "the herd changed its path", "a four-day trip to hunt", "no caribou in the freezer"],
    ],
    turns: [
      [
        2008,
        "A GOLD COMPANY'S OFFER · A LEASE WORTH MILLIONS A YEAR",
        ["Hold meetings in all 56 villages first", "Eleven villages said wait. The company agreed to wait, and brought three lawyers to the next board meeting."],
        ["Sign it — the villages need the money now", "The first payment came in December. It was the biggest dividend in the corporation's history, and it arrived the week the stove oil ran out."],
        "✎",
      ],
      [
        2012,
        "THE KING SALMON CRASH · YOUR FATHER IS CITED FOR FISHING",
        ["Pay for the fishermen's lawyers", "The corporation paid. Your father stood in court in his fishing coat and said he'd fished that river for sixty years. The judge fined him anyway."],
        ["Stay neutral — you'll need the state for permits", "The corporation said nothing. Your father paid his fine in cash and set his net again the next June."],
      ],
      [
        2015,
        "THE MINE NEEDS A 315-MILE GAS PIPELINE",
        ["Route it around the calving grounds", "The reroute added $60 million and two years. The company complained, then paid."],
        ["Approve the cheapest route", "The right-of-way cut across the old caribou crossing. Hunters from three villages started traveling farther every fall."],
        "⚙",
      ],
      [
        2018,
        "THE PERMITS ARE SIGNED · VILLAGES ASK YOU TO OPPOSE THEM",
        ["Stand with the villages", "You voted with the villages and lost, 8 to 7. The mining company's newsletter left your name out of the thank-yous."],
        ["Defend the permits — it's our land to use", "The corporation defended the permits in court. Two village councils passed resolutions against their own corporation."],
        "✎",
      ],
      [
        2020,
        "THE PANDEMIC · FLIGHTS STOP, PRICES DOUBLE",
        ["Pay a hardship dividend from reserves", "The hardship checks went out in April. Villages bought fuel and flour before the barges stopped."],
        ["Protect the reserves for the mine partnership", "The reserves stayed whole for the partnership. Village stores ran out of flour in May."],
      ],
      [
        2022,
        "NO CHUM, NO KINGS · YOUR FATHER'S RACKS ARE EMPTY",
        ["Declare an emergency and fly in fish", "Fish came by air cargo from Bristol Bay. Your father ate it and said it tasted like somebody else's river."],
        ["Hold the budget — the mine is the real fix", "The corporation held its budget. Your father ate store-bought chicken all winter and stopped talking about next June."],
      ],
      [
        2024,
        "THE FINAL VOTE ON THE MINE",
        ["Vote to walk away from the lease", "The motion to withdraw failed, 9 to 6. The mine is coming anyway, just without your name on it."],
        ["Vote to build it", "It passed. Tatiana is on the mine's engineering hiring list. Your father still sets his net below the confluence."],
        "✎",
      ],
    ],
  },
});
