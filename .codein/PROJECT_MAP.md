# 🗺️ Mapa de Arquitetura e Estrutura — Nat Fernandes | Fisioterapia Integrada & Cuidado Humanizado

> **Sincronizado automaticamente pelo Code In Engine** em `2026-10-08 16:28:08`
> Este documento é a referência viva e em tempo real da arquitetura, componentes e entidades de negócio do projeto.

---

## 1. Visão Geral do Domínio e Identidade
- **Nome do Projeto**: `Nat Fernandes | Fisioterapia Integrada & Cuidado Humanizado`
- **Descrição**: Cuidado fisioterapêutico humanizado, reabilitação traumato-ortopédica, terapia manual e prevenção com foco na sua qualidade de vida. Agende sua avaliação com Nat Fernandes.
- **Stack Tecnológica**: React 18 + TypeScript + Vite + Tailwind CSS
- **Design Tokens**: Configurados em `src/index.css` e `tailwind.config.js`
- **Utilitários**: `src/lib/utils.ts` (função `cn`)

---

## 2. Fontes de Dados e Entidades de Domínio
- **`src/data/physioData.ts`** (`CLINIC_INFO`): Coleção de dados estruturados (CLINIC_INFO) *(~1 itens registrados)*
- **`src/data/physioData.ts`** (`DIFFERENTIALS_DATA`): Coleção de dados estruturados (DIFFERENTIALS_DATA) *(~1 itens registrados)*
- **`src/data/physioData.ts`** (`HOW_IT_WORKS_STEPS`): Coleção de dados estruturados (HOW_IT_WORKS_STEPS) *(~3 itens registrados)*
- **`src/data/physioData.ts`** (`ETHICAL_NOTE`): Coleção de dados estruturados (ETHICAL_NOTE)

---

