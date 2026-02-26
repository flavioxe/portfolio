"use client";

export { ProjectList };
import { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface Project {
  name: string;
  url: string;
  desc: string;
  techs: string[];
  year: number;
  image: string;
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

const ProjectItem: FC<{ project: Project; onHover: (img: string | null) => void }> = ({ project, onHover }) => {
  return (
    <div
      className="group flex items-center gap-4 px-4 py-4 border-b-[rgba(255,255,255,0.1)] hover:border-b-foreground transition-colors cursor-pointer w-full"
      style={{ transition: "border-color 0.2s", cursor: "pointer" }}
      onMouseEnter={() => onHover(project.image)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex-1 min-w-0 font-sans">
        <a href={project.url} target="_blank" rel="noopener" className="block">
          <span className="text-lg text-foreground group-hover:underline">{project.name}</span>
        </a>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-muted">{project.techs.join(", ")}</span>
          <span className="text-xs text-muted">• {project.year}</span>
        </div>
        <span className="text-sm text-muted mt-1 block">{project.desc}</span>
      </div>
    </div>
  );
};

const ProjectList: FC<ProjectListProps> = ({ projects, className = "" }) => {
  // const { t } = useContext(I18nContext); // Removido pois não está em uso
  const [hoverImg, setHoverImg] = useState<string | null>(null);
  return (
    <section id="projects" className={`w-full flex flex-col gap-2 relative ${className}`}> 
      {projects.map((proj, idx) => (
        <motion.div
          key={proj.name}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: idx * 0.08 }}
        >
          <ProjectItem project={proj} onHover={setHoverImg} />
        </motion.div>
      ))}
      {hoverImg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed md:absolute bottom-8 right-8 z-50"
          style={{ width: 400, height: 225, pointerEvents: "none" }}
        >
          <Image
            src={hoverImg}
            alt="Preview"
            width={400}
            height={225}
            className="rounded-sm border border-[rgba(255,255,255,0.1)] object-cover transition-all duration-200"
            style={{ aspectRatio: "16/9", filter: "grayscale(60%)" }}
          />
        </motion.div>
      )}
    </section>
  );
};
