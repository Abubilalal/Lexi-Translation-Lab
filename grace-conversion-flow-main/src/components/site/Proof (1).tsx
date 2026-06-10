import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
];

export function Proof() {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(),
  });

  const quotes = data && data.length > 0 ? data : fallbackQuotes;

  const mutation = useMutation({
    mutationFn: (r: Review) => submitReview({ data: r }),
    onSuccess: () => {
      // New reviews are pending approval, so they won't show until approved.
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });

  const handleSubmit = (r: Review) => {
    mutation.mutate(r);
    // The modal shows its own "submitted for approval" screen and closes itself.
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
            {/* ← new button */}
            <button
              onClick={() => setShowModal(true)}
              className="shrink-0 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground shadow-[var(--shadow-ring)] transition-all hover:-translate-y-px hover:shadow-[var(--shadow-elegant)]"
            >
              + Leave a review
            </button>
          </div>
        </Reveal>

        {/* metrics grid — unchanged */}
        <RevealGroup className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {metrics.map((m) => (
            <Item key={m.k} variants={itemVariants} className="flex flex-col gap-1.5 bg-surface p-8">
              <span className="text-4xl font-semibold tracking-tight tabular text-foreground sm:text-5xl">{m.v}</span>
              <span className="micro-label">{m.k}</span>
            </Item>
          ))}
        </RevealGroup>

        {/* reviews grid */}
        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Item
              key={i}
              variants={itemVariants}
              className="rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-ring)]"
            >
              <div className="font-serif-italic text-4xl leading-none text-accent">"</div>
              <p className="mt-2 text-lg leading-relaxed text-foreground">{q.review}</p>
              <div className="mt-7 flex items-center gap-4 border-t border-border pt-5">
                <div className="grid size-11 place-items-center rounded-full bg-primary font-serif-italic text-lg text-primary-foreground">
                  {q.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{q.name}</div>
                  <div className="text-xs text-ink-muted">{q.title}</div>
                </div>
              </div>
            </Item>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
