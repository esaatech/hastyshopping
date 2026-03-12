/**
 * Top nav – logo, links, currency, login/signup or dashboard/signout when authenticated.
 */

import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../atoms/Logo.jsx';
import { NAV_LINKS } from '../../constants/hero.js';
import { useAuth } from '../../context/AuthContext.jsx';

export function Navbar() {
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  const dashboardPath = profile?.role === 'seller' ? '/seller/dashboard' : '/';

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Logo />
      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <a key={link} className="nav-link" href="#">
            {link}
          </a>
        ))}
      </div>
      <div className="nav-actions">
        <div className="currency-toggle">🌍 NGN / USD</div>
        {user ? (
          <>
            <Link to={dashboardPath} className="btn-login">
              Dashboard
            </Link>
            <button type="button" className="btn-signup" onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-login">
              Log In
            </Link>
            <Link to="/signup" className="btn-signup">
              Sign Up Free
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
