import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./motion";
import { faqs } from "@/lib/seo";

function Row({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen((x) => !x)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-accent"
      >
        <span className="text-base font-semibold text-foreground sm:text-lg">
          {q}
        </span>
        <span
          aria-hidden
          className={`grid size-8 shrink-0 place-items-center rounded-full border border-border text-ink-muted transition-transform ${
            open ? "rotate-45 border-accent text-accent" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-base leading-relaxed text-ink-muted">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-site grid-cols-1 gap-12 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="micro-label mb-3">Frequently asked</p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Answers,{" "}
            <span className="font-serif-italic text-accent">on the record</span>.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-muted">
            Don’t see what you’re looking for? Our partners answer specific
            matter questions within the hour.
          </p>
          <a
            href="#quote"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
          >
            Ask a partner directly →
          </a>
        </Reveal>
        <div className="lg:col-span-8">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface px-8 shadow-[var(--shadow-ring)]">
              {faqs.map((f) => (
                <Row key={f.q} {...f} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
