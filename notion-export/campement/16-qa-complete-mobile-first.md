# 16 · QA complète mobile-first

- **URL Notion** : https://app.notion.com/p/3a71f38c31548159bdaec8a542b3ed59
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 5 · QA & clôture |
| Ordre | 16 |
| Statut | À faire |
| Responsable | Agent |
| Dépend de | 09, 10, 11, 12, 13, 14, 15 |
| Livrable | Rapport QA dans le runbook + liste de correctifs appliqués |

---

## Objectif

Parcours client complet sans accroc, **mobile d'abord** (règle), puis desktop.

## Skills à invoquer (globaux, via le Skill tool)

- `web-design-guidelines` — audit UI/accessibilité (100+ règles) sur home, PDP, collection, panier.
- `ui-ux-pro-max` — 98 guidelines UX pour la passe mobile.

## Checklist

- **Home** : hero, badges, marquee, collections, avis, USP, FAQ, footer — liens tous fonctionnels.
- **PDP** (≥ 2 produits : 1 cher, 1 accessoire) : badge avis, prix + barré + badge promo, bloc 4x (présent \> 30 €, absent \< 30 €), variantes FR, barre livraison avec **dates en français**, cartes confiance, accordéons (Description ouverte, HTML propre), e-mail contact@\<marque\>.fr partout.
- **Panier + checkout** jusqu'à l'écran de paiement : livraison 0 €, délais, champs.
- **Pages légales** ouvertes une par une (grep visuel ancienne marque).
- **Collections, recherche, 404, page suivi/contact.**
- Vitesse perçue (images lourdes ?), console sans erreur bloquante.
- Storefront sous mot de passe : QA via session Chrome admin si le pane intégré ne composite pas sous la flottaison.

## Fini quand

Rapport QA écrit dans le runbook, correctifs appliqués et re-vérifiés, liste « reste pour Hakim » explicite (placeholders avis, publication du thème, promos).
