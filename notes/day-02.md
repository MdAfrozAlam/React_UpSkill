# Day 2 — Components, Props, Refs (cheat-sheet)

## Components & props
- Component = function returning UI. PascalCase, one job.
- Props = inputs, **read-only**. Parent owns data; child reports changes via `onChange`.
- Default value in destructuring: `({ showEmail = true })` (not `defaultProps`).
- `children` = what's between `<Panel>` … `</Panel>`. `<Panel />` = no children.

## Lists
- `key` on the **outermost element returned by `map`** (e.g. `<li key={emp.id}>`).
- Use stable ids, not index (index = position, not person).

## Conditional UI
- Early returns: loading → error → empty → list.
- `{count && …}` prints `0` → use `{count > 0 && …}`.
- React renders numbers & strings; skips `false`, `null`, `undefined`.

## Styling
- `X.module.css` → `styles.card` (unique class names, no clashes).
- Global CSS (`.card`) won't match module classes.

## Refs & portals
- `useRef` = box holding a DOM element → `ref.current?.focus()`.
- React 19: `ref` is a normal prop. `forwardRef` = old code.
- `createPortal(jsx, document.body)` → renders outside the card (no clipping).
- Dialog: focus inside on open, Esc closes, cleanup removes listener + returns focus.
- Use `<button type="button">`, never clickable `<div>`.

## Derived data
- Don't store what you can calculate: `visible = employees.filter(...)` each render.
- `trim()` removes spaces; `toLowerCase()` makes search case-insensitive.
