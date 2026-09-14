# Rapport sourcing — onglet « Paravent » — 14/09/2026

## Contrôle du volume (règle absolue)

- **C6 avant écriture : 52 070**
- **C6 après écriture : 52 070** — identique, aucune colonne C/D des lignes existantes n'a été modifiée.
- F3 mis à jour : `Sourcing API 14/09 — 30 produits liés`.

## Résultat chiffré

- **30 lignes Produit** ajoutées, réparties sur **24 fiches AliExpress uniques** (6 lignes sont des variantes éclatées d'une même fiche, toutes signalées comme telles en note K et dans l'arborescence B).
- **30 liens G** écrits, tous vérifiés par l'API (`variants()` + `exact()` avec destination France).
- **100 % des lignes livrent depuis un entrepôt UE** (FR : 15 lignes, DE : 12 lignes, ES : 3 lignes) — aucune ligne CN retenue.
- **Coût médian : 86,99 €** ; **prix cible médian : 165,90 €** ; **marge brute médiane : 76,21 €**.

Répartition par collection :

| Collection | Lignes produit | Fiches uniques |
|---|---|---|
| Paravent intérieur (générique déco) | 10 | 9 |
| Paravent bois massif / sculpté | 6 | 2 |
| Paravent japonais / byōbu | 1 | 1 |
| Paravent rotin / cannage / bambou | 10 | 10 |
| Paravent acoustique décoratif | 3 | 2 |
| Paravent toile imprimée / design | 0 | 0 (candidat trouvé puis écarté, cf ci-dessous) |
| Paravent miroir / laqué design | 0 | 0 (aucun candidat trouvé) |

## Les 5 fiches les mieux prouvées

1. **Paravent 3 panneaux 260×180cm roulettes verrouillables** (1005012115026900) — FR, gratuit, 2-7 j, stock 31, ★5,0 (4 avis, 20 ventes), boutique Shop1105240505 (4,6/5). Coût 46,52 € → cible 93,90 €.
2. **Paravent 3 panneaux 259×182cm int/ext** (1005012193478736) — FR, gratuit, 2-7 j, stock 17, ★5,0 (2 avis, 19 ventes), boutique DUFFER TRADING3 (4,6/5). Coût 41,91 € → cible 83,90 €.
3. **WOLTU paravent int/ext 3-4 panneaux** (1005011878635369, 2 variantes 167×177/223×177) — DE, gratuit, 2-10 j, stock 30, 3 avis / 24 ventes, boutique WOLTU HAPPY HOME (4,6/5) ⚠ marque. Coût 43,96-50,62 € → cible 88,90-101,90 €.
4. **Paravent 3 panneaux roulettes fer** (1005012188365430) — FR, gratuit, 2-5 j, stock 23, ★5,0 (2 avis, 5 ventes), boutique VIKTORIJA CREATIVE 4 (4,7/5). Coût 46,74 € → cible 93,90 €.
5. **Paravent bois SucceBuy 3/4/6 panneaux** (1005012172349013, 5 variantes panneaux/finitions) — FR, gratuit, 1-5 j, stock 8-10, ★5,0 (1 avis, 8 ventes), boutique SucceBuy Tools Overseas (4,7/5) ⚠ marque. Coût 60,69-107,69 € → cible 121,90-215,90 €.

*(mention à part : le 360° roulettes universelles, 1005012466491500, a le meilleur volume de preuve — 9 avis, 39 ventes — mais stock=1, donc écarté du top 5 malgré le score.)*

## Produits sans fiche retenue (« À SOURCER »)

