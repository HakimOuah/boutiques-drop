---
name: criteres-detection-concurrent-dropship
description: "Heuristiques de Hakim pour identifier qu'un concurrent fait du dropshipping — Shopify d'abord, organisation de la page produit, entreprise derrière ; marque établie + produit trouvable AliExpress reste intéressant"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 66d206cf-a166-4a90-af9d-3cdcba650068
  modified: 2026-08-06T21:49:04.586Z
---

Critères donnés par Hakim le 06/08/2026 pour qualifier un « concurrent dropship prouvé » (porte de sélection produit) :

1. **Shopify = premier indicateur.** Un site sur Shopify est le signal d'entrée (Brand Search ne renvoie de toute façon que des boutiques Shopify). Un site qui n'est PAS sur Shopify a peu de chances d'être du dropshipping.
2. **Organisation de la page produit** : la structure PDP (mono-produit, prix barrés, réassurance type drop, avis importés, timer, etc.) donne des indications sur le fait que c'est du drop.
3. **L'entreprise qui vend** : magasin physique, marque établie, vrais humains présentés, vidéos d'interview → PAS du dropshipping. MAIS si le produit que cette marque vend se trouve sur AliExpress, l'idée reste intéressante (le produit est sourçable même si le concurrent n'est pas un dropshipper).

**Why:** l'existence d'un concurrent dropship qui vit (et paie des ads dans la durée) est le filtre n°1 de la sélection produit depuis l'audit du 06/08 — c'est ce qui a différencié Tuftéo (letufting.fr copié → seuls ajouts panier) des 3 autres boutiques échouées. Voir [[cap-q4-2026-lecons-audit-boutiques]].

**How to apply:** lors du minage [[brand-search-source-idees]] et du reverse-engineering concurrent, classer chaque boutique preuve : dropship confirmé (Shopify + PDP type drop + pas d'entreprise établie) / marque établie mais produit AliExpress-sourçable (intéressant quand même) / marque établie non sourçable (repère prix seulement). Le reverse-engineering de lancement se fait sur le meilleur dropship confirmé.
