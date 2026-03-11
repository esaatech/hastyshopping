/**
 * Reusable button – variants: primary, secondary, login, signup, browse, order.
 */

export function Button({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    login: 'btn-login',
    signup: 'btn-signup',
    browse: 'btn-browse',
    order: 'btn-order',
  }[variant] || 'btn-primary';

  return (
    <button
      type={type}
      className={`${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
