# Rapport — construction de l'onglet « Puzzle 3D bois » (Google Sheet Niches SMP)

Date : 2026-09-14. Onglet dupliqué depuis 🧩 MODÈLE (aucun onglet existant au préalable — vérifié par un `read A1` qui a renvoyé une erreur JSON avant duplication). Aucun autre onglet touché à l'exception de la ligne 20 de 🗂 Index.

## Méthode suivie

1. Lecture des sources imposées : `rapport-puzzle3d.md` (revalidation 14/09), `arborescence-puzzle-3d-2026-08-08.md` (volumes SEMrush, seule source de volume — DataForSEO hors service, aucun volume inventé), `sourcing-extension` et `phase4-sourcing` (85 fiches et IDs), `offres-concurrents`, `phase5-marge`, `ads-concurrents`.
2. Le scratchpad de session contenait déjà le cache des 85 fiches de la revalidation API du 14/09 (`ae/v_<pid>.json`) : **52 fiches vivantes retrouvées telles quelles** (aucun nouvel appel réseau nécessaire), confirmant exactement le 61 % du rapport de revalidation.
3. Sourcing de renfort le 14/09 via `serp.fetch()` (requêtes anglaises courtes) puis `ae.variants()` pour vérifier chaque candidat en confiance A : **34 fiches nouvelles, 100 % vivantes**, ciblées sur les sous-catégories les plus fragiles (boîtes secrètes, monuments) et sur Book Nook / maisons miniatures (hors périmètre du 08/08, sourcé intégralement ce jour).
4. Catalogues concurrents lus via `products.json` (Puzzido 87 produits, Nookette 250, Nook-It 148, déjà présents en cache scratchpad) pour construire les prix cibles « juste sous le comparable » par sous-catégorie.
5. Écriture dans le Google Sheet via le pont Apps Script, vérification par relecture de `A6:M6`, de la plage de données et de la ligne 20 de l'Index — aucune erreur de formule détectée.

## Ce qui n'a pas pu être fait

- 5 requêtes SERP ciblées monuments (Tower Bridge, Notre-Dame, Big Ben, Colisée, Statue de la Liberté) ont été bloquées par la protection anti-bot AliExpress (page « punish », captcha) — non retentées pour ne pas aggraver le blocage. La sous-catégorie monuments reste donc à 4 fiches (structurellement la plus mince, confirmé par le rapport du 14/09 : survie 38 %).
- Aucun nouvel appel `exact()` (fret confirmé au panier) n'a été fait sur les 86 fiches : seules les 2 fiches déjà confirmées par le rapport de revalidation (circuit électrique Ury cœur, monument Ury avec lumière) portent une donnée de fret vérifiée. Les autres portent la mention « Choice, 5-14j non reconfirmé au panier », conformément à la règle de ne rien inventer.
- Pages publiques (Puzzido/Nookette/Nook-It) lues uniquement via `products.json`, jamais dans Chrome — conforme à l'interdit de la mission.

## Chiffres finaux du dossier

Voir le corps de la réponse à Hakim pour le détail complet (collections, statistiques, top 5, trous, impact GO).
