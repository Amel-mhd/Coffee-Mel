import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero__left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="hero__issue">Nº 01 · Printemps 2026</p>

            <h1 className="hero__title">
              L'art du café<br />
              <em>à l'italienne.</em>
            </h1>

            <p className="hero__subtitle">
              Café artisanal, caramel maison et instants cosy.<br />
              Bienvenue chez Coffee'Mel.
            </p>

            <div className="hero__actions">
              <Link to="/menu" className="btn btn--primary">
                Découvrir le menu
              </Link>
              <Link to="/reservation" className="btn btn--primary">
                Réserver une table
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="hero__photo-grid">
            <div className="hero__photo hero__photo--big">
              <img src="/café1.jpeg" alt="Café signature Coffee'Mel" />
              <div className="hero__photo-label">Notre signature</div>
            </div>

            <div className="hero__photo-col">
              <div className="hero__photo hero__photo--small">
                <img src="/café2.jpeg" alt="Café latte Coffee'Mel" />
              </div>

              <div className="hero__photo-quote">
                <p>"Chaque tasse,<br />une histoire."</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BANDEAU */}
      <div className="home__ticker">
        {[
          'Café artisanal',
          'Caramel maison',
          'Latte glacé',
          'Cosy & chaleureux',
          'Paris 1er',
          'Ouvert 7j/7',
          'Café artisanal',
          'Caramel maison',
          'Latte glacé',
          'Cosy & chaleureux'
        ].map((t, i) => (
          <span key={i}>{t} &nbsp;·&nbsp; </span>
        ))}
      </div>

      {/* EDITORIAL */}
      <section className="section home__editorial">
        <div className="home__editorial-grid">

          <motion.div
            className="editorial__big"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="editorial__img-wrap">
              <img src="/café3.jpeg" alt="Latte caramel glacé" />
              <div className="editorial__img-tag">Bestseller</div>
            </div>

            <div className="editorial__caption">
              <p className="editorial__caption-label">La boisson du moment</p>
              <h3 className="editorial__caption-title">Latte caramel glacé</h3>
              <p className="editorial__caption-desc">
                Espresso, lait d'avoine, sirop caramel maison et glaçons.
                Le rituel de l'été.
              </p>
              <Link to="/menu" className="editorial__link">
                Voir le menu →
              </Link>
            </div>
          </motion.div>

          <div className="editorial__col">
            <motion.div
              className="editorial__small"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="editorial__img-wrap editorial__img-wrap--small">
                <img src="/interior.jpeg" alt="Intérieur du café Coffee'Mel" />
              </div>

              <div className="editorial__caption">
                <p className="editorial__caption-label">Notre ambiance</p>
                <h3 className="editorial__caption-title">Un coin rien que pour vous</h3>
                <p className="editorial__caption-desc">
                  Lumière tamisée, coussins doux et la musique du café.
                  Votre refuge.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="editorial__quote-block"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="editorial__quote-mark">"</span>
              <p className="editorial__quote-text">
                La vie est trop courte pour un mauvais café.
              </p>
              <p className="editorial__quote-author">— Coffee'Mel</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="home__strip">
        <motion.div
          className="home__strip-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="section__label">Notre philosophie</p>

          <h2 className="section__title">
            Plus qu'un café,<br />
            <em>une expérience.</em>
          </h2>

          <div className="divider" />

          <p className="section__subtitle">
            Chaque détail chez Coffee'Mel est pensé pour vous faire sentir chez vous.
            De la sélection des grains au caramel maison versé délicatement sur votre latte,
            nous imaginons chaque boisson comme un petit moment de douceur.
          </p>

          <p className="section__subtitle home__strip-extra">
            Ici, on prend le temps : celui de préparer, de savourer, de discuter,
            ou simplement de ralentir. Notre café est un refuge chaleureux,
            pensé pour les matins pressés comme pour les après-midis qui s’étirent.
          </p>

          <Link
            to="/about"
            className="btn btn--dark"
            style={{ marginTop: 32, display: 'inline-block' }}
          >
            Notre histoire
          </Link>
        </motion.div>

        <motion.div
          className="home__strip-photo"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src="/café4.jpeg" alt="Coffee'Mel" />

          <div className="home__strip-photo-overlay">
            <p>Ouvert tous les jours</p>
            <p className="home__strip-hours">8h — 21h</p>
          </div>
        </motion.div>
      </section>

      {/* MENU APERÇU */}
      <section className="section home__menu-preview">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="home__menu-header"
        >
          <p className="section__label">Ce qu'on prépare</p>
          <h2 className="section__title">
            Nos <em>incontournables sucrés</em>
          </h2>
        </motion.div>

        <div className="home__menu-grid">
          {[
            { img: '/gaufre.jpeg', name: 'Gaufre caramel', price: '5,50 €', tag: 'Nouveau' },
            { img: '/cookie.jpeg', name: 'Cookie chocolat', price: '3,20 €', tag: null }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="menu-preview-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {item.tag && (
                <span className="menu-preview-card__tag">
                  {item.tag}
                </span>
              )}

              <div className="menu-preview-card__img">
                <img src={item.img} alt={item.name} />
              </div>

              <h3 className="menu-preview-card__name">{item.name}</h3>
              <p className="menu-preview-card__price">{item.price}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <Link to="/menu" className="btn btn--outline">
            Voir toute la carte →
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="home__cta">
        <div className="home__cta-bg">
          <img src="/café1.jpeg" alt="Coffee'Mel" />
        </div>

        <div className="home__cta-overlay" />

        <motion.div
          className="home__cta-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="section__label"
            style={{ color: 'rgba(253,248,240,0.7)' }}
          >
            Votre coin douillet vous attend
          </p>

          <h2 className="section__title" style={{ color: '#FDF8F0' }}>
            Réservez votre<br />
            <em style={{ color: '#E8CEAD' }}>moment café.</em>
          </h2>

          <Link
            to="/reservation"
            className="btn btn--primary"
            style={{ marginTop: 32, display: 'inline-block' }}
          >
            Réserver une table
          </Link>
        </motion.div>
      </section>

    </div>
  );
}

export default Home;