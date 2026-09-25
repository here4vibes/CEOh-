import type { BackgroundProfile } from "../engine/types";

interface BackgroundCardProps {
  background: BackgroundProfile;
  onBegin: () => void;
}

export function BackgroundCard({ background, onBegin }: BackgroundCardProps) {
  return (
    <div className="bg-card-shell">
      <div className="bg-card">
        <div className="bg-dealt">YOU'VE BEEN DEALT THIS LIFE</div>

        <div className="bg-household">{background.householdName}</div>
        <div className="bg-location">{background.location}</div>

        <div className="bg-sep" />

        <div className="bg-tagline">{background.tagline}</div>
        <p className="bg-desc">{background.description}</p>

        <div className="bg-perspective-label">FROM HERE</div>
        <p className="bg-perspective">{background.perspective}</p>

        <button className="primary-btn" onClick={onBegin}>
          Begin ›
        </button>
      </div>
    </div>
  );
}
