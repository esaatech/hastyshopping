import { useState } from 'react'
import { ORDERS, STATUS_COLORS, fmt } from '../../../constants/sellerDashboard.js'

const statuses = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Disputed']

export function SellerDashboardOrders() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? ORDERS : ORDERS.filter((o) => o.status === filter)

  return (
    <>
      <div className="filter-chips">
        {statuses.map((s) => (
          <button
            key={s}
            type="button"
            className={`filter-chip ${filter === s ? 'active' : ''}`}
            onClick={() => setFilter(s)}
          >
            {s} {s !== 'All' && <span style={{ opacity: 0.6 }}>({ORDERS.filter((o) => o.status === s).length})</span>}
          </button>
        ))}
      </div>
      <div className="section-card">
        <div className="section-header">
          <div>
            <div className="section-title">All Orders</div>
            <div className="section-sub">{filtered.length} orders found</div>
          </div>
          <div className="view-all-btn" role="button" tabIndex={0}>
            📤 Export
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Buyer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => {
              const s = STATUS_COLORS[o.status]
              return (
                <tr key={o.id}>
                  <td>
                    <div className="order-id">{o.id}</div>
                  </td>
                  <td>
                    <div className="order-buyer">{o.buyer}</div>
                    <div className="order-loc">📍 {o.location}</div>
                  </td>
                  <td>
                    <div className="order-product">{o.product}</div>
                  </td>
                  <td>
                    <div className="order-amount">{fmt(o.amount)}</div>
                  </td>
                  <td>
                    <span className="status-badge" style={{ background: s.bg, borderColor: s.border, color: s.color }}>
                      <span className="status-dot" />
                      {o.status}
                    </span>
                  </td>
                  <td>
                    <div className="order-date">{o.date}</div>
                  </td>
                  <td>
                    <div className="wa-btn" role="button" tabIndex={0}>
                      💬 WhatsApp
                    </div>
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
