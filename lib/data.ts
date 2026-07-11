export const profile = {
  name: "Manya Pandey",
  firstName: "Manya",
  lastName: "Pandey",
  roles: [
    "Software Developer",
    "AI Builder",
    "Cybersecurity Learner",
    "Technical Writer",
    "Builder",
  ],
  tagline: "Building technology. Exploring cybersecurity. Sharing the journey.",
  heroSub: "Building technology while documenting my cybersecurity journey.",
  email: "manya.pandey.dev@gmail.com",
  github: "https://github.com/manyapandey",
  linkedin: "https://linkedin.com/in/manyapandey",
  resumeUrl: "/resume.pdf",
};

export const about = {
  eyebrow: "About",
  heading: "Curiosity is the starting commit.",
  paragraphs: [
    "I didn't start out planning to write code for a living — I started by taking things apart. A settings menu, a broken script, a login page that behaved strangely. Somewhere between fixing what was broken and building what didn't exist yet, I found the thing I wanted to keep doing.",
    "Right now that means three things running in parallel: building real software, learning how systems fail and how to defend them, and writing down what I learn so the next person climbing the same hill has a shorter path.",
    "I'm early in this journey, and I like it that way. Every project teaches me something my last one didn't. Every vulnerability I study rewires how I think about the code I ship. I'm not trying to look finished — I'm trying to keep getting better in public.",
  ],
  pillars: [
    {
      label: "Curiosity",
      detail: "Ask why it works before asking how to use it.",
    },
    {
      label: "Projects",
      detail: "Ship real things, not tutorials left half-finished.",
    },
    {
      label: "Cybersecurity",
      detail: "Learn how systems break to build ones that don't.",
    },
    {
      label: "Growth",
      detail: "Document the process — the wins and the dead ends.",
    },
  ],
};

export const timeline = [
  {
    year: "2023",
    title: "Started learning technology",
    detail: "Picked up my first lines of code and never really put them down.",
  },
  {
    year: "2023",
    title: "Started BCA",
    detail: "Began a Bachelor's in Computer Applications to formalize the fundamentals.",
  },
  {
    year: "2024",
    title: "Built AirCanvas",
    detail: "Shipped a computer-vision project that turns hand gestures into brush strokes.",
  },
  {
    year: "2024",
    title: "Learning Cybersecurity",
    detail: "Started studying networks, threats, and defense from first principles.",
  },
  {
    year: "2025",
    title: "Building in Public",
    detail: "Started sharing projects, write-ups, and progress as I go, not just the finished product.",
  },
  {
    year: "Next",
    title: "Future...",
    detail: "Deeper into security, deeper into AI, and more things shipped in the open.",
  },
];

export const projects = [
  {
    title: "AirCanvas",
    description:
      "A gesture-controlled digital canvas that turns hand movement into brush strokes using real-time computer vision — no mouse, no stylus, just motion.",
    stack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    challenges:
      "Getting stable, low-latency hand tracking that didn't jitter across different lighting and camera qualities.",
    learnings:
      "How much of computer vision is really about filtering noisy data, not just detecting it.",
    github: "https://github.com/manyapandey/aircanvas",
    caseStudy: "#",
  },
  {
    title: "Portfolio",
    description:
      "This site — a from-scratch personal brand built with Next.js and Framer Motion, designed to feel handcrafted rather than templated.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    challenges:
      "Balancing motion and restraint — building something that feels premium without feeling over-animated.",
    learnings:
      "How much discipline good design actually requires — most of the work is deciding what to leave out.",
    github: "https://github.com/manyapandey/portfolio",
    caseStudy: "#",
  },
  {
    title: "Cybersecurity Lab",
    description:
      "A personal home lab for practicing network defense, vulnerability analysis, and safe exploitation of intentionally vulnerable machines.",
    stack: ["Linux", "Kali", "Wireshark", "Nmap", "VirtualBox"],
    challenges:
      "Building a network topology that's isolated and safe while still realistic enough to learn from.",
    learnings:
      "That most real-world breaches come from small misconfigurations, not exotic zero-days.",
    github: "https://github.com/manyapandey/cybersecurity-lab",
    caseStudy: "#",
  },
];

export const skills = {
  Programming: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express", "REST APIs", "MongoDB"],
  AI: ["OpenCV", "MediaPipe", "Prompt Engineering", "LLM Integrations"],
  Cybersecurity: ["Network Security", "Nmap", "Wireshark", "Linux Hardening"],
  Tools: ["Git", "Docker", "VS Code", "Figma", "Kali Linux"],
};

export const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    credentialUrl: "#",
  },
  {
    title: "Python for Everybody",
    issuer: "University of Michigan (Coursera)",
    year: "2023",
    credentialUrl: "#",
  },
  {
    title: "Foundations of Networking",
    issuer: "Cisco Networking Academy",
    year: "2024",
    credentialUrl: "#",
  },
];

export const currentMission = [
  { label: "Portfolio", detail: "Refining this site into a living case study." },
  { label: "Networking", detail: "Deepening how routing, protocols, and firewalls actually work." },
  { label: "Linux", detail: "Getting fluent in the shell and system administration." },
  { label: "Cybersecurity", detail: "Working through vulnerable machines and CTF challenges." },
  { label: "Open Source", detail: "Looking for my first real contribution to give back." },
];
