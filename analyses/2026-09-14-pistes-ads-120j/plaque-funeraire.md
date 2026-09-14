# Reprise — Plaque funéraire personnalisée (14/09/2026)

## 1. État au registre

- **01/08/2026** — salve minage Brand Search : « Plaque funéraire personnalisée » qualifiée **niveau 0** (`boutique-pipeline/registre-candidats.md` L.441 + rapport `reports/qualification-express-brandsearch-2026-08-01.md` L.32) :
  - `plaque funeraire` 9 900 + `moderne` 1 600 + `personnalisé` 1 300 → total **59 320** (6 059 kw), seuil retenu **≥ 15 000**.
  - **KD têtes 58-62** — le KD le plus élevé de toute la salve du 01/08.
  - Réserve écrite à l'époque : « ticket moyen bas (GiFi présent) ; secteur sensible ; personnalisation à produire ».
  - Jamais approfondi depuis (ni SERP nettoyée, ni sonde prix, ni phase 2).
- **Note Codex** (`boutique-pipeline/codex-chasse-clusters/reports/validation-multimarche-brandsearch-20260720-200609-a1.md`, L.79 tableau + L.139 Trends) : « Plaque funéraire personnalisable » **FR 69 200 famille ; 7 860 explicite personnalisée**, preuve `plaquedeces.fr` (24 381 visites/mois à l'époque, prix moyen 100,71 USD), verdict **À CREUSER** : « le modèle repose sur personnalisation et fabrication locale, pas sur un simple produit générique AliExpress ». Trends FR `plaque funéraire` **+5,6 %** sur 52 sem.
- **Urne funéraire** (France) : **morte** en mesure express du 01/08 — volume 590, sous le seuil (registre L.60). Distinct de la ligne **« Urnes funéraires adulte + animal »** trouvée au registre en `PASS_PREQUALIFICATION` — celle-ci vient de la **recherche UK du 07/09/2026** (urn 18 100 + ashes/pet ≈ 17 000 → ≈ 26 000 plat, `TECHNICAL_PASS` sous réserve), **pas du marché France**. Ne pas confondre : aucune preuve d'urne funéraire exploitable en France.
- Univers bijoux personnalisés (31/08) : le dossier médaillon/collier photo est un CAS LIMITE (37 270), pas un PASS. Il documente en revanche le **parcours de personnalisation photo AliExpress** (SKU détourné type « Send me your picture », remarque DSers + URL photo, fabrication manuelle) — directement transposable à la lecture de plaquedeces.

## 2. plaquedeces.fr — fiche

**Identité (mentions légales, plaquedeces.fr/pages/mentions-legales) :**
- Propriétaire : **ADDAXA — SARL** au capital de 7 622,45 €, siège 2 cours Jean Jaurès, 38000 Grenoble. RCS Grenoble B 380 231 043, SIRET 38023104300056.
- **Code NAF/APE : 1812Z — « Autres activités d'impression (labeur) »**. Webmaster déclaré : **Imprimerie Armand**.
- ⇒ Ce n'est **pas un dropshipper** : c'est une société d'impression/gravure qui vend en direct via un site Shopify. Cohérent avec le contenu produit (voir §3).

**TrendTrack `search_shops` (exact) :**
- Créé le 10/04/2020 (site en ligne depuis ~6 ans).
- Trafic : 14 450 visites/mois (août 2026), en **repli** : 38 423 (mars) → 21 619 → 26 068 → 24 381 (juin, la valeur citée par Codex) → 20 058 → 14 450. Tendance baissière nette sur 6 mois (-62 % depuis mars).
- 99,2 % du trafic FR, 0,8 % ES.
- **Google Ads : 72 annonces actives, statut « available »**, reach déclaré 32,9 M — 90 annonces FR (23,9 M reach), 1 annonce BE. Mix plateforme : 87 Search, 10 YouTube, 9 Other, **5 Shopping**. C'est cohérent avec les « 79 annonces Google Shopping actives » citées en preuve du 14/09 (l'API TrendTrack ne segmente pas identiquement mais confirme une diffusion Search + Shopping large et active).
- **0 publicité Meta active**, pas de présence TikTok.
- Catalogue : **784 produits** indexés (confirmé par `products.json`, voir §3), catégorie Google « Gifts & Special Event Items ».

