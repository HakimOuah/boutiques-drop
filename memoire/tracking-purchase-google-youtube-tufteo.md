---
name: tracking-purchase-google-youtube-tufteo
description: Diagnostic Purchase jamais reçu sur Tuftéo (sept. 2026) — pièges de lecture Google Ads/Shopify et recette de test qui marche
metadata: 
  node_type: memory
  type: project
  originSessionId: a2f71cad-58d7-40f7-9631-24f202d297ef
  modified: 2026-09-14T07:16:45.862Z
---

Tuftéo (Ads 273-879-4499) : du 24/07 au 10/09/2026, l'action « Google Shopping App Purchase » (seule action **principale**) n'a jamais reçu de ping (« Conversion has never received data »), alors que page_view, view_item, add_to_cart, begin_checkout, add_payment_info remontaient. La PMAX « Maximiser la valeur de conversion » apprenait donc sur rien. Commande #1004 : « Aucun détail de conversion » côté Shopify.

Le 10/09, Hakim a passé le pixel Google & YouTube de « Optimisé » à « Toujours activé » (Paramètres → Événements clients) et dissocié/réassocié Google Ads dans l'app (la réassociation n'a recréé aucune action ni changé les libellés). Commande test #1005 en navigation privée → le 14/09, Purchase passe à « En attente de conversions » (erreur disparue) et Shopify affiche l'attribution de #1005. Impossible de dire laquelle des deux manips a réparé ; « Optimisé » est le suspect principal. Revenir à « Optimisé » risque de recasser — arbitrage RGPD laissé à Hakim.

**Why:** Claude a d'abord conclu à tort « tracking mort » en lisant le Récapitulatif des conversions.

**How to apply:**
- Le Récapitulatif / la colonne Conversions ne comptent que les actions principales : toujours lire le tableau « Toutes les actions de conversion » (État du suivi, Principale/Secondaire). Dans l'UI Ads pilotée par Chrome, ce bouton ne s'ouvre qu'avec un `.click()` JavaScript.
- Une session admin Shopify met `Shopify.previewMode=true` : pas de bannière cookies, pas de pixels → aucun test réseau valable depuis le navigateur admin. Tester par commande réelle (code −100 %) sur téléphone en navigation privée.
- Le ping suffit à lever « never received data » même sans clic pub ; la conversion n'apparaît dans « Toutes les conversions » que si elle est attribuée à une annonce. Google met plusieurs heures à jours à mettre l'état à jour.
- L'onglet Pages Web reste vide avec le pixel Shopify (sandbox) : pas une preuve de panne.
- Sessions Chrome : le navigateur nommé « tuftéo » porte Ads + Shopify Tuftéo ; Browser 1 a basculé sur contact@sousabri.fr le 14/09.

Liens : [[protocole-test-ads-hakim-experts]] [[app-google-youtube-flux-vivant]] [[instrumentation-boucle-apprentissage]]
