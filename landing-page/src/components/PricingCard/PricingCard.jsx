import styles from './PricingCard.module.css';
import { Button } from '../Button/Button';

export function PricingCard({ precos, onCtaClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.priceWrapper}>
        <span className={styles.priceLabel}>Preço anterior</span>
        <span className={styles.oldPrice}>R$ {precos.anterior.toFixed(2).replace('.', ',')}</span>
        <span className={styles.priceLabel}>Preço conceitual</span>
        <div className={styles.currentPrice}>
          <span className={styles.currency}>R$</span>
          <span className={styles.amount}>{precos.atual.toFixed(2).replace('.', ',')}</span>
        </div>
        <span className={styles.installments}>
          até {precos.parcelas}x de R$ {precos.valorParcela.toFixed(2).replace('.', ',')} sem juros
        </span>
      </div>
      <ul className={styles.features}>
        <li><span className={styles.check} aria-hidden="true">✓</span> Design minimalista</li>
        <li><span className={styles.check} aria-hidden="true">✓</span> Três cenários demonstrativos</li>
        <li><span className={styles.check} aria-hidden="true">✓</span> Experiência visual personalizável</li>
        <li><span className={styles.check} aria-hidden="true">✓</span> Produto conceitual para fins acadêmicos</li>
      </ul>
      <Button 
        variant="primary" 
        size="lg" 
        fullWidth
        onClick={onCtaClick}
      >
        Quero conhecer a Nuvem Aura
      </Button>
      <p className={styles.disclaimer}>
        Valores e parcelamento são parte de uma oferta fictícia de demonstração. 
        Nenhum pagamento real é processado.
      </p>
    </div>
  );
}