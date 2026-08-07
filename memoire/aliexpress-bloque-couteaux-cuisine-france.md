---
name: aliexpress-bloque-couteaux-cuisine-france
description: "AliExpress n'expose aucun couteau de cuisine fini à la livraison France (constat 02/08/2026) — toute idée produit « lame » est insourçable sur le canal exclusif du pipeline"
metadata: 
  node_type: memory
  type: project
  originSessionId: c009f956-c83d-4060-a9da-e472db5d7a72
  modified: 2026-08-02T16:02:06.985Z
---

Constat de la phase 4 du 02/08/2026 (dossier couteau japonais, rapport `boutique-pipeline/reports/phase4-sourcing-couteau-japonais-2026-08-02.md`) : avec une adresse de livraison France, le storefront AliExpress ne renvoie **aucun couteau de cuisine fini** (unitaire ou coffret) — 9 requêtes FR/EN vides, et contre-épreuve décisive : la boutique officielle HEZHEN affiche ses catégories couteaux à 0 article côté France alors que ses 37 accessoires (pierres, sayas, manches, ébauches DIY) restent visibles. Le blocage est ciblé sur la catégorie, pas sur la session.

**Why:** Le pipeline impose AliExpress comme canal fournisseur exclusif (§2 des critères). Une catégorie bloquée à la livraison France y est donc un mur, quel que soit le marché — le couteau japonais avait 45-60 k/mois adressables et un GO de Hakim, et il est mort là. Même famille de blocage que le katana (politique Ads) : les « lames » cumulent les verrous réglementaires.

**How to apply:** Avant d'instruire toute idée à base de lame (couteaux cuisine/outdoor, machettes, haches, ciseaux de coutellerie…), vérifier d'abord la sourçabilité France sur AliExpress — c'est un tueur de dossier plus rapide que le volume. Réserve au constat : la navigation du 02/08 était faite physiquement depuis le Portugal avec adresse FR ; re-test à faire au retour de Hakim (après le 06/08/2026) avant de graver la règle. Google Shopping FR diffuse pourtant des annonces AliExpress de couteaux finis (probable flux d'un autre marché, non atteignables dans le storefront FR). Voir [[rejets-terrain-handpan-litcabane-purificateur]].
