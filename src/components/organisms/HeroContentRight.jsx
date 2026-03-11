/**
 * Hero right column – featured seller card + mini stats.
 */

import { SellerCard } from '../molecules/SellerCard.jsx';
import { MiniCard } from '../molecules/MiniCard.jsx';
import { FEATURED_SELLER, MINI_STATS } from '../../constants/hero.js';

export function HeroContentRight({ loaded }) {
  return (
    <div className="hero-right" data-loaded={loaded}>
      <SellerCard seller={FEATURED_SELLER} />
      <div className="hero-mini-stats">
        {MINI_STATS.map((stat) => (
          <MiniCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
}
