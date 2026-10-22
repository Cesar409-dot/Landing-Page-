import { useState, useCallback } from 'react';
import styles from './LandingPage.module.css';
import { Header } from '../../components/Header/Header';
import { SectionLabel } from '../../components/SectionLabel/SectionLabel';
import { ProductVisual } from '../../components/ProductVisual/ProductVisual';
import { Button } from '../../components/Button/Button';
import { BenefitCard } from '../../components/BenefitCard/BenefitCard';
import { ScenarioSelector } from '../../components/ScenarioSelector/ScenarioSelector';
import { StepCard } from '../../components/StepCard/StepCard';
import { TestimonialCard } from '../../components/TestimonialCard/TestimonialCard';
import { PricingCard } from '../../components/PricingCard/PricingCard';
import { FAQ } from '../../components/FAQ/FAQ';
import { Footer } from '../../components/Footer/Footer';
import { InterestModal } from '../../components/InterestModal/InterestModal';
import { beneficios } from '../../models/beneficiosModel';
import { avaliacoes } from '../../models/avaliacoesModel';
import { cenarios, precos, produto } from '../../models/produtoModel';
import { faq } from '../../models/faqModel';
import { useLandingPageViewModel } from '../../viewmodels/useLandingPageViewModel';
import { useFaqViewModel } from '../../viewmodels/useFaqViewModel';

