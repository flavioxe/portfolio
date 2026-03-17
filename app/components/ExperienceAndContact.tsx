"use client";
import { useContext, useState } from "react";
import { I18nContext } from "../contexts/I18nContext";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

type Experience = {
  role: string;
  company: string;
  period: { en: string; pt: string };
  bullets: { en: string[]; pt: string[] };
};

const experiences: Experience[] = [
  {
    role: "Front-end Developer",
    company: "Allycode",
    period: {
      pt: "2021 — Presente",
      en: "2021 — Present"
    },
    bullets: {
      en: [
        "Development of scalable applications with Next.js and Nuxt",
        "Structuring reusable components with Vue, React.js, and TypeScript",
        "Development and maintenance of production applications (React, Next, Vue)",
        "Integration of REST APIs for dynamic interfaces",
        "Development of responsive UI with Tailwind CSS",
        "Participation in architectural decisions."
      ],
      pt: [
        "Desenvolvimento de aplicações escaláveis com Next.js e Nuxt",
        "Estruturação de componentes reutilizáveis com Vue, React.js e TypeScript",
        "Desenvolvimento e manutenção de aplicações em produção (React, Next, Vue)",
        "Integração de APIs REST para interfaces dinâmicas",
        "Desenvolvimento de UI responsiva com Tailwind CSS",
        "Participação em decisões arquiteturais."
      ],
    },
  },
  {
    role: "Software Developer",
    company: "Jala University (International Bootcamp)",
    period: {
      pt: "Fevereiro de 2025 – Junho de 2025",
      en: "February 2025 – June 2025"
    },
    bullets: {
      en: [
        "Full-stack development of applications with a focus on React and TypeScript",
        "Application of modular architecture principles and good versioning practices with Git",
        "Collaboration in global teams with 100% English communication."
      ],
      pt: [
        "Desenvolvimento de aplicações fullstack com foco em React e TypeScript",
        "Aplicação de princípios de arquitetura modular e boas práticas de versionamento com Git",
        "Colaboração em times globais com comunicação 100% em inglês."
      ],
    },
  },
  {
    role: "Architecture Assistant",
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
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="w-full max-w-2xl mx-auto mt-20 mb-12 font-sans">
      <BlurFade delay={0.04} inView>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Work</h2>
      </BlurFade>
      <div className="flex flex-col gap-2">
        {experiences.map((exp, idx) => (
          <BlurFade key={idx} delay={0.1 + idx * 0.08} inView>
            <motion.div
              className={`rounded transition-all cursor-pointer px-4 py-5 flex flex-col items-start justify-between ${
                activeIdx === idx
                  ? "bg-background/60 border border-subtle"
                  : "hover:bg-background/40"
              }`}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              style={{
                opacity:
                  activeIdx !== null && activeIdx !== idx ? 0.4 : 1,
                transition: "opacity 0.2s",
              }}
            >
              <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:gap-6">
                <span className="text-base font-medium text-foreground">{exp.role}</span>
                <span className="text-sm text-muted">{exp.company}</span>
                <span className="text-xs text-muted md:ml-auto">{locale === "pt" ? exp.period.pt : exp.period.en}</span>
              </div>
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full mt-6"
                  >
                    <ul className="pl-4 text-sm text-muted list-disc">
                      {(locale === "pt" ? exp.bullets.pt : exp.bullets.en).map((b, i) => (
                        <BlurFade key={i} delay={i * 0.05}>
                          <li>{b}</li>
                        </BlurFade>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
