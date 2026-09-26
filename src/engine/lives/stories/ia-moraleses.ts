import { life } from "../build";

export const MORALESES = life({
  id: "ia-meatpacking",
  protagonist: "Ana Morales",
  dossierTag: "PLANT HR MANAGER",
  householdName: "The Moraleses",
  location: "Storm Lake, IA",
  tagline: "HR manager at the pork plant, 33. Born in Michoacán, raised in Storm Lake. Her father has worked the kill floor for 24 years.",
  description:
    "Ana Morales came to Storm Lake at six. Her father, Rigoberto, works the kill floor; her mother cleaned the plant at night for fifteen years. Ana was the first in her family to graduate from college, and the plant hired her to recruit and manage people who look like her parents.",
  perspective:
    "The plant built this town. Laotians, Mexicans, Sudanese, Burmese: everybody came for the plant, and the plant needs every one of us. People who've never been to Storm Lake call it exploitation. Here we call it a paycheck, a house and kids who finish high school.",
  closingAddendum:
    "You were dealt the office above the floor your father works. Your job was to keep the line full, and your family was on it.",
  seat: {
    title: "The HR Manager",
    role: "HR Manager, Pork Plant",
    color: "#BF7F5F",
    scoreLabel: "LINE SPEED",
    dial: ["protect the workers", "fill the line"],
    dialNote: "turnover runs near 100% a year, and the line never stops",
    board: "PLANT MANAGER",
    firedBody:
      "Corporate hired a staffing agency to recruit, house and manage the line. It brings workers from farther away, with less English and fewer questions. Turnover went up. So did the injuries nobody reported.",
    pressure: [
      "Dwight Voss, the plant manager, says second shift ran twelve people short again.",
      "Corporate is piloting a staffing agency at the Nebraska plant. Voss says they're 'watching Storm Lake closely.'",
    ],
    ranks: [
      ["HR Manager", "an office above the floor"],
      ["HR Director", "three plants"],
      ["Regional VP", "the whole Midwest"],
      ["Corporate VP", "workforce strategy"],
      ["Industry Spokesperson", "Congress hears from you"],
      ["Consultant", "other plants pay for your playbook"],
    ],
    intro: [
      "You're Ana Morales. From your office window you can see the kill floor, where your father has stood at the same station since 1999.",
      "The lights on the wall are the plant and the town it built: churches in five languages, the Mexican bakery, the Sudanese restaurant, the high school that won state in soccer, and a line that processes 18,000 hogs a day.",
      "The plant manager watches line speed. Your dial runs from protecting the workers to filling the line.",
      "Your father's hands don't close all the way anymore. He says it's fine.",
    ],
    introCta: "Walk the floor ›",
    outLabel: "FALLOUT THIS SHIFT",
    fired: "What would it take for 18,000 hogs a day not to cost somebody's hands?",
    ended: "The line never stopped. How are your father's hands?",
    people: [
      ["the hands", "healthy", "sore at night", "carpal tunnel", "can't close them anymore"],
      ["the job", "fifteen years at the plant", "a new hire on the line", "hurt and sent to the nurse", "let go after the injury"],
      ["the family", "together in Storm Lake", "a cousin picked up in a raid", "a parent deported", "the kids live with an aunt now"],
      ["the housing", "a house on the east side", "an apartment, two families", "a trailer with six men", "no place to live"],
      ["the pandemic", "never got sick", "sick for two weeks", "sick and worked anyway", "died in the outbreak"],
      ["the union", "a union card", "went to the meeting", "afraid to sign", "fired for organizing"],
    ],
    turns: [
      [
        2016,
        "INJURIES ARE UP · THE OSHA LOG IS DUE",
        ["Log every one", "Every injury logged. Storm Lake's safety record looked like the worst in the company, because it was honest."],
        ["Send them to the plant nurse first", "Ibuprofen, a wrist brace, back on the line. The log came out clean. The wrists didn't."],
      ],
      [
        2017,
        "AFTER THE HURRICANE, RECRUITERS BRING WORKERS FROM PUERTO RICO",
        ["Arrange real housing before they land", "Thirty-two new workers, thirty-two beds and a welcome dinner at St. Mary's. Twenty-nine stayed past the first month."],
        ["Let them find their own — it's a free country", "Six men shared a two-bedroom trailer at $500 each. Half were gone by Christmas."],
      ],
      [
        2019,
        "WASHINGTON LETS PORK LINES RUN FASTER",
        ["Keep the old speed another year", "The line kept its speed. Corporate asked every week why Storm Lake was slower than Nebraska."],
        ["Run at the new speed", "The line sped up. Injuries on the cut floor rose by a fifth."],
        "⚙",
      ],
      [
        2019,
        "ICE RAIDS SEVEN PLANTS IN MISSISSIPPI · YOUR WORKERS ARE SCARED",
        ["Host a know-your-rights night with lawyers", "Two hundred people came to the church hall. Corporate asked whose side HR is on."],
        ["Tell corporate you'll cooperate fully", "Three families on your line stopped coming to work that week. Nobody asked where they went."],
      ],
      [
        2020,
        "COVID ON THE CUT FLOOR · WASHINGTON SAYS STAY OPEN",
        ["Push to close for two weeks", "The plant closed for twelve days. Hogs backed up on farms across Iowa, and the farmers blamed you by name."],
        ["Stay open — the food supply depends on it", "The plant stayed open. Your father got sick in April. He was one of the lucky ones."],
      ],
      [
        2022,
        "YOUR FATHER CAN'T CLOSE HIS HANDS · HE WON'T FILE A CLAIM",
        ["File the claim for him, on the record", "The claim went through. Your father got surgery and workers' comp. Corporate asked why HR filed against its own plant."],
        ["Move him to light duty, off the record", "He's on the packing line now, same pay, no claim. Eleven men watched how you handled it, and none of them filed either."],
      ],
      [
        2023,
        "THE CLEANING CONTRACTOR'S NIGHT CREW LOOKS YOUNG",
        ["Check every ID and call the state", "Four of the night crew were thirteen to sixteen. The contractor was barred, and the plant needed a new cleaning crew by Monday."],
        ["It's the contractor's crew, not yours", "A fifteen-year-old on the night crew burned his arms with caustic cleaner in February. The contractor paid a fine."],
      ],
    ],
  },
});
