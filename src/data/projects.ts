import type { Project } from "@/components/project-card";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";
import p4 from "@/assets/project-4.png";

export const projects: Project[] = [
  {
    title: "Ride Sharing App",
    tag: "Backend / TS",
    desc: "A free ride-sharing app for students of Shobhit University, Gangoh. Students with bikes offer rides to/from campus, and other students request to join. No payments — just students helping students.",
    image: p1,
    tone: "yellow",
    href: "https://ride-sharing-sug.vercel.app/",
    github: "https://github.com/Nikunjsaini07/ride-",
    tech: ["Typescript", "MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Eventyy",
    tag: "Full Stack",
    desc: "Eventyy is a comprehensive, full-stack event management platform tailored for universities. It enables seamless coordination of fests, competitions, and visits. With dedicated roles for Admins, Coordinators, and Students, the platform handles everything from secure OTP registrations to complex bracket and match progression for competitive events.",
    image: p2,
    tone: "yellow",
    github: "https://github.com/Nikunjsaini07/Eventyy",
    tech: ["React", "TanStack Query", "TailwindCSS", "Python", "FastAPI"],
  },
  {
    title: "Go Pizza Tracker",
    tag: "CRUD application ",
    desc: "Built a Pizza Tracker to learn Go and backend development fundamentals. Developed REST APIs using Gin, managed data with GORM and SQLite, and implemented Server-Sent Events (SSE) for live order status updates. The project helped me understand Go's concurrency model, API design, and real-time communication.",
    image: p3,
    tone: "yellow",
    github: "https://github.com/Nikunjsaini07/Pizza_Tracker",
    tech: ["Go", "Gin", "GORM", "SQLite", "Server-Sent Events"],
  },
  {
    title: "redis-clone in go ",
    tag: "OSS",
    desc: "A lightweight, concurrent, in-memory key-value store built from scratch in Go. This project implements a subset of standard Redis commands and includes a custom parser for the RESP (REdis Serialization Protocol), allowing it to work natively with the standard redis-cli.",
    image: p4,
    tone: "yellow",
    github: "https://github.com/Nikunjsaini07/redis-clone",
    tech: ["Go", "TCP"],
  },
];
