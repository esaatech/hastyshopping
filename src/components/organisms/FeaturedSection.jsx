/**
 * Featured section – second section below hero. Full featured seller card + mini stats + CTA.
 */

import { SellerCard } from '../molecules/SellerCard.jsx';
import { MiniCard } from '../molecules/MiniCard.jsx';
import { Button } from '../atoms/Button.jsx';
import { FEATURED_SELLER, MINI_STATS } from '../../constants/hero.js';
import '../../styles/featured.css';

export function FeaturedSection() {
  return (
    <section className="featured-section" aria-labelledby="featured-heading">
      <div className="featured-inner">
        <header className="featured-header">
          <h2 id="featured-heading" className="featured-title">
            Featured Seller
          </h2>
          <p className="featured-subtitle">
            Shop from verified Nigerian sellers. Quality products, shipped to you.
          </p>
        </header>

        <div className="featured-content">
          <div className="featured-card-wrap">
            <SellerCard seller={FEATURED_SELLER} />
          </div>
          <div className="featured-mini-stats">
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

        <footer className="featured-footer">
          <Button variant="primary" className="featured-cta">
            Browse all sellers →
          </Button>
        </footer>
      </div>
    </section>
  );
}
