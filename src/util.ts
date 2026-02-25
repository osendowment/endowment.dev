export const EVERYORG_BUTTON_URL = 'https://www.every.org/osendowment?method=card%2Cbank%2Cpay%2Cstocks%2Cdaf%2Ccrypto&suggestedAmounts=100%2C500%2C1000%2C2000&designation=Endowment+Fund&utm_campaign=donate-link&require_share_info=true#/donate';

export function humanize(n) {
    const thousand = 1000;
    const million = 1000000;
    if (n > million) {
        return Math.round(n / million) + 'M';
    }
    if (n > thousand) {
        return Math.round(n / thousand) + 'K';
    }
    return n.toLocaleString();
}
