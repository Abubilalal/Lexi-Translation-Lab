import process from "node:process";
import { neon } from "@neondatabase/serverless";

// Server-only. The .server.ts suffix keeps this out of the client bundle,
// so DATABASE_URL never reaches the browser.
//
// Read the env var INSIDE the function (not at module scope) — on
// serverless/edge runtimes env binds at request time.
export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  return neon(url);
}
