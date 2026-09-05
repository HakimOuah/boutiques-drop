## Outil — DataForSEO uniquement, France obligatoire

**Décision Hakim du 01/09/2026.** SEMrush n'est pas utilisé. DataForSEO API est l'unique source de volume et de gate. Une panne d'API, un quota épuisé ou des identifiants absents provoquent un arrêt déclaré : aucun repli silencieux vers une autre base.

### DataForSEO

Découverte de vocabulaire :

```bash
cd "/Users/Hakim/Documents/Boutiques drop/ecommerce-dropshipping" && set -a && . ./.env && set +a
cd "/Users/Hakim/Documents/Boutiques drop/boutique-pipeline"
python3 scripts/kw_dfs.py "<graine>" --pages 1 --top 40 --json /tmp/<graine>.json
```

Le script interroge `dataforseo_labs/google/keyword_suggestions` (correspondance **plein texte**), normalise, déduplique, et sort une **table de thèmes co-occurrents** — c'est elle qui révèle les contaminations. Cache disque : la réutilisation du cache de suggestions évite ce coût ; les contrôles témoins live restent facturables. Environ 0,13 USD la page de 1 000 lignes.

Volume de tête précis : `keywords_data/google_ads/search_volume/live`, `location_name: France`, `language_name: French`. Environ 0,09 USD pour 180 mots-clés.

**Endpoint interdit : `keywords_data/google_ads/keywords_for_keywords`.** Il filtre sémantiquement sur l'intention publicitaire et masque les contaminations. Testé le 29/08 sur `diffuseur` : **0 ligne coiffure sur 1 774**, alors que `diffuseur cheveux` vaut 18 100. Un outil qui nettoie à notre place nous rend aveugles au piège qu'on cherche.

Relève : volume, CPC **avec sa devise**, intention disponible, date de lecture, endpoint et paramètres France/français. Ne fabrique aucun indice de difficulté absent de la réponse.

### Agrégation DataForSEO

**Ne jamais additionner les volumes bruts de DataForSEO.** Google **pré-agrège les variantes proches** : `limonadier` et `limonadiers` valent tous les deux 12 100 — c'est le même bucket servi deux fois. Mesuré le 29/08 : Google fusionne 7 paires accentuées sur 20 et 3 paires singulier/pluriel sur 4, **de façon imprévisible** (`planche apero`/`planche apéro` fusionnent, `aerateur de vin`/`aérateur de vin` non).

Conséquence : on somme des **idées normalisées**, une par groupe, en retenant le **MAX du groupe**. C'est ce que fait `kw_dfs.py`.

Les seuils chiffrés DataForSEO vivent dans `PRODUCT-RESEARCH-CRITERIA.md`. Ne les convertis pas et n'applique aucun seuil historique provenant d'une autre base.

## Contrôles — les six, chaque passe

1. **Deux orthographes — pour découvrir, jamais pour additionner.** Interroge toujours les deux : c'est là que le vocabulaire se découvre. Google Ads pré-agrège souvent accents et variantes, donc **ne somme jamais les deux totaux** sans avoir établi que les séries mensuelles et les corpus sont distincts. Le test de décision est la série mensuelle, pas le volume seul. Corollaire : `coffret senteur` / `coffret senteurs` rendent le même corpus à 100 %, quand `diffuseur bâtonnets` / `diffuseur batonnets` n'ont que 6 lignes communes — ne présume ni la fusion ni la séparation, mesure-la.
2. **Plusieurs niveaux de généralité.** Pièce / produit fini / catégorie. « cadran squelette » = 20 ; « montre squelette homme » = 2 900.
3. **`n/a` n’est pas `0`.** n/a = indisponible ou non restitué ; sa cause doit être vérifiée. Ne pas les écrire pareil.
4. **Quota épuisé = zéros silencieux.** Avant de croire un 0 : mot-clé témoin connu. Témoin `tufting` = **12 100 sur DataForSEO** (France/français, relevé le 29/08/2026). À tirer **avant la première mesure et après la dernière**. Réponses invalides ou témoins avant/après incohérents → mesure bloquée. Un écart à la valeur historique nécessite diagnostic, pas une accusation automatique de quota.
5. **Plancher de lecture.** Dernière ligne encore haute = plancher, pas un total. L’écrire. DataForSEO Labs rend 1 000 lignes par page.
6. **Contamination culturelle — angle mort connu de DataForSEO.** L'API détecte bien les contaminations produit et peut manquer des sens culturels, titres, noms propres ou sigles. Sur tout terme ambigu, **la vérification SERP n'est pas optionnelle** : elle doit rechercher explicitement ces sens avant de retenir le volume.

**Le CPC n’a pas de devise par défaut.** DataForSEO rend la devise du compte. **Lis le champ de devise de la réponse et écris-le à côté du chiffre.** Ne jamais présumer.

## SERP — page 1, chaque tête de famille

google.fr `hl=fr&gl=fr`, session non connectée. Rendre : ce que Google sert · intention (oui / partiellement / non) · commercial vs informationnel (compter les positions éditoriales) · qui tient la page 1 (marketplaces / 10 et / 20) · bande de prix · volume retenu ou retiré + motif.

Six contrôles, un par un :

1. **Rabattement orthographique.** Ligne « Résultats, y compris pour X ». La racine n’existe pas en propre. Ex. 13 540 → 1 910.
2. **Retournement pièce / produit fini.** Ordre des mots. Ce qui **commence** par le produit fini désigne le produit fini. « cadran montre » ≠ pièce de rechange.
3. **Mot générique contaminé.** Recherches associées + page 1 : bricolage, B2B, hors-sujet, bande de prix incompatible.
4. **Marque cachée.** Grappe **dans** la traîne, pas dans la tête (bracelet milanais → Apple Watch).
5. **Intention de réparation.** Verbes (ouvrir, démonter, changer…). Peser le **volume**, pas le nombre d’expressions. Sur l’outillage, réparation = achat.
6. **KD = densité, pas verrou.** Compter qui tient la page 1 avant de conclure.

Précautions à écrire : carrousel Shopping ≠ annonces Search texte · page 1 seulement · % de retrait = estimation, pas mesure.
