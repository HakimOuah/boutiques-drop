# Règles du hub Boutiques Drop

## Réflexe GitHub — source de vérité unique (décision Hakim, 07/08/2026)

**Toute modification durable doit finir sur GitHub dans la foulée, sans que Hakim ait à le demander.** Cela inclut :

- création ou modification d'un skill ou d'un agent dans `.claude/`
- toute nouvelle doc, spec, registre, rapport, template
- tout travail sur une boutique (thème, Liquid, contenus)
- les mises à jour de la mémoire persistante

Procédure en fin de tâche (avant de rendre la main) :

0. Si l'étape était significative, écrire l'événement éditorial NOX (voir section suivante).
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
| Architecture d'orchestration multi-agents, audits, benchmark HakimBench | `hermes-orchestration` (cloné à part, hors de cette arborescence) |

**`hermes-orchestration` ne contient jamais la méthode métier** (décision 30/08/2026, cf. son `docs/audit-2026-08-30.md`) : la méthode vit ici et dans `boutique-pipeline/`. Ce repo porte l'orchestration, le journal des missions et le benchmark, et pointe vers la méthode sans la recopier.

Dans `drop-elite-google-os`, mettre aussi à jour `CHANGELOG.md`, `DECISIONS.md` ou `OPERATIONS_LOG.md` selon la nature du changement, puis exécuter `python3 scripts/validate_repo.py` avant le push.

Ne jamais committer : secrets (`.env`, caches contenant des clés API), `node_modules/`, venvs, `scratchpad/`, `settings.local.json`. Le `.gitignore` de chaque repo fait foi — ne pas le contourner avec `git add -f`.

## Réflexe NOX — journal éditorial (décision Hakim, 30/08/2026)

**Après chaque étape significative d'un projet, écrire un événement dans `nox/evenements/`
avant de rendre la main** — création d'un projet, d'une boutique, d'un agent, d'une
automatisation, d'une intégration, d'une API ; règle de méthode apprise ; premier chiffre réel.

**Jamais** pour une typo, un refactor trivial, un changement cosmétique, une opération Git
de confort ou un changement technique sans conséquence. En cas de doute, ne pas écrire.

La règle complète, le test de significativité et le schéma : **[`nox/README.md`](nox/README.md)**.
Ne pas recopier cette règle ailleurs — les autres fichiers d'instructions n'en portent qu'un pointeur.

```bash
python3 scripts/nox-evenement.py --categorie <cat> --titre "..." --projet <slug> --repo <repo> --axes agents,ecommerce
```

Vaut pour les quatre repos : un événement né dans `boutique-pipeline/` ou
`drop-elite-google-os/` s'écrit **quand même ici**, dans `nox/evenements/`, et se commit ici.

## Sources de vérité

- **GitHub** = source de vérité et sauvegarde. Les fichiers locaux en sont le clone de travail.
- **Obsidian** = surface de lecture de la donnée métier (décision Hakim, 30/08/2026). **Le coffre est la racine de ce repo** — il n'y a donc rien à exporter ni à synchroniser : les agents écrivent les fichiers, Git les versionne, Obsidian les affiche. Les vues (plugin cœur *Bases*, propriétés du frontmatter) vivent dans `boutique-pipeline/instrumentation/vues/*.base`. Toute nouvelle donnée métier va dans le coffre, pas dans Notion.
- **Notion** = conservé pour ce qui y vit déjà (hub « Pipeline Boutiques Drop », kanban de lancement), jamais la référence. Ne plus y créer de nouvelle base de données métier.
- **Mémoire Claude** (`~/.claude/projects/-Users-Hakim-Documents-Boutiques-drop/memory/`) = contexte inter-sessions ; sa copie versionnée vit dans `memoire/` via `scripts/sync-memoire.sh`.

## Repères projet

- **Analyse de marché et de concurrence : `METHODE-ANALYSE-MARCHE.md` (racine).** Séquence obligatoire pour **chaque nouvelle boutique**, dans l'ordre : partir du catalogue → mesurer par lots → consolider par famille → net de marque → **vérifier en SERP** → puis seulement les concurrents → cartographier → arborescence, trous d'offre et axe. Contient le catalogue des pièges (retournement pièce/produit fini, rabattement orthographique, marque cachée, KD trompeur…), tous vérifiés sur Maison Noirmont les 13-14/08/2026. Cartographie d'un concurrent : agent `cartographie-concurrence`.
- Recherche produit, trois skills étanches : `ideation-produit` (deux modes PRODUIT PUR / UNIVERS, TrendTrack seulement — Brand Search retiré le 19/08/2026) · `recherche-mots-cles` (SEMrush + SERP + sonde prix + Trends) · `sourcing-aliexpress` (après GO marché). Chaîne 5 phases : orchestrateur `/recherche-produit`. Boucle `/chasse-clusters` (PRODUIT PUR seulement), qualification express `/qualifie-idees` — sous-agents phase0→phase5 + `mineur-brandsearch` (mineur TrendTrack, nom conservé) dans `.claude/agents/`.
- Conformité Google : skill `gmc-acceptance` (approbation Merchant Center, templates policies FR) ; scaling : skill `shopping-scaling` (PMAX profit-first).
- Registre des candidats et rapports : dans `boutique-pipeline/` (pas ici).
- **Instrumentation et boucle d'apprentissage : `boutique-pipeline/instrumentation/`** (30/08/2026). Quatre objets : `croyances/` (ce qu'on croyait avant de lancer — irrécupérable après coup), `mesures/` (relevé hebdo qui ne s'écrase jamais, contrairement à `ETAT.md`), le frontmatter des entrées de `journal/` (posé par `backfill-frontmatter.py`, à relancer après chaque nouvelle entrée), et `regles/` (règles apprises, jamais promues en `validee` sans accord de Hakim). Ne remplace rien de `METHODE-TABLEAU.md`.