- **Paravent toile imprimée / design** : une seule fiche pertinente trouvée dans l'index accessible (« Paravent pliable 4 panneaux, design bohème, motif tropical », id 1005012996096215, coût 102,20 €, DE, gratuit, 3-8 j, stock 9). **Écartée** : le prix cible « juste sous » le comparable indépendant (bimago.fr 83-125 €, plafond 119,90 €) ne laisse qu'un coefficient ×1,17 sur le coût — sous le seuil viable. Note posée dans K de la collection.
- **Paravent miroir / laqué design** : aucune fiche pertinente. La requête « mirror room divider » ne renvoie que des miroirs muraux/tuiles décoratives, jamais un paravent — confirmé par relecture systématique des titres (aucun n'a été forcé dans le catalogue). Note posée dans K de la collection.
- Candidats tentés puis refusés en livraison France (non repris) : 1005012224230250 et 1005008842241619 (rotin/bambou, DELIVERY_SERVICE_EXCEPTION), 1005010790097685 et 1005009555136069 (rotin, DELIVERY_NOT_AVAILABLE_TO_YOUR_ADDRESS), 1005010813015975 (bambou « époque Song », variante ambiguë — 4 SKU identiques au contrôle exact, non résolu), 1005008108335941 en expédition Royaume-Uni (refusé — la variante Espagne du même produit, elle, est retenue).
- **Paravent mobile pliable pour bureau** (1005010570180940, 4 coloris) : vérifié livrable mais depuis la Chine avec **port payant 78,39-134,37 € et délai 15-50 jours** — exclu du catalogue comme non viable pour un drop FR (coût réel aurait dépassé 115 € rien qu'en port).

## Réserves

1. **Passerelle API très instable pendant l'essentiel de la session** (`ssh_exit=137`, timeouts répétés — probablement la charge cumulée des 5 agents partageant l'accès). Sur les 42 PID candidats, le premier passage n'en a validé que 15 ; il a fallu 5 vagues de nouvelles tentatives pour atteindre 38 fiches vivantes puis 36 vérifications `exact()` réussies. Cela explique l'essentiel du temps passé sur cette tâche.
2. **HOMCOM/VEVOR/Aosom exclus** conformément à la consigne (ancre de prix du STOP du 02/08) — ces marques représentaient une part importante des meilleures ventes dans les candidats fournis (ex. HOMCOM apparaît dans plus de 15 des 180 candidats collectés), ce qui réduit mécaniquement le volume de fiches disponibles.
3. **Rotin/cannage/bambou n'a aucun comparable indépendant mesuré** dans le dossier d'origine (phase2/3 l'ont cité comme matière sans seed de volume isolé). J'ai positionné le plafond de prix cible sur la fourchette « bois massif » déjà mesurée (Leroy Merlin 155 €, vidaXL 189 €, MdM 199 €, Vente-unique 317 €) comme analogue le plus proche — **à valider par Hakim**, chaque note K de cette collection porte la mention.
4. **Coefficient ×2 non tenu sur 6 lignes** (toutes signalées `⚠ marge` en colonne K avec le coefficient réel) : le coût AliExpress de ces fiches premium (129-206 €) est déjà proche ou au-dessus du comparable indépendant identifié, donc appliquer un ×2 strict aurait exigé un prix hors marché. J'ai choisi de plafonner « juste sous le comparable » (marge réelle 28 à 47 %, jamais négative) plutôt que d'inventer un prix non compétitif ou d'écarter des fiches par ailleurs vérifiées, livrables et en stock. Détail : Cloison japonaise ×1,39 (marge 50 €/28 %), 4 lignes rotin/bambou ×1,46 à ×1,90 (marge 94-160 €), Paravent 6 panneaux tissu beige ×1,82 (marge 79 €/45 %).
5. **4 lignes en stock = 1** (1005012466491500, 1005012405456564 « Noir », 1005012699536796, 1005012732097477) — signalées `⚠ stock bas` en K ; risque de rupture avant la première commande, à revérifier avant toute mise en avant publicitaire.
6. **5 lignes issues d'une même fiche** (SucceBuy bois 1005012172349013, panneaux 3/4/6 en deux finitions) — légitimes (tailles/panneaux nettement différents, chacun vérifié séparément en stock et livraison) mais à garder à l'esprit : 30 lignes ≠ 30 fournisseurs différents.
7. **Objectif de 40 lignes non atteint (30 lignes, 24 fiches uniques)** : le catalogue AliExpress accessible via ce canal reste structurellement pauvre pour « paravent » — constat déjà posé par l'agent précédent (rapport-onglet-paravent.md) et confirmé cette session malgré ~90 requêtes API supplémentaires (variants + exact) sur 42 PID candidats. Sur la fourchette de prix ≥50 €, hors marques exclues, hors mismatch de titre, hors refus de livraison FR, hors ports CN prohibitifs, le plafond réel atteint est 30 lignes vérifiées et honnêtes plutôt que 40 lignes dont certaines auraient été mal sourcées pour combler le compte.
8. Poids colis relevés systématiquement en K (souvent absent explicitement mais dérivé du champ `gross_weight` de la fiche) : plusieurs références rotin/bambou dépassent 10-22 kg (colis encombrant confirmé, cf réserve phase2 déjà posée sur ce point).

## Prochaines étapes suggérées

- Relancer un sourcing ciblé « toile imprimée / design » et « miroir / laqué » via `serp.py` (SERP réelle) si le blocage captcha se lève — l'index `ae.py` s'est montré structurellement pauvre sur ces deux collections précises.
- Revalider en particulier les 4 lignes stock=1 avant toute mise en Ads.
- Faire trancher par Hakim le plafond de prix « rotin/bambou » (actuellement extrapolé sur le comparable bois massif, jamais mesuré directement).
