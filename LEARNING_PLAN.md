# 🚀 My React Learning Plan — 15 Days

Based on the *SnapWork React JS Developer Upskilling Program 2026*.
Each day = **8 steps** (one step ≈ 1 hour). Each step = learn a little → type code → try it → answer quick questions.

**How each day works**
- ☀️ Morning (Steps 1–4): new ideas + small examples
- 🌙 Afternoon (Steps 5–8): build something real + test the tricky "what if…?" cases
- ✅ End of day: tick the checklist and update `PROGRESS.md`

**The two things we build**
- 🧑‍💼 **Employee Directory → Customer app** (Days 1–12): a practice app that grows every day.
- 🏦 **Customer Onboarding Portal** (Days 13–15): the final project (capstone) — login, customers,
  multi-step form, document upload, review & submit.

---

## 🗺️ The big picture

| Phase | Days | In simple words |
|------|------|-----------------|
| 1. Foundations | 1–2 | JavaScript refresh, TypeScript, first React screen, components |
| 2. Making it interactive | 3–4 | State, forms, hooks, effects, keeping the UI fast |
| 3. Real app skills | 5–7 | Pages & navigation, talking to an API, login, shared state |
| 4. Modern & professional | 8–12 | Newest React 19 features, accessibility, testing, speed, security, big-app architecture |
| 5. Final project | 13–15 | Build, harden, verify and demo the Onboarding Portal |

---

## Day 1 — JavaScript, TypeScript & Project Setup
**Goal:** Set up a clean React + TypeScript project and understand how JavaScript and React run.

| Step | Topic | In simple words |
|------|-------|-----------------|
| 1 | Tools setup | Node 24, npm, Vite 8, VS Code, React DevTools, ESLint (finds mistakes) + Prettier (auto-formats). Lock Node version with `.nvmrc`. |
| 2 | Modern JavaScript | `let/const`, arrow functions, destructuring, spread `...`, `map/filter/reduce`, `?.` and `??`, import/export. Copy data instead of changing it. |
| 3 | Async JavaScript | Promises, `async/await`, `fetch`, the event loop (JS does one thing at a time but can "wait" smartly), cancelling a request with `AbortController`. |
| 4 | TypeScript basics | Types tell the computer what shape your data has → catches bugs before running. Types, interfaces, unions, generics, `unknown` vs `any`. |
| 5 | How React runs | React = describe *what* the screen should look like; React figures out *how* to update it. `createRoot`, StrictMode, Vite project tour. |
| 6 | JSX | HTML-like syntax inside JS. `{}` for expressions, fragments, lists + keys, why JSX is safe from XSS by default. |
| 7 | Build: Employee Directory starter | Header, nav, static employee cards, search box (no logic yet). Data in its own file, typed. |
| 8 | Debugging + checkpoint | Read errors in the console, use DevTools, fix a broken fetch, explain render cycle in your own words. |

**Build:** Employee Directory starter + fetch one public API with a timeout.
**Done when:** ☐ `npm run dev` works ☐ lint/format/typecheck/build scripts pass ☐ `.nvmrc` + `engines` set ☐ I can explain the event loop and React render cycle.

---

## Day 2 — Components, Props, Refs & Rendering Lists
**Goal:** Break the UI into small, reusable, typed pieces (components).

| Step | Topic | In simple words |
|------|-------|-----------------|
| 1 | Function components | A component = a function that returns UI. One job per component. |
| 2 | Props | Props = inputs to a component (like function arguments). Typed, read-only, with defaults. `children` = what you put between the tags. |
| 3 | Rendering lists | `array.map()` → list of components. Keys tell React "who is who" so state stays with the right row. |
| 4 | Conditional UI | Show loading / empty / error states. Beware `{count && ...}` printing `0`. |
| 5 | Refs & portals | `useRef` = a box to grab a DOM element (e.g. focus an input). In React 19, `ref` is just a prop. Portals render a dialog outside the parent box. |
| 6 | Styling | CSS Modules, CSS variables, responsive layout; Tailwind awareness. |
| 7 | Build reusable pieces | `EmployeeCard`, `EmployeeList`, `SearchBar`, `DepartmentFilter`, `EmptyState`, one generic list. |
| 8 | Review | Try weird props, inspect component tree in DevTools, split big components. |

