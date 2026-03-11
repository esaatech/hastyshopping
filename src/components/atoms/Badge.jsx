/**
 * Small label/badge – e.g. LIVE, Verified, hero badge.
 */

export function Badge({ children, variant = 'default', className = '', ...props }) {
  const variantClass =
    variant === 'live' ? 'logo-badge' : variant === 'hero' ? 'hero-badge' : 'seller-badge';
  return (
    <span className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
