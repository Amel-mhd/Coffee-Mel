import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Menu.css';

const categories = ['Tout', 'Boissons chaudes', 'Boissons froides', 'À manger', 'Signatures'];

const menuData = [
  // Boissons chaudes
  { id: 1, name: 'Espresso', cat: 'Boissons chaudes', price: 2.80, desc: 'Arabica sélectionné, torréfaction artisanale', img: '/café13.jpeg', origin: 'Éthiopie & Colombie' },
  { id: 2, name: 'Cappuccino', cat: 'Boissons chaudes', price: 4.50, desc: 'Espresso, mousse de lait onctueuse, cacao', img: '/café11.jpeg', origin: 'Italie' },
  { id: 3, name: 'Flat white miel', cat: 'Boissons chaudes', price: 5.80, desc: 'Double ristretto, lait vapeur velouté, miel d\'acacia', img: '/café12.jpeg', origin: 'Australie' },
  { id: 4, name: 'Chai latte', cat: 'Boissons chaudes', price: 5.20, desc: 'Mélange d\'épices masala, lait d\'avoine vapeur, cannelle', img: '/café8.jpeg', origin: 'Inde' },

  // Boissons froides
  { id: 5, name: 'Latte caramel glacé', cat: 'Boissons froides', price: 6.50, desc: 'Espresso, lait d\'avoine, sirop caramel maison, glaçons', img: '/café7.jpeg', tag: 'Bestseller', origin: 'Notre recette signature' },
  { id: 6, name: 'Iced caramel macchiato', cat: 'Boissons froides', price: 6.80, desc: 'Vanille, lait, espresso versé, filet de caramel', img: '/café10.jpeg', tag: 'Bestseller', origin: 'Notre recette' },
  { id: 7, name: 'Cold brew caramel', cat: 'Boissons froides', price: 5.80, desc: 'Café infusé à froid 12h, sirop caramel, lait de coco', img: '/café9.jpeg', origin: 'Slow coffee' },
  { id: 8, name: 'Matcha brun glacé', cat: 'Boissons froides', price: 6.20, desc: 'Matcha de cérémonie, sucre brun, lait d\'avoine, glaçons', img: '/café18.jpeg', tag: 'Nouveau', origin: 'Japon' },
  { id: 9, name: 'Americano glacé', cat: 'Boissons froides', price: 4.80, desc: 'Double espresso allongé, glaçons, eau fraîche', img: '/café14.jpeg', origin: 'Classique' },

  // À manger
  { id: 10, name: 'Cookie chocolat', cat: 'À manger', price: 3.20, desc: 'Cookie fondant, pépites de chocolat noir, fleur de sel', img: '/cookie.jpeg', origin: 'Fait maison' },
  { id: 11, name: 'Gaufre caramel', cat: 'À manger', price: 5.50, desc: 'Gaufre croustillante, caramel maison, sucre glace', img: '/gaufre.jpeg', tag: 'Nouveau', origin: 'Fait maison' },
  { id: 12, name: 'Cinnamon roll', cat: 'À manger', price: 4.80, desc: 'Roulé à la cannelle, glaçage vanille, noix de pécan', img: '/cinnamon.jpeg', origin: 'Scandinave' },
  { id: 13, name: 'Croissant au beurre', cat: 'À manger', price: 3.80, desc: 'Feuilletage pur beurre, doré au four chaque matin', img: '/croissant.jpeg', origin: 'Boulangerie partenaire' },
  { id: 14, name: 'Mille-feuille', cat: 'À manger', price: 5.20, desc: 'Feuilletage croustillant, crème pâtissière vanille, glaçage royal', img: '/millefeuille.jpeg', origin: 'Pâtisserie française' },
  { id: 15, name: 'Beignets fourrés', cat: 'À manger', price: 4.50, desc: 'Beignets moelleux fourrés à la confiture de fraise ou crème caramel', img: '/beignet.jpeg', tag: 'Nouveau', origin: 'Fait maison' },

  // Signatures
  { id: 16, name: 'Coffemel Special', cat: 'Signatures', price: 8.00, desc: 'Espresso, lait concentré, caramel, mousse salée caramel. Notre création la plus emblématique — une explosion de douceur et d\'intensité dans chaque gorgée.', img: '/café3.jpeg', tag: 'Signature', origin: 'Exclusivité Coffemel' },
  { id: 17, name: 'Latte caramel glacé', cat: 'Signatures', price: 6.50, desc: 'Espresso double, lait d\'avoine, sirop caramel maison et glaçons. Le rituel de l\'été, celui dont on ne peut plus se passer.', img: '/café7.jpeg', tag: 'Bestseller', origin: 'Notre recette signature' },
];

function Menu() {
  const [active, setActive] = useState('Tout');

  const filtered = active === 'Tout' ? menuData : menuData.filter(i => i.cat === active);
  const isSignatures = active === 'Signatures';

  return (
    <div className="menu-page">

      <section className="page-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <p className="section__label">Ce qu'on prépare</p>
          <h1 className="section__title">Notre <em>carte</em></h1>
          <div className="divider" />
          <p className="section__subtitle">
            Chaque boisson est préparée à la commande avec des ingrédients soigneusement sélectionnés et beaucoup d'amour caramel.
          </p>
        </motion.div>
      </section>

      {/* BANNIÈRE CAFÉ */}
      <div className="menu__coffee-banner">
        <div className="menu__coffee-banner-inner">
          <span className="menu__coffee-banner-icon">☕</span>
          <div className="menu__coffee-info">
            <span>Origine : <strong>Éthiopie & Colombie</strong></span>
            <span>Notes : <strong>Caramel · Noisette · Chocolat noir</strong></span>
            <span>Torréfaction : <strong>Artisanale</strong></span>
            <span>Certification : <strong>Commerce équitable</strong></span>
          </div>
        </div>
      </div>

      <section className="section menu-section">

        {/* CATEGORIES */}
        <div className="menu__cats">
          {categories.map(cat => (
            <button
              key={cat}
              className={`menu__cat ${active === cat ? 'menu__cat--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID NORMAL */}
        {!isSignatures && (
          <div className="menu__grid">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className="menu-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                {item.tag && <span className="menu-card__tag">{item.tag}</span>}
                <div className="menu-card__img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="menu-card__body">
                  <p className="menu-card__origin">{item.origin}</p>
                  <h3 className="menu-card__name">{item.name}</h3>
                  <p className="menu-card__desc">{item.desc}</p>
                  <p className="menu-card__price">{item.price.toFixed(2)} €</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* GRID SIGNATURES */}
        {isSignatures && (
          <div className="menu__grid--signatures">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className={`menu-card--signature ${i % 2 !== 0 ? 'menu-card--signature-reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="signature__img">
                  <img src={item.img} alt={item.name} />
                  {item.tag && <span className="signature__tag">{item.tag}</span>}
                </div>
                <div className="signature__info">
                  <p className="menu-card__origin">{item.origin}</p>
                  <h3 className="signature__name">{item.name}</h3>
                  <div className="divider" />
                  <p className="signature__desc">{item.desc}</p>
                  <p className="signature__price">{item.price.toFixed(2)} €</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </section>
    </div>
  );
}

export default Menu;