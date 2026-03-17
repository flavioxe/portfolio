import { FC, useContext } from "react";
import { I18nContext } from "../contexts/I18nContext";
import { BlurFade } from "@/components/ui/blur-fade";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = "" }) => {
  const { locale, setLocale } = useContext(I18nContext);
  return (
    <header className={`fixed top-0 left-0 z-30 w-full border-b border-white/10 bg-background/92 backdrop-blur-md ${className}`}>
      <div className="mx-auto max-w-3xl py-3 flex items-center justify-between">
        <BlurFade delay={0.02}>
          <span className="font-sans text-xs text-muted tracking-widest select-none">portfolio</span>
        </BlurFade>
        <nav className="flex gap-4 text-muted text-sm items-center">
          <BlurFade delay={0.08}>
            <a href="#projects" className="hover:text-foreground transition-colors cursor-pointer">
              {locale === "pt" ? "Projetos" : "Projects"}
            </a>
          </BlurFade>
          <div className="flex gap-1 ml-4">
            <BlurFade delay={0.12}>
              <button
                className={`px-1 text-xs transition-colors cursor-pointer ${locale === "pt" ? "text-foreground font-bold underline" : "text-muted hover:text-foreground"}`}
                onClick={() => setLocale("pt")}
                aria-label="Português"
                type="button"
              >
                PT
              </button>
            </BlurFade>
            <BlurFade delay={0.14}>
              <span className="text-muted select-none">|</span>
            </BlurFade>
            <BlurFade delay={0.16}>
              <button
                className={`px-1 text-xs transition-colors cursor-pointer ${locale === "en" ? "text-foreground font-bold underline" : "text-muted hover:text-foreground"}`}
                onClick={() => setLocale("en")}
                aria-label="English"
                type="button"
              >
                EN
              </button>
            </BlurFade>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
