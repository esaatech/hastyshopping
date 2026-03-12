import { useState } from 'react'
import { BUYER } from '../../../constants/buyerDashboard.js'

export function BuyerDashboardSettings() {
  const [notifs, setNotifs] = useState({ orders: true, deals: true, reviews: false })

  return (
    <>
      <div className="settings-section">
        <div className="settings-section-title">👤 Personal Info</div>
        {[
          { label: 'Full Name', val: BUYER.fullName },
          { label: 'Email Address', val: BUYER.email },
          { label: 'Phone / WhatsApp', val: '+1 647 555 0142' },
          { label: 'Province', val: BUYER.province },
        ].map((f) => (
          <div key={f.label} className="settings-field">
            <div className="settings-label">{f.label}</div>
            <input className="settings-input" defaultValue={f.val} aria-label={f.label} />
          </div>
        ))}
        <button type="button" className="settings-save-btn">
          Save Changes
        </button>
      </div>

      <div className="settings-section">
        <div className="settings-section-title">🔒 Password</div>
        {['Current Password', 'New Password', 'Confirm New Password'].map((f) => (
          <div key={f} className="settings-field">
            <div className="settings-label">{f}</div>
            <input className="settings-input" type="password" placeholder="••••••••" aria-label={f} />
          </div>
        ))}
        <button type="button" className="settings-save-btn">
          Update Password
        </button>
      </div>

      <div className="settings-section">
        <div className="settings-section-title">🔔 Notification Preferences</div>
        {[
          { key: 'orders', label: 'Order Updates', sub: 'Shipping, delivery and status changes' },
          { key: 'deals', label: 'Deals & Promotions', sub: 'Special offers from saved sellers' },
          { key: 'reviews', label: 'Review Reminders', sub: 'Remind me to review delivered orders' },
        ].map((n) => (
          <div key={n.key} className="notif-row">
            <div>
              <div className="notif-label">{n.label}</div>
              <div className="notif-sub">{n.sub}</div>
            </div>
            <div
              className={`toggle-wrap ${notifs[n.key] ? '' : 'off'}`}
              onClick={() => setNotifs((p) => ({ ...p, [n.key]: !p[n.key] }))}
              role="switch"
              aria-checked={notifs[n.key]}
              tabIndex={0}
            >
              <div className="toggle-dot" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

