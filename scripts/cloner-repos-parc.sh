#!/usr/bin/env bash
# Met à disposition des agents cloud les repos du parc que l'environnement ne checkoute pas.
#
# Cursor ne checkoute qu'un repo par environnement (cf. environment.schema.json : aucun champ
# multi-repo, `repositoryDependencies` ne fait qu'élargir la portée du token). Ce script comble
# le manque. Il est relançable : il clone ce qui manque, met à jour ce qui existe, et ne touche
# jamais un dépôt où du travail est en cours.
#
# Emplacements : les trois repos du parc vont en sous-dossiers du hub, où le .gitignore du hub
# les ignore déjà (`/boutique-pipeline/`, `/New project/`, `/drop-elite-google-os/`), donc
# `git status` du hub reste propre. hermes-orchestration reste hors de l'arborescence du hub
# (règle CLAUDE.md), dans $HOME.
#
# Les gros médias sont exclus par sparse-checkout : la méthode, les registres et les tableaux
# sont là, les PNG 4K et les livraisons d'images ne sont pas téléchargés.
#
# Usage :  bash scripts/cloner-repos-parc.sh
# Variables :  HUB (défaut /workspace)   HORS_HUB (défaut $HOME)   OWNER (défaut HakimOuah)

set -uo pipefail

HUB="${HUB:-/workspace}"
HORS_HUB="${HORS_HUB:-$HOME}"
OWNER="${OWNER:-HakimOuah}"

echo "== Repos du parc : hub=$HUB  hors-hub=$HORS_HUB  owner=$OWNER"

# Motifs sparse-checkout, syntaxe .gitignore. « /* » prend tout, les « ! » retirent.
SPARSE_PIPELINE='/*
!/scratchpad/
!/boutique-seiko-mod/livraisons/
!/boutique-seiko-mod/preuves/
!/boutique-seiko-mod/backups/
!/boutique-seiko-mod/workbench/
!/boutique-tufting/images/
!/boutique-tufting/assets/
!/boutique-tufting/workbench/
!/boutique-bonum-vitae/assets/'

SPARSE_FACTORY='/*
!/outputs/'

appliquer_sparse() {
  # $1 = chemin du dépôt, $2 = motifs. Réécrit les motifs à chaque passage : idempotent.
  local depot="$1" motifs="$2"
  git -C "$depot" sparse-checkout init --no-cone >/dev/null 2>&1
  printf '%s\n' "$motifs" > "$depot/.git/info/sparse-checkout"
  git -C "$depot" sparse-checkout reapply >/dev/null 2>&1
}

installer() {
  # $1 = nom du repo GitHub, $2 = chemin de destination, $3 = motifs sparse ("" = clone complet)
  local repo="$1" dest="$2" motifs="${3:-}"
  local url="https://github.com/$OWNER/$repo.git"

  if [ -d "$dest/.git" ]; then
    # Déjà là : on met à jour, mais jamais au prix du travail en cours.
    local branche raison=""
    branche="$(git -C "$dest" rev-parse --abbrev-ref HEAD 2>/dev/null)"
    [ "$branche" != "main" ] && raison="sur la branche '$branche'"
    if [ -n "$(git -C "$dest" status --porcelain 2>/dev/null | head -1)" ]; then
      raison="${raison:+$raison et }modifications non committées"
    fi
    if [ -n "$raison" ]; then
      echo "-- $repo : laissé tel quel — $raison"
      return 0
    fi
    if git -C "$dest" fetch --depth 1 origin main >/dev/null 2>&1 &&
       git -C "$dest" reset --hard FETCH_HEAD >/dev/null 2>&1; then
      [ -n "$motifs" ] && appliquer_sparse "$dest" "$motifs"
      echo "-- $repo : à jour sur main ($(git -C "$dest" rev-parse --short HEAD))"
    else
      echo "!! $repo : mise à jour impossible (réseau ou droits) — le clone existant reste utilisable"
    fi
    return 0
  fi

  if [ -e "$dest" ]; then
    echo "!! $repo : $dest existe et n'est pas un dépôt git — rien touché"
    return 0
  fi

  mkdir -p "$(dirname "$dest")"
  if [ -n "$motifs" ]; then
    # Clone partiel : pas de blobs a priori, puis sparse-checkout ne rapatrie que l'utile.
    if ! git clone --depth 1 --single-branch --filter=blob:none --no-checkout "$url" "$dest" >/dev/null 2>&1; then
      echo "!! $repo : clone échoué — repo introuvable, privé, ou réseau coupé"
      rm -rf "$dest"
      return 0
    fi
    appliquer_sparse "$dest" "$motifs"
    git -C "$dest" checkout >/dev/null 2>&1
  else
    if ! git clone --depth 1 --single-branch "$url" "$dest" >/dev/null 2>&1; then
      echo "!! $repo : clone échoué — repo introuvable, privé, ou réseau coupé"
      rm -rf "$dest"
      return 0
    fi
  fi
  echo "-- $repo : cloné dans $dest ($(du -sh "$dest" | cut -f1))"
}

installer boutique-pipeline             "$HUB/boutique-pipeline"          "$SPARSE_PIPELINE"
installer drop-elite-google-os          "$HUB/drop-elite-google-os"       ""
installer dropshipping-product-factory  "$HUB/New project"                "$SPARSE_FACTORY"
installer hermes-orchestration          "$HORS_HUB/hermes-orchestration"  ""

echo "== Fini. Une branche de travail se récupère à la demande, sans re-cloner :"
echo "   git -C \"$HUB/boutique-pipeline\" fetch --depth 1 origin <branche>"

# Ne jamais faire échouer le build ni le démarrage de l'agent : les repos du parc sont un confort,
# pas une dépendance de compilation.
exit 0
