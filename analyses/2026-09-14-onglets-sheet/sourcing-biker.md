# Rapport — Sourcing API vague 2, onglet « Style biker » (14/09/2026)

## Intégrité des volumes (règle absolue)

- **C6 avant écriture : `0`**
- **C6 après écriture : `0`** → **identique, aucun volume abîmé.**
- Colonnes C et D des lignes produit existantes non touchées ; seules G, H, K ont été modifiées sur les lignes sourcées, et K uniquement (préfixe) sur les lignes « À SOURCER ».

## Volumétrie du sourcing

| Indicateur | Valeur |
|---|---|
| Lignes produit sourcées (parent, avec lien G) | **29** |
| Lignes ajoutées par découpage de variante (couleur/taille) | **46** |
| **Total lignes liées (G rempli)** | **75** (≥ 60 demandé) |
| Fiches AliExpress uniques | **29** |
| Lignes restées « À SOURCER » | **42** |
| Part des lignes livrées depuis un entrepôt UE/FR | **1 / 75** (0,4 kg de plumes dans un ouragan : quasi tout le catalogue candidat est expédié de Chine — voir Réserves) |
| Coût rendu FR médian (H) | **37,35 €** |
| Prix cible médian (I, lignes sourcées) | **70,90 €** |
| Marge médiane ((I−H)/I) | **63,9 %** |
| Lignes avec marge < 30 % (signalées en K) | **6** |

F3 mis à jour : `Sourcing API 14/09 — 29 produits liés`.

## Les 5 fiches les mieux prouvées

Classées par note puis volume de ventes/avis (toutes 4,9★, entrepôt CN sauf mention) :

1. **Sacoche de selle moto rectangulaire** (pid 1005006861089203) — ★4,9, 701 avis, 3000+ ventes, Rhinowalk 10/20/30L.
2. **Sacoche moto latérale marron en cuir** (pid 1005007634960840) — ★4,9, 878 avis, 2000+ ventes (sac latéral grande capacité, aspect technique et non cuir — voir réserve).
3. **Sacoche de selle moto vintage - Imgor** (pid 1005012421452695) — ★4,9, 262 avis, 900+ ventes, **seule fiche livrée depuis la France, gratuit, 1–4 j**.
4. **Sacoche de fourche moto - Raid** (pid 1005007010295001) — ★4,9, 353 avis, 800+ ventes.
5. **Bague biker - Furious** (pid 1005006784547302) — ★4,9, 310 avis, 700+ ventes.

## Produits restés « À SOURCER » (42 lignes), par famille

- **Vestes/gilet femme (5)** : Veste biker femme Rocky/Perfecto noir/Col mouton, Blouson biker femme Muela, Gilet en cuir pour femme — aucune requête AliExpress dédiée « femme » collectée en amont ; les candidats de `leather biker jacket men` / `motorcycle leather vest` sont tous étiquetés hommes → écartés plutôt que de mettre une photo homme sur une fiche femme.
- **Veste biker homme - Perfecto en cuir (1)** : les 3 candidats testés ont buté sur `AUCUNE_VARIANTE_LIVRABLE_FR` (SKU ambigu ou rupture) dans le temps imparti.
- **Gilets denim (2)** : Gilet jean biker Diamonhate / troué — la requête `motorcycle leather vest` ne renvoie que du cuir, aucun gilet en jean.
- **Sacoches de jambe/fourche (5)** : Vintage/Moto centric (jambe), Vintage/Tête de mort (fourche), Sacoche cavalière étanche universelle — pas de requête dédiée « sacoche de jambe » collectée ; les candidats de repli (tank bag/backpack) n'ont pas fourni assez de produits distincts, ou la variante livrable a manqué.
- **Top case moto (1)** : aucun candidat « top case » collecté ; déjà signalé STOP comme produit isolé dans un lot antérieur (cf. rapport-onglet-biker.md) — à ne traiter qu'en SKU secondaire.
- **Bagues/bracelets/colliers, hors bagues (6)** : Bracelet Chopper/acier, Pendentif Route 66/Tête de mort, Guardian bell x2 — la requête `biker skull ring` ne contient que des bagues, aucun bracelet/pendentif/cloche.
- **Chaînes de portefeuille et maroquinerie, hors ceinture (6)** : Portefeuille Rush/Ryna, Chaîne de pantalon x2, Boucle de ceinture, Porte-clé Ride or die — la requête `biker leather wallet chain` (signalée peu pertinente dans le brief) ne renvoie que des chaînes/sangles de sac à main génériques, jamais de portefeuille, boucle ou porte-clé à thème moto/crâne.
- **Textile (8)** et **Déco (8)** : aucune requête AliExpress collectée pour t-shirts, tours de cou, cagoules, casquettes, patchs, tableaux, posters, stickers, guardian bell déco — familles entièrement hors périmètre de la collecte vague 1.

