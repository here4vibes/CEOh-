import type { CSSProperties } from "react";
import { N, FIRE } from "../engine/constants";
import type { Character, Household, SeatConfig } from "../engine/types";

interface DossierProps {
  character: Character;
  population: Household[];
  cfg?: SeatConfig;
  avgCap?: number;
  board?: number;
}

export function Dossier({ character, population, cfg, avgCap, board }: DossierProps) {
  const civic = Math.round((population.reduce((s, h) => s + h.civ, 0) / N) * 100);
  const gap = Math.round((1 - population.reduce((s, h) => s + h.econ, 0) / N) * 100);

  return (
    <div className="dossier">
      <div className="dossier-id">
        <div className="dossier-name">J. R. STERLING</div>
        <div className="dossier-tag">THE OUTSIDER</div>
      </div>
      <div className="dossier-stats">
        <Mini label="MONEY" value={`$${Math.round(character.money)}B`} style={{ color: "var(--green)" }} />
        <Mini label="FAME" value={Math.round(character.fame)} style={{ color: "var(--amber)" }} />
        <Mini label="POWER" value={Math.round(character.power)} style={{ color: "#D9544D" }} />
        <div className="dossier-sep" />
        <Mini label="CIVIC" value={civic} style={{ color: "var(--ember)" }} />
        <Mini label="INEQUALITY" value={gap} style={{ color: "var(--air)" }} />
        {cfg && avgCap !== undefined && board !== undefined && (
          <>
            <div className="dossier-sep" />
            <Mini label={cfg.scoreLabel} value={Math.round(avgCap * 100)} big style={{ color: cfg.scoreColor }} />
            <Mini label={cfg.boardLabel ?? "BOARD"} value={board} style={{ color: board < FIRE + 12 ? "var(--air)" : "var(--muted)" }} />
          </>
        )}
      </div>
    </div>
  );
}

function Mini({
  label,
  value,
  big,
  style,
}: {
  label: string;
  value: string | number;
  big?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div className="mini">
      <div className="mini-label">{label}</div>
      <div className={`mini-value${big ? " big" : ""}`} style={style}>
        {value}
      </div>
    </div>
  );
}
