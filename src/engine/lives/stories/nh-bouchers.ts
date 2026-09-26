import { life } from "../build";

export const BOUCHERS = life({
  id: "nh-recovery",
  protagonist: "Tim Boucher",
  dossierTag: "RECOVERY CENTER DIRECTOR",
  householdName: "The Bouchers",
  location: "Manchester, NH",
  tagline: "Recovery center director, 38. Nine years sober. He and his husband, Marco, just bought a condo.",
  description:
    "Tim Boucher overdosed twice in 2014. A church-run recovery house in Manchester took him in when nobody else would, and a retired roofer named Denny Morin became his sponsor. Now Tim runs a treatment center of his own. Marco teaches third grade. They have a dog named Deputy.",
  perspective:
    "Recovery works when somebody decides you're worth the trouble. Insurance decides that by the day, and the days run out. Everybody in this business knows someone who died on day thirty-one. I'm trying to keep the doors open long enough to keep that from happening.",
  closingAddendum:
    "You were dealt the life somebody saved. Then you were handed a business where saving people depended on how they were billed.",
  seat: {
    title: "The Director",
    role: "Director, Recovery Center",
    color: "#5B8FD9",
    scoreLabel: "CENSUS",
    dial: ["treat the patient", "bill the insurer"],
    dialNote: "a full bed pays; a discharged patient doesn't",
    board: "INVESTORS",
    firedBody:
      "The investors replaced you with a director from a Florida treatment chain. Within a year the center was paying recruiters for patients and testing urine three times a week, because the tests bill well.",
    pressure: [
      "The operating partner, Blake, wants to know why census is down four beds.",
      "Blake flew in from Nashville. He wants to 'talk about the model' over dinner, and he's already ordered.",
    ],
    ranks: [
      ["Director", "a staff of twelve"],
      ["Executive Director", "a second location"],
      ["Regional VP", "five centers in New England"],
      ["Chief Clinical Officer", "your story on the website"],
      ["Industry Voice", "a keynote at the addiction summit"],
      ["Equity Holder", "a stake in the chain"],
    ],
    intro: [
      "You're Tim Boucher. A private equity group just bought the recovery center you run. They kept you on because your story is on the website: overdose, recovery, redemption.",
      "The lights on the wall are the people who walk through the door, the roofer, the nurse, the kid from Nashua, and the families waiting in the parking lot. Cody Lavoie, 26, checked in this morning.",
      "The investors watch census: how many beds are full, how many days are billed. Your dial runs from treating the patient to billing the insurer.",
      "You know exactly which patients insurance will stop paying for on day twenty-eight. So do they.",
    ],
    introCta: "Unlock the front door ›",
    outLabel: "FALLOUT THIS MONTH",
    fired: "What if treatment were paid for by recovery instead of by the day?",
    ended: "The beds stayed full. How many people did the center keep alive?",
    people: [
      ["recovery", "two years sober", "sober, barely", "relapsed", "died of an overdose"],
      ["treatment", "stayed until ready", "discharged on day 28", "no bed available", "no treatment at all"],
      ["the family", "visits every Sunday", "calls when they can", "stopped calling", "held a funeral"],
      ["the job", "back at work", "a part-time job", "fired after the relapse", "no work"],
      ["the insurance", "covered in full", "cut off after 28 days", "billed for urine tests", "no coverage"],
      ["the housing", "an apartment of their own", "a sober house", "a friend's couch", "a tent by the river"],
    ],
    turns: [
      [
        2017,
        "THE INVESTORS CLOSE · THEY BRING A BILLING PLAYBOOK",
        ["Keep the old staff and the old rules", "The old staff stayed. Blake called it 'transition friction' and started a spreadsheet."],
        ["Adopt the playbook", "New intake forms, new fee codes, new targets. The counselors started calling patients 'census.'"],
      ],
      [
        2018,
        "URINE TESTS BILL $1,200 EACH",
        ["Test when it's clinically useful", "Tests when they mattered. Billing fell by half, and Blake asked why."],
        ["Test everyone three times a week", "Three tests a week. One patient's insurer was billed $180,000 for urine in a single year."],
        "⚗",
      ],
      [
        2019,
        "A 'RECRUITER' OFFERS INSURED PATIENTS FOR A FEE",
        ["Refuse the kickback", "You refused. Two beds stayed empty for a month."],
        ["Pay the finder's fee — the beds are empty", "You paid. He'd been working the sober houses in Florida too, and he brought you their relapses."],
      ],
      [
        2020,
        "OVERDOSES SPIKE · DENNY MORIN'S SON HAS NO INSURANCE",
        ["Give him a bed on the center's dime", "He got a bed. Blake got a new line item called 'uncompensated care,' and he circled it."],
        ["Commercial insurance only — rules are rules", "He waited three weeks for a public bed. Denny called you every one of those days."],
      ],
      [
        2021,
        "CODY LAVOIE'S INSURANCE ENDS ON DAY 28 · HE ISN'T READY",
        ["Keep him — the center eats it", "Cody stayed six more weeks. He's working construction in Concord now and calls you on his sober anniversary."],
        ["Discharge him, as billed", "Cody was discharged on day twenty-eight. Nine days later he was in the ER in Nashua."],
      ],
      [
        2022,
        "MEDICATION TREATMENT WORKS · IT BILLS WORSE",
        ["Offer it to everyone who needs it", "Relapses dropped by a third. So did revenue per patient."],
        ["Stick with the residential model", "The residential model billed better. Fewer people stayed sober."],
      ],
      [
        2024,
        "THE CHAIN WANTS A SECOND CENTER · IN A STRIP MALL",
        ["Only if it's fully staffed", "The second center opened fully staffed, six months late. Blake called it 'a missed window.'"],
        ["Open it with half the clinicians", "It opened on time with half the counselors. Each counselor had forty patients."],
      ],
    ],
  },
});
