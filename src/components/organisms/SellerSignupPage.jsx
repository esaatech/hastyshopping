/**
 * Seller signup (apply to join) – 4 steps: Account, Store, Location, Categories.
 * Opened from footer "Become a Seller" or from seller login "Apply to join".
 */

import { Link } from 'react-router-dom';
import { useSellerSignupState } from '../../hooks/useSellerSignupState.js';
import {
  SELLER_SIGNUP_STEPS,
  NIGERIAN_STATES,
  SELLER_CATEGORIES,
  SELLER_SIGNUP_STEP_INFO,
  SELLER_SIGNUP_PERKS,
} from '../../constants/sellerSignup.js';
import { AuthField } from '../molecules/AuthField.jsx';
import '../../styles/seller-signup.css';

export function SellerSignupPage() {
  const {
    step,
    loaded,
    loading,
    done,
    showPassword,
    setShowPassword,
    form,
    update,
    toggleCat,
    errors,
    nextStep,
    goBack,
    steps,
  } = useSellerSignupState();

  const pwStrength =
    form.password.length === 0 ? 0 : form.password.length < 6 ? 1 : form.password.length < 10 ? 2 : 3;
  const pwColor = ['', '#ef4444', '#f5a623', '#16c462'][pwStrength];
  const pwLabel = ['', 'Weak', 'Good', 'Strong'][pwStrength];

  return (
    <div className="ss-page" style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }} aria-label="Seller signup">
      <div className={`ss-sidebar ${loaded ? 'vis' : ''}`}>
        <div className="ss-glow" />
        <div className="ss-grid" />

        <div>
          <Link to="/" className="ss-logo">
            Hasty<span>Shopping</span>
          </Link>
          <div className="ss-seller-tag">🏪 Seller Onboarding</div>
        </div>

        <div className="ss-steps">
          {SELLER_SIGNUP_STEP_INFO.map((s, i) => (
            <div key={s.title} className={`ss-step-row ${i < step ? 'done-line' : ''}`}>
              <div className={`ss-step-dot ${i === step ? 'active' : i < step ? 'done' : ''}`}>
                {i < step ? '✓' : i + 1}
              </div>
              <div className="ss-step-info">
                <div className={`ss-step-title ${i === step ? 'active' : i < step ? 'done' : ''}`}>
                  {s.title}
                </div>
                <div className="ss-step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="ss-perks">
          {SELLER_SIGNUP_PERKS.map((p) => (
            <div key={p} className="ss-perk">
              <div className="ss-perk-check">✓</div>
              {p}
            </div>
          ))}
        </div>
      </div>

      <div className={`ss-right ${loaded ? 'vis' : ''}`}>
        <div className="ss-form-wrap">
          {done ? (
            <div className="success-wrap">
              <div className="success-icon-wrap">🎊</div>
              <h2 className="success-title">Application submitted!</h2>
              <p className="success-sub">
                Your seller application for <strong style={{ color: 'white' }}>{form.storeName}</strong> is under review.
                <br />
                We typically approve stores within 24–48 hours.
              </p>
              <div className="success-note">📧 Confirmation sent to {form.email}</div>
              <br />
              <Link to="/seller/login" className="btn-dashboard">
                Go to Seller Dashboard →
              </Link>
            </div>
          ) : (
            <>
              <div className="form-step-label">
                <span>Step {step + 1} of {steps.length}</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>—</span>
                <span>{steps[step]}</span>
              </div>

              {step === 0 && (
                <>
                  <h2 className="form-title">Create your seller account</h2>
                  <p className="form-sub">
                    Already a seller? <Link to="/seller/login">Sign in to your dashboard →</Link>
                  </p>

                  <AuthField
                    label="Full Name"
                    error={errors.fullName}
                    hasError={!!errors.fullName}
                    icon="👤"
                  >
                    <input
                      className="field-input"
                      placeholder="Chukwuemeka Obi"
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
                      placeholder="you@store.com"
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
                      value={form.password}
                      onChange={(e) => update('password', e.target.value)}
                      aria-invalid={!!errors.password}
                    />
                  </AuthField>

                  {form.password && (
                    <>
                      <div className="pw-bars">
                        {[1, 2, 3].map((l) => (
                          <div
                            key={l}
                            className="pw-bar"
                            style={{ background: pwStrength >= l ? pwColor : undefined }}
                          />
                        ))}
                      </div>
                      <div className="pw-hint">
                        <span style={{ color: pwColor }}>{pwLabel} password</span>
                        <span>Min. 8 characters</span>
                      </div>
                    </>
                  )}
                </>
              )}

              {step === 1 && (
                <>
                  <h2 className="form-title">Tell us about your store</h2>
                  <p className="form-sub">This is what buyers in Canada will see on your storefront.</p>

                  <AuthField
                    label="Store / Business Name"
                    error={errors.storeName}
                    hasError={!!errors.storeName}
                    icon="🏪"
                  >
                    <input
                      className="field-input"
                      placeholder="e.g. Mama Chukwu's Kitchen"
                      value={form.storeName}
                      onChange={(e) => update('storeName', e.target.value)}
                      aria-invalid={!!errors.storeName}
                    />
                  </AuthField>

                  <AuthField
                    label="WhatsApp Number (for buyer inquiries)"
                    error={errors.whatsapp}
                    hasError={!!errors.whatsapp}
                    icon="💬"
                  >
                    <input
                      className="field-input"
                      placeholder="+234 801 234 5678"
                      value={form.whatsapp}
                      onChange={(e) => update('whatsapp', e.target.value)}
                      aria-invalid={!!errors.whatsapp}
                    />
                  </AuthField>

                  <div className="field">
                    <label className="field-label">Store Description (optional)</label>
                    <textarea
                      className="field-textarea"
                      rows={3}
                      placeholder="Tell buyers what makes your store special, what you specialise in, your experience..."
                      value={form.storeDesc}
                      onChange={(e) => update('storeDesc', e.target.value)}
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="form-title">Where are you in Nigeria?</h2>
                  <p className="form-sub">
                    We use your location to calculate shipping costs and delivery times to Canada.
                  </p>

                  <AuthField label="State" error={errors.state} hasError={!!errors.state} icon="🗺️">
                    <select
                      className={`field-select ${!form.state ? 'placeholder' : ''}`}
                      value={form.state}
                      onChange={(e) => update('state', e.target.value)}
                      aria-invalid={!!errors.state}
                    >
                      <option value="">Select your state...</option>
                      {NIGERIAN_STATES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </AuthField>

                  <AuthField label="City / Area" error={errors.city} hasError={!!errors.city} icon="🏙️">
                    <input
                      className="field-input"
                      placeholder="e.g. Ikeja, Lekki, Yaba..."
                      value={form.city}
                      onChange={(e) => update('city', e.target.value)}
                      aria-invalid={!!errors.city}
                    />
                  </AuthField>

                  <div
                    style={{
                      background: 'rgba(245,166,35,0.06)',
                      border: '1px solid rgba(245,166,35,0.15)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      marginTop: '8px',
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.4)',
                      lineHeight: '1.6',
                    }}
                  >
                    ✈️ We currently ship from all Nigerian states to Canada with 7–21 day delivery.
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="form-title">What do you sell?</h2>
                  <p className="form-sub">Select all categories that apply. This helps buyers find your store.</p>

                  <div className="cat-grid">
                    {SELLER_CATEGORIES.map((cat) => {
                      const label = `${cat.icon} ${cat.label}`;
                      const sel = form.categories.includes(label);
                      return (
                        <button
                          key={label}
                          type="button"
                          className={`cat-item ${sel ? 'selected' : ''}`}
                          onClick={() => toggleCat(label)}
                        >
                          <span>{cat.icon}</span>
                          <span>{cat.label}</span>
                          <div className="cat-check">{sel ? '✓' : ''}</div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.categories && (
                    <div className="field-error" style={{ marginTop: '10px' }}>
                      ⚠️ {errors.categories}
                    </div>
                  )}

                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', marginTop: '12px' }}>
                    You can update your categories anytime from your seller dashboard.
                  </p>
                </>
              )}

              <div className="btn-row">
                {step > 0 && (
                  <button type="button" className="btn-back" onClick={goBack}>
                    ← Back
                  </button>
                )}
                <button type="button" className="btn-next" onClick={nextStep} disabled={loading}>
                  {loading ? (
                    <>
                      <div className="spinner" />
                      Submitting...
                    </>
                  ) : step === steps.length - 1 ? (
                    'Submit Application 🎊'
                  ) : (
                    'Continue →'
                  )}
                </button>
              </div>

              {step === 0 && (
                <div className="signin-link">
                  Already have a seller account? <Link to="/seller/login">Sign in →</Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
