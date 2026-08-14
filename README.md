# Manya Pandey — Portfolio

Personal brand portfolio for a **Website Developer · LinkedIn Ghostwriter · Social Media Manager**.
Built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

## Where to edit things

| I want to… | Edit this file |
| --- | --- |
| Add a **client project** to Featured Work | `lib/featured-work.ts` |
| Mark a GitHub repo **completed / in-progress** | `lib/github-config.ts` → `repoOverrides` |
| Hide a repo from the GitHub section | `lib/github-config.ts` → `exclude` |
| Add my **profile photo** | `components/ProfilePhoto.tsx` → `PHOTO_SRC` |
| Change hero copy, about, services, skills, contact | `lib/data.ts` |
| Change colours, fonts, shadows | `tailwind.config.ts` + `app/globals.css` |

## Structure

- `app/` — layout, page, global styles, SEO (`sitemap.ts`, `robots.ts`, `icon.svg`,
  `opengraph-image.tsx`) and the GitHub API route (`api/github/route.ts`)
- `components/` — one file per section, plus reusable primitives in `components/ui/`
  (`Button`, `SectionHeading`, `StatusBadge`, `Tag`, `Reveal`)
- `lib/` — all content and configuration:
  - `data.ts` — profile, about, services, skills, certifications, contact
  - `featured-work.ts` — hand-picked client / portfolio projects
  - `github-config.ts` — which repos appear and their portfolio-only status
  - `github.ts` — GitHub API fetching, filtering and sorting (server-side only)

## How the GitHub section works

1. The browser calls `/api/github`.
2. That route runs **on the server**, calls the public GitHub REST API, filters out
   forks / archived / excluded repos, applies your overrides, and sorts
   (pinned first, then most recently pushed).
3. The response is cached for **1 hour**, so visitors never hit GitHub directly.

Make a repository public and it appears automatically — no code changes needed.

## Environment variables

**None are required.** The site builds and runs with no `.env` file.

`GITHUB_TOKEN` is optional and only raises the GitHub API rate limit — see
`.env.example`. It is read on the server only and never exposed to the browser.

## Notes

- Respects `prefers-reduced-motion` throughout.
- Smooth scrolling is native CSS (`scroll-behavior` + `scroll-padding-top`) — no
  scroll library.
- The `portfolio/` directory is an older duplicate copy of this project. It is
  git-ignored and excluded from the build, typecheck and lint.
