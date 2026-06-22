import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

const links = [
  { label: "Solutions", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/logo-mark.png"
            alt="Lexi Translation Lab"
            className="h-9 w-auto dark:invert"
          />
          <span className="text-base font-semibold tracking-tight text-foreground">
            Lexi Translation <span className="font-serif-italic text-accent">Lab</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#quote"
            className="hidden text-sm font-medium text-foreground hover:text-accent sm:inline-flex"
          >
            Contact
          </a>
          <a
            href="https://wa.me/918368699442?text=Hi%20Lexi%20Lab%2C%20I%20need%20a%20certified%20translation%20quote.%20Please%20get%20in%20touch."
                  onClick={() => track("whatsapp_click", { source: "nav" })}
                  target="_blank"
                  rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-px"
          >
            Get a quote
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
