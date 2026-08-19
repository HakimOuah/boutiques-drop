---
name: plancher-prix-50e-google-ads-tt
description: "18/08/2026 — plancher de vente 50 € (plus 150 €) ; RoboLaVite exclu ; TrendTrack Google Ads ≥ 30–60 j + fenêtre Q4"
metadata:
  node_type: memory
  type: project
  originSessionId: cursor-2026-08-18-gads-50e
  modified: 2026-08-18T16:20:00.000Z
---

Le 18/08/2026, Hakim a changé trois règles d'idéation :

1. **Prix de vente cible : 50 à 400 € TTC.** On ne se limite plus au high-ticket 150 €. Un cœur 5–10 € sans panier observé reste `SIGNAL_PRIX_PANIER`. Les viviers sous l'ancien 150 € (globe 50–120 €, detective box 30–90 €) ne se rouvrent **que sur demande explicite**. Brand Search n'est plus utilisé (19/08).
2. **RoboLaVite / robot lave-vitres** : testé longtemps, sourcé en dropshipping — ne plus proposer. Distinct de la perche vitres STOP. Versé dans `registre-candidats.md` § Tests antérieurs.
3. **TrendTrack Ads → direction Google** (pas seulement Meta/shops). Recette : pubs actives **30–60 jours**, audience FR d'abord, Shopping/Search, plus fenêtre **dernier Q4** (`publishedAfter` 1er oct N-1 → 1er jan N, `minDaysRunning` 30, tri reach). Endpoint `POST /v1/google-ads/query`. L'API ne renvoie pas le titre produit, seulement domaine / jours / reach.

Critères : `boutique-pipeline/PRODUCT-RESEARCH-CRITERIA.md`. Skill : `ideation-produit`. Première salve : `boutique-pipeline/analyses/2026-08-18-ideation-trendtrack-google-ads.md` — le filtre rend surtout GSB + dossiers déjà connus (Aéraly, Floody, Nookette, Nice Water / gravité).
