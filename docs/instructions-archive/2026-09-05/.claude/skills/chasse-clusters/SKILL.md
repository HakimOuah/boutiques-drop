---
name: chasse-clusters
description: Boucle autonome de chasse aux candidats produit, volume-first. Balaie des familles via DataForSEO, qualifie les clusters et accumule des candidats vérifiés dans le registre jusqu'à 20. Utiliser quand Hakim lance /chasse-clusters ou demande d'accumuler des candidats produit en autonomie.
---

# Boucle — Chasse aux clusters

Tu pilotes la boucle de découverte volume-first de Hakim (OH Ventures). Tu n'exécutes **aucune phase toi-même** : sous Hermes, tu routes chaque étape vers les Bots permanents avec `message_agent`, tu contrôles leurs livrables, tu écris seul le registre et tu appliques la règle d'arrêt fail-closed. Repli sur `delegate_task` uniquement si le Bot permanent est explicitement indisponible.

Design de référence : `/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/specs/2026-07-20-boucle-chasse-clusters-design.md`.

Cette boucle est du **PRODUIT PUR** (clusters DataForSEO). Un UNIVERS (gothique, montres) ne se chasse pas ici : skill `ideation-produit` mode UNIVERS, puis MOTS-CLÉS Mission B.

**Routage permanent :** découverte `@oh-scout` ; sonde prix et concurrence `@oh-concurrence` ; filtre `@oh-filtre` ; demande `@oh-demande` ; sourcing `@oh-sourcing` ; économie `@oh-marge` ; audit indépendant `@oh-contradicteur`.

## Avant de démarrer

1. Lis `registre-candidats.md` et `familles-exploration.md`. Si l'un manque, arrête-toi et signale-le.
2. Compte les candidats déjà retenus dans la section « Chasse clusters » du registre, en comptant les lignes du tableau et non la valeur affichée du compteur. Ignore la ligne d'amorce `*aucun candidat retenu à ce jour*`, qui est un placeholder. C'est ton compteur de départ — une relance reprend où la boucle s'est arrêtée.
3. Détermine la date du jour réelle.
4. Vérifie DataForSEO : charge le `.env` du dépôt `ecommerce-dropshipping` sans afficher les secrets et demande à `@oh-scout` un contrôle témoin `tufting` France/français avant toute famille. Erreur API, quota ou témoin incohérent = arrêt déclaré, sans repli.
5. Annonce à Hakim le compteur de départ et la famille par laquelle tu commences.

## Boucle principale

Tant que le compteur est inférieur à **20** et qu'il reste des familles non balayées :

### 1. Découverte

Message `@oh-scout` sur la famille suivante non balayée, avec ses graines, la date, les chemins canoniques et le chemin de rapport attendu. Attends son retour avant de continuer.

Contrôle du livrable : le rapport existe au chemin `reports/chasse-clusters-<famille>-<YYYY-MM-DD>.md`, il est daté du jour, ses sept sections obligatoires sont présentes, aucun produit n'y est proposé, aucun verdict marché n'y figure. Non conforme = arrêt, pas de rattrapage silencieux.

### 2. Anti-doublon

Écarte tout cluster correspondant à un produit déjà en STOP, rejeté ou clos dans le registre. Applique la logique de synonymes : singulier/pluriel, accents, français/anglais, variantes proches, même usage client.

Une reprise n'est possible que si Hakim l'a explicitement demandée et documentée comme `reprise motivée`.

### 3. Qualification, cluster par cluster

Pour chaque cluster survivant, dans l'ordre décroissant de volume :

**a. Sonde prix sur le cluster** — message `@oh-concurrence` pour exécuter `sonde-prix` sur le mot-clé de tête, **avant** le filtre qualitatif. Une lecture de Google Shopping France, aucun site marchand visité.

C'est le premier point d'économie de la boucle, et c'est aussi ce qui rend le filtre prix de la phase 2 opérant : sur le chemin B il n'existe aucune phase 1, donc sans la sonde la phase 2 n'a **aucune donnée de prix autorisée** (constat du dry-run famille 1 du 20/07/2026). Traitement selon le verdict :

- `LOW-TICKET` → le cluster entier bascule en vivier avec son volume et sa fourchette, et ne continue pas. La phase 2 n'est même pas lancée.
- `DANS LA TRANCHE` ou `INDÉTERMINÉ` → le cluster continue en b, et **la fourchette constatée est transmise à `phase2-filtre` dans son brief** comme donnée de prix datée et sourcée.

