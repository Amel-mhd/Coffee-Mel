import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2 className="footer__logo">Coffee'<span>Mel</span></h2>
          <p className="footer__tagline">
            Un endroit chaleureux où chaque tasse<br />
            raconte une histoire caramel.
          </p>
        </div>
        <div className="footer__nav">
          <p className="footer__nav-title">Navigation</p>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/reservation">Réservation</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer__info">
          <p className="footer__nav-title">Nous rendre visite</p>
          <p>12 Rue du Café, Paris</p>
          <p>Lun — Ven · 8h — 20h</p>
          <p>Sam — Dim · 9h — 21h</p>
          <p style={{ marginTop: 12 }}>contact@coffemel.fr</p>
          <p>+33 1 23 45 67 89</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2026 Coffee'Mel — Tous droits réservés</p>
        <p>Fait avec ☕ & amour</p>
      </div>
    </footer>
  );
}

export default Footer;