import { Reveal, RevealGroup, Item, itemVariants } from "./motion";
import { track } from "@vercel/analytics";

const rates = [
  {
    service: "Document Translation",
    detail: "Hindi ↔ English",
    standard: "₹60",
    urgent: "₹100",
    unit: "per page",
  },
  {
    service: "Document True Typing",
    detail: "English",
    standard: "₹20",
    urgent: "₹35",
    unit: "per page",
  },
  {
    service: "Document True Typing",
    detail: "Hindi",
    standard: "₹30",
    urgent: "₹45",
    unit: "per page",
  },
  {
    service: "Audio Transcription",
    detail: "Verbatim · timestamped",
    standard: "₹100",
    urgent: 120,
    unit: "per minute",
  },
  {
    service: "Delhi High Court e-Filing",
    detail: "Litigation filing support",
    standard: "Custom Quote",
    urgent: null,
    unit: null,
  },
];

const notes = [
  "Urgent service requests must be confirmed in writing prior to commencement.",
  "Page rates apply to standard A4-sized pages. Oversized or non-standard formats may attract additional charges.",
  "Fees are charged on the basis of output pages — e.g. a 10-page Hindi document that runs to 14 pages once translated is billed at 14 pages.",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-y border-border bg-surface-muted/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-5xl">
            <p className="micro-label mb-3">Transparent pricing</p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Per-page rates,{" "}
              <span className="font-serif-italic text-accent">
                billed on output
              </span>
              , with a 24-48 hour urgent track.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Our standard fee schedule, in full. Urgent delivery is charged at
              the rates below and confirmed in writing before we begin — no
              surprise line items.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-surface ring-1 ring-border shadow-[var(--shadow-ring)]">
            {/* Header row */}
            <div className="hidden grid-cols-12 gap-4 border-b border-border bg-secondary/50 px-7 py-4 sm:grid">
              <div className="col-span-6 micro-label">Service</div>
              <div className="col-span-3 micro-label text-right">Standard</div>
              <div className="col-span-3 micro-label text-right">
                Urgent · 24-48 hr
              </div>
            </div>

            <RevealGroup>
              {rates.map((r) => (
                <Item
                  key={r.service + r.detail}
                  variants={itemVariants}
                  className="grid grid-cols-1 gap-4 border-b border-border px-7 py-5 last:border-b-0 transition-colors hover:bg-secondary/30 sm:grid-cols-12 sm:items-center"
                >
                  <div className="sm:col-span-6">
                    <div className="font-semibold text-foreground">
                      {r.service}
                    </div>
                    <div className="mt-0.5 text-sm text-ink-muted">
                      {r.detail}
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between sm:col-span-3 sm:block sm:text-right">
                    <span className="text-xs text-ink-muted sm:hidden">
                      Standard
                    </span>
                    <span>
                      <span className="text-xl font-semibold tabular text-foreground">
                        {r.standard}
                      </span>
                      {r.unit && (
                        <span className="ml-1 text-xs text-ink-muted">
                          {r.unit}
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between sm:col-span-3 sm:block sm:text-right">
                    <span className="text-xs text-ink-muted sm:hidden">
                      Urgent · 24-hr
                    </span>
                    {r.urgent ? (
                      <span>
                        <span className="text-xl font-semibold tabular text-accent">
                          {r.urgent}
                        </span>
                        <span className="ml-1 text-xs text-ink-muted">
                          {r.unit}
                        </span>
                      </span>
                    ) : (
                      <span className="text-sm text-ink-muted">—</span>
                    )}
                  </div>
                </Item>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {notes.map((n, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-surface/60 p-5"
              >
                <span className="font-mono text-[11px] font-bold text-accent">
                  NOTE {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {n}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-primary px-8 py-7 text-primary-foreground sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-semibold">
                Need a binding quote for your matter?
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                Send your documents and we’ll confirm output pages and turnaround in writing.
              </p>
            </div>
            <a
              href="https://wa.me/918368699442?text=Hi%20Lexi%20Lab%2C%20I%20need%20a%20certified%20translation%20quote.%20Please%20get%20in%20touch."
                  onClick={() => track("whatsapp_click", { source: "nav" })}
                  target="_blank"
                  rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-px"
            >
              Get a quote <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
