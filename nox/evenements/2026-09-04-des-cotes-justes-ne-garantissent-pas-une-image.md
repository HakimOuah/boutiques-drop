---
type: evenement-nox
date: 2026-09-04
categorie: methode
titre: "Des cotes justes ne garantissent pas une image a la bonne echelle"
projet: lumierematiere
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: codex
statut_editorial: brut
commit: 0453a0e
---
# Des cotes justes ne garantissent pas une image a la bonne echelle

## Ce qui a changé

Le lot de visuels Lumière Matière dispose de six comparatifs de tailles dont l’échelle des largeurs est calculée et vérifiée. Les neuf packshots restent générés depuis les références fournisseur ; les schémas utilisent des dessins techniques vectoriels originaux, exportés en JPEG.

## Pourquoi c'est notable

Un acheteur doit pouvoir distinguer les tailles en regardant la fiche. Une légende « 150 cm » sous une image n’est pas une preuve que sa largeur est représentée dans le bon rapport avec la version 100 cm.

## Le détail qui fait le contenu

Le premier schéma généré des barres portait correctement 100, 120 et 150 cm. Pourtant, la comparaison visuelle des traits montrait que la troisième largeur n’était pas 1,5 fois la première. Relire les nombres aurait laissé passer ce défaut. Les schémas finaux utilisent donc un rapport pixels/cm constant par planche, testé par script, plutôt qu’une consigne textuelle d’échelle. Trois essais de schémas ont été écartés, sans les laisser dans les manifestes d’import.

## Ce qu'on ne peut pas encore dire

C’est une livraison locale, sans publication Shopify et sans mesure de conversion. Cinq des six schémas restent partiels : les hauteurs ou fixations absentes des sources ne sont pas inventées. Neuf des vingt fiches n’ont pas reçu de nouveau visuel faute de correspondance ou d’arbitrage. Preuves : `boutique-pipeline/catalogues/lumierematiere/journal/2026-09-04-variantes-formes.md` et son registre/QA.
