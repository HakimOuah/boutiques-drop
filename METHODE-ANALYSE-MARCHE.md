# Méthode d'analyse de marché et de concurrence

Méthode issue des décisions et observations du 14/08/2026. À charger pour une analyse de marché ou une architecture de catalogue, selon la branche du pipeline ; pas pour chaque correction de texte ou de thème. Mesure express avant due diligence, selon PRODUCT-RESEARCH-CRITERIA.md. Un catalogue concurrent observé peut fournir des hypothèses de familles sans prouver leur demande.

> Cette méthode n'a pas été inventée : elle a été improvisée sur Maison Noirmont les 13 et 14/08/2026,
> et ce qu'elle a trouvé justifie de l'écrire. Sur 20 familles mesurées, **toutes étaient sous-comptées
> d'un facteur 3 à 12**, et **3 familles sur 20 se sont retournées** à la vérification en page 1 de
> Google, dont deux qui pesaient ensemble 23 140 recherches qui n'existaient pas.
>
> Sources, toutes dans `boutique-pipeline/boutique-seiko-mod/` :
> `journal/2026-08-13-recherche-mots-cles.md`, `journal/2026-08-14-volumes-consolides.md`,
> `journal/2026-08-14-verification-serp.md`, `journal/2026-08-14-concurrents-fr.md`,
> `journal/2026-08-14-etude-maisondutemps.md`, `AXES-MARKETING.md`, `ARBORESCENCE.md`.

---

## Le principe

**On mesure ce qu'on vend, on vérifie ce qu'on mesure, et on ne regarde les concurrents qu'après.**

Les trois inversions de cet ordre sont les trois façons connues de perdre une semaine :

1. partir d'une liste de mots-clés inventée plutôt que du catalogue, et mesurer le vocabulaire de la
   maison au lieu de celui du client ;
2. décider sur un volume sans avoir ouvert la page 1 de Google, et prendre un mot pour ce qu'il n'est
   pas ;
3. regarder les concurrents en premier, et prendre leurs découpes de collection pour des preuves de
   demande. Sur Noirmont, les 4 axes les plus voyants du concurrent modèle pesaient **165 visites sur
   30 600**. Les copier aurait produit 40 pages mortes.

---

## La séquence

Les dépendances ci-dessous servent une analyse complète. Pour une reprise ciblée, réutiliser les preuves encore pertinentes et compléter le manque. Chaque résultat déterminant reste daté, parce que l'étape
suivante s'appuie dessus et que personne ne doit avoir à refaire la mesure de mémoire.

**Trois garde-fous ajoutés le 29/08/2026**, au moment où DataForSEO est devenu la voie de mesure par
défaut. Ils sont écrits dans l'étape où ils s'appliquent, pas regroupés ici — mais les voici pour
mémoire, parce que chacun corrige une erreur qu'on a réellement commise :

| | Garde-fou | Où | Ce qu'il empêche |
|---|---|---|---|
| **1** | Figer la liste des familles **avant** de mesurer | étape 1 | Un découpage qui suit les chiffres qu'il découvre. C'est ce qui a fait diverger deux mesures du même dossier |
| **2** | Adjuger les têtes génériques **en SERP, chiffre à l'appui**, et publier le consolidé en trois valeurs | étape 5 | Une adjudication implicite qui décide seule du verdict sans apparaître nulle part |
| **3** | Une paire accentuée n'est **qu'un seul bucket** : on interroge les deux, on ne somme jamais les deux | étape 3 | Le double comptage que notre propre protocole organisait |

Ils ne dépendent pas de l'interface : ce sont des règles de méthode appliquées aux données DataForSEO.

### Étape 1. Partir du catalogue, jamais d'une page blanche

**Ce qu'on fait.** On dérive la liste des mots-clés à mesurer **des produits eux-mêmes**, fiche par
fiche et collection par collection. Pour chaque produit, on écrit : le mot de la maison, le mot que
dirait un particulier qui découvre l'objet, et le nom de la catégorie parente. Sur Noirmont : 300
mots-clés dérivés de 94 pièces et 11 collections.

On teste toujours **plusieurs niveaux de généralité** : la pièce, le produit fini qui la contient, la
catégorie parente. Cette règle vient du pipeline (`phase3-demande`, cas « suspension rotin XXL ») et
elle a payé ici aussi : `cadran squelette` valait **20**, `montre squelette homme` valait **2 900**.

