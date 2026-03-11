/**
 * Hero left column – badge, headline, sub, categories, search, CTAs.
 */

import { SearchBox } from '../molecules/SearchBox.jsx';
import { CategoryChips } from '../molecules/CategoryChips.jsx';
import { Button } from '../atoms/Button.jsx';
import { CATEGORIES } from '../../constants/hero.js';

export function HeroContentLeft({
  loaded,
  activeCategory,
  setActiveCategory,
  searchValue,
  setSearchValue,
  onBrowse,
}) {
  return (
    <div className="hero-left">
      <div className="hero-badge" data-loaded={loaded}>
        <div className="badge-dot" />
        Connecting Nigeria to the World
      </div>

      <h1 className="hero-headline" data-loaded={loaded}>
        <span className="headline-green">Shop Nigeria.</span>
        <span className="headline-gold">From Canada.</span>
      </h1>

      <p className="hero-sub" data-loaded={loaded}>
        Browse real sellers across Nigeria, pick what you love — food, fashion, beauty and more —
        and get it delivered straight to your door in Canada.
      </p>

      <CategoryChips
          categories={CATEGORIES}
          activeIndex={activeCategory}
          onSelect={setActiveCategory}
        />

      <SearchBox
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onBrowse={onBrowse}
        />

      <div className="cta-row" data-loaded={loaded}>
        <Button variant="primary">Start Shopping</Button>
        <Button variant="secondary">
          <span>▶</span>
          <span>See How It Works</span>
        </Button>
      </div>
    </div>
  );
}
