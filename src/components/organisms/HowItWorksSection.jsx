/**
 * How It Works – 4 steps section: step list (left) + detail panel (right) + dots.
 */

import { useHowItWorksState } from '../../hooks/useHowItWorksState.js';
import '../../styles/how-it-works.css';

export function HowItWorksSection() {
  const { activeStep, loaded, autoPlay, handleStepClick, step, steps } = useHowItWorksState();

  return (
    <section className="hiw-section" aria-labelledby="hiw-heading">
      <div className="hiw-bg-1" aria-hidden="true" />
      <div className="hiw-bg-2" aria-hidden="true" />

      <header className={`hiw-header ${loaded ? 'vis' : ''}`}>
        <div className="hiw-label">🚀 Simple Process</div>
        <h2 id="hiw-heading" className="hiw-title">
          How <span>HastyShopping</span>
          <br />
          works in 4 steps
        </h2>
        <p className="hiw-subtitle">
          From browsing Nigerian sellers to getting your package in Canada — it's simple, safe and fast.
        </p>
      </header>

      <div className="hiw-content">
        <div className={`step-list ${loaded ? 'vis' : ''}`} role="list">
          {steps.map((s, i) => (
            <div
              key={s.number}
              role="button"
              tabIndex={0}
              className={`step-row ${activeStep === i ? 'active' : ''}`}
              style={{
                '--step-color': s.color,
                '--step-glow': s.bgGlow,
                '--step-bg': s.bgGlow,
              }}
              onClick={() => handleStepClick(i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleStepClick(i)}
            >
              <div className="step-num-wrap">
                <div className="step-icon-box">{s.icon}</div>
                <span className="step-num-badge">{s.number}</span>
              </div>
              <div className="step-text">
                <div className="step-title-sm">{s.title}</div>
                <div className="step-sub-sm">{s.subtitle}</div>
                {activeStep === i && autoPlay && (
                  <div className="step-progress">
                    <div
                      key={`${i}-${activeStep}`}
                      className="step-progress-fill"
                      style={{ background: s.color }}
                    />
                  </div>
                )}
              </div>
              <span className="step-arrow">→</span>
            </div>
          ))}
        </div>

        <div className={`detail-panel ${loaded ? 'vis' : ''}`}>
          <div
            className="detail-card"
            style={{
              borderColor: step.borderColor,
              boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${step.bgGlow}`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
              }}
            />
            <div
              className="detail-glow"
              style={{ background: `radial-gradient(circle, ${step.bgGlow} 0%, transparent 70%)` }}
            />
            <div className="detail-step-num" style={{ color: step.color }}>
              {step.number}
            </div>
            <div
              className="detail-icon"
              style={{
                background: step.bgGlow,
                border: `1px solid ${step.borderColor}`,
                boxShadow: `0 0 20px ${step.bgGlow}`,
              }}
            >
              {step.icon}
            </div>
            <div className="detail-title">{step.title}</div>
            <div className="detail-subtitle" style={{ color: step.color }}>
              {step.subtitle}
            </div>
            <p className="detail-desc">{step.description}</p>
            <div className="detail-checklist">
              {step.details.map((d, di) => (
                <div key={di} className="check-item">
                  <div
                    className="check-icon"
                    style={{
                      background: step.bgGlow,
                      border: `1px solid ${step.borderColor}`,
                      color: step.color,
                    }}
                  >
                    ✓
                  </div>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`step-dots ${loaded ? 'vis' : ''}`} role="tablist" aria-label="Steps">
        {steps.map((s, i) => (
          <button
            key={s.number}
            type="button"
            role="tab"
            aria-selected={activeStep === i}
            aria-label={`Step ${i + 1}: ${s.title}`}
            className={`step-dot ${activeStep === i ? 'active' : ''}`}
            style={activeStep === i ? { background: s.color } : {}}
            onClick={() => handleStepClick(i)}
          />
        ))}
      </div>
    </section>
  );
}
