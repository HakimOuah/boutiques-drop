# Prompt — recherche de niche e-commerce France (benchmark inter-modèles)

> À coller tel quel dans ChatGPT. Remplacer les placeholders `<<...>>` avant envoi.
> Ne jamais versionner les valeurs réelles.

---

## Préalable sur les accès

Trois des outils de ce process demandent une session connectée à mes comptes :
**oneclickbrand.ai**, **TrendTrack** et **AliExpress**. Si tu ne peux pas les atteindre
toi-même, dis-le tout de suite et demande-moi les captures ou les exports au fur et à
mesure — ne devine jamais un chiffre que tu n'as pas vu, et ne remplace pas ces sources
par des estimations.

---

## Qui je suis et ce que je te demande

Je fais du dropshipping en France sur Shopify, avec Google Ads (Shopping + Search) comme
canal d'acquisition principal — pas Meta. J'ai déjà plusieurs boutiques en ligne.

Je te demande de conduire **une recherche de niche complète**, de l'idée jusqu'à un dossier
chiffré prêt pour ma décision, en suivant **exactement** le process ci-dessous. Tu ne
prononces jamais le GO final : c'est ma décision. Tu produis une recommandation technique.

Travaille en autonomie jusqu'au bout. Si une étape est bloquée, fais tout le reste et
dis-moi précisément ce qui manque et pourquoi.

---

## ÉTAPE 1 — Idéation

### 1a. OneClickBrand (OCB) — `app.oneclickbrand.ai`

**Onglet « Trend Niche »** (`/top-niches`). Base d'environ 800 niches France.

Filtres à disposition, tous en clair dans l'URL :
`?country=fr&per_page=50&page=N`, plus `category_id`, `volume` (faible/moyen/eleve),
`cpc`, `price_category` (`high_ticket` / `low_ticket`), `convergence` (= concurrence).

Ma recette : je filtre d'abord **high ticket + volume de recherche élevé**, pour avoir de
la marge. **Puis je repasse sans aucun filtre**, pour ne rien louper.

La table donne gratuitement, par niche : volume de la tête, score de concurrence sur 100
(plus bas = plus facile), CPC, bucket de prix, tendance en pourcentage.

⚠️ **Piège que j'ai vécu et que tu dois éviter.** Filtrer cette base sur le volume remonte
mécaniquement des **catégories de grande surface**. Sur 813 niches filtrées ainsi, mes cinq
finalistes étaient tous tenus par les GSB ou des marques installées. « Table de chevet »,
« jacuzzi », « brasero » ne sont pas des niches, ce sont des rayons.

**Ce qu'il faut faire à la place** : chercher dans la base les **sous-catégories**. Sur mes
813 niches, 340 étaient des entrées d'un seul mot (les catégories) et 473 multi-mots, dont
234 avaient leur parent présent dans la base — ce sont celles-là qui sont exploitables.
Bon signal de niche : **une tête de faible volume pour un univers bien plus large derrière**.

**Analyse d'une niche** : bouton « Analyser » → page `/niches/{id}/detail`. Elle rend la
trend, des idées de produits et **exactement 100 mots-clés** avec volume et difficulté.
C'est le « voir tout » de ma méthode.

**Quota** : consulter une niche **déjà analysée est gratuit** ; analyser une niche neuve
consomme 1 unité du quota mensuel « analyses approfondies » (50/mois). Une niche jamais
analysée renvoie la page sans aucun tableau. Relève le compteur avant et après.

⚠️ **Piège de mesure majeur.** La liste des 100 mots-clés est **permutée, pas
dédoublonnée** : la même requête y revient 4 à 8 fois dans un ordre différent, au même
volume. Exemple réel : `meuble coiffeuse maquilleuse` 590 · `coiffeuse meuble maquillage`
590 · `coiffeuse maquilleuse meuble` 590 · `meuble coiffeuse maquillage` 590. Additionner
tel quel compte la même demande quatre fois. **Regroupe par ensemble de mots trié, garde un
seul volume par groupe, et retire les requêtes de marque.** Sur mes mesures, le net vaut
~71 % du brut, et cet écart suffit à renverser un verdict.

### 1b. TrendTrack — `app.trendtrack.io`

C'est la source la plus productive, parce qu'elle part de **boutiques qui encaissent déjà**
et non du volume Google.

**Méthode 1 — onglet « Shops »**, filtres cumulés :

| Filtre | Valeur |
|---|---|
| Application Shopify | **Simprosys Google Shopping Feed** (inclure) |
| Pixels | **Google Ads Pixel** (inclure) **+ Meta Pixel (exclure)** |
| Pays visiteurs | **France en marché principal** |

Chez moi l'entonnoir donne : 2 126 733 boutiques → 32 518 → 1 094 → **59**. Les filtres
passent en paramètres d'URL, la vue est donc rejouable.

