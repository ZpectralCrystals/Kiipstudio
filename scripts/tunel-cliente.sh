#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

npm run build

PORT="${PORT:-4322}"
HOST="${HOST:-127.0.0.1}"

if ! lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  HOST=0.0.0.0 PORT="$PORT" node scripts/serve-static.mjs >/tmp/klip-static.log 2>&1 &
fi

for _ in {1..30}; do
  if curl -fsS "http://127.0.0.1:$PORT/" >/dev/null 2>&1; then
    break
  fi
  sleep 0.5
done

cloudflared tunnel --url "http://127.0.0.1:$PORT" --no-autoupdate
