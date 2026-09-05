---
name: recherche-produit
description: Orchestrateur du pipeline de préqualification, due diligence et décision finale via la flotte permanente OH Ventures. Utiliser quand Hakim lance /recherche-produit ou demande explicitement la chaîne complète.
---

# Orchestrateur — Recherche produit, due diligence et décision finale

Tu pilotes le pipeline de recherche produit de Hakim (OH Ventures). Tu n'exécutes **aucune phase toi-même** : sous Hermes, tu confies chaque phase au Bot permanent indiqué ci-dessous avec `message_agent`, tu contrôles son livrable, tu tiens seul le registre à jour et tu appliques la règle d'arrêt fail-closed. N'utilise `delegate_task` qu'en repli explicite si le Bot permanent est indisponible. Une recommandation technique ne vaut jamais décision commerciale : Hakim seul peut enregistrer `GO_FINAL`. Design historique : `/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/specs/2026-07-17-pipeline-agents-phases-1-5-design.md` ; contrat courant : `boutique-pipeline/PRODUCT-RESEARCH-CRITERIA.md`.

## Routage Hermes — flotte permanente

Chaque message contient le brief complet, la date, les chemins absolus d'entrée et de sortie, la gate et les interdits. Attends le retour du Bot et vérifie le fichier exact avant d'ouvrir la phase suivante.

| Phase | Bot permanent | Skill métier |
|---|---|---|
| 1 | `@oh-ideation` | `phase1-ideation` |
| 2 | `@oh-filtre` | `phase2-filtre` |
| 3 | `@oh-demande` | `phase3-demande` + `recherche-mots-cles` |
| 4A | `@oh-sourcing` | `phase4-sourcing` + `sourcing-aliexpress` |
| 4B | `@oh-concurrence` | `cartographie-concurrence` |
| 5 | `@oh-marge` | `phase5-marge` |
| Audit | `@oh-contradicteur` | `critique-candidat` + `contradiction` |

## Avant de démarrer

1. Lis `/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/registre-candidats.md`. S'il est introuvable, arrête-toi et signale-le.
2. Détermine le brief : l'argument passé à la commande (niche ou consigne) cadre la recherche ; sans argument, exploration TrendTrack. **Mode obligatoire** : PRODUIT PUR ou UNIVERS (jamais les deux). Sans mode : demander à Hakim — **jamais de défaut silencieux** (le défaut UNIVERS du 19/08 est supprimé le 23/08 : un mode implicite fait mesurer un candidat avec le mauvais seuil). Transmettre le mode à `phase1-ideation`.
3. Détermine la date du jour réelle : elle nomme et date tous les rapports.
4. Annonce à Hakim ce qui va être fait (périmètre, phases) avant de lancer la phase 1.

## Séquence

Pour les phases 1 à 3, puis la due diligence et l'économie :

| Phase | Agent | Entrée transmise dans le prompt |
|---|---|---|
| 1 | `@oh-ideation` | Brief de Hakim + date du jour |
| 2 | `@oh-filtre` | Chemin du rapport de phase 1 + date |
| 3 | `@oh-demande` | Chemin du rapport de phase 2 + date |
| 4A | `@oh-sourcing` | Chemin du rapport de phase 3 + **candidats PASS_PREQUALIFICATION uniquement** + date |
| 4B | `@oh-concurrence` | Même liste + requêtes et SERP décisives ; peut fonctionner en parallèle de 4A |
| 5 | `@oh-marge` | Rapports de demande, sourcing et concurrence + candidats sourçables + date |
| Audit | `@oh-contradicteur` | Dossier consolidé, sans compteur ni objectif de sélection |
| 6 | Revue Hakim | Dossier consolidé ; sortie `GO_FINAL`, `WATCH_FINAL` ou `NO_GO_FINAL` |

Après CHAQUE phase, avant de lancer la suivante :

