# Project cover images

Drop each project's cover screenshot in this folder, named after its
`slug` from `src/data/projects.ts`:

```
ksk-beveren-app.jpg
eduvik.jpg
voedselbank-game.jpg
digitap.jpg
beweeg-baai.jpg
```

(`.jpeg`, `.png`, or `.webp` also work.)

Each one is picked up automatically — on the project cards (homepage and
/work) and on that project's case study page — no code changes needed.
Until a project's file is here, it keeps showing the orange gradient
placeholder with the project name.

Adding a new project later? Give it a `slug` in `projects.ts`, then drop
an image here named `<that-slug>.jpg`.
