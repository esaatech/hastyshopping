import { Link, useNavigate } from 'react-router-dom'
import { BUYER, ORDERS, SAVED_SELLERS, fmt } from '../../../constants/buyerDashboard.js'
import { OrderCard, SellerCard } from './BuyerDashboardComponents.jsx'

export function BuyerDashboardHome() {
  const navigate = useNavigate()

  return (
    <>
      <div className="welcome-banner">
        <div className="welcome-bg-flag">🇳🇬🇨🇦</div>
        <div>
          <div className="welcome-greeting">
            Welcome back, <span>{BUYER.name}</span> 👋
          </div>
          <div className="welcome-sub">
            Your Nigerian marketplace, delivered to Canada.
            <br />
            📍 Delivering to {BUYER.location}
          </div>
        </div>
        <div className="welcome-flags">🇳🇬 → 🇨🇦</div>
      </div>

      <div className="quick-stats">
        <div className="qs-card" onClick={() => navigate('/buyer/dashboard/orders')} role="button" tabIndex={0}>
          <div
            className="qs-icon"
            style={{ background: 'rgba(22,196,98,0.1)', border: '1px solid rgba(22,196,98,0.15)' }}
          >
            📦
          </div>
          <div>
            <div className="qs-label">Active Orders</div>
            <div className="qs-val">1</div>
          </div>
        </div>
        <div className="qs-card" onClick={() => navigate('/buyer/dashboard/saved')} role="button" tabIndex={0}>
          <div
            className="qs-icon"
            style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.15)' }}
          >
            ❤️
          </div>
          <div>
            <div className="qs-label">Saved Sellers</div>
            <div className="qs-val">{SAVED_SELLERS.length}</div>
          </div>
        </div>
        <div className="qs-card" onClick={() => navigate('/buyer/dashboard/referral')} role="button" tabIndex={0}>
          <div
            className="qs-icon"
            style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.15)' }}
          >
            🎁
          </div>
          <div>
            <div className="qs-label">Referral Credits</div>
            <div className="qs-val" style={{ color: '#f5a623' }}>
              {fmt(BUYER.referralCredits)}
            </div>
          </div>
        </div>
      </div>

      <div className="section-hdr">
        <div>
          <div className="section-title">✈️ Active Orders</div>
          <div className="section-sub">Track your items in transit</div>
        </div>
        <Link className="see-all" to="/buyer/dashboard/orders">
          View All →
        </Link>
      </div>
      {ORDERS.filter((o) => o.status !== 'Delivered').map((o) => (
        <OrderCard key={o.id} order={o} showTracking />
      ))}

      <div style={{ marginBottom: 28 }}>
        <div className="section-hdr">
          <div className="section-title">⭐ Leave a Review</div>
        </div>
        {ORDERS.filter((o) => o.status === 'Delivered')
          .slice(0, 1)
          .map((o) => (
            <div key={o.id} className="review-nudge">
              <div className="review-nudge-text">
                You received <strong>{o.items[0]}</strong> from {o.seller} — share your experience with the
                community!
              </div>
              <button type="button" className="review-btn">
                ★ Write Review
              </button>
            </div>
          ))}
      </div>

      <div className="section-hdr">
        <div>
          <div className="section-title">❤️ Your Favourite Sellers</div>
          <div className="section-sub">Quick access to sellers you love</div>
        </div>
        <Link className="see-all" to="/buyer/dashboard/saved">
          See All →
        </Link>
      </div>
      <div className="sellers-grid">
        {SAVED_SELLERS.slice(0, 2).map((s) => (
          <SellerCard key={s.id} seller={s} />
        ))}
      </div>
    </>
  )
}

