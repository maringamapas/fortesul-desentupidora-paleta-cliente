// Este é o ficheiro que vais alterar para cada novo cliente.
export const SITE_CONFIG = {
  // Informações Gerais do Cliente
  client: {
    name: "Fortesul Desentupidora e Locações",
    shortName: "Fortesul",
    domain: "www.fortesuldesentupidora.com.br",
    description: "Locação de banheiros químicos, limpeza de fossa e desentupimento em Palhoça e região. Atendimento especializado 24h.",
  },

  // Identidade Visual (Cores) - Forte Sul Palette
  theme: {
    colors: {
      primary: "#0A6847",    // Cor principal (verde escuro - transmite confiança e profissionalismo)
      secondary: "#F5F5DC",  // Cor secundária (creme - seções alternadas)
      accent: "#0A6847",     // Cor de destaque (verde escuro)
      background: "#FFFFFF", // Fundo principal (branco)
      text: "#333333",       // Texto do corpo (cinza escuro)
    },
    borderRadius: "0.5rem",
  },

  // Conteúdo da Home Page (Hero Section)
  hero: {
    badge: "Soluções Sanitárias em Palhoça - SC",
    title: "Fortesul - Locação de Banheiros Químicos e Limpa Fossa",
    highlight: "Fortesul - Locação de Banheiros Químicos e Limpa Fossa",
    subtitle: "Líder em soluções sanitárias e limpeza técnica em Palhoça e Grande Florianópolis.",
    ctaText: "Solicitar Orçamento via WhatsApp",
    ctaLink: "https://wa.me/5548984348551?text=Olá! Gostaria de solicitar um orçamento para os serviços da Fortesul.",
    ctaSecondary: "48 98434-8551",
    heroImage: "/images/banheiro-quimico.jpg",
    stats: {
      experience: { value: "10+", label: "Anos de experiência" },
      projects: { value: "2000+", label: "Atendimentos realizados" },
    },
  },

  // Seção Sobre
  about: {
    title: "Especialistas em Saneamento e Higiene",
    text: "Com mais de 10 anos de experiência, a Fortesul é referência na locação de banheiros químicos e serviços de limpa fossa com descarte 100% legalizado.",
  },

  // Seção Quem Somos
  quemSomos: {
    title: "Especialistas em Saneamento e Higiene",
    paragraph: "Com mais de 10 anos de experiência, a Fortesul é referência na locação de banheiros químicos e serviços de limpa fossa com descarte 100% legalizado.",
    yearsOfExperience: "10+",
    experienceLabel: "Anos de experiência",
  },

  // Serviços Detalhados
  servicos: [
    {
      id: 1,
      title: "Locação de Banheiros Químicos",
      description: "Cabines modernas, higienizadas e com manutenção periódica para seu canteiro de obras ou evento.",
      icon: "🚽",
    },
    {
      id: 2,
      title: "Limpeza de Fossa",
      description: "Esgotamento técnico com caminhões vácuo-compressor para descarte seguro e regulamentado.",
      icon: "🚚",
    },
    {
      id: 3,
      title: "Desentupimento 24h",
      description: "Soluções rápidas e eficazes para esgotos, vasos sanitários, pias, ralos e calhas.",
      icon: "🔧",
    },
    {
      id: 4,
      title: "Hidrojateamento",
      description: "Limpeza de alta pressão para desobstrução de redes de esgoto industriais e remoção de incrustações.",
      icon: "💨",
    },
  ],

  // Diferenciais
  diferenciais: [
    {
      numero: "01",
      titulo: "Atendimento 24h para Emergências",
    },
    {
      numero: "02",
      titulo: "Frota Própria e Equipamentos de Ponta",
    },
    {
      numero: "03",
      titulo: "Certificação Ambiental e Descarte Legalizado",
    },
    {
      numero: "04",
      titulo: "Equipe Treinada e Uniformizada",
    },
  ],

  // Depoimentos
  depoimentos: [
    {
      name: "Luciana Ferreira",
      role: "Proprietária - Residência em Palhoça",
      text: "Contratei para limpeza de fossa e fiquei impressionada com a agilidade e o profissionalismo. Resolveram tudo em menos de duas horas, sem sujeira e sem odor. Recomendo demais!",
      rating: 5,
    },
    {
      name: "Ricardo Souza",
      role: "Gerente de Obras - Construtora SC",
      text: "Alugamos banheiros químicos para nosso canteiro de obras em Palhoça. Entrega no prazo, cabines sempre limpas e manutenção periódica sem precisar cobrar. Parceria que renovo sempre.",
      rating: 5,
    },
    {
      name: "Patrícia Nunes",
      role: "Organizadora de Eventos - Grande Florianópolis",
      text: "Para nosso festival com mais de 800 pessoas, forneceram banheiros químicos em perfeito estado. Equipe atenciosa, estrutura impecável. Com certeza voltarei a contratar!",
      rating: 5,
    },
    {
      name: "Marcos Andrade",
      role: "Síndico de Condomínio - São José",
      text: "Chamei para desentupir a rede de esgoto do condomínio. Atendimento rápido, preço justo e resultado garantido. Equipe séria e bem treinada. Excelente!",
      rating: 5,
    },
    {
      name: "Camila Ramos",
      role: "Proprietária - Pousada Florianópolis",
      text: "A fossa da pousada estava transbordando numa sexta à noite. Atenderam em menos de uma hora e resolveram tudo. Atendimento 24h que realmente funciona. Salvaram meu fim de semana!",
      rating: 5,
    },
    {
      name: "Tiago Becker",
      role: "Engenheiro Civil - Palhoça",
      text: "Utilizo os serviços em todas as obras que gerencio. Locação de banheiros químicos com descarte 100% legalizado, o que é fundamental para cumprir as normas ambientais. Serviço de altíssimo nível.",
      rating: 5,
    },
  ],

  // Seção de Contactos
  contact: {
    email: "contato@fortesuldesentupidora.com.br",
    phone: "(48) 98434-8551",
    phoneRaw: "48984348551",
    whatsapp: "5548984348551",
    address: "Centro Empresarial - Rua Cecília do Rego Almeida, Jardim Eldorado, Palhoça - SC, CEP 88133-560",
    googleMapsLink: "https://goo.gl/maps/...",
  },

  // Redes Sociais
  social: {
    instagram: "https://instagram.com/fortesuldesentupidora",
    facebook: "https://facebook.com/fortesuldesentupidora",
    twitter: "https://twitter.com/fortesulsc",
    linkedin: "https://linkedin.com/company/fortesuldesentupidora",
  },

  // Configurações de SEO
  seo: {
    ogImage: "/images/og-images.jpg",
    keywords: ["banheiro químico", "limpa fossa", "desentupidora", "Palhoça", "Grande Florianópolis", "locação banheiro químico", "limpeza de fossa", "desentupimento 24h", "esgotamento sanitário"],
  },

  // Navegação
  nav: {
    links: [
      { href: "#inicio", label: "Início" },
      { href: "#sobre", label: "Sobre" },
      { href: "#servicos", label: "Serviços" },
      { href: "#diferenciais", label: "Diferenciais" },
      { href: "#depoimentos", label: "Depoimentos" },
      { href: "#faq", label: "FAQ" },
      { href: "#contato", label: "Contato" },
    ],
    ctaText: "Solicitar Orçamento",
  },

  // Footer
  footer: {
    description: "Soluções sanitárias completas para sua obra, evento ou residência",
    services: [
      "Locação de Banheiros Químicos",
      "Limpeza de Fossa",
      "Desentupimento",
      "Esgotamento Sanitário",
    ],
    quickLinks: [
      { href: "#inicio", label: "Início" },
      { href: "#sobre", label: "Sobre Nós" },
      { href: "#diferenciais", label: "Diferenciais" },
      { href: "#contato", label: "Contato" },
    ],
    legal: {
      privacy: "#",
      terms: "#",
    },
    copyright: "© 2025 Fortesul Desentupidora. Todos os direitos reservados.",
    madeBy: {
      text: "WebStudio",
      link: "https://webstudiomga.vercel.app/",
    },
  },

  // CTA Section
  cta: {
    title: "Precisa de banheiro químico ou limpeza de fossa?",
    description: "Entre em contato agora e receba um orçamento gratuito. Nossa equipe está pronta para atender você com agilidade e responsabilidade ambiental.",
    primaryButton: "Chamar no WhatsApp",
    secondaryButton: "(48) 98434-8551",
    footnote: "Atendimento para obras, eventos e residências. Orçamento sem compromisso.",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
