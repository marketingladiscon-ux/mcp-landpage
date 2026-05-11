import React from 'react';
import styles from './components.module.css';

export default function VideoSalesLetter() {
  return (
    <section className={styles.vslSection}>
      <h2 className={`${styles.vslTitle} gold-gradient-text`}>
        Assista e entenda o seu novo tempo.
      </h2>
      
      <div className={styles.vslContainer}>
        {/* Aqui o iframe do YouTube ou Vimeo seria inserido. */}
        <span className={styles.vslPlaceholderText}>
          [Player de Vídeo - VSL]
        </span>
      </div>
    </section>
  );
}
