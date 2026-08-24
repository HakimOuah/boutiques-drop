---
name: skill-gmc-acceptance
description: "Skills projet gmc-acceptance (approbation Merchant Center + templates policies FR) et shopping-scaling (scaling PMAX), distillés des 4 PDF Terry Ecom 2026 fournis par Hakim le 07/08/2026, enrichis le 24/08/2026"
metadata: 
  node_type: memory
  type: project
  originSessionId: 1589ce7e-ae26-41f0-bf94-f71a98fce292
  modified: 2026-08-24T13:10:00.000Z
---

Le 07/08/2026, Hakim a fourni 4 PDF Terry Ecom (Fast-Track GMC Approval Framework 2026, GMC Guidance & Compliance Checklist, GMC Policy Templates, Google Ads Scaling Framework), distillés en DEUX skills projet séparés à sa demande :

- `.claude/skills/gmc-acceptance/` — approbation Google Merchant Center : SKILL.md + checklist pass/fail pré-soumission + règles policies + `references/templates-fr/` (pack FR éprouvé du 24/08 : retours, livraison, confidentialité, CGV, paiement, FAQ).
- `.claude/skills/shopping-scaling/` — scaling Google Ads PMAX profit-first (4 phases, règle 2 jours verts +20–30 % / 2 jours rouges −20–30 %, AOV ≥ 60 $ avant de scaler).

**Mise à jour 24/08/2026.** Recap opérationnel plié dans le skill. Pour les **nouvelles** boutiques : domaine 30+ j (acheter → monter → attendre quelques semaines, jamais d'expiré racheté) ; Gmail dédié **et** vivant (newsletters, YouTube, Search, 5–7 j de chauffe) ; un n° par boutique (on/off vocal OK, SIM physique > eSIM > VoIP) ; une adresse Maps par boutique, gardée après approbation ; policies **au nom de la marque** (jamais SIREN / TVA / SASU / OH Ventures) ; pack templates = PDFs éprouvés, chiffres identiques partout, délais AliExpress = 1–2 / 6–8 / 7–10 si c'est la réalité. Proxy / IP dédiée : tuto à venir ; pratique actuelle = profil Chrome dédié. Parc déjà validé : on ne touche pas. Détail isolation : [[identite-partagee-gmc]].

**Why:** Les boutiques du portefeuille dépendent de Google Ads (zéro ROI constaté, cap Q4 2026) ; l'approbation GMC est un point de passage obligé de chaque lancement, et le scaling est un sujet distinct volontairement séparé (« ne pas tout mélanger »). Le contenu complet vit dans les skills — ne pas le dupliquer ici.

**How to apply:** Invoquer `gmc-acceptance` pour toute préparation de boutique à Google Ads, audit avant soumission, refus/suspension, ou rédaction de policies (partir des templates FR, marque seule, reformuler). Invoquer `shopping-scaling` pour toute décision de budget/scaling sur campagne approuvée — s'articule avec [[protocole-test-ads-hakim-experts]] (le protocole 30 €/j × 5 j couvre le test, le framework prend le relais au scale). Points durs GMC : cohérence mot pour mot footer/policies/GMC (trigger n°1), une identité par boutique y compris n° et adresse, Gmail vivant, 7–10 j entre deux reviews, la plupart des suspensions arrivent après approbation. Cohérent avec [[promesses-verifiables-guide-numerique]] (pas de claims santé/résultat, pas de fausse urgence). Sources d'appui : communauté skool.com/gmc-help, scanner gmcscout.com, ScamAdviser (70+ utile, pas un gate).
