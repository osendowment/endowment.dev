// © Open Source Endowment Foundation
// SPDX-License-Identifier: Apache-2.0
//
// Live monitoring dashboard. Two responsibilities:
//   1. Probe public API endpoints on both layers (DB-backed `data.endowment.dev`
//      and CF Worker `api.endowment.dev`) — mirrors the old Reflex Public API
//      page from the data/ repo.
//   2. Compare data across DB → API → Website to surface drift.
//
// All probing happens client-side at page-load time so the dashboard reflects
// reality at the moment of visit, not at the time the static site was built.

import { useEffect, useMemo, useState } from 'react';

type Layer = 'db' | 'api' | 'website';

const ENDPOINTS = [
    { path: '/public/', description: 'API index with available endpoints' },
    { path: '/public/stats', description: 'Donation totals, donor/member counts, endowment fund breakdown' },
    { path: '/public/donors', description: 'Donor list with names, tiers, photos, and social links' },
];

const HOSTS: { layer: Exclude<Layer, 'website'>; label: string; base: string; tag: string }[] = [
    { layer: 'db', label: 'data.endowment.dev', base: 'https://data.endowment.dev', tag: 'DB' },
    { layer: 'api', label: 'api.endowment.dev', base: 'https://api.endowment.dev', tag: 'API' },
];

interface Probe {
    url: string;
    description: string;
    status: number | null;
    ms: number | null;
    body: unknown;
    error: string | null;
    loading: boolean;
}

async function probe(url: string): Promise<Pick<Probe, 'status' | 'ms' | 'body' | 'error'>> {
    const t0 = performance.now();
    try {
        const res = await fetch(url, { method: 'GET' });
        const ms = Math.round(performance.now() - t0);
        const ct = res.headers.get('content-type') || '';
        let body: unknown = null;
        if (ct.includes('json')) body = await res.json();
        else body = (await res.text()).slice(0, 500);
        return { status: res.status, ms, body, error: null };
    } catch (e: any) {
        return { status: null, ms: Math.round(performance.now() - t0), body: null, error: e?.message || String(e) };
    }
}

function StatusPill({ status, error }: { status: number | null; error: string | null }) {
    let bg = '#9ca3af', label = '…';
    if (error) { bg = '#dc2626'; label = 'ERR'; }
    else if (status === null) { bg = '#9ca3af'; label = '…'; }
    else if (status >= 200 && status < 300) { bg = '#10b981'; label = String(status); }
    else if (status >= 300 && status < 400) { bg = '#3498db'; label = String(status); }
    else { bg = '#dc2626'; label = String(status); }
    return (
        <span style={{
            background: bg, color: '#fff', fontSize: '0.7rem', fontWeight: 700,
            padding: '0.2rem 0.5rem', borderRadius: '0.25rem', flexShrink: 0,
        }}>{label}</span>
    );
}

function MethodPill() {
    return (
        <span style={{
            background: '#10b981', color: '#fff', fontSize: '0.7rem', fontWeight: 700,
            padding: '0.2rem 0.5rem', borderRadius: '0.25rem', flexShrink: 0,
        }}>GET</span>
    );
}

function EndpointCard({ p }: { p: Probe }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{
            padding: '1rem', background: '#fff', border: '1px solid var(--color-section-border)',
            borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MethodPill />
                <StatusPill status={p.status} error={p.error} />
                <a href={p.url} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 600,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    minWidth: 0, flex: 1,
                }}>{p.url}</a>
                {p.ms !== null && <span style={{ fontSize: '0.75rem', color: 'var(--color-text-dark-secondary, #666)' }}>{p.ms}ms</span>}
                <button onClick={() => setOpen(o => !o)} style={{
                    background: 'transparent', border: 0, cursor: 'pointer', padding: '0.2rem 0.4rem',
                    fontSize: '0.8rem', color: '#666',
                }}>{open ? '▲' : '▼'}</button>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-dark-secondary, #666)' }}>{p.description}</div>
            {open && (
                <pre style={{
                    margin: 0, padding: '0.75rem', background: '#f8f9fa',
                    border: '1px solid var(--color-section-border)', borderRadius: '0.25rem',
                    fontSize: '0.7rem', maxHeight: '400px', overflow: 'auto', whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                }}>{p.error ? `ERROR: ${p.error}` : (p.loading ? 'loading…' : JSON.stringify(p.body, null, 2))}</pre>
            )}
        </div>
    );
}

