import { SAVED_SELLERS } from '../../../constants/buyerDashboard.js'
import { SellerCard } from './BuyerDashboardComponents.jsx'

export function BuyerDashboardSaved() {
  return (
    <>
      <div className="section-hdr" style={{ marginBottom: 20 }}>
        <div>
          <div className="section-title">❤️ Saved Sellers</div>
          <div className="section-sub">{SAVED_SELLERS.length} sellers saved</div>
        </div>
      </div>
      <div className="sellers-grid">
        {SAVED_SELLERS.map((s) => (
          <SellerCard key={s.id} seller={s} full />
        ))}
      </div>
    </>
  )
}

