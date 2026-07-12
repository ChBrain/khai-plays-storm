---
khai: plan
title: "Restage the Hollow Plays"
language: english
license: CC-BY-NC-SA-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-07-12"
status: active
---

# Plan: Restage the Hollow Plays

## Taxonomy

A **management order** (a rider): the record of a content quality-and-depth
review of `plays/**`, and the standing directive it emits. The house counts 47
staged productions; only three are written. This order names the gap and holds
the work to close it.

## Owner

- Owner: [The Playwright](../position_playwright.md)

## Direction

Every production in `plays/**` reads as a distinct staging of its own Storm
source, at the depth the three authored plays already reach. A reader opening any
play meets that novella's cast, place, symbols, and tone - not a template with a
name swapped in. When the work is done, "47 staged" in `README.md` and
`REFERENCES.md` is true of all 47, not of 3.

## Orders

The review, on the tree at review time:

- **Three plays are authored.** `ts002_marthe_und_ihre_uhr` (7 files),
  `ts003_immensee` (23), and `ts047_der_schimmelreiter` (21) are genuine,
  source-faithful, and correctly modelled. _Immensee_ casts six personas, three
  places, three symbol-bearing pieces, two plans, two processes, and three plots;
  its Arc is a real synopsis and its pitch names Storm's own technique of feeling
  that "refuses the loud outcry." These set the standard.
- **Forty-four plays are boilerplate.** The rest carry the bare nine-file
  skeleton filled with one reusable sentence per section. These exact strings
  recur verbatim across all 44, differing only by an interpolated name:
  - Persona _Projection_: "Eine vielschichtige Figur, die die zentralen Konflikte
    der Erzählung verkörpert." (x44)
  - Persona _Action_: "Die Figur agiert im Zentrum des Geschehens..." (x44)
  - Play _Arc_: "Eine Inszenierung der Novelle [Titel] von Theodor Storm. Die
    Handlung entfaltet die Kernthemen des Originals und zeichnet die
    psychologische Tiefe der Figuren nach." (x44)
  - Plan _Direction_: "Die erfolgreiche Verwirklichung des Vorhabens der
    Hauptfigur." (x44)
- **Depth is asserted, never delivered.** The Arc of all 44 promises "the
  psychological depth of the figures"; no section supplies it. Nothing
  distinguishes one hollow play from another beyond its title.
- **Casting collapse.** Each of the 44 novellas is reduced to a single persona,
  place, piece, plot, and pitch. The central relationship of each story is
  structurally absent: _Hans und Heinz Kirch_ (a father-son rupture) casts only
  "Hans"; _Pole Poppenspäler_ casts only "Paul," without Lisei or the puppeteer;
  _Aquis submersus_ casts only "Johannes," without Katharina or the drowned
  child. Names are often source-correct; the story around them is missing.
- **The headline overstates the house.** `README.md` and `REFERENCES.md` count
  the 44 stubs as staged productions equal in standing to _Immensee_.
- **The scaffold is sound.** All intra-play links resolve (0 broken across 447
  files), frontmatter and stamps are valid, filenames are ASCII, and the
  conformance kit is green. This is a fill problem, not a structure problem: the
  template is fine; the content behind it is not there.

The directive: re-stage the 44 to the standard the three authored plays set, and
correct the count language once the work lands. The Playwright authors; the
Roadie and the gates never fill content to make a check pass.

## Implementation

Re-stage in the `play/**` lane, one production per PR (the guard folds this
order's targets with the play it drives). For each play: write a real Arc
synopsis of the actual source; cast the full Company the story needs (its true
personas, places, and the relationships between them); give each piece genuine
symbolic load; and write a pitch that names the source's own tone and technique.
Model _Immensee_ and _Der Schimmelreiter_ for shape and depth. Work the major
novellas first - _Aquis submersus_, _Pole Poppenspäler_, _Hans und Heinz Kirch_,
_Carsten Curator_, _Ein Doppelgänger_ - then the rest. When all 44 are staged,
reconcile the "47 staged" claim so the headline matches the content.

## Targets

- [ ] `ts001_im_saal` - Im Saal
- [ ] `ts004_posthuma` - Posthuma
- [ ] `ts005_im_sonnenschein` - Im Sonnenschein
- [ ] `ts006_angelika` - Angelika
- [ ] `ts007_ein_gruenes_blatt` - Ein grünes Blatt
- [ ] `ts008_wenn_die_aepfel_reif_sind` - Wenn die Äpfel reif sind
- [ ] `ts009_auf_dem_staatshof` - Auf dem Staatshof
- [ ] `ts010_spaete_rosen` - Späte Rosen
- [ ] `ts011_drueben_am_markt` - Drüben am Markt
- [ ] `ts012_veronika` - Veronika
- [ ] `ts013_im_schloss` - Im Schloß
- [ ] `ts014_unter_dem_tannenbaum` - Unter dem Tannenbaum
- [ ] `ts015_abseits` - Abseits
- [ ] `ts016_auf_der_universitaet` - Auf der Universität
- [ ] `ts017_von_jenseit_des_meeres` - Von Jenseit des Meeres
- [ ] `ts018_eine_malerarbeit` - Eine Malerarbeit
- [ ] `ts019_in_st_juergen` - In St. Jürgen
- [ ] `ts020_von_kindern_und_katzen_und_wie_sie_die_metti_begru` - Von Kindern und Katzen, und wie sie die Metti begruben
- [ ] `ts021_der_amtschirurgus_heimkehr` - Der Amtschirurgus - Heimkehr
- [ ] `ts022_eine_halligfahrt` - Eine Halligfahrt
- [ ] `ts023_draussen_im_heidedorf` - Draußen im Heidedorf
- [ ] `ts024_beim_vetter_christian` - Beim Vetter Christian
- [ ] `ts025_pole_poppenspaeler` - Pole Poppenspäler
- [ ] `ts026_viola_tricolor` - Viola tricolor
- [ ] `ts027_waldwinkel` - Waldwinkel
- [ ] `ts028_ein_stiller_musikant` - Ein stiller Musikant
- [ ] `ts029_im_nachbarhause_links` - Im Nachbarhause links
- [ ] `ts030_psyche` - Psyche
- [ ] `ts031_aquis_submersus` - Aquis submersus
- [ ] `ts032_carsten_curator` - Carsten Curator
- [ ] `ts033_renate` - Renate
- [ ] `ts034_im_brauerhause` - Im Brauerhause
- [ ] `ts035_die_soehne_des_senators` - Die Söhne des Senators
- [ ] `ts036_eekenhof` - Eekenhof
- [ ] `ts037_der_herr_etatsrat` - Der Herr Etatsrat
- [ ] `ts038_hans_und_heinz_kirch` - Hans und Heinz Kirch
- [ ] `ts039_schweigen` - Schweigen
- [ ] `ts040_es_waren_zwei_koenigskinder` - Es waren zwei Königskinder
- [ ] `ts041_zur_chronik_von_grieshuus` - Zur Chronik von Grieshuus
- [ ] `ts042_ein_fest_auf_haderslevhuus` - Ein Fest auf Haderslevhuus
- [ ] `ts043_john_riew` - John Riew'
- [ ] `ts044_boetjer_basch` - Bötjer Basch
- [ ] `ts045_ein_bekenntnis` - Ein Bekenntnis
- [ ] `ts046_ein_doppelgaenger` - Ein Doppelgänger
- [ ] Reconcile the "47 staged" claim in `README.md` and `REFERENCES.md` once the plays above are staged