**Catalogue Shopify (`products.json` × 4 pages, 784 fiches uniques ; `collections.json`, 30 collections) :**
- Types de produits : 682 « Plaque funéraire » (vendor **Plaque deces** — gamme plexiglas maison), 79 « Plaque premium » (vendors **Plaquadom** et **PDC granit** — gamme granit/bronze), 10 « Médaillon » (céramique), 7 fixations, quelques options de service (maquette, relecture, priorité).
- Prix : 17 144 points de prix (variantes) — **médiane 87 €**, moyenne 88,2 €, P25 = 77 €, P75 = 92 €, plage 0–207 €. La gamme cœur (plexiglas, « Plaque funéraire » / vendor Plaque deces) tourne à **55-92 €** ; la gamme « Plaque premium » (granit/bronze, Plaquadom/PDC granit) à **107-149 €** ; les médaillons céramique seuls à **37-59 €** selon taille (8×6, 10×7,5, 12×9 cm).
- Matériaux identifiés en body_html : **plexiglas** (garantie 20 ans annoncée, épaisseur ~1 cm, résistance UV/gel/chocs), **granit** + **bronze/compobronze** (Plaquadom, PDC granit — pieds alu, inters PVC gravés ou bronze au choix parmi 25 modèles), **céramique** (médaillons photo, adhésif 3M ou sans fixation).
- **Fabrication déclarée** : « Fabriqué en France dans nos locaux de Grenoble par des artisans qualifiés » / « De fabrication française dans nos ateliers de Grenoble » (45 occurrences « Grenoble », 40 « atelier », 22 « artisan », 10 « fabriqué en France » dans les fiches).
- **Parcours de personnalisation** : « Maquette vérifiée par nos graphistes », « création rapide en 24h », option « Envoi par email de votre design en 24h (jours ouvrés) — jusqu'à satisfaction et validation de la maquette ». Option « Préparation prioritaire — expédition garantie en moins de 24h » et option « livraison en 48h gratuite ». ⇒ **flux artisanal avec épreuve/validation client avant fabrication**, pas un checkout automatisé.
- Collections notables (nb produits) : « Plaque en marbre avec nom et photo pour tombe » (701), « Plaque Columbarium » (460), « Médaillon funéraire » / ovale / rond / rectangulaire / cœur (18 chacun), « Plaque funéraire avec nom et date » (48), « … avec photo pour chien » (37), « … ancien combattant » (24, + Algérie 18), « … arbre de vie » (66), inters/interlignes 1 à 4 (35/88/30/4).

**Lecture : fabricant-graveur français, pas un revendeur/dropship.** Le trafic Search+Shopping actif (72 annonces) montre une acquisition payante réelle et soutenue malgré la baisse de trafic organique ; mais le modèle économique repose sur un atelier de gravure/impression local avec validation graphique manuelle — à l'opposé d'un sourcing AliExpress + DSers.

## 3. Pairs (TrendTrack `find_similar_shops`, limit 8, relevance)

Sur 340 boutiques proches au total (43 pages), les 8 premières — toutes ou presque françaises, univers plaques/médaillons funéraires :

