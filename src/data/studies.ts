export const studies = [
  {
    title: "High School Student",
    institution: "Self-Directed Learning",
    description:
      "14-year-old vibe coder learning modern web technologies through experimentation and fun projects. Figuring things out as I go with a focus on having fun and breaking stuff.",
    tags: [
      "Web Development",
      "Full-Stack",
      "Infrastructure",
      "AI Tools",
      "Modern Technologies",
    ],
  },
  {
    title: "Independent Experimenter",
    institution: "Personal Projects & Open Source",
    description:
      "Building random applications and contributing to open source projects. Learning through breaking things and putting them back together with modern frameworks and tools.",
    tags: [
      "React",
      "Svelte",
      "Astro",
      "Python",
      "DevOps",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

