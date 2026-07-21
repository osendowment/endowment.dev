// Turnstile site keys, split by environment.
//
// Production uses the `ose-nomination-form` widget, whose allowed-domain list
// is exactly `endowment.dev`. That list is deliberately NOT widened to cover
// localhost: anyone can serve a page from their own localhost, so adding it
// would let a third party mint tokens valid for the production sitekey and
// replay them against api.endowment.dev — weakening the only bot defense on
// the nomination forms.
//
// Local dev therefore uses a separate widget, `ose-nomination-form-dev`,
// whose allowed-domain list is exactly `localhost` (which Turnstile matches
// on subdomains, so it covers the portless `*.localhost` names too). A site
// key is public — it ships in the page HTML — so hardcoding it needs no
// per-developer setup. Its secret lives in the data repo at
// `workers/api/.dev.vars`; the matching pair is what makes verification pass.
const PROD_SITE_KEY = "0x4AAAAAADMu4xpj33C7DuE0";
const DEV_SITE_KEY_DEFAULT = "0x4AAAAAAD6njlLS2LTpsUxe";

const DEV_SITE_KEY = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY_DEV || DEV_SITE_KEY_DEFAULT;

/**
 * True when the page is served from a local host. Covers both bare
 * `localhost` and the portless `*.localhost` names (`ose.localhost`) the dev
 * server actually runs on — an equality check against "localhost" alone
 * silently never fires in this setup.
 */
export function isLocalHost(hostname: string): boolean {
    return hostname === "localhost" || hostname.endsWith(".localhost") || hostname === "127.0.0.1";
}

/** Site key for the current environment. Safe to call during SSR. */
export function getTurnstileSiteKey(): string {
    if (typeof window === "undefined") return PROD_SITE_KEY;
    return isLocalHost(window.location.hostname) ? DEV_SITE_KEY : PROD_SITE_KEY;
}
