// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://endowment.dev',
    integrations: [
        sitemap({
            filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
        }),
    ],
});
