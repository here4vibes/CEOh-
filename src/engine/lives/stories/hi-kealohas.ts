import { life } from "../build";

export const KEALOHAS = life({
  id: "hi-resort",
  protagonist: "Kaipo Kealoha",
  dossierTag: "RESORT OPERATIONS DIRECTOR",
  householdName: "The Kealohas",
  location: "Lahaina, HI",
  tagline: "Native Hawaiian. Resort operations director, 38. His family has farmed taro in Honokōhau Valley for generations.",
  description:
    "Kaipo Kealoha started at the resort as a busboy and worked his way up to running it. His Uncle Sonny still farms the family taro patches in the valley. His mother, Leimomi, has lived in the same house a block off Front Street for forty years. He and his wife, Leilani, have two girls.",
  perspective:
    "Tourism is the only real job on Maui, and it paid for my house and my girls' school. But the water that used to run to our taro runs to golf courses now, and we serve drinks on land our grandparents farmed. You don't get to pick one side of that. You live in both.",
  closingAddendum:
    "You were dealt a job serving visitors on land your family farmed. Every choice came down to who the island is for.",
  seat: {
    title: "The Resort Director",
    role: "Director of Operations, Resort",
    color: "#3FBFA3",
    scoreLabel: "OCCUPANCY",
    dial: ["the community", "the guests"],
    dialNote: "a golf course drinks more water than a village",
    board: "OWNERS",
    firedBody:
      "The resort's owners in Los Angeles replaced you with a manager from Las Vegas. He fought the water limits in court, staffed the rooms with contractors from off-island and hit every occupancy target.",
    pressure: [
      "The ownership group says you're trailing the other Kāʻanapali resorts on occupancy.",
      "The regional VP flew in from Honolulu and asked about your 'commitment to the brand.'",
    ],
    ranks: [
      ["Operations Director", "the resort's staff"],
      ["General Manager", "the whole resort"],
      ["Regional VP", "four resorts on Maui"],
      ["Hotel Association Chair", "the county council listens"],
      ["Corporate", "an office at mainland headquarters"],
      ["Investor", "a stake in the next development"],
    ],
    intro: [
      "You're Kaipo Kealoha. It's 5 a.m. at the resort in Kāʻanapali, and the sprinklers are running on the golf course, like every morning. Up the coast in Honokōhau, Uncle Sonny's taro patch is dry.",
      "The lights on the wall are Maui: housekeepers commuting two hours from Kahului, farmers with dry streams, your mother in her house off Front Street, and families who can't afford to live where they grew up.",
      "The owners watch occupancy. Your dial runs from the community to the guests.",
      "Three million visitors a year. A hundred and sixty-five thousand residents. The same water, the same roads, the same houses.",
    ],
    introCta: "Walk the property ›",
    outLabel: "FALLOUT THIS SEASON",
    fired: "Who should Maui be for, and who gets to decide?",
    ended: "The resort is full. Can your daughters afford to live here?",
    people: [
      ["the taro", "the patch runs full", "the stream runs low", "the stream is dry by summer", "the patch is abandoned"],
      ["the housing", "a family home in Lahaina", "rent up by half", "two families in one house", "moved to Las Vegas"],
      ["the job", "a resort job with a union", "hours cut after the shutdown", "laid off", "no work on the island"],
      ["the commute", "walks to work", "forty minutes each way", "two hours each way", "gave up the job"],
      ["the fire", "the house survived", "the house burned; insurance paid", "living in a hotel room", "the lot sold to an investor"],
      ["the island", "home, as it always was", "more visitors than neighbors", "a stranger in their own town", "left the island for good"],
    ],
    turns: [
      [
        2012,
        "THE GOLF COURSE WANTS MORE STREAM WATER",
        ["Leave it for Uncle Sonny's taro", "The stream ran full to the valley that summer. The course browned at the edges, and the owners sent photos."],
        ["Take the full allocation — guests pay for green", "The course stayed green. Uncle Sonny's patch went dry by August for the third year running."],
      ],
      [
        2015,
        "VACATION RENTALS ARE BUYING UP LAHAINA",
        ["Back the limits on vacation rentals", "The limits passed in a weaker form. The owners asked why their director was testifying against tourism."],
        ["Stay out of it — rentals fill your restaurants", "The rentals doubled. Your housekeepers moved farther away, and two quit over the commute."],
      ],
      [
        2018,
        "THE OWNERS WANT A NEW 300-ROOM TOWER",
        ["Oppose it on water", "The tower was approved at half the size. Half the water."],
        ["Back it — two hundred jobs", "The tower went up. So did the resort's water use, by a third."],
      ],
      [
        2020,
        "THE ISLAND CLOSES · 1,100 STAFF AND NO GUESTS",
        ["Keep them on half pay as long as you can", "Half pay for four months. The owners called it charity. Everyone you kept came back."],
        ["Lay everyone off by Friday", "Everyone laid off by Friday. A third of your staff moved to Las Vegas and didn't come back."],
        "✂",
      ],
      [
        2021,
        "RECORD VISITORS · RESIDENTS CAN'T GET TO WORK",
        ["Push for a cap on visitors", "The county passed a small fee instead of a cap. It's a start, and the owners hate it."],
        ["Fill every room", "Every room full, every night. The highway to Lahaina backs up for an hour every morning."],
      ],
      [
        2023,
        "LAHAINA BURNS · YOUR MOTHER'S HOUSE IS GONE",
        ["House displaced families as long as it takes", "Your mother and two hundred families lived in the tower for a year. The owners billed the government and complained anyway."],
        ["Push to reopen West Maui to tourists", "The tourists came back in October. Your mother, in a donated room on the third floor, watched them carry surfboards past her door."],
      ],
      [
        2024,
        "INVESTORS OFFER CASH FOR BURNED LOTS · INCLUDING YOUR MOTHER'S",
        ["Help her keep the lot and rebuild slowly", "She kept it. Rebuilding will take four years and money you don't have. You're paying the architect."],
        ["Tell her to take the offer — she can't rebuild", "She sold. The lot is a vacation-rental permit application now. She lives in Kahului, with your sister."],
      ],
    ],
  },
});
