import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {

  const [form, setForm] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const infos = [
    {
      icon: '✉',
      label: 'Email',
      val: 'contact@coffeemel.fr'
    },
    {
      icon: '☎',
      label: 'Téléphone',
      val: '+33 1 23 45 67 89'
    },
    {
      icon: '📍',
      label: 'Adresse',
      val: '12 Rue du Café, 75001 Paris'
    },
    {
      icon: '🕐',
      label: 'Horaires',
      val: 'Lun–Ven 8h–20h · Sam–Dim 9h–21h'
    }
  ];

  return (
    <div className="contact-page">

      <section className="page-hero">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="section__label">
            Contact
          </p>

          <h1 className="section__title">
            Parlons autour<br />
            d’un <em>bon café.</em>
          </h1>

          <div className="divider" />

          <p className="section__subtitle">
            Une question, une collaboration ou simplement envie de nous écrire ?
            Nous vous répondrons sous 24 heures.
          </p>

        </motion.div>

      </section>

      <section className="section contact__section">

        <div className="contact__grid">

          {/* INFOS */}

          <motion.div
            className="contact__infos"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="contact__infos-title">
              Venez nous voir ☕
            </h2>

            {infos.map((item, i) => (

              <motion.div
                key={i}
                className="contact__info-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >

                <span className="contact__info-icon">
                  {item.icon}
                </span>

                <div>
                  <p className="contact__info-label">
                    {item.label}
                  </p>

                  <p className="contact__info-val">
                    {item.val}
                  </p>
                </div>

              </motion.div>

            ))}

            <div className="contact__social">

              <p
                className="contact__info-label"
                style={{ marginBottom: 16 }}
              >
                Suivez-nous
              </p>

              <div className="contact__social-links">

                <a href="/" className="contact__social-link">
                  Instagram
                </a>

                <a href="/" className="contact__social-link">
                  TikTok
                </a>

                <a href="/" className="contact__social-link">
                  Pinterest
                </a>

              </div>

            </div>

          </motion.div>

          {/* FORMULAIRE */}

          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            {sent ? (

              <div className="contact__sent">

                <span style={{ fontSize: 54 }}>
                  ☕
                </span>

                <h3>
                  Message envoyé !
                </h3>

                <p>
                  Merci pour votre message. Nous revenons vers vous rapidement.
                </p>

              </div>

            ) : (

              <form
                className="contact__form"
                onSubmit={handleSubmit}
              >

                <h2 className="contact__form-title">
                  Envoyer un message
                </h2>

                <div className="contact__form-row">

                  <div className="form-field">

                    <label className="form-label">
                      Nom *
                    </label>

                    <input
                      className="form-input"
                      type="text"
                      placeholder="Votre nom"
                      required
                      value={form.nom}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          nom: e.target.value
                        })
                      }
                    />

                  </div>

                  <div className="form-field">

                    <label className="form-label">
                      Email *
                    </label>

                    <input
                      className="form-input"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value
                        })
                      }
                    />

                  </div>

                </div>

                <div className="form-field">

                  <label className="form-label">
                    Sujet
                  </label>

                  <input
                    className="form-input"
                    type="text"
                    placeholder="Quel est le sujet ?"
                    value={form.sujet}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        sujet: e.target.value
                      })
                    }
                  />

                </div>

                <div className="form-field">

                  <label className="form-label">
                    Message *
                  </label>

                  <textarea
                    className="form-input form-textarea"
                    placeholder="Écrivez votre message..."
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value
                      })
                    }
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn--primary"
                >
                  Envoyer le message
                </button>

              </form>

            )}

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default Contact;