import { FC, useContext } from "react";
import { I18nContext } from "../contexts/I18nContext";
import { motion } from "framer-motion";

interface HeaderProps {
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Header: FC<HeaderProps> = ({ className = "" }) => {
  const { locale, setLocale, t } = useContext(I18nContext);
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className={`fixed top-0 left-0 z-30 w-full border-b border-white/10 bg-background/92 backdrop-blur-md ${className}`}
    >
      <div className="mx-auto max-w-3xl py-3 flex items-center justify-between">
        <span className="font-sans text-xs text-muted tracking-widest select-none">portfolio</span>
        <nav className="flex gap-4 text-muted text-sm items-center">
          <a href="#projects" className="hover:text-foreground transition-colors cursor-pointer">
            {locale === "pt" ? "Projetos" : "Projects"}
          </a>
          <div className="flex gap-1 ml-4">
            <button
              className={`px-1 text-xs transition-colors cursor-pointer ${locale === "pt" ? "text-foreground font-bold underline" : "text-muted hover:text-foreground"}`}
              onClick={() => setLocale("pt")}
              aria-label="Português"
              type="button"
            >
              PT
            </button>
            <span className="text-muted select-none">|</span>
            <button
              className={`px-1 text-xs transition-colors cursor-pointer ${locale === "en" ? "text-foreground font-bold underline" : "text-muted hover:text-foreground"}`}
              onClick={() => setLocale("en")}
              aria-label="English"
              type="button"
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
