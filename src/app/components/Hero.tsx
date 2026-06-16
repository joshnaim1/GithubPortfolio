import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";

// Once you have a hosted resume, set this URL (or import a bundled PDF) and the
// Résumé button will appear automatically.
const RESUME_URL = "";

export function Hero() {
  const scrollToWork = () =>
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <p className="font-['Space_Mono',monospace] uppercase tracking-[0.25em] text-muted-foreground" style={{ fontSize: "13px" }}>
          AI/ML Intern @ CWX · Computer Engineering @ Cal Poly SLO
        </p>

        <h1
          className="mt-6 max-w-4xl font-['Satoshi',sans-serif] tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 9vw, 6.5rem)", fontWeight: 900, lineHeight: 0.95 }}
        >
          I build tools that
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">help</span>
            <span
              className="absolute inset-x-0 bottom-1 z-0 h-4 md:h-6"
              style={{ backgroundColor: "var(--accent)" }}
              aria-hidden
            />
          </span>{" "}
          real people.
        </h1>

        <div className="mt-10 flex max-w-2xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="text-muted-foreground" style={{ maxWidth: "34rem" }}>
            Computer Engineering student at Cal Poly SLO and an AI/ML
            engineering intern at CWX. I like machine learning, simulations, and
            products people actually use. A lot of what&apos;s here started at a
            hackathon and kept going.
          </p>

          <div className="flex items-center gap-4">
            {RESUME_URL && (
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 font-['Space_Mono',monospace] uppercase tracking-[0.12em] text-[color:var(--background)] transition-transform hover:scale-105"
                style={{ fontSize: "12px" }}
              >
                <FileText className="size-4" /> Résumé
              </a>
            )}
            {[
              { Icon: Github, href: "https://github.com/joshnaim1", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/joshua-naim/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:josh05naim@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-[color:var(--background)]"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToWork}
          className="mt-16 flex items-center gap-2 font-['Space_Mono',monospace] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          style={{ fontSize: "12px" }}
        >
          <ArrowDown className="size-4 animate-bounce" /> Scroll to explore
        </button>
      </div>
    </section>
  );
}
