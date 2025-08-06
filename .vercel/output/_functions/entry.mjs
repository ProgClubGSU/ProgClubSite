import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CsfGk9dD.mjs';
import { manifest } from './manifest_DHMquJ3n.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/forms.astro.mjs');
const _page2 = () => import('./pages/api/forms/debug.astro.mjs');
const _page3 = () => import('./pages/api/forms/get-structure.astro.mjs');
const _page4 = () => import('./pages/api/forms/search.astro.mjs');
const _page5 = () => import('./pages/api/forms/submit.astro.mjs');
const _page6 = () => import('./pages/api/forms/test.astro.mjs');
const _page7 = () => import('./pages/dynamic-interest.astro.mjs');
const _page8 = () => import('./pages/events/attendance.astro.mjs');
const _page9 = () => import('./pages/events.astro.mjs');
const _page10 = () => import('./pages/events/_---slug_.astro.mjs');
const _page11 = () => import('./pages/forms/feedback.astro.mjs');
const _page12 = () => import('./pages/history.astro.mjs');
const _page13 = () => import('./pages/interest.astro.mjs');
const _page14 = () => import('./pages/members.astro.mjs');
const _page15 = () => import('./pages/resources.astro.mjs');
const _page16 = () => import('./pages/rss.xml.astro.mjs');
const _page17 = () => import('./pages/thank-you.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/forms.astro", _page1],
    ["src/pages/api/forms/debug.js", _page2],
    ["src/pages/api/forms/get-structure.js", _page3],
    ["src/pages/api/forms/search.js", _page4],
    ["src/pages/api/forms/submit.js", _page5],
    ["src/pages/api/forms/test.js", _page6],
    ["src/pages/dynamic-interest.astro", _page7],
    ["src/pages/events/attendance.astro", _page8],
    ["src/pages/events/index.astro", _page9],
    ["src/pages/events/[...slug].astro", _page10],
    ["src/pages/forms/feedback.astro", _page11],
    ["src/pages/history.astro", _page12],
    ["src/pages/interest.astro", _page13],
    ["src/pages/members.astro", _page14],
    ["src/pages/resources.astro", _page15],
    ["src/pages/rss.xml.js", _page16],
    ["src/pages/thank-you.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "88f1c692-bdf3-4d6c-8a58-dbe54688e20f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
