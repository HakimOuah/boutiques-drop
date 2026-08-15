---
name: variantes-sans-accent-kmt
description: "Dans le Keyword Magic Tool, les formulations sans accent sont des lignes distinctes invisibles depuis la requête accentuée — il faut interroger les deux, sous peine de sous-compter une famille d'un facteur 8"
metadata: 
  node_type: memory
  type: project
  originSessionId: 0dcb8c22-aa9a-4a77-8447-ad840e6faed1
  modified: 2026-08-15T20:08:33.134Z
---

Sur SEMrush France, **le Keyword Magic Tool traite `ciel etoile` et `ciel étoilé` comme deux corpus distincts** : les lignes sans accent n'apparaissent pas dans les résultats de la requête accentuée. Découvert le 15/08/2026 en consolidant la famille « projecteurs d'ambiance » d'un dossier déco astro : `ciel etoile projecteur` 1 300 et `projecteur etoile plafond` 1 000 étaient invisibles depuis `ciel étoilé`. Deux requêtes sans accent ont rapporté **9 650 recherches brutes** et expliquent l'essentiel du ×8,4 entre la tête mesurée seule et la famille consolidée.

**Why:** l'étape 3 de `METHODE-ANALYSE-MARCHE.md` dit d'additionner les variantes « d'écriture, d'ordre, de nombre et d'accent » qu'une même page sert — mais elle supposait que l'outil les remontait ensemble. Il ne le fait pas. Un total consolidé qui n'a interrogé que la forme accentuée est un plancher, pas un total, et l'écart peut atteindre un facteur 8 sur une famille.

**How to apply:** pour chaque famille dont la tête porte un accent, lancer systématiquement **une seconde requête KMT sans accent** et fusionner les deux corpus avant de dédupliquer. Deux pièges voisins relevés le même jour : `lampe demi lune` n'est pas une lampe décorative mais une **lampe UV de manucure** (1 500 à retirer d'office), et `poster` est **rabattu sur `poste`** par SEMrush, qui rend « La Poste espace client » sur 57 290 de volume — la racine `poster` est inutilisable telle quelle. Voir [[mesure-express-semrush-lots]] et [[salve-niches-univers-2026-08-15]].
