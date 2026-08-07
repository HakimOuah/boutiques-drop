# 14 · Pages légales — dupliquer la référence et adapter

- **URL Notion** : https://app.notion.com/p/3a71f38c3154813ab59cd65b7c6b4f7a
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 4 · Réglages |
| Ordre | 14 |
| Statut | À faire |
| Responsable | Agent |
| Dépend de | 00 |
| Livrable | CGV, mentions légales, confidentialité, retours, livraison — 0 mention de l'ancienne marque |

---

## Objectif

Pages légales complètes, copiées de la boutique de référence — **par défaut : Tuftéo** (décision Hakim 25/07/2026 ; lien exact dans l'en-tête du campement) — et intégralement ré-adaptées à la marque.

## Pages

CGV · Mentions légales · Politique de confidentialité · Politique de retours & remboursement (14 j) · Politique de livraison · (+ page Contact si absente).

## Procédure

1. Récupérer le HTML des pages de la boutique de référence (API pages ou export).
2. Remplacement **exhaustif** : nom de marque, raison sociale, SIREN/adresse, URL du site, **e-mail contact@\<marque\>.fr**, délais spécifiques si différents.
3. Créer les pages via l'API, les relier au menu footer (ticket 05).
4. **Contrôle final type grep** : recherche de l'ancienne marque, de l'ancien domaine et de l'ancien e-mail sur toutes les pages → 0 occurrence.

## Fini quand

Toutes les pages en ligne, footer complet, grep négatif, e-mail cliquable correct partout.
