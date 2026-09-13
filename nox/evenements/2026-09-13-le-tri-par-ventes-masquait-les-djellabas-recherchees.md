---
type: evenement-nox
date: 2026-09-13
categorie: methode
titre: "Le tri par ventes masquait les djellabas recherchées"
projet: pipeline
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: codex
statut_editorial: brut
commit: 30cf263
---

## Le fait

La constitution de catalogues AliExpress de 100 références par boutique produisait surtout des résultats voisins ou hors sujet. Le client ne lisait d'abord que la première page et imposait ensuite un tri par ventes. La pagination a été ajoutée, puis un test sans ce tri a rendu des vêtements à capuche bien plus proches de la requête `djellaba hooded`.

## Le détail qui fait le contenu

Répéter les formulations n'expliquait pas la mauvaise qualité des résultats. À paramètres de pays et de devise identiques, retirer le tri par ventes a fait apparaître dès la première page des robes marocaines pour hommes à capuche et manches brodées. Les locales française et anglaise renvoyaient les mêmes IDs, avec traduction des titres : la langue n'était donc pas l'explication sur ce test. La passerelle corrigée a ensuite renvoyé 20 IDs nouveaux en deuxième page, avec les bons numéros de page. Cela améliore la découverte ; cela ne valide ni la coupe réelle, ni la qualité, ni la marge.

Un autre écart de cadrage a été corrigé dans la session : le brief comptait les coloris, finitions ou longueurs comme références. Chercher 100 fiches fournisseur distinctes par boutique aurait ajouté un travail inutile. Le registre distingue désormais le nombre de fiches et les couples produit/SKU réellement observés, avec un devis France propre à chaque SKU avant comptage comme sourcé.

## Preuve et limite

Commit recherche `30cf263` ; treize tests locaux ; captures de la passerelle dans `analyses/2026-09-12-smp-7-niches/catalogue-100-20260913/collector/relevance-smoke/`. Déploiement isolé et réversible documenté, sans changement d'accès. Le quota de 700 SKU est encore en cours au moment de cet événement. Aucun GO final, lancement de boutique ou résultat commercial n'est revendiqué.
