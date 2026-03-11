/**
 * Top nav – logo, links, currency, login/signup.
 */

import { Link } from 'react-router-dom';
import { Logo } from '../atoms/Logo.jsx';
import { NAV_LINKS } from '../../constants/hero.js';

export function Navbar() {
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
        <Link to="/login" className="btn-login">
          Log In
        </Link>
        <Link to="/signup" className="btn-signup">
          Sign Up Free
        </Link>
      </div>
    </nav>
  );
}
