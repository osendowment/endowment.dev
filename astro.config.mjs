// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import playformInline from '@playform/inline';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://endowment.dev',
    image: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'data.endowment.dev',
        }],
    },
    integrations: [sitemap({
        filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
    }), playformInline(), react()],
});