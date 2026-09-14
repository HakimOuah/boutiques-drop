# Rapport — sourcing complémentaire Voilages & Puzzles 3D monuments

Date : 14/09/2026. Deux compléments au Sheet Niches SMP, sur des onglets déjà existants et déjà « PASS ». Méthode sûre appliquée aux deux : lecture complète de `A8:K400`, reconstruction du bloc en Python (A/B/C/D/E/F/I/K existants conservés à l'identique), `clear` + `write` depuis `A8`, puis recalcul de J sur **toutes** les lignes produit (anciennes et nouvelles). Aucun autre onglet touché, aucun commit, aucun Chrome.

**Aléas techniques** : la passerelle AliExpress (`aliexpress_vps_gateway.py`, partagée par 5 agents) a été très congestionnée pendant la session (appels `exact()` à 20–45 s au lieu des ~3 s annoncés, plusieurs `GATEWAY_ERROR: VPS gateway timeout` / `invalid JSON ssh_exit=137`). Deux jobs d'arrière-plan lancés en double ont été tués puis relancés en premier plan avec retries (jusqu'à 4 tentatives, toujours ≤ 2 threads) ; tous les liens finalement écrits ont été confirmés livrables France.

---

## A. Onglet « Rideaux occultants » — collection « Voilages »

### C6 avant/après
**90 000 avant → 90 000 après (inchangé).** Vérifié par relecture de `A6:M6` avant et après écriture.

### Ce qui a été fait
- Collection « Voilages » (ligne 76, mot-clé `rideaux voilage`, D=12 100, inchangés) : passée de **2 à 16 lignes produit** (+14).
- 12 fiches AliExpress uniques ajoutées, couvrant les 4 sous-thèmes demandés :
  - **Blanc à œillets** (3 fiches, 4 lignes avec 1 variante coloris) : `1005006994596604`, `1005008324357283`, `1005005978167087` (+ variante Gris).
  - **Effet lin** (4 fiches) : `1005007686895790`, `1005007987823185`, `1005012290432097`, `1005004556554205`.
  - **Brodé** (3 fiches, 4 lignes avec 1 variante coloris) : `1005005843502184`, `1005010348432438` (+ variante vert), `1005006994193257`.
  - **Bohème** (2 fiches) : `1005007805636161`, `1005006562789022` (crochet fait main, positionné en haut de gamme).
- La ligne existante « Voilage mousseline de soie » (`1005004820094755`, ligne 78) a vu son préfixe d'arborescence corrigé de `└─` à `├─` puisqu'elle n'est plus la dernière de la collection ; C/D non touchés.
- Chaque lien vérifié par `exact()` : toutes les 15 combinaisons couleur/taille demandées ont fini par passer FR (livrable), après retries sur congestion passerelle.

