#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

# Install once, then reuse node_modules for faster local starts.
if [ ! -d "node_modules" ]; then
  npm install
fi

# Expose on LAN too; useful for mobile viewport tests from another device.
npm run dev -- --host 0.0.0.0
