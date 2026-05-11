import React from 'react';
import styles from './components.module.css';

export default function Checkout() {
  return (
    <section id="checkout" className={styles.checkoutSection}>
      <div className={styles.checkoutCard}>
        <h2 style={{ color: 'var(--color-olive)', fontSize: '2rem' }}>
          Garantir Meu Lugar
        </h2>
        
        <div className={`${styles.checkoutPrice} gold-gradient-text`}>
          R$ 127,90
        </div>
        
        <p className={styles.checkoutScarcity}>
          Valor promocional para as primeiras inscritas da lista.
        </p>
        
        <button className={styles.ctaButton} style={{ width: '100%' }}>
          COMPRAR AGORA
        </button>
      </div>
    </section>
  );
}
