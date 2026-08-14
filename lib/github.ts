/**
 * GitHub data layer.
 *
 * Runs on the server only (used by app/api/github/route.ts) so that an
 * optional GITHUB_TOKEN never reaches the browser. Without a token the
 * public API allows 60 requests/hour per IP, which is plenty because the
 * response is cached — see `revalidate` in the route handler.
 */

import { githubConfig, getRepoOverride, type RepoStatus } from "./github-config";

/** The normalised shape the UI consumes. */
export type GitHubProject = {
  id: number;
  name: string;
  /** Override title if set, otherwise a prettified repo name. */
  title: string;
  /** Override description, or the repo description, or null. */
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  /** ISO date string. */
  updatedAt: string;
  repoUrl: string;
  /** Validated http(s) homepage, or null. */
  liveUrl: string | null;
  topics: string[];
  status: RepoStatus | null;
  featured: boolean;
};

/** Only the fields we actually read off the GitHub response. */
type GitHubApiRepo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string | null;
  updated_at: string | null;
  html_url: string;
  homepage: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  private: boolean;
};

export class GitHubError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message);
    this.name = "GitHubError";
  }
}

/** "my-cool-repo" -> "My Cool Repo" (leaves already-capitalised names alone). */
function prettifyName(name: string): string {
  return name
    .replace(/[-_.]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) =>
      /[A-Z]/.test(word.slice(1))
        ? word // preserve intentional casing like "AirOS"
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

/** Accept a homepage only if it is a real, absolute http(s) URL. */
function normaliseHomepage(homepage: string | null): string | null {
  if (!homepage) return null;
  const trimmed = homepage.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(
      /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
    );
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

function toProject(repo: GitHubApiRepo): GitHubProject {
  const override = getRepoOverride(repo.name);

  return {
    id: repo.id,
    name: repo.name,
    title: override.title ?? prettifyName(repo.name),
    description: override.description ?? repo.description ?? null,
    language: repo.language ?? null,
    stars: repo.stargazers_count ?? 0,
    forks: repo.forks_count ?? 0,
    updatedAt: repo.pushed_at ?? repo.updated_at ?? new Date(0).toISOString(),
    repoUrl: repo.html_url,
    liveUrl: normaliseHomepage(repo.homepage),
    topics: Array.isArray(repo.topics) ? repo.topics.slice(0, 3) : [],
    status: override.status ?? null,
    featured: override.featured ?? false,
  };
}

/**
 * Fetch, filter and sort my public repositories.
 *
 * Sorting: pinned (`featured: true` in github-config) first, then most
 * recently pushed.
 */
export async function fetchGitHubProjects(): Promise<GitHubProject[]> {
  const { username, exclude, includeForks, includeArchived, maxRepos } =
    githubConfig;

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "manya-portfolio",
  };

  // Optional — see .env.example. Only ever read on the server.
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed&type=owner`,
    { headers, next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    if (res.status === 403 || res.status === 429) {
      throw new GitHubError("GitHub rate limit reached", 429);
    }
    if (res.status === 404) {
      throw new GitHubError("GitHub user not found", 404);
    }
    throw new GitHubError(`GitHub request failed (${res.status})`, 502);
  }

  const data: unknown = await res.json();
  if (!Array.isArray(data)) {
    throw new GitHubError("Unexpected response from GitHub", 502);
  }

  const excluded = new Set(exclude.map((name) => name.toLowerCase()));

  return (data as GitHubApiRepo[])
    .filter((repo) => repo && typeof repo.name === "string")
    .filter((repo) => !repo.private)
    .filter((repo) => (includeForks ? true : !repo.fork))
    .filter((repo) => (includeArchived ? true : !repo.archived))
    .filter((repo) => !excluded.has(repo.name.toLowerCase()))
    .map(toProject)
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return (
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
    })
    .slice(0, maxRepos);
}
