import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">Coffee'<span>Mel</span></Link>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <li><Link to="/" className={`navbar__link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link></li>
        <li><Link to="/menu" className={`navbar__link ${location.pathname === '/menu' ? 'active' : ''}`}>Menu</Link></li>
        <li><Link to="/about" className={`navbar__link ${location.pathname === '/about' ? 'active' : ''}`}>À propos</Link></li>
        <li><Link to="/contact" className={`navbar__link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
      </ul>

      <Link to="/reservation" className="navbar__cta">Réserver</Link>

      <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}

export default Navbar;