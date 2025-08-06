var name = "@vercel/analytics";
var version = "1.5.0";
var initQueue = () => {
  if (window.va) return;
  window.va = function a(...params) {
    (window.vaq = window.vaq || []).push(params);
  };
};
function isBrowser() {
  return typeof window !== "undefined";
}
function detectEnvironment() {
  try {
    const env = "production";
    if (env === "development" || env === "test") ;
  } catch (e) {
  }
  return "production";
}
function setMode(mode = "auto") {
  if (mode === "auto") {
    window.vam = detectEnvironment();
    return;
  }
  window.vam = mode;
}
function getMode() {
  const mode = isBrowser() ? window.vam : detectEnvironment();
  return mode || "production";
}
function isDevelopment() {
  return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
  if (!pathname || !pathParams) {
    return pathname;
  }
  let result = pathname;
  try {
    const entries = Object.entries(pathParams);
    for (const [key, value] of entries) {
      if (!Array.isArray(value)) {
        const matcher = turnValueToRegExp(value);
        if (matcher.test(result)) {
          result = result.replace(matcher, `/[${key}]`);
        }
      }
    }
    for (const [key, value] of entries) {
      if (Array.isArray(value)) {
        const matcher = turnValueToRegExp(value.join("/"));
        if (matcher.test(result)) {
          result = result.replace(matcher, `/[...${key}]`);
        }
      }
    }
    return result;
  } catch (e) {
    return pathname;
  }
}
function turnValueToRegExp(value) {
  return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
  if (props.scriptSrc) {
    return props.scriptSrc;
  }
  if (isDevelopment()) {
    return "https://va.vercel-scripts.com/v1/script.debug.js";
  }
  if (props.basePath) {
    return `${props.basePath}/insights/script.js`;
  }
  return "/_vercel/insights/script.js";
}
function inject(props = {
  debug: true
}) {
  var _a;
  if (!isBrowser()) return;
  setMode(props.mode);
  initQueue();
  if (props.beforeSend) {
    (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
  }
  const src = getScriptSrc(props);
  if (document.head.querySelector(`script[src*="${src}"]`)) return;
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
  script.dataset.sdkv = version;
  if (props.disableAutoTrack) {
    script.dataset.disableAutoTrack = "1";
  }
  if (props.endpoint) {
    script.dataset.endpoint = props.endpoint;
  } else if (props.basePath) {
    script.dataset.endpoint = `${props.basePath}/insights`;
  }
  if (props.dsn) {
    script.dataset.dsn = props.dsn;
  }
  script.onerror = () => {
    const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
    console.log(
      `[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`
    );
  };
  if (isDevelopment() && props.debug === false) {
    script.dataset.debug = "false";
  }
  document.head.appendChild(script);
}
function pageview({
  route,
  path
}) {
  var _a;
  (_a = window.va) == null ? void 0 : _a.call(window, "pageview", { route, path });
}

function getBasePath() {
  try {
    return undefined                                                    ;
  } catch {
  }
}
customElements.define(
  "vercel-analytics",
  class VercelAnalytics extends HTMLElement {
    constructor() {
      super();
      try {
        const props = JSON.parse(this.dataset.props ?? "{}");
        const params = JSON.parse(this.dataset.params ?? "{}");
        inject({
          ...props,
          disableAutoTrack: true,
          framework: "astro",
          basePath: getBasePath(),
          beforeSend: window.webAnalyticsBeforeSend
        });
        const path = this.dataset.pathname;
        pageview({ route: computeRoute(path ?? "", params), path });
      } catch (err) {
        throw new Error(`Failed to parse WebAnalytics properties: ${err}`);
      }
    }
  }
);
