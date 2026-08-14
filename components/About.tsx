import { about, profile } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div
        aria-hidden="true"
        className="aura -left-32 top-10 h-72 w-72 bg-lavender/25"
      />

      <div className="mx-auto max-w-content">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal>
            <p className="section-eyebrow mb-5">{about.eyebrow}</p>
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.1rem)] font-semibold leading-[1.12] tracking-tight text-ink text-balance">
              {about.heading}
            </h2>

            <div className="mt-8 rounded-3xl border border-border bg-white/60 p-6 shadow-soft backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                What I do
              </p>
              <ul className="mt-4 space-y-2.5">
                {profile.roles.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-body">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-lavender"
                    />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-[1.8] text-body md:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((pillar, i) => (
            <Reveal
              key={pillar.label}
              delay={i * 0.06}
              className="group bg-surface p-7 transition-colors duration-300 hover:bg-lavender-tint md:p-8"
            >
              <div className="font-display text-lg font-semibold text-ink">
                {pillar.label}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {pillar.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