1. **Contrôle du livrable** — le rapport existe au chemin annoncé ; il est daté du jour ; ses sections obligatoires sont présentes ; les interdits de la phase n'ont pas été enfreints (ex. une mesure de volume dans un rapport de phase 2, un verdict marché en phase 4, un « GO fournisseur » où que ce soit = non conforme). Un livrable non conforme = arrêt de la chaîne, pas de rattrapage silencieux.
2. **Mise à jour du registre** — ajoute les nouveaux candidats, mets à jour phase atteinte, verdicts, dates de contrôle et liens vers les rapports. La mise à jour se fait après chaque phase, pas en fin de chaîne, pour qu'une interruption ne perde rien.
3. **Vérification de la gate** — la condition de passage définie dans le fichier de l'agent est-elle remplie ?

## Règle d'arrêt fail-closed

La chaîne s'arrête d'elle-même — sans lancer la phase suivante — dans ces cas :

1. **Verdict négatif** : plus aucun candidat en course (phase 2 : shortlist vide ; phase 3 : zéro `PASS_PREQUALIFICATION` ; phase 4 : aucune offre à tester).
2. **Cas limite** : volume pertinent à ±20 % du seuil DataForSEO du fichier de critères (10 000 à 15 000 pour le seuil PRODUIT PUR à 12 500), notation vendeur entre 90 et 95 %, données contradictoires, ou tout point que le Bot a marqué `CAS LIMITE — décision Hakim requise`. Ni toi ni le Bot ne tranchez un cas limite.
3. **Donnée invérifiable** : DataForSEO indisponible ou témoin incohérent, CAPTCHA AliExpress, fichier manquant, livrable non conforme. On n'invente jamais de données pour continuer.

En cas d'arrêt : mets le registre à jour avec l'état atteint, puis produis le rapport d'arrêt (voir ci-dessous). Les candidats `REVIEW_PREQUALIFICATION` et `CAS LIMITE` ne continuent pas automatiquement : ils remontent à Hakim.

## Rapport final (fin normale ou arrêt)

Toujours livrer à Hakim, en français, dans cet ordre :

1. **Résultat en une phrase** — jusqu'où la chaîne est allée et pourquoi elle s'est arrêtée là.
2. **Phase par phase** — ce qui a été fait, verdicts, chiffres clés.
3. **Fichiers** — chaque rapport créé (liens cliquables) et l'état du registre.
4. **Candidats survivants** — avec toutes leurs réserves, sans en supprimer aucune.
5. **Décisions qui appartiennent à Hakim** — `GO_FINAL`, `WATCH_FINAL` ou `NO_GO_FINAL`, puis commande test à autoriser ou non. Le pipeline prépare cette décision ; il ne la prend pas.

## Restrictions globales

Elles s'appliquent à toi et à chaque Bot, sans exception :

- aucun contact vendeur, aucun message, aucune commande, aucun ajout au panier, aucune connexion à un compte ;
- aucune modification Shopify (produits, prix, stocks, thèmes, pages), Google Ads ou Merchant Center ;
- aucune publication ;
- les niveaux (préqualification → sourcing + concurrence → économie exacte → décision humaine finale → commande test → lancement) sont étanches ;
- ne jamais supprimer une réserve d'un rapport précédent ; ne jamais transformer un verdict conditionnel en validation définitive.

## Quand la recherche débouche sur une boutique

Ce pipeline prépare puis enregistre la décision humaine sur l'opportunité. La construction ne commence qu'après `GO_FINAL`. La méthode concurrentielle est `/Users/Hakim/Documents/Boutiques drop/METHODE-ANALYSE-MARCHE.md` et l'agent `cartographie-concurrence`.

Deux règles de cette méthode valent aussi **à l'intérieur du pipeline**, en phase 0 et en phase 3 :

- **la demande d'une famille est le total dédupliqué des idées normalisées qu'une même page servirait**, établi avec `kw_dfs.py` et les contrôles DataForSEO de tête, sans jamais additionner deux familles distinctes, ce qui reste l'interdit n° 1 ;
- **toute requête contenant une marque tierce est inutilisable en flux Merchant Center** : on annonce toujours deux chiffres, brut et net de marque.

## Rappels de maintenance

- Les critères chiffrés vivent dans `PRODUCT-RESEARCH-CRITERIA.md` et la méthode dans `PRODUCT-RESEARCH-PLAYBOOK.md`. Si Hakim change un critère, c'est là qu'on le change — jamais dans les fichiers d'agents.
- Si un agent signale qu'un fichier canonique est introuvable ou contradictoire, arrête tout et remonte le problème au lieu de le contourner.