Un vivier **n'est pas un rejet** : c'est un marché à volume réel dont le ticket est incompatible avec le périmètre actuel, mis de côté pour une éventuelle boutique mêlant low et high ticket. Il ne compte pas dans les 20 et ne compte pas non plus comme candidat pour la règle des trois familles stériles — une famille qui ne produit que des viviers reste une famille sans candidat.

**b. Filtre qualitatif** — message `@oh-filtre` avec le cluster, son volume, et la fourchette de prix rendue par la sonde. Il identifie les produits qui servent ce cluster et applique banalité, valeur perçue, différenciation et tranche 50–400 €. Shortlist vide = cluster abandonné, on passe au suivant.

Le brief transmis à `phase2-filtre` doit contenir, à chaque fois :

1. **La règle de dérivation des produits** — « un produit n'est instruit que s'il est attesté par au moins un mot-clé mesuré du cluster ; aucun produit imaginé hors du vocabulaire mesuré ». C'est ce qui rend deux exécutions sur le même cluster reproductibles. Conséquence assumée : le chemin B ne peut pas produire un candidat que le vocabulaire du marché ne nomme pas encore — c'est le prix de la fiabilité du volume.
2. **La fourchette de prix de la sonde**, avec sa date, comme seule donnée de prix autorisée.
3. **L'obligation de verser les poches non instruites** — si l'agent repère dans le rapport de phase 0 un signal qu'il ne peut pas instruire comme candidat (segment adjacent, mot-clé à CPC élevé, persona pro), il le liste explicitement dans son rapport au lieu de le laisser tomber. Tu inscris ces poches dans la section « Viviers » du registre avec le motif `poche repérée, non instruite`, pour qu'elles ne soient pas perdues.

**c. Demande réelle** — message `@oh-demande` sur les survivants. Il nettoie la SERP, mesure via DataForSEO le volume réellement adressable et relève les prix. Un `STOP_PREQUALIFICATION` ferme le cluster. Un `CAS LIMITE` ne continue pas : il est noté au registre et remonté à Hakim en fin de tour.

**d. Due diligence** — sur les `PASS_PREQUALIFICATION` uniquement, message `@oh-sourcing` et `@oh-concurrence`, en parallèle quand possible. Une fois les deux rapports vérifiés, message `@oh-marge` pour l'économie exacte.

Ce qu'on cherche à prouver ici est que le produit est **sourçable** et qu'une fiche précise lui correspond — pas que le fournisseur est bon. Décision de Hakim du 20 juillet 2026 : un vendeur sans avis, avec une ou deux commandes, ou expédiant depuis la Chine, **ne ferme pas le cluster**. Cherche en priorité un vendeur avec des avis solides et un entrepôt France ou UE ; si tu n'en trouves pas, retiens la meilleure fiche disponible et note-la comme telle.

Cluster fermé uniquement si : aucune fiche ne correspond au produit, ou le prix rendu est supérieur ou égal au prix marché constaté.

**e. Critique technique** — message `@oh-contradicteur` avec les rapports de demande, sourcing, concurrence et marge. **Ne lui transmets jamais le compteur, ni le nombre de candidats manquants, ni aucune indication d'avancement.** Sa sortie est une recommandation technique, jamais `GO_FINAL`.

**f. Décision et écriture** — présente le dossier consolidé à Hakim. Si et seulement si la décision est `GO_FINAL`, écris immédiatement `RETENU` dans la section « Chasse clusters » du registre, en trois gestes indissociables :

1. ajoute la ligne du candidat avec son niveau de confiance fournisseur (A, B ou C) et toutes ses réserves ;
2. si la ligne d'amorce `| — | *aucun candidat retenu à ce jour* | … |` est encore présente, **supprime-la** — c'est un placeholder, jamais un candidat ;
3. mets à jour la ligne `**Compteur : N / 20**` avec le nouveau total, obtenu en comptant les lignes de candidats réellement présentes dans le tableau.

L'écriture se fait candidat par candidat, jamais en fin de tour : une interruption ne doit rien perdre. Le compteur du registre est la seule source de vérité de l'avancement — si tu le laisses désynchronisé, une relance repartira sur un mauvais compte.

4. **Synchronisation Notion** — après l'écriture registre, jamais avant, jamais à la place (voir la section « Synchronisation Notion »).

### 4. Auto-expansion

Avant de passer à la famille suivante, traite les graines dérivées notées par `phase0-decouverte` pour les clusters retenus. Elles sont ajoutées à la famille en cours, jamais transformées en nouvelle famille sans validation de Hakim.

### 5. Clôture de famille

Marque la famille `balayée` dans `familles-exploration.md`, avec la date et le nombre de candidats retenus. Puis famille suivante.

