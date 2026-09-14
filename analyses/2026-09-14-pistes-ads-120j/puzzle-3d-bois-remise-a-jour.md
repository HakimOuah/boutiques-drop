# Mise à jour — Puzzle 3D bois / maquette mécanique / Book Nook (14/09/2026)

Reprise du dossier GO_CONDITIONNEL du 08/08/2026 (registre `boutique-pipeline/registre-candidats.md`, section « Salve Kraken »). Sources lues : les 6 rapports locaux du 08/08 (phase4-sourcing, sourcing-extension, arborescence, niches-kraken-phase2, instruction-theiere-puzzle3d, ads-concurrents, offres-concurrents, phase5-marge). Revalidation par API `ae.variants()`/`ae.exact()` sur les 85 fiches, catalogues `products.json` de Puzzido/Nookette/Nook-It/Bois&Maquettes/bbchoupette, 3 lookups TrendTrack exacts + 1 `find_similar_shops`.

## 1. État du 08/08 — rappel

- **Marché** : arborescence chiffrée 29 clusters SEMrush FR → **≈ 102 700 recherches/mois nettoyées** (socle prudent 75 000), ×2,5-3,4 le plancher Kraken. Découverte clé : `maquette à construire` (22 480) = vraie formulation FR, sous-estimée par le vocabulaire « puzzle 3D ».
- **Sourcing** : 85 fiches AliExpress réparties en 7 sous-catégories (circuits à billes 11, maquettes mécaniques 10, boîtes secrètes 12, monuments 8, animaux 16, bateaux&avions 11, accessoires 17), 42 en confiance A (PDP ouverte), 43 en confiance B (SERP seule, bateaux/avions et accessoires bloqués par un `net::ERR_FAILED` AliExpress en fin de session).
- **Concurrence (ads)** : Search quasi vide (1 seul annonceur sur 14 requêtes) ; **Shopping = tout le combat** (Ugears 13/40, Nook-It 28/40, Bois&Maquettes 16/40) ; 4 boutiques FR 100 % Google/0 Meta (Nookette 43 annonces, Nook-It, Bois & Maquettes, Puzzle Bois 3D).
- **Offres concurrentes** : mécaniques de panier moyen tenues par les fabricants en direct (MagicHolz, UGEARS, Robotime), quasi absentes chez les 2 revendeurs FR (puzzle-bois-3d.fr, Golemites).
- **Économie (phase 5)** : `GO_CONDITIONNEL` serré. Prix cœur retenu **69,90 €** (S2 à 59,90 € perd de l'argent au démarrage). Marge contributive 23,60 €/commande, coussin de 7 % seulement. Saisonnalité Google Trends : pic **×5-6, 5 années sur 5**, fin novembre-mi décembre. Recommandation calendaire : commande test en août, lancement Ads **début octobre**.
- **8 conditions bloquantes non levées au 08/08** : coût rendu confirmé au panier, statut TVA fournisseur, taux prestataires paiement réels, arbitrage dropship direct vs repack cadeau, conformité CE/EN71/basse tension sur le circuit électrique Ury, REP France non chiffrée, décision pricing 69,90 €, convention TTC/HT du tracking.

## 2. Ce qui a changé depuis le 08/08

### 2.1 Puzzido.com — preuve confirmée, mais nuancée

- Catalogue Shopify vérifié (`products.json`) : **87 produits**, prix 24,90-129,90 €, **médiane 58,90 €** — correspond exactement à l'énoncé. Vendeur = marque propre « Puzzido » (pas de revente Robotime/ROKR/Rolife en `vendor`), 3 mentions Robotime uniquement dans un article de blog comparatif « Puzzido vs Robotime, Ravensburger » — stratégie de contenu comparatif, pas de revente de marque officielle.
- **Arborescence quasi identique à celle conçue le 08/08** : 23 collections (mécanique, animaux, avion, bateau, monument, maison, lumineux/LED, parcours de billes, difficile/facile/intermédiaire, idée cadeau par tranche de prix). Confirme que la thèse d'arborescence était juste — et que l'espace est déjà occupé par une exécution très proche de ce que Hakim aurait construit.
- **TrendTrack (lookup exact, 4 crédits)** : créé le 25/02/2026 (donc ~7 mois d'existence, pas 120 jours comme annoncé — l'énoncé fait probablement référence à l'ancienneté des annonces Google Ads, pas du site). **Trafic réel très faible : 441 visites en août 2026** (historique 0→427→179→1441→161→441, aucune traction stable). **Seulement 2 annonces Google Ads actives**, 1 lancée dans les 30 derniers jours, reach Google 142 000 (petit). Catégorie Google : « Games ».
- **Lecture** : Puzzido a une exécution catalogue sérieuse et une arborescence bien pensée, mais son propre volume Google Ads et son trafic mesuré sont modestes — ce n'est pas un acteur qui « rafle » la catégorie, c'est une preuve de faisabilité (le marché absorbe un spécialiste multi-marques indépendant) plus qu'une preuve de saturation.

### 2.2 bbchoupette.com — la preuve existe, mais pas comme décrite

- Catalogue complet (250 produits, `products.json`) : c'est un **site jouets/éveil enfant généraliste** (montres enfant, microscopes, appareils photo enfant, apprentissage…), pas un site Book Nook/puzzle 3D. Aucune occurrence de « book nook » dans les 250 titres.
- **Mais 3 collections dédiées existent et confirment l'énoncé une fois isolées** :
  - `book-nook` : **16 produits**, 59,90-109,90 €, médiane 73,90 €.
  - `maison-miniature` : **8 produits**, 59,90-99,90 €, médiane 69,90 €.
  - `puzzle-3d` : **12 produits**, 24,90-129,90 €, médiane 52,40 €.
  - Total ≈ **36 produits** dans la zone 55-100 € — cohérent avec les « ~40 produits entre 55 et 100 € » de l'énoncé, mais c'est une poche à l'intérieur d'un site généraliste jouets enfant (22 000 visites/mois, non vérifiées TrendTrack faute de budget crédits), pas un spécialiste dédié Book Nook.
- **Lecture** : confirme surtout que le segment **Book Nook / maison miniature reste un angle à part**, distinct de « puzzle 3D bois » au sens strict — cohérent avec l'« opportunité hors périmètre » repérée le 08/08 (§10 du rapport sourcing-extension).

### 2.3 Nookette et Nook-It — la vraie concurrence FR active (déjà connue le 08/08, réactualisée)

TrendTrack exact (4 crédits chacun) :

| Boutique | Produits | Trafic (août) | Ads Google actifs | Reach FR | Mix |
|---|---:|---:|---:|---:|---|
| **Nookette.fr** | 304 | 9 822 (**-35 % / 30j**) | 10 live | 8,27 M | Search 14, Shopping 8, Youtube 5 |
| **Nook-It.fr** | 148 | 1 933 | 2 live | ~0 | Shopping 2, Search 1 |
| **Puzzido.com** | 87 | 441 | 2 live | 142 000 | Shopping 3 |

Best-sellers Nookette : Book Nook Harry Potter 62,90 € (⚠️ licence — signal que même l'acteur dominant prend le risque contrefaçon/GMC), Book Nook Beast and Beauty 69,90 €. **Nookette reste le concurrent le plus installé** (304 produits, plus gros trafic, campagnes multi-format), mais en **décroissance de trafic (-35 % sur 30 jours)** — signal à surveiller, pas nécessairement une place imprenable.

### 2.4 Crédits TrendTrack consommés

**76 crédits** (1 `find_similar_shops` limit=15 = 64 crédits — plus cher que prévu, le budget de 50 a été dépassé de 26 — + 3 `search_shops` exacts à 4 crédits chacun). Le `find_similar_shops` sur puzzido.com n'a remonté que les marques mondiales (Rolife 433k visites, Robotime 265k, ROKR 264k, MagicHolz 118k…) — peu actionnable pour la concurrence FR indépendante, l'essentiel de la valeur est venu des 3 lookups exacts.

### 2.5 Google Sheet Niches SMP

Pas d'accès au pont `tools/sheets-bridge` depuis cette session (dossier absent du repo local). **Question non résolue à vérifier par Hakim** : un onglet « Puzzle 3D » existe-t-il dans le classeur, et si oui son verdict a-t-il divergé de celui du pipeline local ?

## 3. Revalidation des 85 fiches AliExpress (14/09/2026, via `ae.variants()`)

Toutes les 85 fiches du dossier ont été rappelées via l'API (gateway `aliexpress_vps_gateway.py`), en 3 lots parallèles (~5 min au total).

### 3.1 Taux de survie global

**52 / 85 fiches vivantes = 61 %. 33 fiches mortes (39 %)**, après 37 jours.

| Sous-catégorie | Vivantes | Mortes | Survie |
|---|---:|---:|---:|
| Accessoires | 14 | 3 | **82 %** |
| Bateaux & avions | 9 | 2 | **82 %** |
| Maquettes mécaniques | 8 | 2 | **80 %** |
| Animaux | 9 | 7 | 56 % |
| Circuits à billes | 5 | 6 | **45 %** |
| Monuments | 3 | 5 | **38 %** |
| Boîtes secrètes / casse-têtes | 4 | 8 | **33 %** |

**Résultat contre-intuitif** : les fiches classées confiance **A** (PDP ouverte et jugées « solides » le 08/08) survivent moins bien (**45 %**) que les fiches confiance **B** (relevé SERP seul, jamais vérifiées en PDP à l'époque : **77 %**). Explication cohérente avec les réserves déjà écrites en août : les fiches A retenues étaient souvent celles à **preuve sociale mince** (5 à 15 avis, listings de complément pour peupler le gate v3), donc plus fragiles ; les fiches B étaient en majorité des best-sellers établis (+1 000 à +5 000 ventes) qui tiennent mieux dans la durée. **Conséquence directe** : les deux sous-catégories les plus fragiles sont justement **boîtes secrètes (33 %)** et **monuments (38 %)** — déjà signalées en août comme les plus minces en preuve sociale et les plus disputées par Robotime.

### 3.2 Prix : plutôt stable, pas de flambée Q4 pour l'instant

Sur 52 fiches vivantes avec prix comparable : **médiane -3,7 %** (légère baisse), moyenne +14,8 % tirée par 3 valeurs aberrantes (produits multi-variantes où le prix minimum relevé ne porte pas sur la même variante qu'en août — colle WUTA +271 %, diorama garage +239 %, puzzle éléphant +207 % : artefacts de comparaison, pas de vraies hausses). En excluant ces 3 : la distribution est **27 % en hausse modérée, 12 % stable, 54 % en baisse** — **aucun signal de tension prix à 5 semaines de Noël**. Ce point est à re-mesurer en octobre (le rapport phase 5 l'anticipait déjà).

### 3.3 Fret France confirmé sur les fiches cœur (`ae.exact()`)

| Fiche | Rôle | Prix 08/08 → 14/09 | Fret confirmé | Stock | Statut |
|---|---|---|---|---|---|
| **1005009120970954** (Ury, circuit à billes électrique) | Cœur S2/S2bis/S3 du calcul de marge | 27,39 € → 28,19 € | **CN confirmé** (le champ était invisible en août), Cainiao Std, **5-10 j** (livraison 19-24 sept. simulée ce jour), **+1,99 € de port jusque-là non compté** | 8 | Vivante |
| **1005009593405843** (Ury, Tour Eiffel lumineuse) | Monument pivot, preuve sociale mince déjà signalée | 13,49 € → 12,99 € | **`DELIVERY_SERVICE_EXCEPTION` — fret FR refusé aujourd'hui sur cette variante** | 3 | Vivante mais **non commandable en l'état** |
| **1005010169058252** (boîte « Puzzle Impossible ») | Produit d'appel S1 du calcul de marge | 9,49 € | — | — | **MORTE** |
| **1005006030347254** (Music Park, circuit à billes) | Meilleure fiche du rapport phase 4 | 8,79 € → 8,19 € | CN, stock 15 | 15 | Vivante, stable |

**Le produit d'appel du scénario S1 (30 €) et l'un des deux piliers du panier (le circuit électrique Ury à 27-28 €, cœur des scénarios S2/S2bis/S3) portent chacun un problème concret** : le premier a disparu, le second a un fret confirmé mais un stock de 8 unités seulement et un coût rendu réel (28,19 € + 1,99 € port = **30,18 €**, contre 27,39 € tout compris supposé en août — **+10 % sur le coût produit du scénario qui porte toute la démonstration de marge**). Remplaçant vivant identifié pour le produit d'appel : **1005010386035496** (« petite boîte magique vintage », 4,29 €, 4,8/324 ventes, TXY TOYS Store) — déjà dans la liste du 08/08, toujours vivant.

**Concentration fournisseur, réserve confirmée** : sur les 52 fiches vivantes, **Stone's Store (8) et Ury Toys Store (7) portent à eux seuls 29 %** — la réserve « un déréférencement Ury viderait 3 collections » écrite en août reste d'actualité, aggravée par le fret refusé constaté aujourd'hui sur une fiche Ury.

## 4. Conditions du GO_CONDITIONNEL — levées ou non, une à une

| # | Condition (dossier 08/08) | Statut au 14/09 |
|---|---|---|
| ① Catalogue hors-Robotime, 4 sous-catégories | **Toujours vraie en volume** (52 fiches vivantes, 0 Robotime/ROKR/Rolife) mais **fragilisée** : monuments et boîtes secrètes (les deux sous-catégories déjà les plus minces) ont perdu 62-67 % de leurs fiches vérifiées. À re-sourcer avant tout engagement. |
| ② Économie face à Amazon, marge ×2 mini sur 25-60 € | Pas re-mesurée face à Amazon cette session (hors budget), mais **le cœur du calcul (fiche Ury) coûte réellement 10 % de plus** qu'estimé en août (port non compté) — érode mécaniquement le multiple. |
| ③ Q4 / Google Trends | **Toujours levée**, saisonnalité mesurée en août (×5-6, 5/5 ans) ne se périme pas en 5 semaines. |
| Coût rendu confirmé au panier | **Partiellement fait ce jour** sur 2 fiches cœur via `exact()` : origine **Chine confirmée** (pas d'UE), délai 5-10 j, mais **port non inclus découvert sur la fiche la plus importante du calcul**, et **fret refusé sur le monument pivot**. |
| Statut TVA fournisseur | **Toujours non instruit.** |
| Taux prestataires de paiement réels | **Toujours non instruit.** |
| Arbitrage dropship direct vs repack cadeau | **Toujours non tranché** — et toujours aussi structurant (supprime le coussin de marge s'il est tranché en faveur du repack). |
| Conformité CE/EN71/basse tension (circuit électrique Ury) | **Toujours non instruit** — d'autant plus sensible que ce produit électrique est confirmé zéro-modification depuis août (même fiche, même statut). |
| REP France | **Toujours non chiffrée.** |
| Décision pricing 69,90 € vs 59,90 € | **Non tranchée**, et désormais **en tension avec la règle « juste sous le comparable »** (voir §5). |
| Convention TTC/HT du tracking | **Toujours non tranchée.** |

**Bilan : aucune condition bloquante n'a été levée depuis le 08/08.** Une (③, Q4) reste acquise. Deux (①, ②) sont **fragilisées** par la revalidation de ce jour. Les 6 autres (fiscalité, paiement, repack, conformité, REP, tracking) sont **identiques à leur état du 08/08** — 5 semaines n'ont rien changé, parce que rien n'a été instruit dans l'intervalle.

## 5. Positionnement prix — tension nouvelle à trancher

La règle maison (mémoire [[pricing-juste-sous-le-comparable]]) dit : se placer **sous le concurrent comparable**, jamais sous la marque officielle ni le marketplace. Les vrais comparables ici sont Puzzido, Nookette, Nook-It — pas Amazon/UGEARS/Robotime, qui ont servi de référence au calcul de marge du 08/08.

| Boutique | Médiane | Statut |
|---|---:|---|
| Puzzido.com | 58,90 € | Comparable indépendant FR |
| Nookette.fr | 59,90 € | Comparable indépendant FR, best-seller Book Nook |
| Nook-It.fr | 49,90 € | Comparable indépendant FR |
| bbchoupette (book-nook) | 73,90 € | Comparable, segment premium Book Nook |
| **Prix cœur retenu au 08/08 (S2bis)** | **69,90 €** | **Au-dessus de 3 des 4 comparables** |

**Le prix cœur validé par la phase 5 (69,90 €, seul scénario qui absorbe le CPA au démarrage) se positionne au-dessus de la médiane des vrais comparables FR (49,90-59,90 €), pas en dessous.** La phase 5 avait ancré 69,90 € sur les comparables Amazon (marques officielles) et sur la fourchette Shopping globale — pas sur les indépendants FR, qui n'étaient pas encore identifiés avec cette précision en août. C'est une contradiction non résolue entre deux règles maison (pricing sous le comparable vs seuil de rentabilité publicitaire) : **descendre à 59,90 € respecte la règle de pricing mais fait perdre de l'argent par commande selon le calcul du 08/08 ; rester à 69,90 € protège la marge mais positionne au-dessus du marché FR réel.** Décision à trancher par Hakim, pas par ce rapport.

## 6. Calendrier Q4 et risques

- **Aujourd'hui : 14/09/2026.** Le rapport du 08/08 recommandait une commande test en août (non faite, à confirmer) et un lancement Ads **début octobre** — fenêtre encore ouverte mais qui se resserre : il reste environ 2-3 semaines pour boutique + tracking + conformité si le lancement Ads doit démarrer début octobre comme prévu.
- **Fret confirmé aujourd'hui : 5-10 jours depuis la Chine** (Cainiao Standard) sur la fiche cœur — cohérent avec les 5-14 jours relevés en août. **Dernier jour de commande raisonnable pour Noël (livraison 25/12, marge de sécurité incluse) : autour du 8-10 décembre**, cohérent avec ce que le rapport phase 5 avait déjà anticipé (§5.1).
- **Risque non résolu et aggravé** : la contradiction dropship direct / promesse cadeau (colis chinois, pas d'emballage cadeau) n'est toujours pas tranchée, et un fret **refusé aujourd'hui** sur une fiche vivante (monument Ury) montre que la promesse de délai n'est pas garantie fiche par fiche — un contrôle systématique au panier reste nécessaire avant toute page produit publiée.
- **Risque concurrentiel Q4** : Nookette (10 annonces actives, reach 8,27 M, mix Search+Shopping+Youtube) est en ordre de bataille pour le pic de fin d'année malgré son trafic en baisse de 35 % sur 30 jours. Puzzido a une arborescence proche de celle envisagée mais un volume d'ads et un trafic modestes — la place n'est pas prise, mais la fenêtre pour s'installer avant le pic se réduit chaque semaine.

## 7. Recommandation

**Lancer après levée de conditions — pas maintenant, pas en sommeil.**

Justification :
- Le marché et la saisonnalité restent acquis (③ toujours vraie), et rien dans les deux nouvelles preuves ne démontre une saturation qui condamnerait le dossier — Puzzido a un trafic modeste, bbchoupette n'est pas un vrai concurrent dédié.
- Mais **8 des 11 conditions/points bloquants du 08/08 sont encore exactement là où ils étaient**, et la revalidation de ce jour **ajoute un problème concret plutôt que d'en résoudre** : produit d'appel mort, fiche cœur avec un coût réel +10 % et un stock de 8 unités, monument pivot au fret refusé aujourd'hui, deux sous-catégories déjà fragiles (monuments, boîtes secrètes) qui ont perdu les deux tiers de leurs fiches vérifiées, et une tension de pricing nouvelle entre la règle maison et l'économie du 08/08.
- Avec un lancement Ads visé début octobre (soit dans ~2-3 semaines) et **aucune des conditions bloquantes instruite**, le calendrier initial n'est plus tenable tel quel. Il reste toutefois assez de marge pour agir vite si Hakim tranche maintenant.

**Ce qu'il faut lever avant d'engager le budget publicitaire, par ordre de rapidité** :
1. Re-sourcer 15-20 fiches vivantes en monuments et boîtes secrètes (les deux sous-catégories tombées sous le seuil), en confirmant systématiquement le fret via `exact()` — un après-midi de travail outillé.
2. Trancher le pricing (69,90 € vs alignement 55-60 € sur Puzzido/Nook-It) — décision Hakim, pas un travail de recherche.
3. Confirmer stock et fret au panier sur les 3-5 fiches cœur retenues pour la commande test (le circuit électrique Ury à 8 unités de stock ne supporte pas un volume Q4).
4. Trancher dropship direct vs repack cadeau — condition structurante, toujours ouverte depuis 5 semaines.
5. Conformité CE/EN71/basse tension sur le circuit électrique — à demander au fournisseur avant toute publication, pas avant sourcing, mais le calendrier serré rend urgent de lancer la demande maintenant.
6. TVA fournisseur, taux paiement réels, REP France, convention tracking — plus rapides à instruire mais toujours en attente.

Si Hakim tranche les points 2 et 4 (les deux décisions, pas des recherches) dans la semaine, les points 1, 3, 5, 6 sont un travail d'agent faisable avant fin septembre — le calendrier début octobre reste marginalement tenable. Sans arbitrage cette semaine, le dossier glisse mécaniquement vers un lancement mi-novembre au plus tôt, ce qui comprime sévèrement la fenêtre d'apprentissage tROAS avant le pic de mi-décembre (le calcul du 08/08 §3.5 montre que l'apprentissage doit être fait *avant* le pic, pas pendant).
