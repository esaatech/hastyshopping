/**
 * Hero background – mesh, grid, orbs, shine line, particles, floating items.
 */

import { FloatingItem } from '../molecules/FloatingItem.jsx';
import { FLOATING_ITEMS } from '../../constants/hero.js';

export function HeroBackground({ particles = [], loaded }) {
  return (
    <>
      <div className="bg-mesh" />
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="shine-line" />

      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            '--op': p.opacity,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {FLOATING_ITEMS.map((item, i) => (
        <FloatingItem key={i} item={item} loaded={loaded} index={i} />
      ))}
    </>
  );
}
