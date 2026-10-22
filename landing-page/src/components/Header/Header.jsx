import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import { Button } from '../Button/Button';

const navLinks = [
  { href: '#produto', label: 'Produto' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#faq', label: 'FAQ' }
];

export function Header({ menuAberto, onToggleMenu, onFecharMenu, onCtaClick }) {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    onFecharMenu();
  };

  return (
    <header 
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={styles.container}>
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

        <nav className={`${styles.nav} ${menuAberto ? styles.navOpen : ''}`} role="navigation" aria-label="Navegação principal">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            variant="primary" 
            size="md"
            onClick={onCtaClick}
            className={styles.ctaButton}
          >
            Quero minha Nuvem
          </Button>
        </nav>

        <button
          className={styles.menuButton}
          onClick={onToggleMenu}
          aria-expanded={menuAberto}
          aria-controls="main-nav"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          id="main-nav"
          type="button"
        >
          <span className={`${styles.hamburger} ${menuAberto ? styles.hamburgerOpen : ''}`} aria-hidden="true">
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </span>
        </button>
      </div>
    </header>
  );
}