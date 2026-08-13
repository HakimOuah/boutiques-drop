# Méthode d'analyse de marché et de concurrence

**Décision de Hakim, 14/08/2026. S'applique à chaque nouvelle boutique**, avant le sourcing, avant
l'arborescence, avant la moindre ligne de texte. Elle vaut aussi pour toute boutique existante qu'on
reprend en main.

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

Huit étapes, dans cet ordre. Chaque étape produit un livrable écrit et daté, parce que l'étape
suivante s'appuie dessus et que personne ne doit avoir à refaire la mesure de mémoire.

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

**Le piège.** La liste faite de tête ne contient que le vocabulaire du métier. Sur Noirmont,
`cadran stérile`, `cadran sans logo`, `cadran pilote` sont revenus **sans aucun volume restituable**.
Le mot « stérile » est un mot de spécialiste que le particulier français ne tape jamais. C'est la
règle mémoire « explicable-particulier, pas technique-pro », vue du côté de la mesure.

### Étape 2. Mesurer par lots

**Ce qu'on fait.** SEMrush **base France obligatoire** (`db=fr`), par lots de 100 mots-clés. On relève
pour chacun : **volume, KD, CPC et intention**. Deux outils, à choisir selon le besoin :

- **Analyse par lots** : précis, mais consomme des crédits de rafraîchissement (300 pour 300 mots-clés
  sur Noirmont) et son composant de saisie n'est pas toujours pilotable.
- **Keyword Magic Tool en « Expression exacte »** (`?q=…&db=fr&mt=phrase`) : rend **tous** les
  mots-clés contenant tous les mots de la requête, dans n'importe quel ordre, singuliers et pluriels
  confondus, accentués ou non, **100 lignes triées par volume et 0 crédit consommé**. C'est l'outil de
  l'étape 3, et 25 requêtes y ont couvert tout un catalogue.

**Ce qu'on produit.** Un tableau par famille : formulation, volume, KD, CPC, intention, date de
lecture.

**Le piège.** Trois lectures fausses guettent :

- **`n/a` n'est pas `0`.** `n/a` veut dire « sous le seuil de restitution », en pratique moins de 10
  recherches par mois. Pour une décision d'arborescence les deux se traitent pareil, mais on ne les
  écrit pas pareil.
- **Le quota épuisé rend des zéros silencieux.** Avant de croire un zéro, on vérifie que des témoins
  connus rendent bien leur volume habituel, et on regarde le compteur de crédits bouger.
- **La devise est en dollars.** Les CPC ne sont pas des euros. À 0,20 $ ça ne change aucun verdict, à
  2 $ ça en change.

### Étape 3. Consolider : la demande d'une famille est la somme des formulations qu'une même page sert

**C'est l'étape qui a multiplié les chiffres de Noirmont par 3 à 12.** On mesurait une tête par
famille. Or `montre squelette homme` 2 900 coexiste avec `montre squelette` 2 400, `montre homme
squelette` 1 600 et `squelette montre` 1 300 : ce sont **des recherches distinctes qu'une seule page
de collection sert**. La famille pèse 17 120, pas 2 900. Le rangement est passé de 11 000 annoncés à
**65 570**.

**La règle, en une phrase : on additionne ce qu'une même page servirait, et rien d'autre.**

| On additionne | On n'additionne pas |
|---|---|
| Les variantes d'écriture, d'ordre, de nombre et d'accent : `boite a montre`, `boite à montres`, `boite montre`, `montre boite` | Ce qui appellerait **une autre page** : `femme` sort de chaque total et se compte à part, parce qu'une collection femme est une décision d'offre, pas une variante d'écriture |
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

**Le second piège : le plancher de lecture.** Le Keyword Magic Tool rend 100 lignes par page. Si la
centième ligne est encore à 590 recherches, la famille n'est pas couverte et le total est un
**plancher**, pas un total. On l'écrit comme tel. Sur Noirmont, trois familles sur vingt étaient dans
ce cas.

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
  règle maison « trafic réel ≈ SimilarWeb × 3 » ne s'applique pas à des volumes SEMrush.
- **Elle ne remplace pas le pipeline de recherche produit.** Le pipeline (`/recherche-produit`,
  `/chasse-clusters`, `/qualifie-idees`) décide **s'il faut lancer une boutique**. Cette méthode
  décide **comment on la construit** une fois la niche retenue. Les seuils chiffrés du pipeline
  restent dans `boutique-pipeline/PRODUCT-RESEARCH-CRITERIA.md`.
- **Elle ne tranche aucun cas limite.** Volume à ±20 % d'un seuil, données contradictoires, outil
  partiellement inaccessible : ça remonte à Hakim, comme partout ailleurs.
