# 04 · Import DSers → Shopify (mapping intact)

- **URL Notion** : https://app.notion.com/p/3a71f38c31548116a321dc7e9b6f6af1
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 2 · Catalogue |
| Ordre | 4 |
| Statut | À faire |
| Responsable | Agent + validation Hakim |
| Dépend de | 01 |
| Livrable | Tous les produits du sourcing importés dans Shopify, mapping DSers vérifié |

---

## Objectif

Tous les produits du tableau de sourcing importés via DSers, mappés variante par variante.

## Procédure

1. Importer chaque URL /item/ du ticket 01 dans DSers (Hakim ou agent selon accès), pousser vers Shopify.
2. Vérifier dans DSers le **mapping par variante** (chaque variante Shopify ↔ SKU AliExpress).
3. Contrôle Shopify : `products` query — compter produits/variantes, vérifier que les SKU portent bien la chaîne de mapping.

## Garde-fous

- **Ne JAMAIS modifier un SKU** — ni maintenant ni dans les tickets suivants : c'est la chaîne de mapping AliExpress→DSers.
- Les produits DSers arrivent **publiés sur AUCUN canal** : c'est normal, le ticket 05 s'en charge.
- Ne pas encore toucher aux titres/variantes (tickets 05-07 le font proprement).

## Fini quand

Le compte de produits Shopify = catalogue prévu, et un échantillon de mapping DSers est vérifié sur chaque produit.

## Mapping DSers d'une fiche créée par l'API (autorisé à l'agent — Hakim, 25/07/2026)

Une fiche créée via l'API Shopify (découpage de coloris, produit ajouté à la main) n'est liée à aucun fournisseur DSers. Procédure, au navigateur, dans la session Chrome de Hakim :

1. DSers → **My Products** (les produits Shopify y sont synchronisés automatiquement).
2. Sélectionner la fiche → **Mapping** → coller l'**URL AliExpress de la fiche mère**.
3. ⚠️ **CORRECTION du 25/07/2026 — l'auto-matching par SKU N'EXISTE PAS.** Vérifié sur 19 fiches : DSers rattache bien le **fournisseur**, mais laisse **toutes les variantes vides**. Il faut apparier **à la main**, variante par variante, en Mapping basique.
   Méthode qui marche : lire les SKU réels via l'**API Shopify** (lecture seule) pour construire la table de correspondance, puis apparier dans DSers en s'y référant. Les SKU restent donc essentiels — non pour un automatisme, mais comme **source de vérité de l'appariement**.
   ⚠️ **Piège d'interface** : les menus DSers se repositionnent après ouverture, ce qui provoque des erreurs de sélection. **Vérifier le libellé réellement sélectionné avant chaque validation**, et contrôler la fiche avant d'enregistrer. Exemples de valeurs qui se ressemblent dangereusement : `no logo` / `corgeut` · `Black dial leather` / `Black dial leather M` · `bronze case-no logo` / `bronze case-logo`.
   ⚠️ La grille **Unmapped ne se rafraîchit pas toujours** après enregistrement : recharger avant de conclure qu'une fiche reste à traiter, sous peine de remapper une fiche déjà faite.
4. **Contrôle obligatoire fiche par fiche** avant de passer à la suivante : au moins une variante liée, et le SKU affiché correspond bien à la variante Shopify. Une fiche mal mappée = une commande non transmise au fournisseur.

⚠️ Ne jamais modifier un SKU pour « faire correspondre » un mapping : c'est le SKU qui porte la correspondance, pas l'inverse.
