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
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";


export default function Home() {
  const { locale } = useContext(I18nContext);
  const name = "Flávio Mendonça Silva";
  const role = locale === "pt" ? "Desenvolvedor Front-end" : "Front-end Developer";

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-55">
        <SmokeBackground smokeColor="#9ca3af" className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-background via-background/85 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background via-background/85 to-transparent" />
      <Header />
      <main className="relative z-10 flex min-h-screen flex-col items-center bg-background/70 px-4 pt-28 pb-12">
        <section className="mx-auto flex w-full max-w-3xl flex-col items-start gap-8">
          <Hero name={name} role={role} />
          <AboutSection />
          <ExperienceAndContact />
          <ProjectList />
          <ConnectSection />
        </section>
      </main>
      <Footer
        github="https://github.com/flavioxe"
        linkedin="https://linkedin.com/in/flaviohmsilva"
        className="relative z-10"
      />
    </div>
  );
}

