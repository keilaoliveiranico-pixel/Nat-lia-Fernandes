import React from 'react';
import { Heart, Search, FileText, TrendingUp, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const Differentials: React.FC = () => {
  const differentials = [
    {
      number: '01',
      title: 'Atendimento Humanizado',
      description:
        'Escuta ativa e genuína das suas queixas, histórico e rotina. Você nunca é tratado como apenas mais um número.',
      icon: Heart,
    },
    {
      number: '02',
      title: 'Avaliação Individualizada',
      description:
        'Tempo dedicado exclusivamente para entender seu quadro de maneira detalhada antes de qualquer intervenção.',
      icon: Search,
    },
    {
      number: '03',
      title: 'Planejamento Terapêutico Personalizado',
      description:
        'Cada conduta é montada respeitando suas limitações, dores, metas funcionais e ritmo pessoal.',
      icon: FileText,
    },
    {
      number: '04',
      title: 'Acompanhamento da Evolução',
      description:
        'Monitoramento constante do seu progresso com reavaliações periódicas para garantir avanços consistentes.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-[#14211f] relative border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary px-3 py-1 text-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Excelência no Cuidado
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Por que escolher um <span className="text-primary">atendimento individualizado?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Descubra os 4 pilares que fundamentam a prática profissional de Nat Fernandes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.number}
                className="p-6 rounded-2xl bg-[#0b1413]/70 border border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-primary/40 group-hover:text-primary transition-colors font-mono">
                      {diff.number}
                    </span>
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#0b1413] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {diff.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5">
                  <span className="text-[10px] text-primary/80 uppercase tracking-widest font-semibold">
                    Compromisso Nat Fernandes
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};