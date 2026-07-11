# Manya Pandey — Portfolio

Award-quality personal portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scroll.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — Next.js app router: layout, page, global styles, SEO (sitemap/robots)
- `components/` — every section (Navbar, Hero, About, Timeline, Projects, Skills, Certifications, GitHub, Current Mission, Contact, Footer) plus Loading Screen, Custom Cursor, Smooth Scroll
- `lib/data.ts` — all real content in one place; edit this file to update copy without touching components

## Before deploying

1. Add a real `public/resume.pdf`.
2. Add a real `public/og-image.png` (1200×630) for social previews.
3. Add `public/favicon.ico`.
4. Replace the GitHub username, LinkedIn URL, and email in `lib/data.ts` if they change.
5. Swap the illustrative contribution graph and repo cards in `components/GitHubSection.tsx` for a live GitHub API call if you want real-time data (not wired up here to avoid a build-time dependency on your GitHub token).

## Notes

- Respects `prefers-reduced-motion` (disables Lenis and shortens all animations).
- Custom cursor and Lenis auto-disable on touch/coarse-pointer devices.
- All colors and fonts are centralized in `tailwind.config.ts`.
