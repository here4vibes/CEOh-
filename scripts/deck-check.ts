/** Structural checks on the deck: one life per state, every seat wired, every choice has its own result. */
import { BACKGROUNDS } from "../src/engine/backgrounds";
import { SEATS } from "../src/engine/seats";

const STATES = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ");
const MAX_HEADLINE = 72;
const MAX_OPTION = 56;

const problems: string[] = [];
const byState = new Map<string, string[]>();

for (const b of BACKGROUNDS) {
  const st = b.location.split(", ").pop()!;
  byState.set(st, [...(byState.get(st) ?? []), b.householdName]);
  for (const s of b.seats) if (!SEATS[s]) problems.push(`${b.id}: missing seat ${s}`);
}

for (const cfg of Object.values(SEATS)) {
  if (new Set(cfg.ranks.map((r) => r.title)).size !== cfg.ranks.length) problems.push(`${cfg.id}: duplicate rank titles`);
  if (cfg.lives.length < 6) problems.push(`${cfg.id}: only ${cfg.lives.length} household situations`);
  cfg.turns.forEach((t, i) => {
    const at = `${cfg.id} turn ${i + 1} (${t.y})`;
    if (t.o.length !== 2) problems.push(`${at}: needs exactly two options`);
    if (t.ch.length > MAX_HEADLINE) problems.push(`${at}: headline is ${t.ch.length} chars`);
    for (const o of t.o) {
      if (!o.result) problems.push(`${at}: "${o.name}" has no result line`);
      if (o.name.length > MAX_OPTION) problems.push(`${at}: option "${o.name}" is ${o.name.length} chars`);
    }
  });
}

if (new Set(BACKGROUNDS.map((b) => b.id)).size !== BACKGROUNDS.length) problems.push("duplicate background ids");
for (const st of STATES) if (!byState.has(st)) problems.push(`no life in ${st}`);
for (const [st, names] of byState) {
  if (!STATES.includes(st)) problems.push(`unknown state "${st}" (${names.join(", ")})`);
  if (names.length > 1) problems.push(`${st} has ${names.length} lives: ${names.join(", ")}`);
}

console.log(`${BACKGROUNDS.length} lives across ${byState.size} states, ${Object.keys(SEATS).length} seats`);
if (problems.length) {
  console.log(problems.join("\n"));
  process.exit(1);
}
console.log("deck OK");
