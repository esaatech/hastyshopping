/**
 * Floating product bubble – emoji + label, positioned absolutely.
 */

export function FloatingItem({ item, loaded, index }) {
  const { emoji, label, top, bottom, left, right, delay = 0 } = item;
  return (
    <div
      className="floating-item"
      style={{
        top,
        bottom,
        left,
        right,
        animationDuration: `${5 + index}s`,
        animationDelay: `${delay}s`,
        opacity: loaded ? 1 : 0,
        transition: `opacity 1s ease ${0.8 + index * 0.15}s`,
      }}
    >
      <div className="float-bubble">
        <span className="float-emoji">{emoji}</span>
        <span className="float-label">{label}</span>
      </div>
    </div>
  );
}
