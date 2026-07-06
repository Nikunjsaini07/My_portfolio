import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/spidey-hero.png";
import webImg from "@/assets/web.png";
import {
  ArrowUpRight,
  ExternalLink,
  FileText,
  Code2,
  Camera,
  Zap,
  Coffee,
  GraduationCap,
  Trophy,
  Wrench,
  Mail,
  MapPin,
  Phone,
  Award,
  Github,
  Linkedin,
  Twitter,
  Code,
  X,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: Home,
});

const stats = [
  { n: "1.5+", l: "years shipping" },
  { n: "4+", l: "projects launched" },
  { n: "1670+", l: "leetcode rating" },
  { n: "∞", l: "cups of chai" },
];

const codingProfiles = [
  {
    name: "LeetCode",
    handle: "@Nikunj_Saini07",
    stat: "Rating: 1670+ · 420+ Solved",
    href: "https://leetcode.com/u/Nikunj_Saini07",
    points: [
      "Top 19% globally.",
      "Secured Global Rank 793 among 35K participants in Weekly Contest 464.",
      "Consistently practicing DSA and problem solving.",
    ],
  },
  {
    name: "Codeforces",
    handle: "@nikunj_saini7",
    stat: "Max Rating: 1112",
    href: "https://codeforces.com/profile/nikunj_saini7",
    points: [
      "Solved 100+ algorithmic problems under competitive constraints.",
    ],
  },
  {
    name: "Kaggle",
    handle: "@nikunjsaini7",
    stat: "Contributor",
    href: "https://www.kaggle.com/nikunjsaini7",
    points: [
      "Building and sharing machine learning datasets and notebooks.",
    ],
  },
];

