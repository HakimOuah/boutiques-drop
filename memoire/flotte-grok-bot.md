---
name: flotte-grok-bot
description: "Hakim a SuperGrok Heavy et déploie 7 bots Grok calqués sur les métiers du process ; découpage, règle d'IP par boutique et ordre des vagues dans GROK-BOT-FLEET.md"
metadata: 
  node_type: memory
  type: project
  originSessionId: 578c8896-7f46-48a6-ab64-d0045d9c4b9c
  modified: 2026-08-16T19:16:45.043Z
---

Le 16/08/2026, Hakim a demandé de découper son process en bots Grok (bêta Grok Bot lancée le 11/08/2026, incluse dans son abonnement SuperGrok Heavy). **Le découpage est le sien, arrêté après une première proposition par outils que j'avais faite et qu'il a écartée : il veut un bot par métier du process, pas par famille d'outils.** Les 7 bots, avec leurs instructions prêtes à coller, vivent dans `GROK-BOT-FLEET.md` à la racine du hub : RECHERCHE PRODUIT · MOTS-CLÉS · SOURCING · CONCURRENCE · PERSONAS · DESIGN SHOPIFY · CONFORMITÉ GMC.

**18/08/2026 :** bot RECHERCHE PRODUIT réécrit (TrendTrack). Skills Cursor séparés le soir même : `ideation-produit` · `recherche-mots-cles` · `sourcing-aliexpress`. Voir [[skills-recherche-separes]].

**19/08/2026 :** deux modes PRODUIT PUR / UNIVERS ; Brand Search retiré ; TrendTrack seule source d'idées. Instructions Bot 1 + MOTS-CLÉS mises à jour. Voir [[deux-modes-produit-univers-trendtrack]].

Les trois décisions structurantes, à ne pas re-débattre :

1. **Cinq bots mutualisés, deux bots par boutique.** RECHERCHE PRODUIT, MOTS-CLÉS, SOURCING, CONCURRENCE et PERSONAS ne touchent aucun compte de boutique : un seul jeu sert toutes les boutiques. DESIGN SHOPIFY et CONFORMITÉ GMC touchent le Shopify admin et le Merchant Center : il en faut **un par boutique, jamais un pour deux**. Motif : un bot Grok travaille depuis une machine cloud avec sa propre IP, et le principe n° 1 du skill [[skill-gmc-acceptance]] interdit de partager une IP entre boutiques — c'est la cause n° 1 des suspensions répétées.

1 bis. **Instructions longues et autoportantes, chemins en référence.** Décision de Hakim : un bot Grok tourne dans le cloud et ne peut lire aucun fichier local, donc le contenu utile des skills (gmc-acceptance, webdesign-boutiques, customer-research, competitor-profiling, cro, pricing) est **recopié dans les instructions**, et les chemins ne servent qu'à retrouver la source côté Claude Code. Corollaire : **quand une règle change dans un skill, il faut repasser l'instruction du bot** — rien ne se propage. La table des chemins est en tête de `GROK-BOT-FLEET.md`.

2. **Aucun bot n'écrit dans GitHub.** Les bots déposent en Notion ou Drive, Claude Code relit, consolide, tranche et pousse. Cohérent avec [[github-source-de-verite]] : la source de vérité ne se confie pas à un VM cloud exposé à du contenu tiers.

3. **Déploiement en 3 vagues.** Vague 1 = MOTS-CLÉS, SOURCING, RECHERCHE PRODUIT. Recette de validation : relancer MOTS-CLÉS sur des familles déjà mesurées de Maison Noirmont, dont les chiffres sont écrits dans `boutique-pipeline/boutique-seiko-mod/journal/` (17 120 net sur les montres squelette, rabattement de `montre plongeuse`, grappe Apple Watch sur `bracelet milanais`). Vague 2 = CONCURRENCE, PERSONAS. La vague 3 (DESIGN, GMC) ne se fait **que si xAI documente le cloisonnement des bots** — la formulation officielle est ambiguë sur le fait que tous les bots partagent, ou non, une seule machine cloud et toutes les sessions connectées.

**Pourquoi :** Grok Bot apporte une capacité que le dispositif actuel n'a pas — piloter SEMrush, les SERP, AliExpress et les sites concurrents depuis un navigateur cloud persistant qui continue quand le Mac est fermé. C'est exactement le grind du pipeline. Mais il n'apporte rien sur les verdicts, et deux scripts locaux lui échappent : le moteur `ui-ux-pro-max` (le bot DESIGN travaille donc à partir d'un design system que Claude Code lui dépose) et la passerelle `aliexpress_vps_gateway.py` (le bot SOURCING travaille au navigateur).

**Comment l'appliquer :** quand Hakim parle d'un bot Grok, lire d'abord `GROK-BOT-FLEET.md`. Ne jamais proposer de connecter deux boutiques au même bot, ni de donner un accès GitHub en écriture à un bot. Voir aussi [[mur-pdp-aliexpress-navigateur-integre]] : le pari du bot SOURCING est que le navigateur cloud ouvre les PDP AliExpress et débloque le niveau A avant DSers — à tester en premier. Trois métiers restent hors découpage et sont à décider plus tard : vigie ads, QA post-déploiement, SAV.
