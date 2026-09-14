# Rapport — onglet « Rideaux occultants » (Google Sheet Niches SMP)

Date : 2026-09-14. Onglet dupliqué depuis 🧩 MODÈLE, écrit de A8 à K78 (71 lignes : 1 tête + 6 collections + 64 lignes produit), formules J restaurées, ligne 19 de l'Index écrite.

## 1. Arborescence retenue et volume

Tête : **rideau occultant** — 33 100/mois (source : rapport 28/08/2026 §2.2).

Collections (6), volume = mot-clé mesuré au rapport, jamais la somme brute de famille :

| Collection | Mot-clé | Volume | Fiches sourcées | Lignes produit |
|---|---|---|---|---|
| Rideaux occultants (standard) | rideaux occultants | 18 100 | 7 | 19 |
| Rideaux thermiques | rideau thermique | 33 100 | 5 | 13 |
| Rideaux phoniques / anti-bruit | rideau phonique | 4 400 | 3 | 8 |
| Rideaux en lin | rideau lin | 5 400 | 10 | 17 |
| Rideaux velours | rideau velours | 1 900 | 3 | 5 |
| Voilages | rideaux voilage | 12 100 | 2 | 2 |

**Total lu en C6 : 108 100/mois** (tête 33 100 + collections 75 000 ; « dont produits » = 0, normal : les produits n'ont pas de volume propre). Seuil UNIVERS K6 = 30 000. **Verdict M6 = PASS.**

Lecture prudente : ce total exclut déjà les deux familles low-ticket du rapport du 28/08 (Accessoires/tringle 227 790 et une bonne part de la contamination du parent `rideau`). En ne comptant que les 3 familles d'intention du rapport (occultation+thermique+phonique, périmètre le plus sûr économiquement), le marché mesuré était de 237 310/mois — très au-dessus du plancher, ce qui a justifié la sélection de segments plutôt qu'un simple tri par volume.

**Collections exclues et motif** (conformes à la stratégie de Hakim « entrer où les enseignes sont faibles ») :
- **Accessoires / tringle** : famille la plus verrouillée par les enseignes du dossier (Leroy Merlin, Castorama, IKEA, ManoMano = 5/10 en page 1, 10/19 sur deux pages) et sous le plancher économique (ratio prix ÷ CPC ≈ 60, médiane ~12 €).
- **Forme (doubles rideaux)** : familles résiduelle (21 780 net, 3 % du consolidé), non nommée par Hakim dans les segments à traiter.
- **Sur-mesure / confection à dimensions** : service de fabrication, non expédiable depuis un catalogue fournisseur (le rapport l'a retiré du volume adressable, §5).
- Stores Velux, rideaux de douche, stores enrouleurs/rouleaux motorisés : exclusions mission + rejet déjà au registre (« rideau/rouleau occultant motorisé » rejeté le 01/08 — trop accessible, Somfy et grandes enseignes).

## 2. Catalogue — profondeur, liens, prix

- **64 lignes produit avec lien** (≥ 60 demandé), portant sur **30 fiches AliExpress uniques** (un lien par fiche, répété sur ses lignes de variante).
- Découpage par variante : 15 fiches à 1 couleur retenue, 15 fiches à 2-3 couleurs retenues (format `· produit — coloris X`). Le lot de tailles/couleurs/finitions par fiche va de 4 à 252 SKU ; une seule couleur/taille a été vérifiée en fret FR par variante gardée (les couleurs non testées d'une même fiche ne sont pas dans le tableau).
- **Entrepôts : 100 % Chine (30/30 fiches).** Aucun entrepôt UE trouvé sur cette famille de produits malgré la recherche — réserve importante, à traiter en due diligence si le délai est jugé trop long.
- **Délais déclarés** : 7-12 j pour les fiches en port payant (~2 €), 16-37 j pour celles en port gratuit standard CAINIAO. Une poignée de fiches renvoient un délai API à borne unique (« 76-76 j ») — valeur suspecte, marquée « à revérifier » dans les notes K, à ne pas prendre pour argent comptant avant contrôle manuel.
- **Coût rendu (H, fret inclus)** : médiane **25,39 €**, mini 9,58 €, maxi 56,69 €.
- **Prix cible (I)** : médiane **89,90 €**, fixé collection par collection **juste sous le comparable indépendant** :
  - Occultation 89,90 € (99,90 € pour les 2 fiches les mieux prouvées) — sous la médiane rideauxmaison.fr occultant (101,90 €) et dans le palier spécialiste du rapport (79-179 €).
  - Thermique 99,90 € — sous rideauxmaison.fr (131,90 €), dans le palier 89-179 €.
  - Phonique 109,90 € — sous rideauxmaison.fr (131,90 €), palier 89-169 €.
  - Velours 59,90 € — entre rideauxparis.com (45,90 €) et rideauxmaison.fr (87,90 €).
  - Lin 39,90 € (49,90 € pour la fiche lin lavé à la pierre premium) — sous le socle spécialiste 30-44 € du rapport, sous rideauxmaison.fr (49,90 €).
  - Voilage 36,90 € — sous rideauxmaison.fr (39,90 €), au-dessus du bas de gamme rideauxparis.com (27,90 €), conforme à la consigne d'écarter le low-ticket.
- **Marge brute (J, formule)** : médiane **57,91 €**, aucune ligne à marge nulle ou négative.

### Comparables de prix utilisés
`curl products.json` le 14/09/2026 sur les deux boutiques TrendTrack citées par la mission :
- **rideauxparis.com** (701 produits, confirmé exact ; TrendTrack ~5K visites) — médiane globale 56,90 €, bande 4,01-1830,90 €. Prix bas, sert de repère « à ne pas descendre en dessous » pour ne pas se placer dans le low-ticket.
- **rideauxmaison.fr** (182 produits, confirmé exact ; TrendTrack ~2K visites) — médiane globale 137,90 €, bande 9,90-684,90 €. Positionnement spécialiste, plus proche du palier 79-179 € du rapport SERP — comparable principal retenu pour les prix cibles.

## 3. Les 5 fiches les mieux prouvées

| Fiche | Collection | Ventes déclarées | Avis | Note |
|---|---|---|---|---|
| Rideau occultant lot de 2 (`1005008577098201`) | Occultation | 3 000+ | 1 371 | 4,6/5 |
| Voilage mousseline de soie (`1005004820094755`) | Voilage | 1 000+ | 460 | 4,8/5 |
| Voilage lin transparent (`1005002359541531`) | Voilage | 1 000+ | 291 | 4,9/5 |
| Rideau phonique coupe-vent (`1005008285583009`) | Phonique | 262 | 37 | 4,2/5 |
| Rideau thermique doublé B (`1005010089085996`) | Thermique | 189 | 76 | 4,9/5 |

Les deux fiches voilage sont les seules candidates trouvées avec une preuve sociale forte (SERP AliExpress bloquée sur les requêtes « velvet »/« sheer »/« linen look », voir §5) ; c'est pour cela qu'elles ont été retenues malgré un coût (24,19 €) plus élevé que la médiane low-ticket du rapport (~12 €) — cohérent avec la consigne d'écarter le low-ticket.

### Trous constatés
- **Voilage** : seulement 2 fiches / 2 lignes, la collection la plus fine du catalogue. La recherche AliExpress ciblée (« sheer voile curtains », « velvet curtains blackout », « linen look curtains ») a été bloquée par le contrôle anti-bot d'AliExpress pendant toute la session (voir §5) ; les deux fiches retenues viennent d'une recherche API de repli, moins bien triée par popularité. **À reprendre en priorité** avec un nouvel essai de scraping SERP.
- **Velours** : 3 fiches seulement, toutes avec doublure occultante (aucune fiche velours « pur », déco simple).
- **Tailles** : le référentiel AliExpress est en cm libres, pas standardisé sur les tailles françaises usuelles (140×260, 135×240). La variante retenue par fiche est celle la plus proche de 140×260, mais l'écart va de 85×60 cm (petit appoint) à 200×250 cm — **à vérifier taille par taille avant DSers**.

## 4. Réserves

1. **Enseignes** : drapeau non arbitré par Hakim au rapport du 28/08 — Leroy Merlin en page 1 de 5 têtes sur 7 (dont tringle, exclue ici, et occultant/thermique/lin, retenues). Les 4 familles retenues restent dans la zone où 6 à 7 spécialistes indépendants sur 9-10 tiennent la page 1.
2. **Low-ticket** : la consigne « écarter le low-ticket <30 €/pièce » a été respectée sur le sourcing (aucune fiche retenue sous ~16 € de coût rendu, prix cible toujours ≥ 36,90 €), à l'exception assumée des 2 fiches voilage (24,19 € de coût, seules preuves solides disponibles).
3. **Tailles** : voir §3, référentiel non standardisé, à revalider taille par taille.
4. **Qualité non contrôlée** : aucune page produit publique AliExpress n'a été ouverte dans Chrome (interdit sur cette mission) — photos, avis qualitatifs et conformité (étiquetage, composition) restent à vérifier avant mise en ligne.
5. **Entrepôts 100 % Chine** : aucune fiche UE trouvée sur les 30 sourcées ; délais 7-37 jours déclarés par l'API, dont plusieurs valeurs suspectes (bornes identiques « 76-76 j ») à revérifier avant promesse client.
6. **Saisonnalité Thermique** : pic hiver net et récurrent sur 5 ans (Google Trends, rapport §6.9) — la collection Thermique (13 lignes, 2e plus fournie) ne sera pas régulière toute l'année.
7. **Bande de prix bimodale sur le Lin** : le rapport signale un vide entre ~45 € et ~180 € chez les spécialistes FR ; le prix cible retenu ici (39,90 €, 49,90 € pour la fiche premium) reste dans le socle bas, en dehors du vide.

## 5. Incident technique — SERP AliExpress

Le scraping SERP (`serp.fetch`, utilisé avec succès pour « blackout curtains thermal », « thermal insulated curtains », « soundproof curtains », « linen curtains ») a déclenché un captcha AliExpress après une rafale de requêtes en début de session, et est resté bloqué (page captcha, ~2 Ko) sur toutes les requêtes tentées ensuite (« velvet curtains blackout », « sheer voile curtains », « linen look curtains », « curtain rod extendable »), malgré plusieurs relances espacées de 45 à 150 secondes. Contournement : recherche via la passerelle API (`ae.search`, moins bien triée par popularité) pour retrouver des candidats voilage/velours exploitables. Conséquence : couverture plus fine sur Occultation/Thermique/Phonique/Lin (bien pourvues) que sur Velours/Voilage (minimales mais réelles, avec forte preuve sociale sur les 2 fiches voilage).

## 6. Vérifications post-écriture

- `A6:M6` relu : Total retenu **108 100** · dont tête **33 100** · dont collections **75 000** · dont produits **0** (normal) · Seuil **30 000** · Verdict **PASS**.
- `🗂 Index!A19:J19` relu : `Rideaux occultants | UNIVERS | FR | Sourcing API niveau A (prix DS + fret FR) | rideau occultant | 33100 | 30000 | PASS | 6 | 64`.
- Formules J8:J78 vérifiées sur échantillon (ex. ligne 10 : 89,90 − 16,89 = 73,01 ✅).
- Aucun autre onglet du Sheet modifié. Aucun commit, aucun fichier écrit dans les dépôts, aucun Chrome utilisé.
