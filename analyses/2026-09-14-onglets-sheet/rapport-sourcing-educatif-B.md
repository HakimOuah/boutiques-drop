# Rapport sourcing — Jouets éducatifs, lot B (14/09/2026)

Collections traitées : Veilleuses bébé, Veilleuses enfant, Stylos 3D, Jouets Montessori, Jouets en bois, Circuits voiture enfant, Jumelles et observation, Sciences et loisirs créatifs (lignes 46–101 de `educatif_rows.json`, hors lignes déjà liées).

## Chiffres clés

- **41 produits liés (LIE)**, **8 laissés à sourcer (A_SOURCER)** sur 49 lignes « À SOURCER » du périmètre.
- **Part des entrepôts UE : 0 % (0/41)**. Toutes les fiches retenues expédient depuis la Chine continentale (`ship_from_country = CN`) ; aucun candidat UE n'est apparu dans les requêtes disponibles pour cette famille (petits jouets/gadgets, catégorie peu stockée en UE).
- **Coût médian (rendu) : 8,08 €**.
- **Prix cible médian : 32,90 €**.
- **32 produits sous le plancher de 50 €** sur 41 liés (marché naturellement bas-ticket : veilleuses, jumelles, circuits, petits jouets bois/Montessori). Conforme à la levée du plancher obligatoire (mémoire 18/08).
- **8 produits avec ⚠ marge faible** (marge < 15 €) : lignes 48, 52, 73, 83, 86, 94, 97, 101 — tous des produits d'entrée de gamme où le comparable bbchoupette lui-même est peu cher.
- **0 produit avec ⚠ fret lourd** : tous les ports constatés sont à 1,99 € (ou gratuits), bien en dessous du seuil de 15 € — y compris pour la cuisine en bois (row 77, 0,394 kg) et les autres jouets en bois volumineux sourcés.
- **0 doublon de pid** avec les autres lignes du lot ni avec `used_pids.json`.

## Détail des 8 lignes laissées « À SOURCER »

| Ligne | Produit | Raison |
|---|---|---|
| 46 | Veilleuse musicale bébé | Aucun projecteur/veilleuse avec fonction musicale identifiée dans les candidats (que des projecteurs simples) — critère titre conforme non rempli |
| 60 | Recharges de fil pour stylo 3D | Aucun consommable filament vendu seul (hors stylo complet) trouvé |
| 66 | Jouet de bain Montessori | Aucun jouet Montessori de bain/étanche identifié |
| 76 | Garage en bois | Requêtes SERP supplémentaires (garage) ne renvoient que des voitures miniatures à collectionner ou du hors-sujet |
| 79 | Maison en bois jouet | Les candidats « wooden dollhouse » sont des maquettes miniatures à assembler (loisir créatif adulte/ado), pas des maisons de jeu |
| 80 | Ferme en bois | Candidats trouvés = sculptures décoratives en bois, pas des jouets de ferme |
| 82 | Train en bois | Les deux requêtes tentées (cache + nouvelle) ne renvoient que des articles hors-sujet |
| 89 | Circuit voiture en bois | Les circuits magnétiques trouvés ne mentionnent pas le bois dans leur titre |

Budget de 6 requêtes SERP supplémentaires entièrement utilisé (wooden train toy set, wooden garage toy cars, wooden farm toy animals, wooden dollhouse toy, wooden car toy vehicle, wooden parking garage toy) — tous ont renvoyé des résultats majoritairement hors-sujet, ce qui explique le nombre de jouets en bois volumineux non sourcés.

## Réserves

- **Aucun entrepôt UE** trouvé dans ce lot : à surveiller pour les délais de livraison (5–11 j annoncés par l'API, à vérifier en conditions réelles).
- **Comparables approximatifs** sur quelques lignes où le type exact n'existe pas chez bbchoupette : ligne 55 (réveil-veilleuse ≈ horloge-réveil Montessori bbchoupette, pas une vraie veilleuse), ligne 78 (tour arc-en-ciel empilable utilisée comme comparable « jeu de construction en bois »), ligne 81 (voiture-hochet en bois de hêtre pour « voiture en bois »).
- **Kit d'expériences scientifiques (ligne 97)** : aucun comparable bbchoupette trouvé pour cette sous-catégorie précise → prix cible fixé par la formule de repli (2,2×coût), résultat modeste (15,90 €) avec marge faible ; à challenger si Hakim a un meilleur comparable.
- **« Mine World » (ligne 98, blocs magnétiques)** : nom de gamme fréquent sur AliExpress, non identifié comme marque Amazon connue, mais à confirmer si Hakim la reconnaît.
- Toutes les fiches vérifiées via l'API `exact` sont livrables en France, en stock, aucune exclusion (pas de HOMCOM/Aosom/VEVOR, pas de licence ni de marque de jouet interdite, pas de montre connectée SIM dans ce lot).
