import { useRef } from "react";
import { useCanvasLoop } from "./useCanvasLoop";
import type { AnimationType } from "../data/projects";

interface AnimationProps {
  active: boolean;
  color: string;
}

const INK = "#0c0c0c";

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

const canvasClass = "block h-full w-full";

/**
 * ReBalance: a balance beam that tilts toward your cursor's horizontal
 * position, with live left/right load bars and percentages. Mirrors the
 * project's real-time weight-distribution dashboard. Idle = gentle sway.
 */
export function BalanceAnimation({ active, color }: AnimationProps) {
  const state = useRef({ tilt: 0 });
  const ref = useCanvasLoop((ctx, t, w, h, pointer) => {
    const cx = w / 2;
    const cy = h / 2 + 6;

    // Target tilt: -1 (weight left) .. +1 (weight right)
    const target = pointer.inside
      ? (pointer.x - 0.5) * 2
      : Math.sin(t / 1100) * 0.5;
    state.current.tilt = lerp(state.current.tilt, target, 0.12);
    const tilt = Math.max(-1, Math.min(1, state.current.tilt));
    const angle = tilt * 0.32;

    const L = w * 0.3;
    const dx = Math.cos(angle) * L;
    const dy = Math.sin(angle) * L;
    const leftPt = { x: cx - dx, y: cy - dy };
    const rightPt = { x: cx + dx, y: cy + dy };

    const leftLoad = 0.5 - tilt * 0.5; // 0..1
    const rightLoad = 0.5 + tilt * 0.5;

    // Baseline + fulcrum
    ctx.strokeStyle = hexToRgba(INK, 0.12);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - L - 14, cy + 30);
    ctx.lineTo(cx + L + 14, cy + 30);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx - 11, cy + 30);
    ctx.lineTo(cx + 11, cy + 30);
    ctx.closePath();
    ctx.fillStyle = hexToRgba(INK, 0.35);
    ctx.fill();

    // Beam
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(leftPt.x, leftPt.y);
    ctx.lineTo(rightPt.x, rightPt.y);
    ctx.stroke();

    // Weight pads (scale with load)
    const pad = (pt: { x: number; y: number }, load: number) => {
      const r = 6 + load * 14;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y - r - 2, r, 0, Math.PI * 2);
      ctx.fillStyle = hexToRgba(color, 0.18);
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    };
    pad(leftPt, leftLoad);
    pad(rightPt, rightLoad);

    // Live readouts
    ctx.font = "11px 'Space Mono', monospace";
    ctx.fillStyle = hexToRgba(INK, 0.55);
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillText(`L ${Math.round(leftLoad * 100)}%`, 12, 16);
    ctx.textAlign = "right";
    ctx.fillText(`${Math.round(rightLoad * 100)}% R`, w - 12, 16);
  }, active);
  return <canvas ref={ref} className={canvasClass} aria-hidden />;
}

/**
 * Claro: a "clarity scan" sweeps across rows of text. Left of the scan the
 * lines are jagged and faint (inaccessible); right of it they're clean and
 * uniform (transformed). Move your cursor to drive the scan yourself.
 */
