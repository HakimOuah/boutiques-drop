---
type: evenement-nox
date: 2026-09-04
categorie: automatisation
titre: "Le Q4 Testing OS tourne sur un board kanban Hermes, workers Grok, manager GPT"
projet: q4-testing-os
repo: hermes-orchestration
axes: [agents, automatisation, ecommerce]
agent: claude-code
statut_editorial: brut
commit: 1d89f67
---
# Le Q4 Testing OS tourne sur un board kanban Hermes, workers Grok, manager GPT

## Ce qui a changé

Le planning hebdomadaire de tests Q4 n'est plus une base Notion lue par Hakim : c'est un board
kanban Hermes `oh-ventures-q4`, une carte par produit et par couloir (veille, comité, build, test,
verdict), avec quatre routines datées sur le profil manager et une chaîne C0 prête pour le rasoir
de sûreté. Les sept workers de phase tournent sur Grok, le manager et le contradicteur sur GPT.

## Pourquoi c'est notable

Une carte survit à la fermeture d'une session, garde ses logs et ses tentatives, et se bloque
`needs_input` quand une décision revient à Hakim. C'est la première fois que la semaine de test
existe comme objet exécutable et non comme liste à relire. Et un modèle par rôle ne coûte plus un
processus permanent : le kanban prend un modèle par carte, ce que `delegate_task` interdisait.

## Le détail qui fait le contenu

Avant ce soir, « workers Grok » était faux. Les sept profils `oh-*` tournaient sur `gpt-5.6-sol` ;
seul le repli `delegate_task` pointait vers Grok, et le skill `recherche-produit` ne l'utilise
qu'en dernier recours. La mémoire du 30/08 affirmait qu'un modèle par rôle exigeait un processus
par rôle : vrai pour `delegate_task`, faux pour le kanban, qui a `--model` par carte.

Trois syntaxes ont cassé avant de marcher. `hermes tools enable kanban` répond « Unknown
toolset » : le toolset est gardé par une clé `toolsets:` de premier niveau dans la config du
profil, que seul `tools/kanban_tools.py` lit. `cron create` et `kanban block` refusent leurs
positionnels placés après les options. Et `--initial-status blocked` n'a pas tenu : la carte de
sourcing a été promue et lancée dans la minute par le dispatcher de la gateway, un worker Grok
a démarré (pid 19516), tué à la main et carte réclamée avant qu'il n'écrive quoi que ce soit.
Le blocage qui tient est `block <id> "motif" --kind needs_input`, motif avant l'option.

## Ce qu'on ne peut pas encore dire

Aucune chaîne n'a tourné de bout en bout : la carte de tête est bloquée jusqu'au test de fumée
de Hakim. Les quatre routines n'ont pas encore eu leur premier passage (samedi 05/09 8h pour la
veille). On ne sait pas si Grok tient une phase de sourcing sans dériver, ni ce que coûte une
chaîne C0 complète. Le build reste sur Claude Code et Codex ; Google Ads et Merchant Center
restent hors de Hermes.
