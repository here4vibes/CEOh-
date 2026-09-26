import { life } from "../build";

export const SULLIVANS = life({
  id: "ma-enrollment",
  protagonist: "Kevin Sullivan",
  dossierTag: "VP OF ENROLLMENT",
  householdName: "The Sullivans",
  location: "Boston, MA",
  tagline: "University vice president, 55. First in his family to go to college. Now he decides who gets in.",
  description:
    "Kevin Sullivan grew up in Dorchester, the fourth of six kids. A Jesuit high school and a full scholarship got him to college. He's spent thirty years in admissions and still remembers the weight of the envelope. His nephew, Liam, grew up three streets from where Kevin did.",
  perspective:
    "A college has to balance its budget, and tuition is the budget. Rankings bring applications, applications bring tuition, and tuition pays for everything. You can think the whole thing is backwards and still be the person who has to hit the class target. Somebody has to, and I'd rather it be me.",
  closingAddendum:
    "You were dealt the life that got through the door on a scholarship. Then they handed you the key, and a number to hit.",
  seat: {
    title: "The Dean",
    role: "VP of Enrollment",
    color: "#A33B3B",
    scoreLabel: "NET TUITION",
    dial: ["need-blind", "full-pay first"],
    dialNote: "the rankings reward rejection, not access",
    board: "TRUSTEES",
    firedBody:
      "The trustees hired a consulting firm whose algorithm prices every applicant's aid to the dollar. The class came in on budget, and richer than the year before.",
    pressure: [
      "The CFO, Amy Lindqvist, says the class came in $4 million short, and the trustees want a plan.",
      "The president is 'benchmarking' enrollment consultants. He says you shouldn't read anything into it.",
    ],
    ranks: [
      ["Dean", "an office in the old library"],
      ["Vice President", "a seat in the cabinet"],
      ["Senior VP", "the trustees know your name"],
      ["Provost", "the academic budget"],
      ["President", "a house on campus"],
      ["Consultant", "forty colleges license your model"],
    ],
    intro: [
      "You're Kevin Sullivan. It's March, and 38,000 applications are about to become 1,900 acceptance letters. Tuition is $68,000 a year.",
      "The lights on the wall are families: applicants, parents co-signing loans and kids who'll carry the debt into their thirties. Somewhere in the pile is a kid from Brockton who reminds you of you.",
      "The trustees watch net tuition revenue and the rankings. Your dial runs from need-blind to full-pay first.",
      "You were once the kid with the thin envelope and the big dream. That kid is in the pile every year.",
    ],
    introCta: "Open the reading room ›",
    outLabel: "FALLOUT THIS CLASS",
    fired: "Why is college priced like an airline seat?",
    ended: "The rankings rose every year. Where did the kids like you go?",
    people: [
      ["the application", "admitted with full aid", "admitted with a gap", "waitlisted", "never applied"],
      ["the loans", "graduated debt-free", "$20,000 in loans", "$60,000 in loans", "dropped out owing $40,000"],
      ["the parents", "comfortable", "took out a home equity loan", "co-signed private loans", "defaulted as co-signers"],
      ["the first job", "a job in their field", "a job outside their field", "a barista, paying down loans", "moved back home"],
      ["the scholarship", "a full ride", "merit aid, not need-based", "aid cut after freshman year", "left after one semester"],
      ["the neighborhood", "kids from here get in", "one or two a year", "none in five years", "nobody from here applies anymore"],
    ],
    turns: [
      [
        2003,
        "THE RANKINGS REWARD A LOW ADMIT RATE",
        ["Keep recruiting where the need is", "You kept visiting Brockton and Lawrence. The admit rate stayed high, and the rankings didn't move."],
        ["Market everywhere, reject more, climb", "Applications doubled; admissions didn't. The college climbed eleven spots in two years."],
        "⚡",
      ],
      [
        2006,
        "'MERIT' AID WINS OVER FULL-PAYING FAMILIES",
        ["Keep aid based on need", "Aid stayed need-based. The class came in $2 million short, and the CFO scheduled a standing meeting."],
        ["Shift aid to 'merit'", "Merit aid went to families who would have paid anyway. Fewer Pell Grant students enrolled."],
      ],
      [
        2009,
        "THE ENDOWMENT LOSES A QUARTER OF ITS VALUE",
        ["Stay need-blind", "Need-blind held. The trustees asked for a five-year plan and a new CFO."],
        ["Go need-aware, quietly", "Need-aware, quietly. The waitlist kept the kids who could pay."],
      ],
      [
        2012,
        "A NEW DORM WITH A LAZY RIVER",
        ["Put the money into aid", "Two hundred more students got full aid. The tour guides apologize for the old dorms."],
        ["Build it — the tours sell the class", "The lazy river opened in August. Tuition rose 4% to pay for it."],
      ],
      [
        2016,
        "LEGACY APPLICANTS ARE 14% OF THE CLASS",
        ["End legacy preference", "Legacy preference ended. Two donors canceled seven-figure pledges the same week."],
        ["Keep it — the campaign needs the donors", "Legacies stayed. One freshman in seven was connected before they applied."],
        "$",
      ],
      [
        2019,
        "AID SOFTWARE PRICES EVERY APPLICANT · INCLUDING YOUR NEPHEW LIAM",
        ["Keep aid decisions human", "People decide aid again. Liam got a full package. The CFO forwarded you the discount-rate chart without comment."],
        ["Let the model set the aid", "The model offered Liam $19,000 a year. He's at UMass Boston, working thirty hours a week."],
        "⚙",
      ],
      [
        2023,
        "THE SUPREME COURT ENDS RACE-CONSCIOUS ADMISSIONS",
        ["Recruit hard in Brockton and Lawrence", "You spent the summer in high school gyms. The class stayed diverse, and more expensive to fund."],
        ["Let the numbers fall where they fall", "Black enrollment fell by a third. The rankings didn't notice."],
      ],
    ],
  },
});
