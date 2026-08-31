import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Every internal link must resolve to a page this site actually builds.
 *
 * `src/content/md/docs-index.md` linked `/docs/mcp/` while `src/pages/docs/
 * mcp.astro` sat uncommitted, so the docs index pointed at a live 404 for as
 * long as the two were out of step. Nothing in the build complains: Astro
 * renders whatever href it is given.
 */

const ROOT = resolve(__dirname, "..");
const PAGES_DIR = join(ROOT, "src", "pages");
const PUBLIC_DIR = join(ROOT, "public");

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

/** Route paths this site builds, normalized to a leading+trailing slash. */
function buildRoutes(): Set<string> {
  const routes = new Set<string>(["/"]);
  for (const file of walk(PAGES_DIR)) {
    if (!/\.(astro|md|mdx|html)$/.test(file)) continue;
    const rel = relative(PAGES_DIR, file).replace(/\.(astro|md|mdx|html)$/, "");
    if (rel === "index" || rel === "404") continue;
    routes.add(`/${rel.replace(/\/index$/, "")}/`);
  }
  return routes;
}

/** Files served verbatim from public/, e.g. /llms.txt or /images/logo.svg. */
function publicAssets(): Set<string> {
  return new Set(walk(PUBLIC_DIR).map((f) => `/${relative(PUBLIC_DIR, f)}`));
}

const HREF_RE = /(?:href|url)=["'](\/[^"'#?]*)["']/g;
const MD_LINK_RE = /\]\((\/[^)#?\s]*)\)/g;

function sourceFiles(): string[] {
  return [
    ...walk(PAGES_DIR).filter((f) => f.endsWith(".astro")),
    ...walk(join(ROOT, "src", "content", "md")).filter((f) => f.endsWith(".md")),
  ];
}

describe("internal links resolve to a built page", () => {
  const routes = buildRoutes();
  const assets = publicAssets();

  // `_headers` / `_redirects` are Cloudflare control files, not routes; the
  // markdown export writes an index.md beside each route, so /foo/index.md is
  // covered by /foo/.
  const isAsset = (p: string) => assets.has(p) || /\.[a-z0-9]{2,5}$/i.test(p);

  for (const file of sourceFiles()) {
    const body = readFileSync(file, "utf8");
    const found = new Set<string>();
    for (const re of [HREF_RE, MD_LINK_RE]) {
      re.lastIndex = 0;
      let m: RegExpExecArray | null = re.exec(body);
      while (m) {
        found.add(m[1]!);
        m = re.exec(body);
      }
    }
    const rel = relative(ROOT, file);
    for (const href of found) {
      if (href === "/" || isAsset(href)) continue;
      const normalized = href.endsWith("/") ? href : `${href}/`;
      it(`${rel} → ${href}`, () => {
        expect(routes.has(normalized), `${rel} links to ${href}, which no page builds`).toBe(true);
      });
    }
  }
});
