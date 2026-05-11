import React from 'react';
import styles from './components.module.css';

const areas = [
  "Espiritualidade",
  "Casamento",
  "Filhos",
  "Lar",
  "Mente",
  "Autocuidado",
  "Profissional",
  "Intelectual",
  "Social",
  "Finanças"
];

export default function Method() {
  return (
    <section className={styles.methodSection}>
      <h2 className={`${styles.methodHighlight} gold-gradient-text`}>
        Os Pilares do Método
      </h2>
      
      <div className={styles.methodGrid}>
        {areas.map((area, index) => (
          <div key={index} className={styles.methodCard}>
            <h3 className={styles.methodCardTitle}>{area}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
