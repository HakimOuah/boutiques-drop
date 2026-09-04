---
type: evenement-nox
date: 2026-09-04
categorie: boutique
titre: "Des lampes qui s allument au survol : un geste de marque en trente lignes de Liquid"
projet: lumiere-matiere
repo: boutique-pipeline
axes: [ecommerce, agents]
agent: claude-code
statut_editorial: brut
commit:
---
# Des lampes qui s allument au survol : un geste de marque en trente lignes de Liquid

## Ce qui a changé

Sur la copie de thème de Lumière Matière, les cartes produit montrent désormais le luminaire
**éteint**, et il **s'allume au survol**. Un réglage de bloc, une trentaine de lignes de Liquid
et de CSS, aucun média déplacé. Le même jour, le logo a été recomposé en version horizontale à
partir des pixels de l'original, faute de source vectorielle.

## Pourquoi c'est notable

La promesse de la boutique tient en une phrase — « c'est la matière qui décide de la lumière » —
et jusqu'ici aucun élément d'interface ne la disait. Le geste ne coûte rien de plus que ce qui
existait déjà : chaque fiche possède depuis août une vue allumée (`g1`) et une vue éteinte
(`g2`), livrées par Codex selon une convention de slots. L'interaction ne fait que révéler un
actif dormant. C'est le cas typique où la direction artistique vient de la donnée, pas d'un
brief créatif.

## Le détail qui fait le contenu

Le thème Fullstack rend les cartes avec un slider Splide : impossible d'inverser l'ordre des
images en CSS, et réordonner les médias aurait mis la vue éteinte en première image du flux
Merchant Center — une lampe éteinte dans Google Shopping. La solution passe par le bloc Liquid :
quand le média mis en avant est le premier du produit, on empile `media[1]` (éteinte) et
`media[0]` (allumée) et on joue l'opacité au survol. Deux garde-fous ont compté : si la variante
filtrée a sa propre image — les packshots par coloris n'ont pas de vue éteinte — l'effet se
désactive ; et sous `@media (hover: none)`, la vue allumée s'affiche d'emblée, parce qu'un
téléphone ne survole pas.

Vérification faite dans le DOM plutôt qu'à l'œil : 6 cartes sur 6 en `.lm-light`, `off =
…-g2.jpg`, `on = …-g1.jpg`, opacité 0 au repos, zéro slider résiduel. Le panneau navigateur de
la session ne rend pas le survol : la première personne qui verra la lampe s'allumer sera Hakim.

Pour le logo, le seul original était un PNG empilé de 2000 × 620 : la marque, « LUMIÈRE » en
didone et « MATIÈRE » en sans bold ont été découpés par projection du canal alpha et réalignés
sur une ligne, le texte centré sur l'anneau. Aucune police substituée — le didone n'était pas
identifiable, et Young Serif, la police du site, ne lui ressemble pas. Résultat : 1573 × 464,
156 px de large dans le header au lieu de 129, et un mot-symbole qui se lit enfin à 36 px sur
mobile.

## Ce qu'on ne peut pas encore dire

La copie de thème n'est pas publiée. Aucune mesure d'engagement — la boutique n'a pas de trafic
(181 sessions la semaine 35, zéro commande). Reste à savoir si le fondu de 0,45 s tient sur les
cartes du slider de la home, dont Splide clone les slides : vérifié sur la grille de collection,
pas sur le slider. Et le logo horizontal, aussi propre soit-il, reste une recomposition de pixels :
le jour où la marque veut un vrai fichier vectoriel, il faudra retrouver — ou racheter — la didone.
