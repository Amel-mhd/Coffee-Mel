import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Reservation.css';

const TIMES = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
const GUESTS = ['1 personne', '2 personnes', '3 personnes', '4 personnes', '5 personnes', '6+ personnes'];

function Reservation() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: ''
  });

  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="reservation-page">
        <section className="page-hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ fontSize: 60 }}>☕</span>

            <h1 className="section__title" style={{ marginTop: 20 }}>
              À très <em>bientôt !</em>
            </h1>

            <p className="section__subtitle">
              Votre table est réservée. Nous avons hâte de vous accueillir chez Coffemel.<br />
              Un e-mail de confirmation a été envoyé à {form.email}.
            </p>

            <button
              className="btn btn--primary"
              style={{ marginTop: 32 }}
              onClick={() => setConfirmed(false)}
            >
              Faire une nouvelle réservation
            </button>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="reservation-page">

      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="section__label">Réservez votre table</p>

          <h1 className="section__title">
            Réserver une <em>table</em>
          </h1>

          <div className="divider" />

          <p className="section__subtitle">
            Réservez votre coin cosy chez Coffemel. Nous préparerons votre boisson préférée.
          </p>

        </motion.div>
      </section>

      <section className="section reservation__section">
        <div className="reservation__grid">

          <motion.form
            className="reservation__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="reservation__form-row">
              <div className="form-field">
                <label className="form-label">Nom complet *</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label">Email *</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="reservation__form-row">
              <div className="form-field">
                <label className="form-label">Date *</label>
                <input
                  className="form-input"
                  type="date"
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label">Téléphone</label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="+33 6 00 00 00 00"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Heure *</label>

              <div className="reservation__times">
                {TIMES.map(t => (
                  <button
                    key={t}
                    type="button"
                    className={`reservation__time ${form.time === t ? 'reservation__time--active' : ''}`}
                    onClick={() => setForm({ ...form, time: t })}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Nombre de personnes *</label>

              <div className="reservation__guests">
                {GUESTS.map(g => (
                  <button
                    key={g}
                    type="button"
                    className={`reservation__guest ${form.guests === g ? 'reservation__guest--active' : ''}`}
                    onClick={() => setForm({ ...form, guests: g })}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Demandes spéciales</label>
              <textarea
                className="form-input form-textarea"
                placeholder="Allergies, occasion spéciale, préférences..."
                value={form.notes}
                onChange={e => setForm({ ...form, notes: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn--primary" style={{ marginTop: 8 }}>
              Confirmer la réservation
            </button>

          </motion.form>

          <motion.div
            className="reservation__info"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <div className="reservation__info-card">
              <span style={{ fontSize: 40 }}>🕐</span>
              <h3>Horaires d’ouverture</h3>
              <p>
                Lundi — Vendredi<br />
                <strong>8:00 — 20:00</strong>
              </p>
              <p>
                Samedi — Dimanche<br />
                <strong>9:00 — 21:00</strong>
              </p>
            </div>

            <div className="reservation__info-card">
              <span style={{ fontSize: 40 }}>📍</span>
              <h3>Nous trouver</h3>
              <p>
                12 Rue du Café<br />
                75001 Paris, France
              </p>
            </div>

            <div className="reservation__info-card">
              <span style={{ fontSize: 40 }}>💛</span>
              <h3>Bon à savoir</h3>
              <p>
                Les réservations sont gardées 15 minutes. Les sans-réservation sont toujours les bienvenus !
              </p>
            </div>

          </motion.div>

        </div>
      </section>
    </div>
  );
}

export default Reservation;