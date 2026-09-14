# Rapport — Sourcing API vague 2 — onglet « Poufs » (14/09/2026)

## Intégrité du volume (règle absolue)
- **C6 avant écriture** : 46 830 (dont tête 12 100 / collections 21 480 / produits 13 250, seuil 30 000, verdict PASS)
- **C6 après écriture** : 46 830 — **identique**, colonnes C/D non touchées, ordre des lignes existantes préservé.
- `F3` mis à jour : `Sourcing API 14/09 — 71 produits liés`.

## Volumétrie
- 48 lignes produit de départ (candidats.json, 9 requêtes ; `bean bag filling` confirmée hors sujet à 90 % — seules les fiches de billes de remplissage EPS en ont été retenues).
- **40/48** lignes produit ont reçu un lien vérifié par l'API (`variants` + `exact`).
- **8/48** lignes n'ont aucun candidat conforme vérifiable → **À SOURCER**, G/H laissés vides :
  - coussin de sol carré motif graphique
  - coussin de sol rond boho *(une fiche « Pouf de sol style crème » existe mais reste ambiguë côté API — 8 SKU non discriminables malgré variantes précisées, probablement un bug de traduction des propriétés ; non vérifiable de façon fiable)*
  - coussin de sol XXL méditation *(seule fiche trouvée = 40×40 cm, déjà signalée trop petite le 03/09 ; pas de fiche à la bonne taille)*
  - repose-pieds bureau ergonomique
  - pouf fauteuil duo 2 places *(aucune fiche confirmant réellement 2 places)*
  - fauteuil pouf extérieur résine tressée
  - kit recharge billes + housse pouf *(pas de fiche bundle housse+billes en un seul lien ; à composer manuellement à partir des lignes « housse coton lin » et « billes EPS »)*
  - canapé pouf extérieur modulable
