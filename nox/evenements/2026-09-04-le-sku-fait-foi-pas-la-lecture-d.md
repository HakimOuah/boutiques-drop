---
type: evenement-nox
date: 2026-09-04
categorie: methode
titre: "Le SKU fait foi, pas la lecture d'image"
projet: lumierematiere
repo: boutique-pipeline
axes: [ecommerce]
agent: claude-code
statut_editorial: brut
commit:
---
# Le SKU fait foi, pas la lecture d'image

## Ce qui a changé

Sur une boutique dont chaque fiche vient d'un fournisseur AliExpress, la question « quelle
variante est-ce, au juste ? » se tranche désormais sur une seule source : la chaîne SKU stockée
dans Shopify, croisée avec le `preuves-dom.json` horodaté du scraping. Plus jamais sur ce qu'on
croit voir dans une planche fournisseur, ni sur le nom d'un fichier de référence.

## Pourquoi c'est notable

C'est la règle qui décide si un titre de fiche est vrai. Un titre qui décrit une autre
configuration que celle vendue, c'est de la misrepresentation Google Merchant Center — la même
famille de motif que le bannissement d'une boutique précédente. Et l'erreur ne se voit pas :
elle produit une fiche parfaitement cohérente avec elle-même, simplement fausse.

## Le détail qui fait le contenu

La règle a coûté deux erreurs dans la même journée, dans les deux sens.

Le matin, j'ai déclaré une variante « mal nommée » parce que sa référence supposée montrait un
disque vert alors que la boutique annonçait « beige et blanc ». Le SKU disait
`200000531:173#A2` : la bonne référence était `A2.jpg`, étiquetée « Beige+White ». Aucune
anomalie. J'avais construit tout un raisonnement sur un fichier que j'avais choisi moi-même.

Le soir, l'inverse. Un brief affirmait, cotes à l'appui, que l'identifiant `367` valait le code
`2550` (25 × 50 cm) et `193` le code `4040`. Les SKU Shopify disaient exactement le contraire :
`200000795:193#2550` et `200000795:367#4040BK`. Les preuves DOM, horodatées 15:22, confirmaient
les SKU. Les images ont tranché en trois secondes : `367` est un luminaire **noir** de
40 × 40 cm, `193` une goutte naturelle de 25 × 50. Le mapping avait été reconstitué à l'œil, et
inversé.

Un tiers effet, celui-là utile. En vérifiant trois paires de variantes soupçonnées d'être des
doublons — elles l'étaient, rigoureusement, jusqu'à l'avertissement « le rotin jaunit avec le
temps » incrusté sur les deux images —, le stock a renversé la décision : dans deux paires sur
trois, c'est la variante à suffixe « 2 », celle que j'avais proposé de supprimer, qui portait le
plus de stock (10 contre 3, 5 contre 4). Les deux membres partageant déjà la même photo, le seul
critère qui restait était la profondeur d'approvisionnement. On garde le mieux servi, on renomme.

Bilan de la passe : 4 titres réécrits, 3 variantes supprimées, 8 montages fournisseur retirés des
galeries, 52 produits / 158 variantes, 161 SKU DSers intacts.

## Ce qu'on ne peut pas encore dire

Rien de tout ça n'est validé par Google : la boutique n'a pas encore été soumise au Merchant
Center. On corrige contre une checklist et contre le souvenir d'un bannissement, pas contre un
verdict. Et une question reste ouverte sur une fiche : son SKU annonce une source intégrée
3000 K, son texte réclame une ampoule E27. Tant qu'elle n'est pas tranchée, le titre a été écrit
pour être vrai dans les deux cas — ce qui est un contournement, pas une réponse.
