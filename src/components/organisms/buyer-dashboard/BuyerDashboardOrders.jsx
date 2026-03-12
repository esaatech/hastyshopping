import { useState } from 'react'
import { ORDERS } from '../../../constants/buyerDashboard.js'
import { OrderCard } from './BuyerDashboardComponents.jsx'

export function BuyerDashboardOrders() {
  const [filter, setFilter] = useState('All')
  const statuses = ['All', 'In Transit', 'Delivered']
  const filtered = filter === 'All' ? ORDERS : ORDERS.filter((o) => o.status === filter)

  return (
    <>
      <div className="section-hdr" style={{ marginBottom: 20 }}>
        <div>
          <div className="section-title">📦 My Orders</div>
          <div className="section-sub">{ORDERS.length} total orders</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
        {statuses.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            style={{
              padding: '5px 14px',
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: "'Syne',sans-serif",
              transition: 'all 0.2s',
              background: filter === s ? 'rgba(22,196,98,0.1)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${filter === s ? 'rgba(22,196,98,0.25)' : 'rgba(255,255,255,0.08)'}`,
              color: filter === s ? '#16c462' : 'rgba(255,255,255,0.4)',
            }}
          >
            {s}
          </button>
        ))}
      </div>
      {filtered.map((o) => (
        <OrderCard key={o.id} order={o} showTracking={o.status !== 'Delivered'} />
      ))}
    </>
  )
}

