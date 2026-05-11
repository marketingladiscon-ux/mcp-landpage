import React from 'react';
import styles from './components.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={`gold-gradient-text ${styles.vslTitle}`}>
        Muito mais que um evento, um despertar.
      </h2>
      <p className={styles.aboutText}>
        A Imersão Maternidade com Propósito é um método prático e espiritual desenhado para tirar a mãe do modo de sobrevivência. Aqui, alinhamo o seu arco para que a sua casa se torne um ambiente de paz, ordem e governo.
      </p>
    </section>
  );
}
