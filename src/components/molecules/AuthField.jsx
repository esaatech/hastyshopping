/**
 * Auth form field – label, icon, input area, optional error and right slot (e.g. password toggle).
 * Reused on login and signup for consistent UI.
 */

export function AuthField({
  label,
  error,
  hasError,
  icon,
  children,
  rightElement,
  id,
}) {
  return (
    <div className="field">
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={`field-input-wrap${hasError ? ' err' : ''}`}>
        {icon && <span className="field-icon" aria-hidden>{icon}</span>}
        {children}
        {rightElement}
      </div>
      {error && (
        <div className="field-error" role="alert">
          ⚠️ {error}
        </div>
      )}
    </div>
  );
}
