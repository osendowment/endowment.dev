type AcceptEntry = { type: string; q: number; specificity: number };

function parseAccept(header: string): AcceptEntry[] {
  return header
    .split(',')
    .map((raw) => {
      const parts = raw.trim().split(';').map((s) => s.trim());
      const type = parts[0].toLowerCase();
      if (!type) return null;
      let q = 1;
      for (const param of parts.slice(1)) {
        const [name, value] = param.split('=').map((s) => s.trim());
        if (name === 'q') {
          const parsed = Number(value);
          if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
        }
      }
      const specificity = type === '*/*' ? 0 : type.endsWith('/*') ? 1 : 2;
      return { type, q, specificity };
    })
    .filter((e): e is AcceptEntry => e !== null);
}

function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === '*/*') return true;
  if (entry.type.endsWith('/*')) return candidate.startsWith(entry.type.slice(0, -1));
  return entry.type === candidate;
}

function preferredType(header: string | null, produces: string[]): string | null {
  if (!header) return produces[0] ?? null;
  const entries = parseAccept(header);
  if (entries.length === 0) return produces[0] ?? null;

  let bestType: string | null = null;
  let bestQ = -1;
  let bestPosition = Infinity;

  for (const candidate of produces) {
    let matched: AcceptEntry | null = null;
    let matchedPosition = Infinity;
    for (let idx = 0; idx < entries.length; idx++) {
      const e = entries[idx];
      if (!matches(e, candidate)) continue;
      if (
        matched === null ||
        e.specificity > matched.specificity ||
        (e.specificity === matched.specificity && idx < matchedPosition)
      ) {
        matched = e;
        matchedPosition = idx;
      }
    }
    if (matched === null) continue;
    if (matched.q <= 0) continue;

    if (matched.q > bestQ || (matched.q === bestQ && matchedPosition < bestPosition)) {
      bestQ = matched.q;
      bestPosition = matchedPosition;
      bestType = candidate;
    }
  }

  return bestType;
}

function appendVaryAccept(headers: Headers): void {
  const existing = headers.get('vary');
  if (!existing) {
    headers.set('Vary', 'Accept');
    return;
  }
  const tokens = existing.split(',').map((s) => s.trim().toLowerCase());
  if (!tokens.includes('accept')) {
    headers.set('Vary', `${existing}, Accept`);
  }
}

function markdownPath(pathname: string): string {
  const clean = pathname.replace(/\/$/, '') || '/';
  if (clean === '/') return '/index.md';
  return `${clean}/index.md`;
}

const STATIC_EXT = /\.(?:css|js|mjs|map|png|jpe?g|webp|gif|svg|avif|ico|woff2?|ttf|otf|eot|xml|txt|json|pdf|mp4|webm|mp3|wav|ogg|zip)$/i;

interface Env {
  ASSETS: Fetcher;
}

export const onRequest: PagesFunction<Env> = async ({ request, env, next }) => {
  const url = new URL(request.url);

  if (STATIC_EXT.test(url.pathname) || url.pathname.startsWith('/api/')) {
    return next();
  }

  const accept = request.headers.get('accept');
  const chosen = preferredType(accept, ['text/html', 'text/markdown']);

  if (chosen === null && accept) {
    const res = new Response(
      'Not Acceptable\n\nAvailable: text/html, text/markdown\n',
      { status: 406, headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
    );
    appendVaryAccept(res.headers);
    return res;
  }

  if (chosen === 'text/markdown') {
    const mdUrl = new URL(url);
    mdUrl.pathname = markdownPath(url.pathname);
    const mdReq = new Request(mdUrl.toString(), request);
    const mdRes = await env.ASSETS.fetch(mdReq);
    if (mdRes.status === 200) {
      const res = new Response(mdRes.body, mdRes);
      res.headers.set('Content-Type', 'text/markdown; charset=utf-8');
      appendVaryAccept(res.headers);
      return res;
    }
    if (!preferredType(accept, ['text/html'])) {
      const res = new Response(
        'Not Acceptable\n\nMarkdown sibling missing and HTML is not acceptable.\n',
        { status: 406, headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
      );
      appendVaryAccept(res.headers);
      return res;
    }
  }

  const htmlRes = await next();
  const res = new Response(htmlRes.body, htmlRes);
  appendVaryAccept(res.headers);

  if (res.headers.get('content-type')?.includes('text/html')) {
    const mdUrl = new URL(url);
    mdUrl.pathname = markdownPath(url.pathname);
    const head = await env.ASSETS.fetch(new Request(mdUrl.toString(), { method: 'HEAD' }));
    if (head.status === 200) {
      const linkValue = `<${mdUrl.pathname}>; rel="alternate"; type="text/markdown"`;
      const existing = res.headers.get('link');
      res.headers.set('Link', existing ? `${existing}, ${linkValue}` : linkValue);
    }
  }

  return res;
};
