---
type: evenement-nox
date: 2026-09-11
categorie: methode
titre: "Minage Ads 60-90 jours n'est pas la preuve 6 mois"
projet: smp
repo: boutiques-drop
axes: [agents, ecommerce]
agent: cursor
statut_editorial: brut
commit: 2f3ac79
---
# Minage Ads 60-90 jours n'est pas la preuve 6 mois

## Ce qui a changé

Les skills d'idéation TrendTrack distinguent deux recettes Ads : **60–90 j** = minage (Ads → Google → Actives depuis), **180 j (6 mois)** = gate preuve, case à part. OneClickBrand Semrush redevient un chiffre de volume lisible ; DataForSEO reste le gate étude rapide.

Similar Shops : 5–8 voisins FR avec Google Ads > 0, expansion pas verdict. Salve Simprosys include + Meta Pixel exclude **en plus** de Shopping FR, pas comme filtre par défaut de cette vue.

## Pourquoi c'est notable

Un agent qui minait à 60 jours et cochait « Ads ≥ 6 mois » dans le même geste vendait des niches « au vert » qui n'avaient jamais tenu six mois. C'est le même genre de piège que le filtre Simprosys qui vidait Shopping FR : un geste d'écran, deux lectures, le mauvais vert.

## Le détail qui fait le contenu

Le skill collait les deux chiffres dans la même puce : `minDaysRunning` 30–60 **et** « sans concurrent ≥ 6 mois, l'idée n'est pas au vert ». Pire : le mineur posait `maxDaysRunning: 60`. Résultat double. Soit une pub de deux mois passait pour une preuve GO (faux vert). Soit les pubs vraiment longues — celles qui feraient le 180 — étaient **exclues** du minage. Hakim : un skill qui mélange 60 et 180 produit des faux verts. Le 180 n'entre pas dans la requête de minage. Après shortlist seulement.

Le volume OCB, c'est du **Semrush**. Hakim lui fait confiance. Ça **casse** le réflexe du 02/09 (`SEMrush 860 000 n'est pas le marché`) et du 01/09 (`DataForSEO unique source`) quand on les lisait comme « interdire OCB comme chiffre ». On ne jette plus le 49.5K Carport affiché à l'écran. On ne le fait pas non plus passer pour un GO : DataForSEO reste le gate étude rapide, OCB n'est pas le gate unique.

Trend Niche : filtre **Facile** (0–40) = **une** passe. Toujours une deuxième **sans filtre de difficulté**, sinon on rate des niches. High Ticket trie, ça ne coupe pas.

Similar Shops depuis un shop preuve FR : garder 5–8 voisins Visitor Country FR, Google Ads > 0, les passer au 180. Pas 13 pages. Ce n'est pas un vert.

La proposition 5 (ligne Ads concurrent obligatoire en phase demande) n'est **pas** dans ce commit. Hakim a demandé une explication avant de trancher.

## Ce qu'on ne peut pas encore dire

Qu'une niche SMP ait déjà été minée 60–90 puis passée au 180 sur cette recette séparée. Que le volume OCB et DataForSEO coïncident assez souvent pour n'en mesurer qu'un. Que Similar Shops 5–8 suffise à remplacer Brand Search. Rien sur la case Ads en phase 3 tant que la proposition 5 n'est pas tranchée.
