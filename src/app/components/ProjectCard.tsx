import { useEffect, useRef, useState } from "react";
import { Star, GitFork, ArrowUpRight, Github, Globe } from "lucide-react";
import { CardAnimation } from "./animations/CardAnimations";
import type { Project } from "./data/projects";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const cardRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const open = () => onOpen(project);

  return (
    <article
      ref={cardRef}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${project.name}: open details`}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:shadow-[0_12px_40px_-12px_rgba(12,12,12,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
    >
      {/* Themed animation canvas */}
      <div className="relative h-40 w-full overflow-hidden border-b border-border bg-[color:var(--muted)]">
        <CardAnimation type={project.animation} active={active} color={project.color} />
        <span
          className="absolute left-3 top-3 inline-block h-2 w-2 rounded-full"
          style={{ backgroundColor: project.color }}
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-['Satoshi',sans-serif] tracking-tight">
            {project.logo ? (
              <img
                src={project.logo.src}
                alt={project.logo.alt}
                className="mt-1 h-5 w-auto max-w-36"
              />
            ) : (
              project.name
            )}
          </h3>
          <a
            href={project.linkUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={
              project.isPrivate
                ? `Visit the ${project.name} site`
                : `Open ${project.name} on GitHub`
            }
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {project.isPrivate ? <Globe className="size-4" /> : <Github className="size-4" />}
          </a>
        </div>

        <p className="flex-1 text-muted-foreground">{project.description}</p>

        {project.badge && (
          <span
            className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[color:var(--accent)] px-2.5 py-1 font-['Space_Mono',monospace] text-[color:var(--accent-foreground)]"
            style={{ fontSize: "11px" }}
          >
            {project.badge}
          </span>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-border px-2 py-0.5 font-['Space_Mono',monospace] text-muted-foreground"
              style={{ fontSize: "11px" }}
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-1 flex items-center justify-between border-t border-border pt-3 font-['Space_Mono',monospace] text-muted-foreground" style={{ fontSize: "12px" }}>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span
                className="inline-block size-2.5 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              {project.language}
            </span>
            {project.stars > 0 && (
              <span className="flex items-center gap-1">
                <Star className="size-3.5" /> {project.stars.toLocaleString()}
              </span>
            )}
            {project.forks > 0 && (
              <span className="flex items-center gap-1">
                <GitFork className="size-3.5" /> {project.forks}
              </span>
            )}
          </span>
          <span className="flex items-center gap-0.5 text-foreground transition-colors group-hover:text-[color:var(--accent-foreground)]">
            Details <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
