# Recettes TrendTrack par mode

Recettes observées en août 2026, à utiliser dans le module pertinent. Les paramètres de découverte sont des heuristiques, pas des gates métier. Les bots cloud utilisent le navigateur ; les recettes API sont réservées à Claude Code local et aux accès autorisés. Aucun secret transféré vers le cloud.

Pour une exploration Shopping libre, consulter Shopping FR et Shopping Scaling lorsqu'accessibles, conserver vue, domaine, date et mode. Shopping Scaling reste À VALIDER FR ; ce nom ne prouve pas la rentabilité. Pour Search, privilégier le réseau Search et les problèmes, sans parcourir obligatoirement les deux vues Shopping.

### PRODUIT PUR — intention Search

- `POST /v1/google-ads/query` : `networks: ["search"]`, audience FR, `status` active, `minDaysRunning` 30 (idéal 30–60), tri `longestRunning`. Pubs qui tiennent sur un **problème**, pas un catalogue.
- Shops : Module 1 Early Market (trafic max 15k, ads min 60, **produits max 100**, croissance +20 %). Top tiers US/UK/UE. Potentiel phare ≥ 50 €.
- Module 5 : painpoints (humidité, calcaire, linge, bruit…). Tri reach Europe. Hook / autorité / éducation / bénéfice caché = matière Search, pas pub Meta à republier.
- DataForSEO plus tard, par `@oh-demande` : clusters **symptôme** (« eau calcaire »), pas l’objet.

Écarter : GSB, persona pro, catalogues 200+ SKU (ça c’est UNIVERS — le noter et ne pas le traiter dans cette salve).

### UNIVERS — le catalogue est la preuve

- `POST /v1/google-ads/query` : `networks: ["shopping"]`, audience FR, 30–60 j, hors GSB. **Ne pas écarter** une boutique parce qu’elle n’a pas « un seul phare » — c’est le profil cherché.
- Shops : profondeur catalogue (dizaines à quelques centaines de produits), `minBestSellerPrice` ~50, Ads Google. Module 2 (winners massifs) pour un **pivot d’univers** FR, pas pour copier Ooni.
- Meta / TikTok (Modules 3–4, ads Meta) : **signal de trend d’univers** à importer en Shopping, jamais un brief Search.
- Fenêtre Q4 : `publishedAfter` 1er oct N-1, `publishedBefore` 1er jan N, `minDaysRunning` 30, tri `reach`. Socle annuel à faire vérifier ensuite par Trends, pas seulement le pic Noël.

Écarter : GSB (Boulanger, Castorama, Westwing, Darty…), one-product-store maquillé, textile tailles si Hakim l’a exclu, licences.
