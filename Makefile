# © 2025 Vlad-Stefan Harbuz <vlad@vlad.website>
# SPDX-License-Identifier: Apache-2.0

# This file deploys to a machine named “yavin” that only Vlad has access to.

.PHONY: site publish-prod publish-staging

site:
	npx astro build

publish-prod: site
	rsync -Pvrthl --delete --exclude .git --info=progress2 dist/ yavin:/srv/www/dev.endowment

publish-staging: site
	rsync -Pvrthl --delete --exclude .git --info=progress2 dist/ yavin:/srv/www/ose-staging
