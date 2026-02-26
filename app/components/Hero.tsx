import { FC } from "react";
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
  // ...
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className={`flex items-end gap-2 ${className}`}
    >
      <h1 className="text-4xl md:text-5xl font-semibold leading-relaxed text-foreground font-sans">{name}</h1>
      <span className="text-lg md:text-xl font-mono text-muted leading-relaxed pb-2">{role}</span>
    </motion.div>
  );
};

export default Hero;
