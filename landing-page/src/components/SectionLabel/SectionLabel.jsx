import styles from './SectionLabel.module.css';

export function SectionLabel({ children, className = '' }) {
  return (
    <span className={`${styles.label} ${className}`}>
      {children}
    </span>
  );
}