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

export function getRandomPlaceholderImage() {
    const prefix = "/images/endorsements/placeholder-";
    const suffix = ".jpg";
    const mids = ["a", "b", "c", "d", "e"];
    const randomMid = mids[Math.floor(Math.random() * mids.length)];
    return prefix + randomMid + suffix;
}
