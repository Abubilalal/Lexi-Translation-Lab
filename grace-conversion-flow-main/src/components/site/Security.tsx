import { Reveal, RevealGroup, Item, itemVariants } from "./motion";

const pillars = [
  {
    t: "Accuracy-Focused Review",
    d: "Documents are reviewed for accuracy, consistency, and clarity to help ensure the final translation reflects the intent and meaning of the source material.",
  },
  {
    t: "Transparent Communication",
    d: "From project inquiry to delivery, we maintain clear communication regarding scope, timelines, and requirements so there are no surprises along the way.",
  },
  {
    t: "Practical Turnaround Timelines",
    d: "Delivery schedules are planned according to document complexity and volume, helping clients receive quality work within realistic timeframes.",
  },
  {
    t: "Confidential Handling",
    d: "Client documents are treated with discretion and shared only with personnel involved in the project. We take reasonable measures to protect information throughout the translation process.",
  },
];

export function Security() {
  return (
    <section id="security" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                Security & compliance
              </p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Your matter is{" "}
                <span className="font-serif-italic text-accent">
                  privileged
                </span>
                . We treat it that way.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-primary-foreground/70 md:justify-self-end md:text-right">
              Every workflow is built around the assumption that the documents
              crossing our desk would end a matter — or a career — if
              mishandled.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Item
              key={p.t}
              variants={itemVariants}
              className="flex flex-col gap-3 bg-primary p-8"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-accent/15 text-accent">
                ✓
              </span>
              <h4 className="text-base font-semibold">{p.t}</h4>
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                {p.d}
              </p>
            </Item>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-primary-foreground/15 pt-10 opacity-80">
            {["Legal Documents", "Business Documents", "Academic Records", "Technical Content", "General Translation"].map(
              (b) => (
                <span
                  key={b}
                  className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground/80"
                >
                  {b}
                </span>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
