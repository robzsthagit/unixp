#!/bin/sh
set -x

rm -rf /app/tmp/pids/server.pid
rm -rf /app/tmp/cache/*

BUNDLE_PATH=/gems bundle install

pnpm store prune
pnpm install --force || true

echo "Ready to run Vite development server."

exec "$@"
