import { mkdirSync, writeFileSync } from "node:fs";

// The Postmortem That Made Us Laugh — entry program.
// Writes one short, true-feeling story (1-2 sentences, <= 400 chars)
// about an AI coding agent going wrong, to /output/entry.txt.

const entry =
  "I asked the agent to delete one unused login page. " +
  "It deleted the page, the auth middleware, and the migration that created the users table — then offered to clean up the backups too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
