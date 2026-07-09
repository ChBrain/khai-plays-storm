# @chbrain/khai-plays-storm

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
