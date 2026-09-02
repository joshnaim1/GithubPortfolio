import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

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

/**
 * Employment history, grouped by employer and most recent first.
 *
 * `org` is the employer, and it is the only thing rendered as the company.
 * The Actual Agentic Solutions engagement names its client inside the role
 * line and the description only: no logo, no link, no image, no alt text, no
 * title attribute, no hover state. Actual Agentic Solutions is the employer.
 */
const experience: {
  org: string;
  href?: string;
  roles: {
    role: string;
    dates: string;
    location: string;
    description: string;
  }[];
}[] = [
  {
    org: "Actual Agentic Solutions (contracted to Google Cloud)",
    roles: [
      {
        role: "AI Engineer",
        dates: "Aug 2026 - present",
        location: "Remote",
        description:
          "Auditing and consolidating open and closed source repositories across Google's Agent Development Kit, Agent Garden, and agent skills ecosystem to build an ownership and dependency map for Google DevRel.",
      },
    ],
  },
  {
    org: "CloudWerx (Google Cloud Partner)",
    href: "https://www.cloudwerx.tech/",
    roles: [
      {
        role: "AI/ML Engineering Intern",
        dates: "June 2026 - Aug 2026",
        location: "Santa Clara, CA",
        description:
          "Built an internal PMO tool on Claude Code skills and agents over a deterministic Python engine, generating kickoff decks and budget trackers from a SOW or WBS. Client work was for enterprise clients in regulated industries.",
      },
      {
        role: "AI/ML Engineering Intern",
        dates: "Oct 2025 - Dec 2025",
        location: "Santa Clara, CA",
        description:
          "Built a multi-agent document intelligence system on Google ADK, Gemini 2.5 Flash, and Vertex AI using an orchestrator-planner-executor pattern, reaching 96% accuracy on the DocVQA and InfographicVQA benchmarks. Deployed a hybrid Document AI and DeepSeek fallback OCR pipeline to Cloud Run via Terraform, covering 100+ document types at $0.002 per document with a 100% pipeline success rate, and benchmarked the REST inference endpoints at 3.1s / $0.01 per query against 5.9s / $0.02.",
      },
    ],
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
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
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col gap-10 border-l border-border pl-8">
          <p className="font-['Space_Mono',monospace] uppercase tracking-[0.2em] text-muted-foreground" style={{ fontSize: "12px" }}>
            Experience
          </p>

          {experience.map((company) => {
            const orgLine = (
              <div className="inline-flex items-start gap-1">
                <span
                  className="font-['Satoshi',sans-serif] tracking-tight"
                  style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.25 }}
                >
                  {company.org}
                </span>
                {company.href && (
                  <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-muted-foreground" />
                )}
              </div>
            );

            return (
              <div key={company.org}>
                {company.href ? (
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity hover:opacity-80"
                  >
                    {orgLine}
                  </a>
                ) : (
                  orgLine
                )}

                <div className="mt-4 flex flex-col gap-6">
                  {company.roles.map((job) => (
                    <div key={job.dates}>
                      <div className="text-foreground">{job.role}</div>
                      <div
                        className="mt-1 font-['Space_Mono',monospace] uppercase tracking-[0.15em] text-muted-foreground"
                        style={{ fontSize: "12px" }}
                      >
                        {job.dates} · {job.location}
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        {job.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
