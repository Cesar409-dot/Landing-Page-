import styles from './BenefitCard.module.css';

const icones = {
  foco: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="11" stroke="#354A35" stroke-width="1.5"/>
      <path d="M14 7V14L18 18" stroke="#354A35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ),
  relaxamento: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 18C7 14.6863 9.68629 12 13 12C16.3137 12 19 14.6863 19 18" stroke="#354A35" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M9 18C9 15.7909 10.7909 14 13 14C15.2091 14 17 15.7909 17 18" stroke="#B8F36B" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  ),
  criatividade: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 4L20 10V18L14 24L8 18V10L14 4Z" stroke="#354A35" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="14" cy="14" r="3" fill="#B8F36B"/>
    </svg>
  ),
  decoracao: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 20V10C6 7.79086 7.79086 6 10 6H18C20.2091 6 22 7.79086 22 10V20" stroke="#354A35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 6V4C10 2.89543 10.8954 2 12 2H16C17.1046 2 18 2.89543 18 4V6" stroke="#354A35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="14" cy="15" r="3" stroke="#B8F36B" stroke-width="1.5"/>
    </svg>
  )
};

export function BenefitCard({ beneficio }) {
  const Icone = icones[beneficio.icone] || icones.foco;

  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        {Icone}
      </div>
      <h3 className={styles.title}>{beneficio.titulo}</h3>
      <p className={styles.description}>{beneficio.descricao}</p>
    </article>
  );
}