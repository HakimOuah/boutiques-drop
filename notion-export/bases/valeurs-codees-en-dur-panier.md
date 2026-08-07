# Base « Valeurs codées en dur — Panier »

- **URL Notion** : https://app.notion.com/p/7b04c55df71c43cb8f083c470cd3a366
- **Data source** : collection://ba83c13f-0432-4fc7-9865-821b2028e03a
- **Parent** : Modèle panier Shopify Horizon
- **Date d'export** : 07/08/2026
- **Lignes exportées** : 14

## Schéma des propriétés

| Propriété | Type | Options |
|---|---|---|
| Élément | title | — |
| Type | select | Texte, Couleur, Handle, Limite, Collection, Réglage |
| Emplacement | text | — |
| Fichier source | text | — |
| Valeur actuelle | text | — |
| Nouvelle valeur | text | — |
| Statut | select | À personnaliser, À vérifier, Validé |
| À personnaliser | checkbox | — |
| Preuve requise | checkbox | — |
| Responsable | text | — |
| Date de validation | date | — |

## Lignes

| Élément | Type | Statut | Preuve requise | Emplacement | Fichier source | Valeur actuelle |
|---|---|---|---|---|---|---|
| Livraison offerte en France | Texte | À vérifier | Oui | Bannière, au-dessus de la liste des articles du tiroir | snippets/cart-drawer.liquid / custom-liquid/cart-drawer-customizations.liquid | Livraison offerte en France |
| Complétez votre installation | Texte | À personnaliser | Non | Titre upsell tiroir + titre reco page panier | cart-drawer-customizations.liquid / templates/cart.json | Complétez votre installation |
| Ajouter (bouton upsell) | Texte | À personnaliser | Non | Bouton d'ajout du module d'upsell | custom-liquid/cart-drawer-customizations.liquid | Ajouter |
| Panier (titre de page) | Texte | À personnaliser | Non | Titre de la page panier | templates/cart.json | Panier |
| Tout voir (bouton reco) | Texte | À personnaliser | Non | Bouton de la section product-list (page panier) | templates/cart.json | Tout voir |
| Bleu de marque #0E3A5A | Couleur | À personnaliser | Non | Bannière (dégradé) + titre/prix/bouton upsell | custom-liquid/cart-drawer-customizations.liquid | #0E3A5A |
| Vert de marque #35B6AA | Couleur | À personnaliser | Non | Bannière (dégradé) + hover bouton upsell | custom-liquid/cart-drawer-customizations.liquid | #35B6AA |
| Handle upsell #1 | Handle | À personnaliser | Non | Module d'upsell (priorité 1) | custom-liquid/cart-drawer-customizations.liquid | membrane-d-osmose-inverse-ro-cartouche-de-remplacement |
| Handle upsell #2 | Handle | À personnaliser | Non | Module d'upsell (priorité 2) | custom-liquid/cart-drawer-customizations.liquid | elements-filtrants-de-robinet-anti-chlore-lot-alloet |
| Handle upsell #3 | Handle | À personnaliser | Non | Module d'upsell (priorité 3) | custom-liquid/cart-drawer-customizations.liquid | aerateur-de-robinet-economie-d-eau-buse-remplacable |
| Handle upsell #4 | Handle | À personnaliser | Non | Module d'upsell (priorité 4) | custom-liquid/cart-drawer-customizations.liquid | filtre-de-douche-parfume-anti-calcaire-corps-abs |
| Limite de 2 upsells affichés | Limite | À personnaliser | Non | Logique du module d'upsell | custom-liquid/cart-drawer-customizations.liquid | 2 (bv_count >= 2 → break) |
| Limite de 4 recommandations | Limite | À personnaliser | Non | Section product-list de la page panier | templates/cart.json | max_products: 4 |
| Collection all (recommandations) | Collection | À personnaliser | Non | Section product-list de la page panier | templates/cart.json | all |
