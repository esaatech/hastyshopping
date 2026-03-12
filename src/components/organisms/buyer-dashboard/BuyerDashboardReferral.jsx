import { useOutletContext } from 'react-router-dom'
import { BUYER, REFERRALS, fmt } from '../../../constants/buyerDashboard.js'

export function BuyerDashboardReferral() {
  const { copied, copyLink } = useOutletContext()

  return (
    <>
      <div className="referral-hero">
        <div className="ref-hero-bg" />
        <div className="ref-badge">🎁 Earn ₦1,500 per friend</div>
        <div className="ref-title">
          Invite Friends,
          <br />
          <span>Earn Credits</span>
        </div>
        <div className="ref-desc">
          Know other Nigerians in Canada who miss home? Invite them to HastyShopping — you both earn ₦1,500 in
          shopping credits when they place their first order.
        </div>

        <div className="ref-steps">
          {[
            { icon: '🔗', label: 'Share Your Link', desc: 'Send your unique invite link to friends & family in Canada' },
            { icon: '👤', label: 'Friend Signs Up', desc: 'They create a HastyShopping account using your link' },
            { icon: '🛍️', label: 'They Place an Order', desc: 'Their first order gets confirmed with a Nigerian seller' },
            { icon: '💰', label: 'You Both Earn', desc: 'You get ₦1,500 • They get ₦1,500. Credited instantly!' },
          ].map((step, i, arr) => (
            <div key={step.label} className="ref-step">
              {i < arr.length - 1 && <div className="ref-step-connector" />}
              <div className="ref-step-icon">{step.icon}</div>
              <div className="ref-step-label">{step.label}</div>
              <div className="ref-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>

        <div className="ref-link-box">
          <div className="ref-link-text">{BUYER.referralLink}</div>
          <button type="button" className={`ref-copy-btn ${copied ? 'copied' : ''}`} onClick={copyLink}>
            {copied ? '✓ Copied!' : '📋 Copy Link'}
          </button>
        </div>

        <div className="ref-share-row">
          <span className="ref-share-lbl">Share via:</span>
          {[
            { icon: '💬', label: 'WhatsApp' },
            { icon: '📘', label: 'Facebook' },
            { icon: '✉️', label: 'Email' },
            { icon: '🐦', label: 'X (Twitter)' },
          ].map((s) => (
            <div key={s.label} className="share-chip">
              {s.icon} {s.label}
            </div>
          ))}
        </div>
      </div>

      <div className="ref-bottom">
        <div className="ref-stats-card">
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                letterSpacing: '0.7px',
                fontFamily: "'Syne',sans-serif",
                marginBottom: 10,
              }}
            >
              Your Referrals
            </div>
            <div className="ref-stat-row">
              <div className="ref-stat-num">{BUYER.referralCount}</div>
              <div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: 'white' }}>
                  Friends Referred
                </div>
                <div className="ref-stat-lbl">{REFERRALS.filter((r) => r.status === 'Ordered').length} placed their first order</div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                letterSpacing: '0.7px',
                fontFamily: "'Syne',sans-serif",
                marginBottom: 8,
              }}
            >
              Credits Balance
            </div>
            <div className="ref-credit-val">{fmt(BUYER.referralCredits)}</div>
            <div className="ref-credit-sub">≈ CA${(BUYER.referralCredits / 1100).toFixed(0)} in shopping credit</div>
            <div className="ref-use-credit">Use Credits on Next Order →</div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16, marginTop: 16 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                letterSpacing: '0.7px',
                fontFamily: "'Syne',sans-serif",
                marginBottom: 8,
              }}
            >
              Next Milestone
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>
              Refer <strong style={{ color: 'white' }}>2 more friends</strong> to unlock{' '}
              <strong style={{ color: '#f5a623' }}>VIP Buyer Status</strong> 🏆
            </div>
            <div style={{ height: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 4, overflow: 'hidden' }}>
              <div
                style={{
                  width: `${(BUYER.referralCount / 5) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg,#0d8f3e,#16c462)',
                  borderRadius: 4,
                  transition: 'width 0.6s ease',
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{BUYER.referralCount}/5 referrals</span>
              <span style={{ fontSize: 11, color: '#f5a623', fontWeight: 700 }}>VIP at 5 →</span>
            </div>
          </div>
        </div>

        <div className="referral-list-card">
          <div className="referral-list-title">👥 Friends You&apos;ve Invited</div>
          {REFERRALS.length === 0 ? (
            <div className="ref-empty">No referrals yet — share your link above!</div>
          ) : (
            REFERRALS.map((r) => (
              <div key={`${r.name}-${r.joined}`} className="referral-row">
                <div className="ref-person-icon">👤</div>
                <div>
                  <div className="ref-person-name">{r.name}</div>
                  <div className="ref-person-sub">Joined {r.joined}</div>
                </div>
                <div
                  className="ref-person-status"
                  style={{
                    background: r.status === 'Ordered' ? 'rgba(22,196,98,0.1)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${r.status === 'Ordered' ? 'rgba(22,196,98,0.25)' : 'rgba(255,255,255,0.1)'}`,
                    color: r.status === 'Ordered' ? '#16c462' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {r.status === 'Ordered' ? '✓ Ordered' : '⏳ Signed Up'}
                </div>
                {r.status === 'Ordered' ? <div className="ref-credit-earned">+{fmt(r.credit)}</div> : null}
              </div>
            ))
          )}

          <div
            style={{
              marginTop: 16,
              background: 'rgba(245,166,35,0.05)',
              border: '1px solid rgba(245,166,35,0.12)',
              borderRadius: 12,
              padding: '12px 14px',
            }}
          >
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
              💡 <strong style={{ color: 'rgba(245,166,35,0.8)' }}>Ngozi M.</strong> has signed up but hasn&apos;t
              ordered yet. Send them a reminder to get your credit!
            </div>
            <div style={{ marginTop: 8 }}>
              <div className="wa-btn" style={{ display: 'inline-flex' }}>
                💬 Remind via WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

