# Règles communes du parc

Appliquer les instructions de la mission et les règles locales pertinentes. Les archives documentent le passé ; elles ne remplacent pas les critères actuels.

## Autonomie et fin de tâche

Dans le périmètre demandé, poursuivre les actions autorisées et réversibles jusqu'au résultat attendu : réaliser le travail, inspecter le résultat, corriger les erreurs pertinentes et effectuer les vérifications proportionnées. Actualiser les documents ou tickets dont l'état a réellement changé. Une étape sans utilité pour la tâche n'est pas obligatoire. Une première implémentation n'est pas une fin si des erreurs connues empêchent le résultat attendu.

Si une dépendance bloque, continuer le travail indépendant utile et préciser ce qui manque. Ne pas annoncer terminé ce qui reste bloqué ou non vérifié. Ne pas redemander une autorisation déjà donnée ; demander seulement la décision manquante qui change réellement l'action.

## Frontières

Lecture, analyse, modifications locales, tests adaptés, corrections et documentation utile : autonomes dans le périmètre demandé. Ne pas élargir une petite correction à une refonte ou à un lancement.

Avant production, publication publique, suppression de données, dépense externe, commande ou changement d'identifiants : vérifier l'autorisation portant sur l'action, la cible et son ampleur. Préparer un résultat révisable avant de demander la décision manquante. Un budget déjà approuvé permet d'agir dans sa limite cumulée ; une règle propre à un outil peut être plus restrictive. Aucun message à un tiers sans autorisation explicite.

Pour la recherche produit, les décisions humaines et les portes fournisseur/échantillon restent celles de `boutique-pipeline/PRODUCT-RESEARCH-CRITERIA.md`. Une recommandation technique ne les remplace pas.

## Collaboration et Git

GitHub conserve la référence durable ; le clone contient le travail en cours et les preuves doivent porter leur date. Un état versionné ne prouve pas l'état de la production.

Avant une écriture partagée, vérifier les changements présents et le propriétaire du ticket. Préférer un worktree isolé pour un chantier concurrent. Ne pas changer la branche d'un checkout utilisé par d'autres agents. Ne pas écraser leurs modifications.

Livrer les modifications durables par un commit ciblé et un push sur la branche de mission (`codex/<mission>` pour Codex, `agents/<mission>-<date>` pour les autres agents). Ne pas inclure les fichiers des autres. Fusion vers `main` sur décision de Hakim ; sa présence dans la conversation n'autorise pas implicitement la fusion. Aucun force-push, reset destructeur ou rebase d'une branche partagée. Message de commit clair en français.

Ne jamais versionner secrets, `.env`, caches contenant des clés, dépendances, venvs, `scratchpad/` ou `settings.local.json` ; ne pas contourner `.gitignore` avec `git add -f`. La mémoire ne se modifie que sur demande explicite de l'utilisateur.

## Charger selon la tâche

- Localiser les responsabilités ou la donnée : [repos.md](repos.md).
- Boutique/ticket : méthode `boutique-pipeline/METHODE-TABLEAU.md`, ticket concerné et règles de la boutique ; pas l'ensemble des journaux.
- Recherche produit : `boutique-pipeline/PRODUCT-RESEARCH-PLAYBOOK.md`.
- Analyse de marché ou architecture de catalogue : `METHODE-ANALYSE-MARCHE.md`, sections pertinentes.
- Étape significative : appliquer [NOX](../nox/README.md), événement brut dans le hub ; ce n'est pas une autorisation de publier.
- Skill ou rôle Hermes modifié : régénérer les profils concernés avec `scripts/porter-skills-hermes.py` ; `.claude/` est la source, les profils sont des copies dérivées. Voir [hermes.md](hermes.md).
- Instrumentation : `boutique-pipeline/instrumentation/` pour croyances avant test, mesures datées et règles apprises. Une règle n'est jamais promue en `validee` sans accord de Hakim.
