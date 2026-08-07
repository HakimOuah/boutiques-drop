# 06 · Francisation des variantes (méthode Tuftéo)

- **URL Notion** : https://app.notion.com/p/3a71f38c315481efb960dbad5e16702e
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 2 · Catalogue |
| Ordre | 6 |
| Statut | À faire |
| Responsable | Agent + validation Hakim |
| Dépend de | 04 |
| Livrable | Options/valeurs 100 % FR, Ships From supprimé, 0 SKU/prix modifié |

---

## Objectif

Variantes 100 % françaises sans casser le mapping DSers. Référence : `boutique-tufting/shopify/francisation-variantes-2026-07-22.md`.

## Procédure

1. Query complète des 25+ produits : options, valeurs, variantes + SKU — **`first:250` + pagination par curseur** (jusqu'à 2048 variantes possibles ; `variants(last:N)` sans `before` est interdit).
2. Générer le tableau de renommage : `Color` → Cadran/Boîtier/Couleur/Référence/Modèle selon contenu ; `Size` → Mouvement (& fond)/Taille ; `Band Width` → Largeur… Valeurs traduites (unités FR, virgules, « mm » espacé), mouvements normalisés.
3. Supprimer les options **Ships From** (garder l'entrepôt FR/UE par défaut, sinon l'unique) — les variantes des autres entrepôts se suppriment d'abord (`productVariantsBulkDelete`), puis l'option (`productOptionsDelete`).
4. Exécuter `productOptionUpdate` en batch (option\{id,name\} + optionValuesToUpdate). Produits mono-variante → Title/Default Title.
5. Re-query de contrôle : **0 SKU modifié, 0 prix modifié**.

## Garde-fous

- **SKU intouchables.**
- Variantes trompeuses (« LOGO », doublons marketing…) : lister et **attendre le GO explicite de Hakim** avant suppression.
- `optionValuesToDelete` échoue si la valeur est encore utilisée → supprimer les variantes d'abord, re-runner le rename ensuite.

## Fini quand

Plus aucune valeur EN sur le storefront, mapping DSers vérifié par échantillon sur chaque produit, rapport dans le runbook.
