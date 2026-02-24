"use client";

export { ProjectList };
export type { Project };
import { FC, useContext, useState } from "react";
import { I18nContext } from "./I18nContext";
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

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group flex items-center gap-4 px-4 py-4 border-b-[rgba(255,255,255,0.1)] hover:border-b-foreground transition-colors cursor-pointer w-full relative"
      style={{ transition: "border-color 0.2s", cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex-1 min-w-0">
        <a href={project.url} target="_blank" rel="noopener" className="block">
          <span className="font-sans text-lg text-foreground group-hover:underline">{project.name}</span>
        </a>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-mono text-xs text-muted">{project.techs.join(", ")}</span>
          <span className="font-mono text-xs text-muted">• {project.year}</span>
        </div>
        <span className="font-mono text-sm text-muted mt-1 block">{project.desc}</span>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="ml-4"
        style={{ width: hovered ? 160 : 0, minWidth: hovered ? 160 : 0 }}
      >
        {hovered && (
          <Image
            src={project.image}
            alt={project.name}
            width={160}
            height={90}
            className="rounded-[4px] border border-[rgba(255,255,255,0.1)] object-cover"
            style={{ aspectRatio: "16/9" }}
          />
        )}
      </motion.div>
    </div>
  );
};

const ProjectList: FC<ProjectListProps> = ({ projects, className = "" }) => {
  const { t } = useContext(I18nContext);
  return (
    <section id="projects" className={`w-full flex flex-col gap-2 ${className}`}> 
      {projects.map((proj, idx) => (
        <motion.div
          key={proj.name}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: idx * 0.08 }}
        >
          <ProjectItem project={proj} />
        </motion.div>
      ))}
    </section>
  );
};

