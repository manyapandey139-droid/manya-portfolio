/**
 * ─────────────────────────────────────────────────────────────
 *  FEATURED WORK  —  hand-picked client & portfolio projects
 * ─────────────────────────────────────────────────────────────
 *
 *  ➤ THIS is where you add new client projects.
 *
 *  To add a project, copy one of the objects below, paste it at the TOP of
 *  the `featuredWork` array (first item = most prominent card) and fill it in.
 *  You never need to touch a component — the UI is generated from this list.
 *
 *  Every field except `title`, `category` and `description` is optional.
 *  Anything you leave out (`null` / omitted) is simply not rendered:
 *
 *    image     -> card falls back to an elegant gradient panel
 *    liveUrl   -> the "Visit site" button is hidden
 *    githubUrl -> the "Code" button is hidden
 *    year      -> the year label is hidden
 *
 *  IMAGES: drop a screenshot into /public/work/ and reference it as
 *  "/work/your-file.jpg". Recommended size: 1200×800 (3:2).
 */

export type ProjectStatus = "completed" | "in-progress";

export type FeaturedProject = {
  /** Stable id — used as the React key. Keep it unique. */
  id: string;
  title: string;
  /** e.g. "Client Project", "Personal Project" */
  category: string;
  /** One or two sentences. Keep it factual. */
  description: string;
  /** What you actually did on the project. */
  role: string;
  /** Tools / technologies used. */
  tech: string[];
  status?: ProjectStatus;
  year?: string | null;
  /** Path inside /public, e.g. "/work/kts-fashion.jpg" */
  image?: string | null;
  imageAlt?: string | null;
  liveUrl?: string | null;
  githubUrl?: string | null;
  /** Set on ONE project to give it the large hero card. */
  highlight?: boolean;
};

export const featuredWork: FeaturedProject[] = [
  {
    id: "kts-fashion",
    title: "KT's Fashion",
    category: "Client Project",

    // Details taken from the live site (ktweb-murex.vercel.app).
    // TODO(Manya): reword this in your own voice if you'd like.
    description:
      "A women's fashion storefront for KT's Fashion — a browsable catalogue organised by category, with featured and new-arrival collections, seasonal edits and product detail pages.",

    role: "Website Design & Development",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "completed",
    year: null,

    // TODO(Manya): add a screenshot to /public/work/ and point to it here,
    // e.g. image: "/work/kts-fashion.jpg"
    image: null,
    imageAlt: "Screenshot of the KT's Fashion website",

    liveUrl: "https://ktweb-murex.vercel.app/",
    githubUrl: "https://github.com/manyapandey139-droid/ktweb",

    highlight: true,
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Personal Project",
    description:
      "This site — a personal brand portfolio built with Next.js and Tailwind CSS, with a curated work section and a GitHub feed that updates itself.",
    role: "Design & Development",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "completed",
    year: null,
    image: null,
    imageAlt: null,
    liveUrl: "https://manya-portfolio-ohrs.vercel.app",
    githubUrl: "https://github.com/manyapandey139-droid/manya-portfolio",
  },

  /* ── Add your next client here ──────────────────────────────
  {
    id: "client-project-2",
    title: "Client Project 2",
    category: "Client Project",
    description: "One or two honest sentences about what you built.",
    role: "Website Design & Development",
    tech: ["Next.js", "Tailwind CSS"],
    status: "completed",
    year: "2026",
    image: "/work/client-project-2.jpg",
    imageAlt: "Screenshot of the Client Project 2 website",
    liveUrl: "https://example.com",
    githubUrl: null,
  },
  ──────────────────────────────────────────────────────────── */
];