**Ce qu'on produit.** Une liste où chaque mot-clé est rattaché à un produit ou une collection réelle.
Un mot-clé qu'aucune page ne pourrait servir n'a rien à faire dans la liste.

> ### Garde-fou n° 1 — figer la liste des familles **avant** de mesurer
>
> **Ajouté le 29/08/2026.** La liste des familles, avec leur périmètre, s'écrit et se date **avant la
> première mesure**. Une famille ne s'ajoute ensuite qu'en le disant explicitement, et le total est
> alors republié dans les deux découpes.
>
> **Pourquoi.** Sur le rejeu du dossier déco astro, deux chaînes de mesure ont rendu deux verdicts
> opposés — STOP le 15/08, cas limite le 29/08. La cause n'était **ni l'outil ni les chiffres** :
> une seule famille, `ciel étoilé`, avait été érigée en famille propre d'un côté et jamais isolée de
> l'autre. Elle pesait 7 885. Retirée, les deux chaînes retombaient sur le même STOP.
>
> Un découpage décidé pendant la mesure suit les chiffres qu'il découvre. C'est la façon la plus
> discrète de fabriquer le résultat qu'on espère, et elle ne laisse aucune trace dans le rapport.

**Le piège.** La liste faite de tête ne contient que le vocabulaire du métier. Sur Noirmont,
`cadran stérile`, `cadran sans logo`, `cadran pilote` sont revenus **sans aucun volume restituable**.
Le mot « stérile » est un mot de spécialiste que le particulier français ne tape jamais. C'est la
règle mémoire « explicable-particulier, pas technique-pro », vue du côté de la mesure.

### Étape 2. Mesurer par lots

**Ce qu'on fait.** Base France obligatoire, quelle que soit la source. On relève pour chacun :
**volume, CPC avec sa devise, intention**, et le KD quand la source en fournit un.

**Voie unique depuis le 01/09/2026** (détail et recettes : skill `recherche-mots-cles`) :

- **DataForSEO API** — découverte par `scripts/kw_dfs.py` (correspondance plein texte,
  normalisation et déduplication intégrées), volume de tête par `google_ads/search_volume`. Environ
  0,13 USD la page de 1 000 lignes.

**Ce qu'on produit.** Un tableau par famille : formulation, volume, CPC + devise, intention disponible,
endpoint, paramètres France/français et date d'appel.

**Le piège.** Trois lectures fausses guettent :

- **`n/a` n’est pas `0`.** La donnée est indisponible ou non restituée ; sa cause doit être vérifiée. Ne pas conclure automatiquement « moins de 10 », ni l’assimiler à zéro pour un gate.
- **Le quota épuisé rend des zéros silencieux.** Avant de croire un zéro, on vérifie que des témoins
  connus rendent bien leur volume habituel, et on regarde le compteur de crédits bouger.
- **La devise ne se présume pas.** DataForSEO rend la devise du compte. On lit le champ de devise de
  la réponse et on l'écrit à côté du chiffre.
  À 0,20 ça ne change aucun verdict, à 2 ça en change.
- **Le KD n'est pas portable d'une source à l'autre.** Mesuré le 29/08 sur 179 mots-clés :
  corrélation de rangs 0,225, et DataForSEO rend 0 pour 83 % d'entre eux. On ne convertit pas, on ne
  compare pas deux KD de sources différentes. Ce qui remplace le KD est le comptage de qui tient
  réellement la page 1 — contrôle n° 6 de l'étape 5.

### Étape 3. Consolider : la demande d'une famille est la somme des formulations qu'une même page sert

**C'est l'étape qui a multiplié les chiffres de Noirmont par 3 à 12.** On mesurait une tête par
famille. Or `montre squelette homme` 2 900 coexiste avec `montre squelette` 2 400, `montre homme
squelette` 1 600 et `squelette montre` 1 300 : ce sont **des recherches distinctes qu'une seule page
de collection sert**. La famille pèse 17 120, pas 2 900. Le rangement est passé de 11 000 annoncés à
**65 570**.

**La règle, en une phrase : on additionne ce qu'une même page servirait, et rien d'autre.**

