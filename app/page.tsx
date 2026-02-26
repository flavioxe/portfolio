"use client";


import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ExperienceAndContact from "./components/ExperienceAndContact";
import { ProjectList, Project } from "./components/ProjectList";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
import { useContext } from "react";
import { I18nContext } from "./components/I18nContext";


export default function Home() {
  const { locale } = useContext(I18nContext);
  const name = "Flávio Mendonça Silva";
  const role = locale === "pt" ? "Desenvolvedor Front-end" : "Front-end Developer";
  const projects: Project[] = [
    locale === "pt"
      ? {
          name: "Projeto 1",
          url: "#",
          desc: "Descrição curta do projeto 1.",
          techs: ["Next.js", "TypeScript", "Tailwind"],
          year: 2026,
          image: "/assets/ferb.jpg",
        }
      : {
          name: "Project 1",
          url: "#",
          desc: "Short description of project 1.",
          techs: ["Next.js", "TypeScript", "Tailwind"],
          year: 2026,
          image: "/assets/ferb.jpg",
        },
    locale === "pt"
      ? {
          name: "Projeto 2",
          url: "#",
          desc: "Descrição curta do projeto 2.",
          techs: ["React", "Framer Motion"],
          year: 2025,
          image: "/assets/ferb.jpg",
        }
      : {
          name: "Project 2",
          url: "#",
          desc: "Short description of project 2.",
          techs: ["React", "Framer Motion"],
          year: 2025,
          image: "/assets/ferb.jpg",
        },
    locale === "pt"
      ? {
          name: "Projeto 3",
          url: "#",
          desc: "Descrição curta do projeto 3.",
          techs: ["Node.js", "Express"],
          year: 2024,
          image: "/assets/ferb.jpg",
        }
      : {
          name: "Project 3",
          url: "#",
          desc: "Short description of project 3.",
          techs: ["Node.js", "Express"],
          year: 2024,
          image: "/assets/ferb.jpg",
        },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-screen pt-28 pb-12 px-4 bg-background">
        <section className="w-full max-w-3xl mx-auto flex flex-col items-start gap-8">
          <Hero name={name} role={role} />
          <AboutSection />
          <ExperienceAndContact />
          <ProjectList projects={projects} />
          <ConnectSection />
        </section>
      </main>
      <Footer github="https://github.com/flavioxe" linkedin="https://linkedin.com/in/flaviohmsilva" />
    </>
  );
}

