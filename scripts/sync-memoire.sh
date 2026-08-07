#!/bin/bash
# Synchronise la mémoire persistante de Claude (hors du repo) vers memoire/ (dans le repo).
# À lancer avant chaque commit du hub — ou laisser Claude le faire (règle dans CLAUDE.md).
set -euo pipefail

SRC="$HOME/.claude/projects/-Users-Hakim-Documents-Boutiques-drop/memory/"
DST="$(cd "$(dirname "$0")/.." && pwd)/memoire/"

if [ ! -d "$SRC" ]; then
  echo "Source mémoire introuvable : $SRC" >&2
  exit 1
fi

mkdir -p "$DST"
rsync -a --delete "$SRC" "$DST"
echo "Mémoire synchronisée : $SRC → $DST"
