/**
 * Footer – brand, link columns, categories strip, trust badges, bottom bar.
 */

import { useFooterState } from '../../hooks/useFooterState.js';
import {
  FOOTER_LINKS,
  SOCIALS,
  FOOTER_CATEGORIES,
  TRUST_BADGES,
  FOOTER_BOTTOM_LINKS,
} from '../../constants/footer.js';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import '../../styles/footer.css';

const SOCIAL_ICONS = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
};

export function Footer() {
  const { loaded } = useFooterState();

  return (
    <footer className="footer">
      <div className="footer-bg" aria-hidden="true" />

      <div className={`footer-top ${loaded ? 'vis' : ''}`}>
        <div className="footer-brand">
          <div className="footer-logo">Hasty<span>Shopping</span></div>
          <p className="footer-tagline">
            The marketplace connecting Nigerians in Canada to authentic products from home.
          </p>
          <div className="footer-flag-row">
            <span className="footer-flag">🇳🇬</span>
            <span>Nigeria</span>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>→</span>
            <span className="footer-flag">🇨🇦</span>
            <span>Canada</span>
          </div>
          <nav className="footer-socials" aria-label="Social links">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.type];
              return (
                <a key={s.type} className="social-btn" href="#" title={s.label} aria-label={s.label}>
                  {Icon ? <Icon className="social-btn-icon" aria-hidden /> : null}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="footer-links">
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <div className="footer-col-title">{col.heading}</div>
              {col.links.map((link) => (
                <a key={link} className="footer-link" href="#">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={`footer-cats ${loaded ? 'vis' : ''}`}>
        <div className="footer-cats-label">Browse by Category</div>
        <div className="footer-cats-row">
          {FOOTER_CATEGORIES.map((c) => (
            <span key={c} className="cat-chip">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className={`footer-trust ${loaded ? 'vis' : ''}`}>
        {TRUST_BADGES.map((t) => (
          <div key={t.text} className="trust-chip">
            <span className="trust-chip-icon">{t.icon}</span>
            <span>{t.text}</span>
          </div>
        ))}
      </div>

      <div className={`footer-bottom ${loaded ? 'vis' : ''}`}>
        <p className="footer-copy">
          © 2025 <strong>HastyShopping</strong>. All rights reserved.
        </p>
        <nav className="footer-bottom-links" aria-label="Legal and site links">
          {FOOTER_BOTTOM_LINKS.map((l) => (
            <a key={l} className="footer-bottom-link" href="#">
              {l}
            </a>
          ))}
        </nav>
        <div className="footer-made">
          Made with <span>♥</span> for Nigerians abroad
        </div>
      </div>
    </footer>
  );
}
