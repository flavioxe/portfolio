"use client";


import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ExperienceAndContact from "./components/ExperienceAndContact";
import { ProjectList } from "./components/ProjectList";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
import { useContext } from "react";
import { I18nContext } from "./contexts/I18nContext";


export default function Home() {
  const { locale } = useContext(I18nContext);
  const name = "Flávio Mendonça Silva";
  const role = locale === "pt" ? "Desenvolvedor Front-end" : "Front-end Developer";

  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-screen pt-28 pb-12 px-4 bg-background">
        <section className="w-full max-w-3xl mx-auto flex flex-col items-start gap-8">
          <Hero name={name} role={role} />
          <AboutSection />
          <ExperienceAndContact />
          <ProjectList />
          <ConnectSection />
        </section>
      </main>
      <Footer github="https://github.com/flavioxe" linkedin="https://linkedin.com/in/flaviohmsilva" />
    </>
  );
}

