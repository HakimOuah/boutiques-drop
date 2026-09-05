# Responsabilités et surfaces

| Contenu | Dépôt |
|---|---|
| Instructions communes, Skills et agents Claude/Hermes, NOX, boutiques historiques | boutiques-drop, ce hub |
| Recherche produit, critères, registre candidats, rapports, Tufting/Seiko | boutique-pipeline |
| Usine à produits historique | New project |
| Corpus autorisé Kraken/Drop Elite, Skills Codex, politiques FR et OS Google | drop-elite-google-os |
| Orchestration, missions et benchmark multi-agent ; aucune copie de méthode métier | hermes-orchestration, cloné séparément |

Le coffre Obsidian est le hub : écrire la donnée métier dans ces dépôts, sans export supplémentaire. Notion reste une surface historique ; aucune nouvelle base métier. La copie de mémoire Claude dans `memoire/` se synchronise seulement si une modification de mémoire a été explicitement demandée.

Dans `drop-elite-google-os`, tracer les changements dans CHANGELOG, DECISIONS ou OPERATIONS_LOG selon leur nature et lancer `python3 scripts/validate_repo.py` avant push.

## Résoudre le hub depuis un worktree

`../CLAUDE.md` n'est fiable que dans un clone imbriqué. Utiliser le hub fourni par la mission, sinon `~/Documents/Boutiques drop/`. Pour retrouver le clone principal d'un dépôt, `git rev-parse --path-format=absolute --git-common-dir` pointe vers sa métadonnée commune ; vérifier le répertoire obtenu. Ne pas charger les instructions d'un dossier voisin simplement parce qu'il se trouve au-dessus du worktree.