| On additionne | On n'additionne pas |
|---|---|
| Les variantes d'écriture, d'ordre et de nombre : `boite a montre`, `boite à montres`, `boite montre`, `montre boite` — **sous réserve du garde-fou n° 3 pour les accents** | Ce qui appellerait **une autre page** : `femme` sort de chaque total et se compte à part, parce qu'une collection femme est une décision d'offre, pas une variante d'écriture |
| Les **synonymes qu'une même page sert** : boîte + coffret + écrin + étui = une seule collection Rangement | Ce qui relève d'une **autre intention** : la réparation se retire famille par famille et se compte à part |
| | **Jamais un mot dans deux familles.** `boitier pour montres` va au Rangement ou aux Boîtiers, pas aux deux |

Le recoupement entre synonymes se **mesure**, il ne s'estime pas : sur les quatre racines du rangement,
il valait 60 recherches sur 67 580. Négligeable, et c'est la mesure qui le dit.

**Ce qu'on produit.** Un tableau par famille avec le détail des formulations retenues et leur volume
individuel, plus la liste des formulations retirées avec le motif. **Un total dont le détail
n'apparaît pas n'est pas un total, c'est une affirmation.**

**Le piège.** Symétrique de l'étape : **additionner des familles distinctes pour franchir un seuil.**
L'anti-exemple canonique du pipeline reste le cas « catio » de juillet 2026, où trois familles
voisines avaient été additionnées pour annoncer 13 000 à 17 000 quand le mot exact faisait 2 400. Le
test qui tranche est toujours le même : **est-ce qu'une seule page sert ces requêtes, ou est-ce qu'il
en faudrait deux ?**

**Le second piège : le plancher de lecture.** DataForSEO Labs rend 1 000 lignes par page. Si la
dernière ligne est encore à un volume significatif, la famille n'est pas couverte et le total est un
**plancher**, pas un total. On l'écrit comme tel. Sur Noirmont, trois familles sur vingt étaient dans
ce cas.

> ### Garde-fou n° 3 — une paire accentuée n'est qu'un seul bucket
>
> **Ajouté le 29/08/2026, il corrige une règle maison qui était fausse.** On interrogeait
> systématiquement les deux orthographes **et on additionnait les deux totaux**. C'était un double
> comptage.
>
> Google sert les formes accentuées et non accentuées dans **un seul bucket** : vérifié sur 6 paires
> sur 7, avec un volume **et une série mensuelle identiques mois par mois**. Une série identique douze
> mois de suite n'est pas une coïncidence. Le rapport déco astro du 15/08 attribuait 6 350 recherches
> sur 13 460 à des « formulations non accentuées jamais lues » : ce volume n'existait pas comme
> demande adressable distincte.
>
> **Ce qui reste vrai :** on continue d'interroger les deux orthographes dans DataForSEO Labs — c'est
> là que le vocabulaire se découvre, même si les volumes Google Ads peuvent partager un bucket.
>
> **Ce qui change :** on ne somme jamais les deux totaux. Le test de décision est la **série
> mensuelle**, pas le volume seul : identique douze mois de suite → un seul bucket, on retient le MAX.
> Même raisonnement pour les paires singulier / pluriel, où Google fusionne 3 fois sur 4
> (`limonadier` et `limonadiers` valent tous les deux 12 100).
>
> Une seule exception connue : `planétarium` / `planetarium`, séparés parce que la forme sans accent
> est un mot anglais et allemand — pas parce que c'est un accent.

### Étape 4. Net de marque : toujours deux chiffres

**Ce qu'on fait.** On retire du brut toute formulation contenant un nom de marque ou de modèle
déposé, détection par liste (90 marques et modèles sur Noirmont). On publie **deux chiffres partout :
brut et net de marque**.

**Pourquoi cette règle existe.** Une requête qui contient une marque tierce est **inutilisable en flux
Merchant Center et en titre produit**. Le brut décrit un marché ; **le net décrit ce qu'on peut
réellement aller chercher**. Confondre les deux, c'est bâtir un plan d'acquisition sur du volume
interdit d'écriture.

L'écart n'est pas cosmétique : bracelets 67 560 brut contre 40 650 net, montres squelette 23 340
contre 17 120, chronographes 16 100 contre 11 150.

**Le piège.** La marque cachée dans un mot qui a l'air générique. Voir le contrôle n° 4 du catalogue
ci-dessous.

