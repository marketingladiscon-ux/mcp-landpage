import React from 'react';
import styles from './components.module.css';

export default function DiagnosticCTA() {
  return (
    <section className={styles.diagnosticSection}>
      <h2 className={`${styles.diagnosticTitle} gold-gradient-text`}>
        Como está a sua estrutura hoje?
      </h2>
      <p className={styles.diagnosticSubtitle}>
        Não avance sem antes saber onde o seu arco está a falhar.
      </p>
      
      <a 
        href="https://maternidade-com-proposito.vercel.app/#" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.ctaButton}
        style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-olive)' }}
      >
        FAZER MEU DIAGNÓSTICO AGORA
      </a>
    </section>
  );
}
