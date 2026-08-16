# Passation — note de départ

**Écrite le 16/08/2026.** Ceci est la note qu'on laisse à son remplaçant. Les méthodes sont écrites
ailleurs et elles sont bonnes ; ce document contient ce qui n'est écrit nulle part : **pourquoi les
règles existent, ce qu'on a essayé et abandonné, où on en est réellement, et comment on raisonne
ici.**

Un successeur qui lit seulement les méthodes exécutera correctement et se trompera de priorité. Les
méthodes disent quoi faire. Ce document dit **ce que ça a coûté de ne pas le faire**, et **ce qui a
changé d'avis en cours de route**.

---

## 1. Où on en est réellement, au 16/08/2026

Ne pas confondre l'appareil méthodologique, qui est mûr, avec les résultats commerciaux, qui sont à
zéro. C'est le premier contresens possible en lisant ce dossier.

**Les faits :**

- **4 boutiques lancées** : Bien Brûlé, Lihyl, Bonum Vitae, Tuftéo.
- **0 vente.** Environ 100 à 150 € de publicité par boutique, **3 ajouts au panier au total**, tous
  sur Tuftéo.
- **2 boutiques en chantier** : Tuftéo (tufting, en correction avant GMC) et Maison Noirmont
  (montres et pièces Seiko mod, la plus documentée du parc).
- Le tracking des achats Google Ads était en place sur les 4. **Ces boutiques n'ont pas été lancées
  à l'aveugle** — c'est une erreur de lecture fréquente.

**Le diagnostic a changé le 16/08/2026, et c'est le fait le plus important de tout ce dossier.**

Pendant des mois, l'hypothèse de travail était : *si ça ne vend pas, c'est le produit ou le site.*
D'où l'effort massif mis sur la recherche produit — cinq agents, deux playbooks, un registre, une
méthode d'analyse de marché en neuf étapes.

Les experts externes de Hakim ont renversé la lecture : les tests ont été **coupés trop tôt**. 120 à
130 € de dépense par produit, c'est en dessous de ce qu'il faut pour que Google ait de quoi
optimiser le ciblage. L'algorithme balaie d'abord des profils larges ; il lui faut une première
conversion pour affiner. **Le budget de test doit être proportionné au prix du produit, et on ne
conclut jamais à 120-130 €.**

Conséquence directe sur les priorités, et elle est contre-intuitive pour qui arrive :

> **On ne cherche plus de nouvelles niches.** L'effort passe de la recherche à la mise en
> production. Boutiques prêtes et soumises à GMC en **août**, campagnes en **septembre**. La
> recherche des niches univers (U1-U6) est **en pause**.

Ordre de priorité donné : (1) Tuftéo — retravailler les visuels puis soumettre à GMC, produit très
visuel, tendance favorable en octobre-novembre ; (2) Maison Noirmont — finaliser puis soumettre à
GMC ; (3) osmoseur — conservé, test complet relancé en septembre avec un budget suffisant.

Le calendrier est contraint par Google, pas par nous : une revue GMC prend des jours, une suspension
prend des semaines. D'où « soumettre tôt ».

**Ce que ça implique pour quelqu'un qui arrive.** Si on te demande une recherche produit dans les
semaines qui viennent, la bonne réponse est probablement de demander d'abord si les boutiques sont
soumises à GMC. Proposer une nouvelle niche maintenant, c'est reproduire exactement ce qu'on vient
d'arrêter de faire.

**Les critères des nouveaux produits Q4, quand on y reviendra** : au moins **20 000 recherches par
mois** (à ne pas confondre avec le plancher de 30 000 du mode catalogue), potentiel saisonnier Q4,
offrable à Noël sans être un pur produit cadeau, forte dimension visuelle si on l'exploite en
Shopping. Référence donnée par les experts : un produit à ~20 000 recherches a fait 170 000 € de
chiffre d'affaires en un mois et demi au Q4 précédent. Objectif : 3 à 4 produits.

