import { Reveal, RevealGroup, Item, itemVariants } from "./motion";

const steps = [
  {
    n: "1",
    title: "Submit Documents",
    desc: "Share your files via email or WhatsApp.",
    
  },
  {
    n: "2",
    title: "Review & Quote",
    desc: "We review the files and provide pricing and delivery timelines.",
    
  },
  {
    n: "3",
    title: "Translation / Processing",
    desc: "Translation, typing, transcription, or filing assistance is completed.",
    
  },
  {
    n: "4",
    title: "Deliver",
    desc: "Digital delivery with signed certificate. Court-stamped physical copies couriered on request.",
    
  },
];

export function Process() {
  return (
    <section className="border-y border-border bg-surface-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-20 text-center">
            <p className="micro-label mb-3">Operational flow</p>
            <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Predictable precision at{" "}
              <span className="font-serif-italic text-accent">every stage</span>{" "}
              of the matter.
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border-strong md:block" />
          <RevealGroup className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((s) => (
              <Item key={s.n} variants={itemVariants} className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground ring-4 ring-surface-muted">
                    {s.n}
                  </div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest tabular text-accent">
                    
                  </span>
                </div>
                <h4 className="mb-2 text-base font-semibold text-foreground">
                  {s.title}
                </h4>
                <p className="max-w-[28ch] text-sm leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
              </Item>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
