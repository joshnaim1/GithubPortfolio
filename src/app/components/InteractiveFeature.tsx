import { useState } from "react";
import confetti from "canvas-confetti";

// An original, interactive "playground" section: a typographic mark you can
// click to pop. No external/imported design frames; this is all yours.
export function InteractiveFeature() {
  const [pops, setPops] = useState(0);

  const pop = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 70,
      spread: 65,
      startVelocity: 30,
      origin: {
        x: (e.clientX - rect.left) / rect.width || 0.5,
        y: (e.clientY - rect.top) / rect.height || 0.5,
      },
      colors: ["#ffd600", "#0c0c0c", "#ffffff"],
    });
    setPops((p) => p + 1);
  };

  return (
    <section
      id="playground"
      className="bg-[color:var(--dark)] text-[color:var(--dark-foreground)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-['Space_Mono',monospace] uppercase tracking-[0.2em] text-[color:var(--dark-muted-foreground)]" style={{ fontSize: "12px" }}>
              Playground
            </p>
            <h2
              className="mt-2 font-['Satoshi',sans-serif] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700, lineHeight: 1.05 }}
            >
              Pop me
            </h2>
          </div>
          <p className="max-w-sm text-[color:var(--dark-muted-foreground)]">
            A little something interactive. Go on, give it a click.{" "}
            <span className="font-['Space_Mono',monospace] text-[color:var(--accent)]">
              {pops} pops
            </span>
          </p>
        </div>

        <button
          onClick={pop}
          aria-label="Pop"
          className="group block w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-16 transition-colors hover:border-[color:var(--accent)] md:py-24"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
            <span
              className="font-['Satoshi',sans-serif] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 12vw, 8rem)", fontWeight: 900, lineHeight: 0.9 }}
            >
              POP
            </span>
            <span
              className="inline-block rounded-full bg-[color:var(--accent)] transition-transform duration-300 group-hover:scale-110 group-active:scale-90"
              style={{
                width: "clamp(2.5rem, 11vw, 7rem)",
                height: "clamp(2.5rem, 11vw, 7rem)",
              }}
              aria-hidden
            />
            <span
              className="font-['Satoshi',sans-serif] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 12vw, 8rem)", fontWeight: 900, lineHeight: 0.9 }}
            >
              ME
            </span>
          </div>
          <p className="mt-8 text-center font-['Space_Mono',monospace] uppercase tracking-[0.25em] text-[color:var(--dark-muted-foreground)]" style={{ fontSize: "12px" }}>
            go on, click it
          </p>
        </button>
      </div>
    </section>
  );
}
