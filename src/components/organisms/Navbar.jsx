/**
 * Top nav – logo, links, currency, login/signup.
 */

import { Logo } from '../atoms/Logo.jsx';
import { Button } from '../atoms/Button.jsx';
import { NAV_LINKS } from '../../constants/hero.js';

export function Navbar({ loaded }) {
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
        <Button variant="login">Log In</Button>
        <Button variant="signup">Sign Up Free</Button>
      </div>
    </nav>
  );
}
