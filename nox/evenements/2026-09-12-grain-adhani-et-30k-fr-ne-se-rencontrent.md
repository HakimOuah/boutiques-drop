---
type: evenement-nox
date: 2026-09-12
categorie: methode
titre: "Grain Adhani et 30k FR ne se rencontrent pas"
projet: chasse-smp-adhani
repo: boutiques-drop
axes: [agents, ecommerce]
agent: cursor
statut_editorial: brut
commit:
---
# Grain Adhani et 30k FR ne se rencontrent pas

## Ce qui a changé

La chasse SMP grain Adhani est arrêtée à **0 / 10**. On sait maintenant que, sur Ads France, le nom de boutique-destination et l’arbre 30k + CPC bande + AE drop ne se sont pas rencontrés dans ce passage.

## Pourquoi c'est notable

Les hops Similar depuis des shops preuve (Adhani, vikingshop, antregothique) donnent le catalogue, pas la requête à 30k. Continuer à miner ces hops n’aurait pas débloqué 10 onglets.

## Le détail qui fait le contenu

`bijoux gothique` 590, `tableau viking` 70, `décoration murale islamique` 110 : les shops existent. Google FR ne les cherche pas sous ce nom.

Le 30k FR de la journée : `ayat al kursi` 60 500 = récitation, `peluche` 64 600 FAIL CPC, `culotte menstruelle` 49 500 grain Adhani mais CPC 1,65, `platine vinyle` 49 500 FAIL AE 0 platine, `encens` arbre 29 880 (120 sous le floor). Crochet / muay thai / billard = tutos, clubs, salles — pas un panier.

La fausse piste : 11/09 on a rempli 10 onglets GSA (table basse, aspirateur…) et on les a comptés. 12/09 on a inversé vers le grain, et le volume a disparu.

## Ce qu'on ne peut pas encore dire

On n’a pas prouvé que l’intersection est vide pour toujours — seulement qu’elle l’est sur les graines shops-first + Amazon BS de ces deux jours. Un autre corpus de shops, ou un floor volume différent, n’a pas été testé.
