# @chbrain/khai-plays-storm

## 0.55.0

### Minor Changes

- ba2418b: Stage all remaining 44 Novellen in the Theodor Storm canon:
  TS-001, TS-004 to TS-024, TS-026 to TS-046. Each play is structured with a minimal, fully conformant set of 6 files. Bumps package and registry versions to `0.47.0`.
- 4e742fa: Stage all 7 Märchen in the Theodor Storm canon:
  TS-200 to TS-206. Each play is fully developed using all 9 element types with story-specific details. Bumps package and registry versions to `0.54.0`.
- b77e2bb: Stage the third Storm play, **Marthe und ihre Uhr** (`TS-002`, `plays/ts002_marthe_und_ihre_uhr`):
  A quiet, cozy portrait of an elderly woman spending Christmas Eve alone in her room, listening to the ticking of her grandfather clock. Demonstrates a simplified staging structure with only 7 load-bearing files. Bumps package and registry versions to `0.3.0`.
- 724d727: Stage Zwei Kuchenesser der alten Zeit (TS-301) to Deep Standard, representing Storm's portrait of Husum's eccentrics and Ernst Mahner, including play score, cast, places, pieces, pitches, and plots.

### Patch Changes

- 6c6dfec: Adopt the registry build-drift gate: bump `@chbrain/khai-tests` to `^0.1.27` and
  rebuild `registry.json` from source. The rebuild reconciles the registry to the
  current build (adding the `kind` discriminator each entry was missing), so the new
  conformance gate — which asserts the committed `registry.json` equals a fresh build —
  passes. Mechanical reconciliation; no play content changes.
- c1e4843: author per-play REFERENCES.md warrants for all 54 staged plays, generated from the Storm register (TS id, genre, year, and the Laage & Lohmeier DKV edition band) plus each play's Company, so every play ships a self-contained reference warrant it can deploy on
- 8bafc23: Restage Abseits (TS-015) to deep standard, expanding the characters, places, and motifs to match the tragic and self-sacrificing bürgerliche Novelle.
- 15558b5: Restage Angelica (TS-006) to deep standard, expanding the characters, places, and motifs to match the tragic, psychological conflicts of the Novelle.
- c12b02e: Restage Aquis submersus (TS-031) to deep standard with 22 files, expanding the cast and motifs to match the shape and depth of Immensee.
- 1a2d0cd: Restage Auf dem Staatshof (TS-009) to deep standard, expanding the characters, places, and motifs to match the tragic class conflicts and symbols of the Novelle.
- a70521b: Restage Bötjer Basch (TS-044) to deep standard, expanding the characters, places, and motifs to match the handcraft tradition, paternal grief, and family reunion narrative of the Novelle.
- 558e0ac: Restage Carsten Curator (TS-032) to deep standard, expanding the characters, places, and motifs to match the tragic conflicts of the Novelle.
- 14ffa69: Restage Zur Chronik von Grieshuus (TS-041) to deep standard, expanding the characters, places, and motifs to match the tragic historical conflicts of the Novelle.
- c3fd652: Restage Der Amtschirurgus - Heimkehr (TS-021) to deep standard, expanding the characters, places, and motifs to match the excentric and society-critical autobiographical narrative of the Novelle.
- 81e341f: Restage Drueben am Markt (TS-011) to deep standard, expanding the characters, places, and motifs to match the tragic, class-conscious conflicts of the Novelle.
- 28df839: Restage Eekenhof (TS-036) to deep standard, expanding the characters, places, and motifs to match the tragic, gothic family conflicts of the Novelle.
- b495806: Restage Ein Bekenntnis (TS-045) to deep standard, expanding the characters, places, and motifs to match the tragic, ethical medical conflicts of the Novelle.
- 674490a: Restage Ein Doppelgänger (TS-046) to deep standard, expanding the characters, places, and motifs to match the tragic social conflicts of the Novelle.
- 64ac839: Restage Ein gruenes Blatt (TS-007) to deep standard, expanding the characters, places, and motifs to match the tragic, wartime conflicts of the Novelle.
- 4838a10: Restage Eine Malerarbeit (TS-018) to deep standard, expanding the characters, places, and motifs to match the psychological and artistic conflicts of the Novelle.
- 31989fa: Restage Ein Fest auf Haderslevhuus (TS-042) to deep standard, expanding the characters, places, and motifs to match the tragic medieval romance conflicts of the Novelle.
- e4bfc0a: Restage Eine Halligfahrt (TS-022) to deep standard, expanding the characters, places, and motifs to match the tragic, natural conflicts of the Novelle.
- 63e5436: Restage Hans und Heinz Kirch (TS-038) to deep standard, expanding the characters, places, and motifs to match the tragic Vater-Sohn conflict of the Novelle.
- 6195f24: Restage Draussen im Heidedorf (TS-023) to deep standard, expanding the characters, places, and motifs to match the tragic, eerie heathland conflicts of the Novelle.
- 07ea94a: Restage Der Herr Etatsrat (TS-037) to deep standard, expanding the characters, places, and motifs to match the tragic, grotesque family conflicts of the Novelle.
- 3c6de78: Restage Im Brauerhause (TS-034) to deep standard, expanding the characters, places, and motifs to match the realistic bürgerliche family conflict and superstition-versus-science narrative of the Novelle.
- 389ee77: Restage Im Saal (TS-001) to deep standard, expanding the characters, places, and motifs to match the tragic, generational conflicts of the Novelle.
- e839522: Restage Im Schloss (TS-013) to deep standard, expanding the characters, places, and motifs to match the social-critical and religionskritische conflicts of the Novelle.
- 826f58e: Restage Im Sonnenschein (TS-005) to deep standard, expanding the characters, places, and motifs to match the tragic, generational conflicts of the Novelle.
- 98904be: Restage John Riew' (TS-043) to deep standard, expanding the characters, places, and motifs to match the maritime family drama, hereditary alcoholism, and duty-of-care narrative of the Novelle.
- 0834d30: Restage Es waren zwei Koenigskinder (TS-040) to deep standard, expanding the characters, places, and motifs to match the tragic music-student love story and psychological decay narrative of the Novelle.
- d98bff9: Restage Im Nachbarhause links (TS-029) to deep standard, expanding the characters, places, and motifs to match the tragic social isolation and paranoia narrative of the Novelle.
- ac72335: Restage Pole Poppenspäler (TS-025) to deep standard with 22 custom files, expanding the cast and settings to capture the conflict between traveling art and respectable civic life.
- df7d868: Restage Posthuma (TS-004) to deep standard, expanding the characters, places, and motifs to match the tragic, class-conscious conflicts of the Novelle.
- 4e3e503: Restage Psyche (TS-030) to deep standard, expanding the characters, places, and motifs to match the artistic inspiration and seelenrettung narrative of the Novelle.
- 7107a84: Restage Renate (TS-033) to deep standard, expanding the characters, places, and motifs to match the tragic, historical witch-hunt conflicts of the Novelle.
- 70bea95: Restage Schweigen (TS-039) to deep standard, expanding the characters, places, and motifs to match the psychological trauma and taboos-versus-honesty narrative of the Novelle.
- b4240b9: Restage Die Soehne des Senators (TS-035) to deep standard, expanding the characters, places, and motifs to match the humorous and emotional bürgerliche family sibling conflict narrative of the Novelle.
- 2c85d65: Restage Spaete Rosen (TS-010) to deep standard, expanding the characters, places, and motifs to match the psychological, midlife conflicts of the Novelle.
- 6715b9e: Restage In St. Jürgen (TS-019) to deep standard, expanding the characters, places, and motifs to match the tragic, nostalgic conflicts of the Novelle.
- 555c476: Restage Ein stiller Musikant (TS-028) to deep standard, expanding the characters, places, and motifs to match the tragic artist's trauma and vicarious musical fulfillment narrative of the Novelle.
- d6ebd26: Restage Unter dem Tannenbaum (TS-014) to deep standard, expanding the characters, places, and motifs to match the nostalgic and autobiographical Christmas story.
- a5637d7: Restage Veronika (TS-012) to deep standard, expanding the characters, places, and motifs to match the psychological and religious conflicts of the Novelle.
- 2f7376d: Restage Beim Vetter Christian (TS-024) to deep standard, expanding the characters, places, and motifs to match the cosy domestic and family comedy narrative of the Novelle.
- c5e8852: Restage Viola tricolor (TS-026) to deep standard, expanding the characters, places, and motifs to match the tragic, emotional domestic conflicts of the Novelle.
- f1c487e: Restage Von jenseit des Meeres (TS-017) to deep standard, expanding the characters, places, and motifs to match the colonial-critical and identity conflicts of the Novelle.
- eab0b46: Restage Von Kindern und Katzen, und wie sie die Metti begruben (TS-020) to deep standard, expanding the characters, places, and motifs to match the childhood and pet funeral narrative of the Novelle.
- 9111ebf: Restage Waldwinkel (TS-027) to deep standard, expanding the characters, places, and motifs to match the tragic generations gap and nature-philosophical narrative of the Novelle.
- 385c3a0: Restage Wenn die Aepfel reif sind (TS-008) to deep standard, expanding the characters, places, and motifs to match the humorous, situational conflicts of the Novelle.

