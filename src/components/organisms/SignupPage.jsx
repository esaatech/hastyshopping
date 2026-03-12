/**
 * Signup page – multi-step form (Account, Location, Preferences).
 * Uses useSignupState, constants, AuthField; UI matches original design.
 */

import { Link } from 'react-router-dom';
import { useSignupState } from '../../hooks/useSignupState.js';
import {
  SIGNUP_STEPS,
  SIGNUP_CATEGORIES,
  SIGNUP_PROVINCES,
  SIGNUP_BENEFITS,
} from '../../constants/signup.js';
import { AuthField } from '../molecules/AuthField.jsx';
import '../../styles/signup.css';

export function SignupPage() {
  const {
    step,
    loaded,
    showPassword,
    setShowPassword,
    loading,
    done,
    form,
    update,
    toggleCat,
    errors,
    submitError,
    nextStep,
    goBack,
    steps,
    handleGoogleSignup,
  } = useSignupState();

  return (
    <div className="su-page" style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }} aria-label="Sign up">
      <div className={`su-left ${loaded ? 'vis' : ''}`}>
        <div className="su-left-glow" />
        <div className="su-grid" />
        <Link to="/" className="su-logo">
          Hasty<span>Shopping</span>
        </Link>

        <div className="su-left-content">
          <h2 className="su-left-title">
            Join <span>18,000+</span>
            <br />
            Nigerians already
            <br />
            shopping home.
          </h2>
          <p className="su-left-sub">
            Create a free account and start ordering authentic Nigerian products delivered straight to Canada.
          </p>

          <div className="su-benefits">
            {SIGNUP_BENEFITS.map((b) => (
              <div
                key={b.title}
                className={`su-benefit ${loaded ? 'vis' : ''}`}
                style={{ transitionDelay: b.delay }}
              >
                <div className="benefit-icon">{b.icon}</div>
                <div>
                  <div className="benefit-title">{b.title}</div>
                  <div className="benefit-sub">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`su-right ${loaded ? 'vis' : ''}`}>
        <div className="su-form-wrap">
          {done ? (
            <div className="success-wrap">
              <div className="success-icon-wrap">🎉</div>
              <h2 className="success-title">You're all set!</h2>
              <p className="success-sub">
                Welcome to HastyShopping! Your account is ready.
                <br />
                Start exploring thousands of Nigerian sellers now.
              </p>
              <Link to="/" className="btn-go">
                Start Shopping →
              </Link>
            </div>
          ) : (
            <>
              <div className="stepper">
                {steps.map((s, i) => (
                  <div key={s} className="step-item">
                    <div
                      className={`step-circle ${i === step ? 'active' : i < step ? 'done' : ''}`}
                    >
                      {i < step ? '✓' : i + 1}
                    </div>
                    <span className={`step-label ${i === step ? 'active' : ''}`}>{s}</span>
                    {i < steps.length - 1 && (
                      <div className={`step-line ${i < step ? 'done' : ''}`} />
                    )}
                  </div>
                ))}
              </div>

              {step === 0 && (
                <>
                  <div className="su-form-header">
                    <h2 className="su-form-title">Create your account</h2>
                    <p className="su-form-sub">Quick and free — takes under 2 minutes</p>
                  </div>

                  <button type="button" className="google-btn" onClick={handleGoogleSignup} disabled={loading}>
                    <svg className="google-icon" viewBox="0 0 24 24" aria-hidden>
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                  </button>

                  <div className="su-divider">
                    <div className="su-divider-line" />
                    <span className="su-divider-text">or sign up with email</span>
                    <div className="su-divider-line" />
                  </div>

                  <AuthField
                    label="Full Name"
                    error={errors.fullName}
                    hasError={!!errors.fullName}
                    icon="👤"
                  >
                    <input
                      className="field-input"
                      placeholder="Adaeze Okonkwo"
                      value={form.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                      aria-invalid={!!errors.fullName}
                    />
                  </AuthField>

                  <AuthField
                    label="Email Address"
                    error={errors.email}
                    hasError={!!errors.email}
                    icon="✉️"
                  >
                    <input
                      className="field-input"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      aria-invalid={!!errors.email}
                    />
                  </AuthField>

                  <AuthField
                    label="Password"
                    error={errors.password}
                    hasError={!!errors.password}
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
                      value={form.password}
                      onChange={(e) => update('password', e.target.value)}
                      aria-invalid={!!errors.password}
                    />
                  </AuthField>

                  {form.password && (
                    <div className="pw-strength">
                      <div className="pw-bars">
                        {[1, 2, 3, 4].map((l) => (
                          <div
                            key={l}
                            className="pw-bar"
                            style={{
                              background:
                                form.password.length >= l * 2
                                  ? form.password.length < 6
                                    ? '#ef4444'
                                    : form.password.length < 10
                                      ? '#f5a623'
                                      : '#16c462'
                                  : undefined,
                            }}
                          />
                        ))}
                      </div>
                      <span className="pw-label">
                        {form.password.length < 6
                          ? 'Weak'
                          : form.password.length < 10
                            ? 'Good'
                            : 'Strong'}
                      </span>
                    </div>
                  )}

                  <div className="signin-link">
                    Already have an account? <Link to="/login">Sign in</Link>
                  </div>

                  {submitError ? (
                    <div className="error-msg" role="alert" style={{ marginTop: 14 }}>
                      <span>⚠️</span>
                      {submitError}
                    </div>
                  ) : null}
                </>
              )}

              {step === 1 && (
                <>
                  <div className="su-form-header">
                    <h2 className="su-form-title">Where are you in Canada?</h2>
                    <p className="su-form-sub">We use this to calculate shipping to your address</p>
                  </div>

                  <AuthField
                    label="City"
                    error={errors.city}
                    hasError={!!errors.city}
                    icon="🏙️"
                  >
                    <input
                      className="field-input"
                      placeholder="e.g. Toronto"
                      value={form.city}
                      onChange={(e) => update('city', e.target.value)}
                      aria-invalid={!!errors.city}
                    />
                  </AuthField>

                  <AuthField
                    label="Province"
                    error={errors.province}
                    hasError={!!errors.province}
                    icon="🗺️"
                  >
                    <select
                      className="field-select"
                      value={form.province}
                      onChange={(e) => update('province', e.target.value)}
                      aria-invalid={!!errors.province}
                    >
                      <option value="">Select province...</option>
                      {SIGNUP_PROVINCES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </AuthField>

                  <AuthField label="Postal Code (optional)" icon="📮">
                    <input
                      className="field-input"
                      placeholder="e.g. M5V 3A8"
                      value={form.postalCode}
                      onChange={(e) => update('postalCode', e.target.value)}
                    />
                  </AuthField>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="su-form-header">
                    <h2 className="su-form-title">What do you shop for?</h2>
                    <p className="su-form-sub">Pick your interests so we can personalise your feed</p>
                  </div>

                  <div className="cat-grid">
                    {SIGNUP_CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        className={`cat-item ${form.categories.includes(cat) ? 'selected' : ''}`}
                        onClick={() => toggleCat(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', marginTop: '12px' }}>
                    You can change these anytime in your settings.
                  </p>
                </>
              )}

              <div className="btn-row">
                {step > 0 && (
                  <button type="button" className="btn-back" onClick={goBack}>
                    ← Back
                  </button>
                )}
                <button
                  type="button"
                  className="btn-next"
                  onClick={nextStep}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="spinner" />
                      Creating account...
                    </>
                  ) : step === 2 ? (
                    'Create Account 🎉'
                  ) : (
                    'Continue →'
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
