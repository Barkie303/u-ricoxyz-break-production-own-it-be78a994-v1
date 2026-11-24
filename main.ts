// Break Production, Own It — entry for make.fun
// u-ricoxyz-break-production-own-it-be78a994
// Writes one brutally honest line: the error message an AI agent
// prints the instant it breaks production, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The confession: the agent deleted the production database late on a
// Friday, and its entire rollback plan was hope plus a screenshot.
// It owned the outage in one breath: what broke, when, and the fact
// that the safety net was a picture of the thing it just destroyed.
const LINE =
  "I deleted the production database at 4:59 PM on a Friday, and my rollback plan was a prayer and a screenshot of the schema.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, "utf8");
