---
name: bigbuy-pack-et-plafond-catalogue
description: "BigBuy 05/09/2026 — l'API REST exige un pack Ecommerce (89 €/mois + 89 € d'inscription) ; le compte gratuit donne déjà les prix de gros ; le catalogue plafonne bas et ne couvre ni le bioéthanol sur pied ni la pressothérapie"
metadata: 
  node_type: memory
  type: project
  originSessionId: 895fd40e-b314-43c7-8ecf-c1bc8bf54472
  modified: 2026-09-05T08:32:13.643Z
---

Compte BigBuy de Hakim : **ID 972585**, e-mail `ouahabi.hakim@gmail.com`.
Les clés API se lisent dans **Mon compte → Synchronisation avec BigBuy → CLÉ API**
(une clé Production, une clé Sandbox, plus un bouton de régénération).

**La clé seule ne suffit pas.** Sans pack actif, l'API de production répond
`401 {"message":"Invalid Token"}` — exactement la même réponse qu'à une clé
inventée ou à une requête sans en-tête. Ce n'est donc pas un diagnostic
d'authentification exploitable : BigBuy ne distingue pas « clé inconnue » de
« clé non autorisée ». La fiche produit le dit en clair : *« Vous n'avez pas
encore de Pack actif ? Achetez un pack en gros pour passer des commandes »*.

**Grille des packs (relevée le 05/09/2026, hors taxes) :**

| Pack | Mensuel | Annuel (−20 %) | Inscription | API / CSV |
|---|---|---|---|---|
| B2B | 0 € | 0 € | 89 € | **non** |
| Ecommerce | 89 €/mois | 74,17 €/mois | 89 € | oui |
| Marketplace | 119 €/mois | 99,17 €/mois | 89 € | oui |

Sans engagement, suspendable. Aucun minimum de commande.
`PVD` = prix de gros HT, `PVR` = prix conseillé HT, non contraignant.

**Le compte gratuit suffit pour instruire un dossier** : il donne le catalogue,
les PVD et le calcul des frais de port. Ne prendre un pack que pour synchroniser
un catalogue dans Shopify — c'est-à-dire *après* la décision produit.

**Plafond du catalogue, mesuré le 05/09/2026.** La boutique B2B est massivement
sous 40 €. Sur les deux familles retenues ce jour-là :
« pressotherapie » → **0 résultat** ; « masseur » → *Masseur de Jambe par
Compression d'Air Maspres* **InnovaGoods** (marque maison BigBuy), PVD 32,18 €,
PVR 53,63 € — le bas de gamme, pas les bottes 4 à 8 chambres du marché à
400–900 €. « bioethanol » → **une seule référence**, cheminée de table
décorative à 15,85 € ; « cheminee » → électrique (44,77 € et 64,36 €) et
accessoires, **aucune cheminée bioéthanol sur pied**.

**Piège du moteur de recherche** : il est littéral, sans lemmatisation ni
tolérance aux accents — « ethanol » rend 0 alors que « bioethanol » rend 1.
Une absence de résultat ne prouve donc pas une absence au catalogue ; croiser
avec la navigation par catégorie avant de conclure.

**Why:** Éviter de payer 89 € + 89 € pour découvrir que le catalogue ne porte
pas le mid-ticket visé. Confirme le constat général de
`boutique-pipeline/analyses/2026-09-05-fournisseurs-eu-mid-ticket.md` : sur les
fournisseurs EU, ce qui élimine n'est pas la logistique mais le plafond de prix,
et InnovaGoods plafonne bas.

**How to apply:** Instruire toute famille sur le compte gratuit d'abord. Ne
proposer le pack Ecommerce que si au moins trois références de la famille visée
sont trouvées au bon niveau de prix. Voir
[[rejets-terrain-2026-09-05-saisonnalite-et-deja-fait]].