### Étape 5. Vérifier en SERP

**C'est l'étape que personne ne fait, et c'est elle qui a retourné trois familles sur vingt.**

**Ce qu'on fait.** On ouvre la page 1 réelle de Google France (`google.fr`, `hl=fr`, `gl=fr`) sur
**chaque tête de famille**, en lecture texte, une requête après l'autre. Pour chacune on relève cinq
choses :

| Colonne | Ce qu'on y met |
|---|---|
| **Ce que Google sert** | La nature des produits et des sites en page 1, Shopping et organique |
| **Intention** | La requête désigne-t-elle bien notre produit : oui, partiellement, ou pas du tout |
| **Commercial ou informationnel** | La page 1 vend-elle, ou explique-t-elle ? Quatre positions éditoriales sur dix veut dire qu'une collection seule ne prendra pas la page |
| **Qui tient la page 1** | On **compte** les positions organiques des marketplaces. Boutiques indépendantes majoritaires = porte ouverte |
| **Volume** | Retenu, ou retiré avec le motif et le pourcentage |

**Ce qu'on produit.** Un tableau par famille et un classement corrigé, avec le total des retraits.
Sur Noirmont : **24 500 recherches retirées**, deux familles déplacées de 6 et de 11 rangs, et onze
fiches produit reclassées en surdotation du jour au lendemain.

**Le piège.** Trois précautions à écrire dans le rapport :

- **Ne jamais confondre « carrousel Shopping sponsorisé visible » et « annonces Search texte
  confirmées ».** Si on ne peut pas isoler les annonces texte, on le dit.
- **Page 1 seulement.** C'est le mandat, mais ça interdit de juger la profondeur de la concurrence.
- **Les pourcentages de retrait sont des estimations** faites à la composition de la page 1, pas de
  nouvelles mesures. On l'écrit.

> ### Garde-fou n° 2 — une tête générique s'adjuge en SERP, chiffre à l'appui
>
> **Ajouté le 29/08/2026.** Une tête générique — `ciel étoilé`, `plateau`, `diffuseur`, `paddle` — ne
> se verse **jamais en entier** dans une famille, et ne se jette jamais en entier non plus. On lui
> adjuge une **part chiffrée**, écrite avec son motif, tirée de la composition de la page 1.
>
> La marche à suivre, en trois lignes de rapport :
>
> 1. Compter, sur la page 1, ce qui relève réellement de notre famille — produits, sites, intention.
> 2. En déduire une part, exprimée en pourcentage : sur le dossier astro, `ciel étoilé` a été adjugé
>    à **25 %** et `carte du ciel` à **15 %**.
> 3. Publier le consolidé en **trois valeurs** : têtes à 0 %, part adjugée, part généreuse. Si le
>    verdict change d'une valeur à l'autre, **c'est un cas limite, pas un verdict**.
>
> **Pourquoi c'est devenu obligatoire.** Sur le dossier astro, les trois valeurs donnaient 38 570,
> 42 405 et 46 240 pour un plancher à 37 500. La part adjugée décidait à elle seule du verdict — et
> elle n'était écrite nulle part dans la mesure du 15/08. Une adjudication implicite est une décision
> prise sans être vue.
>
> Cette étape ne dépend d'aucun abonnement : elle se lit sur la page 1 de Google.

### Étape 6. Puis seulement, aller voir les concurrents

**Pourquoi l'ordre compte.** Tant qu'on n'a pas ses propres chiffres, on prend les découpes du
concurrent pour des preuves de demande. C'est exactement ce qui s'est produit sur Noirmont : le
premier dossier concurrentiel recommandait de copier quatre axes (diamètre en mm, étanchéité en ATM,
couleur de cadran, disponibilité) parce qu'ils étaient visibles. L'étude de trafic URL par URL, faite
ensuite, a montré qu'ils pesaient **165 visites sur 30 600, soit 0,5 %**.

Arrivé ici avec des volumes consolidés et vérifiés, on ne regarde plus le concurrent pour savoir quoi
faire : on le regarde pour savoir **ce qui marche chez lui, ce qui ne marche pas, et où il ne va pas**.

### Étape 7. Cartographier chaque concurrent

