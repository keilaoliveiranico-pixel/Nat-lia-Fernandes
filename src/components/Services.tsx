import React, { useState } from 'react';
import { Activity, ShieldCheck, Heart, Move, Zap, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const servicesList = [
    {
      id: 'fisioterapia-clinica',
      category: 'reabilitacao',
      title: 'Fisioterapia Clínica & Reabilitação',
      description: 'Tratamento focado no alívio de dores articulares e musculares, recuperação pós-lesão e restauração funcional.',
      benefits: [
        'Alívio progressivo da dor crônica e aguda',
        'Restauração de movimentos naturais',
        'Prevenção de recidivas e compensações',
        'Protocolo direcionado à sua rotina',
      ],
      indications: 'Dores na coluna, tendinopatias, pós-operatórios e limitações de mobilidade.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80',
      icon: Activity,
    },
    {
      id: 'terapia-manual',
      category: 'cuidado',
      title: 'Terapia Manual & Liberação Miofascial',
      description: 'Técnicas manuais especializadas para diminuir pontos de tensão muscular, melhorar a circulação e devolver o bem-estar físico.',
      benefits: [
        'Desativação de pontos de gatilho miofasciais',
        'Melhora imediata da sensação de rigidez',
        'Relaxamento e reequilíbrio postural',
        'Aumento da flexibilidade tecidual',
      ],
      indications: 'Tensão cervical, dores posturais, sobrecargas musculares do dia a dia.',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=700&q=80',
      icon: Heart,
    },
    {
      id: 'prevencao-postural',
      category: 'prevencao',
      title: 'Cuidado Postural & Prevenção',
      description: 'Análise detalhada de padrões biomecânicos com exercícios terapêuticos para fortalecimento dos músculos estabilizadores.',
      benefits: [
        'Reeducação de hábitos e posturas no trabalho',
        'Fortalecimento de core e estabilizadores',
        'Maior ergonomia nas atividades cotidianas',
        'Autonomia e consciência corporal',
      ],
      indications: 'Profissionais que trabalham muito tempo sentados ou em pé, praticantes de atividades.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80',
      icon: Move,
    },
    {
      id: 'avaliacao-funcional',
      category: 'reabilitacao',
      title: 'Avaliação Funcional Completa',
      description: 'Diagnóstico cinesiológico aprofundado para mapear assimetrias, limitações articulares e fatores geradores de sobrecarga.',
      benefits: [
        'Identificação da causa raiz do desconforto',
        'Mapeamento biomecânico individualizado',
        'Elaboração de plano terapêutico exclusivo',
        'Definição de metas realistas e graduais',
      ],
      indications: 'Primeira consulta de todo novo paciente ou antes de iniciar novas práticas físicas.',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=700&q=80',
      icon: Zap,
    },
  ];

  const filteredServices = activeFilter === 'todos'
    ? servicesList
    : servicesList.filter((s) => s.category === activeFilter);

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#0b1413] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary px-3 py-1 text-xs">
            Serviços & Atendimentos
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tratamentos planejados para a sua <span className="text-primary">saúde e mobilidade</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Cada sessão é personalizada. Utilizamos abordagens éticas, atualizadas e livres de fórmulas prontas para cuidar de você com total dedicação.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveFilter('todos')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'todos'
                  ? 'bg-primary text-[#0b1413] shadow-md shadow-primary/20'
                  : 'bg-[#14211f] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              Todos os Serviços
            </button>
            <button
              onClick={() => setActiveFilter('reabilitacao')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'reabilitacao'
                  ? 'bg-primary text-[#0b1413] shadow-md shadow-primary/20'
                  : 'bg-[#14211f] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              Reabilitação & Alívio
            </button>
            <button
              onClick={() => setActiveFilter('cuidado')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'cuidado'
                  ? 'bg-primary text-[#0b1413] shadow-md shadow-primary/20'
                  : 'bg-[#14211f] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              Terapia Manual
            </button>
            <button
              onClick={() => setActiveFilter('prevencao')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'prevencao'
                  ? 'bg-primary text-[#0b1413] shadow-md shadow-primary/20'
                  : 'bg-[#14211f] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              Postura & Prevenção
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="bg-[#14211f] border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:shadow-primary/10"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14211f] via-[#14211f]/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3 p-2 rounded-lg bg-[#0b1413]/80 backdrop-blur-sm text-primary border border-primary/30">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <CardHeader className="pt-2">
                    <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1 font-normal">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-2">
                        Benefícios do atendimento:
                      </span>
                      <ul className="space-y-1.5">
                        {service.benefits.map((b, idx) => (
                          <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#0b1413]/60 border border-white/5 text-[11px] text-slate-400">
                      <strong className="text-slate-200">Indicações comuns: </strong>
                      {service.indications}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="pt-2 pb-6">
                  <Button
                    onClick={() => onSelectService(service.title)}
                    className="w-full justify-between bg-primary/10 hover:bg-primary text-primary hover:text-[#0b1413] border border-primary/30 font-semibold text-xs py-2 transition-all"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5" />
                      Agendar este serviço
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 inline-flex items-center gap-2 text-xs text-slate-300 max-w-xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
          <span>Dúvidas sobre qual serviço é indicado para o seu caso? Realizamos uma triagem inicial sem compromisso pelo WhatsApp.</span>
        </div>

      </div>
    </section>
  );
};