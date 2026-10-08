import React, { useState } from 'react';
import { Camera, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todos' | 'consultorio' | 'atendimento' | 'equipamentos'>('todos');

  const galleryItems = [
    {
      id: 1,
      category: 'consultorio',
      title: 'Ambiente Clínico Aconchegante',
      subtitle: 'Espaço climatizado, privativo e higienizado',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 2,
      category: 'atendimento',
      title: 'Avaliação Individualizada',
      subtitle: 'Atenção exclusiva e sem pressa',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 3,
      category: 'equipamentos',
      title: 'Recursos & Maca Ergonômica',
      subtitle: 'Conforto durante toda a sessão',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 4,
      category: 'atendimento',
      title: 'Exercícios Terapêuticos Guiados',
      subtitle: 'Correção de postura e movimento',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 5,
      category: 'consultorio',
      title: 'Sala de Atendimento Reservada',
      subtitle: 'Privacidade e tranquilidade para você',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 6,
      category: 'equipamentos',
      title: 'Instrumentos de Terapia Manual',
      subtitle: 'Técnicas atualizadas e seguras',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const filteredItems = activeTab === 'todos'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#0b1413] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary px-3 py-1 text-xs">
            <Camera className="w-3.5 h-3.5 mr-1" />
            Galeria Profissional
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Conheça o nosso <span className="text-primary">espaço e atendimento</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Ambiente planejado para oferecer conforto, privacidade e todo o suporte que a sua recuperação necessita.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'todos'
                  ? 'bg-primary text-[#0b1413]'
                  : 'bg-[#14211f] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveTab('consultorio')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'consultorio'
                  ? 'bg-primary text-[#0b1413]'
                  : 'bg-[#14211f] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              Consultório
            </button>
            <button
              onClick={() => setActiveTab('atendimento')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'atendimento'
                  ? 'bg-primary text-[#0b1413]'
                  : 'bg-[#14211f] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              Atendimento
            </button>
            <button
              onClick={() => setActiveTab('equipamentos')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'equipamentos'
                  ? 'bg-primary text-[#0b1413]'
                  : 'bg-[#14211f] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              Recursos
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-primary/20 bg-[#14211f] aspect-4/3 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1413] via-[#0b1413]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary mb-1">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{item.category.toUpperCase()}</span>
                </div>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-300 mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};