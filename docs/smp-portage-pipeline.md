# Portage SMP : hub ↔ pipeline (11/09/2026)

Décision Hakim ~15:26. Les agents cloud **ne battent plus** le 403 `cursor[bot]` sur `HakimOuah/boutique-pipeline`. Ils écrivent dans **ce hub**. Claude (Code, machine d'Hakim) porte vers le pipeline **si on en a besoin**.

Le New Run `aliexpress-mcp-server +12` a été **rejected** — ne pas le relancer.

## Où vit quoi

| Canon | Où | Preuve |
|---|---|---|
| Critères recherche produit (30k net, 800/collection, CPC, animalerie, familles #11–#13) | `boutique-pipeline` | [PR #3](https://github.com/HakimOuah/boutique-pipeline/pull/3), merge `21ebd3a` (Hakim/Claude). **Ne pas recopier** `PRODUCT-RESEARCH-CRITERIA.md` ici. |
| Skills, agents, méthode marché, scaling, GMC | ce hub | [PR #5](https://github.com/HakimOuah/boutiques-drop/pull/5), merge `a3aec5b` |
| Méthode métier | ici **et** `boutique-pipeline/` | jamais dans `hermes-orchestration` (30/08/2026) |

## Si l'écriture pipeline est 403

1. Arrêter. Ne pas retenter le push, ne pas élargir le jeton, ne pas relancer un env.
2. Committer le **delta** (quelques paragraphes) sous `docs/` de ce hub — pas un clone du pipeline, pas `scratchpad/`.
3. Annoncer le chemin. Claude porte.

`.cursor/environment.json` (`repositoryDependencies`, [PR #7](https://github.com/HakimOuah/boutiques-drop/pull/7)) **n'a pas levé** le 403. C'est clos.

## Déjà porté (GitHub)

**Hub `main`** — skills SMP (`ideation-produit`, `recherche-mots-cles`, `sourcing-aliexpress`, `shopping-scaling`, `gmc-acceptance`, `qualifie-idees`, `recherche-produit`) + agents (`critique-candidat`, phases) + `METHODE-ANALYSE-MARCHE.md` étape 5. Recettes 11/09 déjà dans les skills : 30k net + 800, CPC par bande, Ads 6 mois = repère, minage 60–90 j ≠ preuve 180 j, volume OCB/Semrush, animalerie exclue / thème animal OK.

**Pipeline `main`** (PR #3) — `PRODUCT-RESEARCH-CRITERIA.md`, `familles-exploration.md`, `product-research/references/{these-produit,mesure,concurrence}.md`, `product-research/{shopping,search}/README.md`.

## Reste le store Cursor

Longs relevés, pas des clones à coller dans le pipeline. Claude porte **à la demande**, pas en bloc.

Store : `/cursor/stores/bc-93f66cda-bc7a-4270-9b2f-2d063da8855b/docs/`

| Fichier | Contenu |
|---|---|
| `project-context.md` | Contexte projet SMP (arbitrages 11/09) |
| `smp-methode-comprehension.md` | Méthode + 10 questions |
| `smp-strategie-sea-miro.md` | Relevé SEA Miro |
| `smp-formation-sea.md` | Formation DROP'ELITE, vidéos 1–12 + Z |
| `smp-mapping-pipeline.md` | Mapping vote (historique ; skills + PR #3 déjà appliqués) |
| `politiques-gabarits-nobrand.md` | Gabarits NoBrand (paraphraser, ne pas coller) |
| `trendtrack-mode-operatoire.md` | Mode opératoire TrendTrack |
| `trendtrack-gate-ads-6-mois.md` | Détail tenure Ads (règle déjà dans les skills) |
| `oneclickbrand-mode-operatoire.md` | Mode opératoire OCB |
| `enrichir-recherche-produit-tt-ocb.md` | Recettes TT/OCB (règle déjà dans les skills) |
| `aliexpress-acces-sourcing.md` | Accès AliExpress cloud (PDP slider ; MCP OK) |
| `smp-sourcing-livrable.md` | Livrable sourcing Dsers / images |

`scratchpad/` reste gelé.
