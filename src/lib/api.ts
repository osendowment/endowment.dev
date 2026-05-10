// In dev, hit the local Cloudflare Worker via portless (https://api.ose.localhost).
// In prod, hit the deployed Worker at https://api.endowment.dev.
export const API_BASE = import.meta.env.DEV
    ? 'https://api.ose.localhost'
    : 'https://api.endowment.dev';

export const STATS_URL = `${API_BASE}/public/stats`;
export const DONORS_URL = `${API_BASE}/public/donors`;
export const NOMINATE_URL = `${API_BASE}/public/nominate`;

// Force Gravatar to return 404 instead of its own default identicon, so the
// validator below nulls the URL out and the donor card falls back to our own
// identicon.js avatar.
function forceGravatar404(url: string): string {
    if (!/(?:^|\.)gravatar\.com\//.test(url)) return url;
    const u = new URL(url);
    u.searchParams.set('d', '404');
    return u.toString();
}

async function validatePhotoUrls(donors: any[]): Promise<void> {
    const checks = donors
        .filter((d: any) => d.picture_url)
        .map(async (d: any) => {
            d.picture_url = forceGravatar404(d.picture_url);
            try {
                const res = await fetch(d.picture_url, { method: 'HEAD' });
                const ct = res.headers.get('content-type') || '';
                if (!res.ok || !ct.startsWith('image/')) {
                    d.picture_url = null;
                }
            } catch {
                d.picture_url = null;
            }
        });
    await Promise.all(checks);
}

export async function fetchStats(): Promise<any> {
    return fetch(STATS_URL).then(r => r.json());
}

export async function fetchDonors(url: string = DONORS_URL): Promise<any[]> {
    const donors = await fetch(url).then(r => r.json());
    await validatePhotoUrls(donors);
    return donors;
}
