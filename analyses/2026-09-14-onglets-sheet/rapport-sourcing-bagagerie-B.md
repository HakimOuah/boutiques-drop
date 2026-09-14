# Rapport de sourcing — Lot B (Bagagerie moto)

Collections traitées : Top cases moto · Top cases et sacoches pour chien · Valises latérales moto · Top cases et bagagerie scooter · Sacs à dos moto · Sacs casque moto.

## Chiffres

- **30 lignes « Produit » traitées** dans le périmètre du lot B : **19 liées (LIE)**, **11 laissées À SOURCER**.
- **Entrepôt UE** : 3 fiches liées sur 19 expédient depuis l'UE (Pologne, France, Allemagne, toutes en fret gratuit 3–10 j) — soit **16 %**. Les 16 autres partent de Chine (port 1,99 € en général, un cas à 15,87 €, un cas gratuit CAINIAO).
- **Coût médian (H)** des 19 fiches liées : **49,18 €**.
- **Prix cible médian (I)** : **94,90 €**.
- **Sous le plancher de 50 €** : 3 fiches (lignes 71 « sacoche scooter » à 13,90 €, 86 « sac casque antivol » à 36,90 €, 87 « sac transport casque » à 34,90 €) — toutes des petits accessoires bon marché, cohérent avec leur nature.
- **Réserve de marge (Sac à dos moto 24L, ligne 76)** : remplacée par le pid 1005007038273513 (Stone's Store, ★4.9, 348 avis, 800+ ventes) — coût livré 25,98 €, prix cible relevé à 42,90 € (comparable boutique-biker.com « Sac a dos moto 24L » 44,90 €), **marge 16,92 €** (≥ 15 € demandés).

## Réserves et points d'attention

- **Chien 20/30 kg** : le poids 15 kg (ligne 55) est couvert par un sac à dos "L (15-30 kg)" de bonne qualité (Yingying Pet Store, ★4.6, gratuit, 8-14 j). J'ai volontairement affecté ce produit au **plancher** de sa plage de poids (15 kg) plutôt qu'à son plafond, par prudence sur le confort/la sécurité de l'animal. Pour le **20 kg** (ligne 56), le seul candidat trouvé est une "Pet Box" 70L à la preuve sociale mince (8 avis) et au fret cher (15,87 €, 24-39 j) — liée mais à surveiller. Pour le **30 kg** (ligne 57), aucun transporteur crédible : le seul candidat a une note 0/5 sur 1 avis et une tarification incohérente selon coloris → **laissé À SOURCER**, conformément au brief.
- **Top case souple/vintage/cuir/custom** (lignes 48, 50, 51, 52) : aucune fiche générique trouvée — les seuls résultats correspondants sont des doublures intérieures fitment BMW R1200GS/R1250GS (marque déposée, exclue) → laissées À SOURCER.
- **Valises latérales universelles** (ligne 63) et **top case/valise scooter** (lignes 68, 69, 70) : plusieurs candidats identifiés mais écartés soit pour fret Chine prohibitif une fois vérifié par `exact()` (47 à 58 € de port sur des produits affichés à 9-38 €), soit pour marge négative une fois le comparable appliqué, soit pour titre non conforme (un "top case" mal étiqueté "sacoches latérales"). Détail dans `raison_si_a_sourcer` de chaque ligne.
- **Ligne 45** (top case 2 casques) : fiche mono-SKU sans propriété sélectionnable — l'outil `exact()` refuse (nécessite au moins une `--property`). Retenue quand même sur la base de `variants()` (boutique espagnole donc UE, ★4.6/97 avis/164 ventes) mais le fret exact n'a pas pu être confirmé par l'API — à vérifier manuellement avant mise en ligne.
- **Stocks faibles à surveiller** : lignes 54 (stock 3), 65 (stock 7), 68 n'est pas retenue mais aussi faible, 85 (stock 6), 87 (stock 5), réserve de marge (stock 6) — dropshipping donc pas bloquant immédiatement mais à re-vérifier avant scaling.
- **Marques signalées** : KEMIMOTO (ligne 54, boutique officielle) et KEMITOUR, une enseigne de la même famille (ligne 56) — ⚠ marque comme demandé, ni l'une ni l'autre n'est dans la liste d'exclusion stricte donc conservées.
- **Délais longs** (22-39 j) sur les valises latérales aluminium (lignes 61, 64) et le coffre chien 20 kg (ligne 56) — tous expédiés de Chine sans alternative UE trouvée dans le budget de recherche imparti.

## Fichiers produits

- `sourcing-bagagerie-B.json`
- `rapport-sourcing-bagagerie-B.md` (ce fichier)
