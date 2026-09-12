# Idéation OCB — 12/09/2026 — base Trend Niche France

Première application de la **méthode mise à jour** (doc Hakim 12/09) : mode UNIVERS,
seuil 30 000 sur la somme tête + collections + produits, mesure OCB.

## Source et recette

`app.oneclickbrand.ai/top-niches`, session Chrome de Hakim, pays `fr`.
Pagination serveur : `?country=fr&per_page=50&page=N`, 10/25/50 par page, **82 pages à 10**.
Aucune API : la donnée est dans le HTML, parsée par `fetch` même origine.
Paramètres de filtre en clair : `search`, `country`, `category_id`, `volume`, `cpc`,
`price_category` (`high_ticket` / `low_ticket`), `convergence` (= concurrence).

**Cliquer « Analyser » depuis Trend Niche ne consomme pas de quota** (confirmé Hakim).
Quota « analyses approfondies » : 46 restantes sur 50 au 12/09, renouvellement le 19/09.

## Volumétrie

- **813 niches** dans la base France.
- **226** en high ticket.
- **58** en high ticket **et** volume de tête ≥ 30 000 → shortlist ci-dessous.
- Répartition : Maison 295, Mode 107, Sport 103, Électronique 72, Jardin 62,
  Bébé 42, Animaux 32, Musique 32, Jeux 24, Spiritualité 15, Beauté 14, Religion 6, B2B 4.

Colonnes : niche · catégorie · volume tête · score concurrence (0-100, plus bas = plus facile) · CPC · tendance.
Le volume affiché est celui de la **tête seule** : il ne préjuge pas de la somme, qui sera
toujours supérieure. Une tête ≥ 30 000 passe donc le seuil d'office ; le tri utile ici est
la concurrence et la tendance, pas le volume.

## Les 58 candidats high ticket ≥ 30 000 (tête)

