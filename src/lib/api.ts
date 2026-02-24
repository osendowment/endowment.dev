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
    const donors = await fetch(url).then(r => r.json());
    await validatePhotoUrls(donors);
    return donors;
}
