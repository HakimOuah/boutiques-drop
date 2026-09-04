---
type: evenement-nox
date: 2026-09-04
categorie: methode
titre: "Le logo n etait pas absent, il etait ecrase par le menu"
projet: lumiere-matiere
repo: boutique-pipeline
axes: [ecommerce, agents]
agent: claude-code
statut_editorial: brut
commit:
---
# Le logo n etait pas absent, il etait ecrase par le menu

## Ce qui a changé

L'audit UX de Lumière Matière a établi que le logo « absent » du header desktop était en fait
rendu à **0 px de large**, écrasé par un menu à dix entrées dans une grille `1fr auto 1fr`. Le
menu a été ramené à quatre entrées : le logo est réapparu sur le site live sans une ligne de CSS.

## Pourquoi c'est notable

Le symptôme ressemblait à un asset manquant ; la cause était un problème de contenu. Deux
plaintes distinctes de Hakim — « le menu est trop long » et « il n'y a pas de logo » — étaient un
seul défaut, et le corriger a demandé de changer la navigation, pas le thème. C'est le genre de
diagnostic qu'un audit à l'œil ne peut pas produire : il faut mesurer le DOM.

## Le détail qui fait le contenu

Le logo était là : `lumierematiere-logo-primary-charbon.png`, 348 × 108 natif, `display: block`,
`opacity: 1`, `visibility: visible`. Sa boîte mesurée : `[110, 15, 0, 36]` — zéro de large. Son
lien parent aussi. La grille du header Fullstack donne `1fr` au logo, `auto` au menu, `1fr` aux
icônes ; avec dix entrées, la colonne `auto` réclamait 1 108 px sur 1 440, la colonne `1fr` du
logo tombait à zéro, et `flex-wrap: wrap` faisait passer le menu sur deux lignes. Sur mobile, le
logo passait par une autre variable dans un layout centré — d'où « ça marche sur mobile ».

La fausse piste : chercher une règle CSS qui cache `.header__logo-image`. Il n'y en avait aucune.
La bonne question était « combien de pixels mesure le conteneur du logo ? ».

Après le passage du menu à quatre entrées (Par pièce · Par matière · Lustres · Plafonniers &
appliques, utilitaires renvoyés au footer), mesuré sur le live : logo 116 × 36 px, menu sur une
ligne (523 px), header 66 px. Rien d'autre n'a bougé.

Second piège dans la foulée : le thème propose un layout « logo à gauche, menu à gauche »
(`auto auto 1fr`) qui garantit la largeur du logo — mais dans ce layout, le bloc bouton du header
n'est pas rendu (`header.liquid` ne l'émet que pour `logo_left`, `logo_center` et
`logo_center_with_two_menus`). Filet de sécurité et bouton « Suivi de commande » s'excluent. Le
garde-fou retenu est une règle de contenu, pas de CSS : le menu principal ne dépasse pas cinq
entrées.

## Ce qu'on ne peut pas encore dire

Aucun effet mesuré sur le comportement des visiteurs : la boutique n'a pas de trafic (181
sessions la semaine 35, zéro commande). La copie de thème `LM UX 2026-09-04` qui porte les
autres corrections (bandeau, hero mobile, cartes matière) n'est pas publiée — c'est la décision
de Hakim. On saura si le menu à quatre entrées tient quand une entrée devra être ajoutée.
