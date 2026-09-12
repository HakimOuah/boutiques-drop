# TrendTrack — passe Simprosys × Google Ads × sans Meta — 12/09/2026

Application de la recette TrendTrack du document Hakim du 12/09, bras « boutiques qui
vendent déjà » (par opposition au bras volume Google d'OCB).

## Recette et entonnoir

Onglet **Shops**, filtres cumulés :

| Filtre | Valeur | Shops restants |
|---|---|---:|
| — | aucun | 2 126 733 |
| Application Shopify | **Simprosys Google Shopping Feed** (inclure) | 32 518 |
| Pixels | **Google Ads Pixel** (inclure) + **Meta Pixel** (exclure) | 1 094 |
| Pays visiteurs | **France en marché principal** | **59** |

Les filtres passent en paramètres d'URL, la vue est donc rejouable :
`/shops?shopifyApps=<simprosys>&pixels=<googleads>&excludePixels=<meta>&market=FR=main`

53 des 59 lignes se sont chargées au défilement infini.

## Les 53 boutiques

| Boutique | Produits | Catégorie | Visites/mois |
|---|---:|---|---:|
| Chillow | 67 | Literie & Salle de bain | **127K** |
| Ciarra Appliances Global | 148 | Chauffage & Climatisation | **124K** |
| iSinWheel.fr | 306 | Cyclisme & Vélos | **113K** |
| mokingda | 25 000 | Types de véhicules | 86K |
| Panier Royale | 25 001 | Chaussures | 37K |
| Lunellda | 6 152 | Chaussures / généraliste | 35K |
| VARON-FR | 92 | Pathologies | 26K |
| Bbchoupette | 516 | Jouets éducatifs | 22K |
| TEKIN.STORE | 5 124 | Matériel informatique | 19K |
| Carplaygo | 60 | Véhicules / Électronique | 16K |
| BELMORIN PARIS | 1 420 | Tenue décontractée / Beauté | 14K |
| Lance-pierres.fr | 54 | Arts & Loisirs / Sports individuels | 13K |
| ecoledepatisserie-boutique | 896 | Cuisine & Recettes | 9K |
| Maison Mirela | 893 | Tenue décontractée / Beauté | 7K |
| SeidoShop International | 641 | Sports de combat | 7K |
| Wildscope | 254 | Électronique grand public | 6K |
| Mahaute | 1 537 | Tenue de soirée / Beauté | 6K |
| Rideaux Paris | 701 | Literie & Salle de bain | 5K |
| Yo Sac | 110 | Accessoires | 5K |
| Confortal | 17 | Chaussures / Pathologies | 5K |
| SensePro Toothbrush | 8 | Soins dentaires | 5K |
| VALMONT | 85 | Accessoires / Textiles | 4K |
| Foivo | 15 668 | Pièces auto | 4K |
| Lumio | 996 | Décoration intérieure | 3K |
| Facialiste.com | 171 | Services de beauté | 3K |
| Signature Mocassin | 159 | Chaussures | 3K |
| Luminaire Essenza | 183 | Literie & Salle de bain | 3K |
| Maison Yamato | 216 | Cuisine | 2K |
| Oscille | 37 | Mobilier | 2K |
| Boutique Chrétienne | 221 | Accessoires / Foi & Spirituel | 2K |
| Château Corset | 176 | Autres | 2K |
| Rideaux Maison | 182 | Décoration intérieure | 2K |
| Baraylis | 393 | Décoration intérieure | 2K |
| Plafonnier Univers | 123 | Autres | 2K |
| Yu-Meo | 4 728 | Antiquités & Collection / BD | 2K |
| OBERIAN | 35 | Mobilier | 2K |
| Crossbody Wear | 384 | Autres | 2K |
| Scandaleux Plaisir | 2 300 | Adultes & Lingerie | 1K |
| Conservationsousvide | 31 | Cuisine / Logistique | 1K |
| Popmypad | 231 | Mode femme | 1K |
| Mon Arche de Ballon | 38 | Articles de fête | 1K |
| Badogshop | 7 | Sur mesure & DIY | 1K |
| The Thruster | 98 | Adultes & Lingerie | 1K |
| City Sac | 330 | Accessoires / Textiles | 1K |
| Doux Peignoir | 5 277 | Pyjamas / Literie & Salle de bain | 1K |
| MVI Shop | 60 | Agriculture / Terrasse & Jardin | 1K |
| Old Money | 250 | Tenue de soirée / Beauté | 842 |
| Belle Plaque Funéraire | 158 | Sur mesure & Personnalisé | 574 |
| Metaphysical Store | 1 088 | Accessoires / Insolite | 379 |
| Le Lierre Artificiel | 42 | Décoration intérieure | 366 |
| Celine Rose | 25 | Accessoires / Beauté | 222 |
| Maison Cyclades | 172 | Art & Design / Décoration | 56 |
| Shinora Beauty | 28 | Beauté | 11 |

## Lecture — les familles où plusieurs boutiques indépendantes tiennent le même modèle

C'est le signal utile : une boutique isolée peut être un accident, trois boutiques
distinctes sur le même univers avec le même dispositif (Shopify + flux Simprosys +
Google Ads, sans Meta) valident le modèle.

- **Éclairage / luminaires — 3 boutiques** : Lumio (996 produits, 3K), Luminaire Essenza
  (183, 3K), Plafonnier Univers (123, 2K).
- **Rideaux — 2 boutiques** : Rideaux Paris (701, 5K), Rideaux Maison (182, 2K). Recoupe
  le dossier rideaux existant.
- **Décoration intérieure / mobilier de niche — 5 boutiques** : Baraylis, Oscille,
  OBERIAN, Le Lierre Artificiel, Maison Cyclades.
- **Chaussures — 4 boutiques** : Panier Royale (37K), Lunellda (35K), Signature Mocassin,
  Confortal (chaussures de confort / pathologies).
- **Sacs et accessoires portés — 4 boutiques** : Yo Sac, City Sac, Crossbody Wear, VALMONT.
- **Literie & salle de bain — 3 boutiques** dont Chillow à 127K.

## À creuser en priorité

| Boutique | Pourquoi |
|---|---|
| **Chillow** | 127K visites avec **67 produits seulement**, 4 ans d'ancienneté. Le meilleur ratio trafic/catalogue de toute la liste |
| **VARON-FR** | 26K avec 92 produits sur « Pathologies » (concentrateurs d'oxygène) : ticket élevé, produit explicable, mais allégations santé à vérifier (§3) |
| **Ciarra Appliances** | 124K, 148 produits, hottes de cuisine — univers d'électroménager encastrable, vendu en Shopping |
| **Lance-pierres.fr** | 13K avec 54 produits, 5 ans : univers de passion très étroit, zéro GSB |
| **Famille éclairage** | 3 boutiques indépendantes, catalogues de 123 à 996 produits — modèle reproductible et catalogue AliExpress profond |

Aucune analyse de boutique ni rebond « shops similaires » n'a encore été faite.

## Fiches ouvertes — 12/09/2026

Éclairage exclu sur décision Hakim (Lumière Matière déjà prête).

### Chillow — mychillow.fr — **piste retenue**

| Donnée | Valeur |
|---|---|
| Visites mensuelles | **127K, +388 %** |
| Ancienneté | juin 2022, 4 ans |
| Trustpilot | **4,7 sur 972 avis** |
| Google Ads actives | 39 |
| Meta Ads | 387 (malgré l'absence de pixel Meta détecté — le filtre n'est pas étanche) |
| Thème | Motion |
| Pixels | Google Ads, Google Analytics, Google Tag Manager |
| Produits | 67 |

**Ce n'est pas un univers, c'est un mono-produit avec écosystème.** Catalogue réel :

- Chillow Original **105 $**, Chillow Duo **189 $**, Chillow 100% PURE **212 $** — le phare et ses montées en gamme ;
- housses de rechange coton **37 $** et velours **48 $**, housse de rechange 52 $ — le consommable ;
- Chill'mask (masque de nuit) 37 $, Chill'plaid 74 $ — les accessoires d'univers ;
- **« Garantie à VIE » vendue 23 $** — l'upsell de panier.

Ticket 99–212 € : dans la fourchette 50–400 €. Produit sourçable sur AliExpress
(oreiller rafraîchissant / cooling pillow). Mode **PRODUIT PUR**, pas UNIVERS.

**Shops similaires — le marché est prouvé et massif**, mais international :

| Boutique | Produits | Visites/mois |
|---|---:|---:|
| Flo Mattress | 20 | 1.5M |
| **Derila** | **10** | **1.4M** |
| Nuzzle | 40 | 1.1M |
| Readsleepdigest | — | 917K |
| Vitapur | — | 606K |
| Sleepycat India | 87 | 605K |
| Comfy Sleepers | 128 | 506K |
| Cloudpillo | 95 | 439K |
| Coop Sleep Goods | 74 | 424K |
| Nelture | — | 364K |

Derila à 1,4M de visites avec **10 produits** est le mono-produit drop par excellence.
La densité de ce marché est à double tranchant : preuve de modèle d'un côté, occupation
de l'autre. Mesure DataForSEO France et cartographie de concurrence restent à faire avant
tout verdict.

### Reste à ouvrir

Les ~50 autres fiches de la liste filtrée. Les lignes du tableau ne portent pas de lien :
l'identifiant de fiche n'est accessible qu'au clic, il n'y a donc pas de raccourci
d'extraction en lot — chaque boutique demande son passage.

## Bras « Ads » — vue Hakim « Google Ads actives depuis 120 jours » — 12/09/2026

Source indiquée par Hakim. Vue sauvegardée `view=53&status=active&minDaysRunning=120`,
plateforme Google, croisée avec deux filtres du sous-onglet Shop :
**Simprosys Google Shopping Feed** + **France en marché principal**.

URL rejouable :
`/ads?platform=google&status=active&minDaysRunning=120&view=53&shopifyApps=<simprosys>&market=FR=main`

**Pourquoi cette source vaut mieux que la liste Shops** : une annonce Google encore active
après 120 jours est rentable — personne ne finance quatre mois de diffusion à perte. Le
filtre sélectionne donc des offres validées par la durée, pas des catégories à gros volume.
Et la carte d'annonce donne directement la boutique, le produit et son angle.

### Annonceurs relevés

| Annonceur | Pubs | Ancienneté des annonces | Impressions max | Ce qui est vendu |
|---|---:|---|---|---|
| **SHOPADVENTURE** | 270 | 123 à **226 jours** | **600K-700K** | Shopping + Search + YouTube, diffusion massive et continue |
| **BP IMPERIAL SA** → robineto.com | 40 | 123, 163, 321 et **496 jours** | 300K-350K | **Robinetterie** : kit WC douchette doré, robinet cuisine pivotant, robinet douchette à tête rotative, douchette WC thermostatique |
| **La Boutique du Bracelet** | — | en cours | — | Bracelets Apple Watch et bracelets personnalisés — « N°1 du bracelet personnalisé en France » |
| TKTX | 354 | — | — | Crème anesthésiante tatouage |
| ARRAJJ VENTURES | 65 | 120 j | 1K-2K | — |
| SHOPADVENTURE, DAUMAS ENZO, Mathieu Stanowski, BROTHER&SISTER UNITED LTD | 2 à 270 | 120 à 190 j | jusqu'à 125K | — |

### Piste principale sortie de ce bras — robinetterie (robineto.com)

Une annonce Shopping **active depuis 496 jours** est le signal de rentabilité le plus fort
qu'on puisse lire. L'univers est réel et se découpe naturellement en collections : robinet
de cuisine, robinet de lavabo, mitigeur, thermostatique, douchette WC, kit WC. Ticket
plausible 50–300 €, catalogue AliExpress profond.

**Réserve à lever avant tout travail** : Leroy Merlin et Castorama tiennent la catégorie —
c'est le critère §4. Mesure DataForSEO France obligatoire d'abord, avec lecture de la
polysémie et des marques, exactement comme sur le dossier coiffeuse.

### Limite technique rencontrée

La liste d'annonces est virtualisée : seules les cartes visibles existent dans le DOM, et
le filtre de l'extension Chrome bloque les extractions structurées dès qu'elles contiennent
des URL d'annonce. Le relevé se fait donc par tranches de texte et captures, pas en lot.

## Mesure robinetterie — DataForSEO France, 12/09/2026 (0,132 USD)

Graine `robinet`, témoin `tufting = 12 100` conforme avant et après.
1 000 lignes → 339 idées distinctes, 661 reformulations supprimées (66 %).

### Découpage du cluster

**1. Robinetterie de design — le marché adressable ≈ 136 000/mois**

`cuisine robinet` 27 100 · `robinet salle de bains` 18 100 · `robinet` 14 800 ·
`robinet thermostatique` 12 100 · `baignoire robinet` 8 100 · `douchette robinet` 8 100 ·
`douche robinet` 8 100 · `lavabo robinet` 4 400 · `robinet d'évier` 3 600 ·
`cuisine robinet douchette` 3 600 · `robinet wc` 3 600 · `douche robinet thermostatique`
3 600 · `robinet d'évier cuisine` 2 900 · `robinet laiton` 2 900 · `mitigeur robinet`
2 400 · `robinet lave-mains` 2 400 · `robinet mural` 2 400 · `robinet toilettes` 2 400 ·
`robinet encastré` 1 900 · `robinet lavabo salle de bains` 1 900 · `robinet cuisine
murale` 1 600.

*Précaution de lecture* : `thermostat robinet` 12 100 porte le même volume que
`robinet thermostatique` 12 100 — même bucket Google, compté une seule fois.

**2. Plomberie, pièces et réparation — hors marché ≈ 61 000**

Robinet extérieur/puisage 14 700 · machine à laver et lave-vaisselle 9 400 · robinet de
radiateur 9 500 · mousseurs, têtes, embouts, flexibles 17 400 · robinets d'arrêt,
flotteur de chasse, auto-perceur 8 100. C'est du SAV et du bricolage, pas de l'achat
de robinet.

**3. Contamination pure ≈ 43 000**

Filtration de l'eau 26 300 (`eau filtrée robinet` 18 100, `filtre à robinet` 4 400,
Brita 1 900) — autre produit. Noms propres et lieux 14 600 : `le robinet d'or restaurant
& bar canal saint martin` 5 400, `arnaud robinet` 4 400, `thomas robinet` 1 900,
`ria robinet` 2 900. Plus `cuve 1000l robinet` 2 400.

**4. Marques et GSB ≈ 30 000**

Grohe 14 120 · Leroy Merlin 12 520 · Quooker 3 600.

### Réponse à la crainte de Hakim

**Les marques et grandes surfaces pèsent ~30 000 sur un cluster total d'environ 270 000,
soit 12 %.** Le marché n'est pas capté par les marques au niveau de la recherche.
Comparaison utile : sur `coiffeuse`, IKEA seul faisait 40 500 sur un segment meuble bien
plus petit — c'est ce qui avait tué le dossier.

Verdict volume : **136 000 adressables contre un seuil de 30 000**, largement au-dessus.

**Nuance à ne pas escamoter** : une faible présence de marque *dans les requêtes* ne dit
pas qui tient l'enchère Shopping. Leroy Merlin et Castorama peuvent occuper le terrain
sans que personne tape leur nom. Cela se vérifie en SERP et sur Google Shopping, pas dans
un cluster de mots-clés — c'est l'étape suivante.

Contre-preuve empirique en faveur du dossier : **Robineto fait tourner une annonce
Shopping depuis 496 jours sur ce marché**. Un indépendant y est donc rentable malgré
les grandes surfaces.

### Analyse OCB non lancée

L'écran de confirmation s'affiche bien (`1 quota`, 40/50 restants) mais le bouton
« Lancer l'analyse » ne répond pas à mes clics — probablement parce qu'une analyse de
Hakim tourne en parallèle dans un autre onglet. Aucun quota consommé.

## Cartographie Google Shopping France — 12/09/2026

Requêtes `robinet cuisine` et `robinet salle de bain`, google.fr, gl=fr, navigateur Chrome
de Hakim. Aucun CAPTCHA.

### Le fait décisif : les grandes surfaces ne sont PAS dans le bloc payant

Le bloc **« Produits Sponsorisés »** de `robinet cuisine` est tenu par des indépendants :

| Marchand | Prix relevés | Occurrences |
|---|---|---:|
| Vita Habitat | 88,20 · 90,64 · 162,06 · 174,70 · 188,82 · 234,17 · 320,41 € | 7 |
| **L'art du robinet** | 54,90 · 79,90 · 99,90 · 99,90 · 164,90 € | 5 |
| **TOTS** | 99,00 · 109,00 · 109,00 · 139,00 € | 4 |
| Cuisissimo | 111,60 · 134,90 · 169,00 € | 3 |
| **Robinetti** | 139,00 € | 1 |
| **Ondavia** | 209,90 € | 1 |
| **Lumique** | 244,99 € | 1 |
| **Ostium** | 97,71 € | 1 |
| **Le Mitigeur** | 88,95 € | 1 |
| PlaneteBain · masalledebain.com · Aqua-Techniques · Asealia · Sklum · Hudson Reed · Sekelskifte · PaulGurkes · Cieléo · Bixoto · Comptoir des Pros · GGM Gastro | 49,90 à 573,95 € | 1 chacun |
| **AliExpress en direct** | **25,59 et 26,59 €** | 2 |

Leroy Merlin, Castorama, Brico Dépôt, IKEA, Weldom, Tecnomat, Screwfix, Darty, Cdiscount,
ManoMano et Amazon apparaissent **uniquement dans les fiches organiques et « En magasin à
proximité »**, jamais dans le bloc sponsorisé.

Même configuration sur `robinet salle de bain` : PlaneteBain, Tikamoon, masalledebain.com,
Robinetti, bass.fr, Hudson Reed, AliExpress — **aucune GSB dans le payant**.

**Conclusion sur la crainte de Hakim** : les mastodontes occupent l'organique et le
« en magasin », pas l'enchère Shopping. Les noms qui paient sont des marques de niche —
*L'art du robinet*, *Le Mitigeur*, *Robinetti*, *Ondavia*, *Lumique*, *Ostium*, *TOTS* —
c'est-à-dire exactement le modèle visé.

### Positionnement prix observé

- Entrée de gamme GSB : 30 à 70 € (Delinia, Essebagno, Cooke & Lewis, Huka).
- **Cœur du bloc payant indépendant : 90 à 250 €.**
- Haut de gamme marque : Grohe et Hansgrohe 130 à 195 € en GSB.
- Même produit sur AliExpress en direct : **25 à 27 €**.

Application de la règle « juste sous le comparable » : le comparable est Vita Habitat,
TOTS, L'art du robinet et Robinetti — **ni Leroy Merlin, ni AliExpress**.

## Robineto — robineto.com

Shopify. Menu : **Cuisine · Salle de bain · WC Toilettes · Extérieur**. Bandeau
« Livraison gratuite » et « −10 % avec le code BONPLAN10 » — signature dropshipping.

**670 produits, 1 423 variantes.** Prix : min 7,90 € · Q25 **54,90 €** ·
**médiane 89,90 €** · Q75 **149,90 €** · max 599,90 €.

Arborescence réelle, reconstituée depuis les types produit :

| Famille | Références |
|---|---:|
| Cuisine (robinet, mitigeur, mural) | **212** |
| Salle de bain (robinet, mitigeur, lavabo) | **162** |
| Colonne de douche | **88** |
| Douche (pommeaux, têtes, supports, flexibles, mitigeurs) | **75** |
| Extérieur et jardin | **45** |
| WC (robinet, douchette, toilette) | **28** |
| Baignoire | 11 |
| Accessoires évier et embouts | 32 |

Les accessoires à 7,90–20 € (embouts, flexibles, supports) servent le panier ; le cœur de
gamme est à 89,90 €, pile au-dessus de l'entrée GSB et sous Grohe.

**Cette arborescence recoupe exactement le cluster DataForSEO** : cuisine 27 100,
salle de bain 18 100, thermostatique 12 100, douchette 8 100, douche 8 100,
baignoire 8 100, lavabo 4 400, WC 3 600, extérieur 9 900.

## Sourcing AliExpress et remplissage du Sheet — 12/09/2026

Catalogue construit **depuis le catalogue concurrent** : arborescence Robineto
(670 références) croisée avec le cluster DataForSEO, chaque famille recevant les
mots-clés qui la portent.

Recherches AliExpress en mots distinctifs anglais, tri `total_tranpro_desc`, navigateur
Chrome de Hakim (les pages répondent, pas de CAPTCHA) : `pull down kitchen faucet brushed
gold`, `waterfall basin faucet matte black`, `thermostatic shower mixer brass`,
`bidet sprayer toilet brass kit`, `garden tap brass outdoor wall`.

**Niveau de confiance : B pour toutes les fiches** — relevé sur liste de résultats, sans
ouverture de page produit ni vérification de variante et de destination. Aucun coût rendu
France confirmé, aucun délai vérifié. Statut sourcing : `OFFRE TROUVÉE`, pas davantage.

### Coûts fournisseur relevés par famille

| Famille | Fourchette AliExpress | Prix cible retenu | Comparable Shopping |
|---|---|---|---|
| Robinet de cuisine | 53 à 125 € | 99 à 199 € | Vita Habitat 88–234 €, TOTS 99–139 € |
| Lavabo / salle de bain | 8,69 à 98,99 € | 39,90 à 149 € | L'art du robinet 55–165 € |
| Douche & thermostatique | 18,29 à 262,69 € | 49,90 à 399 € | Vita Habitat, PlaneteBain 129 € |
| WC & douchette bidet | 9,19 à 84,39 € | 39,90 à 149 € | — |
| Extérieur & jardin | 4,29 à 8,79 € | 19,90 à 29,90 € | — |
| Baignoire | **non sourcé** | — | — |

Prix cible posé selon la règle « juste sous le comparable » : le comparable est
Vita Habitat, TOTS, L'art du robinet et Robinetti — **ni Leroy Merlin, ni AliExpress**.

### Onglet « Robinetterie » du classeur Niches SMP

Créé depuis le gabarit, 30 lignes, **6 collections et 23 produits dont 21 avec lien
AliExpress**. Bande de synthèse : **total retenu 141 000** (tête 14 800 + collections
78 900 + produits 47 300), seuil 30 000, **verdict PASS**. Inscrit à l'index ligne 8.

**Correctif d'index appliqué** : les colonnes Seuil et Verdict de l'index lisaient les
cellules par ligne de l'ancien gabarit et revenaient vides. Elles pointent désormais sur
la bande de synthèse (`K6` et `M6`) par `INDIRECT`. Correctif posé sur la seule ligne 8 ;
à propager si Hakim valide.

### Ce qui manque avant un dossier complet

1. **Famille baignoire non sourcée** (8 100/mois) — recherche à faire.
2. **Aucune fiche vérifiée en niveau A** : variante, destination France, coût rendu et
   délai restent à confirmer fiche par fiche avant toute commande test.
3. **Google Trends** non consulté (la série DataForSEO 12 mois donne déjà la saisonnalité :
   tout est plat sauf `robinet extérieur` à ×5,03).
4. Marge contributive réelle non calculée — elle suppose les coûts rendus du point 2.

## Fiches ouvertes en niveau A et marge — 12/09/2026

**Les pages produit AliExpress s'ouvrent** dans le Chrome de Hakim (session connectée).
C'est un changement par rapport au constat du 04/09 sur le navigateur intégré.

### Erreur corrigée — le piège de concaténation

La fiche `1005006978313965` affiche en SERP « 7 241 vendus ». La page produit dit
**4,7 étoiles · 29 avis · 341 ventes**. Le « 7 » était la décimale de la note.
J'avais reporté ce chiffre tel quel : **toutes mes lectures de ventes issues de la SERP
étaient fausses** et ont été corrigées dans le Sheet. La règle du playbook s'applique
mot pour mot ; je ne l'ai pas appliquée la première fois.

### Marge sur les cinq fiches vérifiées

| Produit | Coût AliExpress | Prix cible | Marge brute | % du PV |
|---|---:|---:|---:|---:|
| Lavabo cascade inox noir | 23,79 € | 69,90 € | **46,11 €** | **66 %** |
| Mitigeur thermostatique douche/baignoire | 74,99 € | 139,00 € | **64,01 €** | 46 % |
| Robinet cuisine doré brossé SUS304 | 67,81 € | 129,00 € | **61,19 €** | 47 % |
| Robinet cuisine inox doré | 64,82 € | 119,00 € | **54,18 €** | 46 % |
| Robinet cuisine extractible à ressort | 54,39 € | 99,00 € | **44,61 €** | 45 % |

Marge brute TTC, avant TVA, retours et acquisition. Avec un CPC de 0,37 € sur
`cuisine robinet` et une conversion à 2 %, le CPA ressort à **18,50 €** : il reste
26 à 43 € par vente avant TVA. Le modèle tient.

### Données de livraison relevées (niveau A)

Toutes les fiches vérifiées sont en **livraison gratuite vers la France**, fenêtre
**17 au 26 septembre** soit 5 à 14 jours, plusieurs en **Choice avec Colissimo ou
Mondial Relay**. Retours gratuits 90 jours sur deux fiches, **15 jours seulement** sur
deux autres.

### Deux alertes

1. **Stock tendu.** « Seulement 4 restants » sur le robinet extractible, **« seulement
   2 restants »** sur le mitigeur thermostatique. Sur des fiches Choice à stock local
   mince, une campagne Shopping qui convertit épuise la source en quelques jours. Il faut
   soit doubler chaque fiche, soit privilégier les vendeurs à stock profond.
2. **Une fiche est morte** : `1005007099353268` renvoie 404. Retirée du Sheet.

### Profondeur de catalogue — comment atteindre 300-400 références

Le catalogue ne demande pas 400 fournisseurs distincts. Les variantes relevées en
niveau A :

- lavabo cascade : **11 coloris**
- robinet cuisine extractible : **8 coloris × 3 tailles de tuyau**
- robinet cuisine doré brossé : **4 coloris**

Le découpage d'une fiche AliExpress par variante est la pratique de la maison. **40 à 50
fiches fournisseur bien choisies, éclatées par coloris et finition, donnent 300 à 500
fiches Shopify** — c'est très exactement ce que fait Robineto avec ses 670 références
pour 1 423 variantes.

État du Sheet : **6 collections, 26 produits dont 24 avec lien**, 5 vérifiés en niveau A.
Il reste à porter le nombre de fiches fournisseur de 24 à ~45, puis à décider du
découpage par variante.

## Familles accessoires — sourcing et mesure — 12/09/2026

Catalogue calqué sur Robineto, qui consacre **191 de ses 670 références aux accessoires** :
88 colonnes de douche, 61 pommeaux et têtes, 17 embouts, 15 accessoires d'évier,
10 flexibles.

### Mesure du cluster `douche` (0,132 USD, témoin conforme)

Les accessoires ne sont pas dans la graine `robinet` : ils ont leur cluster propre.

**Retenu** : `colonne douche` **49 500** · `pomme à douche` **40 500** ·
`barre à douche` 9 900 · `pommeau douche anti-calcaire` 8 100. Soit **+108 000**.

**Écarté comme autre métier** (sanitaire et construction, pas robinetterie) :
gels douche 40 500, douche paroi 40 500, cabine à douche 33 100, douche à l'italienne
33 100, receveur 27 100, rideaux douche 22 200, porte de douche 12 100, bacs à douche
12 100, douche solaire 18 100, tabouret douche 8 100, douche-baignoire 14 800.
`robinets douche` 8 100 non recompté : même bucket que `douche robinet` déjà retenu.

### Sourcing des accessoires

| Famille | Coût AliExpress | Prix Robineto | Marge visée |
|---|---|---|---|
| Pommeaux et douchettes filtrantes | **1,96 à 9,29 €** (+5 000 à +10 000 ventes) | 23,90 à 99,90 € | **85 à 92 %** |
| Colonnes de douche | 43,66 à 293,69 € | 144,90 à 411,90 € | 60 à 70 % |
| Mousseurs et embouts 360°/720°/1080° | **1,76 à 5,89 €** (+10 000 ventes) | — | ~85 % |

Les cartouches de filtre à 7,49 € sont un **consommable** : achat répété, exactement le
critère de scalabilité du playbook.

Recherche `shower hose stainless explosion proof` : **zéro résultat** — quatre mots, la
règle des deux mots rares n'était pas respectée. Flexibles et accessoires d'évier restent
à sourcer.

## État du dossier au 12/09/2026

Onglet `Robinetterie` du classeur Niches SMP :

| | |
|---|---|
| Collections | **9** |
| Produits | **42** dont 38 avec lien AliExpress |
| Fiches vérifiées niveau A | 5 |
| **Total volume retenu** | **249 000** (tête 14 800 + collections 168 900 + produits 65 300) |
| Seuil | 30 000 |
| **Verdict** | **PASS** — ×8,3 |

**Stock et délais** : décision Hakim du 12/09 — ni le stock tendu ni l'expédition depuis
la Chine ne sont bloquants, on improvisera au lancement. Relevés conservés à titre
informatif dans les notes du Sheet.

### Reste à faire

1. Sourcer flexibles de douche, accessoires d'évier (bondes, paniers) et barre de douche.
2. Porter les 38 fiches fournisseur à ~45-50, puis **éclater par variante** : les fiches
   relevées portent 4, 8 et 11 coloris — 45 fiches éclatées donnent 300 à 500 références
   Shopify, le rapport même de Robineto (670 produits / 1 423 variantes).
3. Vérifier en niveau A les 33 fiches encore en niveau B.

## Flexibles et accessoires d'évier — 12/09/2026

| Famille | Coût AliExpress | Ventes | Prix Robineto | Prix cible |
|---|---|---|---|---|
| Flexibles de douche (inox, chromé, à ressort) | **3,19 à 7,89 €** | +500 à +600 | 14,90 à 21,90 € | 14,90 à 18,90 € |
| Paniers, crépines et filtres d'évier | **0,91 à 6,39 €** | **+4 000 à +10 000** | — | 9,90 à 19,90 € |

Le filtre de vidange anti-odeur à **0,91 €** revendu 9,90 € est un produit d'appel ; le
panier égouttoir à 2,54 € revendu 14,90 € tient une marge de 83 %.

Le flexible inox existe en **trois longueurs (1,5 / 2 / 3 m)** : une fiche fournisseur,
trois références Shopify. C'est le principe d'éclatement appliqué.

Recherche `shower hose stainless explosion proof` : zéro résultat (quatre mots).
`shower hose epdm` (deux mots rares) : 8 fiches exploitables. La règle tient.

## État final du dossier — 12/09/2026

| | |
|---|---|
| Collections | **11** |
| Produits | **50** dont 46 avec lien AliExpress |
| Fiches vérifiées niveau A | 5 |
| **Total volume retenu** | **258 900** (tête 14 800 + collections 178 800 + produits 65 300) |
| Seuil | 30 000 |
| **Verdict** | **PASS — ×8,6** |

Coût total de la mesure DataForSEO sur ce dossier : **0,40 USD** (graines `robinet`,
`douche`, plus `coiffeuse` sur le dossier écarté).

### Reste à faire

1. Vérifier en niveau A les 41 fiches encore en niveau B (page produit, variante,
   coût rendu).
2. Porter les 46 fiches fournisseur à ~50, puis éclater par variante : les fiches relevées
   portent 3 à 11 déclinaisons — l'objectif de 300-400 références Shopify est atteignable
   sans sourcing supplémentaire massif.
3. Mesurer les clusters propres `pommeau`, `flexible` et `évier` si l'on veut chiffrer
   leur apport (non compté dans les 258 900).
4. Google Trends avant tout GO.

## Passage en niveau A des 41 fiches — 12/09/2026

Les 41 fiches restantes ont été ouvertes une par une dans le Chrome de Hakim. Relevé par
fiche : note, nombre d'avis, ventes réelles, prix de la variante, fenêtre de livraison
France, durée de retour, nombre de variantes.

**Résultat : 45 fiches en niveau A, 1 inaccessible** (`1005007542492451`, la page ne charge
pas — à re-sourcer).

### Leçon de méthode — l'appariement prix/identifiant en SERP n'est pas fiable

Neuf prix relevés en liste étaient **faux**, parce que l'ordre des liens du DOM ne
correspond pas toujours à l'ordre visuel des cartes :

| Produit | Prix cru en SERP | Prix réel en fiche |
|---|---:|---:|
| Mitigeur lavabo mural | 98,99 € | **29,39 €** |
| Mitigeur baignoire mural | 37,79 € | **10,89 €** |
| Ensemble douche complet | 43,66 € | **96,69 €** |
| Panier de vidange d'évier | 6,39 € | **1,17 €** |
| Crépine d'évier | 2,13 € | **0,91 €** |
| Ensemble robinetterie douche | 103,39 € | 112,33 € |
| Flexible de douche chromé | 7,89 € | 6,59 € |
| Robinet extérieur laiton | 8,79 € | 8,01 € |
| Panier égouttoir | 2,54 € | 3,49 € |

Deux d'entre eux inversaient complètement l'économie du produit. **Conclusion : aucune
décision de marge ne peut reposer sur un relevé de liste.** Le niveau A n'est pas une
formalité.

### Marge après correction

**45 produits avec marge calculée, marge brute moyenne 40,64 €, aucune marge négative.**

### Livraison et retours (niveau A)

Toutes les fiches sont en livraison gratuite vers la France. Fenêtres relevées :
**14 au 27 septembre** pour l'immense majorité, soit 2 à 15 jours. Deux exceptions :
la colonne HOShower livre **16–25 octobre**, le robinet Aitana **25 sept–13 oct**.
Retours : 90 jours sur 28 fiches, 15 jours sur 11.

### Profondeur de catalogue — l'objectif est atteignable

**217 variantes cumulées sur les 40 fiches nouvellement vérifiées**, auxquelles s'ajoutent
celles des 5 fiches déjà en niveau A (11 coloris sur le lavabo cascade, 8 coloris × 3
tailles sur l'extractible, 4 sur le doré brossé…) : **environ 260 références Shopify**
avec le catalogue actuel.

Les fiches les plus profondes :

| Produit | Variantes |
|---|---:|
| Crépine d'évier inox | **22** |
| Filtre de vidange anti-odeur | **19** |
| Kit pulvérisateur bidet | **16** |
| Pommeau de douche haute pression | **16** |
| Flexible extensible à ressort · Panier de vidange | 12 |
| Pommeau pluie filtrant | 11 |
| Robinet mural + douchette bidet | 10 |

Pour atteindre 300-400, il manque une dizaine de fiches fournisseur supplémentaires —
pas un chantier de sourcing, une extension.

**Les liens AliExpress sont conservés en colonne G du Sheet, un par fiche fournisseur :
c'est ce qui alimentera DSers.**

## Extension du catalogue — 12/09/2026

Deux familles ajoutées d'après la structure de Robineto, **toutes les fiches ouvertes
directement en niveau A** (plus de lecture de prix en liste, après l'incident des neuf
prix faux) :

| Famille | Fiches | Coût | Ventes |
|---|---:|---|---|
| Supports et barres de douche | 4 | 1,30 à 4,79 € | +5 000 à +10 000 |
| Bondes et vidages de lavabo | 4 | 1,81 à 8,39 € | +1 000 à +2 000 |

Pièces les plus profondes ajoutées : bonde pop-up laiton **10 variantes**, support
universel pour barre coulissante **8 variantes**.

## État final du dossier robinetterie — 12/09/2026

| | |
|---|---|
| Collections | **13** |
| Produits | **58**, dont 53 avec lien AliExpress |
| **Fiches en niveau A** | **53 / 54** (une fiche inaccessible, à re-sourcer) |
| Marge brute moyenne | **40,64 €**, aucune marge négative |
| Total volume retenu | **258 900** |
| Seuil | 30 000 |
| **Verdict** | **PASS — ×8,6** |

**Profondeur de catalogue** : environ **290 références Shopify** à partir des variantes
déclarées. Ce chiffre est un plancher : il compte les variantes à vignette (coloris,
finitions) mais pas les propriétés sans image — le robinet extractible, par exemple, porte
8 coloris **× 3 tailles de tuyau**, soit 24 références à lui seul. L'objectif de 300-400
est donc atteint ou tout proche selon la règle de découpage retenue.

**Les liens AliExpress sont en colonne G, un par fiche fournisseur — c'est l'entrée DSers.**

### Reste avant décision

1. Re-sourcer la fiche inaccessible `1005007542492451`.
2. Google Trends sur `robinet` et `colonne douche` avant tout GO.
3. Décision humaine de Hakim : `GO_FINAL` / `WATCH_FINAL` / `NO_GO_FINAL`.
