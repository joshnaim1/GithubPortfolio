import claroInsights from "../../assets/claro/claro-insights.jpg";
import claroScanResults from "../../assets/claro/claro-scan-results.jpg";
import claroTransformView from "../../assets/claro/claro-transform-view.jpg";
import claroUploadDocument from "../../assets/claro/claro-upload-document.jpg";
import rebalanceHackathonDemo from "../../assets/rebalance/rebalance-hackathon-demo.jpg";
import rebalanceHardwareBuild from "../../assets/rebalance/rebalance-hardware-build.jpg";
import rebalanceHardwarePresentation from "../../assets/rebalance/rebalance-hardware-presentation.jpg";
import rebalanceLiveDashboardDemo from "../../assets/rebalance/rebalance-live-dashboard-demo.jpg";
import spontusLogo from "../../assets/spontus/spontus-logo.png";

export type AnimationType =
  | "balance"
  | "document"
  | "particles"
  | "orbit"
  | "wave"
  | "morph"
  | "pulse"
  | "grid";

export interface Project {
  id: string;
  name: string;
  description: string;
  /** Longer write-up shown in the expanded detail view */
  longDescription: string;
  /** Bullet highlights shown in the expanded detail view */
  highlights: string[];
  /** Tech stack shown in the expanded detail view */
  stack: string[];
  /**
   * Product screenshots shown in the expanded detail view's "In action"
   * gallery. Import each image as an ES module and pass the binding to `src`.
   * Example:
   *   import claroShot1 from "../assets/claro-1.png";
   *   images: [{ src: claroShot1, alt: "Claro before/after view" }]
   */
  images?: { src: string; alt: string }[];
  logo?: { src: string; alt: string };
  language: string;
  /** Accent color used by the card's themed animation */
  color: string;
  stars: number;
  forks: number;
  topics: string[];
  /** Optional context pill, e.g. a hackathon or status */
  badge?: string;
  /** Primary external link (GitHub repo, or a site for private projects) */
  linkUrl: string;
  /** Label + whether the primary link is something other than GitHub */
  isPrivate?: boolean;
  liveUrl?: string;
  liveLabel?: string;
  animation: AnimationType;
}

/**
 * My real projects. Update `stars`/`forks` with live counts whenever you like,
 * and tweak the `animation` field to change a card's themed visual.
 */
export const projects: Project[] = [
  {
    id: "rebalance",
    name: "ReBalance",
    description:
      "A pressure-sensitive balance board that turns stroke rehab into objective, gamified therapy. Live left/right weight streams over Web Serial into a React dashboard, with AI clinical notes. About $74 in parts, no backend.",
    longDescription:
      "ReBalance is a pressure-sensitive balance board paired with a React dashboard that reads live weight distribution over USB and turns it into therapy you can measure. Built in a weekend for the oSTEM × CPES Hackathon at Cal Poly, it aims at a real gap: balance therapy after stroke is subjective, expensive, and easy to quit.",
    highlights: [
      "Real-time left/right weight distribution and balance score",
      "Therapeutic games controlled by shifting your weight",
      "Session history and progress tracking over time",
      "AI clinical notes generated from pure sensor data",
      "Runs fully in the browser. No WiFi, cloud, or backend",
      "About $74 in parts versus ~$14k clinical systems",
    ],
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Web Serial API",
      "Arduino UNO",
      "Gemini 2.5 Flash",
      "Recharts",
    ],
    images: [
      {
        src: rebalanceHardwareBuild,
        alt: "ReBalance hardware prototype with pressure sensors wired to an Elegoo board",
      },
      {
        src: rebalanceHackathonDemo,
        alt: "ReBalance being demonstrated at the oSTEM x CPES Hackathon Spring 2026",
      },
      {
        src: rebalanceLiveDashboardDemo,
        alt: "ReBalance live dashboard demo projected during the team presentation",
      },
      {
        src: rebalanceHardwarePresentation,
        alt: "ReBalance team presenting the hardware build at Cal Poly College of Engineering",
      },
    ],
    language: "JavaScript",
    color: "#2d9c6f",
    stars: 0,
    forks: 0,
    topics: ["react", "web-serial", "arduino", "health-tech"],
    badge: "oSTEM × CPES Hackathon · 2026",
    linkUrl: "https://github.com/joshnaim1/rebalance",
    animation: "balance",
  },
  {
    id: "claro",
    name: "Claro",
    description:
      "Document accessibility for students with disabilities. Upload any PDF, text, or URL and a four-agent pipeline (Amazon Bedrock + Claude) instantly transforms it for dyslexia, low vision, ADHD, or screen readers, learning your preferences over time.",
    longDescription:
      "Claro flips accessibility on its head. Instead of asking every website to become accessible, it brings accessibility to the student right now. Upload a document and four specialized AI agents handle ingestion, diagnosis, transformation, and profile learning, getting smarter with every scan. Built for the Kiro × Cal Poly Hackathon.",
    highlights: [
      "Transforms PDFs, pasted text, or URLs in seconds",
      "Profiles for dyslexia, low vision, ADHD, and screen readers",
      "Four-agent pipeline on Amazon Bedrock with Claude",
      "Before and after split view of every transformation",
      "Learns your preferences and gets smarter each scan",
    ],
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Amazon Bedrock",
      "Claude",
      "MCP",
      "Tailwind CSS",
    ],
    images: [
      {
        src: claroUploadDocument,
        alt: "Claro upload screen with PDF, text, URL, and disability profile options",
      },
      {
        src: claroScanResults,
        alt: "Claro scan results dashboard showing accessibility severity and readability statistics",
      },
      {
        src: claroTransformView,
        alt: "Claro transformation screen comparing before and after accessibility scores",
      },
      {
        src: claroInsights,
        alt: "Claro insights screen showing learned document accessibility patterns",
      },
    ],
    language: "Python",
    color: "#00bbf9",
    stars: 0,
    forks: 0,
    topics: ["fastapi", "bedrock", "accessibility", "multi-agent"],
    badge: "Kiro × Cal Poly Hackathon · 2026",
    linkUrl: "https://github.com/joshnaim1/Claro",
    liveUrl: "https://devpost.com/software/claro-dx6f14",
    liveLabel: "Devpost",
    animation: "document",
  },
  {
    id: "spontus",
    name: "Spontus",
    description:
      "A full-stack web app built with Next.js 16, React 19, Supabase, and Motion. Private and in active development.",
    longDescription:
      "A full-stack web app built with Next.js, React, Supabase, and Motion. This one is private and still in active development, so the code isn't public yet. Head to spontus.io to see where it's going.",
    highlights: [
      "Next.js 16 with React 19 and the App Router",
      "Supabase for data and auth",
      "Motion for transitions and micro-interactions",
      "Private repo, in active development",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "Motion",
      "Tailwind CSS",
      "TypeScript",
    ],
    language: "TypeScript",
    color: "#9b5de5",
    stars: 0,
    forks: 0,
    topics: ["nextjs", "supabase", "typescript", "tailwind"],
    badge: "In progress",
    linkUrl: "https://spontus.io",
    isPrivate: true,
    logo: {
      src: spontusLogo,
      alt: "Spontus logo",
    },
    animation: "particles",
  },
];
