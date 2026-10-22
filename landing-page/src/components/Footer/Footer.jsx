import styles from './Footer.module.css';

const footerLinks = [
  { href: '#produto', label: 'Produto' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#faq', label: 'FAQ' }
];

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#topo" className={styles.logo} aria-label="NUVEM - Início">
              <span className={styles.logoSymbol} aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 4C18.4183 4 22 7.58172 22 12C22 16.4183 18.4183 20 14 20C9.58172 20 6 16.4183 6 12C6 7.58172 9.58172 4 14 4Z" stroke="#354A35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 8V12" stroke="#B8F36B" stroke-width="2" stroke-linecap="round"/>
                  <path d="M14 12L14 16" stroke="#B8F36B" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="14" cy="16" r="2" fill="#B8F36B"/>
                </svg>
              </span>
              <span className={styles.logoText}>NUVEM</span>
            </a>
            <p className={styles.tagline}>
              Iluminação que transforma atmosferas. Seu espaço. Seu ritmo. Sua luz.
            </p>
            <p className={styles.disclaimer}>
              A Nuvem Aura é um produto conceitual fictício desenvolvido para fins acadêmicos. 
              As avaliações e depoimentos são demonstrações e não representam clientes reais.
            </p>
          </div>

          <nav className={styles.nav} aria-label="Navegação do rodapé">
            <h4 className={styles.navTitle}>Navegação</h4>
            <ul className={styles.navList}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} NUVEM. Todos os direitos reservados.
          </p>
          <p className={styles.academicNotice}>
            Projeto acadêmico — Landing page de produto fictício
          </p>
        </div>
      </div>
    </footer>
  );
}