import { useRef, useEffect } from "react";

const firms = [
  { name: "Mehta & Associates",  style: "font-serif-italic text-2xl" },
  { name: "Kesari Partners",   style: "font-semibold tracking-[0.18em] text-sm" },
  { name: "Veressa Law",      style: "font-serif-italic text-2xl" },
  { name: "Tatvam & Associates",     style: "font-bold tracking-[0.2em] text-sm" },
  { name: "Chandrawat Chambers",          style: "font-semibold tracking-tight text-xl" },
  { name: "Stratham Legal Group",        style: "font-serif-italic text-2xl" },
  { name: "Mehta & Associates",  style: "font-serif-italic text-2xl" },
  { name: "Kesari Partners",   style: "font-semibold tracking-[0.18em] text-sm" },
  { name: "Veressa Law",      style: "font-serif-italic text-2xl" },
  { name: "Tatvam & Associates",     style: "font-bold tracking-[0.2em] text-sm" },
  { name: "Chandrawat Chambers",          style: "font-semibold tracking-tight text-xl" },
  { name: "Stratham Legal Group",        style: "font-serif-italic text-2xl" },
];

// duplicate for seamless loop
const doubled = [...firms, ...firms];

export function LogoWall() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pos = useRef(0);
  const raf = useRef<number>();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.4; // px per frame — increase to go faster

    function tick() {
      pos.current += speed;
      // reset when we've scrolled exactly half (one full set of logos)
      const half = track!.scrollWidth / 2;
      if (pos.current >= half) pos.current = 0;
      track!.style.transform = `translateX(-${pos.current}px)`;
      raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current!);
  }, []);

  return (
    <section className="border-y border-border bg-surface-muted/60 py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-ink-muted">
          TRUSTED BY LEADING COUNSEL & LAW FIRMS
        </p>
      </div>

      {/* scrolling track — no max-width so it bleeds edge to edge */}
      <div className="relative overflow-hidden">
        {/* left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24
                        bg-gradient-to-r from-surface-muted/80 to-transparent" />
        {/* right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24
                        bg-gradient-to-l from-surface-muted/80 to-transparent" />

        <div
          ref={trackRef}
          className="flex items-center gap-16 opacity-70 whitespace-nowrap will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubled.map((f, i) => (
            <span
              key={i}
              className={`text-foreground/80 shrink-0 ${f.style}`}
            >
              {f.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}