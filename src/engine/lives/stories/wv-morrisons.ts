import { life } from "../build";

export const MORRISONS = life({
  id: "rural-displaced",
  protagonist: "Roger Morrison",
  dossierTag: "SHIFT SUPERVISOR",
  householdName: "The Morrisons",
  location: "McDowell County, WV",
  tagline: "Former mine electrician, 56. The mine closed four years ago. The new warehouse just made him a shift supervisor.",
  description:
    "Roger and Diane Morrison have owned their house in Welch since 2001. The furnace needs replacing, and retirement is thin. Their kids moved to Columbus and Charlotte. Roger spent nineteen years underground beside Earl Blankenship, who now works on his shift. The church is the last thing on Main Street still open.",
  perspective:
    "The jobs left before the explanations did. Politicians came through and promised to bring them back, and they didn't. Now there's a warehouse, and it's the best job in the county. I'm not going to be the one who loses it for everybody.",
  closingAddendum:
    "You were dealt a county where the exits had already closed. The rate was set by people who'd never seen Route 52, and it ran through you.",
  seat: {
    title: "The Shift Supervisor",
    role: "Shift Supervisor",
    color: "#C9853F",
    scoreLabel: "UNITS PER HOUR",
    dial: ["protect the crew", "hit the rate"],
    dialNote: "the rate only goes one direction",
    board: "DISTRICT",
    firedBody:
      "District brought in a supervisor from the Charleston site who hit the rate in a month. Your crew got the same quotas from someone who didn't know their names.",
    pressure: [
      "Your district manager, Brent Mercer, says your building had the lowest rate in the region on this morning's call.",
      "Brent is driving down Thursday. Nobody drives down from district on good news.",
    ],
    ranks: [
      ["Shift Supervisor", "a radio and a clipboard"],
      ["Area Manager", "salaried, no more overtime"],
      ["Operations Manager", "a parking spot by the door"],
      ["Site Leader", "stock grants"],
      ["Regional Director", "three buildings in two states"],
      ["VP, Fulfillment", "they fly you to headquarters"],
    ],
    intro: [
      "You're Roger Morrison. It's 5:40 a.m. in the parking lot of the distribution center on Route 52. You've got a radio, a clipboard and forty people on your shift, and you knew most of their daddies.",
      "The lights on the wall are the people on your shift and the families behind them: your neighbors, your church, and Earl Blankenship, who ran the continuous miner beside you for nineteen years.",
      "District gives you one number: units per hour. Your dial runs from protecting the crew to hitting the rate.",
      "Nobody here will complain out loud. They need this job more than you do. That's what makes it work.",
    ],
    introCta: "Clock in ›",
    outLabel: "FALLOUT THIS SHIFT",
    fired: "Who decided the rate was the only number that counts?",
    ended: "The rate went up every year. Is the county better off than when the mine closed?",
    people: [
      ["the shift", "full-time with benefits", "hours cut to thirty-two", "a temp contract, renewed weekly", "let go for rate"],
      ["the back", "no complaints", "a brace under the vest", "pain pills to finish the shift", "can't work anymore"],
      ["the union talk", "signed a card", "keeps his head down", "afraid to be seen talking", "fired after the vote"],
      ["the house", "paid off since the mine", "a second mortgage", "behind on the taxes", "lost the house"],
      ["the kids", "one at Marshall on a scholarship", "stayed close to help out", "moved back in with their parents", "moved to Columbus for good"],
      ["the county", "the diner's still open", "Main Street half empty", "the school consolidated", "the town is hollowed out"],
    ],
    turns: [
      [
        2017,
        "THE CENTER OPENS · 400 JOBS IN A COUNTY THAT LOST 3,000",
        ["Hire the old miners and train them right", "The old miners learned the scanners. Your first-quarter rate was the region's lowest."],
        ["Hire through the temp agency", "The temps turned over every six weeks. The rate held, and nobody stayed long enough to complain."],
      ],
      [
        2018,
        "THE RATE GOES UP 8% · NOBODY ASKED THE FLOOR",
        ["Tell district the floor can't do it", "District raised the rate anyway and made a note that you pushed back."],
        ["Post the rate board by the time clock", "The board went up by the time clock. Men who'd been friends for thirty years stopped eating lunch together."],
        "⚙",
      ],
      [
        2019,
        "UNION CARDS IN THE BREAK ROOM",
        ["Stay out of it", "The cards went around. The vote failed by thirty, and your name wasn't on anybody's list."],
        ["Give HR the names they asked for", "HR had the names by Friday. Four of them were let go 'for rate' within the month."],
        "✂",
      ],
      [
        2020,
        "PEAK SEASON IN A PANDEMIC · MANDATORY OVERTIME",
        ["Cap the hours and rotate crews", "Rotating crews, capped hours. Packages ran late, and district noticed."],
        ["Sixty-hour weeks — the boxes won't wait", "Sixty-hour weeks. Half your shift caught it in November. Everyone came back, eventually."],
      ],
      [
        2021,
        "EARL'S BACK GIVES OUT ON LINE 4",
        ["Log it as a workplace injury", "It went on the log. The building lost its safety bonus, and Earl got surgery and workers' comp."],
        ["Send him to the on-site clinic", "The clinic gave him ibuprofen and a light-duty slip. He was back on Line 4 in a week, walking funny."],
        "✂",
      ],
      [
        2022,
        "THE ROBOTS ARRIVE · HALF THE PICKERS WILL GO",
        ["Fight to retrain them", "You got half of them into the maintenance program. The other half went anyway."],
        ["Choose who goes, by rate", "The lowest rates went first. Earl was the fourth name on the list."],
        "⚙",
      ],
      [
        2024,
        "THE CENTER MIGHT CLOSE · UNLESS THE COUNTY CUTS ITS TAXES",
        ["Tell the county to let it go", "The center closed. Four hundred jobs gone. The school levy survived."],
        ["Testify for the tax break", "The tax break passed. The center stayed, and the county cut two teachers and a bus route."],
      ],
    ],
  },
});
