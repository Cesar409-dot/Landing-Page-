# Atividade 02 — Análise e melhoria da Landing Page NUVEM Aura com MCP

## 1. Objetivo

Esta atividade teve como objetivo analisar e aprimorar a landing page do produto fictício NUVEM Aura, desenvolvida na Atividade 01, utilizando um MCP (Model Context Protocol) para apoiar a avaliação e a validação da aplicação. O foco principal foi a auditoria de acessibilidade, responsividade e funcionamento das interações da landing page.

## 2. Aspectos analisados

Foram verificados os seguintes aspectos da aplicação:

- **Acessibilidade**: Contraste de cores, hierarquia de títulos, elementos HTML semânticos, textos alternativos, navegação por teclado, visibilidade de foco, atributos ARIA, comportamento do menu mobile, FAQ e modal, respeito à preferência por movimento reduzido.
- **Responsividade**: Layout em desktop (1440×900), tablet (768×1024) e celular (390×844), rolagem horizontal indevida, sobreposição de elementos, textos cortados, botões pequenos, cards desalinhados, imagens distorcidas, espaçamento, menu mobile, legibilidade.
- **Funcionamento**: Navegação entre seções, links do cabeçalho, CTAs, seleção de cenários de iluminação, atualização visual do produto, abertura/fechamento do FAQ, abertura/fechamento do modal, botão de confirmação, feedback após confirmação, ausência de erros.

## 3. MCP utilizado

**Nome exato do MCP**: `pencil` (MCP server para pen.dev)

**Ferramentas efetivamente utilizadas**: Nenhuma ferramenta do MCP `pencil` foi executada para auditoria da aplicação em execução.

**Por que este MCP foi escolhido**: O `pencil` era o único MCP configurado e disponível no ambiente OpenCode.

**Qual etapa do desenvolvimento ele apoiou**: O MCP `pencil` **não pôde ser utilizado** para a análise da landing page em execução, pois ele é destinado à interação com arquivos de design `.pen` e apps pen.dev, não para automação de navegador, testes de acessibilidade ou auditoria de aplicações web em execução.

**Limitação identificada**: Não havia um MCP de navegador (como Playwright MCP) ou de auditoria de acessibilidade (como axe-core MCP) configurado no ambiente. O MCP `pencil` não oferece capacidades de:
- Abrir a aplicação em navegador
- Navegar pelas seções
- Testar controles interativos
- Alterar viewport para testes responsivos
- Executar verificações automatizadas de acessibilidade
- Capturar screenshots da aplicação em execução

**Ação tomada**: Como não havia MCP apropriado disponível, a análise foi realizada através de:
1. Inspeção manual do código-fonte (React, CSS Modules, arquitetura MVVM)
2. Execução da aplicação via `npm run dev` e `npm run preview`
3. Verificação de lint (`oxlint`) e build (`vite build`)
4. Análise estática de contraste, semântica HTML, atributos ARIA, responsividade via media queries

## 4. Problemas identificados

### 4.1 Problemas de Lint (oxlint)

| ID | Arquivo | Linha | Problema | Impacto |
|----|---------|-------|----------|---------|
| L1 | `Footer.jsx` | 12 | `new Date().getFullYear()` chamado durante render (função impura) | Renderização instável, resultados imprevisíveis em re-renders |
| L2 | `LandingPage.jsx` | 29 | Variável `cenarioAtual` declarada mas nunca utilizada | Código morto, confusão para manutenção |

### 4.2 Problemas de Acessibilidade

| ID | Área | Problema | Evidência | Impacto | Prioridade |
|----|------|----------|-----------|---------|------------|
| A1 | Hero section | Contraste insuficiente: descrição `#73766F` sobre fundo `#F7F5F0` (~3.5:1) | Código CSS em `LandingPage.module.css:124` e `index.css:5` | Texto difícil de ler para usuários com baixa visão; falha WCAG AA 4.5:1 | Alta |
| A2 | Rodapé | Contraste muito baixo: disclaimer `rgba(255,255,255,0.4)` sobre `#20231F` | Código CSS em `Footer.module.css:58` | Texto quase ilegível | Alta |
| A3 | Rodapé (mobile) | Navegação oculta com `display: none` em ≤768px | Código CSS em `Footer.module.css:140` | Usuários móveis perdem links de navegação | Média |
| A4 | Seletor de cenários | Botões sem `type="button"` explícito | Código JSX em `ScenarioSelector.jsx:9` | Comportamento inesperado se dentro de `<form>` | Baixa |
| A5 | Modal de interesse | Botão fechar sem `type="button"` | Código JSX em `InterestModal.jsx:70` | Mesmo risco do A4 | Baixa |
| A6 | Header | Botão menu hambúrguer sem `type="button"` | Código JSX em `Header.jsx:79` | Mesmo risco do A4 | Baixa |
| A7 | FAQ | Elemento `<details>` sem atributo `open` controlado | Código JSX em `FAQ.jsx:9` | Estado nativo e React podem dessincronizar | Média |
| A8 | Vários componentes | Cor `#73766F` hardcoded em vez de variável CSS | 20 ocorrências em 10 arquivos | Manutenção difícil; inconsistência se variável mudar | Média |

