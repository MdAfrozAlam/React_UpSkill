# 📈 Progress Log

| Day | Topic | Status | Notes / weak spots to revisit |
|-----|-------|--------|-------------------------------|
| 1 | JavaScript, TypeScript & Setup | ✅ Done 2026-11-18 | All 8 steps + "Done when" checklist ✅ (dev, lint, format, typecheck, build, `.nvmrc`/`engines`). **Strong:** spread/immutability, `??` vs `||`, reading tsc errors, debugging the broken fetch (found all 5 bugs). **Revisit:** ① microtask (Promise/await) vs macrotask (setTimeout) names — on Day 4; JS *hands off* waiting work, `await` pauses only that function. ② Render cycle order: trigger → render (no DOM) → reconcile → commit (= DOM update). ③ StrictMode double-runs effects mount→cleanup→mount (Day 4). ④ Why index keys break on sort/filter (Day 3 search). ⑤ Truthy `if (x?.y)` ≠ `??` for `''`. ⑥ Save `setTimeout` IDs to clear them. Notes: `notes/day-01.md`. |
| 2 | Components, Props, Refs | ⬜ | |
| 3 | State, Events, Forms | ⬜ | |
| 4 | Hooks, Effects, Concurrency | ⬜ | |
| 5 | Routing & Navigation | ⬜ | |
| 6 | API, Auth & Server State | ⬜ | |
| 7 | Shared State & Architecture | ⬜ | |
| 8 | React 19.x, Compiler, SSR | ⬜ | |
| 9 | Accessibility, Design System, i18n | ⬜ | |
| 10 | Testing & Quality Gates | ⬜ | |
| 11 | Performance, Security, Delivery | ⬜ | |
| 12 | Enterprise Architecture | ⬜ | |
| 13 | Capstone I | ⬜ | |
| 14 | Capstone II | ⬜ | |
| 15 | Capstone Verification & Demo | ⬜ | |

Legend: ⬜ not started · ⏳ in progress · ✅ done
