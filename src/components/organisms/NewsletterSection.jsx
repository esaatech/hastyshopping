/**
 * Newsletter section – email signup + perks + success state.
 */

import { useNewsletterState } from '../../hooks/useNewsletterState.js';
import { NEWSLETTER_PERKS } from '../../constants/newsletter.js';
import '../../styles/newsletter.css';

export function NewsletterSection() {
  const { email, setEmail, submitted, loaded, handleSubmit } = useNewsletterState();

  return (
    <section className="nl-section" aria-labelledby="nl-heading">
      <div className="nl-bg" aria-hidden="true" />
      <div className="nl-grid" aria-hidden="true" />

      <div className={`nl-inner ${loaded ? 'vis' : ''}`}>
        <div className="nl-icon" aria-hidden="true">🛍️</div>
        <div className="nl-label">📬 Stay in the Loop</div>
        <h2 id="nl-heading" className="nl-title">
          Get <span>deals & new sellers</span>
          <br />
          delivered to your inbox
        </h2>
        <p className="nl-sub">
          Be the first to know when new Nigerian sellers join, when flash sales go live, and when we launch new product categories.
        </p>

        <div className="nl-perks">
          {NEWSLETTER_PERKS.map((p) => (
            <div key={p} className="nl-perk">
              <div className="nl-perk-dot" />
              {p}
            </div>
          ))}
        </div>

        {!submitted ? (
          <>
            <form
              className="nl-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="nl-input-wrap">
                <span className="nl-input-icon" aria-hidden="true">✉️</span>
                <input
                  className="nl-input"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  aria-label="Email address"
                />
              </div>
              <button type="submit" className="nl-btn">
                Subscribe →
              </button>
            </form>
            <p className="nl-disclaimer">
              We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="nl-success">
            <div className="nl-success-icon" aria-hidden="true">✅</div>
            <div>
              <div className="nl-success-text">You're on the list!</div>
              <div className="nl-success-sub">
                We'll send you the best Nigerian deals straight to your inbox.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
