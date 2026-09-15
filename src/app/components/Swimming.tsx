import { useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "./Reveal";
import portrait from "../assets/about/joshua-portrait.jpg";
import poster50 from "../assets/swim/poster-50-free.jpg";
import poster100 from "../assets/swim/poster-100-free.jpg";

/**
 * The personal closer: swimming.
 *
 * Sits in the dark band between the playground and the contact footer so the
 * page does not flip themes on the way down.
 *
 * Race clips are local files served from public/video, behind a poster and a
 * play button. The <video> element is only mounted once someone presses play,
 * so the 10-15MB files never download for visitors who do not watch. Nothing
 * from YouTube loads on this page.
 */

type Clip = {
  /** Path under public/, e.g. "/video/ccs-nationals-2026-50-free.mp4" */
  src: string;
  poster: string;
  title: string;
  meet: string;
  /** The lane Josh is swimming in. This is the one thing a viewer needs to know. */
  lane: number;
};

const clips: Clip[] = [
  {
    src: "/video/ccs-nationals-2026-50-free.mp4",
    poster: poster50,
    title: "Men's 50 Freestyle",
    meet: "College Club Swimming Nationals, 2026",
    lane: 5,
  },
  {
    src: "/video/ccs-nationals-2026-100-free.mp4",
    poster: poster100,
    title: "Men's 100 Freestyle",
    meet: "College Club Swimming Nationals, 2026",
    lane: 4,
  },
];

type Photo = { src: string; alt: string; w: number; h: number; caption?: string };

const photos: Photo[] = [
  { src: portrait, alt: "Joshua Naim", w: 665, h: 772 },
  // TODO: team photos go here.
];

function ClipCard({ clip }: { clip: Clip }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-white/15 bg-white/5">
      <div className="relative aspect-video w-full bg-black">
        {playing ? (
          <video
            src={clip.src}
            poster={clip.poster}
            controls
            autoPlay
            playsInline
            preload="auto"
            aria-label={`${clip.title}, ${clip.meet}. Joshua is in lane ${clip.lane}.`}
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${clip.title}. Joshua is in lane ${clip.lane}.`}
            className="group absolute inset-0 h-full w-full"
          >
            <img
              src={clip.poster}
              alt=""
              width={1280}
              height={720}
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-foreground)] transition-transform duration-300 group-hover:scale-110">
                <Play className="size-6 translate-x-0.5" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-white/10 px-4 py-3">
        <div>
          <div className="text-[color:var(--dark-foreground)]">{clip.title}</div>
          <div
            className="mt-0.5 font-['Space_Mono',monospace] text-[color:var(--dark-muted-foreground)]"
            style={{ fontSize: "12px" }}
          >
            {clip.meet}
          </div>
        </div>
        <span
          className="rounded-full bg-[color:var(--accent)] px-2.5 py-1 font-['Space_Mono',monospace] text-[color:var(--accent-foreground)]"
          style={{ fontSize: "11px" }}
        >
          Lane {clip.lane}
        </span>
      </div>
    </div>
  );
}

export function Swimming() {
  const hasTeam = photos.length > 1;

  return (
    <section
      id="swimming"
      className="bg-[color:var(--dark)] text-[color:var(--dark-foreground)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className="font-['Space_Mono',monospace] uppercase tracking-[0.2em] text-[color:var(--dark-muted-foreground)]"
                style={{ fontSize: "12px" }}
              >
                Outside the code
              </p>
              <h2
                className="mt-2 font-['Satoshi',sans-serif] tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700, lineHeight: 1.05 }}
              >
                I swim for Cal Poly.
              </h2>
            </div>
            <p className="max-w-sm text-[color:var(--dark-muted-foreground)]">
              National team swimmer with the Cal Poly Swim Club. Most of what I know about
              showing up on a bad day, I learned in a pool at 6am.
            </p>
          </div>
        </Reveal>

        {/* People */}
        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            {photos.map((p) => (
              <figure key={p.src} className="flex items-center gap-4">
                <img
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  className="size-20 rounded-full border border-white/15 object-cover"
                />
                {p.caption && (
                  <figcaption className="text-[color:var(--dark-muted-foreground)]">
                    {p.caption}
                  </figcaption>
                )}
              </figure>
            ))}
            {!hasTeam && (
              <p
                className="font-['Space_Mono',monospace] text-[color:var(--dark-muted-foreground)]"
                style={{ fontSize: "12px" }}
              >
                {/* TODO: add team photos to `photos` above and this line goes away. */}
                Team photos coming soon
              </p>
            )}
          </div>
        </Reveal>

        {/* Races */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {clips.map((c, i) => (
            <Reveal key={c.src} delay={(i % 2) * 0.08}>
              <ClipCard clip={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
