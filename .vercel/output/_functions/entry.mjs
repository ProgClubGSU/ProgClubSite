import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Dd97kkc_.mjs';
import { manifest } from './manifest_Cb1z1sVM.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/forms.astro.mjs');
const _page2 = () => import('./pages/api/debug-simple.astro.mjs');
const _page3 = () => import('./pages/api/forms/get-structure.astro.mjs');
const _page4 = () => import('./pages/api/forms/search.astro.mjs');
const _page5 = () => import('./pages/api/forms/search-backup.astro.mjs');
const _page6 = () => import('./pages/api/forms/submit.astro.mjs');
const _page7 = () => import('./pages/api/forms/test.astro.mjs');
const _page8 = () => import('./pages/api/forms-disabled/debug.astro.mjs');
const _page9 = () => import('./pages/api/forms-disabled/get-structure.astro.mjs');
const _page10 = () => import('./pages/api/forms-disabled/search.astro.mjs');
const _page11 = () => import('./pages/api/forms-disabled/submit.astro.mjs');
const _page12 = () => import('./pages/api/forms-disabled/test.astro.mjs');
const _page13 = () => import('./pages/api/health.astro.mjs');
const _page14 = () => import('./pages/events/attendance.astro.mjs');
const _page15 = () => import('./pages/events.astro.mjs');
const _page16 = () => import('./pages/events/_---slug_.astro.mjs');
const _page17 = () => import('./pages/forms/feedback.astro.mjs');
const _page18 = () => import('./pages/history.astro.mjs');
const _page19 = () => import('./pages/interest.astro.mjs');
const _page20 = () => import('./pages/members.astro.mjs');
const _page21 = () => import('./pages/resources.astro.mjs');
const _page22 = () => import('./pages/rss.xml.astro.mjs');
const _page23 = () => import('./pages/thank-you.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/forms.astro", _page1],
    ["src/pages/api/debug-simple.js", _page2],
    ["src/pages/api/forms/get-structure.js", _page3],
    ["src/pages/api/forms/search.js", _page4],
    ["src/pages/api/forms/search-backup.js", _page5],
    ["src/pages/api/forms/submit.js", _page6],
    ["src/pages/api/forms/test.js", _page7],
    ["src/pages/api/forms-disabled/debug.js", _page8],
    ["src/pages/api/forms-disabled/get-structure.js", _page9],
    ["src/pages/api/forms-disabled/search.js", _page10],
    ["src/pages/api/forms-disabled/submit.js", _page11],
    ["src/pages/api/forms-disabled/test.js", _page12],
    ["src/pages/api/health.js", _page13],
    ["src/pages/events/attendance.astro", _page14],
    ["src/pages/events/index.astro", _page15],
    ["src/pages/events/[...slug].astro", _page16],
    ["src/pages/forms/feedback.astro", _page17],
    ["src/pages/history.astro", _page18],
    ["src/pages/interest.astro", _page19],
    ["src/pages/members.astro", _page20],
    ["src/pages/resources.astro", _page21],
    ["src/pages/rss.xml.js", _page22],
    ["src/pages/thank-you.astro", _page23],
    ["src/pages/index.astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "60b083c3-c62a-482b-9fd9-c7ddb1867948",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
