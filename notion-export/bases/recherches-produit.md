# Base « Recherches produit »

- **URL Notion** : https://app.notion.com/p/b23a48625ace4704980659f165bb0ec6
- **Data source** : collection://1afa57a5-4259-426b-a5c5-41ff128df3a5
- **Parent** : Pipeline Boutiques Drop
- **Date d'export** : 07/08/2026
- **Lignes exportées** : 93

## Schéma des propriétés

| Propriété | Type | Options / détails |
|---|---|---|
| Candidat | title | — |
| Réf | auto_increment_id | préfixe CAND- |
| Étape | select | 1·Idéation, 2·Filtre, 3·Demande, 4·Sourcing, 5·Marge, ✅ GO lancement, ⛔ STOP |
| Verdict marché | select | En cours, GO marché, À approfondir, STOP marché (sortie phase 3) |
| Verdict fournisseur | select | —, Fournisseur à tester, GO fournisseur, KO fournisseur (sortie phase 4) |
| Volume SEMrush | number | volume mensuel France du cluster principal |
| Lot | select | Lot A, Lot B, Lot C |
| Rapport | url | lien vers le rapport de phase / fichier local |
| Boutiques | relation | → Boutiques |
| Créé le | created_time | — |

## Vues

- Default view (table)
- Kanban pipeline (board groupé par Étape, tri Créé le desc)

## Lignes (triées par Réf)

