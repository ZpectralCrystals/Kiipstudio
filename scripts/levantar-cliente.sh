#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

# Production preview for client review and Lighthouse. Avoids Astro dev/HMR JavaScript.
if [ ! -d "node_modules" ]; then
  npm install
fi

npm run build
HOST="${HOST:-0.0.0.0}" PORT="${PORT:-4322}" node scripts/serve-static.mjs
