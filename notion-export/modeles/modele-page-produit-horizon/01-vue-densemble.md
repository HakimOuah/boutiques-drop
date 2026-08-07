# 🧭 1. Vue d'ensemble

- **URL Notion** : https://app.notion.com/p/3a11f38c315481f8bbc4c49f3cf8de09
- **Date d'export** : 07/08/2026
- **Parent** : Modèle Page Produit Shopify — Horizon

---

## Objectif du modèle

Ce document décrit la structure réelle de la page produit Horizon de Bonum Vitae et rassemble les blocs Liquid personnalisés utilisés. Il sert de référence pour Notion et pour reconstruire ce modèle sur de futures boutiques.

## Trois niveaux à distinguer

1. **Architecture CRO réutilisable** : ordre des informations, bénéfices, livraison, réassurance, accordéons, avis et recommandations.
2. **Blocs Liquid portables après adaptation** : note, paiement fractionné, bénéfices, livraison, réassurance et carrousel d'avis.
3. **JSON propre à Horizon** : identifiants générés, hiérarchie de blocs, app blocks et paramètres du thème. Ne pas copier ce JSON dans un autre thème sans lire les schémas du thème cible.

## Thème source

- **Boutique** : Bonum Vitae (`bonumvitae.fr`)
- **Thème** : Horizon, actuellement publié (`MAIN`)
- **ID du thème** : `gid://shopify/OnlineStoreTheme/203569004882`
- **Date de capture** : 18 juillet 2026

## Dossier local

```
/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/docs/horizon-product-page-reference/
```

## Liste des fichiers disponibles

| Fichier | Rôle | Taille |
|---|---|---|
| `HORIZON-PAGE-PRODUIT-NOTION.md` | Documentation principale | 762 lignes |
| `templates/product.json` | Modèle produit par défaut | ~83 Ko / 2040 lignes |
| `templates/product.osmoseur.json` | Modèle spécifique osmoseur | ~87 Ko / 2149 lignes |
| `sections/bv-avis-clients.liquid` | Section avis clients (sans dépendance externe) | 188 lignes |
| `blocks/buy-buttons.liquid` | Bloc d'achat Horizon modifié | 634 lignes |
| `custom-liquid/rating-row.liquid` | Ligne de note et d'avis | 10 lignes |
| `custom-liquid/payment-installments.liquid` | Paiement 4x PayPal/Klarna | 52 lignes |
| `custom-liquid/benefits-default.liquid` | Bénéfices génériques | 1 ligne |
| `custom-liquid/benefits-osmoseur.liquid` | Bénéfices osmoseur | 1 ligne |
| `custom-liquid/delivery-bar.liquid` | Barre de livraison | 54 lignes |
| `custom-liquid/reassurance-block.liquid` | Bloc de réassurance | 111 lignes |
