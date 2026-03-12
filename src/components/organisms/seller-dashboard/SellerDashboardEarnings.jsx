import { PAYOUTS, STATUS_COLORS, fmt } from '../../../constants/sellerDashboard.js'

export function SellerDashboardEarnings() {
  return (
    <>
      <div className="earn-top">
        <div className="earn-card primary">
          <div className="earn-lbl">💰 Available Balance</div>
          <div className="earn-val gold">₦386,400</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>Ready to withdraw</div>
          <button type="button" className="earn-btn">
            Withdraw to Bank →
          </button>
        </div>
        <div className="earn-card">
          <div className="earn-lbl">📦 Pending Clearance</div>
          <div className="earn-val">₦124,000</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>Clears in 3–5 days</div>
        </div>
        <div className="earn-card">
          <div className="earn-lbl">✅ Total Earned (All Time)</div>
          <div className="earn-val">₦4,730,000</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>Since you joined</div>
        </div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <div>
            <div className="section-title">Payout History</div>
            <div className="section-sub">All withdrawals to your bank account</div>
          </div>
          <div className="view-all-btn" role="button" tabIndex={0}>
            📥 Download
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Payout ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {PAYOUTS.map((p) => {
              const s = STATUS_COLORS[p.status]
              return (
                <tr key={p.id}>
                  <td>
                    <div className="order-id">{p.id}</div>
                  </td>
                  <td>
                    <div className="order-date">{p.date}</div>
                  </td>
                  <td>
                    <div className="order-amount">{fmt(p.amount)}</div>
                  </td>
                  <td>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{p.method}</div>
                  </td>
                  <td>
                    <span className="status-badge" style={{ background: s.bg, borderColor: s.border, color: s.color }}>
                      <span className="status-dot" />
                      {p.status}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
