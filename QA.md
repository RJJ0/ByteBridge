# Verification

Verified on October 9, 2026 with the installed Google Chrome browser and a local Vite development server.

## Results

- `npm.cmd run build`: passed; includes TypeScript project checks and the production bundle.
- `npm.cmd run lint`: passed.
- Browser layout audit: 16 cases passed, including both pages at 320, 375, 390, 768, 1024, and 1440px, 844×390 landscape, and the open mobile menu on both pages.
- No horizontal document overflow, broken images, JavaScript runtime errors, or failed asset requests in the layout audit.
- Six axe accessibility scans: no reported violations against the selected WCAG A/AA rules; includes mobile and desktop on both pages and both open mobile menus.
- Reduced motion: both pages retain visible headings, disable significant animations, and use automatic scrolling.
- Twelve interaction checks passed: client-side navigation, page titles, focus management, direct About refresh, repeated and cross-route mission scrolling, keyboard-operated tips, mobile menu keyboard/Escape/outside click/resize, normal and reduced motion, local font loading, and unknown URL recovery.
- Nine team gallery checks passed: 1, 2, and 7 members at 320, 768, and 1440px. Missing/omitted photos fall back to initials; valid photos load; layout does not overflow. Fixtures were injected into the test browser only. The actual team array remains empty.
- Desktop and mobile screenshots of both pages were inspected.

## Reproducing the checks

See `README.md` for optional browser tooling and commands. Scripts are in `scripts/`; reports and screenshots are in the ignored `artifacts/qa/` directory.

Automated accessibility checks do not replace a full assistive-technology review. Safari, Firefox, physical mobile devices, and screen readers were not tested. Production hosting requires an SPA fallback to `index.html` for `/about` and other client-side URLs; no hosting deployment is included.
