export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  indications: string[];
  benefits: string[];
  duration: string;
  format: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ambiente' | 'atendimento' | 'bastidores';
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  treatment: string;
  rating: number;
  date: string;
}

export const CLINIC_INFO = {
  name: "Nat Fernandes",
  title: "Fisioterapeuta & Especialista em Movimento Humano",
  crefito: "CREFITO-3 / 123456-F", // Campo editável
  phoneFormatted: "(11) 98765-4321",
  phoneRaw: "5511987654321",
  instagramHandle: "@natfernandes_fisio",
  instagramUrl: "https://www.instagram.com/natfernandes_fisio/",
  email: "contato@natfernandesfisio.com.br",
  address: {
    street: "Av. Paulista, 1578 - Conj. 804",
    neighborhood: "Bela Vista",
    city: "São Paulo - SP",
    cep: "01310-200"
  },
  hours: [
    { days: "Segunda a Sexta", time: "07:30 às 19:30" },
    { days: "Sábados", time: "08:00 às 13:00 (com agendamento prévio)" }
  ],
  bio: {
    greeting: "Prazer, sou Nat Fernandes!",
    headline: "Fisioterapeuta apaixonada pela recuperação do movimento e pelo cuidado integral da saúde feminina e funcional.",
    quote: "Acredito que cada pessoa possui uma história, necessidades e objetivos únicos. Por isso, meu trabalho é oferecer um atendimento individualizado, baseado em conhecimento, acolhimento e respeito.",
    education: [
      { year: "Graduação", title: "Bacharelado em Fisioterapia", institution: "Instituição de Excelência em Saúde" },
      { year: "Pós-graduação", title: "Especialização em Fisioterapia Traumato-Ortopédica & Reabilitação Funcional" },
      { year: "Aperfeiçoamento", title: "Terapia Manual Avançada e Avaliação Biomecânica Postural" },
      { year: "Educação Continuada", title: "Cuidado em Saúde da Mulher, Movimento Terapêutico e Prevenção de Lesões" }
    ],
    philosophy: "A minha conduta une rigor técnico e empatia clínica. Não tratamos apenas uma queixa isolada, mas a pessoa como um todo, desenvolvendo autonomia e qualidade de vida duradoura."
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "reabilitacao-ortopedica",
    title: "Reabilitação Traumato-Ortopédica",
    subtitle: "Tratamento individualizado para dores musculares, articulares e lesões.",
    description: "Abordagem baseada em evidências para o alívio da dor, restabelecimento da mobilidade e fortalecimento das estruturas musculoesqueléticas após lesões ou cirurgias.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    indications: [
      "Dores na coluna (cervical, torácica e lombar)",
      "Tendinites, bursites e contraturas",
      "Pós-operatório de joelho, quadril e ombro",
      "Entorses e reabilitação postural"
    ],
    benefits: [
      "Alívio sustentável dos desconfortos diários",
      "Recuperação progressiva da amplitude articular",
      "Retorno seguro às atividades físicas e laborais",
      "Prevenção de recidivas e compensações posturais"
    ],
    duration: "50 a 60 minutos",
    format: "Sessão individual e presencial"
  },
  {
    id: "fisioterapia-preventiva",
    title: "Fisioterapia Preventiva & Ergonomia",
    subtitle: "Prevenção de dores ocupacionais e melhora da performance diária.",
    description: "Programa de intervenção precoce para profissionais e praticantes de exercícios que desejam manter o corpo alinhado, flexível e livre de sobrecargas mecânicas.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    indications: [
      "Pessoas que trabalham longos períodos sentadas ou no computador",
      "Sensação frequente de cansaço ou peso muscular nos ombros",
      "Desvios e vícios posturais no dia a dia",
      "Preparação do corpo para novas rotinas de treino"
    ],
    benefits: [
      "Consciência e controle postural aprimorados",
      "Diminuição de tensões tensionais e cefaleias tensionais",
      "Aumento da disposição e da energia ao longo do dia",
      "Orientações personalizadas para ergonomia no trabalho e em casa"
    ],
    duration: "50 minutos",
    format: "Presencial com plano de exercícios domiciliares"
  },
  {
    id: "terapia-manual",
    title: "Terapia Manual & Liberação Miofascial",
    subtitle: "Técnicas manuais suaves e precisas para alívio de nós e tensões profundas.",
    description: "Conjunto de manobras manuais especializadas que atuam diretamente sobre os tecidos moles, fáscias e articulações, promovendo relaxamento muscular e descompressão.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
    indications: [
      "Pontos-gatilho (trigger points) e rigidez na nuca e costas",
      "Restrição no movimento dos ombros e quadris",
      "Sobrecarga esportiva ou estresse físico acumulado",
      "Dores miofasciais crônicas ou agudas"
    ],
    benefits: [
      "Alívio imediato da sensação de aperto muscular",
      "Melhora instantânea na circulação e oxigenação tecidual",
      "Redução da rigidez articular",
      "Sensação profunda de relaxamento e leveza corporal"
    ],
    duration: "45 a 60 minutos",
    format: "Técnicas manuais individualizadas"
  },
  {
    id: "saude-mulher-funcional",
    title: "Cuidado Funcional & Bem-Estar Feminino",
    subtitle: "Atenção dedicada às diferentes fases e necessidades do corpo feminino.",
    description: "Atendimento acolhedor focado no equilíbrio biomecânico, fortalecimento do core, mobilidade pélvica e alívio de dores posturais comuns na rotina feminina.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    indications: [
      "Desconfortos posturais na gravidez e puerpério",
      "Necessidade de fortalecimento consciente da musculatura de sustentação",
      "Prevenção de dores lombares e pélvicas",
      "Retorno gradual e seguro ao movimento pós-parto"
    ],
    benefits: [
      "Acolhimento empático e ambiente totalmente seguro e privativo",
      "Alívio de dores nas costas e na região do sacro",
      "Reeducação respiratória e estabilização do tronco",
      "Maior confiança e bem-estar corporal"
    ],
    duration: "50 minutos",
    format: "Atendimento exclusivo individualizado"
  }
];