const skills = {
  Languages: ["TypeScript","Go" , "JavaScript", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind"],
  Backend: ["Node.js", "Postgres", "MongoDB", "Redis", "REST"],
  MachineLearning: [ "Scikit-learn", "Pandas",  "NumPy","Matplotlib"
  ],
  Tools: ["Git", "Docker","Codex" , "Claude", "Vercel"],
};

const achievements = [
  "DSA — Solved 550+ problems across Leetcode, GeeksforGeeks, and Codeforces. Achieved a Leetcode rating of 1670+",
  "Runner up — Technozoom Hackathon (Inter College)",
  "Secured Global Rank 793 among  35K  of participants in LeetCode Weekly Contest 464.",
];

function Home() {
  const [thwips, setThwips] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleHeroClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newThwip = {
      id: Date.now(),
      x,
      y,
    };
    setThwips((prev) => [...prev, newThwip]);

    setTimeout(() => {
      setThwips((prev) => prev.filter((t) => t.id !== newThwip.id));
    }, 800);
  };

  return (
    <SiteLayout>
      {/* SECTION 1: HOME */}
      <div id="home">
        {/* HERO */}
        <section className="grid lg:grid-cols-12 gap-0 border-b-[3px] border-ink">
          <div
            onClick={handleHeroClick}
            className="lg:col-span-7 p-8 md:p-12 relative overflow-hidden bg-secondary cursor-crosshair select-none flex flex-col justify-center min-h-[450px] sm:min-h-[500px]"
          >
            <img
              src={webImg}
              alt=""
              aria-hidden
              className="absolute -bottom-24 -right-24 w-[380px] opacity-15 pointer-events-none invert"
            />
            <div className="relative animate-float-in pointer-events-none">
              <span className="inline-block font-mono text-[12px] sm:text-xs uppercase tracking-[0.3em] bg-ink text-black px-3 py-1 rounded-full">
                ⚡ Open to opportunities · IN
              </span>
              <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl leading-[0.95] tracking-tight">
                Friendly
                <br />
                <span className="text-primary">neighborhood</span>
                <br />
                developer.
              </h1>
              <p className="mt-6 max-w-lg font-body text-base sm:text-lg text-secondary-foreground/90 leading-relaxed">
                I build full-stack web applications with Go, React, and TypeScript while exploring machine learning. Focused on performance, simplicity, and continuous learning.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3 pointer-events-auto w-full">
                <a
                  href="#projects"
                  className="comic-border rounded-full bg-primary text-primary-foreground px-4 py-2.5 sm:px-6 sm:py-3 font-mono text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform flex-1 sm:flex-none text-center"
                >
                  See the work <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="comic-border rounded-full bg-accent text-accent-foreground px-4 py-2.5 sm:px-6 sm:py-3 font-mono text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform flex-1 sm:flex-none text-center"
                >
                  <FileText className="h-4 w-4" /> Resume
                </a>
                <a
                  href="#connect"
                  className="comic-border rounded-full bg-background text-foreground px-4 py-2.5 sm:px-6 sm:py-3 font-mono text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest inline-flex items-center justify-center hover:-translate-y-0.5 transition-transform w-full sm:w-auto text-center"
                >
                  Say hello
                </a>
              </div>
            </div>

            {/* Click to Thwip Spawns */}
            {thwips.map((t) => (
              <div
                key={t.id}
                style={{ left: t.x, top: t.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 comic-border rounded-xl bg-primary text-primary-foreground px-3 py-1.5 font-display text-xs rotate-[-6deg] animate-glitch z-30 pointer-events-none select-none shadow-brutal-sm"
              >
                THWIP!
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 relative border-l-0 lg:border-l-[3px] border-t-[3px] lg:border-t-0 border-ink bg-ink">
            <img
              src={heroImg}
              alt="Comic style hero illustration"
              width={1024}
              height={1024}
              className="w-full h-full object-cover aspect-square lg:aspect-auto opacity-95 filter  contrast-125 brightness-75 hover:grayscale-125 transition-all duration-700"
            />
            <div className="absolute top-6 right-6 comic-border rounded-2xl bg-accent text-accent-foreground px-4 py-2 font-display text-sm rotate-[3deg]">
              THWIP!
            </div>
          </div>
        </section>

        {/* stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 border-b-[3px] border-ink">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`p-5 md:p-8 text-center ${
                /* right border: always on col 0 (mobile col 1 of 2), on desktop cols 0,1,2 */
                (i % 2 === 0 && i < stats.length - 1) || (i < stats.length - 1 && i % 2 !== 0 && window?.innerWidth >= 768)
                  ? ""
                  : ""
              } ${
                i % 2 === 0 ? "border-r-[3px] border-ink" : ""
              } ${
                i < 2 ? "border-b-[3px] border-ink md:border-b-0" : ""
              } ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : i === 1
                    ? "bg-background text-foreground"
                    : i === 2
                      ? "bg-accent text-accent-foreground"
                      : "bg-background text-foreground"
              }`}
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl">{s.n}</div>
              <div className="mt-1 font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-80">
                {s.l}
              </div>
            </div>
          ))}
        </section>

        {/* stack marquee */}
        <section className="border-b-[3px] border-ink bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1.5px,transparent_1.5px)] [background-size:8px_8px] pointer-events-none" />
          <div className="flex w-max py-4 font-display text-xs md:text-sm uppercase tracking-[0.25em] whitespace-nowrap relative z-10 animate-marquee">
            <div className="flex items-center gap-8 px-4">
              {Array(4)
                .fill(["Go", "Python", "TypeScript", "React", "Postgres", "Docker", "GitHub", "Git", "VS Code", "Vercel", "Cloudflare Workers"])
                .flat()
                .map((item, i) => (
                  <span key={`1-${i}`} className="inline-flex items-center gap-8">
                    <span>{item}</span>
                    <span className="text-accent select-none">★</span>
                  </span>
                ))}
            </div>
            <div className="flex items-center gap-8 px-4" aria-hidden="true">
              {Array(4)
                .fill(["Go", "Python", "TypeScript", "React", "Postgres", "Docker", "GitHub", "Git", "VS Code", "Vercel", "Cloudflare Workers"])
                .flat()
                .map((item, i) => (
                  <span key={`2-${i}`} className="inline-flex items-center gap-8">
                    <span>{item}</span>
                    <span className="text-accent select-none">★</span>
                  </span>
                ))}
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 2: PROJECTS */}
      <div id="projects" className="border-b-[3px] border-ink">
        <section className="p-8 md:p-12 border-b-[3px] border-ink bg-secondary text-secondary-foreground">
          <span className="font-mono text-xs uppercase tracking-[0.3em] opacity-80">
             // MISSION LOG
          </span>
          <h3 className="mt-2 font-display text-5xl md:text-7xl leading-[0.95]">
           PROJECTS.
          </h3>
          <p className="mt-6 max-w-xl font-body text-lg opacity-90 ">
            A collection of projects, experiments, and software built along the way.
          </p>
        </section>

        <section className="p-8 md:p-12">
          <div className="flex flex-col gap-6 max-w-6xl mx-auto w-full">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>
      </div>

      {/* SECTION 3: ABOUT */}
      <div id="about" className="border-b-[3px] border-ink">
        {/* Bio and Intro Section */}
        <section className="grid lg:grid-cols-12 border-b-[3px] border-ink">
          <div className="lg:col-span-5 p-8 md:p-12 bg-primary text-primary-foreground relative overflow-hidden flex flex-col justify-between min-h-[350px]">
            <img
              src={webImg}
              alt=""
              aria-hidden
              className="absolute -bottom-24 -right-24 w-[420px] opacity-20 invert pointer-events-none"
            />
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                // origin story
              </span>
              <h2 className="mt-2 font-display text-2xl md:text-3xl leading-[0.95]">
                The Person Behind the Code.
              </h2>
              <div className="mt-6 space-y-4 font-body text-base max-w-md">
                <p >
                  I'm Nikunj, a Computer Science student passionate about building modern web
                  applications and solving real-world problems. I work with Go, React, and
                  TypeScript while exploring machine learning and scalable backend systems.
                </p>
                <p>
                  Backed by a strong foundation in Data Structures & Algorithms, I enjoy
                  connecting ideas into reliable software—one thread at a time. Every project
                  is another chance to learn, improve, and leave the web a little better than
                  I found it.
                </p>
              </div>
            </div>

            <div className="mt-8 relative z-10 border-t-[3px] border-primary-foreground/30 pt-6 space-y-2 font-mono text-xs text-primary-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Saharanpur, IN</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:peter@bugle.dev"
                  className="hover:underline hover:text-accent transition-colors"
                >
                  nikunj902782@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+919876543210"
                  className="hover:underline hover:text-accent transition-colors"
                >
                  +91 9675963426
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 md:p-12 bg-background flex items-center">
            <div className="grid sm:grid-cols-2 gap-6 w-full">
              {[
                {
                  i: Code2,
                  t: "Engineer",
                  d: "Building fast, scalable applications with Go, React, TypeScript, and modern backend technologies",
                },
                {
                  i: Code,
                  t: "PROBLEM SOLVER",
                  d: "Strong foundation in Data Structures & Algorithms. Solving problems before they become bugs.",
                },
                {
                  i: Zap,
                  t: "ALWAYS SWINGING",
                  d: "Learning machine learning, backend systems, and new technologies—one project at a time.",
                },
                {
                  i: Coffee,
                  t: "Human",
                  d: "Runs on filter coffee, kindness, and being a cinephile.",
                },
              ].map(({ i: Icon, t, d }) => (
                <div
                  key={t}
                  className="comic-border-sm rounded-2xl p-5 bg-card text-card-foreground"
                >
                  <div className="h-11 w-11 comic-border-sm rounded-xl bg-accent text-accent-foreground grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl">{t}</h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Achievements Section */}
        <section className="grid lg:grid-cols-12 border-b-[3px] border-ink">
          {/* Experience Column */}
          <div className="lg:col-span-6 p-6 md:p-12 border-b-[3px] border-ink lg:border-b-0 lg:border-r-[3px]">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                
              </span>
            </div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Academics.</h2>
            <div className="mt-8">
              <div className="comic-border rounded-2xl p-6 bg-card text-card-foreground">
                <span className="font-mono text-xs uppercase tracking-widest text-sky-400 font-bold">
                  2022 — 2026
                </span>
                <h3 className="mt-2 font-display text-xl leading-tight">
                  B.Tech, Computer Science
                </h3>
                <p className="mt-1">
                  CGPA: 8.31 / 10 
                </p>
                <p className="mt-1">
                  Coursework : DSA, OS, DBMS, Computer Networks, Distributed
                  Systems.
                </p>
                <p className="mt-1" >
                  JEE Mains 2022 qualified
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Column */}
          <div className="lg:col-span-6 p-6 md:p-12 bg-card text-card-foreground">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                
              </span>
            </div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Achievements.</h2>

            <ul className="mt-8 space-y-3 font-body text-sm">
              {achievements.map((a) => (
                <li
                  key={a}
                  className="comic-border-sm rounded-xl p-4 bg-background text-foreground flex items-start gap-2"
                >
                  <span className="text-primary font-mono select-none">★</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        
        <section className="grid lg:grid-cols-12 border-b-[3px] border-ink bg-background">
          {/* Practice Column */}
          <div className="lg:col-span-6 p-6 md:p-12 border-b-[3px] border-ink lg:border-b-0 lg:border-r-[3px]">
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl md:text-3xl leading-tight">
              Practice makes web-perfect.
            </h2>

            <div className="mt-8 space-y-4.5">
              {codingProfiles.map((p) => (
                <div
                  key={p.name}
                  className="comic-border-sm rounded-xl p-5 bg-card text-card-foreground"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-xl leading-tight">{p.name}</h3>
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                          className="comic-border-sm rounded-full bg-black text-white hover:bg-neutral-800 h-7 w-7 grid place-items-center transition-colors cursor-pointer shrink-0"
                          title={`${p.name} Profile`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                      <div className="font-mono text-xs text-primary mt-1">
                        {p.handle}
                      </div>
                    </div>
                    <div>
                      <span className="comic-border-sm rounded-full bg-background text-foreground px-3 py-1 sm:py-1.5 font-mono text-[10px] sm:text-xs font-bold tracking-wide inline-block">
                        {p.stat}
                      </span>
                    </div>
                  </div>
                  {p.points && p.points.length > 0 && (
                    <ul className="mt-4 list-disc pl-5 space-y-1.5 font-body text-sm text-card-foreground/90">
                      {p.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div className="lg:col-span-6 p-6 md:p-12 bg-secondary text-secondary-foreground">
            <div className="flex items-center gap-3">
              <Wrench className="h-6 w-6 text-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.3em]">
                
              </span>
            </div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Skills</h2>

            <div className="mt-8 space-y-6">
              {Object.entries(skills).map(([k, v]) => (
                <div key={k} className="border-b border-ink/20 pb-4 last:border-0 last:pb-0">
                  <div className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
                    {k}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {v.map((s) => (
                      <span
                        key={s}
                        className="comic-border-sm rounded-full bg-background text-foreground px-3 py-1 font-mono text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 4: CONNECT */}
      <div id="connect">
        <section className="p-8 md:p-16 bg-primary text-primary-foreground relative overflow-hidden">
          <img src={webImg} alt="" aria-hidden className="absolute -top-24 -right-24 w-[420px] opacity-20 invert" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1.5px,transparent_1.5px)] [background-size:8px_8px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex flex-col items-start">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                // signal me
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl leading-[0.95]">
                Got a project?
                <br />
                <span className="text-accent">Web me up.</span>
              </h2>
              <p className="mt-5 font-body text-lg max-w-xl">
                Open to internships, freelance work, collaborations, and exciting ideas.
              </p>

              <a
                href="mailto:nikunj902782@gmail.com"
                className="mt-8 inline-flex items-center gap-3 comic-border rounded-full bg-ink text-background px-5 py-3 sm:px-6 sm:py-4 font-mono text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors max-w-full break-all"
              >
                <Mail className="h-4 w-4 shrink-0" /> nikunj902782@gmail.com
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { i: Github, l: "GitHub", href: "https://github.com/Nikunjsaini07" },
                { i: Linkedin, l: "LinkedIn", href: "https://www.linkedin.com/in/nikunjsaini2004/" },
                { i: X, l: "Twitter", href: "https://x.com/useriscooking" },
              ].map(({ i: Icon, l, href }) => (
                <a
                  key={l}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={l}
                  className="comic-border-sm rounded-full bg-background text-foreground h-12 w-12 grid place-items-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
