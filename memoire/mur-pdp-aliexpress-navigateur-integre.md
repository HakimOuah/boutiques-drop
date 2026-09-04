# Mur PDP AliExpress dans le navigateur intégré (constat 09/08/2026)

Dans le navigateur intégré Claude, les **pages produit AliExpress ne chargent jamais leurs données** : squelette CSR permanent (l'appel API mtop ne part pas, anti-bot baxia), et reCAPTCHA explicite en émulation mobile. Rien à contourner — c'est la règle. Le clic-through depuis une SERP ne change rien, curl non plus (HTML CSR vide, `isCSR: true`).

## Ce qui marche (recette validée nuit du 08-09/08)
- **SERP** `fr.aliexpress.com/w/wholesale-<requete>.html?SortType=total_tranpro_desc` : rendues côté serveur. Le JSON structuré complet des 60 cartes est dans `window._dida_config_._init_data_.data` (chercher `itemList.content`) : productId, salePrice, starRating, tradeDesc (« N vendus » en champ séparé — pas de piège de collage), image, sellingPoints. À extraire par `javascript_tool`.
- **API avis publique** (celle que la PDP consulte) : `https://feedback.aliexpress.com/pc/searchEvaluation.do?productId=<id>&lang=fr_FR&country=FR&page=1&pageSize=20&filter=all` → note moyenne, nombre d'avis, dates, `skuInfo`, `buyerCountry` (présence FR = signal livraison France). Fonctionne en curl.
- **Photos** : `https://ae-pic-a1.aliexpress-media.com/kf/<nom>` en pleine résolution, curl OK.

## Conséquence sur les niveaux de preuve
La classe A (PDP ouverte) est **impossible depuis le navigateur intégré de Claude** : plafond = B+ (SERP JSON + API avis + photo HD). La montée en A se fait à l'étape DSers dans le Chrome de Hakim.

**Exception constatée le 04/09/2026 (test de fumée Hermes) :** un worker kanban Hermes (`oh-sourcing`, grok-4.6, outil `browser` de Hermes = navigateur réel avec le compte AliExpress connecté) a ouvert six PDP `fr.aliexpress.com/item/...` en lecture complète — prix par variante, modale « Mode de livraison », JSON-LD, vendeur, stock — et le contradicteur (gpt-6-astra) a rouvert la même PDP pour contre-vérifier. Confiance A atteinte sans DSers. Le mur est donc propre au navigateur intégré de Claude, pas à AliExpress. Pour un sourcing en classe A sans passer par Hakim : carte kanban `oh-sourcing`. Rapport témoin : branche `agents/rasoir-sourcing-2026-09-04` de `boutique-pipeline`, fichier `analyses/2026-09-04-approfondissement-rasoir-surete/sourcing-exact.md`. Garde-fou observé : une fenêtre DSers « LOG IN » s'ouvre et le worker ne doit pas la remplir. Exemple d'application : `boutique-pipeline/boutique-seiko-mod/SOURCING-COLLECTIONS-2026-08-09.md`.

## QA photo indispensable
« Sans logo » au titre ne prouve rien : 2 fiches « sans logo » imprimaient « SUPERLATIVE CHRONOMETER OFFICIALLY CERTIFIED » (texte Rolex) au cadran, une autre « RLATIVE CHRONO ». Toujours relire la face en HD avant de pousser.
