---
type: evenement-nox
date: 2026-08-31
categorie: methode
titre: "Un volume nul de l'API peut n'etre qu'une graphie de graine"
projet: recherche-produit
repo: boutique-pipeline
axes: [ecommerce]
agent: claude-code
statut_editorial: brut
commit:
---
# Un volume nul de l'API peut n'etre qu'une graphie de graine

## Ce qui a changé

Deux règles de lecture s'ajoutent à la mesure express : **un `NULL` d'API n'est pas un zéro de
marché**, et **la graphie de la graine change le résultat du tout au tout**. Les deux sont désormais
écrites dans le rapport de mesure et dans le registre, avec le cas qui les a révélées.

## Pourquoi c'est notable

Sans ces deux contrôles, une famille produit se déclare morte sur un artefact d'outil. C'est arrivé
aujourd'hui, en cours de mesure, et ça a failli passer : la conclusion « l'atelier rétro n'existe pas »
était sur le point d'être écrite sur des zéros qui n'en étaient pas. Le coût du contrôle est de
0,26 USD et deux minutes ; le coût de l'erreur est une famille entière classée à tort.

## Le détail qui fait le contenu

La graine `game boy` (deux mots) rend **1 795 idées dont exactement une** porte un volume : 27 100.
Toutes les autres à zéro. En recoupant par `keywords_data/google_ads/search_volume`, l'API renvoie
**`NULL`** — pas `0` — sur `game boy advance`, `game boy color`, `coque game boy advance`. Or
`game boy color` à zéro en France est impossible. C'est ce qui a arrêté la conclusion.

La graine **`gameboy`** (un mot) rend **634 idées, toutes valorisées**, et fait apparaître le
vocabulaire qu'on cherchait : `batterie gameboy advance sp` 320, `gameboy advance modding` 210,
`écran gameboy` 110, `coque gameboy advance sp` 110, `gameboy advance ips` 90. Total du cluster
atelier : **1 910/mois**. Le verdict final ne change pas — 6,5× sous le seuil de 12 500, c'est un
STOP — mais il repose maintenant sur une mesure au lieu d'un artefact.

Deuxième surprise dans la même passe : le bucket ombrelle `game boy` à 27 100 n'est pas de la demande
de matériel rétro. C'est **`gameboy lego` = 27 100**, le set LEGO sorti en 2025. Autour :
`gameboy advance roms` 5 400, `emulator gameboy advance` 1 900. La demande Game Boy en France est
nostalgique, LEGO et ROM — et quand elle parle d'acheter, elle parle de cote et d'occasion
(`estimation game boy advance sp`, `game boy color le bon coin`), jamais de pièces détachées.

Troisième chose, sur la même session : les graines `console rétro` et `retrogaming` rendent la
**même série mensuelle au chiffre près** — `8100, 6600, 8100, 8100, 9900, 12100, 14800, 27100, 22200,
14800, 14800, 14800`. C'est un seul bucket Google à 14 800. La mesure SEMrush du 01/08 en avait fait
une somme de deux têtes. L'empreinte de série mensuelle est devenue l'outil qui tranche : deux
expressions qui partagent leur vecteur 12 mois sont le même bucket, et ne s'additionnent jamais.

## Ce qu'on ne peut pas encore dire

Les deux règles sortent d'**un seul cas**. On ne sait pas encore sur quelle proportion des familles à
nom composé la graphie change le résultat, ni si le `NULL` de `search_volume` suit une logique
identifiable (marque déposée ? pré-agrégation ?) ou s'il est erratique. Aucun balayage systématique
des graphies n'est outillé : c'est aujourd'hui un réflexe à tenir à la main, pas une garantie du
script.
