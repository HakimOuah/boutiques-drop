---
name: pipeline-recherche-produit-agents
description: Le pipeline de recherche produit (phases 1-5) est orchestré par /recherche-produit et 5 sous-agents dédiés ; registre central anti-doublon obligatoire
metadata: 
  node_type: memory
  type: project
  originSessionId: 455c6a31-511d-4d11-a937-711aeb4be1b5
---

Depuis le 17 juillet 2026, toute recherche produit passe par l'orchestrateur `/recherche-produit` (skill projet dans `Boutiques drop/.claude/skills/recherche-produit/`) qui enchaîne 5 sous-agents (`Boutiques drop/.claude/agents/phase1-ideation.md` à `phase5-marge.md`) avec arrêt automatique fail-closed (verdict négatif, cas limite ±20 % du seuil, donnée invérifiable → remontée à Hakim).

**Why:** Les recherches antérieures mélangeaient les phases (verdicts marché contaminés par le sourcing) et perdaient la mémoire entre sessions ; les anciens skills `niche-scorer`, `competitor-analyzer`, `margin-calculator` appliquaient des critères périmés de mars 2026 et ont été archivés dans `~/.claude/skills-archive/` — ne pas les restaurer.

**How to apply:** Ne jamais mener une recherche produit « à la main » dans la conversation principale : utiliser `/recherche-produit`. Les critères chiffrés vivent uniquement dans `boutique-pipeline/PRODUCT-RESEARCH-CRITERIA.md` (jamais dans les agents). Lire et mettre à jour `boutique-pipeline/registre-candidats.md` (anti-doublon, une ligne par produit jamais étudié). Design complet : `boutique-pipeline/specs/2026-07-17-pipeline-agents-phases-1-5-design.md`. En phase 3, règle d'exploration hiérarchique obligatoire (longue traîne faible → mesurer la famille parente ; ne jamais gonfler avec le générique non adressable).
