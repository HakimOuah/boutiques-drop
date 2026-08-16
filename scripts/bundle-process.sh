#!/bin/bash
# Génère la passation complète OH Ventures en 3 volumes, pour un LLM externe (Grok, ChatGPT…)
# qui n'a pas accès aux repos privés.
#
#   Volume 1 — MÉTHODES  : stratégie, critères, playbooks, skills, agents. Le « comment ».
#   Volume 2 — MÉMOIRE   : passation, leçons, décisions, méthode Kraken. Le « pourquoi ».
#   Volume 3 — ÉTAT      : registre des candidats, état réel des boutiques. Le « où on en est ».
#
# Usage :  bash scripts/bundle-process.sh [répertoire de sortie]
# Défaut : ./  (racine du hub, les 3 fichiers sont en .gitignore)
#
# Ne contient aucun secret : uniquement de la méthode et de l'état. Vérifié par grep avant écriture.

set -euo pipefail

HUB="$(cd "$(dirname "$0")/.." && pwd)"
OUTDIR="${1:-$HUB}"
cd "$HUB"
mkdir -p "$OUTDIR"

# ─── VOLUME 1 — les méthodes ─────────────────────────────────────────────────
V1_TITLE="OH Ventures — volume 1/3 : stratégie, process et méthodes"
V1_INTRO="Le « comment ». Les critères de décision chiffrés, les process découpés étape par étape, et les instructions des agents qui les exécutent. À lire après le volume 2, qui explique pourquoi ces règles existent."
V1=(
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
  "GROK-BOT-FLEET.md|Découpage du process en 7 bots Grok"
  "notion-export/campement/campement-type-lancement-boutique.md|RUNBOOK — campement type de lancement d'une boutique"
)
# Les 18 tickets du campement (le lancement d'une boutique, découpé en briefs exécutables)
V1_CAMP=()
for f in notion-export/campement/[0-9]*.md; do
  [ -f "$f" ] || continue
  V1_CAMP+=("$f|RUNBOOK LANCEMENT — $(basename "$f" .md)")
done

# ─── VOLUME 2 — la mémoire et l'histoire ─────────────────────────────────────
V2_TITLE="OH Ventures — volume 2/3 : passation, mémoire et décisions"
V2_INTRO="Le « pourquoi ». La note de passation, puis les leçons accumulées session après session, puis le corps de méthode Kraken du repo drop-elite-google-os. C'est le volume à lire EN PREMIER : sans lui, les méthodes du volume 1 paraissent arbitraires."
V2=(
  "PASSATION.md|LA NOTE DE PASSATION — à lire en premier"
  "memoire/MEMORY.md|Index de la mémoire"
)
# les fiches mémoire sont ajoutées dynamiquement plus bas
V2_TAIL=(
  "drop-elite-google-os/README.md|MÉTHODE KRAKEN — présentation du repo"
  "drop-elite-google-os/DECISIONS.md|MÉTHODE KRAKEN — journal des décisions"
  "drop-elite-google-os/CHANGELOG.md|MÉTHODE KRAKEN — journal des changements"
  "drop-elite-google-os/OPERATIONS_LOG.md|MÉTHODE KRAKEN — journal des opérations"
  "drop-elite-google-os/skills/creer-boutique-niche-google/references/mission-coach-associe.md|KRAKEN — mission coach-associé"
  "drop-elite-google-os/skills/creer-boutique-niche-google/references/strategie-pas-a-pas.md|KRAKEN — la stratégie en 11 phases"
  "drop-elite-google-os/skills/creer-boutique-niche-google/references/operating-model.md|KRAKEN — modèle opératoire"
  "drop-elite-google-os/skills/creer-boutique-niche-google/references/evidence-and-currentness.md|KRAKEN — preuve et fraîcheur des données"
  "drop-elite-google-os/skills/creer-boutique-niche-google/references/metrics-dictionary.md|KRAKEN — dictionnaire des métriques"
  "drop-elite-google-os/skills/creer-boutique-niche-google/references/catalogue-sourcing-gate-v3.md|KRAKEN — gate catalogue/sourcing v3"
  "drop-elite-google-os/docs/parc-sites-enzo-honore.md|KRAKEN — le parc de sites de référence"
)
# Les 9 gates du mode Kraken (gate-0 à gate-8) : la séquence de portes de bout en bout
V2_GATES=()
for f in drop-elite-google-os/skills/creer-boutique-niche-google/references/gate-*.md; do
  [ -f "$f" ] || continue
  V2_GATES+=("$f|KRAKEN — $(basename "$f" .md)")
done

