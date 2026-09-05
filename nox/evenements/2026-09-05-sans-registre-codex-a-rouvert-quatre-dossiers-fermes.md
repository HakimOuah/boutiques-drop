---
type: evenement-nox
date: 2026-09-05
categorie: methode
titre: "Sans registre, Codex a rouvert quatre dossiers fermés : la mémoire est la première porte du pipeline"
projet: recherche-produit
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: claude-code
statut_editorial: brut
commit:
---
# Sans registre, Codex a rouvert quatre dossiers fermés : la mémoire est la première porte du pipeline

## Ce qui a changé

Relecture croisée des deux missions Codex du jour (mix-5 et relance-15k) contre le
registre des candidats et contre des contrôles indépendants Google Shopping. Avis
écrit dans `boutique-pipeline/analyses/2026-09-05-avis-travaux-codex.md` ; les deux
PASS_PREQUALIFICATION de Codex sont proposés en REVIEW, et une consigne de méthode
en sort : l'accès au registre n'est pas une aide, c'est une porte.

## Pourquoi c'est notable

La relance-15k a tourné avec la consigne « aucun skill, mémoire ou autre discussion à
consulter », pour comparer les raisonnements à froid. Sur ses cinq dossiers finaux,
**quatre étaient déjà fermés au registre** — échiquier (STOP marché 02/08), station
météo (rejet 16/07), nettoyeur à ultrasons (STOP juillet, avec approfondissement
États-Unis), et le handpan DE mesuré à 27 100 (rejet terrain Hakim 02/08). Une journée
de sous-agents à effort maximal, 0,60 $ d'API et des dizaines de pages de contrôle
pour reconstruire des conclusions qui tenaient en quatre lignes du registre.

## Le détail qui fait le contenu

Le concurrent choisi par Codex pour l'échiquier allemand s'appelle **Des Königs** — c'est
*Les Échiquiers du Roi*, l'artisan que le STOP français du 02/08 nomme comme **la raison
même du STOP** (étage ≥ 150 € tenu par la promesse « artisanal européen », interdite en
dropship). Codex proposait de le concurrencer avec un coffret pliant chinois à 38,78 €
vendu ~118 €. Le registre décrivait ce piège mot pour mot, un mois plus tôt.

À l'inverse, mix-5 — qui avait consulté le registre pour l'anti-doublon — a sorti six
familles réellement neuves (cache-clim, batardeau, coussin de lecture, mannequin de
couture, garde-manger, coussin de grossesse). La différence de rendement entre les deux
missions tient à cette seule variable.

Second détail : les deux PASS de mix-5 tombent sur une donnée que Codex n'avait pas
relevée, la grille Google Shopping par marchand. Coussin de grossesse : **médiane 32 €**
(Amazon 16,99 €, Kiabi et Smyths 29,99 €, Vevor chez Darty 31,90 €) là où Codex
raisonnait sur la bande spécialiste 69,90–89,90 €. Bracelet pierre naturelle :
**médiane 25 €**, Amazon à 10,99 €, alors que l'échantillon Codex « 33 bijoux, zéro sous
15 € » venait des seuls spécialistes. Et sur les 44 730 recherches consolidées des
bijoux, **32 % viennent d'expressions qui n'ajoutent qu'un qualificatif** (femme, homme,
véritable, argent) à une expression déjà comptée — leur déduplication par séries
identiques tenait (écart 480), mais elle ne voit pas ce recouvrement-là.

## Ce qu'on ne peut pas encore dire

Rien n'est requalifié au registre sans décision de Hakim : les deux PASS restent des
PASS jusqu'à son arbitrage. On ne sait pas non plus ce que Codex aurait produit **avec**
le registre — la comparaison à froid était la consigne, elle n'a pas été rejouée à
chaud. Et le lit orthopédique pour chien, plus grand écart source/concurrent de la
journée (53,52 € → 289–359 € en Allemagne), n'a pas de volume France mesuré : c'est
une mesure à 0,09 $ qui n'a pas été faite.