**Ce qu'on fait.** On lance l'agent `cartographie-concurrence` (`.claude/agents/`). Il produit, pour
chaque concurrent identifié : qui c'est, ce qu'il fait exactement, ses avantages, ses faiblesses, son
axe marketing, ses personas et ses prix par famille. Ses points de méthode (trafic ≈ SimilarWeb × 3,
sitemap et JSON avant toute navigation, trafic URL par URL) sont dans son fichier.

**Ce qu'on produit.** Une fiche par concurrent, un tableau de synthèse, et un document d'axes
marketing du type de `AXES-MARKETING.md`.

**Le piège.** Confondre **ses collections les plus visibles** et **ses collections les plus
rentables**. Chez `maisondutemps.com`, 71 % du trafic tient sur **quatre pages**, et 112 de ses 154
collections sont orphelines (absentes du menu, atteignables par le sitemap seul) tout en pesant 3 900
visites. La visibilité dans son menu ne prouve rien ; le trafic par URL, si.

### Étape 8. En déduire l'arborescence, les trous d'offre et l'axe différenciant

**L'arborescence.** Une famille consolidée = une page de collection. Une collection SEO **n'a pas
besoin d'être dans le menu** : le sitemap suffit à la faire indexer. Mais **une collection publiée
sans H1 ni meta-description propres ne rapporte rien**, quel que soit son mot-clé : chez
`maisondutemps.com`, deux collections quasi identiques font **4 500 visites et 0**, et la seule
différence est là. Et le doublon de collection ne partage pas le trafic, **il meurt** : les six paires
dupliquées relevées chez lui font toutes zéro d'un côté.

**Les trous d'offre.** On divise la demande nette par le nombre de fiches qui la servent. Sur
Noirmont : rangement 65 570 pour 3 fiches utiles, soit **21 856 recherches par fiche**. Le calcul
marche dans les deux sens : 44 fiches de cadrans pour 3 990 recherches, 14 fiches sport chic pour 200.
**Le classement des trous et celui des surdotations sortent du même tableau**, et c'est lui qui dit où
sourcer et où arrêter.

**L'axe différenciant.** Il se construit sur trois questions, dans cet ordre : qu'est-ce que notre
catalogue permet que personne d'autre ne fait ? qu'est-ce qui ne demande **aucune affirmation sur
nous** ? qu'est-ce qui reste vrai en dropshipping, sans atelier, sans antériorité et sans commande ?
Sur Noirmont, la réponse était « personne ne vend l'organe » : un fait d'inventaire, pas une promesse
de savoir-faire. Tout axe qui suppose de gagner sur la confiance accumulée, le prix ou le service
d'un concurrent installé se **jette**, et ce rejet s'écrit comme une décision, pas comme un oubli.

---

## Le catalogue des pièges

Tous vérifiés sur le terrain les 13 et 14/08/2026. **Ce sont des contrôles à faire, un par un, avant
de valider un volume.** Chacun a coûté quelque chose.

### 1. Retournement pièce contre produit fini

**Le contrôle.** Pour tout mot-clé qui désigne une pièce, regarder **l'ordre des mots** et les
modificateurs de la grappe. Les formulations qui **commencent par le produit fini** désignent le
produit fini.

**Ce que ça a coûté.** `cadran montre` (2 400) a l'air d'être un cadran de rechange : la grappe de
41 310 est faite de `montre cadran bleu`, `montre homme cadran noir`, `montre femme petit cadran`.
Ces gens **choisissent une montre d'après son cadran**. **16 060 retirés.** Même mécanique sur
`montre aiguille` : la famille des aiguilles perd **13 980**, qui sont des acheteurs de montres
analogiques. Et `boitier pour montres` (2 900) n'est pas une pièce du tout, c'est **une boîte de
rangement** : intention commerciale, KD 34 quand les boîtiers-pièce sont à KD 12, et un pluriel qui
trahit tout (on ne cherche pas un boîtier de rechange pour *des* montres).

**Pourquoi cette règle existe.** L'ordre des mots suffit à trancher, et il tranche proprement. C'est
le contrôle le moins cher du lot et celui qui rapporte le plus.

### 2. Rabattement orthographique

**Le contrôle.** Lire **la ligne que Google affiche en haut de page** : « Résultats, y compris pour
X. Essayez avec l'orthographe Y uniquement. » Quand elle apparaît, **la racine n'existe pas en
propre** : Google sert la même page 1 pour les deux.

