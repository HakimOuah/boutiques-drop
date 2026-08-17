---
name: db-industrie-migration-repinfo
description: "DB Industrie va migrer son workflow n8n de l'instance Cloud perso de Hakim vers une VM dédiée REPINFO — migration actée le 17/08/2026, pas encore commencée"
metadata: 
  node_type: memory
  type: project
  originSessionId: 97b34068-c21f-4ff3-aab7-3130727ae4d2
  modified: 2026-08-17T16:49:43.167Z
---

DB Industrie (distributeur de pièces industrielles, contact Hervé Laskowski) fait tourner son automatisation n8n sur l'instance n8n Cloud personnelle de Hakim (`hakimouah.app.n8n.cloud`). Un contrat d'hébergement a été signé avec **REPINFO** (offre n° 2026-06-01-MP, début juillet 2026) : VM dédiée (2 vCPU/4 Go RAM/40 Go), n8n en Docker Compose + Postgres, Nginx reverse proxy HTTPS sur `n8n.dbindustrie.com`, 48 €/mois TTC + 480 € TTC de prestation d'installation (incluant l'interconnexion VLAN avec EBP et le tenant Microsoft 365/Entra ID).

Cette VM REPINFO est opérationnelle depuis début juillet mais **le workflow n'y a pas encore été transféré**. Hakim a confirmé le 17/08/2026 : la VM REPINFO va **remplacer** l'instance n8n Cloud perso, qui n'existera plus après la migration.

Avancement associé déjà en place côté infra (contrairement à ce qu'indiquait la doc de passation `boutique-pipeline/docs/codex-handoff/18-DB-INDUSTRIE.md`, figée au 31/07 et qui disait "rien commencé" sur Outlook) :
- App Registration Entra ID créée sur le tenant M365 de DB Industrie, permissions Graph `Mail.Read`/`Mail.ReadWrite`/`Mail.Send` déjà accordées avec consentement admin.
- Accès SQL Server EBP : host identifié (`SRVDB` / `172.17.101.2`), règles réseau posées côté REPINFO (MSSQL 1433/1434, DNS, PING). Isocell confirme un accès **lecture seule uniquement** possible ; il ne manque que les identifiants de connexion (toujours en attente au 17/08).

**Why:** cette info vient d'un fil email REPINFO/Rémy Lemaire (03/07/2026) et d'un contrat PDF que Hakim a partagés le 17/08, en complément d'une doc de passation locale qui datait de plus d'un mois et ne mentionnait pas du tout REPINFO ni cette VM — sans ce recoupement, le récap aurait décrit une architecture obsolète/incomplète (n8n Cloud comme seule instance, Outlook non commencé).

**How to apply:** avant toute action sur le workflow n8n de DB Industrie, vérifier sur quelle instance elle doit porter — l'ancienne (`hakimouah.app.n8n.cloud`, encore active tant que la migration n'est pas faite) ou la nouvelle (`n8n.dbindustrie.com`, cible). Ne pas supposer que l'ancienne doc de passation (`18-DB-INDUSTRIE.md`) est à jour sans revérifier avec Hakim — elle datait de plus d'un mois lors de la découverte de cette info. Voir aussi [[identite-partagee-gmc]] pour un autre cas où une doc figée avait besoin d'être recoupée avant diffusion. Recap complet : `ecommerce-dropshipping/db-industrie/RECAP-2026-08-17.md` dans le repo `boutiques-drop`.
