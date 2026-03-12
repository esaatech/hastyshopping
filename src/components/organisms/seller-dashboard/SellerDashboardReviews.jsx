import { REVIEWS } from '../../../constants/sellerDashboard.js'

export function SellerDashboardReviews() {
  const avg = (REVIEWS.reduce((a, r) => a + r.rating, 0) / REVIEWS.length).toFixed(1)

  return (
    <>
      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        <div className="earn-card" style={{ maxWidth: 200, textAlign: 'center' }}>
          <div className="earn-lbl">Avg. Rating</div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 40, fontWeight: 800, color: '#f5a623' }}>
            {avg}★
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{REVIEWS.length} reviews</div>
        </div>
        <div className="earn-card" style={{ flex: 1 }}>
          <div className="earn-lbl">Rating Breakdown</div>
          {[5, 4, 3, 2, 1].map((star) => {
            const count = REVIEWS.filter((r) => r.rating === star).length
            const pct = (count / REVIEWS.length) * 100
            return (
              <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', width: 24 }}>{star}★</div>
                <div
                  style={{
                    flex: 1,
                    height: 6,
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{ width: `${pct}%`, height: '100%', background: '#f5a623', borderRadius: 3 }}
                  />
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', width: 16 }}>{count}</div>
              </div>
            )
          })}
        </div>
      </div>

      {REVIEWS.map((r) => (
        <div key={r.id} className="review-card">
          <div className="review-top">
            <div className="review-avatar">{r.avatar}</div>
            <div>
              <div className="review-buyer">{r.buyer}</div>
              <div className="review-product">📦 {r.product}</div>
            </div>
            <div className="review-stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="r-star" style={{ opacity: s <= r.rating ? 1 : 0.2 }}>
                  ★
                </span>
              ))}
            </div>
          </div>
          <p className="review-text">&quot;{r.comment}&quot;</p>
          <div className="review-footer">
            <div className="review-date">{r.date}</div>
            {r.replied ? (
              <div className="replied-tag">✓ Replied</div>
            ) : (
              <button type="button" className="reply-btn">
                Reply →
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  )
}