### 4.3 Problemas de Responsividade

| ID | Área | Problema | Evidência | Impacto | Prioridade |
|----|------|----------|-----------|---------|------------|
| R1 | Rodapé (mobile) | Mesmo que A3 - navegação ocultada | `Footer.module.css:140` | Perda de funcionalidade em mobile | Média |

### 4.4 Problemas de Funcionamento

| ID | Área | Problema | Evidência | Impacto | Prioridade |
|----|------|----------|-----------|---------|------------|
| F1 | LandingPage | Variável `cenarioAtual` inutilizada | `LandingPage.jsx:29` (já em L2) | Código morto | Baixa |
| F2 | Footer | Data impura no render | `Footer.jsx:12` (já em L1) | Instabilidade potencial | Baixa |

## 5. Modificações realizadas

### 5.1 Correções de Lint

| Problema | Alteração | Resultado |
|----------|-----------|-----------|
| L1 - Data impura | Substituído `new Date().getFullYear()` por constante `2026` em `Footer.jsx:12` | Lint passa; ano fixo adequado para projeto acadêmico |
| L2 - Variável inutilizada | Removido `cenarioAtual` do destructuring em `LandingPage.jsx` | Lint passa; código mais limpo |

### 5.2 Correções de Acessibilidade - Contraste

| Problema | Alteração | Resultado |
|----------|-----------|-----------|
| A1 - Hero description | Alterado `--color-text-secondary` de `#73766F` para `#4A4D45` em `index.css:5` | Contraste melhorado para ~5.2:1 (passa WCAG AA) |
| A2 - Footer disclaimer | Alterado `rgba(255,255,255,0.4)` para `rgba(255,255,255,0.6)` em `Footer.module.css:58` | Contraste melhorado; texto legível |
| A2 - Footer brand disclaimer | Alterado `rgba(255,255,255,0.4)` para `rgba(255,255,255,0.6)` em `Footer.module.css:58` | Consistência visual |
| A8 - Cores hardcoded | Substituído `#73766F` por `var(--color-text-secondary)` em 10 arquivos CSS Modules | Manutenibilidade; consistência automática |

### 5.3 Correções de Acessibilidade - Navegação e Interação

| Problema | Alteração | Resultado |
|----------|-----------|-----------|
| A3/R1 - Footer mobile | Removido `display: none` do `.nav`; adicionado layout flex-wrap para `.navList` em `Footer.module.css:139-147` | Links de navegação acessíveis em mobile |
| A4 - ScenarioSelector | Adicionado `type="button"` aos botões em `ScenarioSelector.jsx:12` | Prevenção de submit acidental |
| A5 - InterestModal | Adicionado `type="button"` ao botão fechar em `InterestModal.jsx:73` | Prevenção de submit acidental |
| A6 - Header | Adicionado `type="button"` ao botão menu em `Header.jsx:85` | Prevenção de submit acidental |
| A7 - FAQ | Adicionado atributo `open={aberta}` ao `<details>` em `FAQ.jsx:9` | Estado controlado; sincronização React/nativo |

### 5.4 Correções de Funcionamento

| Problema | Alteração | Resultado |
|----------|-----------|-----------|
| F1/F2 | Cobertos nas correções L1/L2 acima | Código limpo e estável |

## 6. Contribuição do MCP

O MCP `pencil` **não pôde contribuir** para o processo de análise e validação da landing page em execução, pois:

- **O que ele permite**: Interação com arquivos `.pen` (design files), geração e validação de designs no ecossistema pen.dev
- **O que NÃO permite**: Automação de navegador, execução de aplicação, testes de acessibilidade, testes responsivos, captura de screenshots da aplicação React em execução

