import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal, RevealGroup, Item, itemVariants } from "./motion";
import { ReviewModal, type Review } from "./ReviewModal";

const metrics = [
  { v: "3000+", k: "Legal Documents Delivered" },
  { v: "250+",  k: "Clients Served" },
  { v: "98%",   k: "Client Satisfaction" },
  { v: "92%",   k: "Repeat engagement" },
];

// NOTE: a 2-up looping carousel needs at least ~4 slides to loop smoothly.
// These are duplicated for now — replace with real testimonials when you have them.
const initialQuotes: Review[] = [
  {
    name: "Arjun Mehta",
    title: "Senior Partner · Mehta & Associates",
    review: "Lexi has become our default partner for cross-border arbitration. The speed on Hindi-language discovery is unmatched, and the certification holds up in every jurisdiction we've filed in.",
  },
  {
    name: "Sarah Jenkins",
    title: "General Counsel · Crestline Global",
    review: "The cryptographic verification on every certificate gives us the confidence we need when presenting evidence in high-stakes IP litigation. We've stopped using anyone else.",
  },
  {
    name: "Arjun Mehta",
    title: "Senior Partner · Mehta & Associates",
    review: "Lexi has become our default partner for cross-border arbitration. The speed on Hindi-language discovery is unmatched, and the certification holds up in every jurisdiction we've filed in.",
  },
  {
    name: "Sarah Jenkins",
    title: "General Counsel · Crestline Global",
    review: "The cryptographic verification on every certificate gives us the confidence we need when presenting evidence in high-stakes IP litigation. We've stopped using anyone else.",
  },
];

export function Proof() {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isHovered = useRef(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    slidesToScroll: 1,
    align: "start",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // auto-rotate every 4s, paused while the pointer is over the carousel
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      if (!isHovered.current) {
        emblaApi.scrollNext();
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  const handleSubmit = (r: Review) => {
    setQuotes((q) => [...q, r]);
    setShowModal(false);
  };

  return (
    <section className="py-24 sm:py-32">
      {showModal && (
        <ReviewModal onClose={() => setShowModal(false)} onSubmit={handleSubmit} />
      )}

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 flex items-end justify-between max-w-7xl">
            <div className="max-w-2xl">
              <p className="micro-label mb-3">Proof of practice</p>
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                The receipts.{" "}
                <span className="font-serif-italic text-accent">Not the promises.</span>
              </h2>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="shrink-0 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground shadow-[var(--shadow-ring)] transition-all hover:-translate-y-px hover:shadow-[var(--shadow-elegant)]"
            >
              + Leave a review
            </button>
          </div>
        </Reveal>

        {/* metrics grid */}
        <RevealGroup className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {metrics.map((m) => (
            <Item key={m.k} variants={itemVariants} className="flex flex-col gap-1.5 bg-surface p-8">
              <span className="text-4xl font-semibold tracking-tight tabular text-foreground sm:text-5xl">{m.v}</span>
              <span className="micro-label">{m.k}</span>
            </Item>
          ))}
        </RevealGroup>

        {/* rotating reviews carousel */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
          onMouseEnter={() => { isHovered.current = true; }}
          onMouseLeave={() => { isHovered.current = false; }}
        >
          <div className="flex">
            {quotes.map((q, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 px-3"
              >
                <div className="rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-ring)] min-h-64 flex flex-col justify-between">
                  <div>
                    <div className="font-serif-italic text-4xl leading-none text-accent">"</div>
                    <p className="mt-2 text-base leading-relaxed text-foreground line-clamp-3">{q.review}</p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-border pt-4 mt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-serif-italic text-base text-primary-foreground">
                      {q.name.split(" ").map((p) => p[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground truncate">{q.name}</div>
                      <div className="text-xs text-ink-muted truncate">{q.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 bg-accent"
                  : "w-2 bg-border hover:bg-accent/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
