import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import { profile, contact, emailHref } from "@/lib/data";
import Reveal from "./ui/Reveal";
import ButtonLink from "./ui/Button";

/** Only real links from lib/data.ts — nothing invented. */
const channels = [
  { label: "Email", value: profile.email, href: emailHref, icon: Mail },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: profile.githubUsername,
    href: profile.github,
    icon: Github,
  },
  { label: "Résumé", value: "View PDF", href: profile.resumeUrl, icon: FileText },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div
        aria-hidden="true"
        className="aura left-1/2 top-10 h-96 w-96 -translate-x-1/2 bg-lavender/30"
      />

      <div className="mx-auto max-w-content">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-white via-lavender-tint to-blush-tint px-6 py-16 shadow-soft md:px-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="section-eyebrow mb-6 justify-center">
                {contact.eyebrow}
              </p>

              <h2 className="font-display text-[clamp(2.1rem,5.2vw,3.6rem)] font-semibold leading-[1.1] tracking-tight text-ink text-balance">
                {contact.heading}
                <br />
                <span className="gradient-text">{contact.highlight}</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-secondary">
                {contact.body}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <ButtonLink href={emailHref}>
                  Email me
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </ButtonLink>
                <ButtonLink href={profile.linkedin} variant="secondary">
                  <Linkedin size={16} aria-hidden="true" />
                  Message on LinkedIn
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <ul className="mx-auto mt-14 grid max-w-3xl gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {channels.map(({ label, value, href, icon: Icon }) => {
                const isExternal = /^https?:\/\//i.test(href);
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target={isExternal || href.endsWith(".pdf") ? "_blank" : undefined}
                      rel={
                        isExternal || href.endsWith(".pdf")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex h-full flex-col gap-1.5 bg-white/85 p-5 transition-colors duration-300 hover:bg-white"
                    >
                      <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                        <Icon size={13} aria-hidden="true" />
                        {label}
                      </span>
                      <span className="break-words text-sm text-body">
                        {value}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
