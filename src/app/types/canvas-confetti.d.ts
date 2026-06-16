// Minimal ambient declaration for canvas-confetti (package ships no types).
declare module "canvas-confetti" {
  interface ConfettiOptions {
    particleCount?: number;
    spread?: number;
    startVelocity?: number;
    origin?: { x?: number; y?: number };
    colors?: string[];
    [key: string]: unknown;
  }
  function confetti(options?: ConfettiOptions): Promise<void> | null;
  export default confetti;
}
