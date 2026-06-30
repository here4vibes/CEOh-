import { useMemo, useState } from "react";
import { useGameStore } from "../store/gameStore";
import { buildMeta } from "../engine/meta";
import { capOf, clamp01, litOf, tierOf } from "../engine/population";
import { avgCap, litCount, rankIndexForScore } from "../engine/seatRuntime";
import { N, THRESH } from "../engine/constants";
import { hexRgb, mix, rgbToCss, WALL_DARK } from "../lib/color";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { Dossier } from "./Dossier";
import type { PresetOption, RankTier, SeatConfig, SeatRunState } from "../engine/types";

interface ConsequenceView {
  stat: string;
  statGain: number;
  scoreLabel: string;
  capDelta: number;
  civDelta: number;
  gapDelta: number;
  died: { name: string; line: string }[];
  diedIdx: number[];
  type: PresetOption["type"];
  label: string;
  resLine: string;
}

type Phase = "intro" | "desk" | "airing" | "promoted" | "aired" | "fired" | "ended";

const FRESH_RUN: SeatRunState = { turn: 0, score: 0, board: 55, fired: false, ended: false };

interface SeatProps {
  cfg: SeatConfig;
}

export function Seat({ cfg }: SeatProps) {
  const reduced = usePrefersReducedMotion();
  const population = useGameStore((s) => s.population);
  const character = useGameStore((s) => s.character);
  const run = useGameStore((s) => s.seatRuns[cfg.id]) ?? FRESH_RUN;
  const resolveMove = useGameStore((s) => s.resolveMove);
  const advance = useGameStore((s) => s.advance);
  const newGame = useGameStore((s) => s.newGame);

  const meta = useMemo(() => buildMeta(cfg.lives), [cfg]);
  const seatRgb = useMemo(() => hexRgb(cfg.scoreColor), [cfg]);
  // Visual stagger only — never affects sim state, so plain Math.random is fine here.
  const delay = useMemo(() => Array.from({ length: N }, () => Math.random() * 700), []);

  const [phase, setPhase] = useState<Phase>(cfg.mode === "vote" ? "intro" : "desk");
  const [lead, setLead] = useState<PresetOption | null>(null);
  const [dial, setDial] = useState(50);
  const [focus, setFocus] = useState<number | null>(null);
  const [cons, setCons] = useState<ConsequenceView | null>(null);
  const [promo, setPromo] = useState<RankTier | null>(null);

  const data = cfg.turns[run.turn];
  const rankIndex = rankIndexForScore(cfg, run.score);
  const nextThreshold = rankIndex + 1 < cfg.ranks.length ? THRESH[rankIndex + 1] : null;
  const progress =
    nextThreshold != null
      ? clamp01((run.score - THRESH[rankIndex]) / (nextThreshold - THRESH[rankIndex]))
      : 1;

  const capacity = avgCap(cfg.mode, population);
  const lit = litCount(cfg.mode, population);
  const startSupport = clamp01(character.fame * 0.0026 + character.money * 0.0016);

  function pickPreset(option: PresetOption) {
    setLead(option);
  }

  function handleAir() {
    if (!lead) return;
    setPhase("airing");
    const beforeRank = rankIndex;
    const finish = () => {
      const result = resolveMove(cfg.id, lead, dial);
      const newRun = useGameStore.getState().seatRuns[cfg.id]!;
      const afterRank = rankIndexForScore(cfg, newRun.score);
      const died = result.deaths.map((d) => ({ name: meta[d.index].name, line: meta[d.index].life[1][3] }));
      setCons({
        stat: cfg.stat,
        statGain: result.statGain,
        scoreLabel: cfg.scoreLabel,
        capDelta: result.capDeltaPct,
        civDelta: result.civDeltaPct,
        gapDelta: result.gapDeltaPct,
        died,
        diedIdx: result.deaths.map((d) => d.index),
        type: lead.type,
        label: lead.name,
        resLine: lead.type === "capture" ? cfg.resultCapture : cfg.resultProtect,
      });
      if (afterRank > beforeRank) {
        setPromo(cfg.ranks[afterRank]);
        setPhase("promoted");
      } else {
        setPhase("aired");
      }
    };
    if (reduced) finish();
    else setTimeout(finish, 1150);
  }

  function handleAdvance() {
    const nextRun = advance(cfg.id);
    if (nextRun.fired) {
      setPhase("fired");
    } else if (nextRun.ended) {
      setPhase("ended");
    } else {
      setLead(null);
      setCons(null);
      setPhase("desk");
    }
  }

  function handleRestart() {
    newGame();
    setPhase(cfg.mode === "vote" ? "intro" : "desk");
    setLead(null);
    setDial(50);
    setFocus(null);
    setCons(null);
    setPromo(null);
  }

  const focused = focus != null ? { ...population[focus], ...meta[focus] } : null;
  const focusedLit = focused ? litOf(cfg.mode, focused) : 0;
  const focusedTier = tierOf(focusedLit);

  return (
    <div className="shell">
      <Dossier character={character} population={population} cfg={cfg} avgCap={capacity} board={run.board} />
      <button className="back-btn" onClick={handleRestart}>
        ‹ begin again
      </button>

      <div className="climb">
        <div className="climb-head">
          <div>
            <div className="eyebrow">{cfg.role.toUpperCase()} · YOUR CLIMB</div>
            <div className="rank-title">{cfg.ranks[rankIndex].title}</div>
          </div>
          <div className="climb-next">
            {nextThreshold != null ? (
              <>
                next: <span className="climb-next-name">{cfg.ranks[rankIndex + 1].title}</span>
              </>
            ) : (
              "top of the building"
            )}
          </div>
        </div>
        <div className="ladder">
          {cfg.ranks.map((r, i) => {
            const cur = i === rankIndex;
            const reached = i <= rankIndex;
            return (
              <div className="ladder-step" key={r.title}>
                {i > 0 && <div className={`ladder-line${reached ? " reached" : ""}`} />}
                <div className="ladder-node">
                  <div className={`ladder-dot${cur ? " current" : reached ? " reached" : ""}`} />
                  <span className={`ladder-label${cur ? " current" : ""}`}>{r.title.split(",")[0]}</span>
                </div>
              </div>
            );
          })}
        </div>
        {nextThreshold != null && (
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress * 100}%` }} />
          </div>
        )}
      </div>

      <div className="wall-wrap">
        <div className="wall-head">
          <span className="wall-count">THE PEOPLE · {N}</span>
          <span className="wall-lit">
            <span style={{ color: cfg.litColor }}>●</span> {cfg.litLabel}
          </span>
        </div>
        <div className="wall-grid">
          {population.map((h, i) => {
            const cv = capOf(cfg.mode, h);
            const lv = litOf(cfg.mode, h);
            const justDied = phase === "aired" && cons?.diedIdx.includes(i);
            return (
              <div
                key={i}
                className={`wall-cell${justDied ? " just-died" : focus === i ? " focused" : ""}`}
                onMouseEnter={() => setFocus(i)}
                onClick={() => setFocus(i)}
                style={{
                  background: rgbToCss(mix(WALL_DARK, seatRgb, cv)),
                  boxShadow: cv > 0.55 ? `0 0 ${Math.round(cv * 9)}px ${cfg.scoreColor}66` : "none",
                  transitionDelay: reduced ? "0ms" : `${delay[i]}ms`,
                }}
              >
                <span
                  className="wall-dot"
                  style={{ background: cfg.litColor, opacity: lv, transform: `scale(${0.5 + lv})` }}
                />
              </div>
            );
          })}
        </div>
        <div className="wall-focus">
          {focused ? (
            <>
              <span className="focus-name" style={{ color: focusedTier === 3 ? "var(--muted)" : "var(--phosphor)" }}>
                {focused.name}
              </span>
              <span className="focus-sep">·</span>
              <span
                className="focus-line"
                style={{
                  color: focusedTier === 3 ? "var(--air)" : focusedTier === 2 ? "var(--muted)" : cfg.litColor,
                }}
              >
                {focused.life[1][focusedTier]}
              </span>
              {cfg.mode === "vote" && focused.vote > 0.5 && (
                <span className="focus-votes" style={{ color: cfg.scoreColor }}>
                  · votes for you
                </span>
              )}
            </>
          ) : (
            <span className="focus-hint">hover one to meet them</span>
          )}
        </div>
        <div className="chyron">
          <span className="chyron-tag">{data && data.y > 1900 ? data.y : cfg.mode === "vote" ? `STEP ${run.turn + 1}` : "—"}</span>
          <span className="chyron-text">{data ? data.ch : ""}</span>
        </div>
      </div>

      <div className="desk">
        {phase === "intro" && (
          <div className="desk-full">
            <p className="lede">
              You arrive with <b style={{ color: "var(--gold)" }}>${Math.round(character.money)}B</b> and{" "}
              <b style={{ color: "var(--amber)" }}>{Math.round(character.fame)}</b> name recognition. Before you say
              a word, that — and a public already stretched thin and checked out — puts you near{" "}
              <b style={{ color: cfg.scoreColor }}>{Math.round(startSupport * 100 + 11)}%</b>.
            </p>
            <p className="lede muted small">
              The ones easiest to win are the ones you hurt. Grievance moves the precarious fastest.
            </p>
            <button className="primary-btn" style={{ borderColor: cfg.scoreColor, color: cfg.scoreColor }} onClick={() => setPhase("desk")}>
              Descend the escalator ›
            </button>
          </div>
        )}

        {(phase === "desk" || phase === "airing") && (
          <>
            <div className="bay">
              <div className="bay-label" style={{ color: cfg.scoreColor }}>
                01 · THE CALL
              </div>
              <div className="card-row">
                {data.o.map((o) => {
                  const sel = lead?.id === o.id;
                  return (
                    <button
                      key={o.id}
                      onClick={() => pickPreset(o)}
                      className={`gcard${sel ? " selected" : ""}`}
                      style={sel ? { borderColor: cfg.scoreColor, boxShadow: `0 0 0 1px ${cfg.scoreColor}` } : undefined}
                    >
                      <span className="gcard-glyph" style={{ color: o.type === "capture" ? cfg.scoreColor : cfg.litColor }}>
                        {o.glyph}
                      </span>
                      <span className="gcard-name">{o.name}</span>
                      <span className="gcard-pull">
                        {[0, 1, 2, 3, 4].map((k) => (
                          <i
                            key={k}
                            className="pull-tick"
                            style={{
                              background:
                                k < Math.round(o.pull * 5) ? (o.type === "capture" ? cfg.scoreColor : cfg.litColor) : "#2a343d",
                            }}
                          />
                        ))}
                        <span className="pull-label">pull</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="bay">
              <div className="bay-label" style={{ color: cfg.scoreColor }}>
                02 · {cfg.dial[0].toUpperCase()} → {cfg.dial[1].toUpperCase()}
              </div>
              <div className="dial-row">
                <span className="dial-end">{cfg.dial[0]}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={dial}
                  onChange={(e) => setDial(+e.target.value)}
                  aria-label="dial"
                  style={{ flex: 1, accentColor: cfg.scoreColor }}
                />
                <span className="dial-end" style={{ color: cfg.scoreColor }}>
                  {cfg.dial[1]}
                </span>
              </div>
              <div className="dial-note">{cfg.dialNote}</div>
            </div>
            <div className="bay lever-bay">
              <div className="bay-label" style={{ color: cfg.scoreColor }}>
                03
              </div>
              <button
                disabled={!lead || phase === "airing"}
                onClick={handleAir}
                className="lever"
                style={{ borderColor: cfg.scoreColor, opacity: lead && phase !== "airing" ? 1 : 0.4 }}
              >
                {cfg.mode === "vote" ? "GO" : "AIR IT"}
              </button>
              {lead && <div className="lever-hint">{lead.name}</div>}
            </div>
          </>
        )}

        {phase === "promoted" && promo && (
          <div className="desk-full promo">
            <div className="promo-tag">{cfg.mode === "vote" ? "YOU WIN" : "PROMOTED"}</div>
            <div className="promo-title">{promo.title}</div>
            <p className="lede">The perk: {promo.perk}.</p>
            <p className="promo-lit">
              {lit}/{N} {cfg.litLabel}.
            </p>
            <button className="primary-btn gold" onClick={() => setPhase("aired")}>
              Carry on ›
            </button>
          </div>
        )}

        {phase === "aired" && cons && (
          <div className="desk-full">
            <div className="cons-head">WHAT YOU JUST DID — &quot;{cons.label}&quot;</div>
            <div className="delta-row">
              <Delta label={cons.scoreLabel} value={`+${cons.capDelta}`} color={cfg.scoreColor} big />
              <Delta label={cons.stat.toUpperCase()} value={`+${cons.statGain}`} color="var(--gold)" big />
              <Delta label="THE GAP" value={`${cons.gapDelta >= 0 ? "+" : ""}${cons.gapDelta}`} color="var(--air)" />
              <Delta label="CIVIC" value={`${cons.civDelta >= 0 ? "+" : ""}${cons.civDelta}`} color="var(--ember)" />
              <Delta label="WENT DARK" value={`${cons.died.length}`} color="var(--air)" />
            </div>
            <p className="lede">{cons.resLine}</p>
            {cons.died.length > 0 && (
              <div className="died-list">
                <div className="died-label">{cfg.outLabel}</div>
                {cons.died.slice(0, 4).map((e, k) => (
                  <div className="died-line" key={k}>
                    <span className="died-name">{e.name}</span> — now {e.line}.
                  </div>
                ))}
                {cons.died.length > 4 && <div className="died-more">+{cons.died.length - 4} more.</div>}
              </div>
            )}
            <button className="primary-btn" onClick={handleAdvance}>
              {run.turn + 1 >= cfg.turns.length ? "Close the books ›" : "Next ›"}
            </button>
          </div>
        )}

        {phase === "fired" && (
          <div className="desk-full">
            <div className="fired-title">REPLACED</div>
            <p className="lede">
              Your restraint cost the board its confidence. They brought in someone who wouldn&apos;t hesitate, and
              it played out without you — faster. You left as {cfg.ranks[rankIndex].title}.
            </p>
            <button className="primary-btn" onClick={() => setPhase("ended")}>
              See the record ›
            </button>
          </div>
        )}

        {phase === "ended" && (
          <div className="desk-full">
            <div className="record-title" style={{ color: cfg.scoreColor }}>
              THE RECORD
            </div>
            <div className="record-stats">
              <Stat n={`${Math.round(capacity * 100)}`} l={cfg.scoreLabel.toLowerCase()} c={cfg.scoreColor} />
              <Stat n={`${lit}/${N}`} l={cfg.litLabel} c={lit < N * 0.3 ? "var(--air)" : cfg.litColor} />
              <Stat n={cfg.ranks[rankIndex].title.split(",")[0]} l="final title" c="var(--gold)" small />
            </div>
            <p className="lede muted small">By every number they gave you, an exceptional run.</p>
            <button className="primary-btn gold" onClick={handleRestart}>
              Begin again ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Delta({ label, value, color, big }: { label: string; value: string; color: string; big?: boolean }) {
  return (
    <div className="delta">
      <div className="delta-label">{label}</div>
      <div className={`delta-value${big ? " big" : ""}`} style={{ color }}>
        {value}
      </div>
    </div>
  );
}

function Stat({ n, l, c, small }: { n: string; l: string; c: string; small?: boolean }) {
  return (
    <div className="stat">
      <div className={`stat-n${small ? " small" : ""}`} style={{ color: c }}>
        {n}
      </div>
      <div className="stat-l">{l}</div>
    </div>
  );
}
