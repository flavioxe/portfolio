"use client";
import { useContext } from "react";
import { I18nContext } from "../contexts/I18nContext";
import { BlurFade } from "@/components/ui/blur-fade";



export default function AboutSection() {
  const { t } = useContext(I18nContext);
  // t('about.paragraphs') retorna array, t('about.headline') retorna string
  let paragraphs: string[] = [];
  const raw = t('about.paragraphs');
  if (Array.isArray(raw)) paragraphs = raw;
  const headline = t('about.headline') as string;

  return (
    <section className="w-full flex flex-col items-start font-sans">
      <BlurFade delay={0.04} inView>
        <h4
          className="font-sans text-xl font-medium text-foreground mb-8 italic"
        >
          {headline}
        </h4>
      </BlurFade>
      <div className="flex flex-col gap-5 max-w-2xl w-full text-muted leading-relaxed text-base md:text-lg font-sans">
        {Array.isArray(paragraphs) && paragraphs.map((p, i) => (
          <BlurFade key={i} delay={0.1 + i * 0.08} inView>
            <p>{p}</p>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
