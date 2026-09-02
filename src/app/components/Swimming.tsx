import { useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "./Reveal";
import joshuaHeadshot from "../assets/swim/joshua-headshot.png";

/**
 * The personal closer: swimming.
 *
 * Sits in the dark band between the playground and the contact footer so the
 * page does not flip themes on the way down.
 *
 * Race clips use a click-to-play facade rather than a live YouTube embed. A
 * real embed loads YouTube's player and its tracking on page load, for every
 * visitor, whether or not they ever press play. Here we show the thumbnail and
 * only mount the iframe once someone actually asks for it.
 */

type Clip = {
  /** YouTube video id, the part after v= or youtu.be/ */
  id: string;
  title: string;
  meta: string;
  /** Optional start time in seconds, for pointing at one race in a long video */
  start?: number;
};

// TODO: fill in from Josh's race video(s). One entry per clip.
const clips: Clip[] = [];

type Photo = { src: string; alt: string; w: number; h: number; caption?: string };

const photos: Photo[] = [
  {
    src: joshuaHeadshot,
    alt: "Joshua Naim",
    w: 300,
    h: 300,
  },
  // TODO: team photos go here.
];

function ClipCard({ clip }: { clip: Clip }) {
  const [playing, setPlaying] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${clip.id}?autoplay=1&rel=0${
    clip.start ? `&start=${clip.start}` : ""
  }`;

  return (
    <div className="overflow-hidden rounded-xl border border-white/15 bg-white/5">
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe
            src={src}
            title={clip.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${clip.title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <img
              src={`https://img.youtube.com/vi/${clip.id}/hqdefault.jpg`}
              alt=""
              width={480}
              height={360}
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
      <div className="flex items-baseline justify-between gap-3 border-t border-white/10 px-4 py-3">
        <span className="text-[color:var(--dark-foreground)]">{clip.title}</span>
        <span
          className="shrink-0 font-['Space_Mono',monospace] text-[color:var(--dark-muted-foreground)]"
          style={{ fontSize: "12px" }}
        >
          {clip.meta}
        </span>
      </div>
    </div>
  );
}

export function Swimming() {
  const hasClips = clips.length > 0;
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
        {hasClips ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {clips.map((c, i) => (
              <Reveal key={c.id} delay={(i % 2) * 0.08}>
                <ClipCard clip={c} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.12}>
            <p
              className="mt-12 rounded-xl border border-dashed border-white/20 px-5 py-8 text-center font-['Space_Mono',monospace] text-[color:var(--dark-muted-foreground)]"
              style={{ fontSize: "13px" }}
            >
              {/* TODO: add race clips to `clips` above and this placeholder goes away. */}
              Race clips coming soon
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
