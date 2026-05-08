import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css';

const values = [
  {
    title: 'Qualité avant tout',
    desc: 'Nous sélectionnons des grains soigneusement sourcés auprès de producteurs passionnés et responsables.'
  },
  {
    title: 'Fait maison',
    desc: 'Chaque boisson est préparée à la commande avec précision, douceur et attention aux détails.'
  },
  {
    title: 'Durable & local',
    desc: 'Nous privilégions les partenaires locaux, les emballages responsables et une approche raisonnée.'
  },
  {
    title: 'Esprit Coffemel',
    desc: 'Créer un lieu chaleureux où chacun peut ralentir, se retrouver et profiter du moment.'
  },
];

function About() {
  return (
    <div className="about-page">

      {/* HERO AVEC PHOTO */}
      <section className="about__hero">
        <div className="about__hero-img">
          <img src="/pagefond.jpeg" alt="Coffemel" />
          <div className="about__hero-overlay" />
        </div>

        <motion.div
          className="about__hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="section__label" style={{ color: 'rgba(253,248,240,0.7)' }}>
            Notre histoire
          </p>

          <h1 className="section__title" style={{ color: '#FDF8F0', fontSize: 64 }}>
            Né d'un amour<br />
            <em style={{ color: '#E8CEAD' }}>
              des matins caramel.
            </em>
          </h1>

        </motion.div>
      </section>

      {/* STORY */}
      <section className="section about__story">

        <div className="about__story-grid">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="section__label">
              Qui sommes-nous
            </p>

            <h2 className="section__title">
              Un coin douillet<br />
              pour les <em>rêveurs.</em>
            </h2>

            <div className="divider" />

            <p className="about__text">
              Coffee'Mel est né d'une idée simple — créer un café qui ressemble à une maison,
              qui sent le caramel et qui donne envie de rester pour toujours.
              Chaque détail — de l'éclairage chaleureux au filet de caramel sur votre latte — est intentionnel.
            </p>

            <p className="about__text">
              Nos baristas sont des artistes. Nos ingrédients sont soigneusement sourcés.
              Et notre carte ? Une déclaration d'amour au café, au caramel et à tout ce qui est entre les deux.
            </p>

            <Link
              to="/menu"
              className="btn btn--primary"
              style={{ marginTop: 32, display: 'inline-block' }}
            >
              Découvrir la carte
            </Link>

          </motion.div>

          <motion.div
            className="about__photos"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="about__photos-grid">

              <div className="about__photo about__photo--big">
                <img src="/café6.jpeg" alt="Coffemel" />
              </div>

              <div className="about__photo about__photo--small">
                <img src="/macaron.jpeg" alt="Coffemel" />
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* VALEURS */}

      <section className="section about__values" style={{ background: '#3D2008' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="section__label" style={{ color: '#C8863C' }}>
            Nos engagements
          </p>

          <h2 className="section__title" style={{ color: '#3D2008' }}>
  L’essence de <em>Coffee'Mel.</em>
</h2>

        </motion.div>

        <div className="about__values-list">

          {values.map((v, i) => (

            <motion.div
              key={i}
              className="about__value-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >

              <div className="about__value-left">

                <span className="about__value-number">
                  0{i + 1}
                </span>

                <h3 className="about__value-title">
                  {v.title}
                </h3>

              </div>

              <p className="about__value-desc">
                {v.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default About;