interface Stats { donors?: { total?: number; members?: number }; donations?: { total_amount?: number } }

interface ConsistencyRow {
    field: string;
    db: string | number | null;
    api: string | number | null;
    website: string | number | null;
}

function ComparisonRow({ row }: { row: ConsistencyRow }) {
    const vals = [row.db, row.api, row.website].filter(v => v !== null);
    const allMatch = vals.length > 1 && vals.every(v => String(v) === String(vals[0]));
    const ok = vals.length > 1 && allMatch;
    const cell = (v: string | number | null) => (
        <td style={{ padding: '0.5rem 0.8rem', fontFamily: 'monospace', fontSize: '0.85rem',
            color: v === null ? '#9ca3af' : 'var(--color-text-dark, #222)' }}>
            {v === null ? '—' : String(v)}
        </td>
    );
    return (
        <tr style={{ borderTop: '1px solid var(--color-section-border)' }}>
            <td style={{ padding: '0.5rem 0.8rem', fontWeight: 500 }}>{row.field}</td>
            {cell(row.db)}{cell(row.api)}{cell(row.website)}
            <td style={{ padding: '0.5rem 0.8rem', textAlign: 'center', fontSize: '1rem' }}>
                {vals.length < 2 ? '—' : (ok ? <span style={{ color: '#10b981' }}>✓</span> : <span style={{ color: '#dc2626' }}>✗</span>)}
            </td>
        </tr>
    );
}

