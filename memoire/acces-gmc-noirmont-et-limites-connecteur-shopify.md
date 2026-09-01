---
name: acces-gmc-noirmont-et-limites-connecteur-shopify
description: "GMC Noirmont 5840460291 = profil Chrome « Noirmont » uniquement ; le connecteur Shopify MCP ne peut ni écrire les policies, ni dépublier, et fileUpdate en lot se verrouille (productUpdateMedia contourne pour les alt)"
metadata: 
  node_type: memory
  type: project
  originSessionId: 4fad0d86-cf32-4b4a-9c71-6e6fc620f660
  modified: 2026-09-01T22:02:26.371Z
---

**GMC Maison Noirmont (5840460291, entité OH Ventures)** n'est visible que depuis le profil Chrome
**« Noirmont »** — extension Claude installée dedans le 01/09/2026, il apparaît alors comme un second
navigateur dans `list_connected_browsers` (demander à Hakim lequel choisir). Les trois comptes Google du
profil principal (`ouahabi.hakim@`, `hakim.ouahabi4@`, `vpnpascher@`) n'y ont pas accès ; le principal ne
voit que Gourde and Go (5564946079) et Bonum Vitae (515754956).

Sur le ban « Déclarations trompeuses » (23/08/2026), Merchant Center **n'affiche pas de bouton
« Demander un examen »** : la seule action est « Je ne suis pas d'accord avec le problème », qui est la
demande de réexamen. Une seule cartouche — ne jamais la cliquer avant la fenêtre 7–10 j post-correction.

**Connecteur Shopify MCP (Maison Noirmont)** — limites constatées le 01/09/2026 :
- pas de scope `write_legal_policies` → `shopPolicyUpdate` refusé ; les policies se corrigent dans l'admin
  ou via Cursor avec un autre accès
- `publishableUnpublish` bloqué par la politique de sécurité du connecteur → dépublier dans l'admin
- `fileUpdate` en lot de 20+ a échoué sur une erreur temporaire puis laissé les fichiers en « opérations en
  attente » pendant ~2 h ; **`productUpdateMedia` n'est pas concerné par ce verrou** et corrige les `alt` ;
  les renommages de fichiers attendent que le verrou tombe, puis un par un, lots de 3 max
- plusieurs mutations aliasées dans un même document passent très bien (jusqu'à ~15 productUpdate)

**Why:** trois audits ont buté sur « pas d'accès GMC » avant de trouver le bon profil ; et une passe de
correction a perdu deux heures sur le verrou fileUpdate.

**How to apply:** pour lire le GMC Noirmont, demander à Hakim d'ouvrir le profil « Noirmont » puis
`select_browser`. Pour les écritures Shopify, prévoir d'emblée la voie admin/Cursor pour policies et
dépublication, et ne jamais envoyer un lot `fileUpdate` de plus de 3.
Lié : [[skill-gmc-acceptance]], [[sources-audit-conformite-boutique]], [[identite-partagee-gmc]].
