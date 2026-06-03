import { motion } from "framer-motion";

export function DocumentPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Stacked back card */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-surface-muted ring-1 ring-border" />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface p-8 shadow-[var(--shadow-lift)] ring-1 ring-border">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between border-b border-border pb-4">
          <div className="space-y-1.5">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Certificate of Accuracy
            </p>
            <p className="font-mono text-[9px] tabular text-ink-muted/70">
              Ref · LL-992384-IN · Filed 14 Mar 2024
            </p>
          </div>
          <div className="grid size-10 place-items-center rounded-full border border-accent/30 bg-accent/5">
            <span className="font-serif-italic text-base text-accent">L</span>
          </div>
        </div>

        {/* Bilingual columns */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2.5">
            <p className="micro-label">Source · English</p>
            <p className="text-[11px] leading-relaxed text-foreground">
              <span className="font-semibold">Section 4.2 — </span>
              The parties hereby submit to the exclusive jurisdiction of the
              High Court of Delhi in all disputes arising under or in
              connection with this arbitration agreement.
            </p>
            <div className="h-px w-full bg-border" />
            <p className="text-[11px] leading-relaxed text-ink-muted">
              Affidavit sworn before the undersigned, this fourteenth day
              of March, two thousand and twenty-four.
            </p>
          </div>
          <div className="space-y-2.5 rounded-lg bg-accent/5 p-3 -m-1">
            <p className="micro-label text-accent">Target · हिन्दी</p>
            <p
              className="text-[12px] leading-relaxed text-foreground"
              lang="hi"
            >
              <span className="font-semibold">धारा 4.2 — </span>
              पक्ष इस मध्यस्थता अनुबंध के अंतर्गत या इसके संबंध में
              उत्पन्न होने वाले सभी विवादों में दिल्ली उच्च न्यायालय के
              अनन्य क्षेत्राधिकार के अधीन होते हैं।
            </p>
            <div className="h-px w-full bg-accent/15" />
            <p
              className="text-[12px] leading-relaxed text-ink-muted"
              lang="hi"
            >
              अधोहस्ताक्षरी के समक्ष शपथ ली गई, मार्च माह की चौदहवीं
              तारीख, वर्ष दो हजार चौबीस।
            </p>
          </div>
        </div>

        {/* Footer: seal + signature */}
        <div className="absolute inset-x-8 bottom-8 flex items-end justify-between border-t border-dashed border-border pt-5">
          <div className="grid size-16 -rotate-12 place-items-center rounded-full border-2 border-accent text-center">
            <span className="font-mono text-[8px] font-bold uppercase leading-tight text-accent">
              Court
              <br />
              Certified
              <br />
              Lexi · Lab
            </span>
          </div>
          <div className="text-right">
            <div className="font-serif-italic text-2xl leading-none text-foreground/70">
              A. Mehta
            </div>
            <div className="mt-1 h-px w-36 bg-border-strong" />
            <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-ink-muted">
              Sworn Translator · ATA #19284
            </p>
          </div>
        </div>
      </div>

      {/* Floating quote pip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-6 -right-4 max-w-[280px] rounded-2xl bg-primary p-5 text-primary-foreground shadow-[var(--shadow-lift)]"
      >
        <p className="text-sm leading-relaxed">
          “Turnaround on discovery documents was faster than our domestic
          team could process them.”
        </p>
        <p className="mt-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/60">
          Mehta &amp; Associates · Litigation
        </p>
      </motion.div>
    </motion.div>
  );
}
