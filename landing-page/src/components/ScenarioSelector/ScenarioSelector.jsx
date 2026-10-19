import styles from './ScenarioSelector.module.css';

export function ScenarioSelector({ cenarios, cenarioSelecionado, onSelecionar }) {
  return (
    <div className={styles.container} role="group" aria-label="Seleção de cenários de iluminação">
      {cenarios.map((cenario) => (
        <button
          key={cenario.id}
          className={`${styles.option} ${cenarioSelecionado === cenario.id ? styles.selected : ''}`}
          onClick={() => onSelecionar(cenario.id)}
          aria-pressed={cenarioSelecionado === cenario.id}
          aria-label={`Selecionar cenário ${cenario.nome}`}
        >
          <span className={styles.colorDot} style={{ background: cenario.luz }} />
          <span className={styles.optionName}>{cenario.nome}</span>
        </button>
      ))}
    </div>
  );
}