export default function Monitoring() {
    const [probes, setProbes] = useState<Record<string, Probe>>({});
    const [stats, setStats] = useState<Record<Exclude<Layer, 'website'>, Stats | null>>({ db: null, api: null });
    const [donorCounts, setDonorCounts] = useState<Record<Layer, number | null>>({ db: null, api: null, website: null });
    const [photo, setPhoto] = useState<{ db?: string; api?: string }>({});

    // Initialize all endpoint probes
    useEffect(() => {
        const initial: Record<string, Probe> = {};
        for (const h of HOSTS) for (const ep of ENDPOINTS) {
            const url = h.base + ep.path;
            initial[url] = { url, description: ep.description, status: null, ms: null, body: null, error: null, loading: true };
        }
        setProbes(initial);

        // Run all probes concurrently
        for (const h of HOSTS) for (const ep of ENDPOINTS) {
            const url = h.base + ep.path;
            probe(url).then(r => {
                setProbes(p => ({ ...p, [url]: { ...p[url], ...r, loading: false } }));
                if (ep.path === '/public/stats' && r.body && typeof r.body === 'object') {
                    setStats(s => ({ ...s, [h.layer]: r.body as Stats }));
                }
                if (ep.path === '/public/donors' && Array.isArray(r.body)) {
                    setDonorCounts(d => ({ ...d, [h.layer]: (r.body as any[]).length }));
                    const withPhoto = (r.body as any[]).filter(x => x?.picture_url);
                    if (withPhoto.length) {
                        const random = withPhoto[Math.floor(Math.random() * withPhoto.length)];
                        setPhoto(p => ({ ...p, [h.layer]: random.picture_url }));
                    }
                }
            });
        }

        // Website check: scrape /community/ and count rendered donor cards
        fetch('/community/').then(r => r.text()).then(html => {
            const matches = html.match(/class="donor-mini-profile/g);
            // Last list on the page is the compact "Other donors" list — those still
            // count as donors. Total cards = all matches.
            setDonorCounts(d => ({ ...d, website: matches ? matches.length : 0 }));
        }).catch(() => {});
    }, []);

    const consistency: ConsistencyRow[] = useMemo(() => [
        { field: 'Donor count', db: donorCounts.db, api: donorCounts.api, website: donorCounts.website },
        { field: 'donors.total (stats)', db: stats.db?.donors?.total ?? null, api: stats.api?.donors?.total ?? null, website: null },
        { field: 'donors.members (stats)', db: stats.db?.donors?.members ?? null, api: stats.api?.donors?.members ?? null, website: null },
        { field: 'donations.total_amount (stats)', db: stats.db?.donations?.total_amount ?? null, api: stats.api?.donations?.total_amount ?? null, website: null },
    ], [stats, donorCounts]);

    const groups = HOSTS.map(h => ({
        ...h,
        probes: ENDPOINTS.map(ep => probes[h.base + ep.path]).filter(Boolean),
    }));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Section 1: Data consistency across layers */}
            <section>
                <h2 style={{ margin: '0 0 0.4rem' }}>Data consistency: DB vs API vs Website</h2>
                <p style={{ margin: '0 0 1rem', color: 'var(--color-text-dark-secondary, #666)', fontSize: '0.9rem' }}>
                    Comparing values across the three layers. Mismatches indicate drift between the source-of-truth DB,
                    the public Worker API, and what the static site is actually rendering.
                </p>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--color-section-border)', borderRadius: '0.5rem' }}>
                        <thead>
                            <tr style={{ background: '#f8f9fa', textAlign: 'left' }}>
                                <th style={{ padding: '0.6rem 0.8rem', fontSize: '0.85rem' }}>Field</th>
                                <th style={{ padding: '0.6rem 0.8rem', fontSize: '0.85rem' }}>DB (data.endowment.dev)</th>
                                <th style={{ padding: '0.6rem 0.8rem', fontSize: '0.85rem' }}>API (api.endowment.dev)</th>
                                <th style={{ padding: '0.6rem 0.8rem', fontSize: '0.85rem' }}>Website (/community/)</th>
                                <th style={{ padding: '0.6rem 0.8rem', fontSize: '0.85rem', textAlign: 'center' }}>Match</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consistency.map(r => <ComparisonRow key={r.field} row={r} />)}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Section 2: Endpoint probes per host */}
            {groups.map(g => (
                <section key={g.label}>
                    <h2 style={{ margin: '0 0 0.4rem' }}>{g.label} <span style={{
                        fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.5rem',
                        background: g.tag === 'DB' ? '#5ba9ee' : '#9b59b6', color: '#fff',
                        borderRadius: '0.25rem', verticalAlign: 'middle', marginLeft: '0.5rem',
                    }}>{g.tag}</span></h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {g.probes.map(p => <EndpointCard key={p.url} p={p} />)}
                    </div>
                </section>
            ))}

            {/* Section 3: Random donor photo from each layer */}
            <section>
                <h2 style={{ margin: '0 0 0.4rem' }}>Random donor photo</h2>
                <p style={{ margin: '0 0 1rem', color: 'var(--color-text-dark-secondary, #666)', fontSize: '0.9rem' }}>
                    Picks a donor at random from each layer and renders their photo URL. Broken images here mean the layer's
                    photo-serving path is misconfigured.
                </p>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    {(['db', 'api'] as const).map(layer => {
                        const url = photo[layer];
                        const tag = layer === 'db' ? 'DB' : 'API';
                        return (
                            <div key={layer} style={{
                                padding: '1rem', background: '#fff',
                                border: '1px solid var(--color-section-border)', borderRadius: '0.5rem',
                                minWidth: '220px',
                            }}>
                                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                                    {tag} ({layer === 'db' ? 'data.endowment.dev' : 'api.endowment.dev'})
                                </div>
                                {url ? (
                                    <>
                                        <img src={url} alt="random donor" width={80} height={80}
                                             style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-section-border)' }} />
                                        <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', marginTop: '0.5rem',
                                                      wordBreak: 'break-all', color: 'var(--color-text-dark-secondary, #666)' }}>
                                            <a href={url} target="_blank" rel="noreferrer">{url}</a>
                                        </div>
                                    </>
                                ) : <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>—</span>}
                            </div>
                        );
                    })}
                </div>
            </section>

        </div>
    );
}