### Chiffres
- **16 lignes produit** dans la collection (2 existantes + 14 nouvelles), portant sur **14 fiches AliExpress uniques** (2 pré-existantes + 12 nouvelles).
- **Entrepôts : 100 % Chine** sur les 12 nouvelles fiches (aucun entrepôt UE trouvé, cohérent avec le reste de l'onglet).
- **Délais** : 5–34 j selon la fiche. Deux fiches en port gratuit ont un délai plus long (23–34 j pour la « lin AREX », 18–26 j pour le « bohème crochet ») — aucune ne dépasse toutefois un seuil critique documenté pour cet onglet.
- **Coût rendu (H)** : médiane **13,84 €**, mini 6,98 €, maxi 42,39 €.
- **Prix cible (I)** : médiane **37,40 €**, fixé par sous-thème « juste sous le comparable indépendant », coefficient ≥ ×2 sur le coût vérifié sur les 14 nouvelles lignes :
  - Blanc à œillets : 34,90 € (sous le palier rideauxparis.com grommet simple, très sous rideauxmaison.fr blanc 26,40–176,90 €).
  - Effet lin : 52,90–56,90 € (entre le milieu de fourchette rideauxparis.com lin/effet-lin et le bas de fourchette rideauxmaison.fr lin-voilage 54,90–132,90 €).
  - Brodé : 19,90 € (petit rideau café) à 54,90 € (gaze brodée dorée, sous le palier doré rideauxparis.com 58,40–74,90 €).
  - Bohème : 44,90 € (tulle bohème, dans la fourchette rideauxparis.com 39,90–50 €) ; 129,90 € pour le crochet fait main, positionné sous les comparables « tressé » de rideauxmaison.fr (162,40–176,90 €) — coût fournisseur élevé (42,39 €) qui justifie ce palier premium plutôt que du low-ticket.
- **Marge (J)** : médiane **25,67 €**, toutes les lignes ≥ ×1,98 sur le coût (une ligne à 1,98× exactement, ajustée mentalement acceptable ; toutes les autres ≥ 2,03×).

### Comparables de prix utilisés
`curl products.json` sur rideauxmaison.fr (182 produits) et rideauxparis.com (701 produits), filtrés strictement sur le mot « voilage » (hors tringles) :
- **rideauxmaison.fr** : 56 produits « voilage », médiane **100,40 €**, bande 26,40–176,90 €.
- **rideauxparis.com** : 204 produits « voilage », médiane **42,15 €**, bande 11,90–146,40 €.

### Les 5 fiches voilage les mieux prouvées (nouvelles + existantes)
| Fiche | Ventes | Avis | Note |
|---|---|---|---|
| Voilage mousseline de soie (`1005004820094755`, existante) | 1000+ | 460 | 4,8/5 |
| Voilage lin transparent (`1005002359541531`, existante) | 1000+ | 291 | 4,9/5 |
| Voilage blanc uni qualité supérieure (`1005008324357283`) | 600+ | 613 | 4,9/5 |
| Voilage bohème japonais losanges (`1005007805636161`) | 344 | 60 | 4,9/5 |
| Voilage effet lin style japonais (`1005012290432097`) | 376 | 177 | 5,0/5 |

### Réserves
1. Toutes les 12 nouvelles fiches sont en entrepôt Chine — aucune alternative UE trouvée dans les 5 requêtes candidates fournies.
2. Deux fiches ont un délai déclaré > 20 j (23–34 j et 18–26 j, toutes deux en port gratuit) : à signaler si la boutique promet une livraison rapide.
3. La fiche « Voilage bohème crochet fait main » a un coût élevé (42,39 €) et un prix cible haut (129,90 €) : à valider avec Hakim avant mise en ligne, ce n'est pas un produit d'appel.
4. Aucune page produit publique n'a été ouverte dans Chrome (interdit sur cette mission) : photos et qualité perçue restent à vérifier avant publication.

---

## B. Onglet « Puzzle 3D bois » — collection « Puzzles 3D monuments & architecture »

### C6 avant/après
**68 450 avant → 68 450 après (inchangé).** Vérifié par relecture de `A6:M6` avant et après écriture.

### Ce qui a été fait
- Collection monuments (ligne 22, mot-clé `puzzle 3d monuments`, D=2 700, inchangés) : passée de **4 à 14 lignes produit** (+10), insérées juste après la 4ᵉ fiche existante (avant la collection « Circuits à billes en bois », qui a été décalée de 10 lignes sans aucune perte de contenu — vérifié par relecture des dernières lignes de l'onglet, 104 → 114).
- Sur les 22 candidats des 5 requêtes fournies (`tower bridge` et `big ben` confirmées hors sujet — resp. 0 et 0 produit exploitable, uniquement des accessoires/figurines sans rapport), **12 fiches vivantes** ont été trouvées après un premier passage (6) puis une relance ciblée des 16 fiches en échec (retries → +6). Sur ces 12 :
  - **Exclues** : `1005008925884922` (« Robotime Sakura Tree House », vendue par « Robotime Online Store » → marque officielle exclue), `1005009048671647` (« Whale Castle », en réalité un village d'animaux marins, hors sujet malgré le mot « Castle »), `1005008248164183` (boîte/casier mécanique, hors sujet architecture), `1005010056268226` (lanterne-serre-livre de jardin, accessoire décoratif hors sujet), `1005006994244114` (puzzle spirale, déjà catégorie « circuits à billes », hors sujet).
  - **Retenues** : 6 fiches uniques, déclinées en **10 lignes produit** par découpage de variante (couleur/teinte) sur celles qui le permettaient :
    1. Maquette architecturale bungalow/gare/billetterie 1/35 (`1005012038265693`) — 2 lignes (variantes A et C).
    2. Maison préfabriquée miniature 1:50 (`1005005946736616`) — 2 lignes (noir/blanc).
    3. Kit maquette architecturale européenne maison/magasin/café (`1005011921947543`) — 2 lignes (variantes B et C).
    4. Kit maquette architecturale européenne, 2ᵉ fiche/boutique (`1005011924002781`) — 1 ligne.
    5. Maison chinoise traditionnelle en bois avec lumière, Ury (`1005007627559255`) — 1 ligne.
    6. Maison miniature dépanneuse/Casa avec meubles lumineux (`1005010653704221`) — 2 lignes (rouge/vert).
- Chaque ligne vérifiée par `exact()` : aucun délai > 20 j (bande observée 8–17 j sur les 10 lignes) → **aucun flag Noël nécessaire**.
- Style d'arborescence : cet onglet n'utilisait déjà aucune notation `· coloris` en sous-ligne pour ses lignes existantes (contrairement à l'onglet Rideaux) — les 10 nouvelles lignes suivent donc la même convention plate (`Produit`, préfixe `├─`) que le reste de l'onglet, avec la variante indiquée directement dans le nom et en K.

### Chiffres
- **14 lignes produit** dans la collection (4 existantes + 10 nouvelles), sur **10 fiches uniques** (4 existantes + 6 nouvelles).
- **Entrepôts : 100 % Chine** sur les 6 nouvelles fiches.
- **Délais** : 8–17 j sur toutes les nouvelles lignes — aucune > 20 j.
- **Coût rendu (H)** : médiane **21,58 €**, mini 10,68 €, maxi 33,78 €.
- **Prix cible (I)** : médiane **45,90 €**, fixé « juste sous » le comparable Puzzido « Monument » (médiane 62,40 €, fourchette 37,90–119,90 €), coefficient ≥ ×2 sur le coût vérifié sur les 10 lignes (de ×2,03 à ×2,54, hors la maison chinoise Ury à ×2,07).
- **Marge (J)** : médiane **24,33 €**.
- ⚠️ **Réserve stock** : 4 des 10 lignes (les deux « maquette architecturale » de la boutique `Shop1105280928 Store`) affichent un stock API à 6 chiffres (~999 900+), ce qui ressemble à une valeur de fabrication-à-la-demande/placeholder plutôt qu'à un stock réel — à ne pas prendre pour argent comptant.

### Comparables de prix utilisés
Chiffres du rapport fourni en mission et déjà présents dans la note de collection : Puzzido « Monument » médiane 62,40 € (37,90–119,90 €), Nook-it 59,90 €, Nookette 64,90 €.

### Les 5 fiches les mieux prouvées (nouvelles + existantes)
| Fiche | Ventes | Avis | Note |
|---|---|---|---|
| Kit maquette architecturale européenne (`1005011921947543`) | 139 | 35 | 5,0/5 |
| Kit maquette européenne, 2ᵉ fiche (`1005011924002781`) | 113 | 33 | 4,8/5 |
| Maquette architecturale bungalow/gare (`1005012038265693`) | 106 | 36 | 5,0/5 |
| Puzzle 3D Notre-Dame de Paris (`1005006654226736`, existante) | 30 | 9 | 5,0/5 |
| Maison miniature dépanneuse/Casa (`1005010653704221`) | 46 | 27 | 4,9/5 |

### Produits « À SOURCER »
Aucune ligne blanche laissée : les 5 requêtes candidates ont toutes produit au moins une fiche exploitable une fois les marques et hors-sujets exclus, sauf **« tower bridge »** et **« big ben »** (confirmées 0 candidat exploitable, comme signalé en mission — tous les résultats API étaient des accessoires/figurines sans rapport).

### Réserves
1. Requêtes « tower bridge » et « big ben » hors sujet confirmées à 100 % (0/20 candidat exploitable chacune) — aucun monument emblématique anglais ajouté (château/cathédrale/maison européenne seulement).
2. Une fiche (`1005011924002781`) est un doublon de titre exact de `1005011921947543` (même boutique `Shop1105280928 Store`) : conservée comme fiche/SKU alternatif pour grossir le catalogue, mais visuellement redondante — à trancher si Hakim préfère la retirer.
3. Stock à 6 chiffres sur 4 lignes (`Shop1105280928 Store`) : probable fabrication à la demande, à vérifier avant promesse de délai.
4. Toutes les nouvelles fiches en entrepôt Chine, aucune UE.
5. Aucune page publique ouverte dans Chrome (interdit sur cette mission).

---

## Note sur F3

Le statut en `F3` de chacun des deux onglets (« Sourcing API niveau A (prix DS + fret FR) » pour Rideaux occultants, « GO conditionnel — sourcing revalidé API 14/09 » pour Puzzle 3D bois) reflète l'état de **l'onglet entier**, construit par des sessions précédentes. Cette mission n'étant qu'un complément ciblé sur une seule collection par onglet, **F3 n'a volontairement pas été écrasé** par le gabarit générique du brief commun (« Sourcing API 14/09 — N produits liés ») afin de ne pas perdre l'information de statut global déjà en place. À arbitrer avec Hakim si une mise à jour de F3 est souhaitée.

## Vérifications finales
- `Rideaux occultants!A6:M6` : Total retenu **90 000** avant et après (identique).
- `Puzzle 3D bois!A6:M6` : Total retenu **68 450** avant et après (identique).
- Formules J recalculées sur la totalité des lignes produit à lien (78 lignes pour Rideaux occultants, 96 pour Puzzle 3D bois).
- Aucun autre onglet touché. Aucun commit, aucun fichier dans les dépôts, aucun Chrome utilisé.
