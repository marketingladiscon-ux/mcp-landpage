"use client";

import React, { useState, useEffect } from 'react';
import styles from './components.module.css';

const prints = [
  "print-1.png",
  "print-2.png",
  "print-3.png",
  "print-4.png",
  "print-5.png"
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % prints.length);
    }, 5000); // 5 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={`gold-gradient-text ${styles.vslTitle}`}>
        Resultados das Arqueiras
      </h2>
      
      <div className={styles.carouselContainer}>
        {prints.map((print, index) => (
          <img
            key={index}
            src={`/${print}`}
            alt={`Depoimento ${index + 1}`}
            className={`${styles.carouselImage} ${index === currentIndex ? styles.carouselImageActive : ''}`}
            onError={(e) => {
              // Placeholder caso a imagem não exista
              e.currentTarget.style.display = 'none';
            }}
          />
        ))}
        {/* Fallback de texto caso as imagens não carreguem */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#666' }}>
          [Espaço reservado para: {prints[currentIndex]}]
        </div>
      </div>
    </section>
  );
}