Pour chaque boutique intéressante, ouvre sa fiche et relève : **visites mensuelles et leur
évolution**, **nombre d'annonces Google Ads actives**, note et nombre d'avis Trustpilot,
nombre de produits, thème Shopify, pixels installés, **et le catalogue avec les prix**.

Puis descends dans **« Shops similaires »** et creuse **5 à 6 rebonds par boutique
trouvée** : c'est ce qui transforme une trouvaille isolée en preuve que la niche fonctionne,
et c'est aussi une source d'idées latérales.

Cherche les **familles où plusieurs boutiques indépendantes tiennent le même modèle** —
trois boutiques distinctes sur le même univers avec le même dispositif, c'est un signal
bien plus fort qu'une boutique isolée.

⚠️ **Ce filtre n'est pas étanche** : une des boutiques remontées affichait 387 annonces Meta
malgré l'exclusion du pixel Meta. Lis la colonne « Meta Ads » plutôt que de te fier au
filtre.

**Méthode 2 — onglet « Ads », plateforme Google.** Filtre **statut actif + actives depuis
120 jours minimum** (`status=active&minDaysRunning=120`), que tu peux croiser avec les
filtres Shop (Simprosys, France).

**C'est le signal de rentabilité le plus fort qui existe** : une annonce Google encore
diffusée après quatre mois est rentable, personne ne finance quatre mois à perte. Les
cartes d'annonce donnent directement la boutique, le produit et son angle. Chez moi, cette
vue a sorti un annonceur dont une annonce Shopping tourne depuis **496 jours**.

**Méthode 3 — recherche par mot-clé** dans l'onglet Shops : tape le mot-clé de la niche,
tu obtiens les boutiques positionnées dessus, leur trafic, leurs annonces Google et leurs
best-sellers. C'est ce qui étoffe le catalogue.

### 1c. Amazon

`amazon.fr/gp/bestsellers`. Pas d'indication précise : rassembler un maximum d'idées et
mesurer ensuite.

---

## ÉTAPE 2 — Mesure de la demande

Pour chaque idée retenue, construis une **arborescence à trois niveaux** :

- **Mot-clé principal** : la tête de la niche.
- **Mots-clés de collection** : chacun est un rayon de la future boutique.
  Exemple « chaise » → chaise enfant, chaise en bois, chaise table, chaise de jardin.
- **Mots-clés produit** : la longue traîne. Requêtes précises, volume plus faible,
  concurrence beaucoup plus accessible. Exemple → chaise enfant rose, chaise en bois
  confortable, chaise de jardin légère.

**Règle de sélection d'un mot-clé** : je le garde s'il peut devenir une collection ou un
produit de ma boutique, et si ce n'est pas un nom de marque. Cette seule règle évacue déjà
les villes, les services, l'occasion et l'informationnel — pas besoin d'une liste
d'exclusions.

**Seuil : 30 000 recherches/mois sur la somme tête + collections + produits.**

Mesure via OCB. Complète avec DataForSEO (France / français) pour les mots-clés absents
d'OCB, ou quand tu as besoin de vérifier la structure réelle d'un cluster.

⚠️ **Deux pièges en plus des permutations :**

**La polysémie de la tête.** Vécu : « coiffeuse » désigne aussi la professionnelle. Le
cluster réel était saturé de `planity coiffeuse` 49 500, `coiffeuse à domicile` 14 800 et
d'une trentaine de noms de ville. OCB ne le montrait pas, parce qu'il ne rendait que les
requêtes contenant à la fois « coiffeuse » et « meuble » — un îlot de phrase, pas un
marché. Dossier mort.

**La contamination de marque.** Chiffre toujours le poids des marques et des grandes
surfaces dans le cluster. Sur « coiffeuse », IKEA seul pesait 40 500 : rejet au titre du
critère §4. Sur « robinet », marques et GSB pesaient 30 000 sur 270 000, soit 12 % :
acceptable.

**Saisonnalité** : donne la courbe 12 mois et le rapport max/min. Un produit dont la fenêtre
d'achat est passée n'est pas un candidat pour le trimestre en cours. Repère vécu : sur mon
dossier, tout était entre ×1,2 et ×2,7 sauf `robinet extérieur` à ×5,03 — collection de
printemps, reléguée en secondaire.

---

## ÉTAPE 3 — Concurrence Google Shopping

**C'est l'étape décisive, et c'est là que je veux le plus de rigueur.**

Tape les deux ou trois requêtes principales sur Google Shopping France et **distingue
impérativement** :

- le **bloc « Produits Sponsorisés »** — les annonces payantes, c'est contre eux qu'on
  enchérit ;
- les résultats **organiques et « En magasin à proximité »** — décor, pas concurrence.

