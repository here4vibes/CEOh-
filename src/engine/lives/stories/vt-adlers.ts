import { life } from "../build";

export const ADLERS = life({
  id: "vt-hospital",
  protagonist: "Hannah Adler",
  dossierTag: "HOSPITAL CEO",
  householdName: "The Adlers",
  location: "St. Johnsbury, VT",
  tagline: "Rural hospital CEO, 49. A family doctor for fifteen years before that. Forty miles from the next ER.",
  description:
    "Hannah Adler came to Vermont's Northeast Kingdom for a two-year rural medicine program and never left. Her husband builds furniture. Their daughter, Maya, plays hockey for St. Johnsbury Academy. Hannah delivered half the girls on Maya's team.",
  perspective:
    "A rural hospital is the biggest employer, the only ER and the place people are born and die. It also loses money on almost everything it does. Somebody has to decide what to cut, and whoever decides is the bad guy. I'd rather it be someone who knows the patients.",
  closingAddendum:
    "You were dealt the hospital everyone needed and nobody paid for. Every service you kept was a decision about who would have to drive an hour.",
  seat: {
    title: "The Hospital CEO",
    role: "CEO, Community Hospital",
    color: "#4D9FD9",
    scoreLabel: "OPERATING MARGIN",
    dial: ["keep every service", "keep the doors open"],
    dialNote: "labor and delivery loses money on every birth",
    board: "SYSTEM",
    firedBody:
      "The regional health system sent its own CEO from Burlington. She closed the birthing center and the psych unit in her first ninety days, and the margin came back.",
    pressure: [
      "The system's CFO, Mark Pelkey, wants your margin at break-even by spring.",
      "The system's board is 'reviewing service lines' at your hospital. They didn't invite you.",
    ],
    ranks: [
      ["CEO", "a hospital with forty beds"],
      ["System VP", "three rural hospitals"],
      ["Regional President", "a seat at the system board"],
      ["Policy Voice", "the governor's commission"],
      ["System CEO", "a medical center in Burlington"],
      ["Insurer's Board", "a seat at the insurance company"],
    ],
    intro: [
      "You're Hannah Adler. It's your first day as CEO of the only hospital in a county of 30,000 people. Last year it lost $4 million.",
      "The lights on the wall are the Kingdom: loggers, dairy farmers, retirees, kids on snowmobiles, and every one of the babies you delivered, most of whom are still here.",
      "A regional health system took you over to save you. It watches the operating margin. Your dial runs from keeping every service to keeping the doors open.",
      "Every service you cut is a longer drive for somebody. Sometimes the drive is the difference.",
    ],
    introCta: "Walk the halls ›",
    outLabel: "FALLOUT THIS QUARTER",
    fired: "What would it take for a rural hospital to break even by doing its job?",
    ended: "The hospital is still open. What does it still do?",
    people: [
      ["the ER", "fifteen minutes away", "a longer wait", "transferred to Burlington", "died on the way to Burlington"],
      ["the birth", "delivered at the local hospital", "a long drive in labor", "delivered in the car", "a stillbirth after the long drive"],
      ["the bill", "covered", "a payment plan", "in collections", "the truck was repossessed"],
      ["the nurse's job", "a staff nurse for twenty years", "shifts cut", "laid off", "moved to New Hampshire for work"],
      ["mental health", "a counselor in town", "a six-week wait", "a bed four hours away", "no help came in time"],
      ["getting old", "the local doctor knows them", "a new doctor every visit", "a video visit on a bad connection", "moved away to be near a hospital"],
    ],
    turns: [
      [
        2014,
        "THE HOSPITAL CAN'T MAKE PAYROLL ALONE",
        ["Stay independent one more year", "You made payroll by selling the medical office building. You'll need a new idea by next winter."],
        ["Join the regional health system", "The system's money arrived with its rules. Decisions about your hospital are made in Burlington now."],
      ],
      [
        2016,
        "THE BIRTHING CENTER · 180 BABIES A YEAR, $1.8 MILLION LOST",
        ["Keep it open", "It stayed open and lost $1.8 million again. You delivered two babies yourself that Christmas."],
        ["Close it; send mothers to Lebanon", "It closed. A woman in labor drove an hour and ten minutes to Lebanon in a snowstorm."],
        "✂",
      ],
      [
        2018,
        "PATIENTS OWE THE HOSPITAL $3 MILLION",
        ["Forgive what the poorest owe", "The poorest patients' debts were forgiven. The system called it 'uncollected revenue.'"],
        ["Send it all to collections", "It went to collections. A logger's truck was repossessed over an ER bill."],
      ],
      [
        2020,
        "SURGERIES STOP · THE SYSTEM WANTS LAYOFFS",
        ["Keep every nurse on payroll", "Every nurse kept. The system's CFO called every day."],
        ["Furlough the 'non-essential' staff", "Furloughs. When surgeries came back, half the nurses had left for travel agencies."],
        "✂",
      ],
      [
        2021,
        "TRAVEL NURSES COST THREE TIMES YOUR OWN",
        ["Raise your nurses' pay instead", "You raised pay 20%. It cost more up front and less by spring."],
        ["Staff the floor with travelers", "Travelers staffed the floor at three times the cost and left when their contracts ended."],
        "$",
      ],
      [
        2023,
        "THE REGION'S LAST PSYCH BEDS · MAYA'S TEAMMATE NEEDED ONE",
        ["Keep the beds", "The beds stayed. A fifteen-year-old from Lyndonville had somewhere to go on a Tuesday night in February."],
        ["Convert them to orthopedics", "The beds became orthopedics, which pays. The nearest psych bed is now four hours away."],
        "✂",
      ],
      [
        2025,
        "THE SYSTEM WANTS TO END INPATIENT CARE",
        ["Fight for the beds", "You kept eight beds and lost your seat on the system board. The system keeps asking."],
        ["Become an ER and a clinic", "It's an ER and a clinic now. Anyone who needs to stay the night leaves the Kingdom."],
        "✂",
      ],
    ],
  },
});