| Niche | Catégorie | Volume tête | Concurrence | CPC | Tendance |
|---|---|---:|---:|---:|---:|
| Kayak | Sport | 823.0K | 47 | 0.09 | -33.3% |
| Trottinette électrique | Sport | 368.0K | 52 | 0.23 | +22.7% |
| Drone | Jeux | 165.0K | 40 | 0.23 | +23.5% |
| Table basse | Maison | 165.0K | 44 | 0.24 | -19.4% |
| Bureau | Maison | 110.0K | 45 | 0.63 | -16.7% |
| Imprimante | Électronique | 110.0K | 56 | 0.29 | -18.2% |
| Aspirateur | Maison | 110.0K | 50 | 0.20 | +22.2% |
| Pergola | Jardin | 110.0K | 45 | 0.80 | +20.9% |
| Fauteuil | Maison | 90.5K | 43 | 0.29 | Stable |
| Barbecue | Jardin | 90.5K | 51 | 0.24 | -18% |
| Brasero | Jardin | 90.5K | 21 | 0.34 | +23.5% |
| Table de chevet | Maison | 90.5K | 35 | 0.25 | +21.8% |
| Piscine hors sol | Jardin | 90.5K | 45 | 0.21 | Stable |
| Matelas | Maison | 74.0K | 46 | 1.49 | +22.7% |
| Blender | Maison | 74.0K | 50 | 0.31 | +21.8% |
| Aquarium | Animaux | 74.0K | 34 | 0.17 | Stable |
| Imprimante 3D | Électronique | 74.0K | 37 | 0.19 | +21.8% |
| Paddle | Sport | 74.0K | 38 | 0.40 | +22.7% |
| Jacuzzi | Maison | 74.0K | 35 | 0.26 | Stable |
| Parasol | Maison | 60.5K | 31 | 0.31 | +122.2% |
| Armoire | Maison | 60.5K | 52 | 0.20 | -18.2% |
| Tapis de course | Sport | 60.5K | 37 | 0.30 | +22.2% |
| Piano | Musique | 60.5K | 47 | 0.53 | -16.7% |
| Tapis de marche | Sport | 60.5K | 35 | 0.53 | -17.9% |
| Machine a cafe | Maison | 60.5K | 44 | 0.41 | +22.7% |
| Cave a vin | Maison | 60.5K | 41 | 0.30 | +20% |
| Poulailler | Jardin | 60.5K | 57 | 0.31 | -18.3% |
| Transat | Jardin | 49.5K | 44 | 0.33 | +51.5% |
| Table pliante | Sport | 49.5K | 24 | 0.41 | +23.5% |
| Lit coffre | Maison | 49.5K | 35 | 0.71 | -18.2% |
| Robe de mariée | Mode | 49.5K | 45 | 0.34 | -18.2% |
| Table de jardin | Jardin | 49.5K | 33 | 0.29 | -18.2% |
| Tableau | Maison | 49.5K | 47 | 0.64 | -18.2% |
| Grille pain | Maison | 49.5K | 29 | 0.14 | +22.7% |
| Réfrigérateur | Maison | 49.5K | 53 | 0.29 | +22.7% |
| Chaise gaming | Sport | 49.5K | 53 | 0.63 | +25% |
| Carport | Maison | 49.5K | 38 | 0.59 | +50% |
| Vélo | Sport | 40.5K | 49 | 0.19 | -56.4% |
| Table | Maison | 40.5K | 33 | 0.48 | +22.2% |
| Cocotte | Maison | 40.5K | 39 | 0.44 | +50% |
| Bouilloire | Maison | 40.5K | 40 | 0.26 | Stable |
| Trampoline | Sport | 40.5K | 47 | 0.43 | -18.2% |
| Scie circulaire | Maison | 40.5K | 28 | 0.24 | +50% |
| Matelas gonflable | Sport | 40.5K | 34 | 0.27 | +50% |
| Barre de son | Électronique | 40.5K | 33 | 0.42 | +20% |
| Serre de jardin | Jardin | 40.5K | 50 | 0.23 | -18.2% |
| Fontaine | Maison | 33.1K | 43 | 0.30 | -46% |
| Tondeuse | Jardin | 33.1K | 35 | 0.26 | -18.5% |
| Plancha | Jardin | 33.1K | 48 | 0.19 | +22.2% |
| Cocotte minute | Maison | 33.1K | 36 | 0.13 | -18.2% |
| Barbecue charbon | Jardin | 33.1K | 37 | 0.14 | -19% |
| webcam | Électronique | 33.1K | 62 | 0.43 | +51.7% |
| Vélo électrique | Sport | 33.1K | 48 | 0.27 | -34% |
| Guitare | Musique | 33.1K | 44 | 0.37 | -16.7% |
| Friteuse | Maison | 33.1K | 31 | 0.19 | -18.5% |
| Tonnelle | Jardin | 33.1K | 26 | 0.35 | +84.1% |
| Rideau occultant | Maison | 33.1K | 32 | 0.47 | +23.5% |
| Machine a coudre | Maison | 33.1K | 43 | 0.14 | +22.7% |

## Correction de méthode (Hakim, 12/09)

Filtrer sur une tête ≥ 30 000 sélectionne mécaniquement les **catégories les plus larges**
(« table de chevet », « jacuzzi », « brasero ») — l'inverse d'une niche. La bonne lecture :
chercher dans la base les **sous-catégories**, et n'aller au peigne fin dans la page d'analyse
d'une grande niche que si aucune sous-catégorie ne ressort.

Décomposition des 813 : **340 entrées d'un seul mot** (= grandes catégories) et
**473 multi-mots**, dont **234 ont leur parent présent dans la base** (sous-catégories
au sens strict) et 239 non (niches autonomes).

Filtre appliqué aux deux gisements : high ticket, volume ≥ 5 000, concurrence ≤ 40.
→ **42** sous-catégories à parent connu, **27** niches autonomes multi-mots.

### Gisement 2 — niches autonomes multi-mots (27)

