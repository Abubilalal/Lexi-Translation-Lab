import { useState, useEffect, useCallback, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal, RevealGroup, Item, itemVariants } from "./motion";
import { ReviewModal, type Review } from "./ReviewModal";
import { getReviews, submitReview } from "@/lib/api/reviews.functions";

const metrics = [
  { v: "3000+", k: "Legal Documents Delivered" },
  { v: "250+",  k: "Clients Served" },
  { v: "98%",   k: "Client Satisfaction" },
  { v: "92%",   k: "Repeat engagement" },
];

// Shown while reviews load, or if the table is empty / DB unreachable.
// A 2-up looping carousel needs ~4 slides to loop smoothly, so the fallback
// is padded out; real DB reviews replace these as soon as they load.
const fallbackQuotes: Review[] = [
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

const MAX_DOTS = 5;

export function Proof() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isHovered = useRef(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(),
  });

  const quotes = data && data.length > 0 ? data : fallbackQuotes;

  const mutation = useMutation({
    mutationFn: (r: Review) => submitReview({ data: r }),
    // Optimistically show the new review right away — it's already live server-side.
    onMutate: async (r: Review) => {
      await queryClient.cancelQueries({ queryKey: ["reviews"] });
      const prev = queryClient.getQueryData<Review[]>(["reviews"]);
      queryClient.setQueryData<Review[]>(["reviews"], (old) =>
        old && old.length > 0 ? [r, ...old] : [r],
      );
      return { prev };
    },
    onError: (_err, _r, ctx) => {
      if (ctx?.prev) queryClient.setQueryData(["reviews"], ctx.prev);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });

  const handleSubmit = (r: Review) => {
    mutation.mutate(r);
    setShowModal(false);
  };

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

  // re-init Embla whenever the slides change (new reviews arrive from the DB)
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, quotes]);

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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // --- dot windowing: never render more than MAX_DOTS dots ---
  const total = quotes.length;
  const dotCount = Math.min(total, MAX_DOTS);
  const windowStart =
    total <= MAX_DOTS
      ? 0
      : Math.min(Math.max(selectedIndex - Math.floor(MAX_DOTS / 2), 0), total - MAX_DOTS);
  const visibleDots = Array.from({ length: dotCount }, (_, k) => windowStart + k);

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

        {/* rotating reviews carousel + arrows */}
        <div className="relative">
          {/* prev arrow */}
          <button
            onClick={scrollPrev}
            aria-label="Previous review"
            className="absolute -left-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-surface text-foreground shadow-[var(--shadow-ring)] transition-all hover:-translate-y-1/2 hover:scale-105 hover:shadow-[var(--shadow-elegant)] sm:-left-5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* next arrow */}
          <button
            onClick={scrollNext}
            aria-label="Next review"
            className="absolute -right-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-surface text-foreground shadow-[var(--shadow-ring)] transition-all hover:-translate-y-1/2 hover:scale-105 hover:shadow-[var(--shadow-elegant)] sm:-right-5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

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
        </div>

        {/* dot indicators — capped at MAX_DOTS, slides as a window */}
        <div className="mt-6 flex justify-center gap-2">
          {visibleDots.map((i) => (
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
