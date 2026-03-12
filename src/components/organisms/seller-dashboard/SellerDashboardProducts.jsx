import { PRODUCTS, fmt } from '../../../constants/sellerDashboard.js'

export function SellerDashboardProducts() {
  return (
    <>
      <div className="quick-actions">
        <div className="qa-btn" role="button" tabIndex={0}>
          + Add New Product
        </div>
        <div className="qa-btn" role="button" tabIndex={0}>
          📥 Import CSV
        </div>
      </div>
      <div className="section-card">
        <div className="section-header">
          <div>
            <div className="section-title">Your Products</div>
            <div className="section-sub">{PRODUCTS.length} products listed</div>
          </div>
          <div className="filter-chips" style={{ margin: 0 }}>
            {['All', 'Active', 'Low Stock', 'Out of Stock'].map((f) => (
              <div key={f} className="filter-chip" role="button" tabIndex={0}>
                {f}
              </div>
            ))}
          </div>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p) => {
            const stockColor = p.stock === 0 ? '#f87171' : p.stock < 10 ? '#f5a623' : '#16c462'
            const stockLabel = p.stock === 0 ? 'Out of Stock' : p.stock < 10 ? 'Low Stock' : 'In Stock'
            return (
              <div key={p.id} className="product-card">
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: `rgba(${p.stock === 0 ? '239,68,68' : p.stock < 10 ? '245,166,35' : '22,196,98'},0.1)`,
                    border: `1px solid rgba(${p.stock === 0 ? '239,68,68' : p.stock < 10 ? '245,166,35' : '22,196,98'},0.25)`,
                    borderRadius: 20,
                    padding: '2px 8px',
                    fontSize: 10,
                    fontWeight: 700,
                    color: stockColor,
                  }}
                >
                  {stockLabel}
                </div>
                <div className="product-icon-wrap">{p.icon}</div>
                <div className="product-name">{p.name}</div>
                <div className="product-cat">{p.category}</div>
                <div className="product-price">{fmt(p.price)}</div>
                <div className="product-meta">
                  <div className="product-meta-item">
                    Stock: <strong>{p.stock}</strong>
                  </div>
                  <div className="product-meta-item">
                    Sold: <strong>{p.sold}</strong>
                  </div>
                </div>
                <div className="product-actions">
                  <div className="prod-btn prod-btn-edit" role="button" tabIndex={0}>
                    ✏️ Edit
                  </div>
                  <div className="prod-btn prod-btn-add" role="button" tabIndex={0}>
                    + Restock
                  </div>
                </div>
              </div>
            )
          })}
          <div className="add-product-card" role="button" tabIndex={0}>
            <div style={{ fontSize: 28 }}>+</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: '#f5a623' }}>
              Add New Product
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>List a product to sell to Canada</div>
          </div>
        </div>
      </div>
    </>
  )
}
