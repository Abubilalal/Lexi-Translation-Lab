import { Link } from "@tanstack/react-router";
const cols = [
  {
    t: "Solutions",
    links: [
      "Document Translation",
      "Document True Type",
      "Audio Transcription",
      "DHC e-Filing",
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
      <div className="mx-auto max-w-site px-6 py-16">
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
              Hindi ↔ English translation, document typing, transcription, and litigation support services.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
              New Delhi · Remote, 24/7
            </p>
		        <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@lexilab.in" target="_blank" rel="noopener noreferrer"
              className="mt-2 block text-base tracking-tight text-foreground hover:text-accent normal-case">
              info@lexilab.in
            </a>
                  <p className="mt-1 text-sm text-ink-muted">
                    +91 83686 99442 · WhatsApp 24/7
                  </p>
             <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/lexitranslationlab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/lexi-translation-lab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
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
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/sla" className="hover:text-foreground">SLA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
