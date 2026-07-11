"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="journey" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">Journey</p>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)]">
            The path so far.
          </h2>
        </motion.div>

        <ol className="relative border-l border-border ml-2 md:ml-4">
          {timeline.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 pb-14 last:pb-0"
            >
              <span
                className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background"
                aria-hidden="true"
              />
              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
                {item.year}
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2">
                {item.title}
              </h3>
              <p className="text-secondary max-w-lg leading-relaxed">
                {item.detail}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
