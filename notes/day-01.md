# Day 1 — Cheat-sheet: JavaScript, TypeScript & Setup

## Project quality gates (run inside `employee-directory/`)
```bash
npm run dev           # start the app
npm run lint          # ESLint: finds mistakes
npm run format:check  # Prettier: is the style OK?   (npm run format = fix it)
npm run typecheck     # tsc: type errors  ← Vite dev & Node do NOT check types!
npm run build         # production build (runs tsc first)
```

## Modern JS
- Copy, don't change: `{ ...obj, name: 'X' }`, `[...arr, item]`, `arr.filter(...)`, `arr.toSorted()`.
- `a ?? b` → uses `b` only if `a` is `null`/`undefined`. `a || b` → uses `b` for ANY falsy (`0`, `''`, `false`).
- `a?.b` → "if `a` exists, get `.b`, else `undefined`" (no crash).

## Async JS
- JS is single-threaded. It **hands off** slow work (fetch, timers) and keeps going.
- Order: synchronous code → **microtasks** (Promise `.then`, code after `await`) → **macrotasks** (`setTimeout`, events).
- `await` pauses **only that async function**, never the whole page.
- `fetch` throws only on network failure / abort. **404 and 500 do NOT throw** → always check `res.ok`.
- `res.json()` returns a **Promise** → needs `await`.
- Timeout pattern:
```js
const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), 3000); // save the ID!
try {
  const res = await fetch(url, { signal: controller.signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
} catch (err) {
  if (err.name === 'AbortError') console.log('timed out');
  else console.error(err);
} finally {
  clearTimeout(timer);
}
```
- `Promise.all` → fails if ANY fails (use `try/catch`). `Promise.allSettled` → never fails; check each `status`.

## TypeScript
- Reading an error: `file(line,col): error TS2322: message` + the "related information" line (where the rule is).
- Codes: `TS2322` wrong type · `TS2540` read-only · `TS2339` property doesn't exist · `TS18048` possibly undefined.
- Optional field `x?:` → must handle `undefined` (`?.` + `??`, or `if (e.x)` narrowing).
- Add a case to a union → TS points at every `switch` that must handle it.
- External data is `unknown` → check its shape before use. Never `any`, never `!` or `as` to silence errors.
- `[]` with no type = `never[]` → write `const list: Employee[] = []`.

## React
- **Declarative**: you describe *what* the UI looks like; React works out *how* to update the DOM.
- `createRoot(existing #root element).render(<App />)` hands that element to React.
- `StrictMode` (dev only): double-renders + mount→cleanup→mount effects to expose bugs.
- **Render cycle**: trigger (state change) → render (call component, no DOM yet) → reconcile (compare) → commit (update only changed DOM).

## JSX
- One parent per return → use a fragment `<>...</>`.
- `{value}` is shown as **text** (escaped) → safe from XSS. Danger zones: `dangerouslySetInnerHTML`, `href="javascript:..."`.
- Lists need a stable `key={item.id}`; index keys break when the list is sorted/filtered.
- `<label htmlFor="x">` + `<input id="x">` → screen readers + clickable label.

## Debugging routine
1. Console → read the **first** red error: message + file:line. (Red ≠ always a crash; read it.)
2. Go to that line. What's `undefined`? Check props in **⚛️ Components** tab.
3. Fix **one** thing → run again.
- `Cannot read properties of undefined (reading 'name')` → the thing **before** `.name` is undefined.
- `ReferenceError: x is not defined` → you used a name that was never declared.
