"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-content mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-16 items-center pt-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="section-eyebrow mb-6"
          >
            Portfolio / 2026
          </motion.p>

          <h1 className="font-display font-semibold leading-[0.95] text-balance">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="block text-[clamp(3rem,9vw,7rem)]"
            >
              MANYA
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="block text-[clamp(3rem,9vw,7rem)] gradient-text"
            >
              PANDEY
            </motion.span>
          </h1>

          <div className="mt-8 h-8 flex items-center">
            <span className="font-mono text-sm text-secondary mr-3">/</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.roles[roleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-sm md:text-base text-accent tracking-wide"
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-lg text-secondary text-lg leading-relaxed"
          >
            {profile.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-primary transition-colors duration-200"
            >
              Explore Projects
              <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Download Resume
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative hidden md:flex items-center justify-center h-80"
          aria-hidden="true"
        >
          <div className="absolute w-64 h-64 rounded-full border border-border animate-spin-slow" />
          <div
            className="absolute w-64 h-64 rounded-full border border-accent/40 animate-spin-slow"
            style={{ animationDirection: "reverse", animationDuration: "24s" }}
          />
          <div className="absolute w-40 h-40 rounded-2xl border border-border rotate-45 animate-float" />
          <div className="absolute w-24 h-24 rounded-full bg-accent/20 blur-2xl animate-pulse-ring" />
          <div className="w-4 h-4 rounded-full bg-accent" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary hover:text-accent transition-colors duration-200"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
