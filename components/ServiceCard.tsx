import { Code2, PenLine, Share2, Check } from "lucide-react";
import type { Service } from "@/lib/data";

const icons = {
  code: Code2,
  pen: PenLine,
  share: Share2,
} as const;

/** One service card. Content comes from `services` in lib/data.ts. */
export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift">
      {/* Soft tint that warms on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lavender-tint opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
          <Icon size={20} aria-hidden="true" />
        </span>
        <span
          aria-hidden="true"
          className="font-display text-3xl font-semibold text-lavender/70"
        >
          {service.number}
        </span>
      </div>

      <h3 className="relative mt-7 font-display text-2xl font-semibold tracking-tight text-ink">
        {service.title}
      </h3>

      <p className="relative mt-3 text-sm leading-relaxed text-secondary">
        {service.description}
      </p>

      <ul className="relative mt-6 space-y-2.5 border-t border-border pt-6">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-body">
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-accent"
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
