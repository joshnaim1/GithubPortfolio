import { ArrowUpRight } from "lucide-react";
import { projects } from "./data/projects";

const skills = [
  "Python",
  "Machine Learning",
  "AI / LLMs",
  "Data Science",
  "Prompt Engineering",
  "Robotics",
  "Simulations",
  "React",
  "TypeScript",
  "Next.js",
];

// Derived from the project list so the counts can't drift when one is added.
const hackathonCount = projects.filter((p) =>
  p.badge?.toLowerCase().includes("hackathon"),
).length;

const stats: { value: string; label: string; href?: string }[] = [
  { value: String(projects.length), label: "Featured projects" },
  { value: String(hackathonCount), label: "Hackathons shipped" },
  {
    value: "CWX",
    label: "AI/ML engineering intern",
    href: "https://www.cloudwerx.tech/",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-['Space_Mono',monospace] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontSize: "12px" }}>
            About
          </p>
          <h2
            className="mt-3 font-['Satoshi',sans-serif] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.1 }}
          >
            I build to solve real problems.
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            I&apos;m a Computer Engineering student at Cal Poly SLO who likes
            tinkering with AI, machine learning, robots, and simulations. My
            favorite projects start with a real need, like making documents
            accessible for students, turning stroke rehab into something you can
            actually measure, or teaching a robot arm to tidy up after itself,
            and grow from there. I also speak Mandarin and write about tech on
            the side.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-card px-3 py-1.5 font-['Space_Mono',monospace] text-muted-foreground"
                style={{ fontSize: "12px" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 border-l border-border pl-8">
          {stats.map((stat) => {
            const content = (
              <>
                <div
                  className="font-['Satoshi',sans-serif] tracking-tight transition-colors group-hover/stat:text-[color:var(--accent-foreground)]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 inline-flex items-center gap-1 font-['Space_Mono',monospace] uppercase tracking-[0.15em] text-muted-foreground" style={{ fontSize: "12px" }}>
                  {stat.label}
                  {stat.href && <ArrowUpRight className="size-3.5" />}
                </div>
              </>
            );
            return stat.href ? (
              <a
                key={stat.label}
                href={stat.href}
                target="_blank"
                rel="noreferrer"
                className="group/stat block transition-opacity hover:opacity-80"
              >
                {content}
              </a>
            ) : (
              <div key={stat.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
