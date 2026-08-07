# Base « Valeurs codées en dur — Homepage »

- **URL Notion** : https://app.notion.com/p/b37011ab66864ac095655f7dd33e8ef1
- **Data source** : collection://9d9d38d5-fcc4-4fde-9672-d7f28022614a
- **Parent** : Modèle homepage Shopify Horizon
- **Date d'export** : 07/08/2026
- **Lignes exportées** : 21

## Schéma des propriétés

Élément (title) · Section (text) · Type (select : Texte, Couleur, Typo, Handle, Collection, URL, Média, Coordonnée) · Fichier source (text) · Valeur actuelle (text) · Nouvelle valeur (text) · Statut (select : À personnaliser, À vérifier, Preuve requise, Validé) · À personnaliser (checkbox) · Preuve requise (checkbox) · Responsable (text) · Date de validation (date).

## Lignes

| Élément | Section | Type | Statut | Preuve requise | Fichier source | Valeur actuelle |
|---|---|---|---|---|---|---|
| Annonce 1 | Bandeau d'annonce | Texte | Preuve requise | Oui | sections/header-announcements.liquid | Offre d'été : -20% sur les osmoseurs |
| Annonce 2 | Bandeau d'annonce | Texte | Preuve requise | Oui | sections/header-announcements.liquid | Livraison offerte, sans minimum d'achat |
| Sur-titre hero (slogan) | Hero | Texte | À personnaliser | Non | sections/hero.liquid / index.json | Bonum Vitae — L'eau pure, chaque jour |
| H1 hero | Hero | Texte | Preuve requise | Oui | sections/hero.liquid / index.json | Une eau meilleure, sans travaux ni plombier |
| CTA hero | Hero | Texte | À personnaliser | Non | index.json | Découvrir les osmoseurs |
| Collection principale | Hero + Produits | Collection | À personnaliser | Non | index.json (hero + product-list) | osmoseurs |
| 3 avis (contenu) | Avis clients | Texte | Preuve requise | Oui | index.json (blocs bv-avis) | Claire M. (5) / Karim B. (5) / Bernard L. (4) |
| Dates d'avis (relatives) | Avis clients | Texte | Preuve requise | Oui | index.json (blocs bv-avis) | Il y a 3 jours / 1 semaine / 2 semaines |
| 6 handles de collections | Collections | Handle | À personnaliser | Non | index.json (collection-list) | osmoseurs, filtres-de-douche, carafes-filtrantes, filtres-robinet, purificateurs-nomades, anti-calcaire-sans-sel |
| FAQ (5 Q/R) | FAQ | Texte | Preuve requise | Oui | index.json (accordion) | 5 questions + réponses (délais, retour, consommables, paiement) |
| Réassurance (3 blocs) | Réassurance | Texte | À vérifier | Oui | index.json (section + groupes) | Des solutions à chaque usage / Le bon équipement / Achetez l'esprit tranquille |
| Contenu éditorial | Éditorial | Texte | À personnaliser | Non | index.json | Au quotidien / L'eau du robinet, en mieux, à chaque repas |
| Comparatif (contenu tableau) | Comparatif | Texte | À personnaliser | Oui | custom-liquid/comparatif-solutions.liquid | Carafe / Filtre robinet / Osmoseur × (installation, idéal, budget, entretien) |
| 3 URLs produit (comparatif) | Comparatif | URL | À personnaliser | Non | custom-liquid/comparatif-solutions.liquid | /products/carafe-... /products/filtre-...glq11 /products/osmoseur-ro-600g-... |
| Texte de marque | Pourquoi Bonum Vitae | Texte | À personnaliser | Non | index.json | Pourquoi Bonum Vitae ? (⚠️ codé en 2e \<h1\>) |
| Remise newsletter | Newsletter + Footer | Texte | Preuve requise | Oui | index.json (email-signup) + footer | 10 % de remise sur votre première commande |
| Coordonnées | Footer | Coordonnée | À vérifier | Non | sections/footer.liquid / footer-group.json | Lun–ven 9–18h · +33 7 56 82 80 94 · contact@bonumvitae.fr · 47 rue Vivienne, 75002 Paris |
| Menus (handles + liens) | Navigation | Handle | À personnaliser | Non | data/navigation-menus.json | main-menu, footer, informations, customer-account-main-menu |
| Couleurs de marque | Design system | Couleur | À personnaliser | Non | config/settings_data.json | #0E3A5A · #35B6AA · #F7F4EE · #EFEAE0 · #EAF3F1 · #1C2830 |
| Typographies | Design system | Typo | À personnaliser | Non | config/settings_data.json | Fraunces (titres 600) · Inter (texte 400/500/700) |
| Médias (hero, logo, éditorial) | Divers | Média | À personnaliser | Non | index.json / settings_data.json | bv-hero-osmoseur-desktop-2400x900.png · logo-bonum-vitae-280x80.png · carafe-filtrante-36l-utilisation-famille.png |
