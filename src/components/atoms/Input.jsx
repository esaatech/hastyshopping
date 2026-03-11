/**
 * Text input – used inside SearchBox.
 */

export function Input({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  className = 'search-input',
  ...props
}) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
