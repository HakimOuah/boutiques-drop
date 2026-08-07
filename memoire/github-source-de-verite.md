---
name: github-source-de-verite
description: "GitHub = source de vérité unique depuis le 07/08/2026 — 3 repos (hub boutiques-drop + boutique-pipeline + dropshipping-product-factory), réflexe push en fin de toute tâche"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 1589ce7e-ae26-41f0-bf94-f71a98fce292
  modified: 2026-08-07T15:46:31.175Z
---

Depuis le 07/08/2026, Hakim veut GitHub comme source de vérité unique et concentrée du projet, avec un réflexe systématique : **toute modification durable est commitée et poussée en fin de tâche, sans qu'il ait à le demander** — y compris la création/modification de skills, les docs, les registres, le travail boutiques.

**Why:** Avant la consolidation, les sources de vérité étaient éparpillées (fichiers locaux, Notion, mémoire, 2 repos partiellement poussés). Hakim veut pouvoir travailler depuis n'importe quel ordinateur avec tout disponible, et considère la doc GitHub comme faisant partie du livrable de chaque tâche.

**How to apply:** Trois repos GitHub (compte HakimOuah, tous rattachés à `~/Documents/Boutiques drop/`) :
- `boutiques-drop` (privé) — hub à la racine : `.claude/` (skills + agents), `memoire/` (copie de la mémoire via `scripts/sync-memoire.sh`), `notion-export/`, boutiques historiques, docs transverses.
- `boutique-pipeline` — pipeline actif (registre candidats, chasse clusters, rapports, Tufting/Seiko).
- `dropshipping-product-factory` — « New project », usine à produits historique.

En fin de tâche : sync mémoire si modifiée (`bash scripts/sync-memoire.sh` à la racine), puis commit (message en français) + push dans le(s) repo(s) touché(s). Les CLAUDE.md des 3 repos portent la règle. Jamais de secrets dans git (un `.env` et `ecommerce-dropshipping/dataforseo_analysis/cache.json` contiennent des clés réelles — gitignorés). Notion reste un dashboard ([[notion-pipeline-boutiques]]) : après une mise à jour Notion significative, rafraîchir `notion-export/` dans le hub.
