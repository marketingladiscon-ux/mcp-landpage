"use client";

import React, { useState, useEffect } from 'react';
import styles from './components.module.css';

const testimonialsData = [
  {
    name: "Amanda Costa",
    role: "Arqueira da Turma 1",
    text: "O método MCP transformou a rotina da minha casa. Antes era grito e confusão, agora consigo ter ordem e paz até mesmo nos dias difíceis.",
    initials: "AC"
  },
  {
    name: "Juliana Mendes",
    role: "Mãe de 3",
    text: "Eu achava que não tinha tempo para mim. A Sonja me mostrou que o autocuidado não é egoísmo, mas sim munição para o meu arco. Recomendo de olhos fechados!",
    initials: "JM"
  },
  {
    name: "Fernanda Lima",
    role: "Arqueira da Turma 1",
    text: "A clareza espiritual que ganhei nesta imersão não tem preço. Consegui alinhar meu casamento e trazer Deus de volta para o centro das nossas decisões.",
    initials: "FL"
  },
  {
    name: "Carla Ribeiro",
    role: "Empreendedora e Mãe",
    text: "Conciliar negócios e filhos parecia impossível. A estrutura que recebi no Despertar me deu a direção exata de como governar os dois com excelência.",
    initials: "CR"
  },
  {
    name: "Beatriz Nogueira",
    role: "Arqueira da Turma 2",
    text: "Nunca fui de comprar cursos, mas essa imersão é um divisor de águas. O pilar das finanças destravou algo que eu nem sabia que precisava organizar.",
    initials: "BN"
  },
  {
    name: "Priscila Santos",
    role: "Mãe de 1",
    text: "Simples, direto e profundo. A Sonja fala a nossa língua e não julga. Saí do evento com um plano de ação claro para a minha casa.",
    initials: "PS"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Muda de 3 em 3. Se estiver no 3, volta pro 0. Se estivesse numa tela pequena, poderia mudar de 1 em 1.
      setCurrentIndex((prevIndex) => {
        // Se a tela for pequena (mobile), muda 1 por vez. Se for desktop, 3.
        const step = window.innerWidth <= 768 ? 1 : 3;
        const maxIndex = testimonialsData.length - step;
        return prevIndex >= maxIndex ? 0 : prevIndex + step;
      });
    }, 10000); // 10 segundos
    return () => clearInterval(timer);
  }, []);

  // Lógica de slider via CSS Transform
  const transformValue = `translateX(calc(-${currentIndex} * (33.333%)))`;
  
  // Para mobile seria 100%, mas podemos resolver de forma simples:
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const mobileTransformValue = `translateX(calc(-${currentIndex} * 100%))`;

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={`gold-gradient-text ${styles.vslTitle}`}>
        Resultados das Arqueiras
      </h2>
      
      <div className={styles.carouselContainer}>
        <div 
          className={styles.carouselTrack} 
          style={{ transform: isMobile ? mobileTransformValue : transformValue }}
        >
          {testimonialsData.map((t, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <div className={styles.testimonialText}>
                "{t.text}"
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.initials}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
