import { ArrowUpRight, GitFork, Star, ExternalLink } from "lucide-react";
import type { GitHubProject } from "@/lib/github";
import StatusBadge from "./ui/StatusBadge";

/** Muted brand-ish dots so the language reads at a glance. */
const languageColors: Record<string, string> = {
  TypeScript: "#7C5AC2",
  JavaScript: "#C9A227",
  Python: "#5A82B8",
  HTML: "#C4756B",
  CSS: "#7B8FCB",
  Java: "#B98A5A",
  C: "#8E93A8",
  Shell: "#7FA07F",
};

function formatUpdated(iso: string): string | null {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime()) || date.getTime() === 0) return null;

  const days = Math.floor((Date.now() - date.getTime()) / 86_400_000);
  if (days <= 0) return "Updated today";
  if (days === 1) return "Updated yesterday";
  if (days < 30) return `Updated ${days} days ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `Updated ${months} ${months === 1 ? "month" : "months"} ago`;

  const years = Math.floor(months / 12);
  return `Updated ${years} ${years === 1 ? "year" : "years"} ago`;
}

/** One repository fetched from the GitHub API. */
export default function RepoCard({ project }: { project: GitHubProject }) {
  const updated = formatUpdated(project.updatedAt);

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {project.title}
            <span className="sr-only"> — open on GitHub</span>
          </a>
        </h3>
        <ArrowUpRight
          size={17}
          aria-hidden="true"
          className="mt-1 shrink-0 text-lavender transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>

      {project.status ? (
        <div className="mt-3">
          <StatusBadge status={project.status} />
        </div>
      ) : null}

      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-secondary">
        {/* Never invent a description — say so plainly instead. */}
        {project.description ?? (
          <span className="italic text-secondary/70">
            No description added on GitHub yet.
          </span>
        )}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-5 text-xs text-secondary">
        {project.language ? (
          <span className="inline-flex items-center gap-1.5 font-medium text-body">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: languageColors[project.language] ?? "#C4B0E4",
              }}
            />
            {project.language}
          </span>
        ) : null}

        {project.stars > 0 ? (
          <span className="inline-flex items-center gap-1">
            <Star size={13} aria-hidden="true" />
            {project.stars}
            <span className="sr-only">stars</span>
          </span>
        ) : null}

        {project.forks > 0 ? (
          <span className="inline-flex items-center gap-1">
            <GitFork size={13} aria-hidden="true" />
            {project.forks}
            <span className="sr-only">forks</span>
          </span>
        ) : null}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        {updated ? (
          <span className="text-xs text-secondary/80">{updated}</span>
        ) : (
          <span />
        )}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-1.5 text-xs font-medium text-body transition-colors hover:border-accent hover:text-accent"
          >
            <ExternalLink size={12} aria-hidden="true" />
            Live demo
            <span className="sr-only"> of {project.title}</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
