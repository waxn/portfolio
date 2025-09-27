export const studies = [
  {
    title: "High School Student",
    institution: "Self-Directed Learning",
    description:
      "Passionate 14-year-old developer learning modern web technologies through hands-on projects and self-directed study. Focus on full-stack development and infrastructure.",
    tags: [
      "Web Development",
      "Full-Stack",
      "Infrastructure",
      "AI Tools",
      "Modern Technologies",
    ],
  },
  {
    title: "Independent Developer",
    institution: "Personal Projects & Open Source",
    description:
      "Building real-world applications and contributing to open source projects. Learning through practical experience with modern frameworks and tools.",
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

