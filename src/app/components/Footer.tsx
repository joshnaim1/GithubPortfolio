import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com/joshnaim1", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/joshua-naim/", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[color:var(--dark)] text-[color:var(--dark-foreground)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-['Space_Mono',monospace] uppercase tracking-[0.2em] text-[color:var(--dark-muted-foreground)]" style={{ fontSize: "12px" }}>
          Get in touch
        </p>
        <a
          href="mailto:josh05naim@gmail.com"
          className="mt-4 inline-flex items-center gap-3 break-all font-['Satoshi',sans-serif] tracking-tight transition-colors hover:text-[color:var(--accent)]"
          style={{ fontSize: "clamp(1.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1 }}
        >
          <Mail className="size-[0.7em] shrink-0" /> josh05naim@gmail.com
        </a>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-['Space_Mono',monospace] text-[color:var(--dark-muted-foreground)]" style={{ fontSize: "12px" }}>
            © {new Date().getFullYear()} · Built with React, Canvas, and too much coffee.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-white/20 p-2.5 transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
