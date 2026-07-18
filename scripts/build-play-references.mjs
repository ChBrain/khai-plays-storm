#!/usr/bin/env node
// Generate per-play REFERENCES.md from canon/storm_register.json (the
// source-of-truth) plus each play's own Company section. A play deploys on its
// own, so it carries its own reference warrant rather than leaning on the root
// register a single-play consumer would not have. The register supplies the
// authoritative identity (TS id, genre, year, DKV edition band); the play
// supplies the cast to encode. Never hand-edit a per-play REFERENCES.md -- run
// `node scripts/build-play-references.mjs`. The drift test
// (tests/play-references.test.mjs) fails if any goes stale.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import * as prettier from "prettier";

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, "..");

const GENRE_PHRASE = { novelle: "novella", maerchen: "Märchen" };
const GENRE_NOUN = { novelle: "novella", maerchen: "fairy tale" };
// The four-volume Laage & Lohmeier critical edition (DKV 1987-1988).
const DKV_BAND = {
  1: "Bd. 1 (Gedichte, Novellen 1848-1867)",
  2: "Bd. 2 (Novellen 1867-1880)",
  3: "Bd. 3 (Novellen 1881-1888)",
  4: "Bd. 4 (Märchen, Kleine Prosa)",
};

// Encoding: element type -> descriptor, in Company order.
const TYPE = [
  ["persona", "the personas", "the figures the production casts"],
  ["place", "the places", "where it plays"],
  ["process", "the processes", "the acts it turns on"],
  ["position", "the positions", "the structural roles it fields"],
  ["piece", "the pieces", "the objects it turns on"],
  ["plan", "the plans", "the schemes it stages"],
  ["pitch", "the tenor", "the key it is played in"],
];

function frontmatter(text) {
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  const fm = {};
  if (m)
    for (const line of m[1].split("\n")) {
      const kv = /^(\w+):\s*"?(.*?)"?\s*$/.exec(line);
      if (kv) fm[kv[1]] = kv[2];
    }
  return fm;
}
function section(text, name) {
  const re = new RegExp(`##\\s*${name}\\s*\\n([\\s\\S]*?)(?=\\n##\\s|$)`);
  const m = re.exec(text);
  return m ? m[1].trim() : "";
}
function companyLinks(block) {
  const out = [];
  const re = /\[([^\]]+)\]\(([a-z0-9_-]+\.md)\)/gi;
  let m;
  while ((m = re.exec(block))) out.push({ label: m[1], file: m[2] });
  return out;
}

/** Read the one play's authored inputs the warrant needs. */
export function collectPlay(root, playId) {
  const dir = join(root, "plays", playId);
  const files = readdirSync(dir);
  const playFile = files.find((f) => /^play_.*\.md$/.test(f));
  const text = readFileSync(join(dir, playFile), "utf8");
  const fm = frontmatter(text);
  return {
    playFile,
    description: (fm.description || "").trim(),
    plotCount: files.filter((f) => /^plot_.*\.md$/.test(f)).length,
    cast: companyLinks(section(text, "Company")),
  };
}

/** Pure render: register work + play inputs in, markdown out. Not
 *  prettier-formatted (the caller formats), so the drift test formats the same
 *  way and compares. */
export function renderPlay(work, play) {
  const { canonical_title: title, genre, year, id, ll_band } = work;
  const yearClause = year ? ` (${year})` : "";
  const phrase = GENRE_PHRASE[genre] || "work";
  const noun = GENRE_NOUN[genre] || "work";
  const band = DKV_BAND[ll_band] || `Bd. ${ll_band}`;

  const plotsWord = play.plotCount === 1 ? "single plot" : `${play.plotCount} plots`;
  const enc = [
    `- **the production ([${play.playFile}](${play.playFile}))**: the root that chains the ${plotsWord} and casts the company.`,
  ];
  for (const [t, name, desc] of TYPE) {
    const items = play.cast.filter((c) => c.file.startsWith(t + "_"));
    if (!items.length) continue;
    const list = items.map((c) => `[${c.label}](${c.file})`).join(", ");
    enc.push(`- **${name} (${list})**: ${desc}.`);
  }

  return `---
updated: "generated"
---

# ${title}: Reference

## Line of Work

Staging Theodor Storm's ${phrase} _${title}_${yearClause}. ${play.description}

## Origin

Theodor Storm, _${title}_${yearClause}, registered as ${id} in the house canon (\`canon/storm_register.json\`). Dating and text are anchored to the standard critical edition, Karl Ernst Laage & Dieter Lohmeier, _Sämtliche Werke in vier Bänden_ (Deutscher Klassiker Verlag, 1987-1988), ${band}.

| Source | Key Work / Event | Scope |
| --- | --- | --- |
| **Theodor Storm** | _${title}_${yearClause} | The ${noun} the production stages. |
| **Laage & Lohmeier (eds.)** | _Sämtliche Werke_ (DKV 1987-1988), ${band} | The critical edition the house anchors dating and text to. |

## Restrictions

What the production refuses to model, and to whom it delegates.

- **The register is the catalogue**: this warrant answers for one staged work; the full Storm canon and its ${id} numbering live in the house register, not here.
- **Cross-play context**: strict local isolation. Every link stays within this play's directory.

## Encoding

Source to constraint, per file.

${enc.join("\n")}
`;
}

/** Prettier-formatted render for one play (what lands on disk / the drift test compares). */
export async function renderPlayFormatted(root, work) {
  const raw = renderPlay(work, collectPlay(root, work.play));
  return prettier.format(raw, { parser: "markdown" });
}

async function main() {
  const reg = JSON.parse(readFileSync(join(ROOT, "canon", "storm_register.json"), "utf8"));
  const staged = reg.works.filter((w) => w.status === "staged");
  let n = 0;
  for (const w of staged) {
    if (!existsSync(join(ROOT, "plays", w.play))) continue;
    const out = await renderPlayFormatted(ROOT, w);
    writeFileSync(join(ROOT, "plays", w.play, "REFERENCES.md"), out);
    n++;
  }
  console.log(`wrote ${n} per-play REFERENCES.md`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
