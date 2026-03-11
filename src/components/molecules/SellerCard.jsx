/**
 * Featured seller card – avatar, name, products grid, delivery, CTA.
 */

import { ProductItem } from './ProductItem.jsx';
import { Button } from '../atoms/Button.jsx';

export function SellerCard({ seller }) {
  const { name, location, badge, avatarEmoji = '🏪', products = [], delivery } = seller;
  return (
    <div className="seller-card">
      <div className="seller-header">
        <div className="seller-avatar">{avatarEmoji}</div>
        <div className="seller-info">
          <div className="seller-name">{name}</div>
          <div className="seller-location">{location}</div>
        </div>
        {badge && <span className="seller-badge">{badge}</span>}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductItem
            key={product.name}
            emoji={product.emoji}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>

      <div className="card-footer">
        <div className="delivery-info">
          <span className="delivery-icon">✈️</span>
          <span>{delivery?.text ?? 'Ships to Canada'}</span>
          {delivery?.days && (
            <>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>•</span>
              <span style={{ color: 'var(--green-bright)' }}>{delivery.days}</span>
            </>
          )}
        </div>
        <Button variant="order">Order Now</Button>
      </div>
    </div>
  );
}
