---
type: evenement-nox
date: 2026-09-14
categorie: resultat
titre: "Compter les variantes ne suffit pas à remplir les collections"
projet: pipeline
repo: boutique-pipeline
axes: [agents, automatisation, ecommerce]
agent: codex
statut_editorial: brut
commit: f3896e7
---

## Le fait

Le catalogue de sept boutiques atteint 749 références AliExpress sur 111 fiches fournisseurs, avec au moins 100 références par boutique. Les 26 collections ont une première couverture. Deux agents Luna ont collecté les offres, un agent Sol a contrôlé et intégré les données, puis le parent a relu les sept onglets directement dans Google Sheets. Quatre références en réserve restent hors du quota.

## Le détail qui fait le contenu

Atteindre 100 variantes ne suffisait pas : les caftans avaient déjà leur quota, mais aucune takchita étayée. Une housse plastique PEVA remplissait à tort la collection « nappe enduite ». Des petits écrins cadeaux augmentaient aussi le compteur des coffrets à bijoux. Il a fallu vérifier l'usage et la construction, puis remplacer ou reclasser les références, sans additionner une même variante dans plusieurs collections.

Un dernier contrôle détectait de faux doublons parmi les djellabas : plusieurs options s'appelaient toutes « Picture color ». Leurs images et alias API étaient distincts. La restitution conserve le libellé source et affiche l'alias comme tel, sans inventer une couleur observée sur photo.

## La limite

Les lignes vérifiées portent un SKU, un stock déclaré, une offre EUR et une livraison France pour ce même SKU. Elles ne prouvent ni la qualité reçue ni la rentabilité. Le Sheet conserve quatre prix de vente proposés sous conditions ; les autres restent à établir. Le statut commercial demeure REVIEW et aucun GO final n'est prononcé.

## Preuve

`boutique-pipeline/analyses/2026-09-12-smp-7-niches/catalogue-100-20260913/integration/final-independent-verification.json` : PASS, 749 SOURCED, 4 réserves, 753 couples produit/SKU uniques, 111 fiches et 26 collections.
