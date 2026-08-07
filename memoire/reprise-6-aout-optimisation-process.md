---
name: reprise-6-aout-optimisation-process
description: "Hakim en vacances au Portugal jusqu'au 6 août 2026 ; à la reprise, chantier organisation/optimisation des process pour tenir un rythme de recherches produit récurrentes"
metadata: 
  node_type: memory
  type: project
  originSessionId: dd051f8d-62a9-40c0-9f89-06080eeffcb4
  modified: 2026-07-31T18:56:10.890Z
---

Hakim était en vacances au Portugal du 27 juillet au 6 août 2026 (retour le jeudi 6). Tout le travail de cette semaine — passation Codex, protocole d'ordres, pipeline synchrone, infra Playwright — a été fait **en vacances**, hors du vrai rythme de travail.

**À la reprise (à partir du 6 août 2026), sujet annoncé par lui** : organisation et optimisation des process pour tenir le rythme qu'il veut, avec des **recherches produit récurrentes** (pas ponctuelles). C'est le prochain grand chantier, à traiter comme un sujet à part entière — pas comme une amélioration incidente.

**Why:** il ne veut pas un enchaînement de coups isolés mais une cadence tenable ; les outils existent déjà (`/chasse-clusters`, `/recherche-produit` + 5 sous-agents, protocole d'ordres, pont images Codex), le sujet est leur **orchestration dans le temps**, pas leur construction.

**How to apply:** à la reprise, partir de l'existant ([[pipeline-recherche-produit-agents]], [[boucle-chasse-clusters-volume-first]], [[notion-pipeline-boutiques]], [[campement-type-lancement-boutique]]) et poser la cadence : quoi tourne en récurrent, à quelle fréquence, ce qui s'automatise (planification, boucles), ce qui exige encore Hakim. Ne pas reconstruire ce qui existe.

**Note de terrain** : depuis le Portugal, AliExpress a géo-redirigé vers `pt.aliexpress.com` — un profil neuf annonçant une locale `fr-FR` depuis une IP portugaise est un signal anti-bot plausible. [HYPOTHÈSE, non vérifiée] Retester le headless depuis la France, profil réchauffé. Voir [[shopify-canal-et-visuels-ia]].
