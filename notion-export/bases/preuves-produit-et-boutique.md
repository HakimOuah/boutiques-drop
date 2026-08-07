# Base « Preuves Produit et Boutique »

- **URL Notion** : https://app.notion.com/p/b24818f752f4423589fcf18839db4cff
- **Data source** : collection://45ce74ba-1d35-486d-8f40-05e7d7480697
- **Parent** : Modèle Page Produit Shopify — Horizon
- **Date d'export** : 07/08/2026
- **Lignes exportées** : 7

## Schéma des propriétés

| Propriété | Type | Options |
|---|---|---|
| Affirmation | title | — |
| Produit | text | — |
| Variante | text | — |
| Statut | select | Confirmé, À confirmer, Non vérifié, À remplacer, Interdit |
| Autorisée | checkbox | — |
| Conditionnelle | checkbox | — |
| Interdite | checkbox | — |
| Source | text | — |
| Lien ou fichier | url | — |
| Commentaire | text | — |
| Responsable de la vérification | text | — |
| Date de vérification | date | — |

## Lignes

| Affirmation | Produit | Statut | Autorisée | Conditionnelle | Interdite | Source | Commentaire |
|---|---|---|---|---|---|---|---|
| Livraison offerte en France : 4–8 jours | Tous | À confirmer | Non | Oui | Non | À fournir (transporteur / fournisseur) | Dépend de la politique de livraison réelle et du délai entrepôt. |
| Retours gratuits sous 14 jours (satisfait ou remboursé) | Tous | À confirmer | Non | Oui | Non | Politique de retour de la boutique | Conforme uniquement si la politique de retour l'indique réellement. |
| Garantie 2 ans | Tous | À confirmer | Non | Oui | Non | Législation française (garantie légale de conformité) | Garantie légale FR applicable ; vérifier la formulation exacte selon le produit et le vendeur. |
| Paiement en 4x avec PayPal / Klarna | Tous | À confirmer | Non | Oui | Non | Config paiement de la boutique | Ne pas promettre si PayPal/Klarna ne sont pas réellement activés ; éligibilité non contrôlée côté code. |
| Rejet optimisé 2:1 — moins de gaspillage d'eau | Osmoseur | À confirmer | Non | Oui | Non | Fiche fabricant à fournir | Affirmation technique : preuve fabricant requise pour le modèle exact vendu. |
| Note 4.8/5 basée sur 312 avis vérifiés | Tous (exemple Bonum Vitae) | À remplacer | Non | Non | Oui | — (codé en dur, aucune source fournie) | Ne jamais afficher sans source réelle et dynamique. Remplacer par une note d'app d'avis traçable. |
| Badge « Vérifié » sur les avis | Tous | Interdit | Non | Non | Oui | — | Ne pas afficher « vérifié » sans preuve d'avis traçable. |
