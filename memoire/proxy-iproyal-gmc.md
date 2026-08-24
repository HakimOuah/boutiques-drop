---
name: proxy-iproyal-gmc
description: "Recette IPRoyal ISP : 1 IP France statique par profil Chrome Gmail/GMC/Ads, jamais Shopify derrière. Nouvelles boutiques seulement."
metadata:
  node_type: memory
  type: project
  originSessionId: bc-a0ab671e-ad0c-49c4-a150-e820f3eeded8
  modified: 2026-08-24T14:05:00.000Z
---

Le 24/08/2026, Hakim a choisi **IPRoyal** pour coller une IP dédiée sur les profils Chrome déjà en place (un profil par boutique / Gmail). Recette complète et étapes simples : `.claude/skills/gmc-acceptance/references/proxy-iproyal.md`.

**Produit :** ISP Proxies (IP statique, ~2,4–2,7 $/mois), localisation **France**, **1 IP = 1 boutique**. Pas le Residential qui tourne, pas le Datacenter.

**Mécanique :** Mac → IPRoyal France → Google. Le Gmail/GMC/Ads de la boutique ne voient jamais la box. Shopify s’ouvre dans un **autre** Chrome, proxy off. Jamais le proxy au niveau macOS.

**Parc déjà validé (Tuftéo, Bonum, etc.) :** on ne colle pas un proxy neuf sur un Gmail déjà vivant.

**How to apply:** avant de créer le Gmail d’une nouvelle boutique, dérouler `proxy-iproyal.md` jusqu’à whatismyip = France, puis seulement créer le Gmail dans ce profil. Voir [[skill-gmc-acceptance]] et [[identite-partagee-gmc]].
