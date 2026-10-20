# Project images

Each project has its own folder, named after its `slug` in
`src/content/projects/`:

```
ksk-beveren-app/
eduvik/
voedselbank-game/
digitap/
beweeg-baai/
```

## Cover

The mockup shown on the project cards and at the top of the case study.
Every project currently names it in its content file (`cover.file`, e.g.
`mockup.png`); without that setting, `cover.png` (or `.jpg` / `.webp`) is
used. Transparent PNGs work best: they're placed on the orange gradient.
Export at 2400 × 1800 (4:3) or similar, with the device in the middle.

## Case study images

Every other image is referenced by file name in the project's content
file (`src/content/projects/<slug>.ts`). Until a file exists, it
simply isn't shown (the text around it stays), so the page never shows
an empty slot. The names used in `ksk-beveren-app.ts`:

| File | Section |
|---|---|
| `sketches.png` | Process — sketches |
| `userflow.png` | Process — user flow |
| `lofi.png` | Process — low-fi wireframes |
| `hifi.png` | Process — high-fi designs |
| `feature-1.png` … `feature-4.png` | Final design — one screen per key feature |
| `screen-1.png` … | Final design — strip with the remaining screens |

Other projects can use the same names, or any name you put in their
content file.
