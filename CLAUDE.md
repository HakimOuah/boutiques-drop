# Règles du hub Boutiques Drop

## Réflexe GitHub — source de vérité unique (décision Hakim, 07/08/2026)

**Toute modification durable doit finir sur GitHub dans la foulée, sans que Hakim ait à le demander.** Cela inclut :

- création ou modification d'un skill ou d'un agent dans `.claude/`
- toute nouvelle doc, spec, registre, rapport, template
- tout travail sur une boutique (thème, Liquid, contenus)
- les mises à jour de la mémoire persistante

Procédure en fin de tâche (avant de rendre la main) :

1. `bash scripts/sync-memoire.sh` — si la mémoire a été modifiée pendant la session.
2. `git add` + commit dans le repo concerné (message en français, une ligne de résumé claire).
3. `git push`.

Le travail se répartit sur 4 repos — committer dans le bon :

| Ce qui a changé | Repo |
|---|---|
| Skills, agents, mémoire, export Notion, docs transverses, boutiques historiques | ce repo (`boutiques-drop`, racine) |
| Pipeline recherche produit, registre candidats, chasse clusters, rapports, Tufting/Seiko | `boutique-pipeline/` |
| Usine à produits historique (« New project ») | `New project/` |
| Corpus Drop Elite autorisé, skills Codex, politiques FR et OS Google Ads/SEO | `drop-elite-google-os/` |

Dans `drop-elite-google-os`, mettre aussi à jour `CHANGELOG.md`, `DECISIONS.md` ou `OPERATIONS_LOG.md` selon la nature du changement, puis exécuter `python3 scripts/validate_repo.py` avant le push.

Ne jamais committer : secrets (`.env`, caches contenant des clés API), `node_modules/`, venvs, `scratchpad/`, `settings.local.json`. Le `.gitignore` de chaque repo fait foi — ne pas le contourner avec `git add -f`.

## Sources de vérité

- **GitHub** = source de vérité et sauvegarde. Les fichiers locaux en sont le clone de travail.
- **Notion** = dashboard visuel pour Hakim (hub « Pipeline Boutiques Drop »), jamais la référence. Après une mise à jour Notion significative, rafraîchir l'export markdown dans `notion-export/` (ou noter le delta dans `notion-export/INDEX.md`).
- **Mémoire Claude** (`~/.claude/projects/-Users-Hakim-Documents-Boutiques-drop/memory/`) = contexte inter-sessions ; sa copie versionnée vit dans `memoire/` via `scripts/sync-memoire.sh`.

## Repères projet

- **Analyse de marché et de concurrence : `METHODE-ANALYSE-MARCHE.md` (racine).** Séquence obligatoire pour **chaque nouvelle boutique**, dans l'ordre : partir du catalogue → mesurer par lots → consolider par famille → net de marque → **vérifier en SERP** → puis seulement les concurrents → cartographier → arborescence, trous d'offre et axe. Contient le catalogue des pièges (retournement pièce/produit fini, rabattement orthographique, marque cachée, KD trompeur…), tous vérifiés sur Maison Noirmont les 13-14/08/2026. Cartographie d'un concurrent : agent `cartographie-concurrence`.
- Recherche produit (instruire un dossier, TrendTrack, sans GO) : skill `recherche-produit-dossier`. Chaîne 5 phases : orchestrateur `/recherche-produit`. Boucle `/chasse-clusters`, qualification express `/qualifie-idees` — sous-agents phase0→phase5 dans `.claude/agents/`.
- Conformité Google : skill `gmc-acceptance` (approbation Merchant Center, templates policies FR) ; scaling : skill `shopping-scaling` (PMAX profit-first).
- Registre des candidats et rapports : dans `boutique-pipeline/` (pas ici).
