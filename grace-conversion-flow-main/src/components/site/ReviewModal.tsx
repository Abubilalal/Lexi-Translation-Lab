import { useState } from "react";

// What gets shown in the carousel (no email — email is never displayed).
export type Review = { name: string; title: string; review: string };
// What the form collects + submits (includes email).
export type ReviewInput = Review & { email: string };

type Props = { onClose: () => void; onSubmit: (r: ReviewInput) => void };

// Same shape the server validates with. Keep in sync with submitReview's zod schema.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ReviewModal({ onClose, onSubmit }: Props) {
  const [form, setForm] = useState<ReviewInput>({ name: "", title: "", review: "", email: "" });
  const [emailError, setEmailError] = useState("");
  const [done, setDone] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (name === "email" && emailError) setEmailError(""); // clear error as they fix it
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = form.email.trim();
    if (!form.name || !form.review) return;
    if (!EMAIL_RE.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    onSubmit({ ...form, email });
    setDone(true);
  };

  return (
    // backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-lift)]"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="py-6 text-center">
            <div className="font-serif-italic mb-3 text-5xl text-accent">"</div>
            <p className="text-lg font-semibold text-foreground">Thank you!</p>
            <p className="mt-1 text-sm text-ink-muted">
              Your review is now live on the page.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Leave a review</h3>
              <button onClick={onClose} className="text-ink-muted hover:text-foreground text-xl">✕</button>
            </div>
            <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="micro-label">Your name *</label>
                  <input
                    name="name" value={form.name} onChange={handle} required
                    placeholder="Arjun Mehta"
                    className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="micro-label">Title & firm</label>
                  <input
                    name="title" value={form.title} onChange={handle}
                    placeholder="Partner · Mehta & Associates"
                    className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="micro-label">Your email *</label>
                <input
                  type="email" name="email" value={form.email} onChange={handle} required
                  autoComplete="email" inputMode="email"
                  placeholder="arjun@mehta-associates.in"
                  aria-invalid={!!emailError}
                  className={`rounded-lg border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent ${
                    emailError ? "border-red-500 focus:border-red-500" : "border-border"
                  }`}
                />
                {emailError ? (
                  <span className="text-xs text-red-500">{emailError}</span>
                ) : (
                  <span className="text-xs text-ink-muted">Not shown publicly — used only to verify your review.</span>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="micro-label">Your review *</label>
                <textarea
                  name="review" value={form.review} onChange={handle} required
                  rows={4} placeholder="Share your experience with Lexi Translation Lab..."
                  className="resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-px transition-transform"
              >
                Submit review →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
