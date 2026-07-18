import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { renderPlayFormatted } from "../scripts/build-play-references.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const reg = JSON.parse(readFileSync(join(root, "canon", "storm_register.json"), "utf8"));
const staged = reg.works.filter((w) => w.status === "staged");

// A play deploys on its own, so it ships its own REFERENCES.md warrant. Those
// warrants are generated from the register (+ the play's Company), never
// hand-edited -- this fails if any on disk has drifted from the generator.
// Absent files are skipped (a play not yet backfilled is not drift), so this
// test is green before and after the per-play files land, and locks them once
// they do.
describe("Storm per-play REFERENCES.md are generated, not hand-edited", () => {
  it("every staged play with a REFERENCES.md equals the generator output (no drift)", async () => {
    const drift = [];
    for (const w of staged) {
      const p = join(root, "plays", w.play, "REFERENCES.md");
      if (!existsSync(p)) continue;
      const expected = await renderPlayFormatted(root, w);
      if (readFileSync(p, "utf8") !== expected) drift.push(w.play);
    }
    expect(
      drift,
      `stale per-play REFERENCES (run scripts/build-play-references.mjs): ${drift.join(", ")}`,
    ).toEqual([]);
  });
});