**Build:** Reusable typed component set + a portal dialog that returns focus when closed.
**Done when:** ☐ components have typed props ☐ no key warnings ☐ dialog opens/closes with keyboard and focus comes back.

---

## Day 3 — State, Events & Forms (React Hook Form + Zod)
**Goal:** Make the UI interactive and build solid, accessible forms.

| Step | Topic | In simple words |
|------|-------|-----------------|
| 1 | `useState` & events | State = component's memory. Changing it re-draws the UI. Click/change handlers. Controlled vs uncontrolled inputs. |
| 2 | State structure & `useReducer` | Don't store what you can calculate. Lift state up to share it. Reducer = one place with rules for all changes. |
| 3 | Form basics | Submit, validation, error messages screen readers can read (`aria-invalid`, `aria-describedby`). |
| 4 | React Hook Form | A library that manages forms with fewer re-renders: `useForm`, `register`, `formState`, `reset`. |
| 5 | Zod | Describe rules once (schema) → get validation **and** TypeScript types. Map server errors (400/409/422) to fields. |
| 6 | Dynamic & multi-step forms | Add/remove address rows (`useFieldArray`), wizard steps, "unsaved changes" warning. |
| 7 | Build: Customer Profile form | Profile + contact + address list, Indian formats (10-digit mobile, 6-digit PIN), masked ID. |
| 8 | Custom hooks intro + edge cases | Move reusable logic into `useSomething`. Test blanks, spaces, double-click submit. |

**Build:** Multi-section Customer Profile form with review summary.
**Done when:** ☐ types come from Zod schema ☐ errors are accessible ☐ server errors show on the right field ☐ no double submit.

---

## Day 4 — Hooks, Effects, Concurrency & Suspense
**Goal:** Use effects correctly and keep big screens smooth.

| Step | Topic | In simple words |
|------|-------|-----------------|
| 1 | Rules of Hooks & `useEffect` | Effects = "after render, sync with the outside world" (timers, subscriptions). Always clean up. |
| 2 | Dependencies | The `[]` list tells React when to re-run. Stale values, lint rule `exhaustive-deps`, "you might not need an effect". |
| 3 | Other hooks | `useRef`, `useContext`, `useLayoutEffect`, `useId`, `useSyncExternalStore`. |
| 4 | Custom hooks | Package logic for reuse with a clear input/output. |
| 5 | `useEffectEvent` & async safety | Read latest values inside effects; cancel requests; avoid races. |
| 6 | Concurrent rendering | `useTransition` / `useDeferredValue`: typing stays fast while heavy work waits. |
| 7 | Suspense | Show a fallback while something loads (lazy components, Suspense data). |
| 8 | Lab | Build `useOnlineStatus`, `useDebouncedValue`, cancellable search, 5,000-row fast filter. |

**Done when:** ☐ hooks clean up ☐ before/after speed comparison ☐ my own "effect bugs" checklist.

---

## Day 5 — Routing & Navigation
**Goal:** Turn the app into multiple pages with React Router v8.

Steps: routing concepts → nested routes & layouts (`Outlet`) → filters in the URL (search params) →
protected routes & redirect-after-login (safely) → 404 / access-denied / error pages → lazy-loaded pages
& chunk-failure recovery → build Login/Dashboard/List/Detail/Edit/NotFound → edge-case lab (refresh on deep link, bad IDs, back button).

**Done when:** ☐ deep links work on refresh ☐ filters survive in the URL ☐ protected pages redirect ☐ a lazy page recovers from load failure.

---

## Day 6 — Talking to the API, Login & Server State
**Goal:** Connect to the Node.js Customer Onboarding API safely.

Steps: HTTP & status codes, reading OpenAPI/Swagger, generating types → one central API client (errors,
timeouts, retry, `Idempotency-Key`) → login / refresh / logout (access token in memory, refresh in
HttpOnly cookie) → loading/empty/error/stale states → TanStack Query basics → optimistic updates & rollback
→ CRUD + document upload with progress → failure simulation (offline, 401, 409, 429…).

**Done when:** ☐ typed API client ☐ refresh works ☐ retried POST doesn't create duplicates ☐ every screen has all async states.

> No live API yet? We use a **mock server** generated from the OpenAPI spec (MSW).

---

## Day 7 — Shared State, Persistence & App Structure
**Goal:** Decide *where* each piece of data should live.