## Réserves

1. **Gateway très contendu** : 5 agents partagent la passerelle (2 threads). Les 33 candidats prioritaires ont pris ~40 min à vérifier ; deux appels (`exact()` sur les pid 1005012421452695 et 1005007010295001) ont renvoyé un payload dégénéré `{"refused": null}` en pleine charge — repérés à la relecture, revérifiés manuellement avec succès, corrigés dans le fichier de décision avant écriture. Aucune autre anomalie de ce type détectée sur les 27 autres fiches.
2. **Faux positif d'exclusion « licence »** : le filtre anti-licence (Harley-Davidson, Sons of Anarchy…) a écarté à tort 2 candidats génériques de sacoche (pid 1005007476894278 « Sac de fourche universel… pour Harley Sportster XL Softail Honda Yamaha », pid 1005008932852031 « …pour Yamaha NMAX TMAX XMAX ») : ce sont des mentions de **compatibilité moteur**, pas des produits sous licence de marque. Le second a une fiche de repli déjà sourcée (ligne 50) ; le premier (ligne 44, fourche) reste À SOURCER — son SKU n'a qu'une seule variante sans propriété nommée, ce qui bloque aussi l'appel `exact()` (le gateway exige au moins une `--property`). À reprendre en vague 3.
3. **Entrepôt très majoritairement Chine** : sur 29 fiches, une seule est expédiée de France (ligne 35, gratuite, 1–4 j) ; les 28 autres livrent en 8–17 j depuis la Chine. Cohérent avec les requêtes collectées (aucune n'a filtré par entrepôt), mais à surveiller pour les promesses de délai en boutique.
4. **Marges à vérifier avant mise en ligne (6 lignes, signalées en K)** :
   - **Gilet biker Américain** (I 84,90 € / H 111,99 €, marge −31,9 %) — la fiche trouvée (RSD Temple Vest, cuir de buffle) est un produit premium plus cher que prévu ; soit relever le prix cible, soit re-sourcer un gilet moins cher en vague 3.
   - **Botte biker - Crew** (I 88,90 € / H 105,77 €, marge −19,0 %) — même diagnostic.
   - **Bottes biker - Tête de mort** (marge 17,0 %), **Sac à dos moto 24L** (13,8 %), **Sacoche réservoir moto - GripBag** (2,3 %), **Sacoche de jambe moto - Freaty** (−4,5 %) — marges insuffisantes, à re-sourcer ou re-pricer.
5. **Stock parfois faible** : ex. ligne 69 (Ceinture biker cuir), variante Rouge à seulement 3 unités en stock — vérifier avant de pousser du trafic payant dessus.
6. **Étiquette de propriété AliExpress bruitée** : plusieurs fiches renvoient une valeur de taille du type « XS (équipement de secours de sécurité) » — quirk de catégorisation côté AliExpress, nettoyé à l'affichage dans K (parenthèse retirée) mais sans incidence sur le SKU réellement commandé.
7. **Découpage de variantes** : limité à 2 enfants par produit sourcé (couleur/taille nettement différentes, en stock, jamais revérifiées individuellement par `exact()` — elles héritent du pays d'expédition et du délai du parent, sourcés sur la même fiche/entrepôt). À re-vérifier au cas par cas avant mise en ligne si un import massif est prévu.
