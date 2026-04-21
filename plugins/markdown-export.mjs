import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROUTES = [
  { route: '/',                                   src: 'src/content/md/index.md' },
  { route: '/about/',                             src: 'src/content/md/about.md' },
  { route: '/community/',                         src: 'src/content/md/community.md' },
  { route: '/funding/',                           src: 'src/content/md/funding.md' },
  { route: '/faq/',                               src: 'src/content/md/faq.md' },
  { route: '/docs/',                              src: 'src/content/md/docs-index.md' },
  { route: '/docs/giving/',                       src: 'src/content/md/giving.md' },
  { route: '/docs/bylaws/',                       src: 'src/assets/foundation/docs/incorporation/bylaws.md' },
  { route: '/docs/act-of-incorporator/',          src: 'src/assets/foundation/docs/incorporation/act-of-incorporator.md' },
  { route: '/docs/board-uwc/',                    src: 'src/assets/foundation/docs/incorporation/board-uwc.md' },
  { route: '/docs/certificate-of-incorporation/', src: 'src/assets/foundation/docs/incorporation/cert-of-incorporation.md' },
  { route: '/docs/membership-policy/',            src: 'src/assets/foundation/docs/policies/membership-policy.md' },
];

const STATS_URL = 'https://data.endowment.dev/api/public/stats';
const DONORS_URL = 'https://data.endowment.dev/api/public/donors';

function humanizeDollars(n) {
  if (n >= 1_000_000) return `$${Math.round(n / 1_000_000)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${n.toLocaleString()}`;
}

function formatDonorLine(d) {
  const desc = d.description ? ` — ${d.description}` : '';
  return `- **${d.name}**${desc}`;
}

function buildDonorTierList(donors, className) {
  const tier = donors.filter((d) => d.type === 'person' && d.class === className);
  if (tier.length === 0) return '_No donors in this tier yet._';
  return tier.map(formatDonorLine).join('\n');
}

function buildOrgList(donors) {
  const orgs = donors.filter((d) => d.type === 'organization');
  if (orgs.length === 0) return '_No institutional donors yet._';
  return orgs.map(formatDonorLine).join('\n');
}

function buildOtherList(donors) {
  const other = donors.filter((d) => d.type === 'person' && d.class === '0-1K');
  if (other.length === 0) return '_No donors in this tier yet._';
  return other.map((d) => `- ${d.name}`).join('\n');
}

function substitute(source, vars) {
  return source.replace(/\{\{(\w+)\}\}/g, (m, key) => (key in vars ? vars[key] : m));
}

async function fetchVars() {
  try {
    const [stats, donors] = await Promise.all([
      fetch(STATS_URL).then((r) => r.json()),
      fetch(DONORS_URL).then((r) => r.json()),
    ]);
    return {
      fundSize: humanizeDollars(stats.endowment.fund_size),
      totalDonors: String(stats.donors.total),
      members: String(stats.donors.members),
      orgDonorCount: String(stats.donors.organizations),
      donorsTier100k: buildDonorTierList(donors, '100K+'),
      donorsTier10k: buildDonorTierList(donors, '10-100K'),
      donorsTier1k: buildDonorTierList(donors, '1-10K'),
      donorsTierOther: buildOtherList(donors),
      donorsOrgs: buildOrgList(donors),
    };
  } catch (err) {
    return { __error: err.message };
  }
}

export default function markdownExport() {
  return {
    name: 'markdown-export',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const distDir = new URL(dir).pathname;
        const projectRoot = process.cwd();

        const vars = await fetchVars();
        if (vars.__error) {
          logger.warn(`markdown-export: stats fetch failed (${vars.__error}) — placeholders will remain unsubstituted`);
        }

        let count = 0;
        for (const { route, src } of ROUTES) {
          try {
            const raw = await fs.readFile(path.join(projectRoot, src), 'utf8');
            const rendered = substitute(raw, vars);
            const target = path.join(distDir, route, 'index.md');
            await fs.mkdir(path.dirname(target), { recursive: true });
            await fs.writeFile(target, rendered, 'utf8');
            count += 1;
          } catch (err) {
            logger.warn(`markdown-export: skipping ${route} — ${err.message}`);
          }
        }
        logger.info(`markdown-export: wrote ${count}/${ROUTES.length} files`);
      },
    },
  };
}