| Réf | Candidat | Étape | Verdict marché | Verdict fournisseur | Volume | Lot | Rapport |
|---|---|---|---|---|---|---|---|
| 1 | Catio (enclos chat extérieur) | ⛔ STOP | STOP marché | Fournisseur à tester | — | Lot B | boutique-pipeline/reports/phase4-sourcing-catio-2026-07-17.md |
| 2 | Kit tufting complet | 5·Marge | GO marché | Fournisseur à tester | 15000 | — | boutique-pipeline/reports/phase5-marge-kit-tufting-2026-07-19.md |
| 3 | Graveur laser fermé débutant | 4·Sourcing | À approfondir | Fournisseur à tester | 13000 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 4 | Tour de potier électrique | ⛔ STOP | STOP marché | Fournisseur à tester | 8400 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 5 | Surmatelas thermorégulé actif à eau | ⛔ STOP | STOP marché | KO fournisseur | 1170 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 6 | Canapé enfant modulable + motricité | ⛔ STOP | STOP marché | Fournisseur à tester | 1900 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 7 | Robot skimmer solaire de surface | ⛔ STOP | STOP marché | Fournisseur à tester | 2450 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 8 | Bateau amorceur GPS avec sondeur | ⛔ STOP | STOP marché | — | 4390 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 9 | Vanne anti-fuite avec coupure automatique | ⛔ STOP | STOP marché | — | 50 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 10 | Film PDLC opacifiant électrique | ⛔ STOP | STOP marché | Fournisseur à tester | 1320 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 11 | Composteur électrique de cuisine | ⛔ STOP | STOP marché | KO fournisseur | 600 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 12 | Piège à moustiques CO2 extérieur | ⛔ STOP | STOP marché | KO fournisseur | 5120 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 13 | Nettoyeur ultrason 10–15 L semi-pro | ⛔ STOP | STOP marché | — | 3090 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 14 | Suspension sculpturale rotin XXL | ⛔ STOP | STOP marché | — | 720 | — | boutique-pipeline/reports/validation-semrush-2026-07-17.md |
| 15 | Kit atelier carburateurs moto/mobylette vintage (ultrason) | ⛔ STOP | STOP marché | — | 5900 | — | boutique-pipeline/reports/phase3-demande-nettoyeur-ultrason-2026-07-17.md |
| 16 | Solution atelier bijoutier / créateur artisan (ultrason) | ⛔ STOP | STOP marché | — | 3150 | — | boutique-pipeline/reports/phase3-demande-nettoyeur-ultrason-2026-07-17.md |
| 17 | Station de nettoyage vinyles ultrason 230 V | ⛔ STOP | STOP marché | — | 1350 | — | boutique-pipeline/reports/phase3-demande-nettoyeur-ultrason-2026-07-17.md |
| 18 | Machine horlogerie à paniers rotatifs (amateur) | ⛔ STOP | STOP marché | — | 430 | — | boutique-pipeline/reports/phase3-demande-nettoyeur-ultrason-2026-07-17.md |
| 19 | Nettoyeur ultrason tir sportif / rechargement | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-nettoyeur-ultrason-2026-07-17.md |
| 20 | Banc de nettoyage + test d'injecteurs essence | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-nettoyeur-ultrason-2026-07-17.md |
| 21 | Kit ultrason waxing chaîne vélo | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-nettoyeur-ultrason-2026-07-17.md |
| 22 | Pack hygiène pré-stérilisation tatouage/onglerie/podologie | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-nettoyeur-ultrason-2026-07-17.md |
| 23 | Cuve ultrason 22–30 L « atelier restauration » | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-nettoyeur-ultrason-2026-07-17.md |
| 24 | Kit atelier vitrail Tiffany complet | ⛔ STOP | STOP marché | — | 3700 | Lot A | boutique-pipeline/reports/phase3-demande-exploration-libre-lot-a-2026-07-17.md |
| 25 | Triangle de Pickler évolutif | ⛔ STOP | STOP marché | — | 3000 | Lot A | boutique-pipeline/reports/phase3-demande-exploration-libre-lot-a-2026-07-17.md |
| 26 | Tour hydroponique intérieur grand format | ⛔ STOP | STOP marché | — | 3000 | Lot A | boutique-pipeline/reports/phase3-demande-exploration-libre-lot-a-2026-07-17.md |
| 27 | Rouet électrique e-spinner (filage laine) | ⛔ STOP | STOP marché | — | 1250 | Lot A | boutique-pipeline/reports/phase3-demande-exploration-libre-lot-a-2026-07-17.md |
| 28 | Torréfacteur de café domestique | ⛔ STOP | STOP marché | — | 300 | Lot A | boutique-pipeline/reports/phase3-demande-exploration-libre-lot-a-2026-07-17.md |
| 29 | Meuble-niche design pour chien | ⛔ STOP | STOP marché | — | 5350 | Lot B | boutique-pipeline/reports/phase3-demande-exploration-libre-lot-b-2026-07-17.md |
| 30 | Meuble de couture escamotable | ⛔ STOP | STOP marché | — | 3750 | Lot B | boutique-pipeline/reports/phase3-demande-exploration-libre-lot-b-2026-07-17.md |
| 31 | Mur végétal intérieur modulaire | ⛔ STOP | STOP marché | — | 3600 | Lot B | boutique-pipeline/reports/phase3-demande-exploration-libre-lot-b-2026-07-17.md |
| 32 | Cuve de brassage bière tout-en-un 25–30 L | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 33 | Moulin à farine à meules de pierre | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 34 | Presse à huile domestique | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 35 | Tour à bois compact débutant | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 36 | Machine lapidaire à cabochons | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 37 | Distillateur d'eau domestique | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 38 | Kit sérigraphie textile complet débutant | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 39 | Machine à corder les raquettes | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 40 | Atelier résine époxy créateur | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 41 | Kit bassin de jardin complet | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 42 | Espalier suédois adulte en bois | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/phase2-filtre-exploration-libre-2026-07-17.md |
| 43 | Table de massage (segment pro/électrique) | ⛔ STOP | — | — | 17500 | — | boutique-pipeline/reports/analyse-broyeur-niches-2026-07-18-synthese.md |
| 44 | Machine à pop-corn pro/forain | ⛔ STOP | — | — | 1350 | — | boutique-pipeline/reports/analyse-broyeur-niches-2026-07-18-synthese.md |
| 45 | Store banne motorisé (stores/rideaux) | ⛔ STOP | — | — | 95000 | — | boutique-pipeline/reports/analyse-broyeur-niches-2026-07-18-synthese.md |
| 46 | Grilles/échelles de boulangerie | ⛔ STOP | — | — | 650 | — | boutique-pipeline/reports/analyse-broyeur-niches-2026-07-18-synthese.md |
| 47 | Transpalette / gerbeur (chariots élévateurs) | ⛔ STOP | — | — | 61500 | — | boutique-pipeline/reports/analyse-broyeur-niches-2026-07-18-synthese.md |
| 48 | Chambre froide | ⛔ STOP | — | — | 10750 | — | boutique-pipeline/reports/analyse-broyeur-niches-2026-07-18-synthese.md |
| 49 | Robot pâtissier | ⛔ STOP | — | — | 45500 | — | boutique-pipeline/reports/analyse-broyeur-niches-2026-07-18-synthese.md |
| 50 | Fourneau professionnel (piano CHR) | ⛔ STOP | — | — | 3250 | — | boutique-pipeline/reports/analyse-broyeur-niches-2026-07-18-synthese.md |
| 51 | Chariot de bar / desserte | ⛔ STOP | — | — | 1100 | — | boutique-pipeline/reports/analyse-broyeur-niches-2026-07-18-synthese.md |
| 52 | Microscope numérique 4K soudure | ⛔ STOP | — | — | 150 | — | boutique-pipeline/reports/recherche-aliexpress-2026-07-16.md |
| 53 | Valise OBD2 bidirectionnelle | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-aliexpress-2026-07-16.md |
| 54 | Station météo 7-en-1 Wi-Fi | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-aliexpress-2026-07-16.md |
| 55 | Caméra d'inspection canalisation | ⛔ STOP | — | — | 4630 | — | boutique-pipeline/reports/recherche-aliexpress-2026-07-16.md |
| 56 | Détecteur de métaux | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-aliexpress-2026-07-16.md |
| 57 | Nettoyeur de vinyles (machine) | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-aliexpress-2026-07-16.md |
| 58 | Caméra thermique | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-aliexpress-2026-07-16.md |
| 59 | Scanner de films/diapositives | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-aliexpress-2026-07-16.md |
| 60 | Machine sous vide à chambre | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-aliexpress-2026-07-16.md |
| 61 | Détecteur de radon | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-aliexpress-2026-07-16.md |
| 62 | Roue d'exercice pour chat | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-produits-v2-2026-07-16.md |
| 63 | Mangeoire à oiseaux avec caméra | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-produits-v2-2026-07-16.md |
| 64 | Litière automatique générique | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-produits-v2-2026-07-16.md |
| 65 | Rideau/rouleau occultant motorisé simple | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-produits-v2-2026-07-16.md |
| 66 | Bateau amorceur simple sans GPS | ⛔ STOP | — | — | — | — | boutique-pipeline/reports/recherche-produits-v2-2026-07-16.md |
| 67 | Machine à café portable | ⛔ STOP | — | — | — | — | — |
| 68 | Pilates Reformer | ⛔ STOP | — | — | — | — | — |
| 69 | Cornhole premium / personnalisable | 3·Demande | À approfondir | — | 13810 | Lot A | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 70 | Arbre à chat design en bois naturel | 3·Demande | À approfondir | — | 21500 | Lot A | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 71 | Plante / arbre artificiel XXL haut de gamme | 3·Demande | À approfondir | — | 21380 | Lot A | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 72 | Moustiquaire plissée sur mesure pour baie vitrée | 3·Demande | À approfondir | — | 27190 | Lot B | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 73 | Autoradio / écran CarPlay spécifique véhicule | 3·Demande | À approfondir | — | 26010 | Lot B | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 74 | Float tube de pêche premium | 3·Demande | À approfondir | — | 14870 | Lot B | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 75 | Voile d'ombrage en fibre de coco | 3·Demande | À approfondir | — | 34030 | Lot B | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 76 | Batardeau / barrière anti-inondation pour porte | 3·Demande | À approfondir | — | 12080 | Lot C | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 77 | Sac de couchage duvet premium 3 saisons | 3·Demande | À approfondir | — | 15880 | Lot C | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 78 | Gabion / mur gabion de jardin | 3·Demande | À approfondir | — | 20310 | Lot C | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 79 | Miroir LED de salle de bain | ⛔ STOP | STOP marché | — | 37170 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 80 | Piétement de table métallique design | ⛔ STOP | STOP marché | — | 13440 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 81 | Softboard / planche de surf en mousse | ⛔ STOP | STOP marché | — | 13260 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 82 | Cockpit simracing | ⛔ STOP | STOP marché | — | 3540 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 83 | Jardinière acier Corten grand format | ⛔ STOP | STOP marché | — | 2080 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 84 | Protection balcon / fenêtre pour chat sans perçage | ⛔ STOP | STOP marché | — | 8420 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 85 | Convertisseur 12/24 V 220 V haute puissance | ⛔ STOP | STOP marché | — | 7170 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 86 | Robe de cérémonie premium pour enfant | ⛔ STOP | STOP marché | — | 7560 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 87 | Maquette mécanique en briques premium | ⛔ STOP | STOP marché | — | 7460 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 88 | Tours et accessoires d'illusion premium | ⛔ STOP | STOP marché | — | 5810 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 89 | Coffret de verres en cristal premium | ⛔ STOP | STOP marché | — | 3940 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 90 | Statue animale XXL en résine | ⛔ STOP | STOP marché | — | 2700 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 91 | Compteur de score pétanque premium | ⛔ STOP | STOP marché | — | 410 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 92 | Atténuateur de puissance pour ampli guitare | ⛔ STOP | STOP marché | — | 270 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |
| 93 | Adaptateur de manette utilisable à une main | ⛔ STOP | STOP marché | — | 70 | — | https://app.notion.com/p/3b01f38c315481f285fff738e46b117c |

## Pages-lignes riches (exportées)

- CAND-48 « Chambre froide » (seule ligne avec contenu de page) → `../recherches/chambre-froide.md`
