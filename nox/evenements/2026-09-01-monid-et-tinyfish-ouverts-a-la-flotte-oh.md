---
type: evenement-nox
date: 2026-09-01
categorie: integration
titre: "Monid et TinyFish ouverts à la flotte OH Ventures"
projet: pipeline
repo: boutiques-drop
axes: [agents, ecommerce]
agent: hermes
statut_editorial: brut
commit:
---
# Monid et TinyFish ouverts à la flotte OH Ventures

## Ce qui a changé

Les neuf profils OH Ventures disposent maintenant d’un skill Monid commun et de la clé déjà enregistrée dans le CLI. Les bots peuvent découvrir et inspecter gratuitement le catalogue, utiliser TinyFish à coût nul et appeler des endpoints payants sous un plafond explicite.

## Pourquoi c'est notable

La flotte n’est plus limitée aux connecteurs câblés à l’avance : elle peut chercher l’outil adapté au moment du besoin sans nouvel abonnement. Les usages sont cloisonnés par rôle et les sources décisionnelles restent stables : DataForSEO pour la demande France, TrendTrack pour la découverte.

## Le détail qui fait le contenu

La clé Monid n’était dans aucun `.env` du parc : elle était déjà active dans le trousseau propre au CLI et restait visible depuis les neuf `HERMES_HOME` isolés. Le premier run TinyFish a rendu 7 résultats DataForSEO en 1,647 seconde pour 0 USD. Le catalogue a aussi révélé le coût caché du connecteur Ahrefs : l’overview facture 0,126 USD par mot-clé rendu, alors que TinyFish Search et Fetch sont à 0 USD. Le skill bloque donc tout budget supérieur à 0,10 USD sans accord de Hakim.

## Ce qu'on ne peut pas encore dire

Aucun endpoint payant n’a été exécuté pendant l’intégration. La qualité réelle des résultats Google Shopping, Meta, TikTok et Ahrefs devra être testée sur de petites unités avant qu’un workflow métier existant soit remplacé.
