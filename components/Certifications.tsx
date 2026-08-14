import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 pb-24 md:px-10 md:pb-32"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading eyebrow="Certifications" title="Learning, verified." />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={i * 0.06}
              className="flex h-full flex-col rounded-3xl border border-border bg-surface p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Award size={18} aria-hidden="true" />
              </span>

              <h3 className="mt-5 font-display text-base font-semibold leading-snug text-ink">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-secondary">
                {cert.issuer} · {cert.year}
              </p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent transition-all duration-300 hover:gap-2.5"
              >
                View credential
                <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only">for {cert.title}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
