import React from 'react';
import styles from './components.module.css';

export default function Bio() {
  return (
    <section className={styles.bioSection}>
      <h2 className={`gold-gradient-text ${styles.vslTitle}`}>
        Sua Mentora
      </h2>
      <p className={styles.bioContent}>
        Sonja Chacon é mentora de mães, esposa e estrategista familiar. Fundadora do método MCP, dedica a sua vida a levantar um exército de mulheres que governam os seus lares com sabedoria e autoridade.
      </p>
    </section>
  );
}
