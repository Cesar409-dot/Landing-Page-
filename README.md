# Nuvem Aura

## Integrantes

- Arthur Fernandes
- Cesar Vequiato


## Sobre o produto

A **Nuvem Aura** é uma luminária decorativa conceitual (fictícia) que adapta a iluminação do ambiente aos momentos do dia. Ela tem design minimalista, funciona como objeto de decoração mesmo apagada e oferece três cenários de iluminação:

- **Foco:** iluminação equilibrada para estudo, leitura e trabalho;
- **Aconchego:** tons quentes para relaxar e deixar o ambiente acolhedor;
- **Criatividade:** cores e composições visuais que dão personalidade ao espaço.

**Público:** pessoas que valorizam pequenos detalhes de decoração e querem um ambiente que acompanhe a rotina, como estudantes, designers e quem trabalha em home office.

**Proposta:** uma experiência simples e intuitiva, sem configurações complicadas.

O produto, os preços, o parcelamento e os depoimentos são demonstrativos. Nenhum pagamento real é processado.

A página possui 10 seções: hero, produto, benefícios, experiências (seção interativa "Qual é o clima de hoje?"), como funciona, diferenciais, avaliações, oferta, FAQ e CTA final.


## Jornada de construção

### Ideia inicial

Partimos do desafio de criar uma landing page para um produto e quisemos escolher algo fácil de entender à primeira vista e que desse espaço para uma interação visual.

Alternativas consideradas:

- **Um app de produtividade:** descartado porque o produto ficaria abstrato e a página dependeria de prints de interface que ainda não existiam;
- **Uma garrafa térmica ou acessório de mesa:** simples de vender, mas com pouca coisa para demonstrar de forma interativa;
- **Uma luminária que muda de atmosfera:** escolhida, porque a luz se traduz muito bem em cor e transição na tela. Isso permitiu criar uma seção em que o visitante escolhe um cenário e vê o ambiente mudar.

O nome **Nuvem Aura** veio da ideia de algo leve e macio (nuvem) que cria uma atmosfera ao redor (aura). A partir daí definimos os três cenários, ligados a momentos reais do dia.


### Pesquisa e referências

Pesquisamos landing pages de produtos de decoração e iluminação, além de modelos de página de venda, para entender a ordem em que as informações costumam aparecer: promessa principal, benefícios, como funciona, prova social, oferta e perguntas frequentes.

O que levamos como referência:

- **Estilo visual minimalista**, com muito espaço em branco, cantos arredondados e sombras suaves, para combinar com o conceito de um objeto decorativo;
- **Paleta calma:** fundo off-white quente, texto em grafite e verde-escuro, com verde-limão como cor de destaque nos botões e no foco do teclado;
- **Tipografia Inter**, por ser legível em qualquer tamanho de tela;
- **Boas práticas de acessibilidade**, como navegação por teclado, contraste e respeito à preferência de reduzir animações.


### Ferramentas utilizadas

- React
- Vite
- CSS Modules
- VS Code
- Git e GitHub
- IA generativa, detalhado na seção abaixo


### Uso de IA

Modelo utilizado:

- Nemotron 3.5 Lightning Free

Para que o modelo foi utilizado:

- Revisar a estrutura da página e conferir se a ordem das seções fazia sentido para uma landing page de conversão;
- Interpretar a página pronta e checar se a proposta do produto ficava clara para quem lê pela primeira vez;
- Escrever e revisar textos de apoio, como descrições de benefícios, FAQ e esta documentação.

Por que escolhemos esse modelo e em que momento ele ajudou:

- Usamos a IA como apoio e não como substituta das decisões da dupla;
- Ela ajudou principalmente na hora de organizar ideias e de ter uma leitura externa do resultado. Ao pedir que descrevesse o que entendia da página, confirmamos que a mensagem estava clara.

Quando o resultado não foi satisfatório:

- As primeiras sugestões de texto vinham genéricas e com tom muito promocional, o que não combinava com a proposta calma e minimalista do produto.

Se trocamos de modelo:

- Não trocamos de modelo durante o desenvolvimento.

Sugestões da IA:

- **Mantidas:** a estrutura geral das seções e a organização do conteúdo em benefícios, passo a passo e FAQ;
- **Alteradas:** trechos de copy, reescritos para um tom mais leve e curto, e nomes e detalhes dos cenários, ajustados para ficarem coerentes com a identidade da Nuvem Aura;
- **Descartadas:** promessas exageradas sobre o produto. Como ele é fictício, preferimos deixar explícito em vários pontos da página que preços, parcelamento e depoimentos são demonstrativos.


### Evolução da solução

O que mudou entre a primeira ideia e a versão final:

- Reorganização da página em seções com ordem clara (hero, produto, benefícios, experiências, como funciona, diferenciais, avaliações, oferta, FAQ e CTA final), para guiar o visitante da curiosidade até a ação;
- Texto de venda mais genérico substituído por uma copy curta e calma, em linha com o conceito de ambiente;
- Cenários que eram apenas descritos em texto passaram a ter uma seção interativa, "Qual é o clima de hoje?", em que o visitante experimenta o conceito;
- Avisos de produto fictício que ficavam só no rodapé passaram a aparecer também na seção interativa, nas avaliações e na oferta;
- Ajustes responsivos para tablet e celular, incluindo menu mobile;
- Alterações sugeridas pela IA, como a revisão do tom dos textos.

Decisões em que a dupla optou por não seguir a sugestão da IA:

- Não usar escassez e urgência na oferta (contador regressivo ou "últimas unidades"), porque não combinava com o tom do produto e seria enganoso, mesmo em um projeto fictício.


### Resultado final

Avaliamos o resultado como uma página clara, consistente e fiel à proposta minimalista. A estrutura de conversão está completa, a interação mostra bem o conceito e a página tem cuidados de acessibilidade, como landmarks semânticos, rótulos para leitores de tela, foco visível.

O que faríamos diferente se tivéssemos mais tempo:

- Adicionar imagens ou renderizações 3D do produto, no lugar dos elementos puramente ilustrativos;
- Fazer testes de usabilidade com pessoas de fora da dupla;
- Melhorar a animação de transição entre os cenários de iluminação;
- Medir desempenho e acessibilidade com o Lighthouse e corrigir o que aparecer;
