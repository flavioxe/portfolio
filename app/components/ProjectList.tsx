import { FC, useContext } from "react";
import { I18nContext } from "./I18nContext";
import { motion } from "framer-motion";

export interface Project {
  name: string;
  url: string;
  desc: string;
}

interface ProjectListProps {
  projects: Project[];
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

const ProjectList: FC<ProjectListProps> = ({ projects, className = "" }) => {
  const { t } = useContext(I18nContext);
  return (
    <section id="projects" className={`w-full flex flex-col gap-2 ${className}`}> 
      {projects.map((proj) => (
        <motion.a
          key={proj.name}
          href={proj.url}
          className="group flex flex-col px-4 py-4 border-b-[rgba(255,255,255,0.1)] hover:border-b-foreground transition-colors cursor-pointer w-full"
          style={{ transition: "border-color 0.2s", cursor: "pointer" }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="font-sans text-lg text-foreground group-hover:underline">{proj.name}</span>
          <span className="font-mono text-sm text-muted mt-1">{proj.desc}</span>
        </motion.a>
      ))}
    </section>
  );
};

export { ProjectList };
export type { Project };
