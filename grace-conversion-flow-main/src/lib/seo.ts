export const SITE_URL = "https://lexilab.in";

export const SITE_NAME = "Lexi Translation Lab";

// A dedicated 1200×630 share image is best. Using the logo as a safe default.
export const OG_IMAGE = `${SITE_URL}/logo-full.png`;

/** Build an absolute canonical URL from a route path like "/" or "/privacy". */
export function canonical(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  // Collapse the root path to just the domain (no trailing slash).
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Single source of truth for the FAQ. Rendered by FAQ.tsx AND emitted as
 * FAQPage structured data on the home page, so the two can never drift.
 */
export const faqs: { q: string; a: string }[] = [
  {
    q: "Can you handle urgent or same-day translation requests?",
    a: "Yes, we offer express translation services for urgent matters. Same-day delivery is available for documents under 10–20 pages. Additional charges may apply for rush requests.",
  },
  {
    q: "What are your turnaround times?",
    a: "Standard delivery depends on the page count of your documents and is confirmed when we quote. If you need it faster, our urgent track guarantees delivery within 24 hours — charged at the urgent page rate (₹100/page for translation, ₹35/page for English typing, ₹45/page for Hindi typing). Urgent requests must be confirmed in writing before we begin.",
  },
  {
    q: "Do you offer notarization along with translation?",
    a: "No. We specialize exclusively in translation services and do not provide notarization. We recommend consulting a licensed notary independently if your documents require it.",
  },
  {
    q: "What happens if there's an error in the translation after delivery?",
    a: "We offer a free revision guarantee. If any inaccuracy is identified post-delivery, we will correct it within 24 hours at no additional cost.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers and UPI.",
  },
  {
    q: "How is pricing structured for large document sets?",
    a: "Everything is billed per output page, never per word. Translation is ₹60/page (₹100/page urgent), English typing ₹20/page, and Hindi typing ₹30/page. Audio transcription is ₹100 per minute, and Delhi High Court e-filing is quoted as per case type. Because we charge on output pages, a 10-page Hindi document that runs to 14 pages once translated is billed at 14 pages — and you receive a binding fee schedule before work begins.",
  },
];

/** LocalBusiness / ProfessionalService schema. Shown site-wide. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE,
    description:
      "Court-certified Hindi ↔ English legal translation, true-type copies, and forensic audio/video transcription for counsel operating across borders.",
    priceRange: "₹₹60-100",
    areaServed: { "@type": "Country", name: "India" },
    // TODO: fill these in (or delete the line) before launch:
    telephone: "+91-8368699442",
    address: {
    "@type": "PostalAddress",
    streetAddress: "Safdarjung Development Area",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110016",
    addressCountry: "IN",
  },
    knowsLanguage: ["en", "hi"],
    serviceType: [
      "Legal translation",
      "Document typing",
      "Audio/video transcription",
      "Delhi High Court e-filing",
    ],
  };
}

/** FAQPage schema built from the shared faqs array. */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