---

## 2. Les changements de voie, datés

C'est la partie qui manque le plus à un nouvel arrivant. Aucun de ces revirements n'est écrit dans
les méthodes — elles présentent l'état final comme s'il avait toujours été évident.

| Date | Avant | Après | Ce qui a forcé le changement |
|---|---|---|---|
| **16/07 → 20/07** | Idéation libre (Amazon, VEVOR, Europages, Flippa) | **Brand Search devient la source principale** : boutiques FR vivant en 100 % Google Ads, 0 Meta, prix ≥ 130 $ | L'idéation libre produisait des idées sans preuve d'existence commerciale |
| **20/07** | « On cherche du produit **technique** » | « On cherche du produit **explicable à un particulier** » | Bilan des balayages 1-4. Le technique-pro a un acheteur expert, fidèle aux marques, avec un parcours devis/facture — incompatible avec Search → fiche produit. Cas d'école : la plieuse zinc, vocabulaire de couvreur, une chaîne complète pour rien |
| **20/07** | Chemin B : balayage par le volume, sans produit nommé | **Chemin A : idée + mesure express**, voie principale | Le chemin B balayait sans jugement de potentiel — trois familles « machines » traitées en pure perte alors qu'elles étaient verrouillées par les critères d'exclusion |
| **19/07** | Copywriting direct | **Persona obligatoire et bloquant** avant toute rédaction | Demande de Hakim |
| **~20/07** | Filtre qualitatif puis validation du volume en phase 3 | **Mesure express AVANT tout travail qualitatif** | Sur les recherches de juillet, ~30 candidats sur 50 mouraient sur le volume **après** un filtrage qualitatif complet |
| **01/08** | Une tête de mot-clé par famille | **Consolidation : la famille est la somme des formulations qu'une même page sert** | Noirmont : le rangement passe de 11 000 annoncés à 65 570. 20 familles sur 20 sous-comptées d'un facteur 3 à 12 |
| **06/08** | Boutiques lancées sans étude concurrentielle | **Concurrent dropship prouvé + reverse-engineering marketing/persona/pricing obligatoire** | Auto-critique de Hakim : c'est le manque n° 1. Tuftéo, la seule à l'avoir fait partiellement, est la seule avec des ajouts panier |
| **07/08** | Fichiers locaux | **GitHub = source de vérité unique**, commit + push en fin de toute tâche | Besoin de survivre à un ordinateur cassé et de permettre le relais depuis une autre machine |
| **08/08** | Trafic lu dans Brand Search | **Trafic réel ≈ SimilarWeb × 3**, et jamais de verdict sur des visites Brand Search | Correction de Hakim le soir même : 8 niches avaient été tuées sur des chiffres non fiables |
| **11/08** | Un rapport daté par intervention | **Un `TABLEAU.md` par boutique**, point d'entrée unique | 110 fichiers markdown pour Noirmont, aucun point d'entrée. Une semaine de flottement quand une limite d'usage est tombée en plein chantier |
| **13-14/08** | Décider sur un volume mesuré | **Vérifier en SERP avant de décider** | 3 familles sur 20 se sont retournées. 24 500 recherches retirées. Deux familles déplacées de 6 et 11 rangs |
| **14/08** | Prix « juste sous le plus cher » | **Juste sous le concurrent comparable**, marques officielles et marques à récit écartées | Un vide de marché à 429 € : un prix que personne ne pratique parce qu'aucun argument ne le justifie |
| **16/08** | « Si ça ne vend pas, c'est le produit ou le site » | **« On a coupé trop tôt »** — recherche en pause, production prioritaire | Retour des experts externes. C'est le pivot en cours |

**La leçon transversale de ce tableau** : chaque changement de voie est venu d'un fait mesuré ou
d'un retour terrain, jamais d'un raisonnement a priori. Et à chaque fois, la version précédente
paraissait évidente jusqu'à ce qu'on la mesure.

---

## 3. Comment on raisonne ici

