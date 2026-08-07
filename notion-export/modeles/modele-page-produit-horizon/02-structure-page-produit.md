# 🧱 2. Structure de la page produit

- **URL Notion** : https://app.notion.com/p/3a11f38c315481eb9b92dc401915086f
- **Date d'export** : 07/08/2026
- **Parent** : Modèle Page Produit Shopify — Horizon

---

> Import intégral, sans résumé, de la structure réelle.

## Zone principale

La section principale est de type `product-information`, avec une galerie média et une colonne d'informations.

**Ordre exact de la colonne d'informations :**
1. Ligne de note et nombre d'avis.
2. Groupe d'en-tête :
   - titre dynamique ;
   - prix et prix comparé ;
   - paiement en quatre fois PayPal/Klarna.
3. Quatre bénéfices produit.
4. Séparateur.
5. Sélecteur de variantes.
6. Barre de livraison.
7. Bloc d'achat :
   - quantité ;
   - Ajouter au panier ;
   - paiement accéléré retiré du rendu de `buy-buttons.liquid`.
8. Cartes de réassurance et contact.
9. Accordéons produit.

**Réglages structurants** : média à gauche sur ordinateur, colonnes équilibrées, première image mise en avant, zoom média, détails sticky et ajout au panier sticky.

## Accordéons de la zone d'achat

1. Description dynamique.
2. Livraison et retour.
3. Fabrication.
4. Garantie 2 ans.
5. Contactez-nous.

Les délais, transporteurs, garantie, téléphone et promesses de retour doivent être adaptés et prouvés avant publication.

## Sections sous la zone d'achat — modèle par défaut

1. Avis clients personnalisés.
2. Produits recommandés — « Complétez votre installation ».
3. USP 1 — Écosystème.
4. USP 2 — Installation.
5. USP 3 — Transparence.
6. USP 4 — Gamme.
7. FAQ — Objections.
8. Widget TrustWILL / Trustoo.
9. Deuxième section de produits recommandés.

> ⚠️ Le modèle contient **deux systèmes d'avis** et **deux sections de recommandations**. Pour une nouvelle boutique, choisir une seule source d'avis et une seule zone de recommandations sauf justification CRO précise.

## Différence du modèle osmoseur

`product.osmoseur.json` ajoute une section **Infographies osmoseur** avec :
- `osmoseur-schema-osmose-inverse.png` ;
- `osmoseur-info-specs.png` ;
- `osmoseur-info-benefices.png`.

Les bénéfices du haut de page sont également spécifiques à l'osmoseur.

## Tableau CRO — ordre et fonction des blocs

| Ordre | Élément | Type Shopify | Emplacement | Fonction CRO | Données nécessaires | Personnalisation nécessaire | Dépendance | Statut |
|---|---|---|---|---|---|---|---|---|
| 1 | Ligne de note + nb d'avis | Custom Liquid | Colonne info, avant le titre | Preuve sociale immédiate | Note + nb d'avis réels | Oui — `4.8/5`, `312 avis` codés en dur | `rating-row.liquid` | Exemple à personnaliser |
| 2 | Titre dynamique | Bloc thème (title) | En-tête | Identification produit | `product.title` | Non (dynamique) | Horizon | OK |
| 3 | Prix + prix comparé | Bloc thème (price) | En-tête | Ancrage prix | Prix variante | Prix comparé justifiable | Horizon | À vérifier |
| 4 | Paiement 4x PayPal/Klarna | Custom Liquid | Sous le prix | Réduire la friction prix | Prix variante | Oui — logos CDN tiers, activation réelle | `payment-installments.liquid` | Exemple à personnaliser |
| 5 | Quatre bénéfices | Custom Liquid | Sous paiement, avant séparateur | Désir / bénéfices | 4 bénéfices prouvés | Oui — textes non universels | `benefits-default.liquid` / `benefits-osmoseur.liquid` | Exemple à personnaliser |
| 6 | Séparateur | Bloc thème | Colonne info | Respiration visuelle | — | Non | Horizon | OK |
| 7 | Sélecteur de variantes | Bloc thème (variant-picker) | Après séparateur | Choix produit | `product.options` | Non (dynamique) | Horizon | OK |
| 8 | Barre de livraison | Custom Liquid | Après variantes, avant achat | Réassurance / urgence douce | Délai réel | Oui — date = J+6 factice | `delivery-bar.liquid` | Exemple à personnaliser |
| 9 | Bloc d'achat (qté + ATC) | Bloc thème modifié | Zone d'achat | Conversion | Stock, quantité | Oui — paiement accéléré retiré | `buy-buttons.liquid` | À vérifier |
| 10 | Réassurance + contact | Custom Liquid | Sous le bloc d'achat | Confiance | Politiques, contact | Oui — e-mail, tél, couleurs | `reassurance-block.liquid` | Exemple à personnaliser |
| 11 | Accordéons produit | Bloc thème | Bas zone d'achat | Détails / objections | Desc, livraison, garantie | Oui | Horizon | Exemple à personnaliser |
| 12 | Avis clients | Section custom | Sous la zone d'achat | Preuve sociale | Vrais avis traçables | Oui | `bv-avis-clients.liquid` | Exemple à personnaliser |
| 13 | Produits recommandés | Section thème | Sous les avis | Cross-sell / AOV | Collection liée | Oui | Horizon | À vérifier |
| 14 | USP 1 à 4 | Sections thème | Sous les reco | Narration marque | Textes USP | Oui | Horizon | Exemple à personnaliser |
| 15 | FAQ — Objections | Section thème | Après les USP | Lever les objections | Q/R réelles | Oui | Horizon | Exemple à personnaliser |
| 16 | Widget TrustWILL / Trustoo | App block | Après la FAQ | Preuve sociale (app) | App installée | Oui | App externe | Non portable |
| 17 | 2e reco produits | Section thème | Bas de page | Cross-sell | Collection liée | Oui | Horizon | À vérifier |
