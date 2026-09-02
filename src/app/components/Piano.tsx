import { useEffect, useRef, useState } from "react";
import { Play, Pause, Music } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * Piano: what I have recorded, and what I am still working on.
 *
 * Two data arrays drive everything. Both are empty until real content lands,
 * and the section renders honest placeholders rather than invented songs or
 * invented progress numbers.
 *
 *   recordings -> finished pieces, audio file or YouTube clip
 *   learning   -> in progress, with how far along it actually is
 */

type Recording = {
  title: string;
  composer?: string;
  /** Path under public/, e.g. "/audio/chopin-nocturne.mp3" */
  audio?: string;
  /** YouTube video id, if the clip is video rather than audio */
  youtubeId?: string;
  meta?: string;
};

type Learning = {
  title: string;
  composer?: string;
  /** 0-100. Your number, not an estimate. */
  percent: number;
  note?: string;
};

// TODO: add finished recordings. Drop the file in public/audio/ first.
const recordings: Recording[] = [];

// TODO: add the pieces you are working on and how far along each one is.
const learning: Learning[] = [];

function formatTime(s: number) {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

function AudioPlayer({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onTime = () => setTime(el.currentTime);
    const onMeta = () => setDuration(el.duration);
    const onEnd = () => setPlaying(false);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = ref.current;
    if (!el) return;
    el.currentTime = Number(e.target.value);
    setTime(el.currentTime);
  };

  return (
    <div className="flex items-center gap-3">
      <audio ref={ref} src={src} preload="metadata" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--accent-foreground)] transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        {playing ? (
          <Pause className="size-4" fill="currentColor" />
        ) : (
          <Play className="size-4 translate-x-px" fill="currentColor" />
        )}
      </button>

      <input
        type="range"
        min={0}
        max={duration || 0}
        value={time}
        onChange={seek}
        aria-label={`Seek within ${title}`}
        className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-white/20 accent-[color:var(--accent)]"
      />

      <span
        className="shrink-0 font-['Space_Mono',monospace] tabular-nums text-[color:var(--dark-muted-foreground)]"
        style={{ fontSize: "12px" }}
      >
        {formatTime(time)} / {formatTime(duration)}
      </span>
    </div>
  );
}

export function Piano() {
  return (
    <section
      id="piano"
      className="bg-[color:var(--dark)] text-[color:var(--dark-foreground)]"
    >
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="border-t border-white/10 pt-24">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2
                className="font-['Satoshi',sans-serif] tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700, lineHeight: 1.05 }}
              >
                And I play piano.
              </h2>
              <p className="max-w-sm text-[color:var(--dark-muted-foreground)]">
                Recordings of the pieces I have finished, and an honest read on the ones I
                am still in the middle of.
              </p>
            </div>
          </Reveal>

          {/* Finished recordings */}
          {recordings.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
              {recordings.map((r, i) => (
                <Reveal key={r.title} delay={(i % 2) * 0.08}>
                  <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-['Satoshi',sans-serif] tracking-tight">{r.title}</h3>
                      {r.meta && (
                        <span
                          className="shrink-0 font-['Space_Mono',monospace] text-[color:var(--dark-muted-foreground)]"
                          style={{ fontSize: "12px" }}
                        >
                          {r.meta}
                        </span>
                      )}
                    </div>
                    {r.composer && (
                      <p className="mt-0.5 text-[color:var(--dark-muted-foreground)]">
                        {r.composer}
                      </p>
                    )}
                    {r.audio && (
                      <div className="mt-4">
                        <AudioPlayer src={r.audio} title={r.title} />
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={0.08}>
              <p
                className="mt-12 flex items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 px-5 py-8 text-center font-['Space_Mono',monospace] text-[color:var(--dark-muted-foreground)]"
                style={{ fontSize: "13px" }}
              >
                {/* TODO: add entries to `recordings` and this placeholder goes away. */}
                <Music className="size-4" aria-hidden /> Recordings coming soon
              </p>
            </Reveal>
          )}

          {/* Learning now */}
          {learning.length > 0 && (
            <Reveal delay={0.12}>
              <div className="mt-14">
                <p
                  className="font-['Space_Mono',monospace] uppercase tracking-[0.2em] text-[color:var(--dark-muted-foreground)]"
                  style={{ fontSize: "12px" }}
                >
                  Learning now
                </p>
                <ul className="mt-6 flex flex-col">
                  {learning.map((l) => (
                    <li
                      key={l.title}
                      className="grid gap-x-6 gap-y-2 border-b border-white/10 py-4 last:border-b-0 md:grid-cols-[1fr_auto_10rem] md:items-center"
                    >
                      <div>
                        <span className="text-[color:var(--dark-foreground)]">{l.title}</span>
                        {l.composer && (
                          <span className="ml-2 text-[color:var(--dark-muted-foreground)]">
                            {l.composer}
                          </span>
                        )}
                        {l.note && (
                          <p
                            className="mt-0.5 text-[color:var(--dark-muted-foreground)]"
                            style={{ fontSize: "13px" }}
                          >
                            {l.note}
                          </p>
                        )}
                      </div>

                      <span
                        className="font-['Space_Mono',monospace] tabular-nums text-[color:var(--dark-foreground)] md:text-right"
                        style={{ fontSize: "13px" }}
                      >
                        {l.percent}%
                      </span>

                      {/* Thin rule, no heavy filled track. The number carries the value. */}
                      <span
                        className="relative block h-0.5 w-full rounded-full bg-white/15"
                        role="img"
                        aria-label={`${l.title}, ${l.percent} percent learned`}
                      >
                        <span
                          className="absolute inset-y-0 left-0 block rounded-full bg-[color:var(--accent)]"
                          style={{ width: `${Math.max(0, Math.min(100, l.percent))}%` }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
