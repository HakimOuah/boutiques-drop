---
name: recherche-produit-dossier
description: "Skill Cursor/Claude pour instruire un dossier produit (TrendTrack 5 modules) sans prononcer le GO ; distinct de l'orchestrateur /recherche-produit"
metadata:
  node_type: memory
  type: project
  originSessionId: cursor-2026-08-18-recherche-produit-dossier
  modified: 2026-08-18T13:20:00.000Z
---

Le 18/08/2026, Hakim a donné la composition du métier RECHERCHE PRODUIT pour Cursor : instruire un dossier, jamais prononcer le GO. Skill projet : `.claude/skills/recherche-produit-dossier/SKILL.md`. Instruction Grok Bot 1 alignée dans `GROK-BOT-FLEET.md`.

**Ce n'est pas** l'orchestrateur `/recherche-produit` (chaîne phase1→phase5, sous-agents, sourcing AliExpress). Les deux coexistent : le dossier TrendTrack pour chercher/instruire ; la chaîne 5 phases seulement si Hakim la lance explicitement.

**Sources (décision 18/08, écrite dans `PRODUCT-RESEARCH-CRITERIA.md` §2) :**
- Source principale 1 : TrendTrack, 5 modules (Early Market · Marketproof & Pivot · Temps Réel / Pages · Saisonnalité · Rétro-ingénierie des Angles).
- Source principale 2 : Amazon, VEVOR, Flippa, Europages, balayage familles.
- Brand Search reste une méthode valide (filtres FR / 0 Meta / ≥ 1 Google / ≥ 130 $), plus la source unique. Voir [[brand-search-source-idees]].

**Ordre non négociable :** idée → mesure par le bot MOTS-CLÉS (volume SEMrush FR + sonde prix) → seulement ensuite le filtre qualitatif. Le chercheur ne mesure aucun volume, ne source pas AliExpress, ne tranche pas.

**Why:** L'ancien ordre idée → filtre → volume en fin tuait ~30/50 candidats après un filtrage qualitatif complet. Le chercheur qui mesure et source lui-même mélange les niveaux (marché / fiche / commande / lancement).

**How to apply:** Quand Hakim demande de chercher des produits, miner TrendTrack ou instruire un dossier : lire `recherche-produit-dossier`. Passer chaque idée à MOTS-CLÉS et attendre. Anti-doublon sur `boutique-pipeline/registre-candidats.md` avant d'instruire. Dépôt au format RECHERCHE PRODUIT (méthode, résultats, pivot Module 5, confiance A/B/C, ce qui n'a pas pu être fait).
