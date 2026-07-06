import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

export type Project = {
  title: string;
  tag: string;
  desc: string;
  image: string;
  href?: string;
  github?: string;
  tone?: "red" | "blue" | "yellow" | "ink";
  tech?: string[];
};

const toneMap: Record<NonNullable<Project["tone"]>, string> = {
  red: "bg-primary text-primary-foreground",
  blue: "bg-secondary text-secondary-foreground",
  yellow: "bg-accent text-accent-foreground",
  ink: "bg-ink text-background",
};

export function ProjectCard({ project }: { project: Project }) {
  const tone = toneMap[project.tone ?? "ink"];
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = project.desc.length > 130;

  return (
    <div
      className={`group comic-border rounded-2xl overflow-hidden ${tone} hover:-translate-y-1 transition-transform flex flex-col md:flex-row h-auto md:min-h-[350px] cursor-default`}
    >
      <div className="relative w-full md:w-1/2 shrink-0 overflow-hidden border-b-[3px] md:border-b-0 md:border-r-[3px] border-ink bg-ink aspect-[16/10] md:aspect-auto">
        <img
          src={project.image}
          alt={project.title}
          width={1024}
          height={640}
          loading="lazy"
          className="w-full h-full object-contain object-center bg-black group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-center gap-4 flex-1 min-w-0">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-display text-2xl md:text-3xl">{project.title}</h3>
          <div className="flex gap-2.5 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="comic-border-sm rounded-full bg-background text-foreground hover:bg-accent hover:text-accent-foreground h-11 w-11 grid place-items-center transition-colors cursor-pointer"
                title="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.href && project.href !== "#" && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="comic-border-sm rounded-full bg-black text-white hover:bg-neutral-800 h-11 w-11 grid place-items-center transition-colors cursor-pointer"
                title="Live Project"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="font-body text-sm md:text-base opacity-90 max-w-xl leading-relaxed">
          {shouldTruncate && !isExpanded ? `${project.desc.substring(0, 115)}...` : project.desc}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 font-mono text-xs uppercase font-extrabold hover:text-sky-400 transition-colors focus:outline-none align-baseline cursor-pointer underline"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </p>
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="comic-border-sm rounded-full bg-background text-foreground px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

