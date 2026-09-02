import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Scroll reveal.
 *
 * Deliberately CSS-driven rather than JS-animated. A JS animation that gets
 * interrupted (throttled frames in a background tab, for instance) can leave
 * stale inline styles behind and strand content at opacity 0. Here the hidden
 * state lives behind `html.reveal-ready`, which is only added once this
 * component has mounted and confirmed IntersectionObserver support, and a
 * backstop timer reveals anything the observer never reported. Worst case the
 * content is simply visible with no animation.
 */

const REVEAL_BACKSTOP_MS = 2000;

function markReady() {
  if (typeof window === "undefined") return false;
  const supported = "IntersectionObserver" in window;
  if (supported) document.documentElement.classList.add("reveal-ready");
  return supported;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.setAttribute("data-revealed", "true");

    if (!markReady()) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);

    // Backstop: never let anything stay hidden.
    const timer = window.setTimeout(reveal, REVEAL_BACKSTOP_MS + delay * 1000);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [delay]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-y": `${y}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
