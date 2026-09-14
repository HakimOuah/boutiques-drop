# Rapport — onglet « Poufs » (Google Sheet Niches SMP)

## Ce qui a été fait
- Vérifié que l'onglet « Poufs » n'existait pas (`read A1` → réponse non JSON).
- Dupliqué `🧩 MODÈLE` → `Poufs`.
- Écrit l'en-tête : B2 « Poufs » ; C3 « UNIVERS » ; F3 « Arborescence faite — sourcing en attente » ; C4 « FR » ; F4 « 2026-09-14 » ; C5 = note complète (sources, cadre, exclusions, lectures A/B).
- Écrit l'arborescence A8:K65 (58 lignes) : 1 tête + 9 collections + 48 produits.
- Écrit l'index, ligne 22 (formules `INDIRECT`/`COUNTIF` sur B:J, comme demandé).
- Relu A6:M6, A2:M5 et A22:M22 pour vérifier.

## Résultat (formules row 6, calculées automatiquement — non touchées)
- **C6 Total retenu = 73 855** (dont tête 12 100 + collections 47 305 + produits mesurés 14 450)
- K6 Seuil = 30 000 (mode UNIVERS) · **M6 Verdict = PASS**
- Index ligne 22 : Poufs / UNIVERS / FR / Arborescence faite — sourcing en attente / pouf poire / 12 100 / 30 000 / PASS / **9 collections** / **48 produits**

## Collections (9), triées par net B décroissant (source 03-verification-serp.md)
1. Pouf poire classique (adulte) — 14 260 (8 produits)
2. Coussin de sol — 8 100 (5 produits)
3. Repose-pieds / ottoman — 6 100 (6 produits)
4. Pouf extérieur — 5 940 (6 produits)
5. Pouf géant / XXL — 4 630 (5 produits)
6. Fauteuil pouf — 4 540 (5 produits)
7. Housses et rembourrage — 1 945 (6 produits)
8. Canapé pouf — 1 200 (4 produits)
9. Pouf gamer — 590 (3 produits)

Collection F2 « pouf enfant » volontairement **exclue** : Search n/a sur 3 formulations mesurées (01-/02-), et le dossier dit explicitement (04-, section 5) de ne pas en faire une tête/collection — rayon réel chez BBO mais sans volume Search.

## Sources des volumes
Uniquement `boutique-pipeline/analyses/2026-09-03-univers-poufs/` (00- à 07-, DataForSEO France, témoin `tufting` 12 100 stable) + `registre-candidats.md` (contexte du statut REVIEW_PREQUALIFICATION). Aucun volume inventé : tout mot-clé mesuré porte sa source dans la colonne K ; les produits sans mot-clé mesuré ont D vide et sont nommés d'après les catalogues concurrents (Big Bertha Original, Bananair, Happers, Casabiloba, Iconpouf — 04-cartographie-concurrents.md).

## Prix cibles (I)
Positionnés « juste sous le comparable indépendant » (Bananair, Happers, Casabiloba, Iconpouf — jamais BBO comme marque officielle à copier au centime, jamais marketplace) :
- Cœur poire adulte : 109,90 € (repris tel quel du prix proposé en 03-, juste sous BBO médiane 129,90 / Iconpouf 119,99).
- Coussin de sol : 49,90–59,90 € (sous BBO médiane 64,90).
- Repose-pieds/ottoman : 39,90–84,90 € selon taille (sous BBO petit/gros 50/90).
- Extérieur : 54,90–99,90 € (bande sonde 80–160 €).
- Géant/XXL : 134,90–249,90 € (sous BBO 149,90–280).
- Fauteuil : 134,90–229,90 € (sous Casabiloba 139 / Iconpouf 190).
- Housses/billes : 9,90–44,90 € (consommable, sous Bananair 27).
- Canapé pouf : 279,90–349,90 € (sous BBO Albert/Joséphine 300+).
- Gamer : 79,90–109,90 € (sous Happers ~89 / best-seller BBO 99,90–109,90).

G et H (lien/prix AliExpress) laissés **vides partout** : le sourcing est vague 2. La colonne K porte systématiquement une requête AliExpress anglaise suggérée (ex. « AE: corduroy bean bag chair cover », « AE: EPS foam beads bean bag filler »).

## Réserves à connaître avant la vague 2
- Cadre = **REVIEW_PREQUALIFICATION** (pas PASS) : lecture A (36 095) reste sous le plancher d'analyse d'origine (37 500) ; seule la lecture B (54 730 / étendu 47 305) passe. Le PASS affiché en M6 est celui du **modèle de ce Sheet** (seuil 30 000), pas une requalification du statut du dossier.
- `pouf géant` reste un STOP en PRODUIT PUR (07/08) ; repris ici uniquement comme famille F3 d'un univers, jamais additionné pour franchir un seuil.
- Sourçabilité 70 % du plancher AliExpress **non tenue** au 03/09 (F9 coussin trop petit ; F1/F3 remplis hors délai 30–38 j ; seul F8/SONGMICS tient <15 j) — à revalider en vague 2, pas à l'arborescence.
- F7 pouf extérieur est saisonnier (Trends 5 ans : creux hiver, pic août–novembre).
- Trustpilot BBO 1,9/62 — trou de réputation du leader, pas une preuve de demande.
- Aucun Chrome utilisé, aucun commit, aucun autre onglet touché.
