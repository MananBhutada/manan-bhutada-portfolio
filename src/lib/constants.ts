import type { PersonalInfo, Project, SkillCategory } from "@/types";

export interface PortfolioWorld {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  kind: "projects" | "hackathons" | "research" | "library" | "technology";
}

export interface Hackathon {
  title: string;
}

export interface ResearchPaper {
  label: string;
}

export interface Book {
  title: string;
}

export const personalInfo: PersonalInfo = {
  name: "Manan Bhutada",
  title: "Into A Universe of Systems, Technology and AI",
  subtitle: "No artist tolerates reality. So more than a portfolio this is a unvierse that tells my story",
  bio: "A portfolio built as a universe: projects, competitions, research, technology, and the books that have shaped the archive. Explore the worlds rather than scrolling through a conventional résumé.",
  email: "",
  location: "I'm into building systems that shouldn't exist yet.",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/MananBhutada",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manan-bhutada-3a267b292",
      icon: "linkedin",
    },
  ],
  stats: [
    { label: "Flagship system", value: "S.A.A.S." },
    { label: "Projets live", value: "03(may vary)" },
    { label: "Competition wins", value: "02+" },
    { label: "Worlds to explore", value: "05" },
  ],
};

export const worlds: PortfolioWorld[] = [
  {
    id: "projects",
    name: "Projects",
    eyebrow: "01 — BUILD",
    description: "Systems I have actually built. Start here for the engineering work.",
    kind: "projects",
  },
  {
    id: "hackathons",
    name: "Hackathon Wins",
    eyebrow: "02 — MISSIONS",
    description: "An archive of competitions and the work behind them.",
    kind: "hackathons",
  },
  {
    id: "research",
    name: "Research",
    eyebrow: "03 — INQUIRY",
    description: "Research papers and technical investigations.",
    kind: "research",
  },
  {
    id: "library",
    name: "Library",
    eyebrow: "04 — ARCHIVE",
    description: "Books I have actually read. No recommendation list disguised as a reading history.",
    kind: "library",
  },
  {
    id: "technology",
    name: "Technology",
    eyebrow: "05 — INSTRUMENTS",
    description: "The tools and technologies that appear in the work.",
    kind: "technology",
  },
];

export const projects: Project[] = [
  {
    id: "saas",
    title: "PROJECT S.A.A.S.",
    description:
      "Smart Atmospheric Analysis & Suppression — an LLM-orchestrated multi-agent predictive governance and automated mitigation system for hyper-local air pollution. The system follows Prediction → Governance / Reasoning → Coordination → Authorization / Human-in-the-loop → Physical Action → Verification.",
    technologies: ["Python", "LLM", "Multi-Agent Systems", "FastAPI","transformers","Edge AI"],
    image: "",
    githubUrl: "https://github.com/MananBhutada/S.A.A.S-v-3.10-bug-fixed-",
    featured: true,
  },
  {
    id: "nagar-register",
    title: "Nagar Register",
    description: "Project entry. Detailed project information should be added from the verified project material.",
    technologies: ["OpenCV", "Python", "FastAPI", "Redis","Bull Mq", "transformers"],
    image: "",
    featured: true,
  },
  {    id: "seizure-coma-watch",
    title: "Seizure Coma Watch",
    description: "A patient monitoring system that detects seizure-like movements and coma-related movements, analyzes EEG data for seizure detection, and sends alerts to doctors and family members when abnormal activity is detected.",
    technologies: ["Python", "Machine Learning", "OpenCV", "Computer Vision", "FastAPI", "NumPy", "Scikit-learn"],
    image: "",
    featured: true,
  },
  {
        id: "lithocarbon-simulator",
    title: "LithoCarbon Simulator",
    description: "A hybrid physics-informed framework for accelerating CO₂ mineralization in spodumene tailings by combining the Shrinking Core Model with a Physics-Informed Neural Network. The system incorporates reaction kinetics and physical constraints to model CO₂ mineralization across thousands of simulated reaction cycles.",
    technologies: ["Python", "PyTorch", "DeepXDE", "NumPy", "SciPy", "GEE"],
    image: "",
    featured: true,
  },
];

export const hackathons: Hackathon[] = [
  { title: "IIT Delhi Claw & Shield Hackathon" },
  { title: "VNIT AI Ideathon" },
  { title: "India Innovates 2026 / Bharat Mandapam" },
];

export const researchPapers: ResearchPaper[] = [
  { label: "Research Paper 01 — TFT-Based Spatio-Temporal Pollution and DustPrediction and Mitigation for PM10 and PM2.5." },
  { label: "Research Paper 02 — A Smart Mechanism for Accelerating CO2 Mineralization in Spodumene Tailings Through Hybrid Shrinking Core Model and Physics-Informed Neural Network Framework" },
];

export const books: Book[] = [
  { title: "Notes from Underground" },
  { title: "As a Man Thinketh" },
  { title: "The Dark Triad of Psychology" },
  { title: "Chip War" },
  { title: "The Master and Margarita" },
  { title: "Crime and Punishment" },
  { title: "White Nights" },
  { title: "No Longer Human" },
  { title: "Material World:The six raw materials that shape the world" },
  { title: "The India Way" },
  { title: "The Subtle Art of Not Giving a F*ck" },
  { title: "Bhagavad Gita" },
];

export const technologies = [
  "Python",
  "LLM orchestration",
  "Agentic AI",
  "PyTorch",
  "scikit-learn",
  "OpenCV",
  "FastAPI",
  "Redis",
  "Bull Mq",
  "Github Actions",
  "React / Next.js",
  "Pydantic",
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Core",
    skills: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "C/C++" },
    ],
  },
  {
    name: "AI / ML",
    skills: [
      { name: "PyTorch" },
      { name: "scikit-learn" },
      { name: "Transformers" },
    ],
  },
  {
    name: "Systems & Web",
    skills: [
      { name: "FastAPI" },
      { name: "Redis" },
      { name: "React / Next.js" },
      { name: "Three.js" },
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Universe", href: "#universe" },
  { label: "Contact", href: "#contact" },
];
