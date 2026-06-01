import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HOSPITAL_NAME, PHONE_LINK, WHATSAPP_LINK } from '../data/site';
import { images } from '../data/images';
import '../styles/navbar.css';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/#about', label: 'About', isHash: true },
  { to: '/doctors', label: 'Doctors' },
  { to: '/services', label: 'Services' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/#contact', label: 'Contact', isHash: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const handleHashClick = (hash) => (e) => {
    if (location.pathname !== '/') {
      return;
    }
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__brand" onClick={closeMenu}>
            <img
              src={images.logo}
              alt=""
              className="navbar__logo"
              width={48}
              height={48}
              decoding="async"
            />
            <span className="navbar__name">{HOSPITAL_NAME}</span>
          </Link>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="visually-hidden">
              {menuOpen ? 'Close menu' : 'Open menu'}
            </span>
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </button>

          <div
            id="main-nav-menu"
            className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}
          >
            <ul className="navbar__links">
              {navItems.map(({ to, label, end, isHash }) => (
                <li key={to}>
                  {isHash ? (
                    <a
                      href={to}
                      className="navbar__link"
                      onClick={handleHashClick(to.replace('/#', ''))}
                    >
                      {label}
                    </a>
                  ) : (
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        `navbar__link${isActive ? ' navbar__link--active' : ''}`
                      }
                      onClick={closeMenu}
                    >
                      {label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="navbar__actions">
              <a href={PHONE_LINK} className="btn btn--primary btn--sm navbar__call">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
