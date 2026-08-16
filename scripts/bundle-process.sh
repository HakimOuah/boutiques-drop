#!/bin/bash
# Génère un fichier unique contenant toute la méthode OH Ventures — stratégie, critères,
# playbooks, méthode d'analyse de marché, skills et agents — pour le donner à un LLM externe
# (Grok, ChatGPT…) qui n'a pas accès aux repos privés.
#
# Usage :  bash scripts/bundle-process.sh [chemin/de/sortie.md]
# Défaut : ./EXPORT-PROCESS-OH-VENTURES.md
#
# Ne contient aucun secret : uniquement de la méthode. Vérifié par grep avant chaque génération.

set -euo pipefail

HUB="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-$HUB/EXPORT-PROCESS-OH-VENTURES.md}"
PIPE="$HUB/boutique-pipeline"

cd "$HUB"

# ─── Les fichiers, dans l'ordre de lecture ────────────────────────────────────
# Format : "chemin relatif au hub|Titre de section"
FILES=(
  "README.md|Présentation du hub"
  "CLAUDE.md|Règles du hub — sources de vérité et réflexe GitHub"
  "boutique-pipeline/CLAUDE.md|Règles du repo pipeline"
  "boutique-pipeline/METHODE-TABLEAU.md|Méthode de travail — un tableau par boutique"
  "boutique-pipeline/PRODUCT-RESEARCH-CRITERIA.md|STRATÉGIE — critères canoniques de recherche produit"
  "boutique-pipeline/PRODUCT-RESEARCH-PLAYBOOK.md|PROCESS — playbook de recherche produit"
  "METHODE-ANALYSE-MARCHE.md|PROCESS — méthode d'analyse de marché et de concurrence"
  "boutique-pipeline/PLAYBOOK.md|PROCESS — création d'une boutique Shopify"
  ".claude/skills/gmc-acceptance/SKILL.md|SKILL — approbation Google Merchant Center"
  ".claude/skills/gmc-acceptance/references/checklist-pre-soumission.md|SKILL GMC — checklist pré-soumission"
  ".claude/skills/gmc-acceptance/references/templates-policies.md|SKILL GMC — règles des policies"
  ".claude/skills/shopping-scaling/SKILL.md|SKILL — scaling Google Ads PMAX"
  ".claude/skills/webdesign-boutiques/SKILL.md|SKILL — direction artistique et web design"
  ".claude/agents/mineur-brandsearch.md|AGENT — minage Brand Search"
  ".claude/agents/phase0-decouverte.md|AGENT — phase 0, découverte de clusters"
  ".claude/agents/phase1-ideation.md|AGENT — phase 1, idéation"
  ".claude/agents/phase2-filtre.md|AGENT — phase 2, filtre qualitatif"
  ".claude/agents/sonde-prix.md|AGENT — sonde de prix"
  ".claude/agents/phase3-demande.md|AGENT — phase 3, validation de la demande"
  ".claude/agents/phase4-sourcing.md|AGENT — phase 4, sourcing AliExpress"
  ".claude/agents/phase5-marge.md|AGENT — phase 5, marge et CPA"
  ".claude/agents/critique-candidat.md|AGENT — critique de candidat"
  ".claude/agents/cartographie-concurrence.md|AGENT — cartographie de la concurrence"
  ".claude/agents/executant-boutique.md|AGENT — exécutant boutique (recettes AliExpress et thème)"
)

# ─── Garde-fou : aucun secret ne doit partir vers un LLM externe ──────────────
PATTERN='(api[_-]?key|client_secret|password|passwd)[[:space:]]*[:=][[:space:]]*[A-Za-z0-9_\-]{12,}|sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|AIza[A-Za-z0-9_\-]{30,}'
LEAKS=""
for entry in "${FILES[@]}"; do
  f="${entry%%|*}"
  [ -f "$f" ] || continue
  if grep -qEn "$PATTERN" "$f" 2>/dev/null; then
    LEAKS="$LEAKS\n  $f"
  fi
done
if [ -n "$LEAKS" ]; then
  echo "ARRÊT — secret potentiel détecté dans :$LEAKS" >&2
  echo "Vérifie ces fichiers avant de générer l'export." >&2
  exit 1
fi

# ─── Génération ──────────────────────────────────────────────────────────────
{
  echo "# OH Ventures — méthode complète de création de boutiques Shopify dropshipping France"
  echo
  echo "**Export généré le $(date '+%d/%m/%Y à %H:%M').** Document de travail interne d'Hakim Ouahabi"
  echo "(OH Ventures), rassemblé en un seul fichier pour être lu par un assistant externe."
  echo
  echo "Ce document contient la stratégie, les critères de décision chiffrés, les process découpés"
  echo "étape par étape, et les instructions des agents qui les exécutent. Il ne contient aucun"
  echo "identifiant, aucune clé d'API et aucune donnée client."
  echo
  echo "Contexte : boutiques de niche mono-produit ou petit catalogue, marché France, prix de vente"
  echo "cible 150-400 € TTC, acquisition Google Ads Search puis Shopping, fournisseurs AliExpress,"
  echo "structure SASU."
  echo
  echo "---"
  echo
  echo "## Sommaire"
  echo
  i=0
  for entry in "${FILES[@]}"; do
    f="${entry%%|*}"; t="${entry#*|}"
    [ -f "$f" ] || continue
    i=$((i+1))
    echo "$i. $t — \`$f\`"
  done
  echo
  echo "---"
  echo

  i=0
  for entry in "${FILES[@]}"; do
    f="${entry%%|*}"; t="${entry#*|}"
    if [ ! -f "$f" ]; then
      echo "<!-- MANQUANT : $f -->" >&2
      continue
    fi
    i=$((i+1))
    echo
    echo "==============================================================================="
    echo
    echo "# $i. $t"
    echo
    echo "> Source : \`$f\`"
    echo
    echo "---"
    echo
    cat "$f"
    echo
  done
} > "$OUT"

SIZE=$(du -h "$OUT" | cut -f1)
LINES=$(wc -l < "$OUT" | tr -d ' ')
echo "Export généré : $OUT"
echo "  $LINES lignes, $SIZE"