## Synchronisation Notion

Base : **« Chasse aux clusters — juillet 2026 »**, data source `9490c443-ea82-4102-8b3f-f58cdb9c7dc6`, dans le hub Pipeline Boutiques Drop. Outils MCP Notion (`mcp__e9f95077-…__notion-create-pages` avec `parent: {data_source_id}` ; charger via ToolSearch si besoin).

**Quoi synchroniser** — chaque écriture registre produit sa fiche Notion, au fil de l'eau :

| Écriture registre | Statut Notion |
|---|---|
| Candidat retenu (étape f) | `Retenu` + Confiance A/B/C + URL fournisseur |
| Vivier (sonde LOW-TICKET ou poche non instruite) | `Vivier` ou `Poche repérée` |
| STOP marché (phase 3) | `STOP marché` |
| Cas limite ou À APPROFONDIR remonté à Hakim | `Cas limite — décision Hakim` ou `À approfondir` |

Propriétés à remplir : Produit / Cluster (titre), Statut, Famille (créer l'option si la famille n'existe pas encore dans le select), Volume pertinent (mois), Prix marché constaté, Fournisseur AliExpress (URL), Prix rendu, Confiance, Concurrence, Réserves / Notes (toutes les réserves, jamais tronquées au point d'en perdre une majeure), Date. Pour un candidat retenu, mettre les liens des fiches AliExpress (retenue, backup, cartouches) dans le corps de la page.

**Trois règles inviolables :**

1. **Le registre d'abord.** La fiche Notion s'écrit après la ligne registre, jamais avant, jamais à la place. Notion est le tableau de lecture de Hakim ; le registre local est la source de vérité.
2. **Notion ne bloque jamais la boucle.** Si le connecteur est indisponible, en erreur ou non authentifié : note l'entrée manquée dans `boutique-pipeline/notion-sync-pending.md` (une ligne par fiche à rattraper, avec la date) et continue. Une panne Notion n'est PAS un blocage technique au sens de la règle d'arrêt.
3. **Pas de doublon.** Avant de créer une fiche, vérifie qu'elle n'existe pas déjà (le produit peut avoir été synchronisé lors d'une session précédente). Si elle existe, mets-la à jour au lieu d'en créer une seconde.

## Règle d'arrêt fail-closed

La boucle s'arrête d'elle-même dans quatre cas :

1. **Objectif atteint** — 20 candidats retenus.
2. **Familles épuisées** — rapport de couverture avec le compte obtenu.
3. **Trois familles consécutives sans aucun candidat retenu** — signal que le seuil est incompatible avec le périmètre. Les viviers ne comptent pas comme candidats dans ce décompte. **Tu ne baisses jamais le seuil toi-même** : tu remontes le constat à Hakim et tu t'arrêtes.
4. **Blocage technique** — DataForSEO indisponible ou témoin incohérent, CAPTCHA AliExpress, page qui ne charge pas, fichier canonique introuvable, livrable non conforme.

Sur blocage : mets le registre à jour avec l'état atteint, puis produis le rapport d'arrêt. **Aucun volume n'est jamais estimé pour continuer. Aucune donnée n'est inventée.**

## Interdits stricts

- Ne jamais assouplir un critère pour atteindre l'objectif chiffré. Un compte de 12 candidats solides vaut mieux que 20 dont 8 sont faibles.
- Ne jamais transmettre le compteur à `critique-candidat`.
- Ne jamais transformer la recommandation technique en décision humaine : pas de commande test, pas de `GO_FINAL` automatique, pas de GO lancement.
- Aucun contact vendeur, aucun achat, aucun ajout au panier, aucune connexion à un compte.
- Aucune modification Shopify, Google Ads ou Merchant Center. Aucune publication.
- Ne jamais supprimer une réserve d'un rapport précédent.

## Rapport final

En français, dans cet ordre :

1. **Résultat en une phrase** — combien de candidats retenus, sur combien de familles balayées, et pourquoi la boucle s'est arrêtée là.
2. **Les candidats** — tableau complet avec volume, prix marché, concurrence, fournisseur, réserves.
3. **Couverture** — familles balayées, familles restantes, clusters écartés et pourquoi.
4. **Viviers constitués** — marchés à volume réel écartés sur le ticket, avec leur fourchette de prix.
5. **Cas limites** — ce qui attend une décision de Hakim.
6. **Limites d'outillage** — ce qui n'a pas pu être vérifié.
7. **État de la synchro Notion** — à jour, ou liste des fiches en attente dans `notion-sync-pending.md`.
