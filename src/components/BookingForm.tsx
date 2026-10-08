import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Clock, MapPin, Calendar, User, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CLINIC_INFO, SERVICES_DATA } from '@/data/physioData';

export const BookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES_DATA[0].title);
  const [period, setPeriod] = useState('Manhã');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-formatted WhatsApp message
    const formattedMsg = `*Novo Agendamento via Site Nat Fernandes*%0A` +
      `👤 *Nome:* ${name}%0A` +
      `📱 *Telefone:* ${phone}%0A` +
      `🩺 *Serviço de Interesse:* ${service}%0A` +
      `⏰ *Período Preferido:* ${period}%0A` +
      `📝 *Queixa ou Detalhe:* ${notes || 'Não informado'}`;

    setIsSubmitted(true);
    
    // Open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${formattedMsg}`, '_blank');
    }, 400);
  };

  return (
    <section id="contato" className="py-20 md:py-28 relative bg-secondary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact info & location */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Contato & Localização
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Vamos cuidar da sua saúde?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Preencha o formulário ao lado para enviar suas informações diretamente pelo WhatsApp da Dra. Nat Fernandes ou utilize os canais diretos abaixo.
              </p>
            </div>

            {/* Clinic Info Cards */}
            <div className="space-y-3 pt-2">
              
              <div className="p-4 rounded-xl glass-card flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Consultório Presencial</h4>
                  <p className="text-xs text-muted-foreground">{CLINIC_INFO.address.street}</p>
                  <p className="text-xs text-muted-foreground">{CLINIC_INFO.address.neighborhood} - {CLINIC_INFO.address.city}</p>
                  <span className="text-[11px] text-emerald-400 font-medium">Próximo ao metrô e com estacionamento conveniado</span>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-300 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Horários de Atendimento</h4>
                  {CLINIC_INFO.hours.map((h, i) => (
                    <p key={i} className="text-xs text-muted-foreground">
                      <strong className="text-foreground/90">{h.days}:</strong> {h.time}
                    </p>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">WhatsApp Profissional</h4>
                  <p className="text-xs text-muted-foreground">{CLINIC_INFO.phoneFormatted}</p>
                  <p className="text-[11px] text-primary">Atendimento ágil para dúvidas e agendamentos</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <Card className="glass-card border-primary/30 shadow-2xl relative overflow-hidden text-left">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Agendamento Facilitado</span>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Solicite seu horário de avaliação
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  Seus dados serão enviados em formato de mensagem estruturada no WhatsApp.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" />
                      <span>Nome Completo *</span>
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="Ex: Dra. Mariana Costa"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-secondary/40 border-border/70 focus:border-primary text-foreground"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      <span>WhatsApp / Telefone com DDD *</span>
                    </label>
                    <Input
                      type="tel"
                      required
                      placeholder="Ex: (11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-secondary/40 border-border/70 focus:border-primary text-foreground"
                    />
                  </div>

                  {/* Service Selector & Period */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Serviço de Interesse
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full h-10 px-3 rounded-md bg-secondary/40 border border-border/70 text-foreground text-sm focus:outline-none focus:border-primary"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title} className="bg-card text-foreground">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Período de Preferência
                      </label>
                      <select
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        className="w-full h-10 px-3 rounded-md bg-secondary/40 border border-border/70 text-foreground text-sm focus:outline-none focus:border-primary"
                      >
                        <option value="Manhã (07:30 - 12:00)" className="bg-card text-foreground">Manhã (07:30 - 12:00)</option>
                        <option value="Tarde (13:00 - 18:00)" className="bg-card text-foreground">Tarde (13:00 - 18:00)</option>
                        <option value="Noite (18:00 - 19:30)" className="bg-card text-foreground">Noite (18:00 - 19:30)</option>
                        <option value="Sábados pela Manhã" className="bg-card text-foreground">Sábados pela Manhã</option>
                      </select>
                    </div>

                  </div>

                  {/* Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Conte um pouco sobre sua queixa ou objetivo (opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Sinto dores nas costas ao passar muito tempo sentada no trabalho..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 rounded-md bg-secondary/40 border border-border/70 text-foreground text-sm focus:outline-none focus:border-primary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-6 text-base rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>ENVIAR E AGENDAR NO WHATSAPP</span>
                  </Button>

                  <p className="text-[11px] text-center text-muted-foreground pt-1">
                    🔒 Seus dados são protegidos e utilizados exclusivamente para o agendamento da sua consulta.
                  </p>

                </form>
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};