## 0.3.0

### Minor Changes

- 0ff2149: Stage the first Storm play, **Der Schimmelreiter** (`TS-047`, `plays/ts047_der_schimmelreiter`):
  Hauke Haien raises a new dike against the sea and his neighbours and is drowned with
  his family in the flood the old dike's neglect lets in. The house standard is set here -
  cast to the Novelle's load-bearing vectors (reason vs. the sea and the old belief),
  with the Hochdeutsch/Plattdeutsch split made load-bearing: the reckoning voices
  (Hauke, Elke, the schoolmaster-frame) speak High German, the folk voices that carry
  the sea-legend and the grudge (Trin' Jans, Ole Peters, the sacrifice-cry) speak
  genuine Low German. Declares `khai.languages: ["de", "nds"]` and lifts
  `@chbrain/khai-language` to a dialect-aware version so the Platt gates. Adding a play
  is a minor bump: the play count becomes 1, so the house ships `0.1.0`.
- 0a096ff: Stage the second Storm play, **Immensee** (`TS-003`, `plays/ts003_immensee`):
  A frame narrative of youthful romance, a white water lily, and the silent resignation of a life looking back from its far end. The younger Reinhard is split from the old frame narrator, with the play's company cast to the Novelle's load-bearing vectors: memory, the unattainable Wasserlilie, and the bürgerliche Resignation. Bumps package and registry versions to `0.2.0` to reflect the second staged play.

### Patch Changes

- ed68b82: Fix the `ts003_immensee` play description: the frontmatter carried a 126-character
  `description` while `registry.json` held a hand-trimmed 109-character copy, so a
  registry rebuild (the release `version` script) regenerated the over-length text and
  failed the 10–120 conformance gate. Align the frontmatter to the 109-character text
  and rebuild `registry.json` from source (correct sort order, single writer), so the
  build is idempotent and the Version Packages release passes.
