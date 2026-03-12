import { TRACKING_STEPS, fmt, fmtCAD } from '../../../constants/buyerDashboard.js'

export function OrderCard({ order, showTracking }) {
  const STATUS_STYLE = {
    'In Transit': { bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.3)', color: '#60a5fa' },
    Delivered: { bg: 'rgba(22,196,98,0.12)', border: 'rgba(22,196,98,0.3)', color: '#16c462' },
    Processing: { bg: 'rgba(245,166,35,0.12)', border: 'rgba(245,166,35,0.3)', color: '#f5a623' },
  }
  const s = STATUS_STYLE[order.status] || STATUS_STYLE.Processing

  return (
    <div className="order-card" style={{ marginBottom: 16 }}>
      <div className="order-card-top">
        <div style={{ flex: 1 }}>
          <div className="order-seller-row">
            <div className="order-seller-avatar">{order.sellerAvatar}</div>
            <div>
              <div className="order-seller-name">{order.seller}</div>
              <div className="order-id">
                {order.id} · {order.date}
              </div>
            </div>
          </div>
          <div className="order-items">📦 {order.items.join(' · ')}</div>
          <div className="order-meta">
            <span className="order-amount">{fmt(order.total)}</span>
            <span className="order-cad">{fmtCAD(order.total)}</span>
            <span className="order-date">ETA: {order.eta}</span>
          </div>
        </div>
        <div className="order-right">
          <div className="order-flags">{order.flags}</div>
          <span className="order-status-badge" style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
            {order.status}
          </span>
          <div className="wa-btn">💬 Contact Seller</div>
          {order.status === 'Delivered' && <div className="reorder-btn">🔄 Reorder</div>}
        </div>
      </div>

      {showTracking ? (
        <div className="tracking-bar">
          <div className="tracking-bar-title">📍 Tracking Your Order</div>
          <div className="tracking-steps">
            {TRACKING_STEPS.map((step, i) => {
              const isDone = i < order.trackingStep
              const isCurrent = i === order.trackingStep - 1
              return (
                <div key={step.label} className="tracking-step">
                  {i < TRACKING_STEPS.length - 1 && <div className={`ts-connector ${isDone ? 'done' : ''}`} />}
                  <div className={`ts-dot ${isCurrent ? 'current' : isDone ? 'done' : ''}`}>{step.icon}</div>
                  <div className={`ts-label ${isCurrent ? 'current' : isDone ? 'done' : ''}`}>{step.label}</div>
                </div>
              )
            })}
          </div>
          <div className="tracking-eta">
            🗓️ Expected delivery: <strong style={{ color: 'white' }}>{order.eta}</strong>
          </div>
        </div>
      ) : null}

      {order.status === 'Delivered' ? (
        <div style={{ padding: '0 22px 18px' }}>
          <div className="review-nudge">
            <div className="review-nudge-text">
              How was your order from <strong>{order.seller}</strong>? Your review helps the community!
            </div>
            <button type="button" className="review-btn">
              ★ Rate &amp; Review
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export function SellerCard({ seller }) {
  return (
    <div className="seller-card">
      <div className="seller-icon">{seller.avatar}</div>
      <div style={{ flex: 1 }}>
        <div className="seller-name">{seller.name}</div>
        <div className="seller-cat">
          {seller.category} · 📍 {seller.city}
        </div>
        <div className="seller-meta">
          <span className="seller-rating">★ {seller.rating}</span>
          <span className="seller-orders-count">{seller.orders} orders with them</span>
        </div>
        <div className="shop-again-btn">🛍️ Shop Again →</div>
      </div>
    </div>
  )
}

