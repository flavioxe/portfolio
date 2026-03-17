import { FC, useContext } from "react";
import { I18nContext } from "../contexts/I18nContext";
import WeatherWidget from "./WeatherWidget";

interface FooterProps {
  github: string;
  linkedin: string;
  className?: string;
}

const Footer: FC<FooterProps> = ({ github, linkedin, className = "" }) => {
  const { t } = useContext(I18nContext);
  return (
    <footer className={`w-full border-t border-white/10 py-6 mt-8 bg-background/92 backdrop-blur-md ${className}`}>
      <div className="mx-auto max-w-3xl flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-muted text-sm font-sans">
        <div className="flex items-center gap-4">
          <WeatherWidget />
        </div>

        <span className="mt-1 select-none opacity-80 text-xs md:text-sm">{t("footer.recife")}</span>

        <div className="flex gap-4 md:items-center">
          <a href={github} target="_blank" rel="noopener" className="hover:text-foreground transition-colors cursor-pointer">{t("footer.github")}</a>
          <a href={linkedin} target="_blank" rel="noopener" className="hover:text-foreground transition-colors cursor-pointer">{t("footer.linkedin")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
