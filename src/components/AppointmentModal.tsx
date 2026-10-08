import React, { useState } from 'react';
import { X, MessageCircle, User, Phone, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'Fisioterapia Clínica');
  const [preferredShift, setPreferredShift] = useState('Manhã');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mensagem formatada e amigável para o WhatsApp da Fisioterapeuta Nat Fernandes
    const message = `Olá, Dra. Nat Fernandes! Gostaria de agendar uma avaliação.
    
*Nome:* ${name}
*Telefone/WhatsApp:* ${phone}
*Serviço de interesse:* ${service}
*Período preferencial:* ${preferredShift}
${notes ? `*Principais queixas:* ${notes}` : ''}

Vi seu site e gostaria de saber os horários disponíveis.`;

    const encodedMessage = encodeURIComponent(message);
    // Link padrão para o WhatsApp da fisioterapeuta
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#14211f] border border-primary/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-primary/20 text-primary text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendamento Direto no WhatsApp</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Solicitar Avaliação</h3>
          <p className="text-xs text-slate-300">
            Preencha os dados abaixo para gerar sua mensagem personalizada e consultar os horários com a Nat Fernandes.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Seu Nome Completo</label>
            <div className="relative">
              <Input
                type="text"
                required
                placeholder="Ex: Ana Clara Souza"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#0b1413] border-primary/20 text-white pl-9 text-xs h-10"
              />
              <User className="w-4 h-4 text-primary absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Seu Telefone / WhatsApp</label>
            <div className="relative">
              <Input
                type="tel"
                required
                placeholder="(DDD) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-[#0b1413] border-primary/20 text-white pl-9 text-xs h-10"
              />
              <Phone className="w-4 h-4 text-primary absolute left-3 top-3" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Serviço Desejado</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full h-10 bg-[#0b1413] border border-primary/20 rounded-md px-3 text-xs text-white focus:outline-none focus:border-primary"
              >
                <option value="Fisioterapia Clínica">Fisioterapia Clínica</option>
                <option value="Terapia Manual">Terapia Manual</option>
                <option value="Cuidado Postural">Cuidado Postural</option>
                <option value="Avaliação Funcional">Avaliação Funcional</option>
                <option value="Outro / Não sei informar">Outro / Tirar dúvidas</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Melhor Período</label>
              <select
                value={preferredShift}
                onChange={(e) => setPreferredShift(e.target.value)}
                className="w-full h-10 bg-[#0b1413] border border-primary/20 rounded-md px-3 text-xs text-white focus:outline-none focus:border-primary"
              >
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite</option>
                <option value="Flexível">Qualquer horário</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
              Conte brevemente suas dores ou objetivo (opcional)
            </label>
            <div className="relative">
              <textarea
                rows={2}
                placeholder="Ex: Dor na lombar ao trabalhar, dor no ombro..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#0b1413] border border-primary/20 rounded-md p-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-primary text-[#0b1413] hover:bg-primary/90 font-bold gap-2 py-5 shadow-lg shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enviar e Abrir no WhatsApp</span>
            </Button>
          </div>

          <p className="text-[10px] text-center text-slate-400">
            Seus dados são protegidos e utilizados exclusivamente para o contato do seu agendamento.
          </p>
        </form>

      </div>
    </div>
  );
};