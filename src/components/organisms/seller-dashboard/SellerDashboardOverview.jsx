import { useState } from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { REVENUE_DATA, ORDERS, STATUS_COLORS, fmt } from '../../../constants/sellerDashboard.js'

const STATS = [
  { label: 'Total Revenue', icon: '💰', val: '₦1,240,000', sub: 'This month', change: '+28%', up: true, accent: '#f5a623' },
  { label: 'Total Orders', icon: '📦', val: '118', sub: 'This month', change: '+14%', up: true, accent: '#16c462' },
  { label: 'Avg. Order Value', icon: '📈', val: '₦10,508', sub: 'Per order', change: '+11%', up: true, accent: '#60a5fa' },
  { label: 'Pending Orders', icon: '⏳', val: '7', sub: 'Needs attention', change: '-3', up: false, accent: '#f87171' },
]

export function SellerDashboardOverview() {
  const [period, setPeriod] = useState('6M')

  return (
    <>
      <div className="quick-actions">
        {['+ Add Product', '📤 Export Report', '📣 Promote Store'].map((a) => (
          <div key={a} className="qa-btn" role="button" tabIndex={0}>
            {a}
          </div>
        ))}
      </div>

      <div className="stat-grid">
        {STATS.map((s) => (
          <div key={s.label} className="stat-card" style={{ '--accent': s.accent }}>
            <div className="stat-card-accent" />
            <div className="stat-label">
              {s.icon} {s.label}
            </div>
            <div className="stat-val">{s.val}</div>
            <div className="stat-sub">{s.sub}</div>
            <div className={`stat-change ${s.up ? 'up' : 'down'}`}>
              {s.up ? '▲' : '▼'} {s.change} vs last month
            </div>
          </div>
        ))}
      </div>

      <div className="chart-row">
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <div className="chart-title">Revenue (₦)</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>Sales to Canada</div>
            </div>
            <div className="chart-period-btns">
              {['3M', '6M', '1Y'].map((p) => (
                <button
                  key={p}
                  type="button"
                  className={`period-btn ${period === p ? 'active' : ''}`}
                  onClick={() => setPeriod(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={REVENUE_DATA} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f5a623" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#f5a623" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis
                tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `₦${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{ background: '#0f1a0d', border: '1px solid rgba(245,166,35,0.2)', borderRadius: 10, fontSize: 12 }}
                labelStyle={{ color: 'rgba(255,255,255,0.5)' }}
                itemStyle={{ color: '#f5a623' }}
                formatter={(v) => [fmt(v), 'Revenue']}
              />
              <Area type="monotone" dataKey="revenue" stroke="#f5a623" strokeWidth={2} fill="url(#revGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <div>
              <div className="chart-title">Orders / Month</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>Volume trend</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={REVENUE_DATA} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: '#0f1a0d', border: '1px solid rgba(22,196,98,0.2)', borderRadius: 10, fontSize: 12 }}
                itemStyle={{ color: '#16c462' }}
              />
              <Bar dataKey="orders" fill="rgba(22,196,98,0.5)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <div>
            <div className="section-title">Recent Orders</div>
            <div className="section-sub">Latest 5 orders across all products</div>
          </div>
          <div className="view-all-btn" role="button" tabIndex={0}>
            View All →
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Buyer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th aria-label="Contact" />
            </tr>
          </thead>
          <tbody>
            {ORDERS.slice(0, 5).map((o) => {
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