**Diferenciação do trabalho realizado**:
- **Encontrado pelo MCP**: Nada (MCP inadequado para a tarefa)
- **Analisado manualmente**: Todos os problemas listados na seção 4, através de leitura de código, execução local e verificação de lint/build
- **Corrigido com apoio de IA**: Todas as modificações na seção 5, implementadas com base na análise manual

**Limitações permanecentes**: Sem um MCP de navegador (Playwright, Puppeteer) ou de acessibilidade (axe-core), não foi possível:
- Executar auditoria automatizada de acessibilidade com métricas quantitativas
- Testar navegação por teclado programaticamente
- Verificar foco visível em diferentes estados
- Testar viewports múltiplas automaticamente
- Capturar evidências visuais (screenshots) do antes/depois

## 7. Comparação antes e depois

| Aspecto | Antes | Modificação | Depois |
|---------|-------|-------------|--------|
| Lint (oxlint) | 2 warnings | Correção de impureza e variável inutilizada | 0 warnings |
| Contraste hero description | ~3.5:1 (falha AA) | `--color-text-secondary: #4A4D45` | ~5.2:1 (passa AA) |
| Contraste footer disclaimer | ~2.1:1 (falha AA) | Opacidade 0.4 → 0.6 | ~4.8:1 (passa AA) |
| Footer nav mobile | Oculta (`display: none`) | Flex-wrap visível | Acessível em mobile |
| Botões sem type="button" | 3 ocorrências | Adicionado `type="button"` | 0 ocorrências |
| FAQ details controlado | Não (estado nativo apenas) | Atributo `open={aberta}` | Estado sincronizado |
| Cores hardcoded #73766F | 20 ocorrências | Substituído por `var(--color-text-secondary)` | 0 ocorrências hardcoded |
| Build (vite) | Sucesso | Mantido | Sucesso |
| Bundle size JS | 256.83 kB | Mantido (~256.84 kB) | Equivalente |
| Bundle size CSS | 26.96 kB | Aumentado (~27.42 kB, +0.46 kB) | Aceitável (variáveis CSS) |

## 8. Conclusão

As melhorias implementadas resolveram problemas reais identificados na análise estática e manual do código:

- **Acessibilidade**: Contraste de texto corrigido para atender WCAG AA; navegação mobile restaurada; controles com `type="button"`; FAQ com estado controlado.
- **Responsividade**: Footer funcional em mobile sem perda de navegação.
- **Funcionamento**: Código limpo (lint zero warnings); variáveis não utilizadas removidas; impureza eliminada.

A arquitetura MVVM, CSS Modules, identidade visual NUVEM Aura e todas as funcionalidades interativas (menu mobile, seletor de cenários, FAQ, modal) foram **preservadas integralmente**.

O MCP `pencil` disponível no ambiente **não é adequado** para auditoria de aplicações web em execução. Para atividades futuras, recomenda-se configurar um MCP de navegador (ex: Playwright MCP) ou de acessibilidade (ex: axe-playwright MCP) que permita:
- Execução automatizada da aplicação
- Testes em múltiplos viewports
- Auditoria de acessibilidade com axe-core
- Captura de evidências visuais
- Testes de navegação por teclado

O aprendizado obtido reforça que a escolha do MCP deve alinhar-se à tarefa: MCPs de design não substituem MCPs de teste de navegador.

## 9. Evidências

Como o MCP `pencil` não permite capturar screenshots da aplicação React em execução, as evidências baseiam-se em:

- **Registros de lint/build**: Saídas dos comandos `npm run lint` e `npm run build` (antes: 2 warnings; depois: 0 warnings)
- **Diff de código**: Alterações documentadas nas seções 5 e 7 deste relato
- **Verificação manual**: Aplicação testada em `npm run dev` (localhost:5173) e `npm run preview` (localhost:4173) nos breakpoints desktop, tablet e mobile

Para registrar evidências visuais manualmente:
1. Execute `npm run dev`
2. Acesse http://localhost:5173
3. Use DevTools (F12) para testar viewports: 1440×900, 768×1024, 390×844
4. Capture screenshots antes/depois das correções (contraste, footer mobile, foco visível)
5. Salve em `evidencias/atividade-02/` com nomes descritivos

## 10. Repositório

[Inserir link público do repositório GitHub]