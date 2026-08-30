---
name: architecture-hermes-modele-par-role
description: Hermes retenu contre Grok Bot ; un modèle par rôle coûte un processus, pas un paramètre
metadata:
  type: project
---

Audit des trois repos le 30/08/2026 (`HakimOuah/hermes-orchestration`, `docs/audit-2026-08-30.md` — repo cloné à part, absent de l'arborescence locale).

**Hermes est retenu, Grok Bot écarté.** La raison est dans `GROK-BOT-FLEET.md` lui-même : un bot Grok tourne dans le cloud et ne peut lire aucun fichier du Mac, donc chaque instruction est autoportante et doit être recopiée à la main quand une règle change (« rien ne se propage tout seul »). Une boucle d'apprentissage dont les règles se propagent manuellement n'est pas une boucle. Symptôme déjà présent : DESIGN et CONFORMITÉ GMC ont dû sortir de la flotte cloud. Grok Bot exige en plus SuperGrok Heavy — un abonnement, alors que l'objectif n°1 est de les résilier.

**Contrainte technique à retenir avant de concevoir quoi que ce soit :** `delegate_task` (sous-agents in-process de Hermes) n'expose **aucun paramètre `model` par tâche** — le code l'interdit explicitement. Tous les sous-agents d'une session héritent de `delegation.model`, global. Le seul chemin natif vers « un modèle par rôle », ce sont les **profils** : `HERMES_HOME`, mémoire, outils et modèle isolés, mais routés par canal de messagerie et un processus chacun (ce que le Swarm de Hermes Workspace industrialise via `swarm.yaml`).

**Conséquence de conception :** déclarer le routage par rôle dans la spec de mission, mais l'exécuter à un seul palier tant qu'on n'a pas mesuré qu'un modèle éco est insuffisant. L'isolation des contextes coûte cher en tokens (chaque agent relit la méthode) — c'est la vraie raison économique du Mac mini, pas la qualité du modèle local.

Voir [[instrumentation-boucle-apprentissage]] pour la brique de collecte déjà posée.
