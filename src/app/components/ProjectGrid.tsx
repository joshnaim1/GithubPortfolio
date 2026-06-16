import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects, type Project } from "./data/projects";

export function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-['Space_Mono',monospace] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontSize: "12px" }}>
            Selected Work
          </p>
          <h2 className="mt-2 font-['Satoshi',sans-serif] tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700, lineHeight: 1.05 }}>
            Things I&apos;ve built
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Each card&apos;s animation reflects what the project does. Hover to play
          with it, or click a card for the full story.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
