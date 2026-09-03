---
type: evenement-nox
date: 2026-09-03
categorie: methode
titre: "Un mot retiré peut inverser le besoin recherché"
projet: pipeline
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: codex
statut_editorial: brut
commit: e5087a2
---
# Un mot retiré peut inverser le besoin recherché

## Ce qui a changé

Un pilote préalable à l'upgrade Search confronte le parcours proposé à des dossiers historiques, à une sonde DataForSEO actuelle et à des défauts injectés dans les outils existants. Le rapport et les réponses de mesure sont conservés dans `boutique-pipeline/analyses/2026-09-03-pilote-search-upgrade/` ; aucune règle de production n'a été changée.

## Pourquoi c'est notable

Le test permet de prioriser les corrections qui empêchent de qualifier la mauvaise offre : conserver les contraintes d'une recherche, comparer les mêmes quantités chez le fournisseur et le concurrent, vérifier la fraîcheur des preuves GMC. Ces points précèdent l'ajout de nouvelles notes dans le pipeline.

## Le détail qui fait le contenu

Le test de l'anti-doublon candidat donne la même empreinte à « caméra surveillance wifi » et « caméra surveillance sans wifi » quand il n'y a ni URL ni angle : le mot « sans » fait partie des mots retirés. Pourtant il inverse une contrainte centrale du produit. Le normaliseur de mots-clés, lui, distingue bien les deux : il faut corriger le bon mécanisme.

Autre résultat concret : les cinq appels DataForSEO ont coûté 0,4158 USD, témoins inclus. Une tête générique à 60 500 recherches ne donne pas ce volume à la contrainte « sans abonnement » ; son corpus ciblé contrôlé ne représente que 2 140 après rapprochement conservateur, avant même les exclusions liées à l'offre. Les besoins 4G, Wi-Fi, sans fil et sans abonnement doivent rester explicites.

## Ce qu'on ne peut pas encore dire

Le pilote n'a ni lancé de campagne ni obtenu d'approbation GMC. Il ne mesure pas une hausse du taux de winners, ne prouve pas qu'une catégorie entière doit être abandonnée et ne constitue pas une nouvelle préqualification. Les scores et seuils canoniques restent inchangés ; les défauts reproduits ne sont pas encore corrigés.
