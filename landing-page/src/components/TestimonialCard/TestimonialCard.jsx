import styles from './TestimonialCard.module.css';

export function TestimonialCard({ avaliacao }) {
  return (
    <article className={styles.card}>
      <div className={styles.stars} aria-label="Avaliação demonstrativa: 5 de 5 estrelas">
        {[1, 2, 3, 4, 5].map((n) => (
          <svg key={n} width="18" height="18" viewBox="0 0 18 18" fill="#B8F36B" aria-hidden="true">
            <path d="M9 1.5L10.5 5.5H15L11.5 8L13 12L9 10L5 12L6.5 8L3 5.5H7.5L9 1.5Z"/>
          </svg>
        ))}
      </div>
      <p className={styles.text}>"{avaliacao.texto}"</p>
      <div className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="10" r="4" stroke="#354A35" stroke-width="1.5"/>
            <path d="M4 24C4 20.134 7.13401 17 11 17H17C20.866 17 24 20.134 24 24" stroke="#354A35" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{avaliacao.nome}</span>
          <span className={styles.authorRole}>{avaliacao.perfil}</span>
        </div>
      </div>
      <span className={styles.disclaimer}>Depoimento demonstrativo</span>
    </article>
  );
}