/**
 * Seller login page – email/password, role tabs (Buyer/Seller), left panel.
 * Opened from footer "Seller Dashboard". Links to /seller/signup for new sellers.
 */

import { Link } from 'react-router-dom';
import { useSellerLoginState } from '../../hooks/useSellerLoginState.js';
import { SELLER_LOGIN_STATS, SELLER_LOGIN_CARDS } from '../../constants/sellerLogin.js';
import { AuthField } from '../molecules/AuthField.jsx';
import '../../styles/seller-login.css';

export function SellerLoginPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    loading,
    error,
    loaded,
    handleLogin,
  } = useSellerLoginState();

  return (
    <div className="sl-page" style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }} aria-label="Seller login">
      <div className={`sl-left ${loaded ? 'vis' : ''}`}>
        <div className="sl-glow-1" />
        <div className="sl-glow-2" />
        <div className="sl-grid" />

        <div className="sl-logo-row">
          <Link to="/" className="sl-logo">
            Hasty<span>Shopping</span>
          </Link>
          <div className="seller-badge">🏪 Seller Portal</div>
        </div>

        <div className="sl-left-mid">
          <h2 className="sl-headline">
            Your store.
            <br />
            Your rules.
            <br />
            <span>Canada awaits.</span>
          </h2>
          <p className="sl-sub">
            Log back into your seller dashboard, manage orders, update inventory and track your sales to Canada in real time.
          </p>

          <div className="sl-seller-cards">
            {SELLER_LOGIN_CARDS.map((s, i) => (
              <div
                key={s.name}
                className={`sl-seller-card ${loaded ? 'vis' : ''}`}
                style={{ transitionDelay: `${0.4 + i * 0.15}s` }}
              >
                <div className="sl-seller-avatar">{s.avatar}</div>
                <div>
                  <div className="sl-seller-name">{s.name}</div>
                  <div className="sl-seller-meta">📍 {s.loc}, Nigeria</div>
                </div>
                <div className="sl-seller-sales">
                  <div className="sl-seller-amt">{s.sales}</div>
                  <div className="sl-seller-bdg">{s.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sl-stats-row">
          {SELLER_LOGIN_STATS.map((s) => (
            <div key={s.lbl} className="sl-stat">
              <div className="sl-stat-val">{s.val}</div>
              <div className="sl-stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`sl-right ${loaded ? 'vis' : ''}`}>
        <div className="sl-form-wrap">
          <div className="role-tabs">
            <Link to="/login" className="role-tab active-buyer">
              🛍️ Buyer Login
            </Link>
            <span className="role-tab active-seller">🏪 Seller Login</span>
          </div>

          <div className="form-header">
            <h1 className="form-title">Welcome back, seller 👋</h1>
            <p className="form-sub">
              New seller? <Link to="/seller/signup">Apply to join →</Link>
            </p>
          </div>

          <AuthField label="Email Address" icon="✉️">
            <input
              className="field-input"
              type="email"
              placeholder="store@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </AuthField>

          <AuthField
            label="Password"
            icon="🔒"
            rightElement={
              <button
                type="button"
                className="toggle-pw"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            }
          >
            <input
              className="field-input"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              autoComplete="current-password"
            />
          </AuthField>

          <div className="forgot-row">
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          {error && (
            <div className="error-msg" role="alert">
              <span>⚠️</span>
              {error}
            </div>
          )}

          <button
            type="button"
            className="submit-btn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner" />
                Signing in...
              </>
            ) : (
              'Go to Seller Dashboard →'
            )}
          </button>

          <Link to="/seller/signup" className="new-seller-cta">
            <div className="cta-icon">🚀</div>
            <div>
              <div className="cta-text">New seller? Apply to join</div>
              <div className="cta-sub">Start selling to Nigerians in Canada today</div>
            </div>
            <span className="cta-arrow">→</span>
          </Link>

          <p className="terms">
            By signing in, you agree to our <a href="#">Seller Terms</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
