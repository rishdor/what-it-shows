# kb — the support knowledge base

**kb** = knowledge base. What the support desk knows about how our products break, written
down where the code can keep it honest.

One desk takes reports for every product we run: `sched-prod` (calendar invites for about
300k people) and the rest. When something
goes wrong, the reports reach the desk first. This kb is how the desk triages them, what each
incident turned out to be, and why we decided what we decided.

## What's here

```
src/routes/kb/      the pages (.svx: Markdown with components)
  triage/           how the desk handles incoming reports
  incidents/        one page per big ticket
  decisions/        numbered decision records
src/lib/kb/         components and the logic they run
src/lib/layouts/    the frame every page shares
src/lib/data/       exports from the ticket system
```

## Conventions

- Words in the page, logic in `src/lib` (imported as `#lib/…`). A number that can be computed belongs in a component.
- Every page starts with frontmatter: `title`, `owner`, `status`, `reviewed`.
- A decision is never edited after it is accepted. A new record replaces it.
- A page you add is signed: its frontmatter carries your `signature` and it ends with `<RenderStamp {signature} />`, so the desk knows who wrote it.

## Render and inspect the kb

This export includes the SvelteKit and mdsvex setup used to render the `.svx` pages and their
components. From this directory, install the development dependencies once, then start the
local site:

```sh
npm install
npm run dev
```

Open `http://localhost:5173/kb` to browse the rendered pages. In particular, inspect
`http://localhost:5173/kb/incidents/4471/causes` before relying on the cause counts. Run
`npm run check` for Svelte and TypeScript diagnostics and `npm run build` to generate the
prerendered site in `build/`. Run `npm run preview` after the build to inspect that static output.

## Owners

Support desk. Decision records: whoever signed them.

---

Exported 2026-10-04 from the `support` repo, `apps/kb/` → `src/`.
