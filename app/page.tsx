

"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import { ProjectList, Project } from "./components/ProjectList";
import Footer from "./components/Footer";
import { useContext } from "react";
import { I18nContext } from "./components/I18nContext";


export default function Home() {
  const { locale } = useContext(I18nContext);
  const name = locale === "pt" ? "Seu Nome" : "Your Name";
  const role = locale === "pt" ? "Desenvolvedor Front-end" : "Front-end Developer";
  const projects: Project[] = [
    locale === "pt"
      ? {
          name: "Projeto 1",
          url: "#",
          desc: "Descrição curta do projeto 1.",
        }
      : {
          name: "Project 1",
          url: "#",
          desc: "Short description of project 1.",
        },
    locale === "pt"
      ? {
          name: "Projeto 2",
          url: "#",
          desc: "Descrição curta do projeto 2.",
        }
      : {
          name: "Project 2",
          url: "#",
          desc: "Short description of project 2.",
        },
    locale === "pt"
      ? {
          name: "Projeto 3",
          url: "#",
          desc: "Descrição curta do projeto 3.",
        }
      : {
          name: "Project 3",
          url: "#",
          desc: "Short description of project 3.",
        },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-screen pt-28 pb-12 px-4 bg-background">
        <section className="w-full max-w-3xl mx-auto flex flex-col items-start gap-8">
          <Hero name={name} role={role} />
          <ProjectList projects={projects} />
        </section>
      </main>
      <Footer name={name} github="https://github.com/seuusuario" linkedin="https://linkedin.com/in/seuusuario" />
    </>
  );
}

