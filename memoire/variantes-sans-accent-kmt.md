---
name: variantes-sans-accent-kmt
description: "Google fusionne des formulations distinctes dans un même bucket (l'empreinte de série mensuelle le prouve) — ne jamais additionner ; et un NULL d'API n'est pas un zéro de marché"
metadata: 
  node_type: memory
  type: project
  originSessionId: 8d3ad651-5d3a-4ec8-8fe9-8307a867e5d6
  modified: 2026-08-29T23:25:41.248Z
---

**Constat initial (15/08/2026), toujours vrai pour SEMrush.** Le Keyword Magic Tool traite `ciel etoile` et `ciel étoilé` comme **deux corpus distincts** : les lignes sans accent n'apparaissent pas dans les résultats de la requête accentuée. Sur le dossier déco astro, `ciel etoile projecteur` 1 300 et `projecteur etoile plafond` 1 000 étaient invisibles depuis `ciel étoilé`.

**Correction du 29/08/2026 — la conclusion qu'on en avait tirée était fausse.** Le rejeu du même dossier via DataForSEO montre que **Google fusionne les deux formulations** : sur 6 paires sur 7, non seulement le volume est identique, mais **la série mensuelle l'est mois par mois** (`ciel étoilé`/`ciel etoile` 12 100, `système solaire` 60 500, `projecteur étoile` 1 300, `veilleuse étoile` 880, `étoiles phosphorescentes` 1 300, `projecteur ciel étoilé` 1 900). Une série identique douze mois de suite n'est pas une coïncidence : c'est le même bucket. Seule exception, `planétarium` / `planetarium`, et pour une autre raison — la forme sans accent est un mot anglais et allemand, pas une variante d'écriture.

**Ce que ça implique, précisément.** Les deux sources ne mesurent pas la même unité. SEMrush mesure des chaînes de caractères dans son index ; Google mesure ce sur quoi il sert des annonces. Notre protocole « interroger les deux et additionner » produisait donc un total qui **compte deux fois la demande que Google servira**. Le rapport du 15/08 attribuait 6 350 recherches sur 13 460 à des « formulations non accentuées jamais lues » — ce volume n'existe pas en tant que demande adressable distincte.

Ce n'est pas « SEMrush a tort » : il est possible que les gens tapent réellement les deux formes. Mais l'unité qui compte pour nous — une page, une annonce, un flux Merchant Center — est le bucket de Google.

**Why :** l'étape 3 de `METHODE-ANALYSE-MARCHE.md` dit d'additionner les variantes « d'écriture, d'ordre, de nombre et d'accent » qu'une même page sert. La règle reste bonne ; c'est son application mécanique à deux lectures SEMrush qui gonflait.

**How to apply :**
- **Sur DataForSEO** : ne jamais additionner une paire accentuée / non accentuée. Le test de décision est la **série mensuelle** : identique douze mois de suite → un seul bucket, on retient le MAX. C'est ce que fait la troisième passe de `boutique-pipeline/scripts/kw_dfs.py` depuis le 29/08.
- **Sur SEMrush** (tant que l'abonnement vit) : continuer à interroger les deux pour la découverte de vocabulaire — c'est là que la règle garde toute sa valeur — mais ne pas additionner les deux totaux sans dire que le chiffre est un plafond.

Deux pièges voisins relevés le 15/08 et toujours valables : `lampe demi lune` n'est pas une lampe décorative mais une **lampe UV de manucure** (1 500 à retirer d'office), et `poster` est **rabattu sur `poste`** par SEMrush, qui rend « La Poste espace client » sur 57 290 de volume — la racine `poster` est inutilisable telle quelle.

**Extension du 31/08/2026 — la fusion ne touche pas que les accents, et l'empreinte de série la débusque.** Sur le dossier console rétro, les graines `console rétro` et `retrogaming` — deux mots totalement différents, pas des variantes d'écriture — rendent la **même série au chiffre près** (`8100, 6600, 8100, 8100, 9900, 12100, 14800, 27100, 22200, 14800, 14800, 14800`) : un seul bucket à 14 800, qui absorbe aussi `retro game console`, `retrogaming console`, `la console retrogaming`. La mesure SEMrush du 01/08 en avait fait une somme (8 100 + 2 300 → « 13-15 k »). **La série mensuelle est donc le test général des buckets fusionnés, pas seulement le test des paires accentuées.**

**Deuxième piège découvert le même jour — un NULL n'est pas un zéro.** `keywords_data/google_ads/search_volume` renvoie **NULL** sur `game boy advance`, `game boy color`, `coque game boy advance` — indiscernable d'un 0 si on ne regarde pas. Et **la graphie de la graine change tout** : `game boy` (deux mots) rend 1 795 idées dont **une seule** valorisée, `gameboy` (un mot) en rend 634 **toutes** valorisées, faisant apparaître le vocabulaire cherché (`batterie gameboy advance sp` 320, `gameboy advance modding` 210). Une famille a failli être classée morte sur un artefact d'outil.

**How to apply (ajout)** : avant de conclure à l'absence de demande sur une tête, (1) recouper la tête nulle par une **graphie alternative** de la graine — collé/séparé, avec/sans tiret ; (2) se méfier d'une graine dont *toutes* les suggestions sauf une sont à 0, c'est une signature d'artefact, pas un marché vide.

Voir [[migration-semrush-vers-dataforseo]], [[mesure-express-semrush-lots]], [[salve-niches-univers-2026-08-15]].
