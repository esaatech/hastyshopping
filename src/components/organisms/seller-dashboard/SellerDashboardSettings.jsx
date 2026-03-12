export function SellerDashboardSettings() {
  const storeFields = [
    { label: 'Store Name', val: "Mama Chukwu's Kitchen" },
    { label: 'Store Description', val: 'Authentic Nigerian food ingredients shipped to Canada' },
    { label: 'WhatsApp Number', val: '+234 801 234 5678' },
  ]
  const locationFields = [
    { label: 'State', val: 'Lagos' },
    { label: 'City / Area', val: 'Ikeja' },
  ]
  const bankFields = [
    { label: 'Bank Name', val: 'Guaranty Trust Bank (GTB)' },
    { label: 'Account Number', val: '0123456789' },
    { label: 'Account Name', val: 'Mama Chukwu Stores Ltd' },
  ]
  const securityFields = [
    { label: 'Email Address', val: 'mama@chukwuskitchen.com' },
    { label: 'Current Password', val: '' },
    { label: 'New Password', val: '' },
  ]

  return (
    <div className="settings-grid">
      <div className="settings-card">
        <div className="settings-section-title">🏪 Store Profile</div>
        {storeFields.map((f) => (
          <div key={f.label} className="settings-field">
            <div className="settings-label">{f.label}</div>
            <input className="settings-input" type="text" defaultValue={f.val} aria-label={f.label} />
          </div>
        ))}
        <button type="button" className="settings-save-btn">
          Save Changes
        </button>
      </div>

      <div className="settings-card">
        <div className="settings-section-title">🗺️ Location</div>
        {locationFields.map((f) => (
          <div key={f.label} className="settings-field">
            <div className="settings-label">{f.label}</div>
            <input className="settings-input" type="text" defaultValue={f.val} aria-label={f.label} />
          </div>
        ))}
        <button type="button" className="settings-save-btn">
          Save Changes
        </button>
      </div>

      <div className="settings-card">
        <div className="settings-section-title">🏦 Bank Details</div>
        {bankFields.map((f) => (
          <div key={f.label} className="settings-field">
            <div className="settings-label">{f.label}</div>
            <input
              className="settings-input"
              type={f.label.includes('Account Number') ? 'password' : 'text'}
              defaultValue={f.val}
              aria-label={f.label}
            />
          </div>
        ))}
        <button type="button" className="settings-save-btn">
          Save Bank Details
        </button>
      </div>

      <div className="settings-card">
        <div className="settings-section-title">🔒 Account & Security</div>
        {securityFields.map((f) => (
          <div key={f.label} className="settings-field">
            <div className="settings-label">{f.label}</div>
            <input
              className="settings-input"
              type={f.label.includes('Password') ? 'password' : 'text'}
              defaultValue={f.val}
              aria-label={f.label}
            />
          </div>
        ))}
        <button type="button" className="settings-save-btn">
          Update Password
        </button>
      </div>
    </div>
  )
}
