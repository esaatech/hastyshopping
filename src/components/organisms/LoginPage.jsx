/**
 * Login page – email/password form, Google CTA, left panel.
 * Uses useLoginState, constants, AuthField; UI matches original design.
 */

import { Link } from 'react-router-dom';
import { useLoginState } from '../../hooks/useLoginState.js';
import { LOGIN_LEFT_CARDS, LOGIN_STATS } from '../../constants/login.js';
import { AuthField } from '../molecules/AuthField.jsx';
import '../../styles/login.css';

export function LoginPage() {
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
    handleGoogleLogin,
  } = useLoginState();

  return (
    <div className="auth-page" style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }} aria-label="Sign in">
      <div className={`auth-left ${loaded ? 'vis' : ''}`}>
        <div className="left-glow-1" />
        <div className="left-glow-2" />
        <div className="left-grid" />
        <Link to="/" className="auth-logo">
          Hasty<span>Shopping</span>
        </Link>

        <div className="left-center">
          <h2 className="left-headline">
            Your taste of
            <br />
            <span>Nigeria.</span>
            <br />
            In Canada.
          </h2>
          <p className="left-sub">
            Log in to browse thousands of Nigerian sellers, order your favourites and get them delivered right to your door.
          </p>

          <div className="left-cards">
            {LOGIN_LEFT_CARDS.map((c) => (
              <div
                key={c.title}
                className={`mini-card ${loaded ? 'vis' : ''}`}
                style={{ transitionDelay: c.delay }}
              >
                <div className="mini-card-icon">{c.icon}</div>
                <div>
                  <div className="mini-card-title">{c.title}</div>
                  <div className="mini-card-sub">{c.sub}</div>
                </div>
                <span className="mini-card-badge">{c.badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="left-bottom">
          {LOGIN_STATS.map((s) => (
            <div key={s.lbl} className="left-stat">
              <div className="left-stat-val">{s.val}</div>
              <div className="left-stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`auth-right ${loaded ? 'vis' : ''}`}>
        <div className="auth-form-wrap">
          <div className="form-header">
            <h1 className="form-title">Welcome back 👋</h1>
            <p className="form-sub">
              Don't have an account? <Link to="/signup">Sign up free</Link>
            </p>
          </div>

          <button type="button" className="google-btn" onClick={handleGoogleLogin} disabled={loading}>
            <svg className="google-icon" viewBox="0 0 24 24" aria-hidden>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          <div className="divider">
            <div className="divider-line" />
            <span className="divider-text">or sign in with email</span>
            <div className="divider-line" />
          </div>

          <AuthField label="Email Address" icon="✉️">
            <input
              className="field-input"
              type="email"
              placeholder="you@example.com"
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
                onClick={() => setShowPassword(!showPassword)}
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
            <Link to="#" className="forgot-link">
              Forgot password?
            </Link>
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
              'Sign In →'
            )}
          </button>

          <p className="terms">
            By signing in, you agree to our <Link to="#">Terms of Service</Link> and{' '}
            <Link to="#">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