## 3. Árvore de Renderização (Hierarquia de Componentes)
- `src/main.tsx` — Host de montagem React DOM da SPA (#root)
  └── `src/App.tsx` — Componente raiz da aplicação (orquestra layout, estado global e todas as seções)
        ├── `src/components/About.tsx` — Seção Sobre nós / História da marca
        ├── `src/components/BookingForm.tsx` — Componente React modular (BookingForm)
        │     └── `src/components/physioData.ts` — Componente React modular (physioData)
        ├── `src/components/Differentials.tsx` — Componente React modular (Differentials)
        ├── `src/components/FinalCta.tsx` — Componente React modular (FinalCta)
        │     └── `src/components/physioData.ts` — Componente React modular (physioData)
        ├── `src/components/FloatingWhatsApp.tsx` — Componente React modular (FloatingWhatsApp)
        │     └── `src/components/physioData.ts` — Componente React modular (physioData)
        ├── `src/components/Footer.tsx` — Rodapé com links, direitos, redes sociais e informações de contato
        │     └── `src/components/physioData.ts` — Componente React modular (physioData)
        ├── `src/components/Gallery.tsx` — Componente React modular (Gallery)
        ├── `src/components/Hero.tsx` — Seção Hero principal (headline, chamada de ação, banners e destaques do produto)
        │     └── `src/components/physioData.ts` — Componente React modular (physioData)
        ├── `src/components/HowItWorks.tsx` — Componente React modular (HowItWorks)
        │     └── `src/components/physioData.ts` — Componente React modular (physioData)
        ├── `src/components/Navbar.tsx` — Cabeçalho e barra de navegação global com links e ações
        │     └── `src/components/physioData.ts` — Componente React modular (physioData)
        ├── `src/components/PrivacyModal.tsx` — Modal/Dialog interativo (PrivacyModal)
        │     └── `src/components/physioData.ts` — Componente React modular (physioData)
        ├── `src/components/ServiceModal.tsx` — Modal/Dialog interativo (ServiceModal)
        │     └── `src/components/physioData.ts` — Componente React modular (physioData)
        ├── `src/components/Services.tsx` — Componente React modular (Services)
        ├── `src/components/Testimonials.tsx` — Depoimentos de clientes e prova social
        │     └── `src/components/physioData.ts` — Componente React modular (physioData)
        ├── `src/components/physioData.ts` — Componente React modular (physioData)

---

## 4. Catálogo de Componentes e Responsabilidades

### 📦 Componentes da Aplicação (Seções e Features):
- **`src/components/About.tsx`** (About): Seção Sobre nós / História da marca
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

- **`src/components/AppointmentModal.tsx`** (AppointmentModal): Modal/Dialog interativo (AppointmentModal)
  - *Importado por*: ⚠️ **Órfão (Ainda não importado)**
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/input.tsx`

- **`src/components/BookingForm.tsx`** (BookingForm): Componente React modular (BookingForm)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/input.tsx`, `src/components/ui/card.tsx`, `src/data/physioData.ts`

- **`src/components/CtaSection.tsx`** (CtaSection): Componente React modular (CtaSection)
  - *Importado por*: ⚠️ **Órfão (Ainda não importado)**
  - *Sub-componentes*: `src/components/ui/button.tsx`

- **`src/components/Differentials.tsx`** (Differentials): Componente React modular (Differentials)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/badge.tsx`

- **`src/components/FinalCta.tsx`** (FinalCta): Componente React modular (FinalCta)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/data/physioData.ts`

- **`src/components/FloatingWhatsApp.tsx`** (FloatingWhatsApp): Componente React modular (FloatingWhatsApp)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/data/physioData.ts`

- **`src/components/Footer.tsx`** (Footer): Rodapé com links, direitos, redes sociais e informações de contato
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/data/physioData.ts`

- **`src/components/Gallery.tsx`** (Gallery): Componente React modular (Gallery)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/badge.tsx`

- **`src/components/Hero.tsx`** (Hero): Seção Hero principal (headline, chamada de ação, banners e destaques do produto)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/badge.tsx`, `src/data/physioData.ts`

- **`src/components/HowItWorks.tsx`** (HowItWorks): Componente React modular (HowItWorks)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/badge.tsx`, `src/data/physioData.ts`

- **`src/components/Navbar.tsx`** (Navbar): Cabeçalho e barra de navegação global com links e ações
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/badge.tsx`, `src/data/physioData.ts`

- **`src/components/PrivacyModal.tsx`** (PrivacyModal): Modal/Dialog interativo (PrivacyModal)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/data/physioData.ts`

- **`src/components/Process.tsx`** (Process): Componente React modular (Process)
  - *Importado por*: ⚠️ **Órfão (Ainda não importado)**
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/badge.tsx`

- **`src/components/ServiceModal.tsx`** (ServiceModal): Modal/Dialog interativo (ServiceModal)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/data/physioData.ts`

- **`src/components/Services.tsx`** (Services): Componente React modular (Services)
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/card.tsx`, `src/components/ui/button.tsx`, `src/components/ui/badge.tsx`

- **`src/components/Testimonials.tsx`** (Testimonials): Depoimentos de clientes e prova social
  - *Importado por*: `src/App.tsx`
  - *Sub-componentes*: `src/components/ui/button.tsx`, `src/components/ui/badge.tsx`, `src/components/ui/card.tsx`, `src/data/physioData.ts`

### 🎨 Componentes Base de UI (`src/components/ui/`):
- `src/components/ui/badge.tsx`: Componente base de UI reutilizável (badge)
- `src/components/ui/button.tsx`: Componente base de UI reutilizável (button)
- `src/components/ui/card.tsx`: Componente base de UI reutilizável (card)
- `src/components/ui/input.tsx`: Componente base de UI reutilizável (input)

---

## 5. Módulos Utilitários, Funções e Exports Reais
- `src/data/physioData.ts`: Exporta [`ServiceItem`, `GalleryItem`, `TestimonialItem`, `CLINIC_INFO`, `SERVICES_DATA`, `DIFFERENTIALS_DATA`, `HOW_IT_WORKS_STEPS`, `TESTIMONIALS_DATA`, `GALLERY_DATA`, `ETHICAL_NOTE`]
- `src/lib/utils.ts`: Exporta [`cn`]

---

## 6. 🚨 Regras Críticas de Desenvolvimento e Modificação (Agent Directives)

1. **INTEGRAÇÃO OBRIGATÓRIA (ZERO COMPONENTES ÓRFÃOS)**:
   - Ao criar qualquer novo componente, animação ou elemento (ex: `DogAnimation.tsx`, `PricingTable.tsx`, `AuthModal.tsx`), **é OBRIGATÓRIO modificar o componente pai correspondente** (ex: `Hero.tsx` ou `App.tsx`) para incluir o `import` e renderizá-lo na árvore JSX.
   - NUNCA devolva apenas o arquivo do componente filho isolado sem atualizar o pai onde ele deve ser exibido.

2. **PREVENÇÃO DE ERROS DE RUNTIME E IMPORTS INEXISTENTES (SyntaxError / Module Not Found)**:
   - NUNCA tente importar funções, variáveis ou mocks de arquivos como `src/utils.ts`, `src/lib/utils.ts` ou `src/data/*` que NÃO estejam explicitamente exportados nesses módulos.
   - Se você precisar de uma constante, lista mockada ou função utilitária que não exista (ex: `pessoasLivres`), **declare-a explicitamente no arquivo do componente** ou crie a exportação com os dados no arquivo correspondente.
   - Use SEMPRE optional chaining (`?.`) e valores padrão (`|| []`, `?? ''`) ao renderizar listas e propriedades aninhadas.

3. **PROTEÇÃO DO CONTAINER SPA**:
   - O arquivo `index.html` é estritamente o host de montagem com `<div id="root"></div>` e `<script type="module" src="/src/main.tsx"></script>`.
   - NUNCA substitua `index.html` por páginas HTML estáticas.

4. **MODULARIDADE E ALTO PADRÃO VISUAL**:
   - Cada seção deve ser um componente independente sob `src/components/` e montado em `src/App.tsx`.
   - Use dados realistas (mockups completos sob `src/data/`), efeitos hover/active, estados de transição e paleta harmônica com tokens Tailwind.
