---
type: evenement-nox
date: 2026-08-31
categorie: methode
titre: "Le téléphone boutique GMC est celui des réglages Shopify, pas celui du parc"
projet: lumiere-matiere
repo: boutique-pipeline
axes: [ecommerce]
agent: cursor
statut_editorial: brut
commit: 0869b2c
---
# Le téléphone boutique GMC est celui des réglages Shopify, pas celui du parc

## Ce qui a changé

Sur Lumière Matière, le n° boutique confirmé est `0756916084` (`+33 7 56 91 60 84`). Pages, policies et footer disent maintenant la même chose que le JSON-LD `shop.phone`.

## Pourquoi c'est notable

Google compare le téléphone du schéma Organisation avec celui du footer et des policies. Deux n° différents, même entité, c’est un mismatch. Le n° du parc OH Ventures n’est pas un défaut à imposer à chaque boutique.

## Le détail qui fait le contenu

Le skill GMC et toutes les pages LM affichaient `+33 7 56 82 80 94` — la ligne du parc. Les réglages Shopify disaient `0756916084`. Ce n’est pas une graphie : ce sont deux numéros (`91 60 84` vs `82 80 94`). L’agent a demandé à Hakim de « corriger » la boutique vers le n° du parc. Hakim a montré l’écran Réglages et dit : le numéro est le bon. La règle : le champ Téléphone de la boutique est la source ; on aligne le site dessus, on n’inverse pas.

Bonus technique du même soir : `fileUpdate.filename` change bien le nom CDN Shopify. Les 9 `S….webp` AliExpress de l’applique pierre sont devenus `applique-murale-pierre-metal-147598-gN.webp` sans restage ni `fileDelete`. Les SKU DSers n’ont pas bougé.

## Ce qu'on ne peut pas encore dire

Le thème live publie encore les liens themefullstack et les SKU AliExpress dans le JSON-LD. La copie `LM GMC 2026-08-31` les retire ; Hakim n’a pas encore publié. Pas de review GMC avant ce publish + 7–10 jours.
