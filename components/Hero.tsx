"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile, emailHref } from "@/lib/data";
import ButtonLink from "./ui/Button";
import ProfilePhoto from "./ProfilePhoto";

const socials = [
  { label: "GitHub profile", href: profile.github, icon: Github },
  { label: "LinkedIn profile", href: profile.linkedin, icon: Linkedin },
  { label: "Email Manya", href: emailHref, icon: Mail },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0.3 : 0.85,
      delay: reduceMotion ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40"
    >
      {/* Ambient background wash */}
      <div
        aria-hidden="true"
        className="aura -right-20 -top-24 h-[26rem] w-[26rem] bg-lavender/35"
      />
      <div
        aria-hidden="true"
        className="aura -left-24 top-40 h-80 w-80 bg-blush/30"
      />

      <div className="mx-auto grid w-full max-w-content items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <motion.p {...rise(0.05)} className="section-eyebrow mb-6">
            {profile.name}
          </motion.p>

          <h1 className="font-display text-[clamp(2.6rem,6.4vw,4.6rem)] font-semibold leading-[1.06] tracking-tight text-ink text-balance">
            <motion.span {...rise(0.12)} className="block">
              {profile.headline.lead}
            </motion.span>
            <motion.span {...rise(0.22)} className="block gradient-text">
              {profile.headline.highlight}
            </motion.span>
          </h1>

          {/* The three roles — always visible, no rotation to guess at */}
          <motion.ul
            {...rise(0.32)}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2.5"
          >
            {profile.roles.map((role, i) => (
              <li key={role} className="flex items-center gap-3">
                {i > 0 ? (
                  <span
                    aria-hidden="true"
                    className="hidden h-1 w-1 rounded-full bg-lavender sm:block"
                  />
                ) : null}
                <span className="rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-medium text-body shadow-soft backdrop-blur-sm sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:backdrop-blur-none">
                  {role}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            {...rise(0.42)}
            className="mt-7 max-w-xl text-base leading-relaxed text-secondary md:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            {...rise(0.52)}
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <ButtonLink href="#work">
              View My Work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Let&apos;s Work Together
            </ButtonLink>
          </motion.div>

          <motion.div
            {...rise(0.62)}
            className="mt-10 flex items-center gap-3"
          >
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/70 text-body shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
            <span className="ml-1 h-px w-10 bg-border-strong" aria-hidden="true" />
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-secondary underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Résumé
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0.3 : 1,
            delay: reduceMotion ? 0 : 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="order-first lg:order-none"
        >
          <ProfilePhoto />
        </motion.div>
      </div>

      <div className="mx-auto mt-20 flex max-w-content justify-center lg:mt-24">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-secondary transition-colors hover:text-accent"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
            Scroll
          </span>
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <ArrowDown size={16} />
          </motion.span>
        </a>
      </div>
    </section>
  );
}
