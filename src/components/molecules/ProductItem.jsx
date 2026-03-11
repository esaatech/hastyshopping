/**
 * Single product cell – emoji, name, price.
 */

export function ProductItem({ emoji, name, price, onClick }) {
  return (
    <div className="product-item" role="button" tabIndex={0} onClick={onClick} onKeyDown={(e) => e.key === 'Enter' && onClick?.(e)}>
      <span className="product-emoji">{emoji}</span>
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
    </div>
  );
}
