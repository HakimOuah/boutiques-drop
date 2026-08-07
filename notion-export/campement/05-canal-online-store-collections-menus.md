# 05 · Canal Online Store + collections + menus

- **URL Notion** : https://app.notion.com/p/3a71f38c315481019d5fcf577935339c
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 2 · Catalogue |
| Ordre | 5 |
| Statut | À faire |
| Responsable | Agent |
| Dépend de | 04 |
| Livrable | Produits publiés sur le canal, collections créées, navigation header/footer |

---

## Objectif

Rendre le catalogue visible : publication canal, collections, menus.

## Procédure

1. **`publishablePublish`** de chaque produit sur la publication Online Store — piège DSers systématique : les produits importés ne sont publiés sur aucun canal. Vérifier ensuite via `publishedOnCurrentPublication`.
2. Franciser les **titres produits** (noms de gamme cohérents avec la marque, pas les titres AliExpress).
3. Créer les **collections** (par famille/usage, ex. montres / accessoires / entretien) via `create-collection` + `add-to-collection`.
4. Construire les **menus** header (collections principales, FAQ/aide) et footer (légales, contact, suivi) via l'admin ou l'API menus.

## Fini quand

Chaque produit est visible sur le storefront (mot de passe), rangé dans une collection, et la navigation est complète.
