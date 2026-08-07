# 🏠 Modèle homepage Shopify Horizon

- **URL Notion** : https://app.notion.com/p/3a11f38c31548172bbaac1dc9d637e87
- **Date d'export** : 07/08/2026
- **Parent** : Modèle Page Produit Shopify — Horizon

---

> 🔗 **Modèles reliés** : Modèle Page Produit — Horizon · Modèle panier — Horizon · Preuves Produit et Boutique · Variables Page Produit. Même boutique source (Bonum Vitae), même thème (Horizon).

> ⚠️ **Les valeurs Bonum Vitae et les éléments codés en dur sont conservés comme exemples — à personnaliser / vérifier / prouver à chaque nouvelle boutique.** Ne rien modifier dans Shopify, ne rien publier.

**Légende** : 🔎 **Observé** · 🔒 **Codé en dur** · ❓ **Manquant** · 💡 **Hypothèse** · 🛠️ **Décision à prendre**.

**Sous-éléments de ce modèle** : base **Sections homepage** · base **Navigation** · base **Valeurs codées en dur — Homepage** · base **Promesses et preuves — Homepage** · base **Médias homepage** · sous-page **Bibliothèque Liquid — Homepage** (exportées dans `../bases/` et `modele-homepage-horizon/`).

---

## 1. Vue d'ensemble

La homepage Bonum Vitae va du **bandeau d'annonce** au **footer utilitaire**. Elle se compose de **3 niveaux** : groupe **Header** → modèle `templates/index.json` (10 sections) → groupe **Footer**. Elle mêle composants **natifs Horizon**, réglages propres à la homepage, et **code personnalisé Bonum Vitae** (avis + comparatif).

| Champ | Valeur |
|---|---|
| Boutique | Bonum Vitae (`bonumvitae.fr`) |
| Thème | Horizon (principal publié `MAIN`) |
| Date de lecture | 18 juillet 2026 |
| Mode | Lecture seule (fichiers du thème + menus Shopify) |
| Modification Shopify | Aucune |

> 📁 Dossier source : `boutique-pipeline/docs/horizon-product-page-reference/homepage/`. Copies de référence en lecture seule — **ne pas copier tel quel** dans un autre thème sans lire ses schémas.

---

## 2. Ordre de la homepage (14 zones)

| Ordre | Zone | Type Horizon | Fonction | Origine |
|---|---|---|---|---|
| 1 | Bandeau d'annonce | `header-announcements` | Promotions + livraison | Horizon, textes 🔒 BV |
| 2 | Header principal | `header` | Logo, nav, recherche, compte, localisation, panier | Horizon |
| 3 | Hero | `hero` | Promesse principale + CTA | Horizon, contenu 🔒 BV |
| 4 | Produits mis en avant | `product-list` | Collection `osmoseurs` | Horizon |
| 5 | Avis clients | `bv-avis-clients` | 3 témoignages | ⭐ Section personnalisée |
| 6 | Collections | `collection-list` | Navigation par besoin | Horizon |
| 7 | FAQ | `section` • `accordion` | Questions avant achat | Horizon, contenu 🔒 BV |
| 8 | Réassurance | `section` • groupes/icônes | Choix, conseil, sécurité | Horizon, contenu 🔒 BV |
| 9 | Contenu éditorial | `section` | Mise en situation carafes | Horizon |
| 10 | Comparatif | `custom-liquid` | Tableau carafe/robinet/osmoseur | ⭐ Code personnalisé |
| 11 | Pourquoi Bonum Vitae | `section` | Positionnement de marque | Horizon |
| 12 | Newsletter | `section` • `email-signup` | Collecte e-mails + remise | Horizon |
| 13 | Footer principal | `footer` | Contact, menus, newsletter, paiements | Horizon |
| 14 | Footer utilitaire | `footer-utilities` | Copyright + politiques | Horizon |

---

## 3. Design system (🔒 à personnaliser)

**Logo** : `shopify://shop_images/logo-bonum-vitae-280x80.png` — hauteur 36 px (ordi) / 28 px (mobile).

**Couleurs** :

| Rôle | Valeur |
|---|---|
| Bleu de marque | `#0E3A5A` |
| Vert de marque | `#35B6AA` |
| Beige | `#F7F4EE` / `#EFEAE0` |
| Vert très clair | `#EAF3F1` |
| Texte | `#1C2830` |
| Fond principal | `#FFFFFF` |

