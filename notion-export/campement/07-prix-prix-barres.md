# 07 · Prix & prix barrés (règle ×1,3)

- **URL Notion** : https://app.notion.com/p/3a71f38c31548169a339eecf3d48c5ce
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 2 · Catalogue |
| Ordre | 7 |
| Statut | À faire |
| Responsable | Agent + validation Hakim |
| Dépend de | 06 |
| Livrable | Grille de prix appliquée + compareAt sur 100 % des variantes |

---

## Objectif

Grille de prix propre + prix barrés sur toutes les variantes (le badge promo du thème se rend automatiquement).

## Skills à invoquer (globaux, via le Skill tool)

- `pricing` — psychologie du prix (ancrage, terminaisons, présentation des promos). La règle ×1,3 ci-dessous reste la LOI : le skill affine la présentation, il ne change jamais la grille.

## Règles (éprouvées Tuftéo/Noirmont)

- Prix de vente : grille validée avec Hakim (marge du dossier phase 5).
- **compareAtPrice = prix × 1,3**, puis : accessoires → arrondi au **,90 supérieur** ; produits chers → **entier terminant par 9** (ex. 289→379, 299→389, 319→419, 329→429, 349→459, 379→499).

## Procédure

1. Query complète prix par variante (pagination 250 + curseur !).
2. `productVariantsBulkUpdate` (price/compareAtPrice) par lots avec alias GraphQL.
3. Contrôle final `priceRangeV2` sur TOUS les produits + re-query des variantes au-delà du premier curseur (piège vécu : 2 compareAt ratés au-delà de 250).

## Fini quand

100 % des variantes ont price + compareAtPrice dans la grille, badge « EN PROMOTION / −X % » visible sur le storefront, tableau récapitulatif dans le runbook. Les niveaux de promo restent des placeholders que Hakim ajustera (Q4, soldes).