export function DocumentAnimation({ active, color }: AnimationProps) {
  const ref = useCanvasLoop((ctx, t, w, h, pointer) => {
    const rows = 6;
    const marginX = 14;
    const usableW = w - marginX * 2;
    const top = 16;
    const rowGap = (h - top - 10) / rows;
    const scanX = pointer.inside
      ? pointer.x * w
      : (0.5 + 0.45 * Math.sin(t / 1600)) * w;

    for (let r = 0; r < rows; r++) {
      const y = top + r * rowGap + rowGap / 2;
      let x = marginX;
      let wi = 0;
      const rowSeed = (r * 53 + 17) % 97;
      while (x < marginX + usableW) {
        // Deterministic pseudo-random word width
        const rnd = ((rowSeed + wi * 31) % 13) / 13;
        const wordW = 14 + rnd * 30;
        if (x + wordW > marginX + usableW) break;
        const clean = x > scanX;
        if (clean) {
          ctx.fillStyle = color;
          ctx.fillRect(x, y - 2.5, wordW, 5);
        } else {
          // jagged / faint
          const jitter = ((rowSeed + wi * 7) % 5) - 2;
          ctx.fillStyle = hexToRgba(INK, 0.18);
          ctx.fillRect(x, y - 2 + jitter, wordW, 3);
        }
        x += wordW + 7;
        wi++;
      }
    }

    // Scan line
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(scanX, 8);
    ctx.lineTo(scanX, h - 8);
    ctx.stroke();
    ctx.fillStyle = hexToRgba(color, 0.15);
    ctx.fillRect(scanX, 8, 10, h - 16);
  }, active);
  return <canvas ref={ref} className={canvasClass} aria-hidden />;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

/**
 * spontus: a drifting network that reaches toward your cursor, linking nearby
 * nodes to it. Conveys the "reach" theme; alive whether or not you hover.
 */
export function ParticlesAnimation({ active, color }: AnimationProps) {
  const particles = useRef<Particle[]>([]);
  const ref = useCanvasLoop((ctx, _t, w, h, pointer) => {
    const ps = particles.current;
    if (ps.length === 0) {
      for (let i = 0; i < 24; i++) {
        ps.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    }
    const px = pointer.x * w;
    const py = pointer.y * h;
    for (const p of ps) {
      if (pointer.inside) {
        const dx = px - p.x;
        const dy = py - p.y;
        const d = Math.hypot(dx, dy) || 1;
        if (d < 120) {
          p.vx += (dx / d) * 0.04;
          p.vy += (dy / d) * 0.04;
        }
      }
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      p.x = Math.max(0, Math.min(w, p.x));
      p.y = Math.max(0, Math.min(h, p.y));
    }
    for (let i = 0; i < ps.length; i++) {
      for (let j = i + 1; j < ps.length; j++) {
        const dist = Math.hypot(ps[i].x - ps[j].x, ps[i].y - ps[j].y);
        if (dist < 56) {
          ctx.beginPath();
          ctx.moveTo(ps[i].x, ps[i].y);
          ctx.lineTo(ps[j].x, ps[j].y);
          ctx.strokeStyle = hexToRgba(color, (1 - dist / 56) * 0.5);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    if (pointer.inside) {
      for (const p of ps) {
        const dist = Math.hypot(p.x - px, p.y - py);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(px, py);
          ctx.strokeStyle = hexToRgba(color, (1 - dist / 120) * 0.6);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
    for (const p of ps) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }, active);
  return <canvas ref={ref} className={canvasClass} aria-hidden />;
}

/** Concentric orbits with planets tracing elliptical paths. */
export function OrbitAnimation({ active, color }: AnimationProps) {
  const ref = useCanvasLoop((ctx, t, w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const time = t / 1000;
    const rings = 3;
    for (let i = 0; i < rings; i++) {
      const rx = (w / 2.6) * ((i + 1) / rings);
      const ry = rx * 0.55;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = hexToRgba(INK, 0.12);
      ctx.lineWidth = 1;
      ctx.stroke();
      const speed = 0.6 - i * 0.15;
      const a = time * speed + i * 1.7;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * rx, cy + Math.sin(a) * ry, 5 - i, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fillStyle = INK;
    ctx.fill();
  }, active);
  return <canvas ref={ref} className={canvasClass} aria-hidden />;
}

/** Layered sine waves scrolling horizontally. */
export function WaveAnimation({ active, color }: AnimationProps) {
  const ref = useCanvasLoop((ctx, t, w, h) => {
    const time = t / 1000;
    for (let l = 0; l < 3; l++) {
      ctx.beginPath();
      const amp = 12 - l * 3;
      const freq = 0.018 + l * 0.006;
      const phase = time * (1 + l * 0.4);
      const baseY = h / 2 + (l - 1) * 14;
      for (let x = 0; x <= w; x += 4) {
        const y = baseY + Math.sin(x * freq + phase) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = l === 0 ? color : hexToRgba(color, 0.35 - l * 0.08);
      ctx.lineWidth = l === 0 ? 2.5 : 1.5;
      ctx.stroke();
    }
  }, active);
  return <canvas ref={ref} className={canvasClass} aria-hidden />;
}

/** A blob that morphs between organic shapes. */
export function MorphAnimation({ active, color }: AnimationProps) {
  const ref = useCanvasLoop((ctx, t, w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const time = t / 1000;
    const points = 8;
    const baseR = Math.min(w, h) / 3.4;
    ctx.beginPath();
    for (let i = 0; i <= points; i++) {
      const a = (i / points) * Math.PI * 2;
      const r = baseR + Math.sin(a * 3 + time * 1.6) * 10 + Math.cos(a * 2 - time) * 8;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = hexToRgba(color, 0.18);
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }, active);
  return <canvas ref={ref} className={canvasClass} aria-hidden />;
}

/** Expanding concentric rings, like a heartbeat / radar pulse. */
export function PulseAnimation({ active, color }: AnimationProps) {
  const ref = useCanvasLoop((ctx, t, w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const time = t / 1000;
    const maxR = Math.min(w, h) / 2;
    for (let i = 0; i < 3; i++) {
      const phase = (time * 0.6 + i / 3) % 1;
      ctx.beginPath();
      ctx.arc(cx, cy, phase * maxR, 0, Math.PI * 2);
      ctx.strokeStyle = hexToRgba(color, 1 - phase);
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    const beat = 4 + Math.abs(Math.sin(time * 3)) * 4;
    ctx.beginPath();
    ctx.arc(cx, cy, beat, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }, active);
  return <canvas ref={ref} className={canvasClass} aria-hidden />;
}

/** A modular grid where cells light up in a travelling wave. */
export function GridAnimation({ active, color }: AnimationProps) {
  const ref = useCanvasLoop((ctx, t, w, h) => {
    const time = t / 1000;
    const cell = 18;
    const cols = Math.ceil(w / cell);
    const rows = Math.ceil(h / cell);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const d = Math.hypot(c - cols / 2, r - rows / 2);
        const v = (Math.sin(d * 0.7 - time * 2.4) + 1) / 2;
        const size = 2 + v * 6;
        const x = c * cell + cell / 2;
        const y = r * cell + cell / 2;
        ctx.fillStyle = v > 0.6 ? color : hexToRgba(INK, 0.12 + v * 0.1);
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
      }
    }
  }, active);
  return <canvas ref={ref} className={canvasClass} aria-hidden />;
}

const MAP: Record<
  AnimationType,
  (props: AnimationProps) => React.ReactElement
> = {
  balance: BalanceAnimation,
  document: DocumentAnimation,
  particles: ParticlesAnimation,
  orbit: OrbitAnimation,
  wave: WaveAnimation,
  morph: MorphAnimation,
  pulse: PulseAnimation,
  grid: GridAnimation,
};

export function CardAnimation({
  type,
  active,
  color,
}: {
  type: AnimationType;
  active: boolean;
  color: string;
}) {
  const Comp = MAP[type];
  return <Comp active={active} color={color} />;
}
