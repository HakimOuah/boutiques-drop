---
type: evenement-nox
date: 2026-09-03
categorie: methode
titre: "DataForSEO compte deux fois l'ETV des permutations de mots-cles"
projet: portefeuilles
repo: boutique-pipeline
axes: [ecommerce]
agent: cursor
statut_editorial: brut
commit: e9753c6
---
# DataForSEO compte deux fois l'ETV des permutations de mots-cles

## Ce qui a changé

Le garde-fou n° 3 de `METHODE-ANALYSE-MARCHE.md` — « une permutation de mots n'est pas une
deuxième demande » — s'appliquait jusqu'ici au **volume** de mots-clés. La cartographie de
concurrence de l'univers portefeuilles montre qu'il s'applique aussi, et avec la même ampleur,
au **trafic estimé par URL** : `ranked_keywords/live` rend `portefeuille homme` et
`homme portefeuille` comme deux lignes d'ETV additionnables, alors que Google n'a qu'un bucket.
Toute cartographie doit désormais publier un ETV dédupliqué par groupe de permutations,
d'accents et de pluriels, et non la somme brute.

## Pourquoi c'est notable

C'est un facteur de correction de **20 à 32 %** sur tout chiffre absolu de trafic organique
estimé, sur les cinq domaines mesurés, sans exception. Une cartographie qui publie le brut
surestime d'un cinquième à un tiers le poids de chaque concurrent, et surestime d'autant
l'ampleur d'une « place libre » calculée en ETV. Le biais est systématique et va toujours dans
le même sens : à la hausse. Il touche tout dossier d'étape 7 déjà rendu qui n'a pas dédupliqué.

## Le détail qui fait le contenu

Le chiffre qui a déclenché la vérification : `paulmarius.fr` sortait avec **20 314 ETV nets**
sur `/homme/petite-maroquinerie/portefeuilles.html`, une page qui n'affiche que **trois
modèles** de portefeuille (ALDO 20 €, Marius 35 €, PAUL 35 €). Une page à trois produits qui
capte 36 % de l'organique hors marque d'un site à 6 129 URL, c'était trop beau.

En ouvrant les lignes de mots-clés : **18 392 des 20 314** venaient de la seule forme inversée
`homme portefeuille`, où l'outil donne le site en **position 2**, alors qu'il le donne en
**position 12** sur `portefeuille homme`. Même bucket Google, deux positions rendues, deux ETV
additionnés. Le rang réel de cette page sur la tête de 60 500 recherches reste donc
**incertain entre 2 et 12** — et c'est une incertitude que le brut masquait entièrement.

La fausse piste suivie avant : j'ai d'abord cru à une erreur de mon filtre de marque. C'est
d'ailleurs vrai qu'il y en avait une, mais ailleurs — le regex `nat ?& ?nin` de `nat-nin.com`
laissait passer « nat et nin » et « nin nat », ce qui sous-estimait sa part de marque. Corrigé,
ça ne changeait rien au cas PaulMarius. Le problème n'était pas dans le filtre, il était dans
l'unité de compte de l'outil.

Correction appliquée : par groupe de permutations, d'accents (`boite a bijoux` /
`boîte à bijoux`) et de pluriels (`sacoche homme cuir` / `sacoches homme cuir`), on ne garde
que **la ligne d'ETV maximale**, jamais la somme. Résultat sur les cinq domaines mesurés le
2026-09-02 (France/fr, `location_code 2250`) :

| Domaine | ETV net brut | Doublon de permutation | ETV net dédupliqué |
|---|---:|---:|---:|
| letanneur.com | 359 325 | 105 334 (29 %) | 253 990 |
| arthur-aston.com | 144 062 | 44 966 (31 %) | 99 096 |
| nat-nin.com | 67 617 | 13 274 (20 %) | 54 343 |
| hexagona.com | 89 236 | 28 293 (32 %) | 60 942 |
| paulmarius.fr | 68 521 | 15 216 (22 %) | 53 305 |

Le fait rassurant, et c'est lui qui rend le dossier utilisable : **la déduplication ne change
ni l'ordre des pages, ni l'ordre des domaines, ni le classement des axes de découpe**. Elle ne
change que les valeurs absolues. Les ratios sont stables parce que le biais est réparti à peu
près uniformément sur toutes les lignes.

## Ce qu'on ne peut pas encore dire

La déduplication est faite par racinisation et tri de tokens : elle attrape les permutations,
les accents et les pluriels, mais **pas les synonymes** (`portefeuille cuir homme` contre
`portefeuille homme en cuir` passe, `porte-monnaie` contre `porte monnaie` passe, mais
`portefeuille` contre `porte-feuille` n'a pas été vérifié). Le facteur de 20-32 % est donc un
**minorant** du doublon réel.

Rien de tout ça n'est validé par une source de visites réelles : SimilarWeb n'a pas été
consulté, la règle maison « trafic réel ≈ SimilarWeb × 3 » n'a pas pu être appliquée, et l'ETV
reste une estimation de modèle, dédupliquée ou non. Le script de déduplication n'est pas encore
intégré à `kw_dfs.py` : il a tourné à part sur ce dossier, il faudra le porter pour que l'étape
7 le fasse par défaut.
