# Rapport — sourcing vague 2, onglet « Globe et cartographie »

## Intégrité du volume (règle absolue)

- **C6 avant écriture : 54 210**
- **C6 après écriture : 54 210** — identique. Colonnes C et D non touchées sur aucune ligne existante ; les 4 nouvelles lignes « variante éclatée » ont C et D vides, conformément à la consigne.
- F3 mis à jour : `Sourcing API 14/09 — 29 produits liés (52 lignes)`.

## Ce qui a été fait

- **66 lignes produit** au total dans l'arborescence (62 lignes de la vague 1 + **4 lignes « variante éclatée »** créées sous globe terrestre vintage, globe à whisky, globe en liège et carte du monde en métal — coloris/format nettement différents, en stock, livrables).
- **52 lignes liées** (G rempli), soit **29 fiches AliExpress uniques**, vérifiées par l'API `variants` + `exact` (destination FR) — pas par SERP ni Chrome.
- **14 lignes laissées « À SOURCER »** (aucun candidat correct trouvé) : globe terrestre en français, globe terrestre relief, globe armillaire, globe rotatif (volontairement non sourcé, STOP démontré au 15/08), carte à gratter encadrée, coffret carte à gratter, mappemonde en bois (requête `wooden world map wall` hors sujet, confirmée), stickers mappemonde, cadre mappemonde, planisphère noir et blanc, planisphère grand format, planisphère enfant, carte du monde magnétique, carte de France murale.
- Vérification API systématique : `variants()` sur 32 product_id (15 « AE connu » de la colonne K + 17 nouveaux candidats tirés de `candidates/globe.json`), puis `exact()` avec les propriétés réelles de la fiche (couleur/taille/expédié depuis) pour obtenir le fret réel vers la France. Le gateway a connu une forte contention (5 agents en parallèle, comme annoncé) : 3 passes de relances ont été nécessaires ; au final **31/32 fiches vivantes**, 1 morte (`1005010155240772`, `IOPUpstreamError`, retirée du plan).

## Découverte non prévue : un « AE connu » du dossier du 15/08 ne livre plus en France

`1005010485103293` (« Toile imprimée de carte du monde », 205 ventes API, la fiche la mieux prouvée de la famille « carte du monde murale » selon le dossier) est **refusée par `exact()` sur les 5 formats testés** : `Shipping unavailable: code=505 DELIVERY_NOT_AVAILABLE_TO_YOUR_ADDRESS`. C'est une exclusion au sens du brief (« fret refusé »). Remplacée sur toutes les lignes concernées (carte mappemonde, mappemonde murale, tableau mappemonde, carte du monde murale et ses 4 variantes de libellé) par `1005008835372495` (« Carte du monde décorative 36×24″ », 600+ ventes API, note 4,8/162 avis, store Shop5409009), qui livre bien en France (port 1,99 €, 5-9 j).

## Globe bar : coût réel vérifié (au lieu de l'hypothèse fret = 0 € du dossier)

Le dossier du 15/08 chiffrait la marge du globe bar avec un fret **non mesuré, posé à 0 €** (hypothèse la plus favorable). L'API `exact()` donne maintenant le vrai calcul : fournisseur `DTrade Store FR`, expédition **gratuite depuis la France confirmée** (freight.options[0], pas une hypothèse). Coût rendu réel = 143,09 €, identique à l'ancien calcul assumé. **Verdict inchangé mais maintenant vérifié : marge 19,70 € (9,9 %), ROAS break-even 10,1 — toujours négatif.** La variante « globe bar vintage » (`1005012825681102`, 189,34 €, FR, gratuit) est encore pire : au prix cible de 199 €, la marge base HT devient négative avant même les frais de paiement.

## Statistique (52 lignes liées)

- **Coût médian (H)** : 15,59 €
- **Prix cible médian (I)** : 34,90 €
- **Marge brute médiane (J = I−H)** : 21,72 €
- **Entrepôts** : sur les 40 lignes où le fret a pu être mesuré par `exact()`, 37 expédient de Chine (92,5 %) et 3 de France (7,5 %, les 3 lignes de la famille globe-bar). 12 lignes reposent sur une fiche mono-SKU où `exact()` est structurellement inutilisable (aucune propriété de variante à passer — limite déjà notée dans `04-sourcing-economie.md` §3.1) ; leur coût est retenu fret à 0 €, hypothèse la plus favorable, comme dans le dossier source.

## Les 5 fiches les mieux prouvées (parmi celles effectivement liées)

