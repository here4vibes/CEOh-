import { useEffect, useState } from "react";
import { fetchBackgroundStats, type BackgroundStats } from "../services/telemetry";
import type { BackgroundProfile } from "../engine/types";
import { SEATS } from "../engine/seats";

interface ResultScreenProps {
  background: BackgroundProfile;
  climbScore: number;
  stewardScore: number;
  litCount: number;
  electionWon: boolean;
  ceoBoardFired: boolean;
  politicianFired: boolean;
  onPlayAgain: () => void;
}

export function ResultScreen({
  background,
  climbScore,
  stewardScore,
  litCount,
  electionWon,
  ceoBoardFired,
  politicianFired,
  onPlayAgain,
}: ResultScreenProps) {
  const [stats, setStats] = useState<BackgroundStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBackgroundStats(background.id)
      .then(setStats)
      .finally(() => setLoading(false));
  }, [background.id]);

  const hasElection = background.seats.includes("politician");
  const firstSeat = SEATS[background.seats[0]];
  const showStats = !loading && stats !== null && stats.total_runs >= 5;

  return (
    <div className="shell result-screen">
      <div className="result-header">
        <div className="result-label">END OF RUN</div>
        <div className="result-household">{background.householdName}</div>
        <div className="result-location">{background.location}</div>
      </div>

      <div className="result-scores">
        <ResultStat label="CLIMB" value={climbScore} color="var(--gold)" note="raw power accumulated" />
        <ResultStat label="STEWARD" value={stewardScore} color="var(--air)" note="civic preserved while surviving" />
        <ResultStat label="HOUSEHOLDS LIT" value={`${litCount}/112`} color={litCount < 40 ? "#D9544D" : "var(--ember)"} />
      </div>

      <div className="result-outcome">
        {hasElection
          ? electionWon
            ? "The election was won."
            : politicianFired
              ? "The party withdrew its support."
              : "The race was called before it was over."
          : ceoBoardFired
            ? `${(firstSeat.firedTitle ?? "Replaced").toLowerCase().replace(/^./, (c) => c.toUpperCase())}. Someone else finished what you wouldn't.`
            : "You made it to the end without being replaced."}
        {hasElection && ceoBoardFired && " The board replaced you in the boardroom."}
      </div>

      <div className="result-addendum">{background.closingAddendum}</div>

      {!loading && !showStats && (
        <div className="result-peers-empty">
          Not enough data yet from others dealt this life. You may be among the first.
        </div>
      )}

      {showStats && (
        <div className="result-peers">
          <div className="result-peers-label">
            OTHERS DEALT {background.householdName.toUpperCase()}' LIFE
            <span className="result-peers-count"> · {stats.total_runs} runs</span>
          </div>
          <div className="result-peer-stats">
            {hasElection && (
              <PeerStat
                label="won the election"
                value={`${stats.election_win_pct}%`}
                highlight={electionWon}
              />
            )}
            <PeerStat
              label="avg Climb"
              value={String(stats.avg_climb)}
              highlight={climbScore > stats.avg_climb}
            />
            <PeerStat
              label="avg Steward"
              value={String(stats.avg_steward)}
              highlight={stewardScore > stats.avg_steward}
            />
            <PeerStat
              label="avg households lit"
              value={`${stats.avg_lit}/112`}
              highlight={litCount > stats.avg_lit}
            />
            <PeerStat
              label="were replaced"
              value={`${stats.ceo_fire_pct}%`}
              highlight={!ceoBoardFired}
            />
          </div>
        </div>
      )}

      <button className="primary-btn" style={{ marginTop: "28px" }} onClick={onPlayAgain}>
        Play a different life ›
      </button>
    </div>
  );
}

function ResultStat({
  label,
  value,
  color,
  note,
}: {
  label: string;
  value: string | number;
  color: string;
  note?: string;
}) {
  return (
    <div className="result-stat">
      <div className="result-stat-label">{label}</div>
      <div className="result-stat-value" style={{ color }}>
        {value}
      </div>
      {note && <div className="result-stat-note">{note}</div>}
    </div>
  );
}

function PeerStat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight: boolean;
}) {
  return (
    <div className={`peer-stat${highlight ? " peer-stat-above" : ""}`}>
      <span className="peer-stat-value">{value}</span>
      <span className="peer-stat-label"> {label}</span>
    </div>
  );
}
