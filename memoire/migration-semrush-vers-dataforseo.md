---
name: migration-semrush-vers-dataforseo
description: "SEMrush remplaçable par DataForSEO (script kw_dfs.py) — ne jamais sommer les volumes bruts de Google, qui pré-agrège les variantes proches"
metadata: 
  node_type: memory
  type: project
  originSessionId: 8d3ad651-5d3a-4ec8-8fe9-8307a867e5d6
  modified: 2026-08-29T22:49:35.042Z
---

Décidé le 29/08/2026 : l'abonnement SEMrush (149 €/mois) est financé par la trésorerie de test et doit pouvoir être résilié. Une chaîne DataForSEO a été construite et validée sur 4 graines en aveugle.

**L'outil** : `boutique-pipeline/scripts/kw_dfs.py` — découverte via `dataforseo_labs/google/keyword_suggestions` (correspondance plein texte), normalisation, déduplication, table de thèmes co-occurrents, cache disque. ~0,13 USD la page de 1 000 lignes. Volume de tête : `keywords_data/google_ads/search_volume/live`, ~0,09 USD les 180 mots-clés. Une Mission B revient à ~3,50 USD.

**Trois règles qui ne se devinent pas :**

1. **Ne jamais additionner les volumes bruts de DataForSEO.** Google pré-agrège les variantes proches : `limonadier` et `limonadiers` valent tous les deux 12 100, c'est le même bucket servi deux fois. Il fusionne 7 paires accentuées sur 20 et 3 paires singulier/pluriel sur 4, **de façon imprévisible**. On somme des idées normalisées, en retenant le MAX du groupe.
2. **L'endpoint `keywords_data/google_ads/keywords_for_keywords` est interdit** : il filtre sémantiquement et masque les contaminations. Sur `diffuseur`, 0 ligne coiffure sur 1 774, alors que `diffuseur cheveux` vaut 18 100.
3. **Angle mort confirmé** : DataForSEO voit bien les contaminations produit (chat, plante, tortue, marque), mal les contaminations culturelles. Sur `paddle` il manque entièrement `kid paddle`, la BD, 6 600/mois. La vérification SERP est la parade — elle est de toute façon déjà obligatoire.

**Calibrage** : DataForSEO rend en médiane ×1,22 à ×1,25 ce que rend SEMrush, sur trois échantillons concordants — mais avec un écart-type de 2,65 et une étendue de ×0,03 à ×31. Le facteur vaut pour ajuster un **seuil**, jamais pour convertir un mot-clé isolé. Recalibrage proposé (cluster 12 500, consolidé UNIVERS 37 500, confort 50 000) : **en attente de la décision de Hakim**, à porter dans `PRODUCT-RESEARCH-CRITERIA.md`, jamais dans un fichier d'agent.

**Témoin de quota** : `tufting` = 8 100 sur SEMrush, 12 100 sur DataForSEO, base France. À tirer avant la première mesure et après la dernière.

**Why :** Hakim ne chiffre pas encore ; chaque euro d'abonnement sort de la trésorerie qui finance les tests publicitaires. La migration n'est pas un confort, c'est une contrainte de trésorerie.

**How to apply :** le skill [[skills-recherche-separes]] `recherche-mots-cles` documente les deux voies, DataForSEO en défaut. Avant résiliation il reste : le rejeu de non-régression sur les rideaux, et la décision de recalibrage. Voir aussi [[variantes-sans-accent-kmt]], dont la règle change de sens sur DataForSEO, et [[mesure-express-semrush-lots]].
