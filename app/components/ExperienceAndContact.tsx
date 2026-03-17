"use client";
import { useContext } from "react";
import { I18nContext } from "../contexts/I18nContext";
import { BlurFade } from "@/components/ui/blur-fade";
import { Accordion05, Accordion05Item } from "@/components/ui/accordion-05";

type Experience = {
  role: { en: string; pt: string };
  company: string;
  period: { en: string; pt: string };
  bullets: { en: string[]; pt: string[] };
  allowTitleWrap?: boolean;
};

const experiences: Experience[] = [
  {
    role: {
      en: "Front-end Developer",
      pt: "Desenvolvedor Front-end",
    },
    company: "Allycode",
    period: {
      pt: "2021 — 2026",
      en: "2021 — 2026"
    },
    bullets: {
      en: [
        "Built complete modules for a large-scale B2B white-label education platform, including landing page, content consumption views and admin dashboards, using Vue and Nuxt, ensuring high configurability across multiple simultaneous clients.",
        "Implemented Kanban-style sales pipelines and a client portal with digital document signing, using React and Next.js, delivering end-to-end complex flows for automotive dealerships.",
        "Collaborated on feature definition and user flows via Figma and Miro, translating product decisions into responsive interfaces and reusable components.",
        "Integrated REST APIs with complex business rules and third-party libraries including drag-and-drop, Filestack and Shopify, ensuring data consistency between frontend and backend.",
        "Made targeted backend adjustments in Laravel, including migrations and database changes, extending contribution beyond the frontend when needed."
      ],
      pt: [
        "Traduzi designs do Figma em interfaces React e Next.js prontas para produção, construindo bibliotecas de componentes reutilizáveis e esteiras de vendas no estilo Kanban com controle de acesso por perfil para uma plataforma automotiva.",
        "Desenvolvi módulos completos de uma plataforma educacional B2B white label de grande escala utilizando Vue e Nuxt com SSR, incluindo landing page, telas de consumo de conteúdo e painéis administrativos, garantindo alta configurabilidade para múltiplos clientes simultâneos.",
        "Integrei APIs REST com regras de negócio complexas via Axios/Fetch, incluindo integrações com drag-and-drop, Filestack e Shopify, assegurando consistência de dados entre frontend e backend.",
        "Apliquei boas práticas de HTML semântico, CSS responsivo e performance web em todos os projetos, com foco em Mobile-First e compatibilidade cross-browser.",
        "Realizei ajustes no backend Laravel, como migrations e alterações de banco, ampliando atuação além do frontend quando necessário."
      ],
    },
  },
  {
    role: {
      en: "Software Developer",
      pt: "Desenvolvedor de Software",
    },
    company: "Jala University\n(International Bootcamp)",
    allowTitleWrap: true,
    period: {
      pt: "2025 — 2025",
      en: "2025 — 2025"
    },
    bullets: {
      en: [
        "Co-designed the application UI in Figma alongside the lead designer and product owner, working in a fully English-speaking international environment.",
        "Developed the frontend of an electronic document signing platform using React and TypeScript.",
        "Implemented unit tests with Jest, followed GitFlow branching strategy and ran the project with Docker.",
        "Participated in daily stand-ups, sprint planning, code reviews and weekly deliverables in an agile workflow."
      ],
      pt: [
        "Co-criei o design da aplicação no Figma em colaboração com o designer líder e o P.O. do projeto, em ambiente 100% em inglês.",
        "Desenvolvi o frontend de uma plataforma de assinatura eletrônica de documentos com React e TypeScript.",
        "Implementei testes unitários com Jest, utilizei GitFlow para versionamento e rodei o projeto com Docker.",
        "Participei de dailys, planning, code reviews e entregas semanais em metodologia ágil."
      ],
    },
  },
  {
    role: {
      en: "Architecture Assistant",
      pt: "Assistente de Arquitetura",
    },
    company: "Lourdes Buregio",
    period: {
      pt: "2020 — 2020",
      en: "2020 — 2020"
    },
    bullets: {
      en: [
        "3D modeling, architectural projects, and technical representation.",
        "Developed layouts and visual presentations.",
      ],
      pt: [
        "Modelagem 3D, projetos arquitetônicos e representação técnica.",
        "Desenvolvimento de layouts e apresentações visuais.",
      ],
    },
  },
];

export default function ExperienceAndContact() {
  const { locale } = useContext(I18nContext);
  const items: Accordion05Item[] = experiences.map((exp, idx) => ({
    id: String(idx + 1),
    title: locale === "pt" ? exp.role.pt : exp.role.en,
    subtitle: exp.company,
    meta: locale === "pt" ? exp.period.pt : exp.period.en,
    content: locale === "pt" ? exp.bullets.pt : exp.bullets.en,
    allowTitleWrap: exp.allowTitleWrap,
  }));

  return (
    <section className="w-full max-w-2xl mx-auto mt-20 mb-12 font-sans">
      <BlurFade delay={0.04} inView>
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          {locale === "pt" ? "Experiencia" : "Work"}
        </h2>
      </BlurFade>
      <BlurFade delay={0.1} inView>
        <Accordion05 items={items} defaultValue="1" compactTitles={locale === "pt"} />
      </BlurFade>
    </section>
  );
}