Douze réflexes. Ce ne sont pas des principes décoratifs : chacun a été payé.

**1. Un chiffre sans date et sans source n'existe pas.** Un volume a circulé à 15 500 dans neuf
documents successifs et a piloté une semaine de décisions. Remesuré : 20. Faux d'un facteur 750. Un
chiffre recopié devient vrai par répétition ; le seul remède est de dater chaque lecture et de citer
sa source à chaque reprise, y compris entre deux documents écrits la même semaine.

**2. Chercher où le raisonnement peut être faux, pas où il se confirme.** La vérification SERP existe
parce que personne ne la faisait : on avait le volume, il était cohérent, on décidait. Trois familles
sur vingt se sont retournées quand on a ouvert la page.

**3. Distinguer observé, déduit, hypothèse — et l'écrire.** Systématiquement, dans tous les
livrables. Les niveaux de preuve A/B/C sur les fiches fournisseur, le marquage [O]/[D] sur les
personas, c'est la même discipline.

**4. Comparer le coût d'un contrôle à ce qu'il évite.** Lire l'ordre des mots dans une grappe de
mots-clés prend deux minutes et a retiré 16 060 recherches fantômes. C'est le contrôle le moins cher
du catalogue et celui qui rapporte le plus. À l'inverse, un audit SERP complet coûte 20 à 40 minutes
de navigateur — d'où la sonde de prix, qui répond en une minute pour 1 % du coût.

**5. Ne jamais additionner pour franchir un seuil.** Le test qui tranche est toujours le même :
est-ce qu'une seule page servirait ces requêtes, ou en faudrait-il deux ? Un précédent a annoncé
13 000 à 17 000 quand le mot exact faisait 2 400.

**6. Une fourchette honnête vaut mieux qu'un total faux.** Quand un mot est ambigu et qu'on n'a pas
tranché, on annonce 1 300 à 1 970. On n'arrondit pas.

**7. Un retour terrain de Hakim prime sur un volume.** Il a rejeté le handpan, le lit cabane et le
purificateur d'air alors que les chiffres passaient. Ce ne sont pas des caprices : il voit des
saturations et des réputations de niche que la mesure ne montre pas. Ne jamais réargumenter un rejet
terrain avec un tableau de volumes.

**8. Un marché sans concurrent n'est pas une bonne nouvelle.** Règle de Hakim. Un concurrent
dropship qui vit prouve la demande et la faisabilité. Ce qui tue un marché, c'est la **densité**, les
actifs défensifs ou l'absence d'espace exécutable — jamais la découverte du premier acteur.

**9. Mais la preuve visible est aussi un signal d'occupation.** Le corollaire du précédent, appris le
08/08 : 8 niches sur 8 tuées en étude profonde. Une boutique-modèle bien visible signifie presque
toujours que l'angle est déjà pris, souvent en plusieurs exemplaires. Et le plafond récurrent des
dropshippers spécialisés français est de 1 à 10 000 visites par mois, même après cinq à sept ans.

**10. « Fait » ne veut rien dire tant que ce n'est pas vérifié à l'écran.** Un ticket Tuftéo est
resté marqué FAIT du 30/07 au 16/08 alors que les faux avis étaient toujours servis publiquement :
les instructions avaient été écrites, l'action jamais appliquée.

**11. Écrire au fil de l'eau, jamais à la fin.** Les sessions se coupent — limite d'usage, contexte
plein, journée qui finit. Un rapport écrit à la fin est un rapport perdu.

**12. Dire ce qu'on n'a pas pu faire.** Section obligatoire dans tout livrable. Un dossier sans
section de limites est un dossier qu'on ne peut pas relire dans un mois. Et jamais de mode dégradé
silencieux : si un outil est inaccessible, on s'arrête et on le dit.

---

## 4. Ce dont il faut se méfier

**Les sources non fiables, nommément :**

