#!/bin/bash
# Reconstruit Showdex (https://github.com/doshidak/showdex) en mode « intégré au site »
# et le copie dans client/play.pokemonshowdown.com/showdex/.
# Il faut Node 24 et pnpm 10 (npm install -g pnpm@10).
set -euo pipefail
VERSION=165abdb05ad08c5b286f71e21cc1907852efd76f # Showdex 1.4.2
ICI="$(cd "$(dirname "$0")" && pwd)"
SITE="$(cd "$ICI/../.." && pwd)"
TRAVAIL="$(mktemp -d)"
git clone -q https://github.com/doshidak/showdex.git "$TRAVAIL/showdex"
cd "$TRAVAIL/showdex"
git checkout -q "$VERSION"
git apply "$ICI/cobblemonshowdown.patch"
pnpm install --ignore-scripts
PROD_ANALYZE_BUNDLES=false pnpm build:standalone
DEST="$SITE/client/play.pokemonshowdown.com/showdex"
rm -rf "$DEST"
mkdir -p "$DEST"
cp -r dist/standalone/. "$DEST/"
rm -f "$DEST"/*.map
cp LICENSE "$DEST/LICENSE"
echo "Showdex reconstruit dans $DEST"