Pourquoi ça compte : sur « robinet cuisine », Leroy Merlin, Castorama, Brico Dépôt, IKEA et
Amazon sont partout dans l'organique et **totalement absents du bloc sponsorisé**, tenu par
une dizaine d'indépendants. La conclusion s'inverse selon le bloc qu'on regarde. C'était ma
crainte principale sur ce dossier, et c'est la mesure qui l'a levée.

Puis identifie les dropshippers parmi les annonceurs. Signaux, dans l'ordre :
1. le site est sur **Shopify** — quasiment 100 % des sites de drop le sont ;
2. **popup de réduction dès l'arrivée** sur la page produit ;
3. remise affichée (−20 %, etc.) ;
4. avis mis en avant ;
5. visuels manifestement générés par IA ;
6. blocs de réassurance appuyés : livraison offerte, paiement sécurisé, SAV réactif.
Une marque installée n'a pas besoin d'en faire autant.

Passe les annonceurs un par un jusqu'à avoir listé tous les concurrents. Puis **relève le
catalogue complet et les prix** des meilleurs : c'est le plan de mon propre catalogue.

Complète avec TrendTrack (méthode 3 ci-dessus) pour étoffer encore.

---

## ÉTAPE 4 — Prix

Fais la moyenne des prix pratiqués, pour avoir une idée du marché et pouvoir la mettre en
parallèle des prix fournisseurs. Ce n'est pas figé : le prix final se calcule avec mes
paramètres.

Ma règle de positionnement : **juste sous le comparable**, où le comparable est un
indépendant de taille voisine — **ni la grande surface, ni la marque officielle, ni une
marketplace**. Ne te place jamais dans un vide de marché.

---

## ÉTAPE 5 — Sourcing AliExpress

Uniquement AliExpress. Pars du **catalogue des concurrents** et des mots-clés de collection.

⚠️ **Piège de lecture qui coûte cher** : sur une liste de résultats AliExpress,
« 7 241 vendus » se lit en réalité **4,7 étoiles / 341 ventes** — la note et les ventes sont
collées. Je suis tombé dedans sur ce dossier. **Ne retiens aucun chiffre de ventes sans
l'avoir confirmé sur la page produit elle-même.**

**Recette de recherche** : le moteur trie par popularité globale, pas par pertinence. Un mot
fréquent te rend les best-sellers de la catégorie. **Deux mots rares et distinctifs, en
anglais.** Vérifié : `shower hose stainless explosion proof` (quatre mots) rend zéro
résultat, `shower hose epdm` (deux mots rares) rend huit fiches exploitables.

URL de recherche : `fr.aliexpress.com/w/wholesale-<mots-tirets>.html?SortType=total_tranpro_desc`

Pour chaque produit : titre, URL de la fiche produit (jamais une page de résultats), prix de
la variante visée, note réelle, ventes réelles, nombre de variantes, délai et frais vers la
France, coût rendu.

Indique ton **niveau de confiance** : A = page produit ouverte, B = liste de résultats,
C = titre seul. Ne présente jamais du B comme du A.

Le stock tendu et l'expédition depuis la Chine **ne sont pas éliminatoires** pour moi.
Signale-les, ne bloque pas dessus.

---

## ÉTAPE 6 — Marge et profondeur de catalogue

Pour chaque produit : marge brute = prix cible − coût rendu, et en % du prix de vente.
Puis le CPA supportable : CPC ÷ taux de conversion (prends 2 %), et ce qui reste par vente.

Je veux un catalogue de **300 à 400 références**. Tu n'as pas besoin de 400 fournisseurs :
une fiche AliExpress porte souvent 3 à 11 coloris, finitions ou longueurs, et chacun devient
une référence distincte. **45 à 50 fiches bien choisies, éclatées par variante, suffisent.**
Un concurrent que j'ai analysé affiche 670 produits pour 1 423 variantes.

N'oublie pas les accessoires et consommables à petit prix : ils font le panier moyen et
l'achat répété, et portent souvent les meilleures marges en pourcentage — j'ai relevé des
pièces à 0,91 € revendables 9,90 €.

---

## LIVRABLE — écrire dans mon Google Sheet

Classeur **« Niches SMP »**, un onglet par niche.

**Procédure d'écriture.** Le classeur expose une application web Apps Script protégée par
un jeton. Requête POST JSON :

```
POST <<URL_DU_PONT>>
{"token": "<<JETON>>", "ops": [ ... ]}
→ {"ok": true, "result": [ ... ]}   (un résultat par op, dans l'ordre)
```

Actions :
- `{"action":"read","sheet":"<onglet>","range":"A6:K80"}` → matrice de valeurs
- `{"action":"write","sheet":"<onglet>","range":"A8","values":[[...],[...]]}` → écrase à partir de la cellule
- `{"action":"clear","sheet":"<onglet>","range":"A8:K200"}` → vide, formules comprises
- `{"action":"duplicate","source":"🧩 MODÈLE","name":"<nom de la niche>"}` → crée l'onglet

