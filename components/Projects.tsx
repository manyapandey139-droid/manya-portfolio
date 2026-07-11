"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="section-eyebrow mb-4">Featured Projects</p>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)]">
              Things I&apos;ve built.
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group bg-card border border-border rounded-2xl p-8 flex flex-col hover:border-accent/50 transition-colors duration-300 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl">{project.title}</h3>
                <ArrowUpRight
                  className="text-secondary group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  size={22}
                />
              </div>

              <p className="text-secondary leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-border text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8 text-sm">
                <div>
                  <div className="text-accent font-mono text-xs uppercase tracking-widest mb-1">
                    Challenge
                  </div>
                  <p className="text-secondary leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
                <div>
                  <div className="text-accent font-mono text-xs uppercase tracking-widest mb-1">
                    Learning
                  </div>
                  <p className="text-secondary leading-relaxed">
                    {project.learnings}
                  </p>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-4 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium rounded-full border border-border px-5 py-2.5 hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={project.caseStudy}
                  className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
                >
                  Case Study
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
