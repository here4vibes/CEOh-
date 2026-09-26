import { life } from "../build";

export const PRUITTS = life({
  id: "ar-supplier",
  protagonist: "Jenna Pruitt",
  dossierTag: "VENDOR ACCOUNT MANAGER",
  householdName: "The Pruitts",
  location: "Bentonville, AR",
  tagline: "Vendor account manager, 31. First in her family with a salary. Her dad built refrigerators in Fort Smith until the plant closed.",
  description:
    "Jenna Pruitt sells plastic storage bins to the biggest retailer on Earth, whose headquarters is ten minutes from her new house. Her husband, Cody, is a youth pastor. Her father spent twenty-two years on the line at the refrigerator plant in Fort Smith and hasn't had steady work since it closed in 2012.",
  perspective:
    "Low prices are how families like mine get by. That's not a slogan; I grew up on them. The store pushes its suppliers hard because it's pushing for its customers. Somebody has to make the math work, and I'm good at math.",
  closingAddendum:
    "You were dealt a good job in the town the low price built. The price was paid somewhere you never had to see.",
  seat: {
    title: "The Vendor Rep",
    role: "Vendor Account Manager",
    color: "#3F7FBF",
    scoreLabel: "SHELF SPACE",
    dial: ["protect the factory", "hit the retailer's price"],
    dialNote: "the retailer expects a lower price every single year",
    board: "HEAD OFFICE",
    firedBody:
      "Head office sent a rep from Chicago who agreed to every cut the buyer asked for. The Ohio plant closed within a year. The bins are made in Vietnam now, and they're a dollar cheaper.",
    pressure: [
      "Your VP, Meredith Blum, wants to know why the price agreement still isn't signed.",
      "Meredith flew in from Ohio. She said 'the account is at risk,' and she was looking at you.",
    ],
    ranks: [
      ["Account Manager", "a badge to the retailer's campus"],
      ["Senior Manager", "a team of four"],
      ["Category Director", "the whole storage aisle"],
      ["VP of Sales", "a lake house on Beaver Lake"],
      ["Supplier of the Year", "a plaque in the retailer's lobby"],
      ["Retailer Hire", "they hire you to the other side of the table"],
    ],
    intro: [
      "You're Jenna Pruitt. You're in a windowless room on the retailer's campus, across the table from a buyer who is twenty-six and holds a third of your company's revenue in his laptop.",
      "The lights on the wall are the people on both ends of a $7.97 storage bin: the families who buy it, and the workers at the plant in Bryan, Ohio, who make it. You've met none of the second group.",
      "Head office watches your shelf space. Your dial runs from protecting the factory to hitting the retailer's price.",
      "If you say no, four other vendors are waiting in the lobby. The buyer knows it. So do you.",
    ],
    introCta: "Badge into the campus ›",
    outLabel: "FALLOUT THIS QUARTER",
    fired: "Why is the lowest price the only number the whole chain answers to?",
    ended: "The bin costs $6.97 now. Who paid the difference?",
    people: [
      ["the plant job", "full-time in Ohio", "four ten-hour shifts, no overtime", "the line moved to Vietnam", "laid off before Thanksgiving"],
      ["the health plan", "a real family plan", "a $6,000 deductible", "put off the surgery", "medical debt in collections"],
      ["the raise", "a raise every year", "frozen for two years", "a pay cut to keep the line", "no job to get a raise from"],
      ["the store", "shops at the supercenter", "counts every dollar there", "buys the store brand", "can't afford the $6.97 bin"],
      ["the town", "the plant sponsors the Little League", "the plant cut its sponsorships", "the plant closed a building", "the town lost its plant"],
      ["the overtime", "overtime when they want it", "mandatory overtime", "seven days a week all summer", "burned out and quit"],
    ],
    turns: [
      [
        2016,
        "THE BUYER'S ANNUAL ASK · FIVE PERCENT OFF, EVERY YEAR",
        ["Tell him Ohio can't do it", "The buyer thanked you for your honesty and moved a third of your shelf space to a competitor from Georgia."],
        ["Promise the five — you'll find it somewhere", "He shook your hand. The plant in Ohio got the memo before you got back to your car."],
      ],
      [
        2017,
        "FINDING THE FIVE · THE PLANT'S HEALTH PLAN IS THE BIGGEST LINE",
        ["Cut your own travel and marketing instead", "You found three points in your own budget. You'll have to find the other two next year, and the year after that."],
        ["Tell Ohio to 'rethink benefits'", "The plant's deductible went to $6,000. Donna Kasper, a line lead for nineteen years, put off her knee surgery."],
        "✂",
      ],
      [
        2018,
        "TARIFFS RAISE THE PRICE OF RESIN · THE RETAILER WON'T MOVE",
        ["Ask the retailer to split the hit", "The buyer split it, once, and wrote down that you asked."],
        ["Absorb it in Ohio — freeze raises", "Raises at the plant were frozen for two years. Nobody in Bentonville noticed. That was the point."],
        "✂",
      ],
      [
        2019,
        "A FACTORY IN VIETNAM QUOTES 30% UNDER OHIO",
        ["Keep the line in Ohio and lose margin", "Ohio kept its line. Your bonus was a third of the year before's."],
        ["Move half the line — or lose the account", "Half the line moved to Vietnam. Two hundred people in Bryan were laid off before Thanksgiving."],
        "✈",
      ],
      [
        2020,
        "EVERYONE IS HOME ORGANIZING THE GARAGE · BINS SELL OUT",
        ["Hire in Ohio and pay the surge", "The plant hired sixty people and paid a $2 bonus an hour. Shelves stayed stocked; margins didn't."],
        ["Run the line seven days on overtime", "The line ran seven days a week from April to August. Donna Kasper worked every one of them."],
      ],
      [
        2022,
        "DONNA KASPER EMAILS YOU · IS OHIO CLOSING?",
        ["Tell her the truth", "You told her. She thanked you and applied at the Honda plant in Marysville. She got in."],
        ["Tell her nothing's been decided", "You told her nothing was decided. Your father said those exact words to his crew in Fort Smith in 2011, and he believed them too."],
      ],
      [
        2024,
        "THE RETAILER WANTS A STORE-BRAND KNOCKOFF OF YOUR BIN",
        ["Refuse — even if they drop you", "They found another factory in a month. Your bin still sits on the shelf, next to its cheaper twin."],
        ["Make it — better us than a stranger", "You make the knockoff of your own bin, in Vietnam. It sells for a dollar less, right next to yours."],
      ],
    ],
  },
});
