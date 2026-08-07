---
name: shopify-canal-et-visuels-ia
description: "Pièges récurrents build boutique — produits DSers non publiés sur le canal Online Store, IA image qui imprime de faux logos sur les cadrans, recette thème brouillon complet via API"
metadata: 
  node_type: memory
  type: project
  originSessionId: 455c6a31-511d-4d11-a937-711aeb4be1b5
  modified: 2026-07-24T17:25:08.067Z
---

Trois leçons du build NOIRMONT (24/07/2026), réutilisables pour toute boutique du pipeline :

1. **Produits DSers/API invisibles sur le storefront** : les produits poussés par DSers et les collections créées par API sont ACTIVE mais publiés sur AUCUN canal (`resourcePublications` vide). Symptôme : « Aucun produit trouvé » sur le thème, sections collection vides, `collection_list` qui retombe sur `collections` (frontpage seule). Correctif : `publishablePublish` en batch sur les publications (les récupérer via `publications(first:10)` et mimer une ressource visible comme `frontpage`).

2. **Higgsfield/soul_2 imprime de faux logos** sur tout cadran de montre (ou surface plane) face caméra — les prompts « no logo, no text » ne suffisent pas. Recette qui marche : compositions qui cachent le cadran (angle rasant, macro lunette, caseback, knolling) + inpainting OpenCV local (venv scratchpad, cv2.inpaint TELEA + patch blur feathered sur cadrans lisses) sur les zones de texte. Vérifier chaque image à l'œil avant upload.

3. **Thème brouillon 100 % pilotable par API** (thèmes non publiés seulement) : staged upload PUT `text/plain` → `themeFilesUpsert` avec le `resourceUrl` NON signé. Fichiers clés FullStack : settings_data.json (schemes + polices custom woff2 par URL Files), templates/index.json + product.json, sections/header-group.json + footer-group.json. Le logo par défaut est un asset FullStack : renseigner `logo` et `logo_inverse` dans settings (wordmark PIL + Bodoni variable en attendant le vrai logo). QA : mot de passe storefront lisible dans admin → Préférences (Noirmont : `autheu`).

## Génération d'images : passer par le pont Codex (31/07/2026)
Décision D-0731-C actée : les visuels boutiques se génèrent via **Codex CLI** (GPT Image 2 natif, inclus dans l'abonnement, session partagée avec l'app) — déposer un ordre `generate_images` dans `boutique-pipeline/ordres/pour-codex/inbox/` puis lancer `bash ordres/generer-images.sh`. Spec des contraintes : doc 15 du handoff (manifeste handle+SKU, bloc d'orientation, stérilité). **La QA reste côté Claude** (planches ≥740 px, zoom chiffres, doigts). Higgsfield = repli seulement (~87 crédits restants). Ne plus donner de prompts à Hakim pour copier-coller.

**Why:** Higgsfield est compté, Codex illimité ; et le relais manuel par Hakim était le goulot.
**How to apply:** ordre → script → QA → branchement par l'API, comme documenté dans [[pipeline-recherche-produit-agents]] et le protocole d'ordres du dépôt.
