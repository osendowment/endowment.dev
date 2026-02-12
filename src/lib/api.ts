import { readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CACHE_DIR = join(process.cwd(), '.cache');
const MAX_AGE_MS = 6 * 60 * 60 * 1000;

function ensureDir(dir: string) {
    mkdirSync(dir, { recursive: true });
}

function isStale(path: string): boolean {
    try {
        return Date.now() - statSync(path).mtimeMs > MAX_AGE_MS;
    } catch {
        return true;
    }
}

function readJsonCache(key: string): any | null {
    try {
        return JSON.parse(readFileSync(join(CACHE_DIR, `${key}.json`), 'utf-8'));
    } catch {
        return null;
    }
}

function writeJsonCache(key: string, data: any) {
    ensureDir(CACHE_DIR);
    writeFileSync(join(CACHE_DIR, `${key}.json`), JSON.stringify(data));
}

export async function cachedFetch(url: string, cacheKey: string): Promise<any> {
    const path = join(CACHE_DIR, `${cacheKey}.json`);

    if (!isStale(path)) {
        const cached = readJsonCache(cacheKey);
        if (cached) return cached;
    }

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        writeJsonCache(cacheKey, data);
        return data;
    } catch {
        const cached = readJsonCache(cacheKey);
        if (cached) return cached;
        throw new Error(`API fetch failed for ${url} and no cached data available`);
    }
}

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

export async function fetchDonors(url: string): Promise<any[]> {
    const donors = await cachedFetch(url, 'donors');
    await validatePhotoUrls(donors);
    return donors;
}
