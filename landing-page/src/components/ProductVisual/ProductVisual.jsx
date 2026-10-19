import styles from './ProductVisual.module.css';

export function ProductVisual({ cenario, size = 'large', className = '' }) {
  const { gradiente, luz, corBorda } = cenario;

  return (
    <div className={`${styles.container} ${styles[size]} ${className}`} role="img" aria-label={`Luminária Nuvem Aura no cenário ${cenario.nome}`}>
      <div className={styles.glow} style={{ background: luz }} />
      <div className={styles.base} style={{ borderColor: corBorda }}>
        <div className={styles.body} style={{ background: gradiente, borderColor: corBorda }}>
          <div className={styles.diffuser} style={{ background: luz }} />
          <div className={styles.lightRing} style={{ background: luz }} />
          <div className={styles.lightRing2} style={{ background: luz }} />
        </div>
        <div className={styles.baseBottom} style={{ borderColor: corBorda }} />
      </div>
      <div className={styles.shadow} />
      <div className={styles.decorativeRing} style={{ borderColor: corBorda }} />
      <div className={styles.decorativeRing2} style={{ borderColor: corBorda }} />
    </div>
  );
}