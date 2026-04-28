// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import markdownExport from './plugins/markdown-export.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://endowment.dev',
    image: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'api.endowment.dev',
        }],
    },
    vite: {
        server: {
            allowedHosts: ['ose.localhost'],
        },
    },
    integrations: [sitemap({
        filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
    }), react(), markdownExport()],
});