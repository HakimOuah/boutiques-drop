# 00b · Arborescence produit — catalogue cible

- **URL Notion** : https://app.notion.com/p/3a71f38c315481358baee9f6e6793391
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 1 · Recherche & assets |
| Ordre | 0.5 |
| Statut | À faire |
| Responsable | Agent + validation Hakim |
| Dépend de | 00 |
| Livrable | arborescence-\<marque\>.md : catégories + liste fermée des produits à sourcer |

---

## Objectif

Savoir **quoi** sourcer avant d'ouvrir AliExpress : l'arborescence complète du catalogue cible (catégories → produits → rôle de chaque produit). C'est l'entrée directe du ticket 01 · Sourcing.

## Procédure (méthode éprouvée tufting : letufting.fr → arborescence → sourcing)

1. Identifier **1 à 3 boutiques de référence** de la niche (concurrent direct FR, leader étranger) — souvent déjà dans le dossier de recherche produit.
2. **Cartographier leur catalogue complet** : catégories/collections, chaque produit avec prix public, variantes, rôle apparent (héros, récurrent, accessoire, kit).
3. En déduire NOTRE arborescence cible :
   - **Produit héros** (celui du verdict GO) et ses déclinaisons.
   - **Produits secondaires** (2e raison de visite, paniers alternatifs).
   - **Accessoires / upsells panier** (petits prix, marge forte).
   - **Consommables / réachat** s'il y en a (rétention).
   - Trous assumés : ce qu'on ne vendra PAS et pourquoi (non sourçable, marge nulle, hors positionnement).
4. Poser pour chaque produit : nom de gamme provisoire FR, fourchette de prix cible (cohérente phase 5), collection d'appartenance, priorité de lancement (V1 / plus tard).
5. Valider l'arborescence avec **Hakim** avant de lancer le sourcing.

## Livrables

- `boutique-pipeline/boutique-<nom>/arborescence-<date>.md` (source de vérité) : tableau catégorie / produit / rôle / prix cible / priorité.
- Résumé dans la page campement ; l'arborescence devient la check-list du ticket 01 (une ligne de sourcing par produit listé).

## Fini quand

Hakim a validé la liste fermée des produits V1 ; le ticket 01 peut dérouler ligne par ligne sans se demander quoi chercher.
