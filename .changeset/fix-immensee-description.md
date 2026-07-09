---
"@chbrain/khai-plays-storm": patch
---

Fix the `ts003_immensee` play description: the frontmatter carried a 126-character
`description` while `registry.json` held a hand-trimmed 109-character copy, so a
registry rebuild (the release `version` script) regenerated the over-length text and
failed the 10–120 conformance gate. Align the frontmatter to the 109-character text
and rebuild `registry.json` from source (correct sort order, single writer), so the
build is idempotent and the Version Packages release passes.
