---
"@chbrain/khai-plays-storm": patch
---

Adopt the registry build-drift gate: bump `@chbrain/khai-tests` to `^0.1.27` and
rebuild `registry.json` from source. The rebuild reconciles the registry to the
current build (adding the `kind` discriminator each entry was missing), so the new
conformance gate — which asserts the committed `registry.json` equals a fresh build —
passes. Mechanical reconciliation; no play content changes.
