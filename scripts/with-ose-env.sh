#!/bin/bash
# Binds the OSE-scoped Cloudflare token for whatever command follows.
#
# This repo deploys to the OSE Cloudflare account. wrangler reads the token
# from CLOUDFLARE_API_TOKEN, but the OSE token lives in
# CLOUDFLARE_API_TOKEN_OSE so it doesn't collide with a personal token that
# may already be in CLOUDFLARE_API_TOKEN for another account.
#
# The repo's `.envrc` binds it automatically when direnv is installed; this
# wrapper does the same for `bun run deploy` so the documented command works
# without direnv.
set -u
if [ -n "${CLOUDFLARE_API_TOKEN_OSE:-}" ]; then
  export CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN_OSE"
fi
exec "$@"
