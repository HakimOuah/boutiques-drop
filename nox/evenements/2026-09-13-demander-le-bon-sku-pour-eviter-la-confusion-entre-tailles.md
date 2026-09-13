---
type: evenement-nox
date: 2026-09-13
categorie: methode
titre: Demander le bon SKU pour éviter la confusion entre tailles
projet: pipeline
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: codex
statut_editorial: brut
commit: ae22598
---

La recherche de cent références par boutique a révélé une limite du sélecteur AliExpress : chercher L dans le texte des propriétés pouvait aussi renvoyer XL et XXL. Une variante dont l'identifiant était connu était alors refusée comme ambiguë.

Luna a préparé un argument SKU explicite, testé hors réseau, puis le parent a appliqué le correctif minimal au service existant après pause des recherches. Le premier appel réel a retrouvé le SKU attendu, son prix et son devis de livraison France. Les contrôles de propriétés, de stock et de livraison sont conservés.

Deux boutiques disposent à cet instant de cent SKU dans le Sheet : perruques sur quatre fiches fournisseurs, nappes sur quatorze. Le nombre de modèles reste affiché séparément. Les collections homme et Noël sont encore en cours d'enrichissement, et le quota global de sept cents références n'est pas terminé. Le sourcing déclaré ne vaut pas validation commerciale.

Le lot a aussi montré l'intérêt de relire le brief : une référence pouvait correspondre à une couleur, finition ou longueur. Imposer cent fiches fournisseurs distinctes aurait ajouté une contrainte que Hakim n'avait pas demandée.