| Niche | Catégorie | Volume | Conc. | CPC | Tendance |
|---|---|---:|---:|---:|---:|
| Tour de lit | Bébé | 6.6K | 18 | 0.23 | +24.1% |
| Pilates Reformer | Sport | 18.1K | 19 | 0.71 | +22.7% |
| Banc de musculation | Sport | 14.8K | 22 | 0.20 | +50% |
| Sac de frappe | Sport | 14.8K | 22 | 0.11 | Stable |
| Ciel de lit | Maison | 9.9K | 22 | 0.33 | +22.2% |
| Barre de traction | Sport | 22.2K | 23 | 0.16 | +20.9% |
| Planche de surf | Sport | 9.9K | 23 | 0.18 | +24.1% |
| Lit pliant | Maison | 9.9K | 23 | 0.21 | Stable |
| Sèche-serviette | Maison | 22.2K | 24 | 0.43 | -18.5% |
| Four à pizza | Maison | 9.9K | 24 | 0.52 | +50% |
| Robinet thermostatique | Maison | 9.9K | 25 | 0.25 | -19.5% |
| Coffre de jardin | Jardin | 22.2K | 26 | 0.22 | +50% |
| Banc coffre | Maison | 8.1K | 26 | 0.29 | +22.7% |
| Robot pâtissier | Maison | 6.6K | 27 | 0.28 | -84% |
| Scie circulaire | Maison | 40.5K | 28 | 0.24 | +50% |
| Grille pain | Maison | 49.5K | 29 | 0.14 | +22.7% |
| Scie sauteuse | Maison | 27.1K | 31 | 0.25 | +22.7% |
| Douche solaire | Jardin | 14.8K | 31 | 0.13 | +86.2% |
| Château gonflable | Jeux | 9.9K | 31 | 0.37 | +22.7% |
| Meuble coiffeuse | Maison | 5.4K | 32 | 0.20 | +50% |
| Barre de son | Électronique | 40.5K | 33 | 0.42 | +20% |
| Tablette graphique | Électronique | 18.1K | 34 | 0.50 | Stable |
| Station météo | Maison | 9.9K | 34 | 0.16 | +350.1% |
| Lit coffre | Maison | 49.5K | 35 | 0.71 | -18.2% |
| Sac de couchage | Sport | 14.8K | 35 | 0.13 | +22.7% |
| Tourne-disque | Musique | 22.2K | 36 | 0.13 | +20.8% |
| Lit mezzanine | Maison | 27.1K | 40 | 0.30 | Stable |

### Limite connue

Les « sous-catégories » d'OCB restent grossières : c'est une liste de catégories, pas une
liste de mots-clés. Le minage fin (collections + produits longue traîne) passe obligatoirement
par la page d'analyse de la niche, non explorée à ce stade.

## Mesure — pages d'analyse OCB (12/09/2026)

### Mécanique du quota, vérifiée

La page d'analyse est `/niches/{id}/detail`. Relevé du compteur avant et après un
chargement : **46/50 → 46/50**. Consulter une niche déjà analysée ne consomme rien.
Les niches jamais analysées renvoient un statut 200 **sans aucun tableau** : c'est là que
se dépense le quota. Sur les 69 candidats, **52 étaient lisibles gratuitement**, 17 non.

Chaque page rend **exactement 100 mots-clés** — la liste est donc plafonnée, toute somme
est un plancher.

### Découverte majeure : la liste OCB est permutée, pas dédoublonnée

Extrait brut de « Meuble coiffeuse » :

    meuble coiffeuse maquilleuse   590
    coiffeuse meuble maquillage    590
    coiffeuse maquilleuse meuble   590
    meuble coiffeuse maquillage    590

Même requête, mêmes mots, ordre différent, volume identique. La liste répète chaque
requête 4 à 8 fois. S'y ajoutent les requêtes de marque (`amazon coiffeuse meuble`,
`coiffeuse meuble conforama`, `meuble coiffeuse but`).

**Additionner la liste telle quelle compte la même demande plusieurs fois.** Traitement
appliqué : regroupement par ensemble de mots trié (les permutations retombent sur une
seule clé, on garde le volume max), puis retrait des requêtes de marque.

Effet moyen sur les 52 : **le net vaut 71 % du brut**. Cas extrêmes : « Meuble coiffeuse »
54 840 → 38 960 avec seulement 44 mots-clés distincts hors marque sur 100 ;
« Table pliante » 69 590 → 29 880, ce qui la fait **passer sous le seuil de 30 000**.

### Classement net (52 candidats) — volume dédoublonné hors marque

