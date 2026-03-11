/**
 * Testimonials section – featured review card + list + dots. Pause on hover.
 */

import { useTestimonialsState } from '../../hooks/useTestimonialsState.js';
import '../../styles/testimonials.css';

export function TestimonialsSection() {
  const { active, loaded, handleSelect, setPaused, featured, testimonials } = useTestimonialsState();

  return (
    <section className="t-section" aria-labelledby="t-heading">
      <div className="t-bg-1" aria-hidden="true" />
      <div className="t-bg-2" aria-hidden="true" />

      <header className={`t-header ${loaded ? 'vis' : ''}`}>
        <div className="t-label">⭐ Real Reviews</div>
        <h2 id="t-heading" className="t-title">
          What <span>Nigerians in Canada</span>
          <br />
          are saying
        </h2>
        <p className="t-sub">
          Real people, real orders, real Nigerian products delivered to Canada.
        </p>
      </header>

      <div
        className={`t-layout ${loaded ? 'vis' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="t-featured" key={featured.id}>
          <div className="t-glow" />
          <div className="t-quote-mark" aria-hidden="true">"</div>
          <div className="t-category-chip">
            {featured.categoryIcon} {featured.category}
          </div>
          <div className="t-stars" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="t-star">★</span>
            ))}
          </div>
          <blockquote className="t-quote">"{featured.quote}"</blockquote>
          <div className="t-author">
            <div className="t-avatar" aria-hidden="true">{featured.avatar}</div>
            <div>
              <div className="t-author-name">{featured.name}</div>
              <div className="t-author-meta">
                {featured.flag} {featured.location}
                <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
                {featured.date}
              </div>
            </div>
            {featured.verified && <span className="t-verified">✓ Verified</span>}
            <div className="t-order-tag">📦 {featured.order}</div>
          </div>
        </div>

        <div className="t-list" role="list">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              role="button"
              tabIndex={0}
              className={`t-list-item ${active === i ? 'active' : ''}`}
              onClick={() => handleSelect(i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSelect(i)}
            >
              <div className="t-list-top">
                <div className="t-list-avatar">{t.avatar}</div>
                <div>
                  <div className="t-list-name">{t.name}</div>
                  <div className="t-list-loc">
                    {t.flag} {t.location}
                  </div>
                </div>
                <div className="t-list-stars" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="t-list-star">★</span>
                  ))}
                </div>
              </div>
              <p className="t-list-preview">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="t-dots" role="tablist" aria-label="Testimonials">
        {testimonials.map((_, i) => (
          <button
            key={testimonials[i].id}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Review ${i + 1}: ${testimonials[i].name}`}
            className={`t-dot ${active === i ? 'active' : ''}`}
            onClick={() => handleSelect(i)}
          />
        ))}
      </div>
    </section>
  );
}
