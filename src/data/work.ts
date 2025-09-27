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
    title: "Vibe Coder & Experimenter",
    company: "Personal Projects",
    region: "Remote",
    description:
      "Tinkering with full-stack applications and figuring things out as I go. Playing around with React, Svelte, Astro, and Nuxt while experimenting with Python frameworks like Flask and Django.",
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
    title: "Tech Playground Manager",
    company: "Self-Hosted Lab",
    region: "Home Lab",
    description:
      "Building my own little tech empire with Proxmox, TrueNAS, Tailscale, and Cloudflare. Breaking things and learning how they work through experimentation and trial and error.",
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
    title: "AI-Powered Experimenter",
    company: "Open Source",
    region: "GitHub",
    description:
      "Using AI tools like Cursor and Claude as my coding buddies to help me figure out what I'm doing. Contributing to open source projects and building random stuff that seems cool.",
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

