import { FC, useContext } from "react";
import { I18nContext } from "./I18nContext";
import { motion } from "framer-motion";

interface FooterProps {
  name: string;
  github: string;
  linkedin: string;
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

const Footer: FC<FooterProps> = ({ name, github, linkedin, className = "" }) => {
  const { t } = useContext(I18nContext);
  const year = new Date().getFullYear();
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className={`w-full border-t-[rgba(255,255,255,0.1)] py-6 mt-8 bg-background/80 ${className}`}
    >
      <div className="mx-auto max-w-3xl px-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-muted text-sm">
        <span>{t("footer.copyright", { year, name })}</span>
        <span className="hidden md:inline-block select-none opacity-70">{t("footer.recife")}</span>
        <div className="flex gap-4">
          <a href={github} target="_blank" rel="noopener" className="hover:text-foreground transition-colors cursor-pointer">{t("footer.github")}</a>
          <a href={linkedin} target="_blank" rel="noopener" className="hover:text-foreground transition-colors cursor-pointer">{t("footer.linkedin")}</a>
        </div>
        <span className="md:hidden mt-2 select-none opacity-70">{t("footer.recife")}</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
