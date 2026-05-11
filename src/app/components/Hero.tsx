import React from 'react';
import Image from 'next/image';
import styles from './components.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Imagem de Fundo (definida no CSS) */}
      
      {/* Logo */}
      <img 
        src="/MCP-Agosto/logo-mcp-ouro.png" 
        alt="Maternidade com Propósito" 
        className={styles.heroLogo} 
      />

      {/* Elementos Decorativos */}
      <img 
        src="/MCP-Agosto/elemento-flecha-ouro.png" 
        alt="" 
        className={styles.heroLeaves}
      />
      <img 
        src="/MCP-Agosto/sonja-chacon-recorte.png" 
        alt="Sonja Chacon" 
        className={styles.heroSonja}
      />

      <div className={styles.heroContent}>
        <h1 className={`${styles.heroTitle} gold-gradient-text`}>
          PRÓXIMA IMERSÃO: O DESPERTAR DA ARQUEIRA.
        </h1>
        <h2 className={styles.heroSubtitle}>
          22 de Agosto | 13h às 20h | Lounge Yázigi
        </h2>
        
        <a href="#checkout" className={styles.ctaButton}>
          QUERO MEU LUGAR NA ALJAVA
        </a>
      </div>
    </section>
  );
}
