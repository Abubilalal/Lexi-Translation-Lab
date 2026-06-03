import { Reveal, RevealGroup, Item, itemVariants } from "./motion";

const services = [
  {
    n: "01",
    title: "Document Translation",
    desc: "Court-admissible Hindi ↔ English translation of contracts, affidavits, depositions, patents, and evidentiary records. Delivered with a signed Certificate of Accuracy.",
    bullets: [
      "Dual-column bilingual delivery",
      "Notarized + sworn translator signature",
      "Accepted by Indian courts",
    ],
    meta: "₹60 / page",
    metaLabel: "Hindi ↔ English · ₹100/page urgent (24-48 hr)",
  },
  {
    n: "02",
    title: "True-Type",
    desc: "Officially certified true-type translations for immigration filings, academic credentials, visa applications, and government submissions worldwide.",
    bullets: [
      "USCIS, IRCC, UKVI, Schengen accepted",
      "Standard or 24-48 hour urgent delivery",
    ],
    meta: "From ₹20 / page",
    metaLabel: "English ₹20 · Hindi ₹30 per page",
  },
  {
    n: "03",
    title: "Audio & Video Transcription",
    desc: "Timestamped, multi-speaker legal transcription of recorded statements, depositions, surveillance, and court proceedings — formatted for e-discovery platforms.",
    bullets: [
      "Speaker diarization + verbatim mode",
      "Relativity-ready .VTT / .PDF ",
      "Chain-of-custody preserved",
    ],
    meta: "₹100 / audio minute",
    metaLabel: "Hindi · English · code-switched",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="micro-label mb-3">Core capabilities</p>
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Three services.{" "}
                <span className="font-serif-italic text-accent">
                  One source of truth
                </span>{" "}
                for your legal language.
              </h2>
            </div>
            <a
              href="#quote"
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              See full catalog →
            </a>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Item
              key={s.n}
              variants={itemVariants}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-ring)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-lg bg-secondary font-mono text-xs font-semibold text-foreground">
                  {s.n}
                </span>
                <span
                  aria-hidden
                  className="text-ink-muted transition-all group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mb-7 text-sm leading-relaxed text-ink-muted">
                {s.desc}
              </p>
              <ul className="mb-8 space-y-2.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-border pt-5">
                <div className="font-semibold tabular text-foreground">
                  {s.meta}
                </div>
                <div className="mt-0.5 text-xs text-ink-muted">
                  {s.metaLabel}
                </div>
              </div>
            </Item>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
