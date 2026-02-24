import { FC, useContext } from "react";
import { I18nContext } from "./I18nContext";
import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  role: string;
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

const Hero: FC<HeroProps> = ({ name, role, className = "" }) => {
  const { t } = useContext(I18nContext);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className={`mb-8 ${className}`}
    >
      <h1 className="text-4xl md:text-5xl font-semibold leading-relaxed text-foreground font-sans">{name}</h1>
      <h2 className="text-lg md:text-xl font-mono text-muted leading-relaxed mt-2">{t("about.title")}: {role}</h2>
    </motion.div>
  );
};

export default Hero;
