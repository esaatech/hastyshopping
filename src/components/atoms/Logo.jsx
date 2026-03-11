/**
 * Logo text – "Hasty" + "Shopping" with optional badge.
 */

export function Logo({ badge = '🇳🇬 LIVE', showBadge = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span className="logo">
        Hasty<span>Shopping</span>
      </span>
      {showBadge && <span className="logo-badge">{badge}</span>}
    </div>
  );
}
