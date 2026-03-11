/**
 * Small stat card – icon, value, label.
 */

export function MiniCard({ value, label, icon }) {
  return (
    <div className="mini-card">
      <div className="mini-icon">{icon}</div>
      <div className="mini-info">
        <div className="mini-value">{value}</div>
        <div className="mini-label">{label}</div>
      </div>
    </div>
  );
}
