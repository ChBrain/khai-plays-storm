#!/usr/bin/env node
// Generate REFERENCES.md from canon/storm_register.json (the source-of-truth).
// The register is the data; this renders the human view, prettier-formatted so
// the format:check gate and the drift test (tests/register.test.mjs) agree.
// Never hand-edit REFERENCES.md -- run `node scripts/build-references.mjs`.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import * as prettier from "prettier";

const here = dirname(fileURLToPath(import.meta.url));
const REGISTER = join(here, "..", "canon", "storm_register.json");
const OUT = join(here, "..", "REFERENCES.md");

const GENRE_LABEL = {
  novelle: "Novellen",
  maerchen: "Märchen",
  kleine_prosa: "Kleine Prosa",
  gedicht: "Gedichte",
};
const ORDER = ["novelle", "maerchen", "kleine_prosa", "gedicht"];

/** Pure render: register in, markdown out. Not prettier-formatted (the caller
 *  formats), so the drift test can format the same way and compare. */
export function render(reg) {
  const works = reg.works;
  const n = works.length;
  const undated = works.filter((w) => w.date_status === "unverified").length;
  const staged = works.filter((w) => w.status === "staged").length;
  const count = (g) => works.filter((w) => w.genre === g).length;

  const head = [
    "---",
    'updated: "generated"',
    "---",
    "",
    "# Storm House: Reference",
    "",
    "> Generated from `canon/storm_register.json` by `scripts/build-references.mjs`.",
    "> The register is the source of truth; do not hand-edit this file. Run the",
    "> generator; the drift test enforces it.",
    "",
    "## Line of Work",
    "",
    "Staging the works of Theodor Storm as **systemic systems**: modeling the",
    "mechanical, thematic, and dramatic structures of the source, where memory is a",
    "state kept past its time, the dike is a control barrier against the sea, and the",
    "past is a signal that will not decay.",
    "",
    "## The Register",
    "",
    "The complete Storm canon carries a stable **TS** identifier, staged or not, in",
    "genre hundreds-blocks anchored to the standard critical edition (Laage &",
    "Lohmeier, _Sämtliche Werke in vier Bänden_, DKV 1987–88). The number is a",
    "permanent handle; genre, year, and edition band live in the record. See",
    "`canon/README.md` for the scheme and the citation/IP posture.",
    "",
    `- **${n}** works registered (${count("novelle")} Novellen · ${count("maerchen")} Märchen · ${count("kleine_prosa")} Kleine Prosa · ${count("gedicht")} Gedichte)`,
    `- **${staged}** staged · **${n - staged}** planned`,
    `- **${undated}** carry \`date_status: unverified\` (year pending the DKV Bd. 1 apparatus; see the backfill path in \`canon/README.md\`)`,
    "",
  ];

  const sections = [];
  for (const g of ORDER) {
    const rows = works.filter((w) => w.genre === g);
    sections.push(`### ${GENRE_LABEL[g]} (\`${reg.blocks[g]}\`)`, "");
    sections.push("| TS | Work | Year | Status |", "| -- | ---- | ---- | ------ |");
    for (const w of rows) {
      const year = w.year ?? "—";
      const title = (w.doubtful ? `${w.canonical_title} †` : w.canonical_title).replace(
        /\|/g,
        "\\|",
      );
      sections.push(`| ${w.id} | ${title} | ${year} | ${w.status} |`);
    }
    sections.push("");
  }
  sections.push("† marks a doubtful attribution, a fragment, or an unverified date.", "");

  const tail = [
    "## Restrictions",
    "",
    "- **Sentiment & Realism**: The house refuses to stage Storm as decorative",
    "  nostalgia. Elements are reduced to the load-bearing vectors of each work's",
    "  systemic architecture; the mood is a result of the mechanism, never a",
    "  substitute for it.",
    "- **Language Policy**: English for architecture, schema, and house identity",
    "  (tooling compatibility); German (`de`) for all prose and staging, to preserve",
    "  the source's North-Frisian force.",
    "",
    "## Encoding",
    "",
    "- **the register (`canon/storm_register.json`)**: the source of truth; every",
    "  work's stable TS id, genre, year, and staging status.",
    "- **the house (`README.md`)**: the Estate identity that answers for the run.",
    "- **the productions (`plays/`)**: the staging packages; a work's `play` field",
    "  links its TS id to the staged production when it exists.",
    "",
  ];

  return [...head, ...sections, ...tail].join("\n");
}

/** Prettier-format the rendered markdown, using the repo's prettier config. */
export async function renderFormatted(reg) {
  const cfg = (await prettier.resolveConfig(OUT)) ?? {};
  return prettier.format(render(reg), { ...cfg, parser: "markdown" });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const reg = JSON.parse(readFileSync(REGISTER, "utf8"));
  writeFileSync(OUT, await renderFormatted(reg));
  console.error(`REFERENCES.md generated from ${reg.works.length} works.`);
}
