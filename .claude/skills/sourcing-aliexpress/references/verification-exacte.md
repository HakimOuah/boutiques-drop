## La règle de lecture qui coûte le plus cher

Sur une SERP AliExpress, « 531 vendus » se lit **5,0 étoiles / 31 ventes**. Note et ventes collées. Ne pas utiliser les chiffres concaténés sans confirmation par une page produit ou une réponse API exacte.

## Niveaux de confiance

- **A** = page produit ou réponse API exacte identifiant produit, variante et destination pour les champs vérifiés
- **B** = liste de résultats ou JSON agrégé, sans vérification exacte
- **C** = titre seul

Choisir page ou API exacte selon la donnée nécessaire. En l’absence de preuve exacte, plafonner à B ; un titre seul reste C. Un niveau A sur le prix ne prouve ni qualité ni livraison réelle.

## Recette de recherche : essayer des mots distinctifs

La recherche apparie large puis trie par **popularité globale**, pas par pertinence. Un mot fréquent (montre, boîte, carte, bottle, cover) ou une requête FR naturelle = best-sellers de la catégorie.

Trois familles qui paient : référence technique (ex. NH70) · mot de métier traduit (fentes, scratch, cork) · nom du magasin.

Si les requêtes distinctives ne produisent rien, essayer une formulation ou un accès pertinent dans le budget ; déclarer la limite sans répéter indéfiniment.

Page :

`https://fr.aliexpress.com/w/wholesale-<mots-tirets>.html?SortType=total_tranpro_desc`

Union du tri **commandes** et du tri **prix décroissant**.

URL retenues : uniquement `https://fr.aliexpress.com/item/....html` — jamais une page de résultats.

## Relevé par fiche (daté)

Titre · URL · magasin · **note réelle** · **ventes réelles** · **prix de la variante visée** (promo, pas le prix de liste / d’appel, souvent le double) · stock · variantes · délai et transporteur vers la France · frais de port FR · **coût rendu** · photos + résolution · notation vendeur (% positifs) et ancienneté si dispo · protection acheteur / retours.

Priorité expédition France/UE. Délai cible : idéalement < 10 j, de préférence < 15 j.

Plusieurs fiches par candidat si possible (idéalement 3+). Alternatives et rejets **motivés**.

Vérifier qu’un article n’est pas déjà le fournisseur d’une fiche active d’une boutique de la maison.

## Contrôles produit

- Électrique, enfants, allégation santé : constater, Hakim tranche.
- Catégorie invisible à la livraison FR (ex. couteaux de cuisine) : le dire, ne pas conclure que le produit n’existe pas.
- CE / licences / origine : annoncé par le vendeur, pas un fait. Hakim tranche.
- Visuel fournisseur : **jamais** « utilisable tel quel ». La maison ne publie pas la photo brute. Un swatch 250×195 n’est pas un visuel de fiche.

Seuils souhaités (note, % vendeur, preuve sociale) : `boutique-pipeline/PRODUCT-RESEARCH-CRITERIA.md`. Sous le seuil ≠ auto-rejet ; jamais présenté comme validé — seulement « à tester avec justification ».

Prix, stocks, délais : dynamiques. Rappeler qu’ils se reconfirment au panier avant toute commande.

## Statuts autorisés (aucun autre)

1. `AUCUNE OFFRE EXPLOITABLE`
2. `OFFRE TROUVÉE` — fiche existante, éléments essentiels manquants
3. `FOURNISSEUR À TESTER` — fiche complète, réserves listées
4. `FOURNISSEUR RETENU POUR COMMANDE TEST` — meilleure fiche, réserves listées

**`GO fournisseur` n’existe pas** : il exige une commande test reçue (niveau 3).

## Interdits

Aucun achat, commande, panier, message vendeur, compte créé. Aucun verdict de conformité. Aucun commentaire sur le verdict marché. Aucune publication.
