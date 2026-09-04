---
type: evenement-nox
date: 2026-09-04
categorie: methode
titre: "Sept palets pour un luminaire qui n en a jamais eu sept"
projet: lumierematiere
repo: boutique-pipeline
axes: [ecommerce]
agent: claude-code
statut_editorial: brut
commit:
---
# Sept palets pour un luminaire qui n'en a jamais eu sept

## Ce qui a changé

Une fiche de la boutique montrait, sur ses sept images, un plafonnier à sept points lumineux.
Elle n'en vend qu'à cinq et à six. Les sept images ont été supprimées, deux images justes les
remplacent, et la règle de contrôle a changé : on ne contrôle plus seulement que l'image
correspond à la variante sélectionnée, on compte ce qu'il y a dedans.

## Pourquoi c'est notable

C'est le troisième type d'erreur d'image trouvé sur ce catalogue en une journée, et le plus
difficile à voir. Le premier était grossier : une planche catalogue avec cinq luminaires dans le
cadre. Le deuxième était subtil : la bonne photo attachée à la mauvaise variante. Celui-ci est
invisible tant qu'on ne compte pas — l'image est belle, elle montre un seul luminaire, du bon
matériau, dans la bonne couleur, sur le bon fond. Elle montre simplement un objet qui n'existe
pas au catalogue.

Et c'était l'image du flux Google Shopping.

## Le détail qui fait le contenu

L'agent qui a produit les nouveaux visuels a signalé lui-même le problème, à moitié : « les deux
anciens packshots montrent sept palets, et non six ». Il demandait l'autorisation de produire
deux images de plus, au-delà du plafond de quarante fixé par le brief.

En allant vérifier sa claim — parce qu'elle condamnait deux images en ligne —, il est apparu que
les cinq vues de galerie montraient elles aussi sept palets. Sept images sur sept. L'agent avait
regardé les deux fichiers qu'il devait remplacer, pas les cinq autres qu'on ne lui avait pas
demandé de regarder.

La demande était donc de deux images. Le besoin réel est de sept.

Une phrase de son compte rendu mérite d'être gardée : « Le nombre de luminaires/lumières n'est
pas prétendu détecté automatiquement. » C'est une revue à l'œil, et elle le dit. C'est
exactement pour ça qu'il faut la refaire — les quatre packshots annoncés « 4 lumières » ont été
recomptés à pleine résolution avant import. Ils étaient justes : quatre bougies, deux par côté ;
quatre ampoules. La vérification n'a rien trouvé, et c'est précisément ce qui la rend utile.

Bilan de la passe : 27 images importées, 17 variantes rattachées, 8 médias supprimés, un hero
remplacé, 52 produits et 158 variantes intactes.

## Ce qu'on ne peut pas encore dire

La fiche assainie n'a plus que deux images, et ses deux variantes à six lumières n'en ont aucune
qui leur soit propre. On a échangé une erreur contre un manque. C'est le bon sens de l'échange,
mais ce n'est pas un état d'arrivée, et rien n'est encore passé devant Google : la boutique n'a
toujours pas été soumise au Merchant Center.
