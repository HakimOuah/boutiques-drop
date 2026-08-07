---
name: mesure-express-semrush-lots
description: "Recette de mesure express SEMrush en masse — Analyse par lots (100 mots-clés) pour trier, puis Keyword Magic Tool par URL pour dimensionner ; a traité 40 idées en une session le 01/08/2026"
metadata: 
  node_type: memory
  type: project
  originSessionId: c009f956-c83d-4060-a9da-e472db5d7a72
  modified: 2026-08-01T16:19:03.496Z
---

Pour vérifier une salve d'idées produit sur SEMrush (mesure express du pipeline), la voie rapide validée le 01/08/2026 : **« Vue d'ensemble des mots clés » → onglet « Analyse par lots »** (`fr.semrush.com/analytics/keywordoverview/?db=fr`) accepte jusqu'à 100 mots-clés séparés par des virgules en une seule requête — saisir au clavier (le champ est un DIV, `form_input` échoue). Ce premier tri par têtes de cluster élimine la majorité des idées en un écran. Puis, pour chaque survivante, **Keyword Magic Tool par URL directe** (`fr.semrush.com/analytics/keywordmagic/?q=<kw>&db=fr`) et extraction compacte via `javascript_tool` (regex sur `Tous les mots clés: N … Volume total: X … KD moyen`, + tranche d'innerText après « Copier » pour le top des formulations) — évite le get_page_text massif. Enchaîner 3 mots-clés par `browser_batch` (navigate → wait 2,5 s → js).

**Why:** La salve Brand Search du 01/08/2026 (40 idées) a été triée et dimensionnée en ~10 chargements de page au lieu de 40 sessions Keyword Magic — 16 idées qualifiées volume, 24 morts, 1 cas limite, sans entamer le quota MCP Brand Search (14 requêtes).

**How to apply:** Le total « Volume total » du KMT est un plafond broad, jamais un adressable : lire le vocabulaire (marques d'enseignes, location, persona pro, licences) et estimer prudemment le cœur pertinent ; les familles distinctes ne s'additionnent jamais. Le preset UI de Hakim « shop google » (app.brandsearch.co) encode la recette de minage — équivalent MCP : `country_code FR`, `meta_active_max 0`, tri `google_ads_total` desc, prix ≥ 130 $ côté client. Voir [[brand-search-source-idees]] et [[boucle-chasse-clusters-volume-first]].
