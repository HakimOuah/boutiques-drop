---
name: workflow-theme-live-copie-travail
description: "Le connecteur Shopify refuse d'écrire sur le thème MAIN — travailler sur une copie non publiée que Hakim publie après validation ; vérifier les écritures par empreinte md5"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 13cddbe7-55b7-4c89-837c-f3e82c64d234
  modified: 2026-08-08T16:22:09.420Z
---

Le connecteur Shopify (MCP) **n'autorise les écritures de fichiers de thème que sur les thèmes non publiés** ; toute écriture visant le thème live/MAIN est bloquée, et la **publication de thème est également bloquée** (elle reste manuelle, côté Hakim).

**Workflow retenu (décision Hakim, 08/08/2026, appliqué sur NOIRMONT)** : un thème **live** + un thème **copie de travail** non publié, créé par `themeDuplicate` (payload : `newTheme`, pas `theme` ni `job`). Claude modifie uniquement la copie ; Hakim publie après validation. Corollaire à tenir : **ne plus éditer le thème live via l'éditeur Shopify**, sinon ces réglages sont écrasés à la publication suivante ; si une édition manuelle a lieu sur le live, re-dupliquer avant toute intervention.

**Why:** Hakim a constaté ce blocage sur plusieurs boutiques ; sans copie de travail, publier un thème gèle toute possibilité d'intervention.

**How to apply:** à chaque boutique, maintenir la paire live/travail et la documenter dans le fichier de reprise du projet (exemple : `boutique-pipeline/boutique-seiko-mod/REPRISE-SESSION.md`, thèmes NOIRMONT — live `204248088914`, travail `205089014098`).

**Piège vérifié** : `themeFilesUpsert` peut renvoyer `upsertedThemeFiles: []` **sans erreur** alors que l'écriture a réussi (faux négatif). Ne jamais conclure de ce retour — vérifier par **empreinte** (`theme.files { checksumMd5 size }`), plus fort qu'un grep et sans rapatrier le fichier. Pour les corps > 50 Ko, transporter via `stagedUploadsCreate` + `body:{type:URL}` plutôt qu'en `TEXT` (risque de troncature). Voir [[methode-kraken-coach-associe]].
