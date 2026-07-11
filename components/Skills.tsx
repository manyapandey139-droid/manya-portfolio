"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">Skills</p>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)]">
            What I work with.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.06 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    whileHover={{ y: -3, borderColor: "#8B5CF6", color: "#8B5CF6" }}
                    className="px-4 py-2 rounded-full border border-border text-sm text-secondary cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
