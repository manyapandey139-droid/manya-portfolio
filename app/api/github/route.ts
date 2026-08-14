import { NextResponse } from "next/server";
import { fetchGitHubProjects, GitHubError } from "@/lib/github";

/**
 * GET /api/github
 *
 * Server-side proxy for the GitHub REST API. Keeps the optional
 * GITHUB_TOKEN off the client and lets the response be cached, which
 * means visitors never hit GitHub's rate limit directly.
 *
 * Cached for one hour — a new public repository appears within that window.
 */
export const revalidate = 3600;

export async function GET() {
  try {
    const projects = await fetchGitHubProjects();

    return NextResponse.json(
      { projects },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    const isKnown = error instanceof GitHubError;
    const status = isKnown ? error.status : 502;

    return NextResponse.json(
      {
        projects: [],
        error: isKnown
          ? error.message
          : "Could not reach GitHub right now.",
      },
      { status }
    );
  }
}
