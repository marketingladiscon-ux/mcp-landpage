import React from 'react';
import styles from './components.module.css';

export default function Checkout() {
  return (
    <section id="checkout" className={styles.checkoutSection}>
      <h2 className={`gold-gradient-text`} style={{ fontSize: '3rem', textAlign: 'center' }}>
        Sua vaga na próxima Aljava
      </h2>
      <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
        Imersão Presencial - 22 de Agosto de 2026
      </p>

      <div className={styles.checkoutCard}>
        <div className={`${styles.checkoutPrice} gold-gradient-text`}>
          R$ 127,90
        </div>
        
        <p className={styles.checkoutScarcity}>
          Valor promocional de lançamento.
        </p>
        
        <a href="https://forms.gle/ZCgALe3oR6pNRsSA9" target="_blank" rel="noopener noreferrer" className={styles.ctaButton} style={{ width: '100%', display: 'block' }}>
          GARANTIR MINHA VAGA AGORA
        </a>
      </div>
    </section>
  );
}
