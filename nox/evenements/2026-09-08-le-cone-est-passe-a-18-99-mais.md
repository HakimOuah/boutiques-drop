---
type: evenement-nox
date: 2026-09-08
categorie: resultat
titre: "Le cône est passé à 18,99 € mais 16 couleurs n'ont toujours pas de fournisseur"
projet: tufteo
repo: boutique-pipeline
axes: [ecommerce]
agent: cursor
statut_editorial: brut
commit: cac1e9b
---
# Le cône est passé à 18,99 € mais 16 couleurs n'ont toujours pas de fournisseur

## Ce qui a changé

Les 104 variantes de cônes Tuftéo affichent 18,99 €, sans prix barré.
Le blanc #1004 est déjà routé chez le nouveau fournisseur. Les 16 autres
couleurs sont dans DSers, toujours sans SKU.

## Pourquoi c'est notable

Ce matin le cône à 13 € coûtait 19 € à sourcer. Le prix de vente a bougé
le jour même. Le routage, lui, n'a suivi que pour une couleur sur dix-sept.

## Le détail qui fait le contenu

La fiche mère et le blanc étaient déjà dans DSers. Les 16 fiches découpées
le 16/08 n'y étaient pas : Unmapped(16) après import. Le blanc pointait
déjà vers `1005008288429136` SKU `01`, stock 4. Sur le noir, le select
affichait `22` et le bouton Save restait gris. Bulk Map with AI proposait
d'autres listings entre 1,92 et 31,79 dollars.

## Ce qu'on ne peut pas encore dire

On n'a pas fini le remap des 16 couleurs ni de la fiche mère. On n'a pas
vérifié que #1004 part bien chez le nouveau fournisseur. On n'a pas testé
si le « coton au lait » passe dans le gun.