- **Les visites affichées dans Brand Search.** Non fiables. Huit niches ont été tuées dessus avant
  correction. Utiliser SimilarWeb × 3.
- **Les chiffres de ventes lus en page de résultats AliExpress.** « 531 vendus » se lit 5,0 étoiles /
  31 ventes — la note est collée au nombre de ventes. Facteur 17 sur des candidats crus à 300-550
  ventes.
- **Les analytics Shopify seules**, pour une décision de budget publicitaire. Croiser.
- **Un quota SEMrush épuisé**, qui rend des zéros silencieux sans erreur.
- **Le champ `size` de l'API de thème Shopify**, qui annonce 74 268 pour un fichier de 124 999
  octets. Et `themeFilesUpsert` qui renvoie une réponse vide même quand il a réussi.

**Les pièges de raisonnement, tous vérifiés sur le terrain :** ils sont catalogués dans
`METHODE-ANALYSE-MARCHE.md` — retournement pièce/produit fini, rabattement orthographique, mot
générique contaminé, marque cachée, intention de réparation, KD trompeur. Ne pas les lire comme de
la théorie : chacun a une somme en face.

**Un biais de méthode à connaître.** L'appareil de recherche produit est très développé — cinq
agents, deux playbooks, une méthode en neuf étapes, un registre. La production, elle, est moins
outillée. Le réflexe naturel en arrivant est donc de faire de la recherche, parce que c'est là que
les outils sont. C'est précisément ce qu'il ne faut pas faire en ce moment.

---

## 5. Ce qui appartient à Hakim, et pourquoi

Il tranche, les agents instruisent. Ce n'est pas une précaution de forme.

| Décision | Pourquoi elle ne se délègue pas |
|---|---|
| GO / STOP marché | Le seuil se lit avec le contexte : un volume à ±20 % d'un seuil, des données contradictoires, un outil partiellement accessible — ça remonte |
| La consolidation par famille | C'est une décision d'arborescence déguisée en calcul |
| Le persona (porte bloquante) | Tout le copy s'appuie dessus ; un persona faux contamine tout l'aval |
| La direction artistique | Il a une exigence précise, voir ci-dessous |
| La publication d'un thème | Le connecteur refuse déjà le rôle MAIN ; on travaille sur copie |
| Tout verdict de conformité | CE, licences, allégations, origine d'expédition : on constate, on documente, il tranche |
| Tout budget publicitaire | |
| Toute soumission de review GMC | Redemander une review à la chaîne est un motif de refus en soi |

**Deux exigences personnelles à connaître, parce qu'elles surprennent :**

- **La direction artistique.** Pour les niches créatives et DIY, une DA « premium fade » — pastels
  sages, minimalisme froid — est un **défaut**, pas une qualité. Il veut du pop, du mouvement, de la
  personnalité. Les styles luxe sont réservés aux produits réellement premium.
- **Les placeholders de démonstration** (slider, avis de démo) sont sa chasse gardée. On n'y touche
  pas sans son feu vert.

**Et une contrainte permanente sur les promesses.** En dropshipping, il n'y a pas d'insert physique :
tout ce qui est « offert » ou « inclus » se livre en numérique et se formule comme tel. Aucun faux
avis, aucun compteur inventé, aucune fausse urgence, aucune allégation de santé. Ce n'est pas
seulement de l'éthique : c'est exactement ce que Google signale aussi.

---

## 6. Les questions ouvertes au 16/08/2026

1. **Le CSS (Comparison Shopping Services)** — environ 50 €/mois pour des enchères plus basses et
   une meilleure stabilité GMC. À chiffrer, décision non prise.
2. **L'arbitrage Google Ads du repo drop-elite** : méthode « charognard » à CPC manuel (~0,28 €)
   contre lancement direct en tROAS. Défaut actuel = le module 2025, le charognard reste en option
   sur les niches chères.
3. **Le plafond de trafic « 1 à 10 k » des dropshippers FR** est à re-vérifier : il avait été établi
   sur des chiffres Brand Search, donc non fiables. Les STOP fondés sur un verrouillage structurel
   tiennent ; ceux fondés sur ce plafond sont en re-vérification.
