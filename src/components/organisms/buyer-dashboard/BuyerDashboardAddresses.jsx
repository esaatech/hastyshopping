import { ADDRESSES } from '../../../constants/buyerDashboard.js'

export function BuyerDashboardAddresses() {
  return (
    <>
      <div className="section-hdr" style={{ marginBottom: 20 }}>
        <div className="section-title">📍 Delivery Addresses</div>
      </div>
      <div className="addr-grid">
        {ADDRESSES.map((a) => (
          <div key={a.id} className={`addr-card ${a.isDefault ? 'default' : ''}`}>
            {a.isDefault ? <div className="addr-default-tag">Default</div> : null}
            <div className="addr-label">📍 {a.label}</div>
            <div className="addr-line">
              {a.line1}
              <br />
              {a.city}, {a.province} {a.postal}
              <br />
              Canada 🇨🇦
            </div>
            <div className="addr-actions">
              <div className="addr-btn">✏️ Edit</div>
              {!a.isDefault ? <div className="addr-btn">Set Default</div> : null}
              {!a.isDefault ? (
                <div className="addr-btn" style={{ color: 'rgba(239,68,68,0.6)', borderColor: 'rgba(239,68,68,0.15)' }}>
                  🗑️ Remove
                </div>
              ) : null}
            </div>
          </div>
        ))}
        <div className="addr-add-card">
          <div className="addr-add-icon">+</div>
          <div className="addr-add-lbl">Add New Address</div>
          <div className="addr-add-sub">Add another Canadian delivery address</div>
        </div>
      </div>
    </>
  )
}