export function LandingPage() {
  const {
    menuAberto,
    toggleMenu,
    fecharMenu,
    cenarioSelecionado,
    selecionarCenario,
    modalAberto,
    abrirModal,
    fecharModal,
    interesseConfirmado,
    confirmarInteresse
  } = useLandingPageViewModel();

  const { perguntaAberta, togglePergunta } = useFaqViewModel();
  const [heroCenario, setHeroCenario] = useState(cenarios[0]);

  const handleCenarioChange = useCallback((id) => {
    selecionarCenario(id);
    const cenario = cenarios.find(c => c.id === id);
    if (cenario) setHeroCenario(cenario);
  }, [selecionarCenario]);

  const scrollToSection = useCallback((href) => {
    const target = document.querySelector(href);
    if (target) {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    fecharMenu();
  }, [fecharMenu]);

  const handleCtaClick = useCallback((e) => {
    e.preventDefault();
    scrollToSection('#oferta');
    // Abrir modal após um pequeno delay para permitir a rolagem
    setTimeout(abrirModal, 300);
  }, [scrollToSection, abrirModal]);

  return (
    <div className={styles.page}>
      <a href="#conteudo-principal" className={styles.skipLink}>
        Pular para o conteúdo principal
      </a>

      <Header
        menuAberto={menuAberto}
        onToggleMenu={toggleMenu}
        onFecharMenu={fecharMenu}
        onCtaClick={handleCtaClick}
      />

      <main id="conteudo-principal" role="main">
        <section id="hero" className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <SectionLabel>ILUMINAÇÃO QUE ACOMPANHA VOCÊ</SectionLabel>
              <h1 id="hero-title" className={styles.heroTitle}>
                Seu espaço merece uma 
                <span className={styles.highlight}>nova atmosfera.</span>
              </h1>
              <p className={styles.heroDescription}>
                Conheça a Nuvem Aura, a luminária que transforma a luz do seu ambiente 
                para acompanhar seus momentos de foco, criatividade e descanso.
              </p>
              <div className={styles.heroTrust}>
                <span className={styles.trustItem}>Design autoral</span>
                <span className={styles.trustSeparator} aria-hidden="true">•</span>
                <span className={styles.trustItem}>Cenários personalizáveis</span>
                <span className={styles.trustSeparator} aria-hidden="true">•</span>
                <span className={styles.trustItem}>Feita para o seu espaço</span>
              </div>
              <div className={styles.heroActions}>
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={handleCtaClick}
                >
                  Descobrir a Nuvem Aura
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => scrollToSection('#como-funciona')}
                >
                  Ver como funciona
                </Button>
              </div>
            </div>
            <div className={styles.heroVisual} aria-hidden="true">
              <ProductVisual cenario={heroCenario} size="large" />
            </div>
          </div>
        </section>

        <section id="produto" className={styles.section} aria-labelledby="produto-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionLabel>CONHEÇA SUA NOVA COMPANHIA</SectionLabel>
              <h2 id="produto-title" className={styles.sectionTitle}>
                Mais do que iluminar. 
                <span className={styles.highlight}>Transformar o ambiente.</span>
              </h2>
              <p className={styles.sectionDescription}>
                {produto.descricaoCompleta}
              </p>
            </div>
            <div className={styles.produtoGrid}>
              <div className={styles.produtoVisualWrapper}>
                <ProductVisual cenario={heroCenario} size="medium" />
              </div>
              <ul className={styles.caracteristicas} role="list">
                {produto.caracteristicas.map((carac, index) => (
                  <li key={index} className={styles.caracteristica}>
                    <div className={styles.caracIcon} aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#B8F36B" stroke-width="1.5"/>
                        <path d="M8 12L11 15L16 9" stroke="#B8F36B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.caracTitle}>{carac.titulo}</h3>
                      <p className={styles.caracDesc}>{carac.descricao}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="beneficios" className={styles.section} aria-labelledby="beneficios-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionLabel>BENEFÍCIOS</SectionLabel>
              <h2 id="beneficios-title" className={styles.sectionTitle}>
                A luz certa muda a 
                <span className={styles.highlight}>sensação do ambiente.</span>
              </h2>
            </div>
            <div className={styles.beneficiosGrid} role="list">
              {beneficios.map((beneficio) => (
                <BenefitCard key={beneficio.id} beneficio={beneficio} />
              ))}
            </div>
          </div>
        </section>

        <section id="experiencias" className={styles.section} aria-labelledby="experiencias-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionLabel>EXPERIÊNCIAS</SectionLabel>
              <h2 id="experiencias-title" className={styles.sectionTitle}>
                Qual é o 
                <span className={styles.highlight}>clima de hoje?</span>
              </h2>
              <p className={styles.sectionDescription}>
                Escolha uma atmosfera e descubra como a Nuvem Aura pode transformar visualmente seu espaço.
              </p>
            </div>
            <div className={styles.experienciasGrid}>
              <div className={styles.experienciasVisual}>
                <ProductVisual cenario={heroCenario} size="large" />
                <div className={styles.cenarioInfo}>
                  <div className={styles.cenarioBadge} style={{ background: heroCenario.gradiente, borderColor: heroCenario.corBorda }}>
                    {heroCenario.nome}
                  </div>
                  <p className={styles.cenarioDesc}>{heroCenario.descricao}</p>
                </div>
              </div>
              <div className={styles.experienciasControls}>
                <ScenarioSelector 
                  cenarios={cenarios} 
                  cenarioSelecionado={cenarioSelecionado} 
                  onSelecionar={handleCenarioChange}
                />
                <p className={styles.controlsHint}>
                  A interação acima é uma simulação visual do conceito do produto. 
                  A Nuvem Aura é um produto fictício para fins demonstrativos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className={styles.section} aria-labelledby="como-funciona-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionLabel>COMO FUNCIONA</SectionLabel>
              <h2 id="como-funciona-title" className={styles.sectionTitle}>
                Do seu jeito. 
                <span className={styles.highlight}>Em poucos passos.</span>
              </h2>
            </div>
            <div className={styles.stepsGrid} role="list">
              <StepCard 
                step={1} 
                titulo="Escolha seu momento" 
                descricao="Decida se o ambiente pede foco, aconchego ou uma dose de criatividade." 
              />
              <StepCard 
                step={2} 
                titulo="Selecione seu cenário" 
                descricao="Explore as opções de iluminação e encontre a combinação que combina com você." 
              />
              <StepCard 
                step={3} 
                titulo="Aproveite a atmosfera" 
                descricao="Deixe a iluminação completar a experiência do seu espaço." 
              />
            </div>
          </div>
        </section>

        <section id="diferenciais" className={styles.section} aria-labelledby="diferenciais-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionLabel>DIFERENCIAIS</SectionLabel>
              <h2 id="diferenciais-title" className={styles.sectionTitle}>
                Pensada para combinar com 
                <span className={styles.highlight}>a sua rotina.</span>
              </h2>
            </div>
            <div className={styles.diferenciaisGrid}>
              <div className={styles.diferencialVisual} aria-hidden="true">
                <ProductVisual cenario={heroCenario} size="medium" />
              </div>
              <ul className={styles.diferenciaisList} role="list">
                {produto.diferenca.map((diff, index) => (
                  <li key={index} className={styles.diferencial}>
                    <span className={styles.diffNumber}>{(index + 1).toString().padStart(2, '0')}</span>
                    <p>{diff}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="avaliacoes" className={styles.section} aria-labelledby="avaliacoes-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionLabel>AVALIAÇÕES</SectionLabel>
              <h2 id="avaliacoes-title" className={styles.sectionTitle}>
                Pequenos detalhes. 
                <span className={styles.highlight}>Novas experiências.</span>
              </h2>
            </div>
            <div className={styles.avaliacoesGrid} role="list">
              {avaliacoes.map((avaliacao) => (
                <TestimonialCard key={avaliacao.id} avaliacao={avaliacao} />
              ))}
            </div>
          </div>
        </section>

        <section id="oferta" className={styles.section} aria-labelledby="oferta-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionLabel>ENCONTRE SUA NOVA ATMOSFERA</SectionLabel>
              <h2 id="oferta-title" className={styles.sectionTitle}>
                Seu próximo 
                <span className={styles.highlight}>detalhe favorito.</span>
              </h2>
              <p className={styles.sectionDescription}>
                Leve a proposta da Nuvem Aura para o seu espaço.
              </p>
            </div>
            <PricingCard 
              precos={precos} 
              onCtaClick={abrirModal}
            />
          </div>
        </section>

        <section id="faq" className={styles.section} aria-labelledby="faq-title">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionLabel>FAQ</SectionLabel>
              <h2 id="faq-title" className={styles.sectionTitle}>
                Tudo o que você 
                <span className={styles.highlight}>quer saber.</span>
              </h2>
            </div>
            <FAQ 
              faq={faq} 
              perguntaAberta={perguntaAberta} 
              onTogglePergunta={togglePergunta}
            />
          </div>
        </section>

        <section id="cta-final" className={styles.ctaFinal} aria-labelledby="cta-final-title">
          <div className={styles.container}>
            <h2 id="cta-final-title" className={styles.ctaFinalTitle}>
              Seu espaço também pode 
              <span className={styles.highlight}>contar uma história.</span>
            </h2>
            <p className={styles.ctaFinalDescription}>
              Descubra novas possibilidades para transformar a atmosfera dos seus momentos.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleCtaClick}
            >
              Explorar a Nuvem Aura
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <InterestModal
        aberto={modalAberto}
        onFechar={fecharModal}
        interesseConfirmado={interesseConfirmado}
        onConfirmar={confirmarInteresse}
      />
    </div>
  );
}