- **+31 lignes variantes** créées sous 16 produits parents (coloris/tailles, en stock et livrables FR) → **71 lignes liées au total** (≥ 70 demandé).
- **31 fiches AliExpress uniques** mobilisées (plusieurs produits parents partagent une même fiche mère quand c'est la meilleure option prouvée : ex. D90cm OTAUTAU pour F1-XL et F3 ; velours côtelé D85cm pour F1-cotelé et F6-gamer ; canapé-pouf mousse mémoire pour F3-XXL/F4-modulaire/F4-convertible).
- **4 fiches trouvées mortes** en vérification API (retirées, remplacées) : `1005006840948200`, `1005006031117030`, `1005006111412208`, `1005006689711343`.

## Entrepôts
- **11/71 lignes (15,5 %) en entrepôt UE** (Allemagne, Pologne, France) : pouf poire adulte grand format (DE, 3 coloris), fauteuil poire design adulte (PL, 4 coloris), pouf gamer velours côtelé à dossier (DE), repose-pieds pouf entrepôt FR (SONGMICS, 2 coloris), pouf geant Mammouth (PL).
- Le reste part de Chine, la majorité en fret standard 7-15 j, mais **plusieurs familles restent en oversize 22-44 j** (voir réserves).

## Coût / prix / marge (sur les 71 lignes liées)
- **Coût médian (H)** : 59,68 €
- **Prix cible médian (I)** : 99,90 €
- **Marge brute médiane (J)** : 30,82 €
- **8 lignes en marge négative** (coût > prix cible existant, I non modifié conformément à la consigne) :
  - pouf poire bean bag compact : -17,43 € (fret 38,94 € sur une fiche censée être « compacte »)
  - pouf ottoman velours capitonné XL : -42,03 € (fret 62,94 € — fiche à fort risque, faible preuve sociale)
  - pouf géant XXL salon (+ 2 variantes) : -29,03 € (fret 45,94 €, délai 38-44 j)
  - pouf géant Mammouth famille 2 places : -22,92 € (fiche UE Pologne, 272,82 € pour une cible à 249,90 €)
  - fauteuil poire velours capitonné : -10,25 € (fiche UE Allemagne, 190,15 €)
  - billes de rembourrage EPS : -3,38 € (le prix cible à 9,90 € est structurellement sous le coût réel de la matière première)
  → Ces prix cibles sont probablement à revoir en Sheet (ils dataient de la vague 1 sans coût réel connu).

## Top 5 fiches les mieux prouvées
1. **Billes de remplissage EPS 22L (OTAUTAU TL003)** — ★4,9 (337 avis, 1000+ ventes), 5-9 j, boutique 5,0/5.
2. **Housse de pouf poire sans garnissage** — ★4,6 (136 avis, 500+ ventes), 5-9 j, boutique 4,6/5.
3. **Housse pouf coton lin déhoussable (OTAUTAU DD002)** — ★4,6 (87 avis, 248 ventes), 7-11 j, boutique 4,5/5.
4. **Pouf poire adulte grand format** — ★5,0, entrepôt **Allemagne**, 3-8 j, port gratuit.
5. **Fauteuil poire design adulte** — ★5,0, entrepôt **Pologne**, 2-9 j, port gratuit.

## Fiches vendues sans garnissage (housse seule) — écart prix/promesse
Comme demandé, signalé explicitement en K (`⚠ HOUSSE SEULE`) pour toute fiche livrée sans billes :
- **F1 Pouf poire** : « pouf poire impermeable indoor-outdoor » — seule la housse existe, pas de fiche « rempli » imperméable trouvée.
- **F9 Coussin de sol** : « grand coussin de sol 70×70 » et « coussin de sol extérieur déhoussable » — la seule fiche disponible est en réalité une housse 140×180 cm géante, pas 70×70 cm rempli (écart de taille en plus de l'absence de garnissage).
- **F7 Extérieur** (housses assumées comme telles pour presque toute la collection, aucun « rempli » extérieur livrable < 40 j trouvé) : pouf extérieur déperlant, housse Oxford 100×120, pouf de piscine flottant, coussin bain de soleil, pouf extérieur XXL terrasse.
- **F10 Housses et rembourrage** : c'est l'objet même de la collection (housse de pouf poire, housse coton lin, housse extérieure, housse XXL rechange) — cohérent, pas une réserve.
- Conséquence pour Hakim : sur AliExpress, un pouf **rempli** en < 15 j n'existe quasiment pas (confirmé pour la 2e fois après le 03/09) ; le modèle qui tient le délai est systématiquement la housse vide + billes à commander/recevoir séparément.

## Délais > 20 jours (⚠ délai, signalé en K)
Familles concernées, toutes en fret « Large Goods by Land » ou standard longue distance Chine :
- F1 poire classique côtelé D85cm (3-40 j), XL 90cm rempli (22-42 j), rempli 70cm prêt-à-l'emploi (22-27 j), chenille et noir uni (3-40 j)
- F3 géant/XXL : rempli 90cm (11-26 j), XXL salon (38-44 j)
- F4 canapé pouf modulaire/convertible/velours côtelé (22-42 j, fiche mousse-mémoire/velours côtelé partagée)
- F5 fauteuil relax pivotant (11-26 j)
- F6 gamer avec dossier / côtelé (3-40 j, même fiche D85cm)
Ces familles recoupent exactement les réserves déjà posées le 03/09 (poire et géant remplis hors cible < 15 j) — **non résolu en vague 2**, confirmé une seconde fois avec des fiches parfois différentes.

## Marques à risque GMC (⚠ marque)
- **SONGMICS** (repose-pieds entrepôt FR, ligne 44 + 1 variante) — marque associée Amazon signalée en K comme demandé. Entrepôt FR et délai 2-5 j réels, mais à garder en tête pour la conformité Google Shopping/Ads.

## Réserves complémentaires
- Les promesses « pivotant » (fauteuil relax), « résistant UV » (pouf jardin), « modulaire »/« convertible » (canapé pouf) ne sont **pas confirmées textuellement** par les fiches choisies — ce sont les meilleures approximations disponibles, pas des correspondances exactes.
- Le coussin de sol rond boho (ligne « coussin de sol rond boho ») a une fiche plausible en apparence, mais l'API renvoie une ambiguïté de variante irréductible (8 SKU) probablement due à un bug de traduction des propriétés (le champ affiché ne distingue pas les couleurs réelles) — laissé À SOURCER plutôt que de lier un SKU non garanti.
- Plusieurs produits partagent délibérément la même fiche mère entre collections quand c'est la meilleure preuve disponible (D90cm : lignes F1-XL et F3 ; velours côtelé D85cm : F1-côtelé et F6-gamer ; canapé mousse-mémoire : F3-XXL, F4-modulaire, F4-convertible) : cohérent en sourcing réel (un seul fournisseur pour plusieurs SKU boutique), mais à surveiller si Hakim veut des visuels différenciés par collection.
- Le plancher de sourçabilité 70 % du 03/09 (F9 coussin en particulier) reste **non tenu** : toujours aucune fiche « coussin de sol rempli à la bonne taille » trouvée sur le marché AliExpress consulté.

## Méthode
- Candidats lus depuis `candidates/poufs.json` (9 requêtes, 140 fiches uniques).
- Chaque lien écrit a été vérifié par `variants()` (titre complet, note, ventes, boutique) puis `exact()` (fret réel vers la France, stock, délai) — jamais de lien posé sans vérification API positive.
- Gateway partagée instable pendant la session (plusieurs `ssh_exit=137` / timeouts) : toutes les requêtes ont été rejouées avec retries (jusqu'à 6 tentatives, backoff) avant d'être considérées en échec réel.
- Aucun Chrome utilisé, aucun commit, aucun autre onglet touché.