⚠️ **Pièges du pont, tous vérifiés :**
- une **action inconnue renvoie `ok: true` avec un résultat vide** — vérifie toujours par
  une relecture après écriture, ne te fie jamais au seul `ok` ;
- un **nom d'onglet inexact** fait échouer la requête (réponse non-JSON) : les noms
  contiennent des emoji, lis-les exactement ;
- les **formules doivent être en anglais avec des points-virgules** :
  `=SUMIF(A1:A9;"x";D1:D9)` fonctionne ; la virgule et `=SOMME.SI(...)` échouent ;
- les **nombres s'envoient en nombres JSON**, pas en chaînes.

**Structure d'un onglet niche** (duplique `🧩 MODÈLE`) :
- ligne 2 nom · ligne 3 mode et statut · ligne 4 marché et date
- ligne 6 bande de synthèse : total, décomposé tête/collections/produits, seuil, verdict
  (formules automatiques)
- ligne 7 en-têtes · **données à partir de la ligne 8**

Colonnes : **A** Niveau (Mot-clé principal / Collection / Produit) · **B** Arborescence
(indentation visuelle) · **C** Mot-clé · **D** Volume/mois · E Seuil · F Verdict ·
**G** Lien AliExpress · **H** Prix AliExpress · **I** Prix cible · J Marge (formule) ·
**K** Notes et source.

Remplis **une ligne par mot-clé**, avec son volume, et **un lien AliExpress pour chaque
produit que tu imagines**. Puis inscris le nom exact de l'onglet en colonne A de l'onglet
index : le reste remonte par formule.

---

## Critères de sélection, non négociables

**Marché** France. **Prix de vente 50 à 400 € TTC** — un gadget à 15-20 € n'est pas un
candidat. **Client : le particulier, toujours.**

Un produit technique destiné au particulier est très bien. Ce qui est éliminatoire, c'est le
**technique-pro** : poste à souder, plieuse, presse. Signal d'exclusion immédiat, du
vocabulaire de métier dans le cluster (profession, chantier, devis, location, formation).

**Profil recherché**, une ou plusieurs familles : produit **explicable** qui demande
pédagogie et aide au choix · résout un problème précis et gênant · forte valeur perçue ·
offrable ou visuellement désirable · ameublement niché, transformable ou modulaire ·
permet bundles, accessoires, consommables, extensions de gamme.

**Différenciation obligatoire** : rejeter ce qui s'achète facilement en grande surface ·
rejeter les catégories tenues par IKEA, BUT, Conforama, Leroy Merlin, Castorama, Darty,
Decathlon, Brico Dépôt, Amazon ou équivalents · rejeter les marchés comparables uniquement
sur le prix. **Nuance** : s'inspirer d'un spécialiste déjà installé est une preuve que ça
marche, pas un motif de rejet — ce qui tue, c'est la densité, les grandes surfaces et
l'absence d'espace.

**Faisabilité** : marge suffisante pour financer Google Ads, CPC compatible avec le CPA,
sourçable sur AliExpress. Vigilance renforcée sur l'électrique, les produits enfants et
toute allégation de santé.

---

## Anti-doublon — ne me propose pas ça

Déjà traités, clos ou en cours : robinetterie · rideaux et voilages · carport · pergola ·
abri chat extérieur · poufs et bean bags · luminaires · bijoux gothique · bijoux viking ·
piercing nez · platine vinyle · handpan · chapelet · hijab · encens · bol tibétain ·
kalimba · tufting · pilates reformer · table de massage · station météo · robot pâtissier ·
château gonflable · trottinette électrique · poulailler · serre de jardin · parasol ·
lit cabane · machine à café portable · robot lave-vitres · cave à vin · meuble coiffeuse ·
couteaux de cuisine (AliExpress ne les livre pas en France) · bureau assis-debout ·
chaise gaming.

---

## Ce que je veux recevoir

1. Le **journal de ta recherche** : ce que tu as exploré, ce que tu as écarté et pourquoi.
   Les rejets motivés m'intéressent autant que le candidat retenu.
2. **Un candidat principal** instruit de bout en bout : demande chiffrée, concurrence
   Shopping, catalogue, sourcing, marge.
3. **L'onglet rempli** dans le Sheet.
4. Une **recommandation technique** — jamais un GO.
5. Tes **réserves** explicites et ton niveau de confiance par donnée.

Sois factuel. Si tu n'as pas pu vérifier un chiffre, dis-le au lieu de l'estimer. Une donnée
fausse présentée comme sûre me coûte plus cher qu'une donnée manquante.
