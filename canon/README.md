# The Storm Register (`canon/`)

A complete, stable catalogue of Theodor Storm's works — the house's answer to the
Andersen house's **SDU** numbering. Every work carries a permanent **`TS`**
identifier **whether or not the house has staged it**; staging is a separate
status, never part of the identity.

- **`storm_register.json`** — the source of truth (validated by
  `storm_register.schema.json`).
- **`REFERENCES.md`** (repo root) — generated from it by
  `scripts/build-references.mjs`; never hand-edited. The drift test
  (`tests/register.test.mjs`) fails if it goes stale.

## The identifier: `TS-###`

`TS` namespaces **Theodor Storm**. A single three-digit number is the work's
permanent handle, placed in a **genre hundreds-block** (the leading digit encodes
the genre, the way SDU groups Andersen's work by category):

| Block          | Genre                                             |
| -------------- | ------------------------------------------------- |
| `TS-001`–`099` | Novellen / Erzählungen                            |
| `TS-200`–`299` | Märchen                                           |
| `TS-300`–`399` | Kleine Prosa (essays, sketches, autobiographical) |
| `TS-400`–`699` | Gedichte                                          |

Rules:

- **The number is a handle, not a sort key.** Sort views by `year`; the id never
  needs to be in order.
- **Never renumber.** A published `TS-020` is permanent. New or newly-included
  works **append within their block**; each block has ample slack.
- **Genre, year, edition band, staging status live in the record**, not the id.

## Anchoring and provenance

Ordering and dating are anchored to the standard critical edition — **Karl Ernst
Laage & Dieter Lohmeier, _Theodor Storm: Sämtliche Werke in vier Bänden_,
Deutscher Klassiker Verlag, 1987–88** (Bd. 1 Gedichte + Novellen 1848–1867; Bd. 2
Novellen 1867–1880; Bd. 3 Novellen 1881–1888; Bd. 4 Märchen + Kleine Prosa). We
**cite** the edition as the authority (`ll_band`, `edition_anchor`); we do not
reproduce its edited text, apparatus, or commentary. Storm (d. 1888) is public
domain; the `TS` numbers are our own editorial identifiers.

The initial register was assembled from public bibliographies (German Wikipedia
_Liste von Werken Theodor Storms_, zeno.org, Projekt Gutenberg-DE, Deutsches
Textarchiv, the Theodor-Storm-Gesellschaft) and cross-checked; nothing was
invented. It is now maintained by editing `storm_register.json` directly.

## Completeness and the date backfill

The register is **complete for the prose** (47 Novellen, the canonical Märchen,
the Kleine Prosa — all dated) and **complete for poem identity** (every poem is
numbered). What is still open is **poem dating**: works with
`date_status: "unverified"` (`year: null`) are numbered but await a first-
publication year.

To backfill a date, source it — in order of preference — from:

1. **Laage/Lohmeier DKV Bd. 1** apparatus (definitive `Erstdruck` per poem).
2. **Scans of the successive _Gedichte_ editions** (1852 Schwers · 1856 · 1864 ·
   1875 · 1885 Paetel) on MDZ / Google Books / Deutsches Textarchiv — a poem's
   first-appearing edition bounds its date.
3. **_Liederbuch dreier Freunde_ (1843)** for the earliest poems.
4. **Albert Köster, _Sämtliche Werke_ (Insel, 1919–20)** apparatus.

Then set `year` and flip `date_status` to `"verified"`, and regenerate
REFERENCES.md. The id does not change.

## Crosswalk to productions

When the house stages a work, set its `play` field to the khai play slug (the id
under `plays/<slug>/`). That is the link between this catalogue (source works) and
the built `registry.json` (staged productions); the two registries stay separate.
