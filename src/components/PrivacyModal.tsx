import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CLINIC_INFO, ETHICAL_NOTE } from '@/data/physioData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-2xl w-full bg-card rounded-3xl border border-border/80 shadow-2xl p-6 sm:p-8 my-8 text-left space-y-5 animate-fade-in">
        
        <div className="flex items-center justify-between pb-3 border-b border-border/50">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>Política de Privacidade & Termos de Uso</span>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground p-1 rounded-md"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs text-muted-foreground leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <section className="space-y-1">
            <h4 className="text-foreground font-semibold text-sm">1. Finalidade do Site</h4>
            <p>
              Este website tem por objetivo a divulgação de serviços fisioterapêuticos prestados pela profissional <strong>{CLINIC_INFO.name}</strong>, inscrita sob o {CLINIC_INFO.crefito}, com estrita observância ao Código de Ética e Deontologia da Fisioterapia.
            </p>
          </section>

          <section className="space-y-1">
            <h4 className="text-foreground font-semibold text-sm">2. Proteção de Dados (LGPD)</h4>
            <p>
              As informações enviadas por meio do formulário de contato (nome, telefone e preferências de agendamento) são transferidas diretamente para o canal de WhatsApp do consultório e não são comercializadas, cedidas ou compartilhadas com terceiros.
            </p>
          </section>

          <section className="space-y-1">
            <h4 className="text-foreground font-semibold text-sm">3. Responsabilidade Técnica & Normas Éticas</h4>
            <p>{ETHICAL_NOTE}</p>
          </section>

          <section className="space-y-1">
            <h4 className="text-foreground font-semibold text-sm">4. Direitos Autorais</h4>
            <p>
              Todo o conteúdo visual e textual deste site é protegido pelas leis de propriedade intelectual. É vedada a reprodução sem autorização prévia por escrito.
            </p>
          </section>
        </div>

        <div className="pt-3 border-t border-border/50 flex justify-end">
          <Button onClick={onClose} className="bg-primary text-primary-foreground">
            Entendi e Concordo
          </Button>
        </div>

      </div>
    </div>
  );
};