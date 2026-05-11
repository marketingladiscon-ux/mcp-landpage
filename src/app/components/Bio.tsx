import React from 'react';
import styles from './components.module.css';

export default function Bio() {
  return (
    <section className={styles.bioSection}>
      <div className={styles.bioContainer}>
        
        {/* Esquerda: Imagem */}
        <div className={styles.bioImageContainer}>
          <img 
            src="/sonja-chacon-recorte.png" 
            alt="Sonja Chacon" 
            className={styles.bioImage}
          />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'var(--color-gold)', fontStyle: 'italic', fontSize: '0.9rem', opacity: 0.8 }}>
            "SUA CASA É O SEU MAIOR PROJETO."
          </div>
        </div>

        {/* Direita: Texto */}
        <div className={styles.bioContent}>
          <div className={styles.bioOverline}>Quem te guia</div>
          <h2 className={`${styles.bioTitle} gold-gradient-text`}>
            EU SEI O QUE É CARREGAR O MUNDO NAS COSTAS.
          </h2>
          
          <div className={styles.bioQuote}>
            "Por muito tempo, acreditei que ser uma 'boa mãe' era sinônimo de exaustão. Que o cansaço era o preço a se pagar pelo amor."
          </div>
          
          <div className={styles.bioQuote}>
            "Mas descobri que Deus não nos chamou para o esgotamento, mas para a PLENITUDE COM ORDEM. O MCP nasceu da necessidade de dar às mulheres uma estrutura que sustente sua fé, sua casa e seu futuro."
          </div>

          <div className={styles.bioQuote}>
            "Não sou uma coach de produtividade. Sou uma mãe que encontrou o centro e quer te ajudar a fazer o mesmo."
          </div>

          <div className={styles.bioSignature}>
            <div className={styles.bioName}>Sonja Chacon</div>
            <div className={styles.bioRole}>Fundadora do Maternidade com Propósito</div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
