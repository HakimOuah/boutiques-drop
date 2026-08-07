# 12b · Panier — bannière + upsells (structure Tuftéo)

- **URL Notion** : https://app.notion.com/p/3a71f38c31548104a7a4ecb968f5ae87
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 3 · Design & contenu |
| Ordre | 12.5 |
| Statut | À faire |
| Responsable | Agent |
| Dépend de | 05, 09, 13 (livraison configurée — la bannière doit dire vrai) |
| Livrable | sections/cart-drawer-group.json + templates/cart.json poussés, accordéons réécrits, QA drawer |

---

## Objectif

Panier (tiroir + page /cart) au standard Tuftéo : bannière livraison, upsells accessoires, accordéons réassurance — le « UpCart maison » porté du thème Bonum Vitae. Références : `boutique-pipeline/docs/horizon-product-page-reference/cart/custom-liquid/cart-drawer-customizations.liquid` (code BV portable) + log d'adaptation `boutique-tufting/shopify/structure-templates-log-2026-07-21.md` § Panier + implémentation Noirmont `scratchpad → build_cart.py` (25/07).

## Skills à invoquer (globaux, via le Skill tool)

- `cro` — choix et placement des upsells, réduction de friction du drawer.
- `shopify-liquid` — blocs custom-code et sections panier.

## Procédure (thèmes FullStack)

1. **Re-tirer** `sections/cart-drawer-group.json` et `templates/cart.json` du thème courant (ne jamais écraser les modifs Hakim).
2. **Bannière livraison** : remplacer le bloc `_cart-progress-bar` (barre à seuil, incohérente si franco inconditionnel) par un bloc `custom-code` : bannière dégradé aux couleurs de la charte + « Livraison offerte en France — suivie ». À faire dans les DEUX fichiers (drawer + page).
3. **Upsell « Complétez votre collection »** : bloc `custom-code` inséré dans `cart_footer_resume_blocks` AVANT le code promo : 4 handles d'accessoires codés en dur, max 2 affichés, jamais ceux déjà au panier, bouton Ajouter en AJAX `/cart/add.js` + reload (fallback POST standard — pas de product-form-component dans FullStack).
4. **Accordéons page /cart** réécrits marque : Retours 14 jours (e-mail contact@\<marque\>) + Livraison offerte (délais cohérents avec la barre PDP).
5. **Section « Complétez votre collection » sous le panier** : section `collection-featured` (collection accessoires, grille 4, titre + bouton « Voir tous ») — elle exclut d'elle-même les produits déjà au panier sur le template cart.
6. Push : staged PUT → themeFilesUpsert \{type: URL\}. ⚠️ `upsertedThemeFiles` peut revenir VIDE sans erreur (traitement asynchrone) : re-query `updatedAt`/`size` des fichiers pour confirmer la prise.

## Garde-fous

- Choisir des upsells petits prix complémentaires du produit héros ; vérifier les handles réels avant de coder.
- La bannière ne promet que ce que le profil d'expédition fait vraiment (ticket 13 d'abord).
- QA : ajouter un produit au panier, vérifier drawer (bannière, upsell, Ajouter), page /cart mobile, et que le code promo est toujours accessible.

## Fini quand

Drawer et page /cart affichent bannière + upsells + accordéons marque, ajout upsell fonctionnel, QA mobile faite.
