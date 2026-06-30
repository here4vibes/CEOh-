import { useGameStore } from "../store/gameStore";
import { Dossier } from "./Dossier";
import { CEO } from "../engine/seats/ceo";
import { litCount, rankIndexForScore } from "../engine/seatRuntime";
import { clamp01 } from "../engine/population";
import { N } from "../engine/constants";

interface HubProps {
  onEnter: () => void;
  onRestart: () => void;
}

export function Hub({ onEnter, onRestart }: HubProps) {
  const character = useGameStore((s) => s.character);
  const population = useGameStore((s) => s.population);
  const ceoRun = useGameStore((s) => s.seatRuns["ceo"]);

  const ceoRankTitle = CEO.ranks[rankIndexForScore(CEO, ceoRun?.score ?? 0)].title;
  const ceoLit = litCount("extract", population);
  const startSupport = clamp01(character.fame * 0.0026 + character.money * 0.0016);
  const floorPct = Math.round((startSupport + 0.11) * 100);

  return (
    <div className="shell">
      <Dossier character={character} population={population} />
      <button className="back-btn" onClick={onRestart}>
        ‹ start over
      </button>

      <div className="hub">
        <div className="hub-tag">THE OUTSIDER DEPARTS THE BOARDROOM</div>
        <h2 className="hub-title">The campaign begins.</h2>
        <p className="lede">
          You leave with <b style={{ color: "var(--gold)" }}>${Math.round(character.money)}B</b> and a reputation
          that opens doors. Of the {N} households you ran the machine through: {ceoLit} still have a stable living.
          They&apos;re the electorate now.
        </p>
        <p className="lede muted small">The ones who lost the most are easiest to move.</p>

        <div className="hub-stats">
          <HubStat label="CEO TITLE" value={ceoRankTitle.split(",")[0]} />
          <HubStat label="STARTING FLOOR" value={`~${floorPct}%`} color="var(--air)" />
          <HubStat label="STABLE HOUSEHOLDS" value={`${ceoLit}/${N}`} color={ceoLit < N * 0.4 ? "var(--air)" : "var(--ember)"} />
        </div>

        <button className="primary-btn gold" onClick={onEnter}>
          Enter the campaign ›
        </button>
      </div>
    </div>
  );
}

function HubStat({ label, value, color = "var(--gold)" }: { label: string; value: string; color?: string }) {
  return (
    <div className="hub-stat">
      <div className="hub-stat-label">{label}</div>
      <div className="hub-stat-value" style={{ color }}>
        {value}
      </div>
    </div>
  );
}