export const DIFFERENTIALS_DATA = [
  {
    number: "01",
    title: "Atendimento Humanizado",
    description: "Escuta atenta e sem pressa. Aqui cada consulta é um momento de respeito à sua história e aos limites do seu corpo.",
    icon: "HeartHandshake"
  },
  {
    number: "02",
    title: "Avaliação Individualizada",
    description: "Investigação criteriosa da sua mobilidade, postura e rotina antes de propor qualquer intervenção terapêutica.",
    icon: "ClipboardCheck"
  },
  {
    number: "03",
    title: "Planejamento Terapêutico Personalizado",
    description: "Protocolos sob medida, adaptados aos seus objetivos específicos de curto, médio e longo prazo.",
    icon: "Target"
  },
  {
    number: "04",
    title: "Acompanhamento da Evolução",
    description: "Monitoramento contínuo dos seus ganhos funcionais, ajustando os exercícios conforme seu progresso.",
    icon: "TrendingUp"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "Passo 1",
    title: "Agendamento Simples",
    description: "Entre em contato pelo WhatsApp e consulte os horários disponíveis que melhor se ajustam à sua rotina.",
    icon: "MessageCircle"
  },
  {
    step: "Passo 2",
    title: "Avaliação Fisioterapêutica",
    description: "Uma consulta detalhada e individual para compreender o histórico, queixas e objetivos funcionais.",
    icon: "Stethoscope"
  },
  {
    step: "Passo 3",
    title: "Acompanhamento & Evolução",
    description: "Planejamento fisioterapêutico contínuo com condutas manuais, exercícios guiados e orientação postural.",
    icon: "Sparkles"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "dep-1",
    name: "Mariana Alencar",
    role: "Advogada & Paciente",
    text: "O atendimento da Dra. Nat é incomparável. Cheguei ao consultório com dores intensas na cervical devido às horas no escritório. Com a avaliação minuciosa e os exercícios guiados, voltei a ter noites de sono tranquilas e disposição no trabalho.",
    treatment: "Reabilitação Traumato-Ortopédica",
    rating: 5,
    date: "Avaliação autorizada"
  },
  {
    id: "dep-2",
    name: "Camila Guimarães",
    role: "Designer & Praticante de Corrida",
    text: "Espaço acolhedor, profissional extremamente competente e atenciosa. A Nat me explicou cada detalhe da minha pisada e das compensações que eu estava fazendo. Sinto meu corpo muito mais equilibrado e confiante.",
    treatment: "Fisioterapia Preventiva & Movimento",
    rating: 5,
    date: "Avaliação autorizada"
  },
  {
    id: "dep-3",
    name: "Renata Vasconcelos",
    role: "Arquiteta",
    text: "A delicadeza e a precisão da terapia manual fizeram toda a diferença na minha recuperação de uma dor lombar crônica. A pontualidade e o cuidado individualizado são admiráveis!",
    treatment: "Terapia Manual & Liberação",
    rating: 5,
    date: "Avaliação autorizada"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Consultório e Sala de Avaliação",
    category: "ambiente",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    description: "Ambiente calmo, climatizado e projetado para proporcionar máxima privacidade e conforto durante sua sessão."
  },
  {
    id: "gal-2",
    title: "Atendimento Personalizado 1:1",
    category: "atendimento",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    description: "Foco total em você durante todo o período da sua consulta, sem divisões de horário."
  },
  {
    id: "gal-3",
    title: "Recursos Terapêuticos e Equipamentos",
    category: "ambiente",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    description: "Materiais e recursos modernos higienizados rigorosamente para suas terapias manuais e funcionais."
  },
  {
    id: "gal-4",
    title: "Avaliação de Movimento e Postura",
    category: "atendimento",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    description: "Testes funcionais e biomecânicos para identificar a raiz da queixa com precisão."
  },
  {
    id: "gal-5",
    title: "Cuidado e Humanização em Cada Detalhe",
    category: "bastidores",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    description: "Planejamento dos prontuários e estudos contínuos para cada caso clínico."
  },
  {
    id: "gal-6",
    title: "Espaço de Reabilitação Funcional",
    category: "ambiente",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    description: "Área ampla com solo emborrachado e acessórios para exercícios guiados seguros."
  }
];

export const ETHICAL_NOTE = "Este site tem caráter informativo e educativo, em conformidade com as diretrizes do Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO). Os resultados de tratamentos fisioterapêuticos são individuais e dependem da avaliação clínica presencial, adesão do paciente e características biológicas de cada organismo. Não prometemos diagnósticos automáticos ou resultados milagrosos.";