---
type: evenement-nox
date: 2026-09-05
categorie: methode
titre: "Un bloc de specs ne repete jamais un prix"
projet: lumierematiere
repo: boutique-pipeline
axes: [ecommerce]
agent: claude-code
statut_editorial: brut
commit:
---
# Un bloc de specs ne répète jamais un prix

## Ce qui a changé

Les fiches de la boutique portaient un tableau de caractéristiques dont une ligne annonçait
« Prix : à partir de N € TTC ». Sur vingt fiches sur cinquante-deux, le montant était faux. La
ligne a été supprimée partout, remplacée par une mention sans chiffre : « Prix : affiché toutes
taxes comprises ».

## Pourquoi c'est notable

Le prix est la seule donnée d'une fiche produit qui bouge sans prévenir. Le figer dans un champ
de texte garantit qu'il divergera — pas peut-être, mécaniquement, à la première remise. Une page
qui affiche 129 € et écrit 199 € trois blocs plus bas, c'est un mismatch qu'un examinateur Google
voit d'un coup d'œil, et une infraction consommateur en France.

Corriger vingt nombres aurait remis le compteur à zéro jusqu'au prochain changement de tarif.
Supprimer la ligne règle la question une fois.

## Le détail qui fait le contenu

Le défaut ne s'est pas trouvé en cherchant des prix. Il s'est trouvé en cherchant un **format**.

Le site affichait `€199,00` — la convention anglo-saxonne — alors qu'en France on écrit
`199,00 €`. En listant les prix d'une page pour mesurer l'ampleur du problème de format, deux
écritures sont apparues au lieu d'une : `€199,00` et `249 €`. La seconde ne venait pas du
formatage Shopify. Elle était tapée à la main dans un tableau de caractéristiques.

Et la fiche où elle est apparue coûte 239 €.

De fil en aiguille : le même tableau annonçait « Diamètre : 19 cm, 40 cm et 50 cm » pour un
luminaire dont les diamètres réels sont 25 et 40 — 19 et 50 étaient des **hauteurs**, recopiées
dans la mauvaise colonne. Une autre fiche annonçait « Matière : rotin tressé » alors que la
moitié de ses variantes sont en fibre synthétique.

Puis un effet de bord, immédiatement réparé mais instructif : la ligne supprimée était le **seul
endroit** où figurait la mention « TTC », elle-même obligatoire. Retirer une ligne fausse a retiré
une ligne obligatoire qui voyageait avec elle. La mention est revenue dans le même passage, sans
montant cette fois.

Bilan : 20 prix faux supprimés, 52 fiches assainies, 0 prix en dur et 52 mentions TTC au contrôle
final.

## Ce qu'on ne peut pas encore dire

Le format d'affichage reste anglo-saxon : `€199,00` au lieu de `199,00 €`. C'est un réglage de
boutique que l'API d'administration n'expose pas en écriture, il attend une main humaine. Et rien
de tout cela n'est passé devant Google : le domaine a douze jours, la règle maison en demande
trente, la soumission n'est pas pour aujourd'hui.
