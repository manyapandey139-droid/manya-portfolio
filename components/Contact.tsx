"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  {
    label: "Email",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "Resume",
    href: profile.resumeUrl,
    icon: FileText,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-28 md:py-40">
      <div className="max-w-content mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow mb-6 justify-center flex"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.05] text-balance"
        >
          Have an idea?
          <br />
          Let&apos;s build something{" "}
          <span className="gradient-text">unforgettable.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2.5 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
