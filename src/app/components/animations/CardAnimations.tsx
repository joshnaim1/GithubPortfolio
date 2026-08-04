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

/**
 * DeskPartner: a two-link arm solving inverse kinematics, exactly like the real
 * robot's pick-and-place loop. Idle = it cycles home → pick the can → carry →
 * drop it in the taped zone → home, forever. Hover = you take the wrist and the
 * IK solver follows your cursor, the way the real-time jog script does.
 */
export function ArmAnimation({ active, color }: AnimationProps) {
  const state = useRef({ tipX: 0, tipY: 0, seeded: false });
  const ref = useCanvasLoop((ctx, t, w, h, pointer) => {
    const groundY = h - 15;
    // The arm pivots at the top of its plinth, so the IK anchor sits there too.
    const shoulderY = groundY - 13;

    // --- Arm, then workspace ------------------------------------------------
    // The canvas is short and wide, so the arm is sized first (a raised elbow
    // has to stay on canvas) and the workspace is then laid out inside a
    // comfortable mid-range band of the reachable envelope. Targets nearer than
    // that fold the arm into a near-vertical spike; targets further clamp short.
    const canR = 6.5;
    const L1 = Math.min((shoulderY - 6) / 0.9, w * 0.3);
    const L2 = L1 * 0.92; // slight taper so the forearm reads as its own link
    const reach = L1 + L2;

    const dNear = reach * 0.56; // closest the gripper is ever asked to work
    const dFar = reach * 0.9; // furthest, still short of full extension
    const zoneW = Math.min(w * 0.15, reach * 0.16);

    // Centre the whole rig when the canvas is wider than the arm can use.
    const baseX = Math.max(w * 0.06, (w - (dFar + zoneW / 2)) / 2);
    const baseY = shoulderY;
    const dropX = baseX + dFar;
    const zoneX = dropX - zoneW / 2;

    // A new can position each cycle, deterministic so it never jitters.
    const CYCLE = 6200;
    const cycle = Math.floor(t / CYCLE);
    const p = (t % CYCLE) / CYCLE; // progress through the current cycle
    const canSlot = ((cycle * 37) % 11) / 10; // 0..1
    const canX = baseX + dNear + canSlot * (reach * 0.14);

    // Home is a raised ready pose, set in polar terms from the shoulder. It is
    // deliberately far out rather than high and close: elbow-up on a close
    // target stands the upper arm straight up, which reads as a spike.
    const homeAng = -Math.PI * 0.11;
    const homeD = reach * 0.86;
    const homeX = baseX + Math.cos(homeAng) * homeD;
    const homeY = shoulderY + Math.sin(homeAng) * homeD;
    const hoverH = Math.min(reach * 0.22, h * 0.32);

    // Keyframes: [progress, x, y, gripClosed]
    const keys: [number, number, number, number][] = [
      [0.0, homeX, homeY, 0],
      [0.18, canX, groundY - hoverH, 0],
      [0.29, canX, groundY - canR, 0],
      [0.37, canX, groundY - canR, 1],
      [0.47, canX, groundY - hoverH, 1],
      [0.68, dropX, groundY - hoverH, 1],
      [0.76, dropX, groundY - canR, 1],
      [0.83, dropX, groundY - canR, 0],
      [1.0, homeX, homeY, 0],
    ];

    let kx = homeX;
    let ky = homeY;
    let grip = 0;
    for (let i = 0; i < keys.length - 1; i++) {
      const [p0, x0, y0, g0] = keys[i];
      const [p1, x1, y1, g1] = keys[i + 1];
      if (p >= p0 && p <= p1) {
        const raw = (p - p0) / (p1 - p0 || 1);
        const e = raw * raw * (3 - 2 * raw); // smoothstep
        kx = lerp(x0, x1, e);
        ky = lerp(y0, y1, e);
        grip = lerp(g0, g1, e);
        break;
      }
    }

    // The can rides along with the gripper while it is held.
    const holding = p > 0.35 && p < 0.8;
    const placed = p >= 0.8;
    let drawCanX = canX;
    let drawCanY = groundY - canR;
    if (holding) {
      drawCanX = kx;
      drawCanY = ky;
    } else if (placed) {
      drawCanX = dropX;
    }

    // --- Target: cursor when hovering, otherwise the cycle ------------------
    const targetX = pointer.inside ? pointer.x * w : kx;
    const targetY = pointer.inside ? pointer.y * h : ky;
    if (!state.current.seeded) {
      state.current = { tipX: targetX, tipY: targetY, seeded: true };
    }
    state.current.tipX = lerp(state.current.tipX, targetX, 0.18);
    state.current.tipY = lerp(state.current.tipY, targetY, 0.18);

    // --- Inverse kinematics (2-link, elbow-up) ------------------------------
    let dx = state.current.tipX - baseX;
    let dy = state.current.tipY - baseY;
    let d = Math.hypot(dx, dy) || 0.001;
    // Clamp the target into the reachable annulus along its own direction.
    const dMin = Math.abs(L1 - L2) + 1;
    const dMax = L1 + L2 - 1;
    const dClamped = Math.max(dMin, Math.min(dMax, d));
    const tipX = baseX + (dx / d) * dClamped;
    const tipY = baseY + (dy / d) * dClamped;
    d = dClamped;

    const a = Math.atan2(tipY - baseY, tipX - baseX);
    const cosB = (d * d + L1 * L1 - L2 * L2) / (2 * d * L1);
    const B = Math.acos(Math.max(-1, Math.min(1, cosB)));
    // Two solutions; keep the one whose elbow sits higher on screen.
    const up = { x: baseX + Math.cos(a - B) * L1, y: baseY + Math.sin(a - B) * L1 };
    const down = { x: baseX + Math.cos(a + B) * L1, y: baseY + Math.sin(a + B) * L1 };
    const elbow = up.y <= down.y ? up : down;

    // --- Draw ---------------------------------------------------------------
    // Workspace floor
    ctx.strokeStyle = hexToRgba(INK, 0.12);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(10, groundY + 0.5);
    ctx.lineTo(w - 10, groundY + 0.5);
    ctx.stroke();

    // Taped destination zone
    ctx.save();
    ctx.fillStyle = hexToRgba(color, 0.08);
    ctx.fillRect(zoneX, groundY - 13, zoneW, 13);
    ctx.setLineDash([5, 4]);
    ctx.strokeStyle = hexToRgba(color, 0.6);
    ctx.lineWidth = 1.5;
    ctx.strokeRect(zoneX, groundY - 13, zoneW, 13);
    ctx.restore();

    // The can: a little cylinder so it reads as an object, not a dot
    const canW = 9;
    const canH = 13;
    ctx.save();
    ctx.translate(drawCanX, drawCanY);
    ctx.fillStyle = hexToRgba(INK, 0.42);
    ctx.fillRect(-canW / 2, -canH / 2, canW, canH);
    ctx.beginPath();
    ctx.ellipse(0, -canH / 2, canW / 2, 2.2, 0, 0, Math.PI * 2);
    ctx.fillStyle = hexToRgba(INK, 0.62);
    ctx.fill();
    ctx.restore();

    // Base: a plinth with a shoulder post
    ctx.fillStyle = hexToRgba(INK, 0.32);
    ctx.beginPath();
    ctx.moveTo(baseX - 13, groundY);
    ctx.lineTo(baseX + 13, groundY);
    ctx.lineTo(baseX + 7, groundY - 8);
    ctx.lineTo(baseX - 7, groundY - 8);
    ctx.closePath();
    ctx.fill();
    ctx.fillRect(baseX - 4, groundY - 13, 8, 6);

    // Links
    ctx.strokeStyle = color;
    ctx.lineWidth = 3.5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(baseX, shoulderY);
    ctx.lineTo(elbow.x, elbow.y);
    ctx.lineTo(tipX, tipY);
    ctx.stroke();

    // Joints
    for (const j of [{ x: baseX, y: shoulderY }, elbow]) {
      ctx.beginPath();
      ctx.arc(j.x, j.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = hexToRgba(color, 0.25);
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Gripper: two fingers on the forearm axis, closing as `grip` goes to 1
    const fa = Math.atan2(tipY - elbow.y, tipX - elbow.x);
    const open = lerp(7, 2.5, pointer.inside ? 0 : grip);
    const fingerLen = 7;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    for (const s of [-1, 1]) {
      const ox = Math.cos(fa + Math.PI / 2) * open * s;
      const oy = Math.sin(fa + Math.PI / 2) * open * s;
      ctx.beginPath();
      ctx.moveTo(tipX + ox, tipY + oy);
      ctx.lineTo(tipX + ox + Math.cos(fa) * fingerLen, tipY + oy + Math.sin(fa) * fingerLen);
      ctx.stroke();
    }

    // Readout
    ctx.font = "11px 'Space Mono', monospace";
    ctx.fillStyle = hexToRgba(INK, 0.55);
    ctx.textBaseline = "middle";
    // Starts at 28 so it clears the card's accent dot at (12, 12).
    ctx.textAlign = "left";
    ctx.fillText(pointer.inside ? "IK JOG" : "AUTO", 28, 16);
    ctx.textAlign = "right";
    const j1 = Math.round((Math.atan2(elbow.y - shoulderY, elbow.x - baseX) * 180) / Math.PI);
    ctx.fillText(`J1 ${j1 > 0 ? "+" : ""}${j1}°`, w - 12, 16);
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
  arm: ArmAnimation,
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
