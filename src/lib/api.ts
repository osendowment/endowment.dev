import { readFileSync, writeFileSync, mkdirSync, statSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const CACHE_DIR = join(process.cwd(), '.cache');
const PHOTO_CACHE_DIR = join(process.cwd(), 'public', 'cache', 'photos');
const MAX_AGE_MS = 24 * 60 * 60 * 1000;

export function clearCache() {
    for (const dir of [CACHE_DIR, PHOTO_CACHE_DIR]) {
        rmSync(dir, { recursive: true, force: true });
    }
}

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

function donorSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

async function cachePhoto(pictureUrl: string, slug: string): Promise<void> {
    const res = await fetch(pictureUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    writeFileSync(join(PHOTO_CACHE_DIR, `${slug}.webp`), Buffer.from(await res.arrayBuffer()));
}

export async function cachedFetchDonors(url: string): Promise<any[]> {
    const donors = await cachedFetch(url, 'donors');

    ensureDir(PHOTO_CACHE_DIR);

    const photoJobs = donors
        .filter((d: any) => d.picture_url)
        .map(async (d: any) => {
            const slug = donorSlug(d.name);
            const localFile = join(PHOTO_CACHE_DIR, `${slug}.webp`);

            if (isStale(localFile)) {
                try {
                    await cachePhoto(d.picture_url, slug);
                } catch { /* keep existing cached photo if download fails */ }
            }

            if (existsSync(localFile)) {
                d.picture_url = `/cache/photos/${slug}.webp`;
            }
        });

    await Promise.all(photoJobs);
    return donors;
}
