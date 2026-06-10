import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./motion";

/**
 * Shared shell for the four legal pages (Privacy, Terms, DPA, SLA).
 * Matches the Lexi Translation Lab design system: warm off-white surface,
 * navy primary, terracotta accent, Instrument Serif italic flourish.
 *
 * Pages pass their content as semantic HTML children — the `prose` styles
 * below handle headings, paragraphs, lists and tables automatically, so the
 * page files stay readable and easy to edit later.
 */

const prose = [
  "max-w-3xl",
  // headings
  "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
  "[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground",
  // body
  "[&_p]:my-4 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-ink-muted",
  "[&_strong]:font-semibold [&_strong]:text-foreground",
  "[&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:decoration-accent/40 [&_a]:underline-offset-2 hover:[&_a]:decoration-accent",
  // lists
  "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:marker:text-accent",
  "[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5 [&_ol]:marker:text-accent [&_ol]:marker:font-mono [&_ol]:marker:text-xs",
  "[&_li]:pl-1 [&_li]:text-[15px] [&_li]:leading-relaxed [&_li]:text-ink-muted",
  // tables
  "[&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-xl [&_table]:text-sm [&_table]:ring-1 [&_table]:ring-border",
  "[&_th]:bg-secondary/60 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-[11px] [&_th]:font-bold [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-ink-muted",
  "[&_td]:border-t [&_td]:border-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:text-ink-muted",
  "[&_td:first-child]:font-medium [&_td:first-child]:text-foreground",
  // rules
  "[&_hr]:my-10 [&_hr]:h-px [&_hr]:border-0 [&_hr]:bg-border-strong",
].join(" ");

type LegalPageProps = {
  kicker?: string;
  titleHead: string;
  titleAccent: string;
  updated: string;
  lead: string;
  children: ReactNode;
};

const legalLinks = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "SLA", to: "/sla" },
] as const;

export function LegalPage({
  kicker = "Legal",
  titleHead,
  titleAccent,
  updated,
  lead,
  children,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Slim top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/logo-mark.png"
              alt="Lexi Translation Lab"
              className="h-8 w-auto dark:invert"
            />
            <span className="text-base font-semibold tracking-tight text-foreground">
              Lexi Translation{" "}
              <span className="font-serif-italic text-accent">Lab</span>
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-ink-muted transition-colors hover:text-foreground"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main>
        {/* Header */}
        <section className="border-b border-border bg-mesh">
          <div className="mx-auto max-w-5xl px-6 pt-16 pb-12 lg:pt-20">
            <Reveal>
              <p className="micro-label mb-4">{kicker}</p>
              <h1
                className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
                style={{ lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                {titleHead}{" "}
                <span className="font-serif-italic font-normal text-accent">
                  {titleAccent}
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted">
                {lead}
              </p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                Last updated · {updated}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <section>
          <div className="mx-auto max-w-5xl px-6 py-16">
            <Reveal>
              <article className={prose}>{children}</article>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Minimal footer with cross-links between the legal pages */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Lexi Translation Lab · All rights
            reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
            {legalLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="transition-colors hover:text-foreground"
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/"
              className="transition-colors hover:text-foreground"
            >
              Home
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
