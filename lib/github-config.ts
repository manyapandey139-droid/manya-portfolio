/**
 * ─────────────────────────────────────────────────────────────
 *  GITHUB CONFIG  —  portfolio-side control over my repositories
 * ─────────────────────────────────────────────────────────────
 *
 *  Repository facts (name, description, language, stars, forks, last
 *  updated, homepage) are fetched automatically from the GitHub API.
 *  A brand new public repo shows up here on its own — no code changes.
 *
 *  This file only controls the things GitHub cannot know:
 *
 *    • whether a project is "completed" or "in-progress"
 *    • whether it should be pinned to the front
 *    • an optional nicer title / description than the repo has
 *    • which repos to hide entirely
 *
 *  Keys in `repoOverrides` are matched case-insensitively against the
 *  repository name, so "AirOS" and "airos" both work.
 */

export type RepoStatus = "completed" | "in-progress";

export type RepoOverride = {
  /** Shown as a badge on the card. Omit for no badge. */
  status?: RepoStatus;
  /** Pin this repo to the front of the list. */
  featured?: boolean;
  /** Use instead of the repository name. */
  title?: string;
  /** Use instead of the repository description from GitHub. */
  description?: string;
};

export const githubConfig = {
  username: "manyapandey139-droid",

  /** How many repositories to show at most. */
  maxRepos: 9,

  /** Hide forks of other people's repositories. */
  includeForks: false,

  /** Hide archived repositories. */
  includeArchived: false,

  /**
   * Repos to never show (case-insensitive, exact name match).
   * These two already appear in Featured Work, so they're hidden here to
   * keep the curated section and the GitHub feed separate.
   */
  exclude: [
    "manyapandey139-droid", // GitHub profile README repo
    "ktweb", // KT's Fashion — shown in Featured Work
    "manya-portfolio", // this site — shown in Featured Work
  ] as string[],

  /**
   * ➤ CHANGE PROJECT STATUS HERE.
   *
   * Add an entry keyed by the repository name, then set:
   *   status: "completed"   or   status: "in-progress"
   *
   * `title` and `description` are optional — leave them out and the real
   * repository name / description from GitHub is used instead.
   */
  repoOverrides: {
    airos: {
      title: "AirOS",
      status: "in-progress",
      featured: true,
    },
    aircanvas: {
      title: "AirCanvas",
      status: "completed",
      featured: true,
    },
    "cafe-lux": {
      title: "Cafe Lux",
    },
    clothbrand: {
      title: "Cloth Brand",
    },
  } as Record<string, RepoOverride>,
};

/** Case-insensitive override lookup. */
export function getRepoOverride(repoName: string): RepoOverride {
  const key = Object.keys(githubConfig.repoOverrides).find(
    (k) => k.toLowerCase() === repoName.toLowerCase()
  );
  return key ? githubConfig.repoOverrides[key] : {};
}
