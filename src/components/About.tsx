import React from 'react';
import { User, GraduationCap, FileCheck, Stethoscope, HeartHandshake, CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface AboutProps {
  onOpenSchedule: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenSchedule }) => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#14211f]/60 relative border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Professional Photo column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 bg-gradient-to-b from-primary/20 to-emerald-700/10 rounded-3xl blur-md" />
              
              <div className="relative rounded-3xl overflow-hidden border border-primary/30 shadow-2xl bg-[#0b1413]">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                  alt="Dra. Nat Fernandes Atendimento"
                  className="w-full h-[480px] object-cover"
                />
                
                <div className="p-5 bg-[#0b1413]/95 border-t border-primary/20 text-left space-y-2">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Filosofia de Atendimento</span>
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    &quot;Acredito que cada pessoa possui uma história, necessidades e objetivos únicos. Por isso, meu trabalho é oferecer um atendimento individualizado, baseado em conhecimento, acolhimento e respeito.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio and Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                <User className="w-3.5 h-3.5" />
                <span>Sobre a Especialista</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Prazer, sou <span className="text-primary">Nat Fernandes!</span>
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Sou fisioterapeuta apaixonada pelo movimento, reabilitação e qualidade de vida. Atuo com uma abordagem focada em entender profundamente o contexto de cada paciente, identificando as causas reais das dores ou limitações para construir um plano terapêutico assertivo e sustentável.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Card className="bg-[#0b1413]/60 border-primary/20">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/15 text-primary shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Formação Acadêmica</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Graduação em Fisioterapia e constante aperfeiçoamento em técnicas integradas.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#0b1413]/60 border-primary/20">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/15 text-primary shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Registro Profissional</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Registro ativo CREFITO com total cumprimento das diretrizes éticas da saúde.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#0b1413]/60 border-primary/20">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/15 text-primary shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Prática Baseada em Evidências</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Condutas e protocolos respaldados pela literatura científica contemporânea.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#0b1413]/60 border-primary/20">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/15 text-primary shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Atendimento Individual</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Sessões 100% dedicadas a você, sem atendimento simultâneo a múltiplos pacientes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                onClick={onOpenSchedule}
                className="bg-primary text-[#0b1413] hover:bg-primary/90 font-bold gap-2 shadow-md shadow-primary/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar com a Nat Fernandes</span>
              </Button>
              
              <a
                href="https://www.instagram.com/natfernandes_fisio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-primary/30 text-white hover:bg-primary/10 hover:text-primary h-10 px-4 py-2 transition-all"
              >
                Acompanhar no Instagram
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};