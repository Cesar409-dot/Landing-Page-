import { useEffect, useRef } from 'react';
import styles from './InterestModal.module.css';
import { Button } from '../Button/Button';

export function InterestModal({ 
  aberto, 
  onFechar, 
  interesseConfirmado, 
  onConfirmar 
}) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (aberto) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onFechar();
        }
        if (e.key === 'Tab') {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        previousActiveElement.current?.focus();
      };
    }
  }, [aberto, onFechar]);

  if (!aberto) return null;

  return (
    <div 
      className={styles.overlay} 
      onClick={onFechar}
      role="presentation"
    >
      <div 
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {!interesseConfirmado ? (
          <>
            <button
              className={styles.closeButton}
              onClick={onFechar}
              aria-label="Fechar modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18 6L6 18M6 6L18 18" stroke="#73766F" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <div className={styles.iconWrapper} aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8C28.4183 8 32 11.5817 32 16C32 20.4183 28.4183 24 24 24C19.5817 24 16 20.4183 16 16C16 11.5817 19.5817 8 24 8Z" stroke="#354A35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24 12V16" stroke="#B8F36B" stroke-width="2" stroke-linecap="round"/>
                <path d="M24 16L24 20" stroke="#B8F36B" stroke-width="2" stroke-linecap="round"/>
                <circle cx="24" cy="20" r="2.5" fill="#B8F36B"/>
              </svg>
            </div>
            <h2 id="modal-title" className={styles.title}>Quero conhecer a Nuvem Aura</h2>
            <p id="modal-description" className={styles.description}>
              Esta é uma simulação de interesse no produto conceitual Nuvem Aura. 
              Nenhum pagamento será processado e nenhum dado será armazenado.
            </p>
            <div className={styles.actions}>
              <Button variant="secondary" onClick={onFechar}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={onConfirmar}>
                Confirmar interesse demonstrativo
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.successIcon} aria-hidden="true">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="26" stroke="#B8F36B" stroke-width="3"/>
                <path d="M18 28L25 35L38 21" stroke="#B8F36B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h2 className={styles.title}>Interesse registrado!</h2>
            <p className={styles.successText}>
              A Nuvem Aura é um produto fictício desenvolvido para fins acadêmicos. 
              Esta foi apenas uma demonstração da interface.
            </p>
            <Button variant="primary" onClick={onFechar} className={styles.closeAction}>
              Fechar
            </Button>
          </>
        )}
      </div>
    </div>
  );
}