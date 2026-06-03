const cols = [
  {
    t: "Solutions",
    links: [
      "Certified translation",
      "True-type copies",
      "AV transcription",
      "Court interpretation",
    ],
  },
  {
    t: "Industries",
    links: ["Litigation", "Immigration", "Corporate / M&A", "IP & Patents"],
  },
  {
    t: "Company",
    links: ["About", "Security", "Press", "Careers"],
  },
  {
    t: "Resources",
    links: ["Pricing", "FAQ", "Sample work", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo-mark.png"
                alt="Lexi Translation Lab"
                className="h-9 w-auto dark:invert"
              />
              <span className="text-base font-semibold tracking-tight text-foreground">
                Lexi Translation <span className="font-serif-italic text-accent">Lab</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Court-certified legal translation and forensic transcription for
              counsel operating across borders.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
              New Delhi · Remote, 24/7
            </p>
		<a
  href="mailto:info@lexitranslationlab.site"
  className="mt-2 block text-base tracking-tight text-foreground hover:text-accent normal-case"
>
  info@lexitranslationlab.site
</a>
                  <p className="mt-1 text-sm text-ink-muted">
                    +91 83686 99442 · WhatsApp 24/7
                  </p>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <h4 className="micro-label">{c.t}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Lexi Translation Lab · All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">DPA</a>
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
