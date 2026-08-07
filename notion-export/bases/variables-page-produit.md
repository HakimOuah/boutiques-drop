# Base « Variables Page Produit »

- **URL Notion** : https://app.notion.com/p/62d58df1507048d5956112890523a839
- **Data source** : collection://d92bdda0-aec9-4649-aba6-93862b14e0f5
- **Parent** : Modèle Page Produit Shopify — Horizon
- **Date d'export** : 07/08/2026
- **Lignes exportées** : 18

## Schéma des propriétés

| Propriété | Type | Options |
|---|---|---|
| Variable | title | — |
| Catégorie | select | Marque, Contact, Preuve sociale, Livraison, Retour/Garantie, Paiement, Design, Média, Contenu |
| Emplacement | text | — |
| Fichier concerné | text | — |
| Valeur actuelle | text | — |
| Valeur future | text | — |
| Statut de preuve | select | À personnaliser, Confirmé, À confirmer, Non vérifié, À remplacer, Interdit |
| Obligatoire | checkbox | — |
| Boutique | text | — |
| Produit | text | — |
| Source | text | — |
| Notes | text | — |
| Date de vérification | date | — |

## Lignes (18 — toutes « À personnaliser »)

| Variable | Catégorie | Obligatoire | Emplacement | Fichier concerné | Valeur actuelle |
|---|---|---|---|---|---|
| Note globale | Preuve sociale | Oui | Ligne de note, avant le titre | rating-row.liquid | 4.8/5 |
| Nombre d'avis | Preuve sociale | Oui | Ligne de note, avant le titre | rating-row.liquid | 312 avis vérifiés |
| Noms et contenus des avis | Contenu | Oui | Section Avis clients | bv-avis-clients.liquid | Avis presets (exemples à remplacer) |
| Textes des bénéfices | Contenu | Oui | Sous paiement, avant séparateur | benefits-default.liquid / benefits-osmoseur.liquid | 4 bénéfices (défaut) + 4 (osmoseur) |
| Textes de FAQ | Contenu | Oui | Section FAQ | product.json (section FAQ) | 6 questions/réponses (objections) |
| Titres des USP | Contenu | Non | Sections sous la zone d'achat | product.json (sections USP) | USP 1–4 (surtitres + titres + CTA) |
| Délai de livraison (barre) | Livraison | Oui | Barre de livraison | delivery-bar.liquid | aujourd'hui + 6 jours (offset 518400 s) |
| Délai de livraison (accordéon) | Livraison | Non | Accordéon Livraison et retour | product.json (accordéon) | 4–8 jours |
| Livraison gratuite | Livraison | Non | Barre de livraison + réassurance | delivery-bar.liquid / reassurance-block.liquid | Livraison Gratuite / offerte en France |
| Politique de retour | Retour/Garantie | Oui | Réassurance + accordéon | reassurance-block.liquid | 14 jours satisfait ou remboursé |
| Garantie | Retour/Garantie | Oui | Accordéon Garantie 2 ans | product.json (accordéon) | 2 ans (législation française) |
| Nom de marque | Marque | Oui | Réassurance, avis, contact | reassurance-block.liquid / bv-avis-clients.liquid | Bonum Vitae |
| E-mail de contact | Contact | Oui | Bloc réassurance + accordéon Contact | reassurance-block.liquid | contact@bonumvitae.fr |
| Téléphone | Contact | Oui | Bloc réassurance + accordéon Contact | reassurance-block.liquid | 07 56 82 80 94 (+33756828094) |
| Logo PayPal (paiement fractionné) | Paiement | Non | Sous le prix | payment-installments.liquid | cdn.shopify.com/.../0941.../2_f6abbd15....svg |
| Logo Klarna (paiement fractionné) | Paiement | Non | Sous le prix | payment-installments.liquid | cdn.shopify.com/.../0941.../1.svg |
| Couleurs de marque | Design | Non | Tous les blocs custom | reassurance / benefits / bv-avis-clients | #0E3A5A · #F7F4EE · #35B6AA · #EAF3F1 · #1C2830 |
| URL CDN médias tiers | Média | Oui | Note d'avis + paiement | rating-row.liquid / payment-installments.liquid | cdn.shopify.com/s/files/1/0776... et /0941... |

*Champs vides sur toutes les lignes : Valeur future, Boutique, Produit, Source, Notes, Date de vérification.*
