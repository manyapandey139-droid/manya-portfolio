"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-eyebrow mb-4">{about.eyebrow}</p>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-balance">
              {about.heading}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="text-secondary text-base md:text-lg leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-20 rounded-2xl overflow-hidden">
          {about.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-6 md:p-8"
            >
              <div className="font-display text-lg mb-2">{pillar.label}</div>
              <p className="text-secondary text-sm leading-relaxed">
                {pillar.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
