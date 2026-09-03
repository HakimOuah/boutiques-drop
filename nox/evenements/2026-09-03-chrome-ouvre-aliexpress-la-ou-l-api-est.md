---
type: evenement-nox
date: 2026-09-03
categorie: methode
titre: "Chrome ouvre AliExpress la ou l API est aveugle"
projet: portefeuilles
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: cursor
statut_editorial: brut
commit:
---
# Chrome ouvre AliExpress la ou l API est aveugle

## Ce qui a changé

Le Chrome de Hakim ouvre les PDP AliExpress `/item/` — on les croyait bloquées depuis le 09/08. La recherche par nom de magasin sort le cuir CONTACT’S que `search_products_raw` noie sous le PU à 2,50 €.

## Pourquoi c'est notable

Sans ça, la femme (40 500 recherches) restait « aucune offre ». Avec : 14,69 € le court, 21,39 € le long, 8–14 jours, stocks 485 et 1 180. L’homme n’est plus une fiche API à 0 avis : CONTACTS affiche 4,8 / 411 avis / +1 000 vendus.

## Le détail qui fait le contenu

`evaluation_count` API = 0 sur toutes les fiches, même à 700 ventes. Chrome lit les notes. Sterre, hier à 992 pièces API, affiche « Seulement 5 restants » ce matin. Le SKU Bleu du long femme renvoie `NO_SHIPPING` ; le Brun du même listing quote 21,39 € fret 0 — et la PDP montre de toute façon « livraison gratuite 11–19 sept. »

Les trois fiches femme (Wallets Store, Engraving Store, Memories Of ContactS) partagent le même fabricant Baiyun, le même téléphone, le même mail. Trois vitrines, un atelier. Ce n’est pas deux fournisseurs.

## Ce qu'on ne peut pas encore dire

Que le dossier soit un GO. Que le Crazy Horse soit du cuir. Qu’il existe un deuxième atelier femme hors CONTACT’S. Le ratio Ads reste ~70 à 49 €.
