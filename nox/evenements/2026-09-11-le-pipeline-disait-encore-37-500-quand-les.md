---
type: evenement-nox
date: 2026-09-11
categorie: methode
titre: "Le pipeline disait encore 37 500 quand les skills disaient 30 000"
projet: smp
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: claude-code
statut_editorial: brut
commit: 8e4e4c4
---
# Le pipeline disait encore 37 500 quand les skills disaient 30 000

## Ce qui a changé

Le fichier de critères de `boutique-pipeline` porte maintenant les décisions SMP du 11/09.
Le seuil UNIVERS est de 30 000 recherches net de marque, avec au moins 800 sur la courte traîne
de chaque collection. Le CPC se juge par bande de prix, et la passe Ads sert de repère, pas de
veto. Le volume OneClickBrand/Semrush compte, et l'animalerie est exclue. Le matin même, les
skills du hub avaient été alignés ; le pipeline, lui, les contredisait encore sur plusieurs points.

## Pourquoi c'est notable

Un agent qui suivait le fichier de critères — celui que `instructions/README.md` désigne comme
référence des portes de recherche produit — appliquait 37 500, refusait tout volume OneClickBrand
(« DataForSEO unique source ») et plafonnait les prix à 400 €. Deux sources de vérité
contradictoires pendant une journée : chaque agent tranchait selon le fichier qu'il ouvrait en premier.

## Le détail qui fait le contenu

Le registre contient un dossier arrêté à 230 recherches près : l'univers bijoux personnalisés,
consolidé cœur après SERP à **37 270** contre un plancher de **37 500**, classé CAS LIMITE le 31/08.
Les poufs, eux, avaient un cœur siège à **31 160**, « sous le plancher ». Au nouveau seuil de 30 000,
les deux passent le volume. Il leur reste le gate des 800 par collection et celui du CPC, deux
contrôles qui n'existaient pas quand on les a mesurés.

Le premier jet de ces critères existait déjà : un commit `dc7c687` sur une VM worker, jamais poussé
(le remote répond 404). Le contenu a été réécrit de zéro. Sans push, une machine ne garde pas le travail.

La règle « fautes et graphies sans accent incluses » heurtait en apparence le garde-fou du 29/08
(« une paire accentuée n'est qu'un seul bucket »). Ce n'est pas une contradiction : on compte tout
bucket distinct, on ne somme jamais deux fois une paire que Google fusionne sous la même série mensuelle.

Dernier point : la bande High ticket commence à 500 €. Elle rendait incohérent le vieux plafond
« 50 à 400 € », qui a sauté.

## Ce qu'on ne peut pas encore dire

Aucun dossier n'a encore été rejugé avec ces gates : bijoux et poufs sont une lecture du registre,
pas une nouvelle mesure. La PR `boutique-pipeline#3` n'est pas fusionnée tant que Hakim n'a pas dit go ;
jusque-là, `main` porte encore 37 500.
