/** Structural checks on the deck of lives: one per state, every seat wired, no duplicate ids. */
import { BACKGROUNDS } from "../src/engine/backgrounds";
import { SEATS } from "../src/engine/seats";

const STATES = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ");

const problems: string[] = [];
const byState = new Map<string, string[]>();
for (const b of BACKGROUNDS) {
  const st = b.location.split(", ").pop()!;
  byState.set(st, [...(byState.get(st) ?? []), b.householdName]);
  for (const s of b.seats) {
    const cfg = SEATS[s];
    if (!cfg) { problems.push(`${b.id}: missing seat ${s}`); continue; }
    if (new Set(cfg.ranks.map((r) => r.title)).size !== cfg.ranks.length) problems.push(`${s}: duplicate rank titles`);
    if (cfg.turns.some((t) => t.o.length !== 2)) problems.push(`${s}: turn without two options`);
  }
}
if (new Set(BACKGROUNDS.map((b) => b.id)).size !== BACKGROUNDS.length) problems.push("duplicate background ids");
for (const st of STATES) if (!byState.has(st)) problems.push(`no life in ${st}`);
for (const [st, names] of byState) {
  if (!STATES.includes(st)) problems.push(`unknown state "${st}" (${names.join(", ")})`);
  if (names.length > 1) problems.push(`${st} has ${names.length} lives: ${names.join(", ")}`);
}

console.log(`${BACKGROUNDS.length} lives across ${byState.size} states`);
if (problems.length) {
  console.log(problems.join("\n"));
  process.exit(1);
}
console.log("deck OK");
