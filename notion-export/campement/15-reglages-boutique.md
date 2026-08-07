# 15 · Réglages boutique (devise, marchés, e-mails, paiements)

- **URL Notion** : https://app.notion.com/p/3a71f38c3154811d8d66d796f7546c80
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 4 · Réglages |
| Ordre | 15 |
| Statut | À faire |
| Responsable | Agent + validation Hakim |
| Dépend de | 00 |
| Livrable | Boutique FR/EUR propre, e-mail expéditeur correct, paiements actifs |

---

## Objectif

Tous les réglages transverses de la boutique.

## Skills à invoquer (globaux, via le Skill tool)

- `analytics` — plan de tracking minimal au lancement : GA4 + conversions, pixel Meta, UTM. Vérifier que les événements achat remontent avant toute dépense pub.

## Côté agent

- Devise **EUR**, marché principal **France**, langue du thème **FR** (attention : si la locale boutique reste EN, les dates liquide sortent en anglais → les blocs livraison codent les mois FR en dur).
- E-mail expéditeur / notification client = **contact@\<marque\>.fr** ; nom d'expéditeur = la marque.
- Favicon + logo (charte ticket 03), nom légal, adresse.
- Checkout : champs (téléphone selon transporteur), **checkout accéléré selon préférence Hakim** (désactivé sur Noirmont), tipping off.
- Notifications e-mail : vérifier l'entête/logo des e-mails transactionnels.

## Côté Hakim (bloquant)

- Activation Stripe/PayPal/Klarna (credentials, KYC).
- DNS du domaine + vérification e-mail expéditeur (SPF/DKIM via Shopify).

## Fini quand

Commande test : e-mails reçus avec la bonne identité, checkout FR/EUR, moyens de paiement visibles (PayPal/Klarna pour le bloc 4x).
