/**
 * Bottom stats bar – verified sellers, orders, countries.
 */

import { STATS } from '../../constants/hero.js';

export function StatsBar({ stats = STATS, loaded }) {
  return (
    <div className="stats-bar" data-loaded={loaded}>
      {stats.map((stat) => (
        <div key={stat.label} className="stat-item">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