4. **Deux décisions produit en attente** depuis le 07/08 : le sabre laser (reprise motivée possible
   sur un fait nouveau Q4) et le kotatsu (pari sans preuve française).
5. **Le mur anti-bot sur les pages produit AliExpress**, qui plafonne la preuve à B+ avant l'étape
   DSers.
6. **La cadence.** C'est le chantier annoncé à la reprise du 06/08 et jamais mené à terme : passer de
   coups isolés à des recherches produit récurrentes, en décidant ce qui tourne en récurrent, à
   quelle fréquence, ce qui s'automatise et ce qui exige encore Hakim. Les outils existent tous ; ce
   qui manque, c'est leur orchestration dans le temps.

---

## 7. Mes angles morts

Ce que je n'ai pas résolu, et que mon successeur héritera.

- **Je n'ai jamais vu une vente.** Tout le dispositif est calibré sur des signaux amont — volumes,
  SERP, concurrence, marges. Aucune de ces règles n'a été validée par un chiffre d'affaires réel. La
  première vente réelle invalidera probablement une partie de ce document.
- **Le pipeline sort encore des produits « un peu bizarres »**, de l'aveu de Hakim. Biais de
  vocabulaire et de volume : on trouve ce que le vocabulaire nomme, et le vocabulaire ne nomme pas
  tout. Le correctif engagé — partir des boutiques preuves — est partiel.
- **La production est sous-outillée par rapport à la recherche.** Il n'y a pas d'équivalent, côté
  build et exploitation, de ce qu'est le registre côté recherche.
- **Rien ne mesure la réputation d'une niche avant lancement.** Lihyl est morte d'une niche brûlée —
  des dropshippers avaient arnaqué des clients français sur le reformer pilates, la confiance marché
  était morte. On l'a appris **après** le lancement. La règle existe désormais (chercher
  « <produit> arnaque / avis / déception », forums, Trustpilot avant lancement) mais elle n'est
  outillée par aucun agent.
- **Le mode Kraken de `drop-elite-google-os` et le pipeline de `boutique-pipeline` ne sont pas
  réconciliés.** Deux corps de méthode cohabitent, avec des seuils différents — 20 000 pour un
  produit, 30 000 pour une boutique catalogue — et il faut savoir lequel s'applique avant de citer
  un chiffre.

---

## 8. Ordre de lecture recommandé

Pour quelqu'un qui arrive et doit être opérationnel :

1. **Ce document**, en entier.
2. **`boutique-pipeline/PRODUCT-RESEARCH-CRITERIA.md`** — la stratégie et les seuils.
3. **`METHODE-ANALYSE-MARCHE.md`** — la méthode et surtout son catalogue des pièges.
4. **`memoire/MEMORY.md`** puis les fiches qu'il indexe — le « pourquoi » de tout le reste.
5. **`boutique-pipeline/boutique-seiko-mod/TABLEAU.md`** et **`ETAT.md`** — l'état réel d'une
   boutique, et le format de travail attendu.
6. **`boutique-pipeline/PLAYBOOK.md`** — les 6 phases et les 3 portes de création.
7. **`.claude/skills/gmc-acceptance/`** — parce que c'est la priorité du moment.
8. **`drop-elite-google-os/skills/creer-boutique-niche-google/references/strategie-pas-a-pas.md`** —
   les 11 phases du mode Kraken, à connaître même si ce n'est pas le corps de méthode par défaut.
9. Le reste au fil des besoins : les 11 agents, le registre des candidats, les journaux de boutique.

Et une habitude à prendre dès le premier jour : **avant toute intervention sur une boutique, lire son
`TABLEAU.md` ; en fin d'intervention, le mettre à jour, écrire le compte rendu dans `journal/`,
committer et pousser.** C'est la seule chose qui ne se délègue pas.
