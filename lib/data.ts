/**
 * Site content.
 *
 * This file is the single source of truth for everything written on the site
 * (except Featured Work and GitHub, which live in their own files):
 *
 *   lib/featured-work.ts  -> client / hand-picked projects
 *   lib/github-config.ts  -> which GitHub repos show up + their status
 */

/** Canonical site URL — used for SEO metadata, sitemap and robots. */
export const siteUrl = "https://manya-portfolio-ohrs.vercel.app";

export const profile = {
  name: "Manya Pandey",
  firstName: "Manya",
  lastName: "Pandey",

  /** The three things I do — shown in the hero and used across the site. */
  roles: [
    "Website Developer",
    "LinkedIn Ghostwriter",
    "Social Media Manager",
  ] as const,

  headline: {
    lead: "I build websites and",
    highlight: "grow brands online.",
  },

  intro:
    "I'm a digital creative who works at the intersection of design, code and content — building modern websites, writing LinkedIn content that actually sounds human, and managing social presences that stay consistent.",

  location: "India",

  email: "manya13pandey@gmail.com",
  github: "https://github.com/manyapandey139-droid",
  githubUsername: "manyapandey139-droid",
  linkedin: "https://www.linkedin.com/in/manya-pandey139",
  resumeUrl: "/resume.pdf",
};

/** Gmail compose link — keeps the existing behaviour from the old contact section. */
export const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;

export const about = {
  eyebrow: "About",
  heading: "Creative by instinct, technical by choice.",

  paragraphs: [
    "I'm Manya — a developer and content person who never liked picking just one lane. I build websites because I love the craft of making something feel effortless to use, and I write because a brand that can't explain itself doesn't get very far.",

    "Right now I'm pursuing my Bachelor of Computer Applications while working on real projects: designing and shipping websites, ghostwriting LinkedIn content for professionals who'd rather be doing their actual job, and managing social presences that need a steady, thought-out rhythm.",

    "I care about the details — spacing that breathes, copy that sounds like a person, a page that loads fast on a bad connection. If you're building something and want it to look and sound like you meant it, we'll probably get along.",
  ],

  /** Short value props shown as a strip under the About copy. */
  pillars: [
    {
      label: "Design-led",
      detail: "Layout, type and detail come before decoration.",
    },
    {
      label: "Built to last",
      detail: "Clean, maintainable code you can keep growing.",
    },
    {
      label: "Words that work",
      detail: "Content written to sound human, not corporate.",
    },
    {
      label: "Consistent",
      detail: "Planned, steady output instead of random posting.",
    },
  ],
};

export type Service = {
  number: string;
  title: string;
  description: string;
  /** Concrete deliverables — keep these honest and specific. */
  points: string[];
  /** Icon key resolved in components/ServiceCard.tsx */
  icon: "code" | "pen" | "share";
};

export const services: Service[] = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive and visually polished websites for businesses, brands and personal projects.",
    points: [
      "Responsive design across every screen",
      "Built with Next.js, React & Tailwind",
      "Performance and accessibility minded",
    ],
    icon: "code",
  },
  {
    number: "02",
    title: "LinkedIn Ghostwriting",
    description:
      "Strategic LinkedIn content and ghostwritten posts designed to help professionals and personal brands communicate consistently.",
    points: [
      "Posts written in your own voice",
      "Content themes and posting rhythm",
      "Profile and positioning clean-up",
    ],
    icon: "pen",
  },
  {
    number: "03",
    title: "Social Media Management",
    description:
      "Content planning, social media strategy, content execution and overall social presence management.",
    points: [
      "Monthly content planning",
      "Design and copy for each post",
      "Consistent publishing and upkeep",
    ],
    icon: "share",
  },
];

/**
 * Skills — only technologies actually used in this portfolio, my resume
 * or my projects. Keep it honest; don't pad the list.
 */
export const skills: Record<string, string[]> = {
  "Web Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  Programming: ["Python", "Java", "C"],
  "Content & Brand": [
    "LinkedIn Ghostwriting",
    "Content Strategy",
    "Social Media Management",
    "Personal Branding",
    "Copywriting",
  ],
  "Design & Tools": ["Figma", "Canva", "Git", "GitHub", "VS Code"],
};

export const certifications = [
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    year: "2025",
    credentialUrl:
      "https://coursera.org/share/8cb3224870525ad75ecc58d5f82cbc4e",
  },
  {
    title: "AI for Brainstorming and Planning",
    issuer: "Google",
    year: "2025",
    credentialUrl:
      "https://coursera.org/share/bcc2ee11d7ddfdd4b6f6bf4f8e000e83",
  },
  {
    title: "AI Fundamentals",
    issuer: "Google",
    year: "2025",
    credentialUrl:
      "https://coursera.org/share/b9ab7ab25f4a89d6eed01e01a6017ff8",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    year: "2025",
    credentialUrl:
      "https://coursera.org/share/9b709db7b4a96762adf6f9d324c4ae7b",
  },
];

export const contact = {
  eyebrow: "Contact",
  heading: "Have a project in mind?",
  highlight: "Let's build something.",
  body: "Whether it's a website, a LinkedIn presence that needs a voice, or social media that needs a plan — tell me what you're working on.",
};
