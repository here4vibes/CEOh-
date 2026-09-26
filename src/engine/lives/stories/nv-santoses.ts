import { life } from "../build";

export const SANTOSES = life({
  id: "nv-sportsbook",
  protagonist: "Grace Santos",
  dossierTag: "CASINO HOST",
  householdName: "The Santoses",
  location: "Las Vegas, NV",
  tagline: "Filipino-American. VIP casino host, 42. Her mother cleaned rooms on the Strip for twenty-five years.",
  description:
    "Grace Santos's parents came from Pampanga in 1985. Her mother was a housekeeper and a Culinary Union member for twenty-five years; the union job paid for their house in the northwest valley. Grace started as a cocktail server and worked her way up to VIP host. Her daughter is at UNLV. Her son is seventeen.",
  perspective:
    "This town was built on gambling, and it gave my family a middle-class life. People come here to lose money. They know it, and they come back. My job is to make sure they have a good time doing it. I'm good at it, and I'm not ashamed of it.",
  closingAddendum:
    "You were dealt a town where losing money is the product. Your mother cleaned the rooms. You kept the players in them.",
  seat: {
    title: "The Host",
    role: "VIP Casino Host",
    mode: "attn",
    color: "#BF3F9F",
    scoreLabel: "THEORETICAL WIN",
    litLabel: "still in control of it",
    dial: ["let them walk away", "keep them playing"],
    dialNote: "the house earns on every hour they stay",
    board: "MARKETING",
    firedBody:
      "Casino marketing replaced you with a 'player development' system that sends an offer the second a player heads for the door. It knows who's losing, and who's chasing.",
    pressure: [
      "Casino marketing says your players' theoretical win is down 12%.",
      "The VP of player development, Mr. Varga, wants to 'optimize' your list. He means reassign it.",
    ],
    ranks: [
      ["Host", "a list of players"],
      ["Senior Host", "the high rollers"],
      ["Executive Host", "a private jet budget"],
      ["Director of Player Development", "every host on the floor"],
      ["VP of Marketing", "the loyalty program"],
      ["Sportsbook", "the app's VIP desk"],
    ],
    intro: [
      "You're Grace Santos. It's 1 a.m. on the Strip. Your phone buzzes: one of your players just landed from Honolulu, and he wants his usual suite.",
      "The lights on the wall are your players: businessmen who can afford it, retirees who can't, young men on their phones at 3 a.m., and Danny Oyama, a retired electrician from Hilo who calls Las Vegas 'the ninth island.'",
      "Casino marketing watches theoretical win. Your dial runs from letting them walk away to keeping them playing.",
      "You can tell who's having fun and who's in trouble. So can the system.",
    ],
    introCta: "Walk the casino floor ›",
    outLabel: "FALLOUT THIS WEEKEND",
    fired: "What if losing weren't the business model?",
    ended: "Your players are the casino's best customers. How many of them can afford to be?",
    people: [
      ["the bets", "plays for fun on birthdays", "a weekly habit", "chasing losses", "lost everything to the app"],
      ["the savings", "untouched", "dipped into", "the retirement account is gone", "borrowed against the house"],
      ["the sleep", "in bed by eleven", "betting at midnight", "betting at 2 a.m.", "never sleeps"],
      ["the family", "they know about the bets", "they're worried", "they found out about the debt", "the marriage ended"],
      ["the job", "at work on time", "distracted at work", "missing shifts", "fired"],
      ["the self-exclusion", "never needed it", "thought about it", "signed up, came back", "the app found a way around it"],
    ],
    turns: [
      [
        2010,
        "DANNY OYAMA IS DOWN $40,000 THIS TRIP",
        ["Suggest he fly home a day early", "He flew home Friday. He sent you macadamia nuts at Christmas, like always."],
        ["Comp the suite through Sunday", "He stayed through Sunday and lost another $30,000. He thanked you for the suite."],
        "$",
      ],
      [
        2013,
        "A LOSS REBATE · 10% BACK IF THEY COME BACK",
        ["Offer it only to players who can afford it", "Rebates for the players who could afford them. Your theoretical win dropped, and marketing noticed."],
        ["Offer it to your biggest losers first", "Your biggest losers came back every month to win it back. They rarely did."],
      ],
      [
        2016,
        "DANNY ASKS YOU TO BAN HIM",
        ["Help him self-exclude", "You walked him through the paperwork. A year later he sent a card: fourteen months without a bet."],
        ["Tell him you'll keep an eye out", "You told him you'd watch out for him. He was back at the tables that Friday, and you comped his room."],
      ],
      [
        2018,
        "SPORTS BETTING GOES NATIONWIDE · THE APP NEEDS HOSTS",
        ["Stay on the casino floor", "You stayed on the floor. Your players got older, and the young ones never met you."],
        ["Move to the app — the future pays", "You moved to the app. Now your players can lose money in bed."],
        "▶",
      ],
      [
        2020,
        "THE CASINOS CLOSE · YOUR PLAYERS ARE HOME WITH THEIR PHONES",
        ["Call to check on your players", "You called forty players. One told you he was in trouble, and you found him a counselor."],
        ["Push them to the app", "Online betting doubled during the lockdown. Your numbers never looked better."],
        "▶",
      ],
      [
        2022,
        "THE APP CAN SEND OFFERS AT 2 A.M. · YOUR SON IS SEVENTEEN",
        ["Turn off late-night offers", "No offers after midnight. Deposits dipped. You checked your son's phone anyway. It was clean."],
        ["Let the model decide who gets what", "The 2 a.m. offers doubled deposits. Your son had been betting on a friend's account since March. You found the texts in June."],
        "⚙",
      ],
      [
        2024,
        "YOUR BIGGEST LOSER IS A UNLV JUNIOR · YOUR DAUGHTER'S CLASSMATE",
        ["Flag his account", "The app limited his bets. He was furious. Your daughter heard he's doing better."],
        ["Make him a VIP — he's an adult", "He's a VIP now. He dropped out in the spring owing $60,000."],
        "$",
      ],
    ],
  },
});
