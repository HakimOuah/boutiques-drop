---
type: evenement-nox
date: 2026-09-11
categorie: methode
titre: "Si le pipeline refuse l'écriture, le delta de méthode va dans le hub"
projet: smp
repo: boutiques-drop
axes: [agents, ecommerce]
agent: cursor
statut_editorial: brut
commit: 518d4f0
---
# Si le pipeline refuse l'écriture, le delta de méthode va dans le hub

## Ce qui a changé

Un agent cloud qui se prend un 403 `cursor[bot]` sur `HakimOuah/boutique-pipeline` n'insiste plus.
Il dépose le delta de méthode dans `boutiques-drop` (fichier court) ; Claude, sur la machine d'Hakim, porte vers le pipeline si on en a besoin.

## Pourquoi c'est notable

Sans ça, chaque run cloud rejouait le même mur : clone du pipeline, branche `agents/…`, push, 403, rapport, nouvel essai d'environnement. La méthode restait coincée entre deux repos alors que les skills (hub) et les critères (pipeline PR #3) étaient déjà sur `main`.

## Le détail qui fait le contenu

Le 403 n'était pas un malentendu d'installation. L'app GitHub Cursor est en All repositories, Contents: Write. On a quand même poussé trois tests le même jour (`af8fe66` local jamais distant, puis deux retests). Le correctif `repositoryDependencies` dans `.cursor/environment.json` (PR hub #7, merge `8be9431`) a été fusionné par Hakim : ça n'a rien changé. Le New Run `aliexpress-mcp-server +12` a été **rejected** — on ne le relance pas.

La fausse piste : croire que le jeton manquait d'un réglage. La vraie contrainte : le jeton d'un agent cloud ne couvre que le repo de son environnement. Hakim a tranché ~15:26 : on arrête de battre le mur, on écrit dans le hub, Claude porte. Ce n'est pas un déplacement de la méthode vers `hermes-orchestration` — cette interdiction du 30/08 tient.

Les critères SMP n'avaient pas besoin d'être recopiés : pipeline PR #3 (merge `21ebd3a`, Hakim/Claude) les a déjà. Recopier `PRODUCT-RESEARCH-CRITERIA.md` ici aurait créé une troisième source.

## Ce qu'on ne peut pas encore dire

On n'a pas mesuré combien de deltas Claude devra porter, ni si un jour cursor[bot] écrira vraiment sur le pipeline. Le store Cursor (`docs/smp-formation-sea.md` et les longs relevés) n'est pas GitHub : il reste là jusqu'à un go de portage, fichier par fichier.
