"use client";

import { useCallback, useEffect, useState } from "react";
import { Github, RefreshCw, ArrowUpRight } from "lucide-react";
import type { GitHubProject } from "@/lib/github";
import { profile } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import RepoCard from "./RepoCard";

type State =
  | { status: "loading" }
  | { status: "ready"; projects: GitHubProject[] }
  | { status: "error"; message: string };

function SkeletonCard() {
  return (
    <div className="shimmer h-64 rounded-3xl border border-border bg-surface p-7">
      <div className="h-4 w-1/2 rounded-full bg-lavender-tint" />
      <div className="mt-6 h-3 w-full rounded-full bg-lavender-tint" />
      <div className="mt-3 h-3 w-5/6 rounded-full bg-lavender-tint" />
      <div className="mt-3 h-3 w-2/3 rounded-full bg-lavender-tint" />
      <div className="mt-10 h-3 w-1/3 rounded-full bg-lavender-tint" />
    </div>
  );
}

/**
 * Repositories are fetched from /api/github, which talks to the GitHub REST
 * API server-side and caches the result for an hour. Making a repo public
 * is all it takes for it to appear here.
 */
export default function GitHubProjects() {
  const [state, setState] = useState<State>({ status: "loading" });

  /* `loading` is already the initial state, so this never sets state
     synchronously — the retry handler below resets it explicitly. */
  const load = useCallback(async (signal?: AbortSignal) => {
    try {
      const res = await fetch("/api/github", { signal });
      const data = await res.json().catch(() => null);

      if (!res.ok || !data) {
        throw new Error(
          data?.error ?? "Couldn't load repositories from GitHub."
        );
      }

      setState({
        status: "ready",
        projects: Array.isArray(data.projects) ? data.projects : [],
      });
    } catch (error) {
      if (signal?.aborted) return;
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Couldn't load repositories from GitHub.",
      });
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    /* `load` only sets state after the fetch resolves, and the request is
       aborted on unmount — no synchronous cascading render happens here.
       The lint rule can't see past the await, so it's scoped off. */
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load(controller.signal);
    return () => controller.abort();
  }, [load]);

  const retry = useCallback(() => {
    setState({ status: "loading" });
    load();
  }, [load]);

  const viewProfile = (
    <a
      href={profile.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/70 px-5 py-2.5 text-sm font-medium text-body shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      <Github size={16} aria-hidden="true" />
      View GitHub profile
      <ArrowUpRight
        size={14}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );

  return (
    <section
      id="github"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div
        aria-hidden="true"
        className="aura -right-28 top-24 h-80 w-80 bg-lavender/25"
      />

      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Building & Experimenting"
          title="Straight from GitHub."
          description="This list updates itself — every public repository I push shows up here automatically."
          action={viewProfile}
        />

        <div
          aria-live="polite"
          aria-busy={state.status === "loading"}
          className="min-h-[16rem]"
        >
          {state.status === "loading" ? (
            <>
              <span className="sr-only">Loading repositories from GitHub…</span>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            </>
          ) : null}

          {state.status === "error" ? (
            <div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-soft">
              <div className="max-w-md space-y-2">
                <p className="text-sm font-medium text-ink">{state.message}</p>
                <p className="text-sm leading-relaxed text-secondary">
                  My repositories are still there — try again in a moment, or
                  head straight to GitHub.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={retry}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
                >
                  <RefreshCw size={15} aria-hidden="true" />
                  Try again
                </button>
                {viewProfile}
              </div>
            </div>
          ) : null}

          {state.status === "ready" && state.projects.length === 0 ? (
            <div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-soft">
              <p className="max-w-md text-sm leading-relaxed text-secondary">
                No public repositories to show right now.
              </p>
              {viewProfile}
            </div>
          ) : null}

          {state.status === "ready" && state.projects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {state.projects.map((project, i) => (
                <Reveal
                  key={project.id}
                  delay={Math.min(i, 5) * 0.06}
                  className="h-full"
                >
                  <RepoCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