1. `1005012374466537` — décor mural métallique carte du monde, **800+ ventes API**, ★4,9 (62 avis), Stone's Store — porte la ligne « carte du monde en métal » (famille non mesurée, désormais sourcée : coût rendu 8,08 €, cible 34,90 €, marge ≈ 26 € / 70 %).
2. `1005010493897717` — globe éducatif carte HD, 600+ ventes, ★4,5 (98 avis) — porte « mappemonde » et « mappemonde rond ».
3. `1005008835372495` — carte du monde décorative 36×24″, 600+ ventes, ★4,8 (162 avis) — porte toute la famille « carte du monde murale » après remplacement du fournisseur refusé.
4. `1005006987114384` — globe rétro déco, 268 ventes, ★4,8 (53 avis), Lost And Beautiful Store — vendeur pivot déjà identifié au 15/08, porte la ligne « globe terrestre » (tête de gondole de l'univers).
5. `1005008685663415` — petit globe noir & or, 137 ventes, ★4,7 (50 avis) — porte « globe terrestre design luxe ».

## Réserves à respecter (vérifiées, aucune levée)

- **Cartes « terre plate » exclues strictement** : aucune fiche de ce rapport ne reprend `1005004280883381`, `1005003580415849` ou `1005011811377686` (les 3 références « flat earth » identifiées dans le catalogue AliExpress de la famille « carte du monde murale »). Aucun visuel de ce dossier n'a montré de représentation plate ; à re-vérifier à la réception physique.
- **Segment jouet/interactif** : sourcé uniquement sur deux lignes (« globe terrestre interactif », « mappemonde interactive ») avec un globe AR générique (`1005008248019944` / `1005007165283763`, stores « Stone's Store » / « Record Good Moments Store », **aucune marque jouet** VTech/Clementoni/Ravensburger dans le nom boutique ou le titre) — conforme à l'exception du brief. Les lignes « enfant » restent sur des globes jour/nuit génériques, mêmes stores non-marque. Directive Jouets 2009/48/CE toujours applicable si ces lignes sont retenues.
- **Aucun globe en français trouvé** — confirmé une seconde fois sur les 29 fiches de cette vague (titres et propriétés toujours en anglais/chinois). Signalé explicitement en K sur la ligne « globe terrestre en français », laissée « À SOURCER ».
- **Globe bar** : marge négative confirmée avec coût réel (voir plus haut) — ne pas lancer sans renégocier le prix fournisseur ou revoir le prix cible à la hausse.
- **Risque fournisseur unique Aqumotic** persiste : `4001350010280` (carte liège), `1005012822744899` (liège à épingler), `33005856591` et `1005006527604495` (globe liège) appartiennent tous à la boutique **Snowflake Trading Store** / stores liés à la marque Aqumotic — si Aqumotic s'arrête, toute la sous-famille liège s'arrête avec.
- **Bois murale** : fournisseur unique toujours confirmé (`32867430455`, 4 ventes API, store « Vinyl Record Clock Timemaker »), fret non mesurable (fiche mono-SKU).

## Prix cible (I)

- Conservés inchangés là où déjà chiffrés par le dossier (globe terrestre 44,90 €, globe bar 199 €, carte à gratter 19,90 €, carte du monde en bois murale 89,00 €).
- Ailleurs, fixés « juste sous le comparable » quand un comparable était cité (carte murale/liège : alignés sous les médianes 39 €/41 € citées dans le dossier ; poster carte du monde : ramené à 14,90 € pour respecter la réserve STOP_PRIX_PANIER non franchie, médiane marché 17 €, 51 % des prix sous 15 €) ; sinon au minimum ×2 du coût rendu, noté en K.

## Ce qui n'a pas pu être fait

- Fret non mesurable sur 6 fiches mono-SKU (`1005005855031541`, `1005006159923453`, `1005009280008706`, `1005011652607369`, `32867430455`, `32877306422`) — l'API `exact()` exige au moins une propriété `--property` et ces fiches n'en exposent aucune (limite déjà documentée dans `04-sourcing-economie.md`). Coût retenu = `offer_sale_price` seul, fret 0 € posé comme hypothèse la plus favorable, exactement comme le dossier du 15/08.
- Aucun poids ni dimension récupéré (l'API ne les expose pas sur les fiches testées) — la question du fret réel sur un objet volumineux (globe 25-30 cm, meuble-bar) reste évaluée par le seul montant du fret mesuré, pas par le poids.
- Saisonnalité Q4 toujours non mesurée (hors périmètre de cette tâche).
