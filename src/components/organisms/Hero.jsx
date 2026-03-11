/**
 * Hero section – composes background, navbar, content, stats.
 */

import { useHeroState } from '../../hooks/useHeroState.js';
import { Navbar } from './Navbar.jsx';
import { HeroBackground } from './HeroBackground.jsx';
import { HeroContentLeft } from './HeroContentLeft.jsx';
import { HeroContentRight } from './HeroContentRight.jsx';
import { StatsBar } from './StatsBar.jsx';
import { searchSellers } from '../../api/endpoints.js';
import '../../styles/hero.css';

export function Hero() {
  const {
    activeCategory,
    setActiveCategory,
    searchValue,
    setSearchValue,
    loaded,
    particles,
  } = useHeroState();

  const handleBrowse = () => {
    searchSellers(searchValue);
    // Could navigate to /sellers?q=...
  };

  return (
    <div style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }} className="w-full">
      <div className={`hero-wrapper ${loaded ? 'loaded' : ''}`.trim()}>
        <HeroBackground particles={particles} loaded={loaded} />
        <Navbar loaded={loaded} />
        <div className="hero-content">
          <HeroContentLeft
            loaded={loaded}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onBrowse={handleBrowse}
          />
          <HeroContentRight loaded={loaded} />
        </div>
        <StatsBar loaded={loaded} />
      </div>
    </div>
  );
}