**Typographies** : Titres **Fraunces 600** · Texte **Inter 400** · Sous-titres **Inter 500** · Accent **Inter 700**.

**Layout** : largeur globale `narrow`. **Overlays** : bleu transparent (`#0B2B423D` hero, overlay bleu collections). **Boutons/cartes** : styles Horizon (cartes produit image+titre+prix ; cartes collection titre superposé). 🛠️ Remplacer toute la palette + typo par les tokens de la marque cible.

---

## 21. Checklist de construction

1. Identifier le thème cible et lire ses schémas
2. Définir le design system : logo, couleurs, typo, largeur
3. Recréer les menus et vérifier chaque destination
4. Configurer le bandeau d'annonce avec des offres **actives et datées**
5. Construire un hero avec **H1 unique**, CTA et médias ordi/mobile
6. Brancher la collection principale et ses cartes produits
7. Importer uniquement des avis **dont la source est documentée**
8. Sélectionner les collections et **harmoniser la limite d'affichage**
9. Adapter la FAQ aux politiques et délais réels
10. Adapter la réassurance aux engagements réels
11. Ajouter un bloc éditorial avec média + alt text
12. Recréer le comparatif à partir de données produit **prouvées**
13. Présenter la marque avec un **H2**, pas un second H1
14. Relier la newsletter à une automatisation + remise réelles
15. Construire le footer avec coordonnées + pages légales vérifiées
16. Tester mobile, clavier, lecteurs d'écran, liens, formulaires, performances

## 22. Checklist QA

- [ ] Un seul H1 est présent
- [ ] Le hero reste lisible sur mobile
- [ ] Les images ont un alt text pertinent
- [ ] Tous les CTA mènent à une destination publiée
- [ ] Les produits mis en avant sont disponibles
- [ ] Les collections affichées correspondent à la limite configurée
- [ ] Les avis possèdent une source et une autorisation
- [ ] Les dates d'avis ne sont pas trompeuses
- [ ] Les réponses FAQ correspondent aux politiques actuelles
- [ ] Les promesses de prix et de livraison sont actives
- [ ] Les URLs du comparatif existent
- [ ] Le tableau est utilisable sur mobile et au clavier
- [ ] La remise newsletter est effectivement envoyée
- [ ] Le consentement marketing est enregistré
- [ ] Les menus ordi et mobile fonctionnent
- [ ] Recherche, compte, localisation, panier fonctionnent
- [ ] Coordonnées et horaires corrects
- [ ] Pages légales accessibles
- [ ] Moyens de paiement affichés réellement actifs
- [ ] Le footer ne duplique pas inutilement les infos
- [ ] Pas de débordement horizontal
- [ ] Performances images/scripts acceptables

---

## 23. Historique des versions

| Version | Date | Source | Notes |
|---|---|---|---|
| v1 (référence) | 18 juillet 2026 | Horizon `MAIN` Bonum Vitae, lecture seule | Capture initiale : 14 zones, header→footer, avis + comparatif personnalisés. Aucune modification Shopify. |

> Cette référence décrit les fichiers/données **observés le 18 juillet 2026**. Elle ne prouve pas que remises, e-mails, livraison, avis, paiements ou politiques sont opérationnels — à contrôler dans la boutique cible avant publication.

## Sous-éléments (liens Notion)

- Base « Sections homepage » — https://app.notion.com/p/9f7583d9734b4fae9fec2fd469b2c46c → `../bases/sections-homepage.md`
- Base « Navigation » — https://app.notion.com/p/c12fd1c2e6e74f2e8edd2471f4fa65a6 → `../bases/navigation-homepage.md`
- Page « Bibliothèque Liquid — Homepage » — https://app.notion.com/p/3a11f38c3154812c8dd3eb84f0419af3 → `modele-homepage-horizon/bibliotheque-liquid-homepage.md`
- Base « Valeurs codées en dur — Homepage » — https://app.notion.com/p/b37011ab66864ac095655f7dd33e8ef1 → `../bases/valeurs-codees-en-dur-homepage.md`
- Base « Promesses et preuves — Homepage » — https://app.notion.com/p/3858d3f836974352b4b25da2df9a6be4 → `../bases/promesses-et-preuves-homepage.md`
- Base « Médias homepage » — https://app.notion.com/p/73760fdb8d18411cb65e3f7f1686a7a1 → `../bases/medias-homepage.md`
