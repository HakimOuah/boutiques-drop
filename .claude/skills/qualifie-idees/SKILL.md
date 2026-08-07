---
name: qualifie-idees
description: Qualification express d'idées produit — mesure du volume SEMrush et sonde prix AVANT tout travail de filtre, puis chaîne complète jusqu'à la fiche AliExpress vérifiée pour les survivantes. Utiliser quand Hakim apporte une ou plusieurs idées produit, demande de qualifier une idée, ou lance /qualifie-idees.
---

# Qualification express d'idées

Tu pilotes la voie hybride du pipeline de recherche produit de Hakim (OH Ventures), décidée le 20 juillet 2026 après le bilan de la boucle de balayage : **les idées redeviennent la source, mais chaque idée est mesurée avant qu'on y investisse quoi que ce soit.** Une idée sans volume meurt en quelques minutes, pas après une phase 3 complète.

Tu n'exécutes aucune phase toi-même : tu lances les sous-agents, tu contrôles leurs livrables, tu écris le registre. Design de référence : `boutique-pipeline/specs/2026-07-20-boucle-chasse-clusters-design.md` (les agents, la sonde, les viviers et le critique y sont définis — seule la source des entrées change).

## Entrées

- **Une ou plusieurs idées de Hakim** — passées en argument ou dans la conversation.
- **Sans idée fournie : minage Brand Search** (source d'idéation par défaut depuis le 20/07/2026). Lance `mineur-brandsearch` — il extrait des idées de niches prouvées à partir de boutiques vivant en Google Ads France sans Meta, dans la tranche de prix. Chaque idée arrive adossée à une boutique preuve. Puis traite chaque idée comme ci-dessous, les `directes` avant les `latérales`.
- `phase1-ideation` (idéation libre par sources d'inspiration) et le balayage par familles (`/chasse-clusters`, `familles-exploration.md`) sont **mis de côté** : ne les utilise que si Hakim les demande explicitement.

## Avant de démarrer

1. Lis `boutique-pipeline/registre-candidats.md`. S'il manque, arrête-toi.
2. Compte les candidats retenus dans la section « Chasse clusters » (lignes du tableau, pas la valeur affichée). L'objectif global reste **20 candidats**, tous chemins confondus.
3. Date du jour réelle.
4. Accès SEMrush : Chrome via MCP `claude-in-chrome`, compte déjà connecté — charger l'URL suffit. Écran de connexion = arrêt, demande à Hakim de se reconnecter, ne saisis jamais d'identifiants.

## Chaîne par idée

### 0. Anti-doublon — avant même de mesurer

Vérifie l'idée contre tout le registre (synonymes : singulier/pluriel, accents, français/anglais, variantes, même usage client). Produit lancé, STOP, rejet documenté ou clos → l'idée s'arrête ici, sauf `reprise motivée` explicite de Hakim. C'est gratuit — c'est la première porte.

### 1. Mesure express — `phase0-decouverte` en mode ciblé

Lance `phase0-decouverte` en lui donnant **l'idée nommée** au lieu d'une famille : il mesure le cluster de l'idée (formulation spécifique → famille de produit → catégorie parente, en niveaux séparés jamais additionnés), base France, chiffres lus à l'écran uniquement. Ses interdits s'appliquent inchangés : aucun verdict, aucune adressabilité jugée, aucune addition de familles distinctes (anti-exemple catio).

**Exploration latérale — encouragée, jamais silencieuse.** Le Keyword Magic Tool fait remonter des sous-groupes et du vocabulaire voisin ; c'est une richesse voulue par Hakim, pas du bruit. Deux mécanismes :

- les **sous-niches** que SEMrush révèle autour de l'idée mesurée (sous-groupes, termes connexes) sont notées en graines dérivées et peuvent être mesurées dans la foulée si leur volume affiché le justifie ;
- les **associations** — quand une idée en évoque une autre (une boutique d'étanchéité fait penser au béton ciré, à la rénovation décorative), la nouvelle idée est ajoutée à la file de la session, marquée `latérale`, et passera par la même chaîne complète depuis l'étape 0 (anti-doublon compris).

La règle qui borne l'exploration : une idée latérale suit **tout** le chemin — elle ne saute jamais une étape au motif qu'elle ressemble à sa voisine, et elle ne se mesure que si elle est réellement distincte (sinon c'est le même cluster, pas une nouvelle idée).

Traitement du résultat, seuil relu dans `PRODUCT-RESEARCH-CRITERIA.md` :

- **Nettement sous le seuil** (sous la bande −20 %) → l'idée meurt. Inscris-la au registre en `STOP mesure express` avec ses volumes et synonymes — coût total : quelques minutes.
- **Dans la bande ±20 %** → `CAS LIMITE — décision Hakim requise`. Noté au registre, remonté en fin de session. Tu ne tranches pas.
- **Au-dessus** → étape 2.

### 2. Sonde prix — `sonde-prix`

Sur le mot-clé de tête. `LOW-TICKET` net → vivier (volume + fourchette + note), l'idée ne continue pas. `DANS LA TRANCHE` ou `INDÉTERMINÉ` → la fourchette datée accompagne l'idée comme seule donnée de prix autorisée.

### 3. Filtre qualitatif — `phase2-filtre`

Brief chemin B habituel : règle de dérivation (produits attestés par le vocabulaire mesuré — l'idée de Hakim compte comme thèse à instruire, mais son produit doit être attesté par au moins un mot-clé mesuré), fourchette de la sonde, poches non instruites versées en vivier.

### 4. Demande réelle — `phase3-demande`

Nettoyage SERP, adressabilité, concurrents spécialistes vs enseignes, règle hiérarchique. `STOP marché` ferme l'idée ; `CAS LIMITE` remonte à Hakim sans continuer.

### 5. Fournisseur — `phase4-sourcing`

Sur `GO marché` uniquement. Fiches ouvertes et vérifiées ; la case prouve la **sourçabilité**, pas la qualité du vendeur (décision Hakim 20/07/2026) — niveaux de confiance A/B/C, seuls bloquants : pas de fiche correspondante ou prix rendu ≥ prix marché.

### 6. Critique — `critique-candidat`

Avec les rapports du dossier. **Jamais le compteur ni l'avancement.** Verdict binaire.

### 7. Écriture — après chaque idée, jamais en fin de session

`RETENU` → ligne au registre (confiance A/B/C, toutes réserves), suppression du placeholder s'il reste, compteur `N / 20` recompté sur les lignes réelles. Morts et viviers s'écrivent aussi au fil de l'eau.

### 8. Synchronisation Notion — après chaque écriture registre

Base : **« Chasse aux clusters — juillet 2026 »**, data source `9490c443-ea82-4102-8b3f-f58cdb9c7dc6`, hub Pipeline Boutiques Drop. Outils MCP Notion (`mcp__e9f95077-…__notion-create-pages`, charger via ToolSearch si besoin). Chaque sortie d'idée produit sa fiche :

| Sortie | Statut Notion |
|---|---|
| Retenu (étape 6) | `Retenu` + Confiance + URL fournisseur (liens AliExpress dans le corps de page) |
| Mort en mesure express (volume) | `STOP mesure express` (créer l'option si absente, couleur grise) |
| STOP marché (phase 3) | `STOP marché` |
| Vivier (low-ticket) / poche | `Vivier` / `Poche repérée` |
| Cas limite ou À APPROFONDIR | `Cas limite — décision Hakim` / `À approfondir` |

Propriétés : Produit / Cluster, Statut, Famille (créer l'option si nouvelle — pour une idée hors familles, utiliser une option `Idée directe`), Volume pertinent (mois), Prix marché constaté, Fournisseur AliExpress, Prix rendu, Confiance, Concurrence, Réserves / Notes, Date.

Règles inviolables : (1) le registre local d'abord, Notion ensuite, jamais à la place ; (2) une panne Notion ne bloque jamais la session — noter la fiche manquée dans `boutique-pipeline/notion-sync-pending.md` et continuer ; (3) pas de doublon — si la fiche existe, la mettre à jour.

## Règles d'arrêt fail-closed

- SEMrush inaccessible, CAPTCHA AliExpress, fichier canonique introuvable, livrable non conforme → arrêt, registre à jour, rapport d'arrêt. Aucune donnée inventée.
- Aucun assouplissement de critère pour faire passer une idée — l'attachement de Hakim à une idée n'est pas un critère. Si toutes les idées d'une salve meurent, c'est le résultat : dis-le simplement.

## Interdits stricts

Identiques à la boucle : jamais au-delà du niveau 2 de validation ; aucun contact vendeur, achat, panier ; aucune modification Shopify / Google Ads / Merchant Center ; aucune publication ; aucune réserve supprimée ; cas limites jamais tranchés par un agent.

## Rapport final de session

Confirmer en fin de rapport que la synchronisation Notion est à jour (ou lister ce qui est en attente dans `notion-sync-pending.md`).

1. **Résultat en une phrase** — idées traitées / retenues / mortes (et à quelle étape) / viviers / cas limites.
2. **Tableau des sorties** — chaque idée avec sa provenance (Hakim / minage direct / latérale, avec la boutique preuve le cas échéant), son point de sortie et son coût approximatif (une idée morte en mesure express doit se voir).
3. **Candidats retenus** — dossiers complets avec réserves.
4. **Décisions pour Hakim** — cas limites et À APPROFONDIR.
5. **Limites d'outillage.**
