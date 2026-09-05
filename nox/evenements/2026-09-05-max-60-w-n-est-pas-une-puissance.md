---
type: evenement-nox
date: 2026-09-05
categorie: methode
titre: "Max 60 W n'est pas une puissance, c'est le calibre d'une douille"
projet: lumierematiere
repo: boutique-pipeline
axes: [ecommerce, agents]
agent: claude-code
statut_editorial: brut
commit:
---
# Max 60 W n'est pas une puissance, c'est le calibre d'une douille

## Ce qui a changé

Sept fiches d'une boutique de luminaires décrivaient leur source lumineuse d'après
l'étiquette de l'attribut fournisseur. Elles la décrivent maintenant d'après la plaque
cotée du fabricant, image à l'appui : six des sept étaient fausses.

## Pourquoi c'est notable

Un attribut de variante fournisseur est écrit pour un logisticien, pas pour un acheteur.
`249:200006305#4W(Max 60W)` a été lu comme « LED 4 W intégrée » par une passe précédente.
La plaque du fabricant, elle, écrit la phrase entière : *« e27 4w led bulb max 60w
(bulb included) »*. Une douille E27, une ampoule fournie, et un calibre maximal —
trois informations d'achat là où l'attribut n'en portait qu'une, mal comprise.

La conséquence n'était pas cosmétique. La FAQ des trois fiches concernées répondait
« rien à visser à la pose, **rien à remplacer ensuite** ». Elle transformait le meilleur
argument du produit — une douille standard, une ampoule qu'on change, jusqu'à 60 W si on
veut plus de lumière — en une limitation définitive, et invitait à jeter le luminaire à
la première ampoule grillée.

## Le détail qui fait le contenu

La règle tient en une phrase : **une LED intégrée n'a pas de maximum, elle a une puissance.**
Un « max » désigne toujours un contenant. Dès qu'on la formule comme ça, `4W(Max 60W)` ne
peut plus vouloir dire « intégrée » — et l'erreur devient impossible à refaire.

Les six erreurs allaient toutes dans le même sens : la fiche annonçait une source scellée
là où le produit offrait une douille, ou l'inverse. Sur l'une d'elles, un bloc de travertin
de 6,5 cm de côté était censé recevoir une ampoule E27 de 6 cm de diamètre. Personne n'avait
posé les deux nombres côte à côte.

La septième fiche n'a pas été corrigée, et c'est la partie intéressante. Sa plaque dit
« G9\*1 Warm white LED For Free », son SKU porte `warm LED` — mais l'attribut DSers, celui
qui pilote la commande réelle, dit « non fournie ». Une passe antérieure avait déjà tranché
en écrivant dans la fiche : *« on promet le moins »*. Promettre moins que ce qu'on livre ne
lèse ni le client ni un examinateur ; l'inverse, si. La preuve la plus forte ne suffit pas
à renverser une décision qui protège dans le bon sens.

Bénéfice imprévu : les plaques portaient les cotes absentes de quatre fiches à variante
unique, et un interrupteur marche/arrêt sur la douille d'un modèle — une fonction qui
permet de le poser là où il n'y a pas d'interrupteur mural, et qui ne figurait nulle part
sur la boutique.

## Ce qu'on ne peut pas encore dire

Aucune des sept n'a été vérifiée sur la pièce réelle. Les plaques sont des documents
marchands, pas des fiches techniques : elles peuvent mentir aussi. La commande test à venir
est ce qui tranchera la septième, et elle seule.
