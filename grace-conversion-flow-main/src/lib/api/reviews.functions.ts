import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getSql } from "../db.server";

export type Review = { name: string; title: string; review: string };

// Returns reviews, newest first. New reviews are inserted as approved=true
// below, so they appear here immediately — no moderation wait.
// (The `approved` column is kept so you can still hide a bad review later
//  by flipping it to false directly in the DB.)
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

// Inserts a new review as APPROVED (goes live instantly) and returns it.
// NOTE: `email` is collected and stored, but is deliberately NOT returned here
// (and not selected in getReviews), so it never reaches the browser/UI.
export const submitReview = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1).max(120),
      title: z.string().max(160).optional().default(""),
      review: z.string().min(1).max(2000),
      email: z.string().trim().email("Enter a valid email address").max(254),
    }),
  )
  .handler(async ({ data }) => {
    const sql = getSql();
    const [row] = await sql`
      insert into reviews (name, title, review, email, approved)
      values (${data.name}, ${data.title}, ${data.review}, ${data.email}, true)
      returning name, title, review
    `;
    return row as Review;
  });
