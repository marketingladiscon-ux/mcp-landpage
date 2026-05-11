"use client";

import React, { useState } from 'react';
import styles from './components.module.css';

const faqs = [
  {
    question: "Onde será o local?",
    answer: "A imersão acontecerá no Lounge Yázigi."
  },
  {
    question: "Qual o horário?",
    answer: "Das 13h às 20h."
  },
  {
    question: "Posso levar crianças?",
    answer: "Não é recomendado, pois o conteúdo exige foco e imersão total."
  },
  {
    question: "O material está incluso?",
    answer: "Sim, todo o material necessário para a imersão está incluso."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={`gold-gradient-text ${styles.vslTitle}`} style={{ textAlign: 'center' }}>
        Dúvidas Frequentes
      </h2>
      
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleOpen(index)}>
              <span>{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
