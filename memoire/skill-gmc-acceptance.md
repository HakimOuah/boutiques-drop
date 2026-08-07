---
name: skill-gmc-acceptance
description: "Skills projet gmc-acceptance (approbation Merchant Center + templates policies FR) et shopping-scaling (scaling PMAX), distillés des 4 PDF Terry Ecom 2026 fournis par Hakim le 07/08/2026"
metadata: 
  node_type: memory
  type: project
  originSessionId: 1589ce7e-ae26-41f0-bf94-f71a98fce292
  modified: 2026-08-07T14:51:08.762Z
---

Le 07/08/2026, Hakim a fourni 4 PDF Terry Ecom (Fast-Track GMC Approval Framework 2026, GMC Guidance & Compliance Checklist, GMC Policy Templates, Google Ads Scaling Framework), distillés en DEUX skills projet séparés à sa demande :

- `.claude/skills/gmc-acceptance/` — approbation Google Merchant Center : SKILL.md + checklist pass/fail pré-soumission + règles policies + `references/templates-fr/` (les 6 policies traduites en français prêtes à l'emploi : retours, livraison, confidentialité, CGV, facturation, FAQ — placeholders à remplir, reformuler entre boutiques pour éviter la détection de duplication).
- `.claude/skills/shopping-scaling/` — scaling Google Ads PMAX profit-first (4 phases, règle 2 jours verts +20–30 % / 2 jours rouges −20–30 %, AOV ≥ 60 $ avant de scaler).

**Why:** Les boutiques du portefeuille dépendent de Google Ads (zéro ROI constaté, cap Q4 2026) ; l'approbation GMC est un point de passage obligé de chaque lancement, et le scaling est un sujet distinct volontairement séparé (« ne pas tout mélanger »). Le contenu complet vit dans les skills — ne pas le dupliquer ici.

**How to apply:** Invoquer `gmc-acceptance` pour toute préparation de boutique à Google Ads, audit avant soumission, refus/suspension, ou rédaction de policies (partir des templates FR). Invoquer `shopping-scaling` pour toute décision de budget/scaling sur campagne approuvée — s'articule avec [[protocole-test-ads-hakim-experts]] (le protocole 30 €/j × 5 j couvre le test, le framework prend le relais au scale). Points durs GMC : cohérence mot pour mot footer/policies/GMC, ordre strict boutique finie → GMC, 7–10 j entre deux reviews, une identité par boutique, la plupart des suspensions arrivent après approbation. Cohérent avec [[promesses-verifiables-guide-numerique]] (pas de claims santé/résultat, pas de fausse urgence). Sources d'appui de l'auteur : communauté skool.com/gmc-help, scanner gmcscout.com.
