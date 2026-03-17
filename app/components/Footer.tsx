import { FC, useContext } from "react";
import { I18nContext } from "../contexts/I18nContext";
import { BlurFade } from "@/components/ui/blur-fade";
import WeatherWidget from "./WeatherWidget";

interface FooterProps {
  github: string;
  linkedin: string;
  className?: string;
}

const Footer: FC<FooterProps> = ({ github, linkedin, className = "" }) => {
  const { t } = useContext(I18nContext);
  return (
    <footer className={`w-full border-t-[rgba(255,255,255,0.1)] py-6 mt-8 bg-background/80 ${className}`}>
      <div className="mx-auto max-w-3xl flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-muted text-sm font-sans">
        <div className="flex items-center gap-4">
          <WeatherWidget />
        </div>

        <div className="flex gap-4 md:items-center">
          <BlurFade delay={0.08} inView>
            <a href={github} target="_blank" rel="noopener" className="hover:text-foreground transition-colors cursor-pointer">{t("footer.github")}</a>
          </BlurFade>
          <BlurFade delay={0.14} inView>
            <a href={linkedin} target="_blank" rel="noopener" className="hover:text-foreground transition-colors cursor-pointer">{t("footer.linkedin")}</a>
          </BlurFade>
        </div>
        <BlurFade delay={0.18} inView>
          <span className="md:hidden mt-2 select-none opacity-70">{t("footer.recife")}</span>
        </BlurFade>
      </div>
    </footer>
  );
};

export default Footer;
