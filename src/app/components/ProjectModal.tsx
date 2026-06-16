import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Github, ArrowUpRight, Globe, Check } from "lucide-react";
import { CardAnimation } from "./animations/CardAnimations";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Project } from "./data/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 md:items-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-[color:var(--dark)]/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-border bg-card md:rounded-2xl"
            initial={{ y: 40, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>

            {/* Animated header */}
            <div className="relative h-44 w-full overflow-hidden border-b border-border bg-[color:var(--muted)]">
              <CardAnimation type={project.animation} active color={project.color} />
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {project.badge && (
                <span
                  className="inline-flex w-fit items-center rounded-full bg-[color:var(--accent)] px-2.5 py-1 font-['Space_Mono',monospace] text-[color:var(--accent-foreground)]"
                  style={{ fontSize: "11px" }}
                >
                  {project.badge}
                </span>
              )}
              <h3
                className="mt-3 font-['Satoshi',sans-serif] tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1 }}
              >
                {project.name}
              </h3>

              <p className="mt-4 text-muted-foreground">{project.longDescription}</p>

              {project.images && project.images.length > 0 && (
                <>
                  <h4 className="mt-7 font-['Space_Mono',monospace] uppercase tracking-[0.18em] text-muted-foreground" style={{ fontSize: "12px" }}>
                    In action
                  </h4>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {project.images.map((img) => (
                      <div
                        key={img.alt}
                        className="overflow-hidden rounded-lg border border-border bg-[color:var(--muted)]"
                      >
                        <ImageWithFallback
                          src={img.src}
                          alt={img.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h4 className="mt-7 font-['Space_Mono',monospace] uppercase tracking-[0.18em] text-muted-foreground" style={{ fontSize: "12px" }}>
                Highlights
              </h4>
              <ul className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-foreground">
                    <Check
                      className="mt-0.5 size-4 shrink-0"
                      style={{ color: project.color }}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-7 font-['Space_Mono',monospace] uppercase tracking-[0.18em] text-muted-foreground" style={{ fontSize: "12px" }}>
                Built with
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1 font-['Space_Mono',monospace] text-muted-foreground"
                    style={{ fontSize: "12px" }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-['Space_Mono',monospace] text-[color:var(--background)] transition-transform hover:scale-105"
                  style={{ fontSize: "13px" }}
                >
                  {project.isPrivate ? (
                    <>
                      <Globe className="size-4" /> Visit spontus.io
                    </>
                  ) : (
                    <>
                      <Github className="size-4" /> View on GitHub
                    </>
                  )}
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 font-['Space_Mono',monospace] transition-colors hover:border-foreground"
                    style={{ fontSize: "13px" }}
                  >
                    Live demo <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
