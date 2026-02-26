"use client";

export { ProjectList };
import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { I18nContext } from "../contexts/I18nContext";
import Link from "next/link";

export interface Project {
  name: string;
  url: string;
  desc: string;
  techs: string[];
  year: number;
  image: string;
}

interface ProjectListProps {
  projects?: Project[];
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

const descVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.12 } },
};

const ProjectItem: FC<{ project: Project; onHover: (img: string | null) => void }> = ({ project, onHover }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div
      className="group flex items-center gap-4 px-4 py-4 border-b-[rgba(255,255,255,0.1)] hover:border-b-foreground transition-colors cursor-pointer w-80"
      style={{ transition: "border-color 0.2s", cursor: "pointer" }}
      onMouseEnter={() => onHover(project.image)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex-1 min-w-0 font-sans">
        <a
          href={project.url}
          target="_blank"
          rel="noopener"
          className="block"
          onMouseEnter={() => setShowDesc(true)}
          onMouseLeave={() => setShowDesc(false)}
          onFocus={() => setShowDesc(true)}
          onBlur={() => setShowDesc(false)}
        >
          <span className="text-lg text-foreground group-hover:underline flex items-center">{project.name}
           <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 w-3 h-3 text-muted"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M14 3h7v7" />
              <path d="M10 14L21 3" />
              <path d="M21 21H3V3" />
            </svg>
          </span>
        </a>
        <div className="flex items-center gap-2 mt-1">
          <span
            className="text-xs text-muted"
            onMouseEnter={() => setShowDesc(true)}
            onMouseLeave={() => setShowDesc(false)}
            onFocus={() => setShowDesc(true)}
            onBlur={() => setShowDesc(false)}
            tabIndex={0}
            aria-label="project-techs"
          >
            {project.techs.join(", ")}
          </span>
          <span className="text-xs text-muted">• {project.year}</span>
        </div>
        <AnimatePresence>
          {showDesc && (
            <motion.span
              key="desc"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={descVariants}
              className="text-sm text-muted mt-1 block"
            >
              {project.desc}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ProjectList: FC<ProjectListProps> = ({ projects, className = "" }) => {
  const { t } = useContext(I18nContext);
  const [hoverImg, setHoverImg] = useState<string | null>(null);

  // Try to resolve projects from translations first (t can return arrays/objects)
  let localizedProjects: any = projects;
  const raw = t("projects");
  if (Array.isArray(raw)) localizedProjects = raw;

  return (
    <section id="projects" className={`w-full flex flex-col gap-2 relative ${className}`}> 
      {Array.isArray(localizedProjects) && localizedProjects.map((proj: Project, idx: number) => (
        <motion.div
          key={proj.name + idx}
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
