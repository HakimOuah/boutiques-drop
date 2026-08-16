---
name: flotte-grok-bot
description: "Hakim a SuperGrok Heavy et déploie une flotte Grok Bot ; découpage, règle d'IP par boutique et ordre des vagues dans GROK-BOT-FLEET.md"
metadata: 
  node_type: memory
  type: project
  originSessionId: 578c8896-7f46-48a6-ab64-d0045d9c4b9c
  modified: 2026-08-16T19:02:29.859Z
---

Le 16/08/2026, Hakim a demandé de découper son process en bots Grok (bêta Grok Bot lancée le 11/08/2026, incluse dans son abonnement SuperGrok Heavy). Le découpage complet — 10 bots avec leurs instructions prêtes à coller — vit dans `GROK-BOT-FLEET.md` à la racine du hub.

Les trois décisions structurantes, à ne pas re-débattre :

1. **Deux familles de bots, jamais mélangées.** Les bots de recherche (SCOUT, MÈTRE, SERP, SOURCEUR, CARTOGRAPHE) ne touchent aucun compte de boutique et sont mutualisés. Les bots d'exploitation (VIGIE, CONFORMITÉ, QA, SAV) touchent Shopify/GMC/Google Ads et sont **dupliqués par boutique**. Motif : un bot Grok travaille depuis une machine cloud avec sa propre IP, et le principe n° 1 du skill [[skill-gmc-acceptance]] interdit de partager une IP entre boutiques — c'est la cause n° 1 des suspensions répétées.

2. **Aucun bot n'écrit dans GitHub.** Les bots déposent en Notion ou Drive, Claude Code relit, consolide, tranche et pousse. Cohérent avec [[github-source-de-verite]] : la source de vérité ne se confie pas à un VM cloud exposé à du contenu tiers.

3. **Déploiement en 3 vagues.** Vague 1 = MÈTRE, SERP, SOURCEUR (lecture seule, aucun compte boutique). Recette de validation : les relancer sur des familles déjà mesurées de Maison Noirmont, dont les chiffres sont écrits dans `boutique-pipeline/boutique-seiko-mod/journal/`. La vague 3 (bots d'exploitation) ne se fait **que si xAI documente le cloisonnement des bots** — la formulation officielle est ambiguë sur le fait que tous les bots partagent, ou non, une seule machine cloud et toutes les sessions connectées.

**Pourquoi :** Grok Bot apporte une capacité que le dispositif actuel n'a pas — piloter SEMrush, les SERP, AliExpress et les sites concurrents depuis un navigateur cloud persistant qui continue quand le Mac est fermé. C'est exactement le grind du pipeline. Mais il n'apporte rien sur les écritures Shopify (le MCP est meilleur) ni sur les verdicts.

**Comment l'appliquer :** quand Hakim parle d'un bot Grok, lire d'abord `GROK-BOT-FLEET.md`. Ne jamais proposer de connecter deux boutiques au même bot, ni de donner un accès GitHub en écriture à un bot. Voir aussi [[mur-pdp-aliexpress-navigateur-integre]] : le pari du bot SOURCEUR est que le navigateur cloud ouvre les PDP AliExpress et débloque le niveau A avant DSers — à tester en premier.
