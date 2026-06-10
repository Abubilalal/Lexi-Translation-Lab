import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const trust = [
  { k: "Turnaround", v: "24-48h Priority", emphasize: true },
  { k: "Accuracy", v: "99.98% Audit" },
  { k: "Protection", v: "100% Confidential" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-mesh">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
              PRECISION · CONFIDENTIALITY · ON-TIME DELIVERY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            style={{ lineHeight: 1.04, letterSpacing: "-0.02em" }}
          >
            Professional Legal {" "}
            <span className="font-serif-italic font-normal text-accent">
              Services
            </span>{" "}
           
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            Professional Hindi ↔ English translation, document typing, transcription, 
            and litigation support services. We assist advocates, law firms, businesses, media organizations, and individuals with accurate document handling and language services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-px hover:shadow-[var(--shadow-lift)]"
            >
              Get a quote
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
                        <span className="ml-1 text-xs text-ink-muted">
              No card · Reply in 15&nbsp;minutes
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-7 sm:grid-cols-4"
          >
            {trust.map((t) => (
              <div key={t.k} className="flex flex-col gap-1">
                <span className="micro-label">{t.k}</span>
                <span
                  className={`text-sm font-semibold tabular ${
                    t.emphasize ? "text-accent" : "text-foreground"
                  }`}
                >
                  {t.v}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
