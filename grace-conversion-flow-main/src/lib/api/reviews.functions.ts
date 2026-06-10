import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getSql } from "../db.server";

export type Review = { name: string; title: string; review: string };

// Returns only approved reviews, newest first. Runs server-side only.
export const getReviews = createServerFn({ method: "GET" }).handler(async () => {
  const sql = getSql();
  const rows = await sql`
    select name, title, review
    from reviews
    where approved = true
    order by created_at desc
  `;
  return rows as Review[];
});

// Inserts a new review as NOT approved (pending moderation).
export const submitReview = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1).max(120),
      title: z.string().max(160).optional().default(""),
      review: z.string().min(1).max(2000),
    }),
  )
  .handler(async ({ data }) => {
    const sql = getSql();
    await sql`
      insert into reviews (name, title, review, approved)
      values (${data.name}, ${data.title}, ${data.review}, false)
    `;
    return { ok: true };
  });
