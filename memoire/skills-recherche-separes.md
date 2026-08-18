---
name: skills-recherche-separes
description: "Trois skills étanches depuis le 18/08/2026 : ideation-produit, recherche-mots-cles, sourcing-aliexpress — plus de skill dossier unique"
metadata:
  node_type: memory
  type: project
  originSessionId: cursor-2026-08-18-skills-separes
  modified: 2026-08-18T14:40:00.000Z
---

Le 18/08/2026 au soir, Hakim a demandé de **séparer** le skill mixte `recherche-produit-dossier` (créé le matin) en trois métiers, calqués sur la flotte Grok :

1. **`ideation-produit`** — TrendTrack 5 modules + Brand Search + Amazon/VEVOR/Flippa/Europages. Pré-filtre d'amont. Aucun volume, aucun AliExpress, aucun GO.
2. **`recherche-mots-cles`** — SEMrush France, contrôles, SERP page 1, sonde Shopping. Mission A (idée) ou B (catalogue). Ne consolide pas, ne tranche pas le seuil 10 000.
3. **`sourcing-aliexpress`** — après GO marché écrit seulement. PDP `/item/`, coût rendu, confiance A/B/C. Pas de GO fournisseur.

Le skill `recherche-produit-dossier` a été **supprimé**. L'orchestrateur `/recherche-produit` (chaîne 5 sous-agents) reste pour Claude Code si Hakim le lance explicitement.

**How to apply:** une demande « cherche des idées / TrendTrack » → ideation-produit. « mesure le volume / SEMrush / SERP » → recherche-mots-cles. « trouve le fournisseur / AliExpress » → sourcing-aliexpress. Ne pas enchaîner les trois dans le même skill. Voir `GROK-BOT-FLEET.md` Bots 1–3.
