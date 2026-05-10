import Identicon from 'identicon.js';
import { createHash } from 'node:crypto';

export function identiconDataUrl(seed: string, size = 96): string {
    const hash = createHash('md5').update(seed).digest('hex');
    const svgBase64 = new Identicon(hash, {
        size,
        format: 'svg',
        background: [240, 240, 240, 255],
    }).toString();
    return `data:image/svg+xml;base64,${svgBase64}`;
}
