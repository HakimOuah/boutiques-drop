---
type: evenement-nox
date: 2026-09-04
categorie: api
titre: "Treg testé : trois appels, mais des sources non interchangeables"
projet: pipeline
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: codex
statut_editorial: brut
commit:
---

# Treg testé : trois appels, mais des sources non interchangeables

## Ce qui a changé

Un accès Treg local permet maintenant d'interroger plusieurs fournisseurs depuis le même outil. Trois appels SEO en lecture seule ont été exécutés, sans migration des systèmes de production.

## Pourquoi c'est notable

Le catalogue rend les outils et leurs prix accessibles à un agent. Le premier test montre toutefois qu'un accès unifié ne suffit pas à rendre les mesures comparables.

## Le détail qui fait le contenu

Les trois appels ont coûté 0,10095 USD. Sur « tufting gun » en France, DataForSEO retourne un champ de volume à 1 000, SE Ranking à 40; leurs fenêtres et métriques diffèrent. Même leur historique de juillet diverge : 590 contre 10. Une réponse HTTP réussie ne valide donc pas à elle seule un chiffre de marché. Autre surprise : malgré le message d'accueil, l'accès authentifié à Semrush exige notre propre connexion fournisseur.

## Ce qu'on ne peut pas encore dire

Ce test ne tranche pas l'exactitude des deux bases, ne valide aucun marché et ne justifie pas de migrer l'enrichissement de contacts. Ni fiabilité à grande échelle ni routage automatique n'ont été testés.

Rapport : [[boutique-pipeline/journal/2026-09-04-test-treg]].
