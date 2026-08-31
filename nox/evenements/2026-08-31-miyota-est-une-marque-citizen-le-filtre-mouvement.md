---
type: evenement-nox
date: 2026-08-31
categorie: methode
titre: "Miyota est une marque Citizen : le filtre Mouvement se crawlait comme Seiko"
projet: maison-noirmont
repo: boutique-pipeline
axes: [ecommerce]
agent: cursor
statut_editorial: brut
commit:
---
# Miyota est une marque Citizen : le filtre Mouvement se crawlait comme Seiko

## Ce qui a changé

Sur Maison Noirmont, Miyota et Mingzhu ont disparu du storefront : homepage, FAQ, La Maison, filtres collection, variantes, metafields. Il reste les codes de calibre — 8215, 2813, NH35, PT5000.

## Pourquoi c'est notable

Le ban GMC du 23/08 visait les « déclarations trompeuses ». On avait nettoyé Seiko. Le crawler voyait encore une marque tierce dans le filtre « Mouvement », donc le même signal sous un autre nom.

## Le détail qui fait le contenu

Miyota n'est pas un surnom de calibre. C'est une marque déposée de Citizen (EUTM 000076406, classe 14, depuis 1998). Citizen l'écrit : on peut citer le fait dans une spec, pas le logo ni le nom en pub, sans accord. Un filtre collection « Miyota / Mingzhu / NH35 / PT5000 » est de la pub crawlable, pas une spec. Mingzhu, lui, n'est même pas une marque UE horlogerie — c'est le surnom de clones chinois souvent copiés sur le 8215. Le présenter en pair de Miyota ajoutait un deuxième problème : une fausse marque à côté d'une vraie.

Le trou après la purge Seiko du 30/08 : 18 fiches actives, le metafield `custom.calibre` (c'est lui qui alimente le filtre), et une phrase de homepage. Les titres étaient déjà propres. Google n'a pas besoin du titre pour lire une facette.

## Ce qu'on ne peut pas encore dire

Que Google le lise comme une correction. Nouvelle passe crawlable le 31/08 : on recule l'examen de 7–10 jours. Toujours 0 ads.
