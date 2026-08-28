import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";

const RESUME_URL = "/Joshua_Naim_Resume.pdf";

export function Hero() {
  const scrollToWork = () =>
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <p className="font-['Space_Mono',monospace] uppercase tracking-[0.25em] text-muted-foreground" style={{ fontSize: "13px" }}>
          AI Engineer @ Actual Agentic Solutions · Computer Engineering @ Cal Poly SLO
        </p>

        <h1
          className="mt-6 max-w-4xl font-['Satoshi',sans-serif] tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 9vw, 6.5rem)", fontWeight: 900, lineHeight: 0.95 }}
        >
          I build tools that
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">help</span>
            {/* Highlighter bar. Sized in em so it tracks the fluid headline
                instead of drifting into a strikethrough at large sizes. */}
            <span
              className="absolute z-0 rounded-[0.03em]"
              style={{
                backgroundColor: "var(--accent)",
                left: "-0.04em",
                right: "-0.04em",
                bottom: "0.06em",
                height: "0.28em",
              }}
              aria-hidden
            />
          </span>{" "}
          real people.
        </h1>

        <div className="mt-10 flex max-w-2xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="text-muted-foreground" style={{ maxWidth: "34rem" }}>
            I build AI agent systems. Currently contracted to Google Cloud
            through Actual Agentic Solutions, and studying Computer Engineering
            at Cal Poly SLO.
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
