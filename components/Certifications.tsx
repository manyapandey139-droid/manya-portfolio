"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">Certifications</p>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)]">
            Learning, verified.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col hover:border-accent/50 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Award className="text-accent" size={20} />
              </div>
              <h3 className="font-display text-lg mb-1">{cert.title}</h3>
              <p className="text-secondary text-sm mb-1">{cert.issuer}</p>
              <p className="font-mono text-xs text-secondary/70 mb-6">
                {cert.year}
              </p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all duration-200"
              >
                View Credential
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
