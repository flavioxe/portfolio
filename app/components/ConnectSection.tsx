"use client";
import { useContext } from "react";
import { I18nContext } from "../contexts/I18nContext";
import { BlurFade } from "@/components/ui/blur-fade";

const EMAIL = "flaviomhenrique@gmail.com";
const GITHUB = "https://github.com/flavioxe";
const LINKEDIN_PT = "https://www.linkedin.com/in/flaviohmsilva/";
const LINKEDIN_EN = "https://www.linkedin.com/in/flaviohmsilva/?locale=en-US";
const WHATSAPP = "https://wa.me/5581988465479";

export default function ConnectSection() {
  const { locale } = useContext(I18nContext);
  const linkedin = locale === "pt" ? LINKEDIN_PT : LINKEDIN_EN;

  return (
    <section className="w-full flex flex-col items-start mb-8 font-sans">
      <BlurFade delay={0.04} inView>
        <h2 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">
          {locale === "pt" ? "Contato" : "Connect"}
        </h2>
      </BlurFade>
      <BlurFade delay={0.12} inView>
        <p className="text-sm text-muted mb-2">
          {locale === "pt"
            ? (
              <>
                Fale comigo por{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >E-mail</a>
                {", "}
                <a
                  href={linkedin}
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >LinkedIn</a>
                {", "}
                <a
                  href={GITHUB}
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >GitHub</a>
                {" ou pelo "}
                <a
                  href={WHATSAPP}
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >WhatsApp</a>
                {"."}
              </>
            )
            : (
              <>
                Reach me at{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >E-mail</a>
                {", "}
                <a
                  href={linkedin}
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >LinkedIn</a>
                {", "}
                <a
                  href={GITHUB}
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >GitHub</a>
                {", or via "}
                <a
                  href={WHATSAPP}
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >WhatsApp</a>
                {"."}
              </>
            )
          }
        </p>
      </BlurFade>
    </section>
  );
}
