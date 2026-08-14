import Image from "next/image";
import clsx from "clsx";
import { ArrowUpRight, Github } from "lucide-react";
import type { FeaturedProject } from "@/lib/featured-work";
import StatusBadge from "./ui/StatusBadge";
import Tag from "./ui/Tag";

/**
 * Renders one entry from lib/featured-work.ts.
 * Every optional field degrades gracefully when it's null/omitted.
 */
export default function FeaturedProjectCard({
  project,
  large = false,
}: {
  project: FeaturedProject;
  large?: boolean;
}) {
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <article
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift",
        large && "lg:flex-row"
      )}
    >
      {/* Visual — screenshot when provided, elegant gradient panel otherwise */}
      <div
        className={clsx(
          "relative shrink-0 overflow-hidden bg-gradient-to-br from-lavender-tint via-white to-blush-tint",
          large ? "aspect-[16/10] lg:aspect-auto lg:w-[52%]" : "aspect-[16/10]"
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} — ${project.category}`}
            fill
            sizes={large ? "(max-width: 1024px) 100vw, 600px" : "(max-width: 768px) 100vw, 560px"}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            role="img"
            aria-label={`Placeholder artwork for ${project.title}`}
          >
            <div className="flex flex-col items-center gap-3 px-6 text-center">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border-strong bg-white/80 font-display text-lg font-semibold text-accent shadow-soft"
              >
                {project.title.charAt(0)}
              </span>
              <span className="font-display text-xl text-ink">
                {project.title}
              </span>
            </div>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full border border-border bg-white/85 px-3 py-1 text-[11px] font-medium text-body backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className={clsx("flex flex-1 flex-col p-7 md:p-8", large && "lg:p-10")}>
        <div className="flex flex-wrap items-center gap-3">
          <h3
            className={clsx(
              "font-display font-semibold tracking-tight text-ink",
              large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            )}
          >
            {project.title}
          </h3>
          {project.status ? <StatusBadge status={project.status} /> : null}
          {project.year ? (
            <span className="text-xs text-secondary">{project.year}</span>
          ) : null}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-secondary md:text-base">
          {project.description}
        </p>

        <dl className="mt-6 flex flex-col gap-4 border-t border-border pt-6">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              Role
            </dt>
            <dd className="mt-1.5 text-sm text-body">{project.role}</dd>
          </div>

          {project.tech.length > 0 ? (
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                Built with
              </dt>
              <dd className="mt-2.5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </dd>
            </div>
          ) : null}
        </dl>

        {hasLinks ? (
          <div className="mt-7 flex flex-wrap items-center gap-3 pt-1">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-deep"
              >
                Visit site
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">({project.title})</span>
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-body transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <Github size={15} aria-hidden="true" />
                Code
                <span className="sr-only">for {project.title}</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