# ─── VOLUME 3 — l'état réel ──────────────────────────────────────────────────
V3_TITLE="OH Ventures — volume 3/3 : état réel du parc et registre"
V3_INTRO="Le « où on en est ». Le registre anti-doublon de tout ce qui a déjà été étudié, puis l'état chiffré et les règles propres à chaque boutique. C'est ce qui évite de refaire un travail déjà fait ou de rouvrir un dossier fermé."
V3=(
  "boutique-pipeline/registre-candidats.md|REGISTRE CENTRAL des candidats produit (anti-doublon)"
  "boutique-pipeline/familles-exploration.md|Familles de marché explorées"
  "boutique-pipeline/boutique-seiko-mod/TABLEAU.md|MAISON NOIRMONT — le kanban, point d'entrée"
  "boutique-pipeline/boutique-seiko-mod/ETAT.md|MAISON NOIRMONT — état courant chiffré"
  "boutique-pipeline/boutique-seiko-mod/REGLES.md|MAISON NOIRMONT — règles et pièges déjà payés"
  "boutique-pipeline/boutique-seiko-mod/ARBORESCENCE.md|MAISON NOIRMONT — arborescence"
  "boutique-pipeline/boutique-seiko-mod/AXES-MARKETING.md|MAISON NOIRMONT — axes marketing"
  "boutique-pipeline/boutique-seiko-mod/GRILLE-PRIX.md|MAISON NOIRMONT — grille de prix"
  "boutique-pipeline/boutique-seiko-mod/NOTES-PRICING.md|MAISON NOIRMONT — notes de pricing"
  "boutique-pipeline/boutique-seiko-mod/STYLE-REDACTION.md|MAISON NOIRMONT — style rédactionnel"
  "boutique-pipeline/boutique-seiko-mod/A-FAIRE-HAKIM.md|MAISON NOIRMONT — ce qui attend Hakim"
  "boutique-pipeline/boutique-tufting/project-state.md|TUFTÉO — état du projet"
  "boutique-pipeline/boutique-tufting/research-brief.md|TUFTÉO — brief de recherche"
  "boutique-pipeline/boutique-tufting/AUDIT-GMC-2026-08-16.md|TUFTÉO — audit GMC du 16/08"
  "boutique-pipeline/boutique-tufting/AUDIT-FINAL-A-contenu.md|TUFTÉO — audit final, contenu"
  "boutique-pipeline/boutique-tufting/AUDIT-FINAL-B-catalogue.md|TUFTÉO — audit final, catalogue"
  "boutique-pipeline/boutique-tufting/AUDIT-FINAL-C-technique.md|TUFTÉO — audit final, technique"
  "boutique-pipeline/boutique-tufting/sitemap.md|TUFTÉO — arborescence"
  "boutique-pipeline/boutique-tufting/test-plan.md|TUFTÉO — plan de test"
  "notion-export/INDEX.md|Notion — index du dashboard"
)
# Les personas réellement produits — les exemples valent le template
V3_PERSONAS=()
for f in boutique-pipeline/personas/*.md; do
  [ -f "$f" ] || continue
  V3_PERSONAS+=("$f|PERSONA PRODUIT — $(basename "$f" .md)")
done

# ─── Garde-fou : aucun secret ne part vers un LLM externe ────────────────────
PATTERN='(api[_-]?key|client_secret|password|passwd)[[:space:]]*[:=][[:space:]]*[A-Za-z0-9_\-]{12,}|sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|AIza[A-Za-z0-9_\-]{30,}'

check_leak() {
  if [ -f "$1" ] && grep -qE "$PATTERN" "$1" 2>/dev/null; then
    echo "ARRÊT — secret potentiel détecté dans : $1" >&2
    exit 1
  fi
}

# ─── Écriture d'un volume ────────────────────────────────────────────────────
write_volume() {
  local out="$1" title="$2" intro="$3"; shift 3
  local entries=("$@")

  for entry in "${entries[@]}"; do check_leak "${entry%%|*}"; done

  {
    echo "# $title"
    echo
    echo "**Export généré le $(date '+%d/%m/%Y à %H:%M').** Document de travail interne d'Hakim"
    echo "Ouahabi (OH Ventures, SASU), rassemblé pour être lu par un assistant externe."
    echo
    echo "$intro"
    echo
    echo "Contexte : boutiques Shopify de niche, marché France, dropshipping AliExpress, prix de"
    echo "vente cible 150-400 € TTC, acquisition Google Ads Search puis Shopping. Aucun identifiant,"
    echo "aucune clé d'API, aucune donnée client dans ce document."
    echo
    echo "---"
    echo
    echo "## Sommaire"
    echo
    local i=0
    for entry in "${entries[@]}"; do
      local f="${entry%%|*}" t="${entry#*|}"
      [ -f "$f" ] || continue
      i=$((i+1)); echo "$i. $t — \`$f\`"
    done
    echo
    i=0
    for entry in "${entries[@]}"; do
      local f="${entry%%|*}" t="${entry#*|}"
      [ -f "$f" ] || { echo "  MANQUANT : $f" >&2; continue; }
      i=$((i+1))
      echo; echo "==============================================================================="
      echo; echo "# $i. $t"; echo; echo "> Source : \`$f\`"; echo; echo "---"; echo
      cat "$f"; echo
    done
  } > "$out"

  echo "  $(basename "$out") — $(wc -l < "$out" | tr -d ' ') lignes, $(du -h "$out" | cut -f1)"
}

# Les fiches mémoire, dans l'ordre alphabétique, MEMORY.md exclu (déjà en tête)
V2_MEM=()
for f in memoire/*.md; do
  [ "$(basename "$f")" = "MEMORY.md" ] && continue
  V2_MEM+=("$f|MÉMOIRE — $(basename "$f" .md)")
done

echo "Passation OH Ventures — génération des 3 volumes :"
write_volume "$OUTDIR/EXPORT-1-METHODES.md"  "$V1_TITLE" "$V1_INTRO" "${V1[@]}" "${V1_CAMP[@]}"
write_volume "$OUTDIR/EXPORT-2-MEMOIRE.md"   "$V2_TITLE" "$V2_INTRO" "${V2[@]}" "${V2_MEM[@]}" "${V2_TAIL[@]}" "${V2_GATES[@]}"
write_volume "$OUTDIR/EXPORT-3-ETAT.md"      "$V3_TITLE" "$V3_INTRO" "${V3[@]}" "${V3_PERSONAS[@]}"
echo "Terminé. Ordre de lecture conseillé : volume 2, puis 1, puis 3."
