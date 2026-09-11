---
type: evenement-nox
date: 2026-09-11
categorie: automatisation
titre: "Un script clone le parc de repos dans l'environnement cloud"
projet: parc-repos
repo: boutiques-drop
axes: [agents, automatisation]
agent: cursor
statut_editorial: brut
commit: 8713f57
---
# Un script clone le parc de repos dans l'environnement cloud

## Ce qui a changé

Les agents cloud du hub `boutiques-drop` ont un script idempotent,
`scripts/cloner-repos-parc.sh`, qui clone les quatre repos du parc que Cursor ne
checkoute pas : `boutique-pipeline`, `drop-elite-google-os`, `New project`
(GitHub : `dropshipping-product-factory`) et `hermes-orchestration`. Relancé, il
met à jour `main` quand le dépôt est propre, et laisse intact tout travail en
cours.

## Pourquoi c'est notable

Sans ça, un agent cloud ne voit que le hub. La méthode, les registres, les
politiques FR et l'orchestration vivent ailleurs — et Cursor n'a pas de
checkout multi-repos. Le script est la seule voie : `repositoryDependencies`
élargit le token, il ne clone rien.

## Le détail qui fait le contenu

Le clone naïf `--depth 1` des quatre repos pèse **~10 Go** (68 s pour
`boutique-pipeline` seul). Le script les ramène à **566 Mo en 11 s** :
`--filter=blob:none` plus un sparse-checkout qui écarte `scratchpad/`, les
livraisons PNG 4K et `New project/outputs`. Relance à l'identique : 3 s, les
objets sont déjà là.

Deux fausses pistes avant d'arriver là. D'abord, chercher un champ
multi-repos dans `environment.schema.json` : il n'existe pas.
`repositoryDependencies` ne fait qu'ajouter les repos au token GitHub — utile
pour pousser, inutile pour lire. Ensuite, poser `hermes-orchestration` à côté
du hub (`/workspace/..`) : ce chemin est `/`, et il n'est pas inscriptible.
Le clone va dans `$HOME`, comme `CLAUDE.md` le dit déjà (« cloné à part »).

Les quatre repos sont publics. Un clone sans token réussit. Le mapping
`New project` → `dropshipping-product-factory` n'est pas une déduction de nom :
il est écrit dans le `CLAUDE.md` du repo lui-même.

Le script ne fait jamais échouer un build (`exit 0` toujours). Un dépôt sur une
branche `agents/…` ou avec des fichiers non committés n'est jamais
`reset --hard`.

## Ce qu'on ne peut pas encore dire

Le script n'est pas encore branché sur `install` / `start` de l'environnement
Cursor. Tant que cette config n'est pas appliquée, un agent qui démarre ne
clone toujours que le hub. On ne sait pas non plus si le sparse-checkout
tiendra dès qu'un agent aura besoin des visuels d'une boutique.