| Boutique | Créée | Produits | Visites/mois (août) | Nature |
|---|---|---:|---:|---|
| didipic.com (LesPlaquesDesPetitsAnges) | 12/2023 | 172 | 0 | FR, catégorie « Gifts » |
| belle-plaque-funeraire.fr | 03/2022 | 158 | 574 (en baisse) | FR — gamme « Rectangle personnalisé », « Socle Granit », prix 30-69 € |
| lesplaquesdespetitsanges.com | 12/2023 | 172 | 4 580 (seul en croissance, +105 %) | FR/BE — 1 annonceur Meta lié (0 ads actives actuellement), catégorie « Sensitive Subjects » |
| xxldiydesign.ca | 08/2025 | 7 | 0 | CA — statues marbre générales, hors sujet funéraire direct (bruit de similarité) |
| deuil-fleuri.fr | 09/2021 | 413 | 1 139 (en baisse) | FR — **vend aussi « Médaillon porcelaine photo couleur ovale » à 74,80 €**, gamme large deuil (fleurs + plaques + inters dès 6 €) |
| personnalisation.france-tombale.fr | 11/2023 | 188 | 0 (a eu jusqu'à 1 955 en mars) | FR — même workflow que plaquedeces : « Option Maquette » 15 €, « Option Relecture » 5 € ; prix produit 79 € |
| laboutiquedespetitsanges.myshopify.com | 11/2019 | 389 | 0 | FR — domaine miroir de lesplaquesdespetitsanges.fr |
| lesplaquesdespetitsanges.fr | 11/2019 | 389 | 1 505 (en hausse, +14 %) | FR, 80 % trafic FR / 11 % CL / 9 % GB — gamme pied alu 24,90 €, plaque colombe 29 € (promo -80 %) |

**Lecture** : univers ancien et occupé (créations 2019-2023), **aucune de ces boutiques ne fait de publicité Meta active** et **aucune n'a d'annonces Google actives visibles via cette recherche** (seul plaquedeces en a). Le trafic organique du secteur est globalement **en déclin** (la moitié des pairs à 0 visite/mois), sauf deux boutiques en légère croissance. France Tombale et deuil-fleuri.fr confirment le même modèle « option maquette + relecture » que plaquedeces — **c'est le standard du métier**, pas une exception.

## 4. Faisabilité de la personnalisation — le cœur du dossier

### Modèle (a) — AliExpress « personnalisé » + échange manuel

Recherches SERP (`serp.fetch`, anglais, triées par ventes) : `memorial plaque custom photo`, `grave plaque personalized`, `ceramic photo grave`, `acrylic memorial plaque engraved`, `cemetery photo porcelain`, `gravestone photo oval ceramic`, `tombstone photo ceramic oval`, `memorial photo ceramic oval frame`, `engraved granite plaque memorial`, `plexiglass memorial plaque photo`. Les requêtes génériques (« memorial plaque », « acrylic… engraved ») remontent surtout du bruit (panneaux métalliques, cadres photo bois, porte-clés) — confirmation du biais de tri par popularité déjà connu (note mémoire). Les requêtes précises (« gravestone photo oval ceramic ») donnent des fiches pertinentes.

6 fiches vérifiées (`ae.variants`, confiance B — pas de prix/port FR confirmé car `exact` non testé faute de SKU connu) :

| Produit | Prix affiché | Ventes / avis | Boutique (pays) | Matériau déclaré | Personnalisation |
|---|---:|---:|---|---|---|
| Statue porcelaine pierre tombale, photo haute température (1005007402418056) | 10,99 € | 212 ventes / 96 avis, 4,8 | Wishfly (CN) | céramique | via message/chat vendeur |
| Pierre tombale ovale 3-6 po, photo elliptique céramique (1005007511631368) | 11,19 € | 53 ventes / 9 avis, 4,8 | Porcelana Manufacturada (CN) | céramique | texte fiche : « envoyez vos photos via la barre de dialogue, ou par mail à smtzjg@163.com » |
| Pierre tombale personnalisable céramique (1005006286742839) | 16,19 € | 28 ventes / 17 avis, 4,2 | Porcelana Manufacturada (CN) | céramique/porcelaine | texte fiche : « envoyez vos photos préférées… nous transformons en image porcelaine » |
| Plaque photo cœur, pierre gravée photo+texte (1005010340097192) | 10,69 € | 87 ventes / 55 avis, 4,7 | Umitive Custom (CN) | pierre reconstituée | option « personnalisé » en propriété produit |
| Plaque commémorative gravée, humains ou animaux (1005004577936079) | 69,99 € | 49 ventes / 26 avis, 4,9 | BILEEDA Official (CN) | acrylique | texte fiche : « laissez-nous un message avec les noms/dates en note de commande » |
| Photo céramique pour pierre tombale, cadre étanche (1005007480514701) | 19,29 € | 56 ventes / 56 avis, 4,7 | Wishfly (CN) | céramique | via message vendeur (photos produit uniquement, pas de description texte) |

**Constat confirmé sur pièce** : sur 3 fiches où le texte fournisseur est lisible, **les 3 décrivent explicitement un envoi manuel de la photo/du texte** (chat AliExpress, email dédié, ou note de commande) — exactement le schéma déjà documenté sur l'univers bijoux personnalisés (31/08) avec YILI/HAOHUPO (SKU détourné + remarque DSers + URL photo). **Aucune de ces fiches ne peut passer par un import DSers standard avec fulfillment automatique.** Ventes modestes (28 à 212), avis honorables (4,2-4,9) mais volumes faibles pour des fournisseurs CN génériques — rien à voir avec le SAV et la promesse d'une entreprise française identifiée (ADDAXA/Imprimerie Armand).

Aucune fiche granit/bronze gravé n'a été trouvée en équivalent direct AliExpress dans les recherches menées — cohérent avec le fait que la gamme premium de plaquedeces (Plaquadom, PDC granit) est un partenariat français, pas un sourcing chinois.

### Modèle (b) — atelier de gravure / print européen avec API

Aucun partenaire confirmé dans les sources disponibles (pas de recherche web menée dans cette mission, uniquement lecture locale + AliExpress + TrendTrack + Shopify catalogue public). **À vérifier** : existence d'un graveur laser B2B français proposant une API ou un flux commande→fabrication pour plaques plexiglas/céramique. Rien à ce stade ne permet de l'affirmer ni de l'exclure — ne pas construire de plan dessus sans validation.

### Modèle (c) — plaques non personnalisées / kit à personnaliser soi-même

Faisable en dropship classique (gravure déjà faite en usine, texte générique ou vide), mais cela sort du positionnement « personnalisée » qui porte tout le volume différenciant (7 860/59 320 du total mesuré) et l'image de service. Un modèle non personnalisé entre directement en collision frontale avec GiFi et la grande distribution déjà identifiés comme présents sur le ticket moyen bas (réserve du 01/08).

### Tableau de synthèse

| Modèle | Délai | Coût dropshipper | Qualité perçue | Risque SAV | Faisabilité DSers |
|---|---|---|---|---|---|
| (a) AliExpress + échange manuel photo | 2-3 semaines Chine (constat déjà noté sur bijoux : « avis 2-3 semaines CN, pas 5-9 j ») | 10-70 € pièce, marge large mais volumes fournisseur faibles | Céramique/porcelaine correcte sur avis (4,2-4,9) ; aucune preuve de tenue en extérieur cimetière long terme | **Élevé** : gravure/photo ratée sur un objet de deuil = réclamation gravissime, sans filet (pas d'atelier graphique côté Hakim, échange manuel non scalable, délai flou) | **Non** — nécessite un contournement manuel par commande, comme le parcours bijoux du 31/08 |
| (b) Atelier gravure/print européen avec API | Inconnu | Inconnu | Inconnue | Inconnu, dépend du SAV du partenaire | **À vérifier**, aucun partenaire identifié dans cette mission |
| (c) Plaque non personnalisée / kit auto-personnalisation | Standard dropship (Chine ou stock EU) | Faible | Correcte pour un article générique | Faible (pas d'erreur de gravure imputable au vendeur) | Oui, mais **hors du positionnement porteur de volume et perd l'avantage concurrentiel face à GiFi/plaquedeces** |

## 5. Sensibilité et conformité

- Produit de deuil : ton **vendeur, expert, rassurant**, jamais confessionnel (règle Hakim, charte Sous Abri 10/09) — aucune donnée absente à énoncer, aucun chiffre inventé.
- Délai critique : une cérémonie a une date fixe. plaquedeces communique une option « expédition garantie en moins de 24h » (payante) et une option « livraison 48h gratuite » — preuve que **l'urgence est un point de vente central du secteur**, pas un détail. Un modèle (a) sourcing Chine à 2-3 semaines est **incompatible** avec cette promesse sans stock tampon ou sans annoncer un délai réaliste distinct (donc sans la même compétitivité commerciale).
- Réglementation cimetières sur les matériaux : **aucun élément trouvé dans les sources consultées** (pas de recherche web effectuée dans le cadre de cette mission). Point explicitement laissé **« à vérifier »** — ne pas trancher dessus. À noter : le fait que plaquedeces propose des « pieds » et systèmes de fixation dédiés par typologie de monument (colonne, columbarium, marbre) suggère que ces contraintes existent et sont déjà gérées par le marché — mais ce n'est qu'une déduction, pas une preuve.
- Droit à l'image / consentement : personnalisation par photo d'un défunt — aucun cadre légal spécifique identifié dans les sources locales ; à traiter comme une réserve ouverte si le dossier avance.

## 6. Mots-clés (à faire mesurer par Hakim — aucun volume inventé)

**Déjà mesurés (registre / rapport 01/08, SEMrush France)** :
- `plaque funeraire` — 9 900
- `plaque funéraire moderne` — 1 600
- `plaque funéraire personnalisé` — 1 300
- `urne funéraire` — 590 (repère négatif, hors périmètre)

**Cités sans repartition détaillée (note Codex, famille/tête)** :
- Famille « plaque funéraire personnalisable » — 69 200 (FR, famille large)
- « personnalisée » explicite — 7 860 (FR)

**Non mesurés, à soumettre (têtes et collections, tirés du catalogue/collections réel de plaquedeces et des pairs)** :
- plaque funéraire personnalisée
- plaque tombale
- plaque décès
- plaque funéraire photo
- plaque cimetière
- médaillon funéraire
- médaillon photo tombe
- médaillon funéraire ovale
- médaillon funéraire rond
- plaque columbarium
- plaque marbre nom photo tombe
- plaque funéraire avec nom et date
- plaque funéraire avec photo pour chien
- plaque funéraire ancien combattant
- plaque funéraire arbre de vie
- plaque funéraire ardoise
- plaque funéraire granit
- plaque funéraire bronze
- socle plaque funéraire
- inter plaque funéraire
- fleurs plaque funéraire (accessoire)

(21 mots-clés au total avec les 4 déjà mesurés — dans la fourchette demandée de 15-25.)

## 7. Crédits TrendTrack consommés

- `search_shops` (exact, plaquedeces.fr) : 4 crédits.
- `find_similar_shops` (limit 8, relevance) : 36 crédits.
- **Total : 40 / 50 crédits alloués.**

## 8. Verdict

**Candidat à mesurer, mais uniquement sur le modèle (c) élargi d'un service de personnalisation propre — pas sur une réplique du modèle AliExpress pur.**

Motif : la demande est réelle et déjà qualifiée niveau 0 (59 320 au 01/08, famille élargie 69 200 avec 7 860 explicitement personnalisée, Trends FR +5,6 %). Mais l'acteur dominant identifié (plaquedeces.fr / ADDAXA, NAF 1812Z, Imprimerie Armand) **n'est pas un dropshipper** : c'est un fabricant-graveur français avec un flux artisanal (maquette → validation graphiste → gravure → expédition 24-48h). Les pairs les mieux installés (France Tombale, deuil-fleuri.fr) répliquent le même schéma « option maquette + relecture ». Le sourcing AliExpress vérifié sur pièce (6 fiches) confirme que la personnalisation y passe par un **échange manuel photo/texte non automatisable via DSers**, avec des fournisseurs CN à faible volume de ventes — un profil à haut risque SAV sur un produit de deuil (erreur de gravure = réclamation gravissime), sans les 24-48h de réactivité que le marché a établi comme standard.

**Recommandation opérationnelle si le dossier avance** : ne pas tenter de dropshipper la personnalisation photo depuis la Chine. Traiter le dossier comme un **UNIVERS de service** (impression à la demande + partenaire de gravure/impression européen ou français à identifier — modèle (b), non confirmé, à sourcer explicitement avant toute décision) plutôt que comme un produit dropship classique, ou se limiter à une gamme non personnalisée/accessoires (pieds, inters, fixations) en dropship pur — gamme qui existe déjà chez les pairs à 5-25 € (perd cependant l'essentiel du volume différenciant).

KD 58-62 (le plus élevé de la salve du 01/08) et un secteur historiquement occupé depuis 2019-2023 avec un acteur publicitaire actif (plaquedeces, 72 annonces Google) sont des freins supplémentaires à un entrant dropship pur.
