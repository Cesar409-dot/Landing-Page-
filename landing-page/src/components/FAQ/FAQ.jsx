import { useId } from 'react';
import styles from './FAQ.module.css';

export function FAQItem({ item, aberta, onToggle }) {
  const questionId = useId();
  const answerId = useId();

  return (
    <details className={`${styles.item} ${aberta ? styles.open : ''}`} onToggle={onToggle}>
      <summary 
        className={styles.summary} 
        id={questionId}
        aria-controls={answerId}
        aria-expanded={aberta}
      >
        <span className={styles.question}>{item.pergunta}</span>
        <span className={`${styles.icon} ${aberta ? styles.iconOpen : ''}`} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#354A35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </summary>
      <div className={styles.answer} id={answerId} role="region" aria-labelledby={questionId}>
        <p className={styles.answerText}>{item.resposta}</p>
      </div>
    </details>
  );
}

export function FAQ({ faq, perguntaAberta, onTogglePergunta }) {
  return (
    <div className={styles.container} role="region" aria-label="Perguntas frequentes">
      {faq.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          aberta={perguntaAberta === item.id}
          onToggle={() => onTogglePergunta(item.id)}
        />
      ))}
    </div>
  );
}