Steps: kinds of state (local / shared / URL / form / server) → Context → Context + reducer → Zustand
(selectors, persist + migrations) → localStorage / sessionStorage / IndexedDB & cross-tab sync (never tokens/PII)
→ Error Boundaries → feature-folder architecture → architecture review.

**Done when:** ☐ written state-ownership note ☐ feature folders ☐ persisted draft with version migration.

---

## Day 8 — React 19.x Modern Features, Compiler & Server Rendering
**Goal:** Know and use the newest React tools — and when *not* to.

Steps: Actions (`useActionState`, `useFormStatus`) → `useOptimistic`, `use()`, document metadata →
19.2–19.3 features (Activity, ViewTransition, Fragment Refs, Trusted Types) → React Compiler v1.0 (auto-memo)
→ SSR, hydration, streaming → Server Components & Server Functions (+ security, CVE-2025-55182)
→ frameworks (React Router framework mode, Next.js) & upgrading old code → decision lab.

**Done when:** ☐ Action-driven form ☐ compiler before/after profile ☐ "capability map" of when to use what ☐ dependency advisory check.

---

## Day 9 — Accessibility, Design System & Languages
**Goal:** Everyone can use the app — keyboard, screen readers, phones, other languages.

Steps: semantic HTML & WCAG 2.2 AA → keyboard & screen readers → responsive design → design tokens & dark mode
→ accessible modal/tabs/table/toast → Storybook → i18n with react-i18next (+ `Intl` for ₹, dates) → audit & fix (axe, Lighthouse).

**Done when:** ☐ Storybook with a11y checks ☐ 2 languages ☐ short WCAG QA report.

---

## Day 10 — Testing & Quality Gates
**Goal:** Prove the app works, automatically.

Steps: testing strategy (70–80% coverage) → Vitest + React Testing Library → testing forms/queries/stores
→ MSW network mocks → Playwright end-to-end + axe → debugging & observability → regression suite → Husky pre-commit + quality gates.

**Done when:** ☐ coverage ≥ 70% ☐ 5 critical E2E tests ☐ pre-commit hooks ☐ all gates pass locally.

---

## Day 11 — Performance, Security, Privacy & Shipping
**Goal:** Make it fast, safe, and deployable.

Steps: React Profiler & render speed → Core Web Vitals & bundle size → front-end security (XSS, CSP, Trusted Types,
npm audit) → PII protection & India's DPDP Act → env config, Git flow, GitHub Actions CI → Docker multi-stage build +
Docker Compose with the API → hands-on lab → release-readiness review.

**Done when:** ☐ measurable speed-up ☐ security & privacy checklist ☐ green CI ☐ app runs via `docker compose up`.

---

## Day 12 — Enterprise Architecture & Module Federation
**Goal:** Structure big apps that many teams can work on.

Steps: feature architecture (modular monolith vs micro-frontends) → shared component library & versioning →
monorepo / workspaces → Module Federation basics (host & remote) → sharing React as a singleton →
remote failure & security → build host + remote → architecture review.

**Done when:** ☐ working host/remote demo ☐ shared UI package ☐ architecture diagram ☐ remote-failure fallback.

---

## Days 13–15 — 🏦 Capstone: Customer Onboarding Portal

**Screens:** Login · Dashboard · Customer Details · Address Management · Document Management · Review & Submit ·
error states (404, access denied, offline, session expired).

| Day | Focus |
|-----|-------|
| 13 | Requirements → scaffold (Vite, TS strict, lint, tests, CI, Docker) → login/session → customer list & detail → multi-step onboarding form → documents → draft persistence → checkpoint |
| 14 | Complex form finish → transitions in search → Suspense & recovery → optimistic updates → one React 19.3 feature → federated feature → accessible modal → integration & bug fixing |
| 15 | Functional regression → test coverage → code review → a11y review → performance → security/privacy → production deploy → **demo & assessment** |

**Definition of Done:** Working UI + correct state & API behaviour + automated tests + accessibility check +
secure config + documentation + demo + review.

---

## 📚 Main references
- React docs: https://react.dev/learn · TypeScript: https://www.typescriptlang.org/docs/
- Vite: https://vite.dev/guide/ · React Router: https://reactrouter.com/
- TanStack Query · React Hook Form · Zod · Zustand · Vitest · Testing Library · MSW · Playwright
- WCAG 2.2: https://www.w3.org/TR/WCAG22/ · OWASP Cheat Sheets
