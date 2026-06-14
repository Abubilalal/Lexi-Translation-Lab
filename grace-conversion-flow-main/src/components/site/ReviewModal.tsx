import { useState } from "react";

type Props = { onClose: () => void; onSubmit: (r: Review) => void };
export type Review = { name: string; title: string; review: string };

export function ReviewModal({ onClose, onSubmit }: Props) {
  const [form, setForm] = useState<Review>({ name: "", title: "", review: "" });
  const [done, setDone] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.review) return;
    onSubmit(form);
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
            <form onSubmit={submit} className="flex flex-col gap-4">
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
