export const produto = {
  nome: 'Nuvem Aura',
  slogan: 'Seu espaço. Seu ritmo. Sua luz.',
  proposta: 'A Nuvem Aura é uma luminária inteligente fictícia projetada para ajudar as pessoas a criar ambientes mais aconchegantes, criativos ou relaxantes, utilizando diferentes cenários de iluminação.',
  descricaoCurta: 'Conheça a Nuvem Aura, a luminária que transforma a luz do seu ambiente para acompanhar seus momentos de foco, criatividade e descanso.',
  descricaoCompleta: 'A Nuvem Aura foi pensada para quem acredita que os pequenos detalhes fazem diferença. Com diferentes cenários de iluminação, ela ajuda a criar a atmosfera ideal para cada momento do seu dia.',
  caracteristicas: [
    {
      titulo: 'Design minimalista',
      descricao: 'Um objeto decorativo que combina com diferentes ambientes.'
    },
    {
      titulo: 'Cenários personalizáveis',
      descricao: 'Escolha entre diferentes atmosferas de iluminação.'
    },
    {
      titulo: 'Experiência simples',
      descricao: 'Uma proposta de uso intuitiva, sem configurações complicadas.'
    }
  ],
  diferenca: [
    'Visual que combina com diferentes estilos de decoração.',
    'Cenários de iluminação para diferentes momentos.',
    'Experiência intuitiva e fácil de explorar.'
  ],
  avisos: [
    'Produto conceitual desenvolvido para fins acadêmicos.',
    'Não possui funcionalidades reais de hardware ou conectividade.',
    'Avaliações e depoimentos são fictícios e demonstrativos.'
  ]
};

export const cenarios = [
  {
    id: 'foco',
    nome: 'Foco',
    descricao: 'Uma atmosfera equilibrada para acompanhar suas ideias.',
    cor: '#E8F5E9',
    corBorda: '#B8F36B',
    gradiente: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
    luz: 'linear-gradient(180deg, #B8F36B 0%, #8BC34A 50%, #4CAF50 100%)'
  },
  {
    id: 'aconchego',
    nome: 'Aconchego',
    descricao: 'Tons quentes para deixar o ambiente mais acolhedor.',
    cor: '#FFF8E1',
    corBorda: '#FFB300',
    gradiente: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
    luz: 'linear-gradient(180deg, #FFB300 0%, #FF9800 50%, #F57C00 100%)'
  },
  {
    id: 'criatividade',
    nome: 'Criatividade',
    descricao: 'Cores vibrantes para expressar sua personalidade.',
    cor: '#FCE4EC',
    corBorda: '#EC407A',
    gradiente: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)',
    luz: 'linear-gradient(180deg, #EC407A 0%, #E91E63 50%, #C2185B 100%)'
  }
];

export const precos = {
  anterior: 349.90,
  atual: 279.90,
  parcelas: 6,
  valorParcela: 46.65
};