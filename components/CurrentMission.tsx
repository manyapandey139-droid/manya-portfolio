"use client";

import { motion } from "framer-motion";
import { currentMission } from "@/lib/data";

export default function CurrentMission() {
  return (
    <section id="mission" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">Current Mission</p>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)]">
            Currently building.
          </h2>
        </motion.div>

        <div className="divide-y divide-border border-t border-b border-border">
          {currentMission.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-6"
            >
              <span className="font-mono text-xs text-secondary w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-xl md:text-2xl sm:w-56 shrink-0 group-hover:text-accent transition-colors duration-300">
                {item.label}
              </span>
              <span className="text-secondary leading-relaxed">
                {item.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
