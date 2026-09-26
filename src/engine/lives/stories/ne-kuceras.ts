import { life } from "../build";

export const KUCERAS = life({
  id: "ne-railroad",
  protagonist: "Mike Kucera",
  dossierTag: "TRAINMASTER",
  householdName: "The Kuceras",
  location: "North Platte, NE",
  tagline: "Railroad trainmaster, 47. Czech Catholic. Three generations at Bailey Yard.",
  description:
    "Mike Kucera's grandfather worked the yard in North Platte during World War II, when the whole town met every troop train with sandwiches. His father was a conductor. Mike started as a switchman at nineteen and now manages the crews that build and inspect the trains. His wife, Kristy, runs a daycare out of their house. Their son, Josh, just hired on as a conductor.",
  perspective:
    "The railroad built this town, and it's still the best job in western Nebraska. But it's run from Omaha now by people who watch the stock price. They call the new plan 'precision.' What they mean is fewer people running longer trains. I've got a crew to protect and a railroad to run.",
  closingAddendum:
    "You were dealt the job your grandfather was proud of. It got longer, faster and emptier, and your signature was on the schedule.",
  seat: {
    title: "The Trainmaster",
    role: "Trainmaster, Bailey Yard",
    color: "#BF9F3F",
    scoreLabel: "EFFICIENCY",
    dial: ["run it safe", "run it lean"],
    dialNote: "Wall Street grades railroads on the operating ratio",
    board: "OMAHA",
    firedBody:
      "Omaha brought in a trainmaster from a railroad that runs three-mile trains with half the inspectors. He hit every target in his first quarter. The derailments happened in somebody else's town.",
    pressure: [
      "The superintendent, Hal Reimers, says your yard's dwell time is 'unacceptable.'",
      "Omaha sent a consultant to shadow you for a week. He takes a lot of notes and doesn't say much.",
    ],
    ranks: [
      ["Trainmaster", "the yard's crews"],
      ["Terminal Superintendent", "the whole yard"],
      ["Division Superintendent", "Denver to Omaha"],
      ["VP of Operations", "the whole network"],
      ["COO", "the operating ratio is yours"],
      ["Industry Board", "the rail lobby"],
    ],
    intro: [
      "You're Mike Kucera. From the Golden Spike Tower you can see all eight miles of Bailey Yard, the biggest rail yard in the world. This morning Omaha sent a new operating plan.",
      "The lights on the wall are railroaders and railroad towns: engineers, conductors, car inspectors like Frank Hruska, who has thirty-one years in, and every town along the tracks where the trains roll through.",
      "Omaha watches efficiency. Your dial runs from running it safe to running it lean.",
      "Every railroad in America is making the same cuts. The towns along the tracks don't get a vote.",
    ],
    introCta: "Climb the tower ›",
    outLabel: "FALLOUT THIS MONTH",
    fired: "What if railroads were graded on safety instead of the operating ratio?",
    ended: "The railroad is more profitable than ever. What happened in the towns along the tracks?",
    people: [
      ["the job", "a railroader for twenty years", "a longer territory", "furloughed", "laid off"],
      ["the schedule", "home for dinner", "on call twelve days straight", "no sick days", "missed the kid's birth"],
      ["the crossing", "trains pass in two minutes", "ten-minute waits", "blocked for forty minutes", "the ambulance couldn't get through"],
      ["the town", "the yard employs the town", "four hundred fewer jobs", "empty storefronts", "the town lost its railroad"],
      ["the safety", "every car inspected", "thirty seconds a car", "a derailment near town", "evacuated after the derailment"],
      ["the pension", "a railroad pension", "a smaller crew, a smaller pension", "retired early, hurt", "no pension, bought out"],
    ],
    turns: [
      [
        2018,
        "OMAHA'S NEW PLAN · FEWER TRAINS, LONGER TRAINS",
        ["Phase it in and keep the crews", "You phased it in. Your yard's numbers were the worst in the division, and Hal Reimers said so on every call."],
        ["Implement it by spring", "It was done by spring. Four hundred jobs at Bailey Yard disappeared in eighteen months."],
        "⚙",
      ],
      [
        2019,
        "TRAINS STRETCH PAST TWO MILES",
        ["Cap your trains at a mile and a half", "Shorter trains, and more of them. Your crews worked more starts, and Omaha asked why."],
        ["Build them as long as the rules allow", "Two-mile trains. A crossing in Kearney was blocked for forty minutes while an ambulance waited."],
      ],
      [
        2019,
        "INSPECTORS GET 30 SECONDS A CAR · FRANK HRUSKA SAYS IT CAN'T BE DONE",
        ["Back Frank; keep two minutes", "Two minutes a car. Frank's crew found a cracked wheel the next week, on a tank car of ethanol."],
        ["Enforce thirty seconds", "Thirty seconds a car. Frank signed off on cars he barely saw, and filed his retirement papers in October."],
      ],
      [
        2020,
        "FREIGHT DROPS · OMAHA WANTS A THIRD OF THE YARD FURLOUGHED",
        ["Fight for the crews", "You kept most of them. Hal wrote you up for 'failure to align.'"],
        ["Furlough by seniority, starting now", "A third of the yard went home. When freight came back there weren't enough crews, and the trains got longer."],
        "✂",
      ],
      [
        2022,
        "THE CREWS VOTE TO STRIKE OVER SICK DAYS",
        ["Tell Omaha the crews are right", "You said it on a call with forty managers. Nobody else did. Congress blocked the strike anyway."],
        ["Plan to run the yard with managers", "You drew up the plan. Congress blocked the strike, and your crews still have no paid sick days."],
      ],
      [
        2023,
        "EAST PALESTINE · AN OVERHEATED BEARING, A TOWN EVACUATED",
        ["Order a bearing check on your trains", "Your crews found eleven bad bearings in a week. The trains ran late. Nothing burned."],
        ["Say it couldn't happen here", "You said it on the local news. Everyone in East Palestine used to say it too."],
      ],
      [
        2023,
        "JOSH IS A CONDUCTOR NOW · OMAHA WANTS ONE-PERSON CREWS",
        ["Oppose it", "You opposed it in writing. Washington required two-person crews the next spring. Josh still has a partner in the cab."],
        ["Pilot it in your yard", "Your yard piloted it. One person now runs a two-mile train across Nebraska. On Tuesdays and Thursdays, it's Josh."],
        "✂",
      ],
    ],
  },
});
