# Base « Sections homepage »

- **URL Notion** : https://app.notion.com/p/9f7583d9734b4fae9fec2fd469b2c46c
- **Data source** : collection://ece98d60-79e7-4641-aead-5fd98adba4f2
- **Parent** : Modèle homepage Shopify Horizon
- **Date d'export** : 07/08/2026
- **Lignes exportées** : 14

## Schéma des propriétés

Section (title) · Ordre (number) · Type Horizon (text) · Origine (text) · Objectif commercial (text) · CTA (text) · Destination CTA (text) · Collection/Produit (text) · Fichier source (text) · Portabilité (text) · Statut (text) · Preuve requise (checkbox).

## Lignes (triées par ordre)

| Ordre | Section | Type Horizon | Origine | Objectif commercial | CTA | Destination CTA | Fichier source | Portabilité | Statut | Preuve requise |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Bandeau d'annonce | header-announcements | Horizon natif | Promotions + livraison (urgence douce / réassurance) | — (aucun lien) | — | sections/header-announcements.liquid (+ sections/header-group.json) | Oui | Preuve requise | Oui |
| 2 | Header principal | header | Horizon natif | Navigation + accès (logo, menu, recherche, compte, localisation, panier) | — | — | sections/header.liquid (+ sections/header-group.json) | Oui | Référence | Non |
| 3 | Hero | hero | Horizon natif | Promesse principale + CTA vers la collection prioritaire | Découvrir les osmoseurs | Collection osmoseurs | sections/hero.liquid | Partielle | À personnaliser | Oui |
| 4 | Produits mis en avant | product-list | Horizon natif | Mettre en avant la collection prioritaire (osmoseurs) | Tout voir | Collection osmoseurs | sections/product-list.liquid | Partielle | À personnaliser | Non |
| 5 | Avis clients | bv-avis-clients | Section personnalisée | Preuve sociale | — | — | sections/bv-avis-clients.liquid (code : voir Bibliothèque Liquid + page produit) | Partielle | Preuve requise | Oui |
| 6 | Collections | collection-list | Horizon natif | Navigation par besoin (6 collections) | — | Pages collection | sections/collection-list.liquid | Partielle | À vérifier | Non |
| 7 | FAQ | section + accordion | Horizon natif | Lever les objections avant achat | — | — | sections/section.liquid + blocks/accordion.liquid + blocks/_accordion-row.liquid | Oui | À vérifier | Oui |
| 8 | Réassurance | section + groupes/icônes | Horizon natif | Rassurer : choix, conseil, sécurité | — | — | sections/section.liquid + blocks/group.liquid + blocks/icon.liquid + blocks/text.liquid | Oui | À vérifier | Oui |
| 9 | Contenu éditorial (« Au quotidien ») | section | Horizon natif | Mise en situation produit (carafes) | Voir les carafes filtrantes | Collection carafes filtrantes | sections/section.liquid (groupes + text + button + image) | Oui | À personnaliser | Non |
| 10 | Comparatif | custom-liquid | Custom Liquid | Guide de choix (aide à la décision) | Voir le produit (×3) | 3 URLs produit (à remplacer) | sections/custom-liquid.liquid + custom-liquid/comparatif-solutions.liquid | Partielle | À personnaliser | Oui |
| 11 | Pourquoi Bonum Vitae | section | Horizon natif | Positionnement de marque | — | — | sections/section.liquid | Oui | À personnaliser | Non |
| 12 | Newsletter | section + email-signup | Horizon natif | Collecte d'e-mails + remise 1re commande | Je m'inscris | Inscription newsletter | sections/section.liquid + blocks/email-signup.liquid | Oui | À vérifier | Oui |
| 13 | Footer principal | footer | Horizon natif | Contact, menus, newsletter, paiements | S'inscrire | Inscription newsletter | sections/footer.liquid (+ sections/footer-group.json) | Oui | À vérifier | Oui |
| 14 | Footer utilitaire | footer-utilities | Horizon natif | Copyright + politiques légales | — | Pages politiques Shopify | sections/footer-utilities.liquid | Oui | Référence | Non |
