import { Reveal, RevealGroup, Item, itemVariants } from "./motion";

const industries = [
  { t: "Litigation", d: "Pleadings, evidence, depositions" },
  { t: "Immigration", d: "Visa, asylum, naturalization" },
  { t: "Corporate / M&A", d: "Contracts, diligence, filings" },
  { t: "IP & Patents", d: "Specifications, claims, prior art" },
  { t: "International Arbitration", d: "Awards, submissions, exhibits" },
  { t: "Compliance", d: "Regulatory, audit, internal review" },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="micro-label mb-3">Practice areas</p>
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Embedded in the workflows of{" "}
                <span className="font-serif-italic text-accent">
                  every legal team
                </span>
                .
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-ink-muted md:justify-self-end md:text-right">
              From single-affidavit immigration filings to multi-thousand-document
              cross-border discovery — Lexi scales to the matter, not the other
              way around.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {industries.map((i, idx) => (
            <Item
              key={i.t}
              variants={itemVariants}
              className="group relative flex flex-col gap-2 bg-surface p-8 transition-colors hover:bg-secondary"
            >
              <span className="absolute right-5 top-5 font-mono text-[10px] tabular text-ink-muted">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h4 className="text-lg font-semibold text-foreground">{i.t}</h4>
              <p className="text-sm text-ink-muted">{i.d}</p>
              <span
                aria-hidden
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-all group-hover:gap-2.5 group-hover:text-accent"
              >
                Learn more <span>→</span>
              </span>
            </Item>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