**Ce que ça a coûté.** `montre plongeuse` était présenté comme la porte dérobée légale vers 13 540
recherches, la racine libre à côté de `montre de plongée` interdite d'écriture à 5 bar. Google rabat
`plongeuse` sur `de plongée`. **On ne peut pas se classer sur l'une sans se classer sur l'autre**,
donc l'allégation d'étanchéité revient par la SERP. La famille tombe de **13 540 à 1 910**, et de la
5ᵉ à la 16ᵉ place.

**Pourquoi cette règle existe.** Un raisonnement entier peut reposer sur l'existence de deux
requêtes séparées. Une ligne de texte en haut de la SERP dit s'il y en a une ou deux.

### 3. Mot générique contaminé

**Le contrôle.** Sur tout mot générique, lire **les recherches associées** et **qui tient la page 1**.
Trois contaminations connues : le rayon bricolage, le fournisseur professionnel, et le hors-sujet pur.

**Ce que ça a coûté.** `outil montre` (7 490, le gros de la famille) sert de la réparation grand
public à 4-30 €, et la page 1 est tenue par **Leroy Merlin, Conrad et le rayon bricolage**, avec
« Outil montre **Action** » en recherche associée. `outil horloger` sert du guide éditorial, du
fournisseur B2B d'atelier, et **des mots croisés** (« outil horloger 7 lettres » en recherche
associée). La famille passe de **9 600 à 3 100**, du 7ᵉ au 13ᵉ rang. Troisième cas, autre registre :
`ecrin montre` est de **l'emballage professionnel pour bijoutiers à 1,00 / 2,88 / 2,90 / 2,95 €**.
**1 440 retirés intégralement.**

**Pourquoi cette règle existe.** Un mot générique n'appartient à personne, donc il appartient déjà à
quelqu'un d'autre. Et une bande de prix à 4-30 € face à un plancher de ratio à 19,90 € ne laisse
aucune marge défendable, même si le volume est réel.

### 4. Marque cachée dans un mot générique

**Le contrôle.** Sur tout mot qui a l'air générique, **ouvrir la grappe et chercher la grappe de
marque à l'intérieur**. Elle ne se voit pas dans la tête, elle se voit dans la traîne et dans les
recherches associées.

**Ce que ça a coûté.** `bracelet milanais` a une grappe **Apple Watch** (Apple.com deux fois en
organique, un spécialiste Apple Watch, trois comparateurs) : **un tiers retiré**. `bracelet jubilé` a
une grappe **Rolex**. `montre field` est en réalité **Anna Field** (marque Zalando) et **Khaki
Field** (Hamilton) : la grappe entière fait 1 310, le net servable fait **environ 300**. Ce n'est pas
une collection.

**Pourquoi cette règle existe.** Ces mots passent tous les filtres de forme : ils sont français,
génériques, sans nom propre visible. Ils ne se détectent qu'en ouvrant la grappe, et ils faussent le
net de marque de l'étape 4, donc le classement des familles.

### 5. Intention de réparation prise pour de l'achat

**Le contrôle.** Regarder les **verbes** dans la grappe. `ouvrir`, `comment`, `démonter`, `changer`,
`remettre`, `dans quel sens` : ce sont des gens qui ont un problème, pas un panier.

**Ce que ça a coûté.** `boitier montre` (1 600) est dominé par `ouvrir` (223), `comment` (112),
`ouverture`, `visser`, `clipser`, `démonter`, `pile`, `joint`. C'est « comment ouvrir un boîtier de
montre pour changer la pile », pas l'achat d'un boîtier vide, lequel ne pèse que 27.

**Mais le contrôle a un revers, et il faut le connaître.** Sur Noirmont, la même lecture appliquée
aux remontoirs avait condamné la famille (« remontoir désigne aussi la couronne, le mot nu relève de
la réparation »). C'était **vrai en nombre d'expressions et faux en volume** : la réparation y pèse
**440 sur 34 250, soit 1,3 %**. La famille valait 33 670, pas 4 400. Et sur l'outillage, l'intention
de réparation **est** l'intention d'achat : `outil pour ouvrir une montre` est une requête d'achat
d'ouvre-boîtier.

