# 00 · Kick-off — création boutique & fiche

- **URL Notion** : https://app.notion.com/p/3a71f38c31548177890ec2e4a85c7aed
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 0 · Pré-lancement |
| Ordre | 0 |
| Statut | À faire |
| Responsable | Agent + validation Hakim |
| Dépend de | Produit validé GO (4 gates : marché, fournisseur, échantillon, lancement) |
| Livrable | Boutique Shopify accessible + campement dupliqué + dossier local + runbook |

---

## Objectif

Poser le socle : boutique Shopify vivante, campement dupliqué et adapté, dossier local créé.

## Côté Hakim (bloquant)

- Créer la boutique Shopify et **autoriser le connecteur MCP** (OAuth) sur CETTE boutique.
- Acheter le domaine + créer l'adresse **contact@\<marque\>.fr**.
- Configurer les paiements (Stripe/PayPal) — credentials = jamais l'agent.

## Côté agent

1. Dupliquer la page 🏕️ Campement type → « Campement — \<Marque\> », remplir l'en-tête (domaine, e-mail, store, mot de passe storefront, liens sourcing/PDF images/référence légale).
2. Créer la ligne dans la base **Boutiques** de Notion (statut « À créer », relation produit).
3. Créer le dossier local `boutique-pipeline/boutique-<nom>/` + `runbook-<nom>.md` (journal de toutes les passes).
4. Vérifier la connexion : `get-shop-info` doit renvoyer la bonne boutique.

## Garde-fous

- **JAMAIS `switch-shop`** : ça invalide la connexion MCP pour tout le monde ; seule une ré-autorisation OAuth par Hakim répare.
- Noter le mot de passe storefront dans l'en-tête du campement.

## Fini quand

get-shop-info OK, campement adapté, runbook initialisé, fiche Notion créée.
