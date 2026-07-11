"use client";

import { motion } from "framer-motion";
import { Github, GitFork, Star, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const repos = [
  {
    name: "aircanvas",
    description: "Gesture-controlled canvas built with OpenCV and MediaPipe.",
    language: "Python",
    stars: 12,
    forks: 3,
  },
  {
    name: "portfolio",
    description: "Personal site — Next.js, TypeScript, Framer Motion.",
    language: "TypeScript",
    stars: 8,
    forks: 1,
  },
  {
    name: "cybersecurity-lab",
    description: "Home lab configs for practicing network defense.",
    language: "Shell",
    stars: 5,
    forks: 2,
  },
];

const weeks = 30;
const daysPerWeek = 7;

export default function GitHubSection() {
  return (
    <section id="github" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="section-eyebrow mb-4">GitHub</p>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)]">
              Building in public.
            </h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition-colors duration-200"
          >
            <Github size={16} />
            View Profile
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8 mb-8 overflow-x-auto"
        >
          <div className="flex gap-1 min-w-max" aria-hidden="true">
            {Array.from({ length: weeks }).map((_, week) => (
              <div key={week} className="flex flex-col gap-1">
                {Array.from({ length: daysPerWeek }).map((_, day) => {
                  const intensity = Math.random();
                  const opacity =
                    intensity > 0.85
                      ? 1
                      : intensity > 0.6
                      ? 0.7
                      : intensity > 0.35
                      ? 0.4
                      : 0.15;
                  return (
                    <div
                      key={day}
                      className="w-3 h-3 rounded-sm bg-accent"
                      style={{ opacity }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <p className="text-secondary text-xs font-mono mt-4">
            Contribution graph — illustrative placeholder
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`${profile.github}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group block bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono text-sm font-medium">{repo.name}</h3>
                <ArrowUpRight
                  size={16}
                  className="text-secondary group-hover:text-accent transition-colors duration-200"
                />
              </div>
              <p className="text-secondary text-sm leading-relaxed mb-5">
                {repo.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-secondary font-mono">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
