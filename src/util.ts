export const EVERYORG_BUTTON_URL = 'https://www.every.org/osendowment?method=card%2Cbank%2Cpay%2Cstocks%2Cdaf%2Ccrypto&suggestedAmounts=100%2C500%2C1000%2C2000&designation=Endowment+Fund&utm_campaign=donate-link&require_share_info=true#/donate';

// Boundaries are inclusive. With `>` here, exactly 1_000_000 fell through to
// the thousands branch and rendered "1000K" on the homepage hero, and exactly
// 1_000 rendered "1,000" instead of "1K". `humanizeDollars` in
// plugins/markdown-export.mjs has always used `>=`, so at either boundary the
// HTML pages and the exported /index.md disagreed. util.test.ts pins the two
// against each other across the boundary table.
export function humanize(n) {
    const thousand = 1000;
    const million = 1000000;
    if (n >= million) {
        return Math.round(n / million) + 'M';
    }
    if (n >= thousand) {
        return Math.round(n / thousand) + 'K';
    }
    return n.toLocaleString();
}
