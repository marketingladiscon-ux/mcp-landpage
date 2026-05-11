import React from 'react';
import styles from './components.module.css';

export default function DiagnosticCTA() {
  return (
    <section className={styles.diagnosticSection}>
      <h2 className={styles.diagnosticTitle}>
        Descubra onde sua flecha precisa mirar
      </h2>
      <p style={{ marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto', fontSize: '1.1rem' }}>
        Antes de entrar na imersão, faça nosso diagnóstico gratuito para entender quais áreas da sua vida estão precisando de um reposicionamento estratégico.
      </p>
      
      <a 
        href="https://mcp-diagnostico.vercel.app" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.ctaButton}
        style={{ backgroundColor: 'var(--color-cream)', color: 'var(--color-olive)' }}
      >
        FAZER MEU DIAGNÓSTICO AGORA
      </a>
    </section>
  );
}