**Pourquoi cette règle existe.** Compter des expressions n'est pas mesurer une demande. Le retrait
d'intention se **pèse en volume**, formulation par formulation, jamais à la louche.

### 6. Le KD mesure la densité, pas un verrou

**Le contrôle.** Ne jamais conclure sur un KD sans avoir **compté qui tient la page 1**. La question
utile est : combien de positions organiques sur dix ou sur vingt appartiennent à des marketplaces ?

**Ce que ça a coûté, dans le bon sens.** `boite a montre` est à **KD 35**, ce qui ressemble à une
porte fermée. Sur 20 résultats, **Amazon en occupe une seule en organique**. La page 1 appartient à
six boutiques françaises spécialisées, avec des Authority Scores de 23 à 24. Le KD 35 mesurait la
densité de spécialistes, c'est-à-dire une concurrence **de même nature que nous**. Porte difficile,
pas porte fermée, et c'est devenu la première famille de la boutique.

**Le contrôle marche aussi à l'envers.** `coffret montre homme` est à **KD 15**, ce qui ressemble à
un cadeau. La moitié de sa page 1 ne vend pas du rangement mais **une montre dans un écrin cadeau**
(bijouteries, 79-299 €). Le KD est bas parce que la requête est **ambiguë**, pas parce qu'elle est
facile.

**Pourquoi cette règle existe.** Le KD est un score agrégé qui ne dit ni qui occupe la page, ni dans
quel étage de prix, ni avec quelle intention. Trois choses que dix minutes de lecture donnent.

### 7. Les SERP AliExpress collent la note et les ventes

**Le contrôle.** Sur une page de résultats AliExpress, « 531 vendus » se lit **5,0 étoiles / 31
ventes**. La note et le nombre de ventes sont collés dans le même champ.

**Pourquoi cette règle existe.** Un chiffre de ventes gonflé d'un facteur 17 valide un fournisseur
qui n'a rien vendu. Règle générale qui en découle : **tout chiffre non confirmé en page produit est à
jeter**, et une donnée lue en SERP ne dépasse jamais le niveau de confiance B.

### 8. Le chiffre repris d'une passe précédente sans être revérifié

**Le contrôle.** Avant de réutiliser un volume écrit dans un document antérieur, **le remesurer**, ou
écrire d'où il vient et à quelle date il a été lu.

**Ce que ça a coûté.** `cadran arabe` a circulé à **15 500 recherches/mois** dans neuf documents
successifs, de fin juillet au 8 août : plan de krakenisation, sourcing, arborescence, décisions de
catalogue. Mesuré le 13/08, il vaut **20**. Le 15 500 était le volume de la grappe `seiko arabic
dial`, dont **chaque terme contient le mot « seiko »**, donc inutilisable sur la page d'arrivée.
**Le chiffre a piloté une semaine de décisions. Il était faux d'un facteur 750.**

**Pourquoi cette règle existe.** Un chiffre recopié devient vrai par répétition. Le seul remède est
de dater chaque lecture et de citer sa source à chaque reprise, y compris entre deux documents écrits
la même semaine.

---

## Trois contrôles de complément

Plus courts, issus des mêmes passes, et qui évitent trois erreurs coûteuses.

**Le mot ambigu qu'on n'a pas tranché se déclare, il ne s'arrondit pas.** `montre lunette` et
`montres lunettes` (640 ensemble) peuvent désigner des coffrets « montre et lunettes de soleil ». La
SERP n'a pas été ouverte : le rapport annonce une **fourchette de 1 300 à 1 970**, pas un chiffre.
Une fourchette honnête vaut mieux qu'un total faux.

**Le mot dont la chose existe mais qui est mal nommée.** Une sous-famille de quatre fiches avait été
condamnée parce que « rouleau de voyage » n'existe pas comme requête. C'était vrai du mot et faux de
la chose : le Français dit **« étui »**, et `etui montre` pèse 5 110. Rien à retirer du catalogue, un
mot à changer. Avant de condamner une famille pour absence de volume, chercher **comment le client la
nomme**.

**Le volume qui existe mais que la conformité interdit.** Trois cas rencontrés : « montre en argent »
là où c'est de l'acier couleur argent, « montre automatique française » pour une marque française
assemblée en Asie, « montre de plongée » sans boîtier 200 m. Le volume est réel, le mot est
inécrivable. Un mot-clé se valide sur **trois critères, pas un** : volume net, intention SERP, et
possibilité de l'écrire sans mentir.

