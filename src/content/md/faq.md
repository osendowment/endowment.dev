# FAQ

Frequently asked questions about the Open Source Endowment. Feel free to raise issues in our [GitHub repo](https://github.com/osendowment/foundation) — the best Q&As will be added to this page.

Sections: [Purpose](#purpose) · [Donations](#donations) · [Governance](#governance) · [Investments](#investments) · [Grants](#grants) · [Other](#other)

## Purpose

### What is the Open Source Endowment (OSE)?

OSE is the world's first endowment fund for open source software. It invests donations into a low-risk portfolio and spends only the returns to fund maintainers of critical-but-underfunded OSS across the globe. OSE is a US 501(c)(3) public charity, incorporated on February 14, 2025.

### Why does OSS need sustainable funding?

Open source runs the modern world: [over 95% of codebases](https://www.blackduck.com/blog/appsec-decoded-open-source-trends-ossra-report.html) rely on OSS, with applications averaging 500+ open source components. Like roads and bridges, OSS requires ongoing maintenance to fix bugs, patch security issues, and adapt to changes.

Yet [86% of contributors](https://opensourcefundingsurvey2024.com/) are unpaid, and many critical projects lack resources. Without sustainable funding, this is a very fragile foundation for the global software supply chain — leading to incidents like [Heartbleed](https://en.wikipedia.org/wiki/Heartbleed) (2014) and [Log4Shell](https://en.wikipedia.org/wiki/Log4Shell) (2021).

### Why are current funding solutions not truly sustainable?

Open source has various funding sources: tech companies, nonprofit foundations, government programs, developers, etc. However, most depend on volatile annual budgets or ad-hoc donations that fluctuate with economic and political conditions.

A tech market instability, a corporate strategy shift, or elections can indirectly cut OSS budgets overnight — leaving critical projects without support and significantly increasing the probability of tech incidents across the globe.

### Why is OSE unique and sustainable?

OSE complements existing solutions by filling the funding gaps in a sustainable way. It is the only open source institution that simultaneously combines three features:

- **Sustainable funding** — an endowment model that spends only investment returns, providing stable cash flow independent of annual donations or volatile budgets.
- **Systemic focus** — targets critical underfunded OSS, prioritizing the "long tail" instead of popular, large, or vendor-specific supply chains.
- **Scalability and efficiency** — a transparent, digital-first approach to attracting donors and selecting grantees, designed to grow over time.

By combining all three into a single nonprofit product, OSE provides a predictable, perpetual funding stream for maintainers of the most critical OSS.

## Donations

### How do I donate?

People and organizations can donate at [endowment.dev](https://www.every.org/osendowment). We accept card payments, Apple/Google Pay, US and international bank transfers, donor-advised funds (DAF), crypto, and public and private stock — all non-USD assets are automatically converted. See [ways to give](/docs/giving/) for the full list.

### Where does my donation go?

Every public donation to OSE goes directly to the **endowment fund** — it is invested, not spent. Only the investment returns are used to fund grants to open source projects.

### What happens when I donate more than $1,000?

People who give $1,000 or more become **OSE Members** — with governance rights including advising the Board on strategy and grant-making, appointing community-nominated directors, and voting on key decisions. Each $1,000 grants one year of membership. See the [membership policy](/docs/membership-policy/) for details.

### Are donations tax-deductible for US donors?

**Yes.** OSE is a US 501(c)(3) tax-exempt public charity (EIN 33-3502715), so donations are [tax-deductible](https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contribution-deductions) to the full extent permitted by law. Individuals can deduct up to 60% of adjusted gross income for cash donations; corporations up to 25% of taxable income. Unused deductions carry forward for up to five years.

## Governance

### Why did OSE accept only individuals as founding donors?

OSE is a grassroots nonprofit governed by individual donors — people with a passion for open source and skin in the game. Endowments require a 20+ year horizon, and most organizations plan for far shorter periods. We are intentionally building a lasting global neutral institution, not a corporate nonprofit — similar to the best universities.

### Does OSE accept corporate and other institutional donors?

**Yes.** We already have {{orgDonorCount}} [institutional donors](/community/) in our community, and welcome more companies and foundations that care about open source. However, we do not offer them governing rights — to preserve long-term neutrality and alignment with the global open source community.

### How does OSE governance work now?

The **Board of Directors** is the main governing body, responsible for OSE strategy, investments, grants, etc. It combines board-appointed and member-elected directors. All directors serve unpaid and must be Members. The Board meets at least four times a year; meeting minutes are published in our [docs](/docs/). See the [bylaws](/docs/bylaws/) for full details.

The **Executive Director** manages day-to-day operations and reports to the Board. The ED is appointed by the Board for up to three years and must be a Member. OSE also engages **Advisors** — thematic experts who help the Board on various topics, and unlike directors and officers, are not required to be Members.

### Are discussions regarding OSE open to the public?

Transparency is a foundational value of OSE as a community-driven nonprofit. Key documents and board meeting minutes are published in our [docs](/docs/), and most discussions happen openly in our [GitHub repo](https://github.com/osendowment/foundation).

### How can I actively participate in OSE governance?

OSE is still at a very early stage and would greatly benefit from new qualified board directors and advisors. The best way to be nominated (by the Board or Members) is to become a Member and actively help with one of the key elements of the endowment: fundraising, investing, grantmaking, etc.

### What will OSE governance look like in the long term?

OSE is designed to become a self-governing institution run by a diverse community of Members with personal commitments to open source. Over time, they will elect more and more Board directors. The Board, meanwhile, is focused on building scalable, transparent systems — so OSE operates efficiently with minimal management overhead and remains open for new contributors.

## Investments

### How are donated funds invested?

All donations are put into diversified investments managed by a professional asset manager. The board chose [Infinite Giving](https://www.infinitegiving.com/), specializing in US nonprofits, as our outsourced CIO, targeting a 7–8% return.

### How is investment income spent?

All expected investment income from donations to the endowment is spent on grants to open source projects. The target spend rate is **5%** of the endowment fund per year. The fund has already generated its first profit, and the first funding round is underway in Q2 2026.

## Grants

### What principles guide OSE's grantmaking?

OSE strives to sustainably address funding gaps in the OSS funding landscape. Our key principles:

- **Long-term impact** — priority on fixing underlying issues (e.g., maintainer burnout) over their surface-level consequences (e.g., vulnerabilities). Many organizations already do "firefighting" in open source; OSE's role is funding preventive "fire safety measures" in the most critical buildings.
- **Follow the market** — OSE is not opinionated about which software deserves more support, basing its judgment on how the world actually consumes OSS. The model traces links from popular ecosystems (like Python) to underlying packages, naturally prioritizing low-level infrastructure libraries (like C/C++).
- **Open and transparent** — an open data-driven [selection model](https://github.com/osendowment/model) co-developed with OSE Members — people who actually power it with funding. Human-in-the-loop elements are required at the due-diligence stage.

### How does the selection model work?

Within each ecosystem, OSE scores projects on Value and Risk using open data points. Target format: microgrants (~$5,000) to high-risk candidates among the most valuable OSS, approved by the board after due diligence.

- **Value for the ecosystem**
  - Dependencies and downloads
  - Potential losses if removed from the global tree
  - Endorsements from OSE donors, OSS foundations, etc.
- **Risk of the project**
  - Complexity: LOCs, etc.
  - Maintainers: active count, bus factor, MTTR for issues
  - Security: OpenSSF score, CVEs, etc.
  - Funding: GitHub Sponsors, known funding, etc.

Data-driven targeting first, then human review — e.g., checking if the project is already well-funded. Public materials on the model are in our [repo](https://github.com/osendowment/model).

### Does OSE support OSS projects that have a related tech business?

If an open source project can turn into a sustainable business, it probably should.

OSE supports only nonprofit projects, excluding VC-funded startups and projects with corporate origins. One useful test is trademark ownership. Examples of great projects OSE **will not** support:

- **Kubernetes** — originated at Google, which initially owned its trademark.
- **ClickHouse** — actively commercialized by ClickHouse Inc., which owns its trademark.

### What is funding provided for?

OSE provides funding based on two mental models:

- **Forward-looking grants** — funding a specific, measurable chunk of work to de-risk the project (e.g., fixing a class of vulnerabilities, onboarding a co-maintainer).
- **Backward-looking awards** — recognizing maintainers who sustained critical projects for years without adequate support, helping reduce burnout.

Impact is measured both quantitatively (data-driven metrics) and qualitatively (check-in calls). We will highlight top maintainers so the tech community can support them too.

## Other

### Why did nobody build an OSS endowment before OSE?

**Endowments require a 20+ year horizon** — most organizations, including charities, optimize for quick wins and annual budgets. Spending only ~5% of donations per year is a hard sell.

**The target must have an unlimited lifespan** — most OSS communities center around specific software (Linux), languages (Python), or people, all of which have a limited lifespan. Project-specific endowments become irrelevant when their target fades. OSS-at-large is an open-ended target.

**It requires a rare intersection of expertise** — open source, endowment governance, fundraising, and nonprofit law. Most OSS people are unfamiliar with endowments, especially outside the US/UK. Most philanthropists are unfamiliar with open source — this intersection barely existed 25 years ago.

### How can OSE evolve in the long term, especially in an AI-powered world?

We believe open source will remain the cornerstone of global tech infrastructure 50 years from now — it is not just code, but a global cultural and social phenomenon.

Even before modern AI tools, the imbalance was clear: an exponentially growing codebase with deepening interdependencies, yet a stagnant number of active (mostly unpaid) maintainers — especially for low-level, critical projects.

AI code generation accelerates both sides: maintainers gain productivity and the barrier to contributions falls, but codebase volume and complexity grow even faster. AI will likely only widen the gap between them.

AI is becoming great at solving tech problems, but human issues — limited attention and motivation, burnout — will remain, and so will the need for sustainable funding. Thanks to AI, OSE will likely achieve its goals faster than planned.

### Can [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) cause any scaling problems?

At current scale, this isn't a concern. The tech industry has been capable of building robust systems with automated inputs that can't be easily gamed — like Google Search, YouTube, and all large social networks, including GitHub. The selection model can't be perfect, but we aim to make it openly developed, and "with enough eyeballs, all bugs are shallow."

### Does OSE somehow relate to blockchain technologies?

From a governance perspective, OSE might resemble a DAO: transparent, decentralized, skin in the game. However, OSE is a standard US public charity and not a crypto organization by any means. That said, we accept crypto donations (via Every.org).

### How does OSE work with existing OSS nonprofits?

OSE is designed as a next-gen solution for the open source maintenance problem. It mainly attracts donations from a new category of donors — tech individuals — and thus increases overall funding of the global open source ecosystem. It complements existing foundations, and we are happy to collaborate with them.
