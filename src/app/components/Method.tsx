import React from 'react';
import styles from './components.module.css';

const areas = [
  "Identidade",
  "Casamento",
  "Filhos",
  "Maternidade",
  "Saúde",
  "Espiritualidade",
  "Intelecto",
  "Finanças",
  "Profissional",
  "Emocional"
];

export default function Method() {
  return (
    <section className={styles.methodSection}>
      <h2 className={`${styles.methodHighlight} gold-gradient-text`}>
        O que hoje tem pesado na sua vida?
      </h2>
      
      <div className={styles.methodGrid}>
        {areas.map((area, index) => (
          <div key={index} className={styles.methodCard}>
            <h3 className={styles.methodCardTitle}>{area}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              Entenda como equilibrar esta área através do nosso método focado no Despertar da Arqueira.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
