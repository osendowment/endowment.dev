export const API_BASE = 'https://api.endowment.dev';

export const STATS_URL = `${API_BASE}/api/public/stats`;
export const DONORS_URL = `${API_BASE}/api/public/donors`;
export const NOMINATE_URL = `${API_BASE}/api/public/nominate`;

async function validatePhotoUrls(donors: any[]): Promise<void> {
    const checks = donors
        .filter((d: any) => d.picture_url)
        .map(async (d: any) => {
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
