# ✅ 10. Checklist de création + prompt technique

- **URL Notion** : https://app.notion.com/p/3a11f38c315481d3b21cd8a3dea568e8
- **Date d'export** : 07/08/2026
- **Parent** : Modèle Page Produit Shopify — Horizon

---

## Checklist de création (par catégories)

### Préparation du thème
- [ ] Identifier le thème cible et lire ses schémas
- [ ] Créer ou dupliquer un modèle produit dédié

### Données produit
- [ ] Titre, description, prix
- [ ] Prix comparé justifiable
- [ ] 4 bénéfices prouvés
- [ ] Variantes, dimensions, matériaux, compatibilités

### Médias
- [ ] Carrousel 7 images (direction artistique cohérente)
- [ ] Textes alternatifs
- [ ] Logo / favicon / infographies (osmoseur : 3 PNG)

### Blocs Liquid
- [ ] Ligne de note (`rating-row`)
- [ ] Paiement fractionné (`payment-installments`)
- [ ] Bénéfices (`benefits-default` / `benefits-osmoseur`)
- [ ] Barre de livraison (`delivery-bar`)
- [ ] Réassurance (`reassurance-block`)

### Avis
- [ ] Un seul système d'avis
- [ ] Vrais avis traçables (pas les presets)
- [ ] Badge « Vérifié » justifié

### Paiement
- [ ] Paiement fractionné ajouté **seulement s'il est actif**
- [ ] Logos hébergés sur le CDN de la boutique

### Livraison
- [ ] Délai issu de données réelles (variante / fournisseur / métachamp)
- [ ] Mention « gratuite » conforme

### Réassurance
- [ ] Politiques réelles (retour, garantie, service)
- [ ] E-mail, téléphone, horaires, couleurs

### FAQ
- [ ] Réécrire les réponses selon le produit et les politiques réelles

### Conformité
- [ ] Promesses, avis, garanties, délais et certifications vérifiés
- [ ] Chaque affirmation liée à une preuve (base **Preuves Produit et Boutique**)

### QA ordinateur
- [ ] Rendu desktop, débordements, alignements

### QA mobile
- [ ] Rendu mobile, débordements, tap targets

### Test du panier
- [ ] Ajout au panier, quantités, règles

### Test des variantes
- [ ] Prix, stock, disponibilité par variante

### Vérification avant publication
- [ ] Thème publié vérifié avant mise en ligne
- [ ] Aucune donnée Bonum Vitae résiduelle

---

## Checklist de reconstruction (ordre — 17 étapes)

1. Identifier le thème cible et lire ses schémas
2. Créer ou dupliquer un modèle produit
3. Configurer galerie, titre, prix et variantes
4. Brancher une note d'avis dynamique réelle
5. Ajouter le paiement fractionné seulement s'il est actif
6. Ajouter quatre bénéfices prouvés
7. Ajouter une livraison issue de données réelles
8. Configurer quantité et ajout au panier
9. Ajouter la réassurance avec les politiques réelles
10. Lier la description produit dynamique
11. Rédiger les accordéons et la FAQ
12. Ajouter un seul système d'avis
13. Ajouter les médias/USP et une seule recommandation
14. Tester variantes, prix, stock, panier et paiement
15. Vérifier le rendu mobile et les débordements
16. Contrôler promesses, avis, garanties, délais et certifications
17. Vérifier le thème publié avant mise en ligne

---

## Prompt technique de transmission

```
Tu dois organiser dans Notion le modèle de page produit Shopify Horizon utilisé comme référence.

SOURCE PRINCIPALE
/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/docs/horizon-product-page-reference/HORIZON-PAGE-PRODUIT-NOTION.md

FICHIERS SOURCE
/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/docs/horizon-product-page-reference/templates/product.json
/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/docs/horizon-product-page-reference/templates/product.osmoseur.json
/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/docs/horizon-product-page-reference/sections/bv-avis-clients.liquid
/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/docs/horizon-product-page-reference/blocks/buy-buttons.liquid
/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/docs/horizon-product-page-reference/custom-liquid/

MISSION
1. Lis le document et les fichiers source.
2. Organise Notion avec : architecture, données boutique, données produit, preuves, blocs Liquid, avis, checklist de construction et QA.
3. Conserve chaque bloc Liquid séparément avec emplacement, dépendances et valeurs à remplacer.
4. Ne copie pas le JSON Horizon dans un autre thème sans lire ses schémas.
5. Ne réutilise pas IDs, app blocks, CDN, coordonnées, notes, avis, garanties ou délais comme valeurs universelles.
6. Ne republie aucun avis historique sans preuve.
7. Reconstruis l'ordre CRO dans le thème cible et adapte les composants.
8. Lie chaque promesse produit à une preuve dans Notion.
9. Avant toute écriture Shopify, vérifie le thème publié et précise si l'action touche le thème ou les données produit en ligne.
```

---

## Avertissements

- ⚠️ **Ne pas copier le JSON Horizon** dans un autre thème sans lire ses schémas.
- ⚠️ **Ne pas réutiliser** IDs, app blocks, CDN, coordonnées, notes, avis, garanties ou délais comme valeurs universelles.
- ⚠️ **Ne republier aucun avis historique** sans preuve.
- ⚠️ **Lier chaque promesse** produit à une preuve (base Preuves Produit et Boutique).
- ⚠️ **Avant toute écriture Shopify**, vérifier le thème publié et préciser si l'action touche le thème ou les données produit en ligne.