| Niche | Tête | Conc. | Somme brute | **Somme nette** | Mots-clés nets |
|---|---:|---:|---:|---:|---:|
| Lit coffre | 49.5K | 35 | 187 480 | **150 230** | 56 |
| Poêle inox | 6.6K | 20 | 115 590 | **101 750** | 67 |
| Table de jardin | 49.5K | 33 | 98 790 | **75 470** | 67 |
| Lit mezzanine | 27.1K | 40 | 93 220 | **69 670** | 60 |
| Grille pain | 49.5K | 29 | 85 390 | **69 380** | 76 |
| Table de chevet | 90.5K | 35 | 96 570 | **69 130** | 80 |
| Sèche-serviette | 22.2K | 24 | 80 370 | **66 370** | 75 |
| Tapis de course | 60.5K | 37 | 88 520 | **61 390** | 76 |
| Matelas gonflable | 40.5K | 34 | 85 180 | **56 480** | 60 |
| Chaise de jardin | 22.2K | 22 | 69 760 | **52 090** | 66 |
| Tapis de marche | 60.5K | 35 | 69 020 | **45 930** | 67 |
| Fauteuil roulant | 18.1K | 30 | 46 390 | **40 170** | 86 |
| Robe de mariage | 9.9K | 31 | 49 790 | **40 010** | 80 |
| Meuble coiffeuse | 5.4K | 32 | 54 840 | **38 960** | 44 |
| Scie sauteuse | 27.1K | 31 | 51 120 | **38 020** | 70 |
| Guitare électrique | 6.6K | 33 | 44 570 | **37 180** | 83 |
| Imprimante 3D | 74.0K | 37 | 52 120 | **36 910** | 69 |
| Tour de lit | 6.6K | 18 | 41 970 | **36 040** | 78 |
| Rideau occultant | 33.1K | 32 | 49 730 | **32 320** | 57 |
| Sac de couchage | 14.8K | 35 | 52 920 | **32 300** | 74 |
| Guitare acoustique | 12.1K | 31 | 40 850 | **30 680** | 74 |
| Barbecue charbon | 33.1K | 37 | 48 930 | **30 300** | 56 |
| Tourne-disque | 22.2K | 36 | 38 770 | **30 280** | 75 |
| — seuil 30 000 — | | | | | |
| Four à pizza | 9.9K | 24 | 32 690 | 29 890 | 84 |
| Table pliante | 49.5K | 24 | 69 590 | 29 880 | 42 |
| Casserole inox | 14.8K | 28 | 39 980 | 26 270 | 61 |
| Station météo | 9.9K | 34 | 30 680 | 25 580 | 84 |
| Vélo elliptique | 9.9K | 27 | 36 620 | 24 020 | 74 |
| Aspirateur voiture | 12.1K | 30 | 31 060 | 23 670 | 72 |
| Tente de toit | 27.1K | 22 | 36 220 | 22 800 | 76 |
| Tablette graphique | 18.1K | 34 | 31 620 | 21 930 | 70 |
| Plancha électrique | 6.6K | 30 | 37 900 | 21 870 | 58 |
| Planche de surf | 9.9K | 23 | 25 690 | 21 830 | 86 |
| Ciel de lit | 9.9K | 22 | 24 900 | 21 630 | 79 |
| Table de massage | 12.1K | 25 | 28 630 | 21 610 | 75 |
| Table à langer | 14.8K | 28 | 43 380 | 21 410 | 67 |
| Poussette compacte | 6.6K | 20 | 30 270 | 21 040 | 69 |
| Sac de frappe | 14.8K | 22 | 30 300 | 18 860 | 67 |
| Banc coffre | 8.1K | 26 | 31 010 | 16 390 | 48 |
| Douche solaire | 14.8K | 31 | 25 490 | 14 870 | 63 |
| Barre de traction | 22.2K | 23 | 24 530 | 14 480 | 71 |
| Couteau japonais | 22.2K | 32 | 19 040 | 14 070 | 76 |
| Coffre de jardin | 22.2K | 26 | 24 050 | 12 890 | 60 |
| Matelas à langer | 12.1K | 19 | 16 380 | 12 280 | 78 |
| Banc de musculation | 14.8K | 22 | 18 200 | 11 880 | 68 |
| Tente gonflable | 12.1K | 32 | 23 080 | 11 710 | 58 |
| Bureau assis debout | 22.2K | 32 | 15 540 | 10 870 | 72 |
| Fauteuil massant | 8.1K | 17 | 17 610 | 10 440 | 58 |
| Tonnelle pliante | 18.1K | 30 | 19 240 | 9 830 | 54 |
| Tondeuse à gazon | 27.1K | 32 | 12 710 | 8 700 | 69 |
| Château gonflable | 9.9K | 31 | 5 940 | 4 020 | 30 |

