// All copy lives here so the page can be re-themed for a product without
// touching layout. Sections read from this file; remove a section by deleting
// it from App.tsx.

export const brand = {
  name: 'R3L Engenharia',
  tagline: 'Todo serviço de engenharia, do projeto à execução.',
}

export const nav = {
  links: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Obras', href: '#obras' },
    { label: 'Locação de maquinário', href: '#locacao' },
    { label: 'Dúvidas frequentes', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ],
  signIn: { label: 'WhatsApp', href: 'https://wa.me/5571999521402' },
  cta: { label: 'Solicitar orçamento', href: '#contato' },
}

export const hero = {
  badge: 'Engenharia • Construção • Locação de maquinário',
  title: ['R3L Engenharia', 'Soluções completas para sua obra.'],
  highlight: 'Soluções completas',
  description:
    'A R3L Engenharia realiza todo tipo de serviço de engenharia: projetos, construção, reformas, manutenção, infraestrutura, acabamentos e locação de maquinário e equipamentos para obras. Atendemos Salvador, Lauro de Freitas e Camaçari.',
  primary: { label: 'Solicitar orçamento', href: '#contato' },
  secondary: { label: 'Conheça os serviços', href: '#servicos' },
  footnote: 'Qualidade em cada detalhe. Confiança em cada entrega.',
}

export const logos = ['Projetos', 'Obras', 'Infraestrutura', 'Locação', 'Gestão', 'Consultoria', 'Planejamento', 'Engenharia']

export const features = {
  eyebrow: 'Atendimento em Salvador, Lauro de Freitas e Camaçari',
  title: 'Todo serviço de engenharia e locação de maquinário',
  description: 'Do projeto à execução: construção, reformas, manutenção, infraestrutura, acabamentos e locação de maquinário e equipamentos para obras.',
  items: [
    { key: 'projects', title: 'Projetos e engenharia', description: 'Projetos, planejamento técnico e soluções completas em engenharia.', span: 2 },
    { key: 'construction', title: 'Construção e reformas', description: 'Construção, ampliações e reformas do alicerce ao acabamento.', span: 1 },
    { key: 'management', title: 'Elétrica, hidráulica e manutenção', description: 'Instalações, manutenções, reparos e melhorias com segurança.', span: 1 },
    { key: 'consulting', title: 'Drywall, forros, divisórias e acabamentos', description: 'Soluções em drywall, gesso, forros, divisórias e acabamentos finos.', span: 2 },
    { key: 'infrastructure', title: 'Infraestrutura, concretagem e demolição', description: 'Terraplenagem, concretagem, fundações, demolições seguras e obras de infraestrutura.', span: 2 },
    { key: 'rental', title: 'Locação de maquinário e equipamentos', description: 'Aluguel de maquinário, ferramentas e equipamentos para apoio à sua obra.', span: 1 },
  ],
}

export const steps = {
  eyebrow: 'Locação de maquinário para obra',
  title: 'Aluguel de maquinário, ferramentas e equipamentos',
  items: [
    { title: 'Maquinário para construção', description: 'Consulte disponibilidade de maquinário e equipamentos para diferentes etapas da obra.' },
    { title: 'Ferramentas e apoio técnico', description: 'Aluguel de ferramentas, equipamentos e apoio para construção, reforma e manutenção.' },
    { title: 'Orçamento rápido sob consulta', description: 'Informe o equipamento, local, período e necessidade para receber um orçamento personalizado.' },
  ],
}

export const showcase = {
  eyebrow: 'R3L Engenharia',
  title: 'Soluções que acompanham sua obra',
  tabs: [
    { key: 'inbox', title: 'Projetos de engenharia', description: 'Planejamento e soluções técnicas pensadas para a necessidade de cada obra.' },
    { key: 'board', title: 'Execução e acompanhamento', description: 'Apoio para organizar etapas, equipes e atividades no canteiro.' },
    { key: 'report', title: 'Máquinas e equipamentos', description: 'Locação de equipamentos para diferentes trabalhos. Consulte disponibilidade.' },
  ],
}

export const metrics: { value: number; decimals?: number; suffix?: string; label: string }[] = []

export const testimonials = {
  eyebrow: 'Nossa atuação',
  title: 'Engenharia pensada para cada etapa',
  items: [
    { quote: 'Planejamento técnico para ajudar a transformar necessidades em projetos viáveis.', name: 'Projetos', role: 'Engenharia e planejamento', hue: 250 },
    { quote: 'Acompanhamento e execução com atenção aos objetivos e particularidades de cada obra.', name: 'Obras', role: 'Execução e gestão', hue: 170 },
    { quote: 'Equipamentos de apoio para diferentes frentes de trabalho, sujeitos à disponibilidade.', name: 'Locação', role: 'Máquinas e equipamentos', hue: 20 },
  ],
}

export const pricing = {
  eyebrow: 'Fale com a R3L',
  title: 'Vamos conversar sobre sua obra?',
  description: 'Compartilhe seu contato para iniciar uma conversa sobre serviços de engenharia ou locação de equipamentos.',
  yearlyNote: 'Sob consulta',
  tiers: [] as { name: string; monthly: number; yearly: number; description: string; cta: string; popular?: boolean; features: string[] }[],
}

export const faq = {
  title: 'Dúvidas frequentes',
  items: [
    { q: 'Quais serviços a R3L Engenharia oferece?', a: 'A R3L Engenharia realiza todo tipo de serviço de engenharia: projetos, construção, reformas, ampliações, manutenção, elétrica, hidráulica, pintura, drywall, forros, divisórias, concretagem, demolição, infraestrutura, acabamentos e muito mais.' },
    { q: 'A R3L faz locação de maquinário e equipamentos?', a: 'Sim. Fazemos locação de maquinário, ferramentas e equipamentos para obras. Consulte a equipe para confirmar itens disponíveis, condições e disponibilidade.' },
    { q: 'Como solicito um orçamento?', a: 'Preencha o formulário "Solicitar orçamento" com nome, telefone/WhatsApp, e-mail e serviço ou equipamento de interesse. Você será redirecionado automaticamente para o WhatsApp com seus dados e o serviço de interesse em mensagem personalizada.' },
    { q: 'Em quais cidades a R3L atende?', a: 'O perfil da empresa indica atendimento em Salvador, Lauro de Freitas e Camaçari.' },
    { q: 'Como funciona a locação de maquinário?', a: 'Condições, prazo, transporte e disponibilidade são definidos conforme o maquinário ou equipamento e a localização da obra.' },
  ],
}

export const cta = {
  title: 'Vamos construir seu próximo projeto?',
  description: 'Fale com a equipe da R3L Engenharia para solicitar um orçamento de projetos, construção, reformas, manutenção ou locação de maquinário e equipamentos.',
  placeholder: 'Seu e-mail',
  button: 'Solicitar orçamento via WhatsApp',
  success: 'Redirecionando para o WhatsApp...',
}

export const footer = {
  blurb: 'R3L Engenharia - Todo serviço de engenharia, do projeto à execução. Locação de maquinário para obra. Qualidade em cada detalhe. Confiança em cada entrega.',
  columns: [
    { title: 'Serviços', links: ['Projetos', 'Construção e reformas', 'Infraestrutura', 'Manutenção'] },
    { title: 'Locação', links: ['Locação de maquinário', 'Equipamentos', 'Ferramentas', 'Orçamento'] },
    { title: 'Atendimento', links: ['Solicitar orçamento', 'Obras', 'Acompanhamento técnico', 'Contato'] },
  ],
  legal: `© ${new Date().getFullYear()} R3L Engenharia. Todos os direitos reservados.`,
}
