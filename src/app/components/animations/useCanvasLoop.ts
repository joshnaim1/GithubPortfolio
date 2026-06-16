import { useEffect, useRef } from "react";

export function usePrefersReducedMotion(): boolean {
  const ref = useRef(false);
  if (typeof window !== "undefined" && window.matchMedia) {
    ref.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return ref.current;
}

export interface Pointer {
  /** Normalized 0..1 across the canvas */
  x: number;
  y: number;
  /** Whether the cursor is currently over the canvas */
  inside: boolean;
}

type DrawFn = (
  ctx: CanvasRenderingContext2D,
  t: number,
  width: number,
  height: number,
  pointer: Pointer,
) => void;

/**
 * Runs a requestAnimationFrame draw loop on a canvas, handling DPR scaling,
 * resize, pointer tracking, and cleanup. When `active` is false (offscreen)
 * the loop pauses. When reduced motion is requested, it renders one static
 * frame. The draw callback receives a normalized pointer it can react to.
 */
export function useCanvasLoop(
  draw: DrawFn,
  active: boolean,
): React.RefObject<HTMLCanvasElement | null> {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const drawRef = useRef(draw);
  drawRef.current = draw;
  const pointerRef = useRef<Pointer>({ x: 0.5, y: 0.5, inside: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)),
        y: Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height)),
        inside: true,
      };
    };
    const onLeave = () => {
      pointerRef.current = { ...pointerRef.current, inside: false };
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const cleanup = () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };

    if (reducedMotion || !active) {
      ctx.clearRect(0, 0, width, height);
      drawRef.current(ctx, reducedMotion ? 1200 : 0, width, height, {
        x: 0.5,
        y: 0.5,
        inside: false,
      });
      return cleanup;
    }

    const frame = (now: number) => {
      const t = now - start;
      ctx.clearRect(0, 0, width, height);
      drawRef.current(ctx, t, width, height, pointerRef.current);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return cleanup;
  }, [active, reducedMotion]);

  return canvasRef;
}
