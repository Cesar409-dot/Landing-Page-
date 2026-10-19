import styles from './StepCard.module.css';

const icones = {
  1: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="11" stroke="#354A35" stroke-width="1.5"/>
      <path d="M10 14L13 17L18 11" stroke="#354A35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ),
  2: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 14C8 10.6863 10.6863 8 14 8C17.3137 8 20 10.6863 20 14" stroke="#354A35" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M14 8V14L18 18" stroke="#B8F36B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ),
  3: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 4L20 10V18L14 24L8 18V10L14 4Z" stroke="#354A35" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="14" cy="14" r="3" fill="#B8F36B"/>
    </svg>
  )
};

export function StepCard({ step, titulo, descricao }) {
  const Icone = icones[step] || icones[1];

  return (
    <article className={styles.card}>
      <div className={styles.numberWrapper}>
        <span className={styles.number}>{step.toString().padStart(2, '0')}</span>
      </div>
      <div className={styles.iconWrapper}>
        {Icone}
      </div>
      <h3 className={styles.title}>{titulo}</h3>
      <p className={styles.description}>{descricao}</p>
    </article>
  );
}