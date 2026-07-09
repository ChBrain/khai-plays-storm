import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { renderFormatted } from "../scripts/build-references.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const reg = JSON.parse(readFileSync(join(root, "canon", "storm_register.json"), "utf8"));

const BLOCK = {
  novelle: [1, 99],
  maerchen: [200, 299],
  kleine_prosa: [300, 399],
  gedicht: [400, 699],
};
const num = (id) => Number(id.slice(3));

describe("Storm register: integrity", () => {
  it("every id is TS-### and unique", () => {
    const ids = reg.works.map((w) => w.id);
    for (const id of ids) expect(id).toMatch(/^TS-\d{3}$/);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every work sits in its genre's hundreds-block", () => {
    for (const w of reg.works) {
      const [lo, hi] = BLOCK[w.genre];
      expect(num(w.id), `${w.id} ${w.genre}`).toBeGreaterThanOrEqual(lo);
      expect(num(w.id), `${w.id} ${w.genre}`).toBeLessThanOrEqual(hi);
    }
  });

  it("date_status matches the presence of a year", () => {
    for (const w of reg.works)
      expect(w.date_status).toBe(w.year == null ? "unverified" : "verified");
  });

  it("required fields are present on every work", () => {
    for (const w of reg.works)
      for (const f of ["id", "canonical_title", "genre", "status", "play", "doubtful"])
        expect(w, w.id).toHaveProperty(f);
  });
});

describe("Storm register: REFERENCES.md is generated, not hand-edited", () => {
  it("REFERENCES.md on disk equals the generator output (no drift)", async () => {
    const expected = await renderFormatted(reg);
    const onDisk = readFileSync(join(root, "REFERENCES.md"), "utf8");
    expect(onDisk).toBe(expected);
  });
});
