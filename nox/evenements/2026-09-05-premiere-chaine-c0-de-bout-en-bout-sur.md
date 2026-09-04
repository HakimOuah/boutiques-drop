---
type: evenement-nox
date: 2026-09-05
categorie: resultat
titre: "Première chaîne C0 de bout en bout sur Hermes : trois workers, 27 minutes, non retenu"
projet: q4-testing-os
repo: hermes-orchestration
axes: [agents, automatisation, ecommerce]
agent: claude-code
statut_editorial: brut
commit: 4991617
---
# Première chaîne C0 de bout en bout sur Hermes : trois workers, 27 minutes, non retenu

## Ce qui a changé

Hakim a débloqué la carte de sourcing du rasoir de sûreté à 23h37 ; à 00h04 le contradicteur avait
rendu son audit, sans qu'aucun humain ne touche au tableau entre les trois cartes. Sourcing exact
sur Grok en neuf minutes, économie sur Grok en huit, audit sur GPT en sept, trois branches
`agents/rasoir-*` empilées sur GitHub, aucun push sur `main`, aucun GO prononcé.

## Pourquoi c'est notable

C'est la première fois que la chaîne de qualification tourne sans Claude Code ni Hakim comme
courroie entre deux phases. Et le verdict final est un refus argumenté : « non retenu en l'état,
cas limite marché non levé ». Un système qui sait dire non à son premier dossier vaut plus qu'un
système qui aurait dit oui.

## Le détail qui fait le contenu

Le worker Grok a lu six pages produit AliExpress en confiance A, prix par variante et modale de
livraison comprises, là où le navigateur intégré de Claude bute sur un squelette vide depuis le
09/08. Le mur n'était pas AliExpress, c'était le navigateur. Une fenêtre DSers « LOG IN » s'est
ouverte en cours de route ; le worker l'a laissée fermée.

Le contradicteur a relevé lui-même deux choses que personne n'avait vues. Son rôle porté dans
Hermes citait encore les seuils 10 000 et 30 000, périmés depuis le 29/08 (12 500 et 37 500) : une
règle recopiée peut être fausse sans que personne le lise. Et il a admis avoir vu le résumé de
l'économie avant les preuves brutes, parce que sa carte dépendait de la carte économie : l'audit
n'était pas aveugle. Il l'a écrit dans son rapport plutôt que de le taire.

Ce que le test a coûté en discipline : le worker a fait son checkout dans le dépôt partagé, qui est
resté sur une branche d'agent jusqu'à ce qu'on le remette sur `main`. Un espace `worktree` par
carte règle ça.

## Ce qu'on ne peut pas encore dire

Le coût en tokens des trois workers n'est pas exposé par Hermes : zéro appel DataForSEO, mais on ne
sait pas ce qu'a coûté la chaîne en modèle. Une chaîne sur un dossier déjà instruit ne dit rien
d'une veille C0 complète depuis le scouting, qui n'a pas encore tourné (première routine samedi
8h). Le dossier A6 reste `REVIEW_PREQUALIFICATION` ; la décision est celle de Hakim.
