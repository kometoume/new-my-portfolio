"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects, Project } from "../data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto px-6 pt-16 pb-28 md:pt-20 md:pb-36 bg-white border-t border-black/10"
    >
      <div className="flex items-baseline gap-3 mb-16">
        <h2 className="font-heading text-2xl font-bold text-[#16161d] tracking-tight">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: Project, i: number) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: (i % 2) * 0.1 }}
            className="group flex flex-col h-full rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#333d29]/50 hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#e94846] tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {project.image && (
              <div
                className="mb-5 relative overflow-hidden rounded-lg bg-white border border-black/5"
                style={{ aspectRatio: project.imageAspect ?? "700 / 300" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="transition-all duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}

            <h3 className="font-heading text-xl font-bold text-[#16161d] mb-3">
              {project.title}
            </h3>
            <p className="text-[#16161d] mb-5 text-base md:text-lg leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs tracking-wide text-[#333d29] border border-[#333d29]/25 bg-[#333d29]/5 px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-[#e94846] text-sm tracking-[0.1em] uppercase font-mono mb-2">
              Point
            </p>
            <ul className="text-[#16161d] text-base md:text-lg mb-6 space-y-1">
              {project.points.map((point, index) => (
                <li key={index} className="hanging-indent">
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm tracking-[0.05em] uppercase border border-[#333d29] text-[#333d29] px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-[#333d29] hover:text-white"
                >
                  Webサイト
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm tracking-[0.05em] uppercase border border-[#e94846] text-[#e94846] px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-[#e94846] hover:text-white"
                >
                  GitHub
                </a>
              )}
            </div>
            {project.links && project.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm tracking-[0.05em] uppercase border border-[#333d29] text-[#333d29] px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-[#333d29] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
