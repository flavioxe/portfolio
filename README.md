# Portfolio Minimalista Utilitário

> Portfólio pessoal minimalista, responsivo e internacionalizado, inspirado no design utilitário de Paco Coursey e Rauno Freiberg.

## Tecnologias & Arquitetura

- **Next.js 16 (App Router)** — Framework React para SSR/SSG, estrutura de rotas moderna.
- **React 19** — Biblioteca principal para UI.
- **TypeScript** — Tipagem estática para maior robustez.
- **Tailwind CSS 4** — Utilitário CSS para estilização rápida e consistente.
- **Framer Motion** — Animações suaves e minimalistas.
- **ESLint** — Linting e padronização de código.
- **next/font** — Otimização de fontes (Geist Sans & Geist Mono).

## Internacionalização (i18n)

- Suporte a **português** e **inglês**.
- Troca dinâmica de idioma via contexto React (`I18nContext` e `I18nProvider`).
- Textos traduzidos em arquivos JSON (`app/locales/en.json`, `app/locales/pt.json`).
- Botões "PT | EN" no topo para alternar idioma.

## Decisões de Design

- **Minimalismo utilitário:**
  - Sem sombras, cartões ou cores chamativas.
  - Foco em tipografia, espaçamento e clareza.
- **Paleta:**
  - Fundo: `#0a0a0a`
  - Texto principal: `#ededed`
  - Texto secundário: `#a1a1a1`
  - Bordas: `1px rgba(255,255,255,0.1)`
- **Fontes:**
  - Corpo: Geist Sans
  - Detalhes técnicos: Geist Mono
- **Layout:**
  - Header fixo com backdrop-blur
  - Hero tipográfico (nome e cargo)
  - Lista de projetos (links ocupam linha toda, borda sutil no hover)
  - Rodapé minimalista com links para GitHub e LinkedIn
  - Detalhe pessoal: "Crafting digital structures from Recife, Brazil."

## Estrutura do Projeto

- `app/` — Componentes, páginas, contexto de internacionalização, estilos globais.
- `app/components/` — Componentes reutilizáveis (Header, Footer, Hero, ProjectList, I18nProvider).
- `app/locales/` — Arquivos de tradução.
- `tailwind.config.ts` e `app/globals.css` — Customização de tema e estilos.

## Scripts

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Build de produção
- `npm start` — Inicia o servidor de produção

## Personalização

- Edite `app/page.tsx` para alterar projetos, nome e links.
- Ajuste cores e fontes em `tailwind.config.ts` e `app/globals.css`.
- Traduções em `app/locales/en.json` e `app/locales/pt.json`.

---

> Minimalismo Utilitário: foco em tipografia, espaçamento e clareza, sem sombras ou cartões coloridos.
