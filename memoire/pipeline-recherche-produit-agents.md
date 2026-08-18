---
name: pipeline-recherche-produit-agents
description: Le pipeline de recherche produit (phases 1-5) est orchestré par /recherche-produit et 5 sous-agents dédiés ; registre central anti-doublon obligatoire
metadata: 
  node_type: memory
  type: project
  originSessionId: 455c6a31-511d-4d11-a937-711aeb4be1b5
---

Depuis le 17 juillet 2026, la **chaîne 5 phases** (idéation → filtre → demande → sourcing → marge) est orchestrée par `/recherche-produit` (skill `.claude/skills/recherche-produit/`) qui enchaîne les sous-agents `phase1-ideation` à `phase5-marge` avec arrêt fail-closed. **Depuis le 18/08 soir**, les métiers Cursor/Grok sont trois skills étanches : `ideation-produit` · `recherche-mots-cles` · `sourcing-aliexpress`. Voir [[skills-recherche-separes]].

**Why:** Les recherches antérieures mélangeaient les phases (verdicts marché contaminés par le sourcing) et perdaient la mémoire entre sessions ; les anciens skills `niche-scorer`, `competitor-analyzer`, `margin-calculator` appliquaient des critères périmés de mars 2026 et ont été archivés dans `~/.claude/skills-archive/` — ne pas les restaurer.

**How to apply:** Idées / TrendTrack → `ideation-produit`. Volumes / SERP / sonde → `recherche-mots-cles`. AliExpress après GO marché → `sourcing-aliexpress`. Chaîne 5 phases → uniquement si Hakim lance `/recherche-produit`. Critères : `boutique-pipeline/PRODUCT-RESEARCH-CRITERIA.md`. Anti-doublon : `boutique-pipeline/registre-candidats.md`.