---

## Ce que le livrable doit contenir

Un dossier daté, dans le répertoire de la boutique, avec au minimum :

1. **La liste des mots-clés dérivés du catalogue**, chacun rattaché à un produit ou une collection.
2. **Les mesures brutes par lots** : volume, KD, CPC, intention, date de lecture, base France
   confirmée.
3. **La consolidation par famille** : formulations retenues avec volume individuel, formulations
   retirées avec motif, brut et net de marque, planchers signalés comme tels.
4. **La vérification SERP** : par tête, ce que Google sert, l'intention, qui tient la page 1, la bande
   de prix observée, le volume retenu ou retiré avec son motif.
5. **La cartographie des concurrents** (agent `cartographie-concurrence`).
6. **L'arborescence proposée**, les trous d'offre et les surdotations chiffrés en recherches par
   fiche, et l'axe différenciant avec ce qu'on écarte et pourquoi.
7. **Ce qui n'a pas pu être mesuré, dit franchement.** Section obligatoire. Un dossier sans section de
   limites est un dossier qu'on ne peut pas relire dans un mois.

---

## Ce que cette méthode ne fait pas

- **Elle ne mesure pas du trafic.** Un volume de recherche n'est pas une prévision de visites, et la
  règle maison « trafic réel ≈ SimilarWeb × 3 » ne s'applique pas aux volumes DataForSEO.
- **Elle ne remplace pas le pipeline de recherche produit.** Le pipeline (`/recherche-produit`,
  `/chasse-clusters`, `/qualifie-idees`) décide **s'il faut lancer une boutique**. Cette méthode
  décide **comment on la construit** une fois la niche retenue. Les seuils chiffrés du pipeline
  restent dans `boutique-pipeline/PRODUCT-RESEARCH-CRITERIA.md`.
- **Elle ne tranche aucun cas limite.** Volume à ±20 % d'un seuil, données contradictoires, outil
  partiellement inaccessible : ça remonte à Hakim, comme partout ailleurs.

---

## Étape 9 — Fixer les prix : juste en dessous du comparable

Règle de Hakim, 14/08/2026. Vaut pour toutes les boutiques.

**Se positionner juste en dessous des concurrents qui vendent les mêmes produits que nous.**

Tout se joue sur la question « juste en dessous de qui ». Le repère est le **concurrent comparable**, jamais le plus cher de la page. On écarte trois catégories :

- les **marques officielles** (Seiko, Tissot, Citizen) : elles vendent une notoriété ;
- les **marques à récit** : Charlie Paris tient un palier à 445 € avec « Assemblée en France » dans le titre de ses dix fiches. S'aligner dessus, c'est s'aligner sur un argument qu'on n'a pas ;
- le **bas de gamme marketplace**, qui ne joue pas le même jeu.

Le comparable, c'est le même produit, la même gamme, **sans récit de marque**.

### Le piège : les bandes bimodales

Vérifié sur Noirmont. Sur `montre squelette`, la page 1 montre un socle à 25-300 €, un palier unique à 445 €, et **rien entre 300 et 440 €**. Se placer « juste sous le plus cher » donnait 429 €, en plein dans le vide. Le comparable était un indépendant à 285-295 €, donc une cible à 279 €.

**Un vide de marché n'est pas une place à prendre.** C'est un prix que personne ne pratique, parce qu'aucun argument ne le justifie à ce niveau.

### La marche à suivre

1. Relever les prix **en SERP et en Shopping**, jamais en estimation.
2. Classer les acteurs : marque officielle, marque à récit, indépendant comparable, marketplace. Ne retenir que les comparables.
3. Repérer les paliers et les vides.
4. Se placer juste sous le comparable, terminaison psychologique.
5. Examiner le ratio prix/CPC dans une même devise : 100 (cible 150–200) reste une heuristique de screening, jamais une preuve de rentabilité ; vérifier contribution et taux de conversion supposé.
6. Calculer la marge **sur la base HT** : prix TTC ÷ 1,2, moins le coût rendu fret compris, moins les frais de paiement (≈ 1,4 % + 0,25 €). Une marge calculée sur le prix TTC se raconte 20 % qui n'existent pas.
