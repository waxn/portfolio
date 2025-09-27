import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Independent Developer & Student",
    company: "Personal Projects",
    region: "Remote",
    description:
      "Building full-stack applications using modern web technologies. Developing projects with React, Svelte, Astro, and Nuxt while learning Python frameworks like Flask and Django.",
    technologies: [
      "React",
      "Svelte",
      "Astro",
      "Nuxt",
      "Flask",
      "Django",
      "Supabase",
      "Convex",
      "NPM",
    ],
  },
  {
    title: "Infrastructure Enthusiast",
    company: "Self-Hosted Lab",
    region: "Home Lab",
    description:
      "Managing personal infrastructure with Proxmox virtualization, TrueNAS storage, Tailscale networking, and Cloudflare for global CDN. Learning DevOps practices through hands-on experience.",
    technologies: [
      "Proxmox",
      "TrueNAS",
      "Tailscale",
      "Cloudflare",
      "Docker",
      "Linux",
      "Networking",
    ],
  },
  {
    title: "AI-Assisted Developer",
    company: "Open Source",
    region: "GitHub",
    description:
      "Leveraging AI tools like Cursor and Claude for rapid development and learning. Contributing to open source projects and building innovative solutions with modern development practices.",
    technologies: [
      "Cursor",
      "Claude",
      "GitHub",
      "Open Source",
      "AI Tools",
      "Modern Development",
    ],
  },
];

export type WorkItem = (typeof work)[number];