Pilates Reformer (124 010 net, concurrence 19) sort du classement : **essai antérieur
non concluant, rejet Hakim du 12/09/2026**.

**23 candidats sur 52 passent le seuil de 30 000 en net.** Le dédoublonnage est donc
bien la porte qui discrimine, pas le seuil appliqué au brut.

## Contrôle DataForSEO des finalistes — 12/09/2026 (0,66 USD)

Graine passée à `kw_dfs.py --pages 1`, France/français, témoin `tufting = 12 100` conforme
avant et après chaque mesure.

### Meuble coiffeuse — **STOP**

L'univers de 38 960 vu sur OCB était un **îlot de phrase à deux mots** : OCB ne rend que
les requêtes contenant à la fois « coiffeuse » et « meuble ». Le cluster réel autour de
`coiffeuse` dit autre chose.

1. **Polysémie métier / meuble.** « Coiffeuse » désigne aussi la professionnelle.
   `planity coiffeuse` 49 500 (plateforme de réservation de salons), `coiffeuse à domicile`
   14 800 + 6 600 + 3 600, `coiffeuse barbiere` 14 800, `coiffeuse cheveux bouclés` 14 800,
   `coiffeuse salaire`, `coiffeuse coloriste`, `tuto coiffeuse` — plus **une trentaine de
   requêtes de ville** (angers, marseille, nîmes, versailles, clermont-ferrand, le havre,
   béziers, albi, saint-malo, lens, évreux, fréjus, pontivy…). Thème `domicile` : 39 idées,
   34 410 de volume cumulé ; `autour` : 12 320 ; `moi` : 16 400.
2. **IKEA domine le segment meuble.** `coiffeuse ikéa` **40 500**, + `meubles coiffeuse ikea`
   4 400, `coiffeuse blanche ikea` 2 900, `coiffeuse ikea malm` 1 900. Puis Conforama 6 600,
   But 5 400, Carrefour 5 400, Intermarché 5 400, Auchan 4 400, Maisons du Monde 4 400,
   Cdiscount 3 600, Leroy Merlin 2 400. Critère §4 : rejet.
3. Conséquence Ads : le mot-clé cœur achèterait du clic de recherche de salon local.

### Les quatre autres finalistes — réserve bloquante chacun

| Candidat | Cluster produit réel | Réserve |
|---|---|---|
| **Sèche-serviette** | 33 100 + électrique 27 100 + soufflant 12 100 + radiateurs 5 400 + eau chaude 4 400 | Marché de **marques françaises installées** : Acova 6 600, Atlantic 4 400, Sauter 2 900, + Leroy Merlin 3 600. Chauffage électrique fixe : installation, conformité, SAV (§6) |
| **Lit mezzanine** | 33 100 + 2 places 22 200 + 1 place 14 800 + bureau intégré 3 600 | IKEA 8 100 + 2 400, Conforama et But 1 900 chacun. Surtout **fret** : meuble volumineux et lourd, incompatible avec un sourcing AliExpress (§6) |
| **Lit coffre** | 160x200 60 500 + coffre lit 60 500 + 140x190 40 500 + 180x200 18 100 — les dimensions sont des collections naturelles | Le plus gros univers du lot, mais **literie surdimensionnée** : fret rédhibitoire. IKEA 12 100, But 4 400, Conforama 3 600 |
| **Imprimante 3D** | tête 90 500, résine 5 400, filaments 4 400, fils 1 900 | Le cluster est surtout **informationnel** (prix, fichiers, modèles, logiciels, meilleures) et le marché appartient à des marques (Bambu Lab 6 600, Creality, Prusa) |

### Leçon de méthode

La base Trend Niche d'OCB est une **liste de catégories Google**, pas une liste d'univers
dropshippables : filtrée sur le volume, elle remonte massivement des catégories de grande
surface. Deux gardes à intégrer à la recette :

1. **Contrôle DataForSEO obligatoire avant tout travail qualitatif** — 0,13 USD par graine
   ont suffi à tuer un dossier qu'OCB seul présentait comme un univers propre.
2. **Vérifier la polysémie de la tête** avant de compter quoi que ce soit. Une tête qui
   désigne à la fois un objet et un métier (coiffeuse) ou un lieu est un piège de mesure.
