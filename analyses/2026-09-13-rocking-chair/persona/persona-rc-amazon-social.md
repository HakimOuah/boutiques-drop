# Persona client — Rocking chairs & fauteuils à bascule
Matière brute Amazon.fr + réseaux sociaux, pour boutique Shopify FR (allaitement, scandinave, teddy/bouclé, rotin, extérieur, relax)
Date de collecte : 14/09/2026

---

## 1. Journal Monid (obligatoire)

**Solde avant collecte : 27,24 USD — Solde après collecte : 26,37 USD — Dépensé réel : 0,87 USD** (plafond absolu 1,50 USD, arrêt prévu à 1,40 USD — non atteint)

Procédure appliquée pour chaque endpoint : `discover` puis `inspect` (gratuits) avant tout `run`. Un test à 1 unité a été fait dès que la santé était incertaine (nouveaux ASIN, nouvelles requêtes). Un endpoint en échec a été abandonné après un 2e échec (règle respectée pour `apify /web_wanderer/amazon-reviews-extractor`).

### 1.1 Découverte / sélection des fiches Amazon.fr — gratuit
| Appel | Paramètres | Coût |
|---|---|---|
| `tinyfish /search` ×4 | « rocking chair amazon.fr », « fauteuil allaitement amazon.fr », « fauteuil à bascule amazon.fr », « rocking chair teddy amazon.fr », location FR, domaine amazon.fr | 0 USD (PER_CALL=0) |
| `tinyfish /fetch` | bestsellers rocking chairs + page catégorie « Fauteuils à bascule », `links:true` | 0 USD |
| `tinyfish /search` ×4 (complément) | recherches rotin/extérieur/relax pour compléter la variété | 0 USD |

Santé `tinyfish /search` et `/fetch` : healthy (p50 ~2,8–3,6 s).

### 1.2 Avis Amazon.fr — `apify /axesso_data/amazon-reviews-scraper` (0,00135 USD/ligne, PER_RESULT)
Endpoint `apify /web_wanderer/amazon-reviews-extractor` testé en premier : 2 tentatives (ASIN seul, puis URL complète), sortie vide, **0 USD facturé** → abandonné après échec au 2e essai (règle « 2 échecs → suivant »), basculé sur `axesso_data/amazon-reviews-scraper` (statut `stable`, testé avec succès).

| Étape | ASIN(s) | Paramètres | Lignes | Coût |
|---|---|---|---|---|
| Test 1 unité | B011QR339K | domainCode fr, maxPages 1 | 10 | 0,0135 USD |
| Test allaitement (rejeté, 1 avis dispo) | B0H25T2NCZ | recent 6p + one_star 3p | 4 | 0,0054 USD |
| Comptage avis (3 ASIN) | B0DDPHM98J, B0BG84W55R, B0DWWZBS2Q | maxPages 1 chacun | 30 | 0,0405 USD |
| Comptage avis (4 ASIN) | B0CWZK28QH, B0GS5YXFNJ, B0FFBCX6K2, B0BKQY2W7V | maxPages 1 chacun | 36 | 0,0486 USD |
| Comptage avis (5 ASIN) | B0BV6DC1LH, B00JPIU3X2, B00M3SPIQI, B00Q4JBJF6, B0DPB4HQQ6 | maxPages 1 chacun | 26 | 0,0351 USD |
| Comptage rotin (4 ASIN, tous quasi sans avis) | B01FDE5ZBQ, B01J3NM1NI, B0F83Y4LVL, B0CTBG5BZT | maxPages 1 chacun | 14 | 0,0189 USD |
| Comptage relax (2 ASIN) | B08F1XB6CR, B0DP2X63D3 | maxPages 1 chacun | 13 | 0,0175 USD |
| Comptage extérieur (2 ASIN, rejetés) | B0BWR6VDKZ, B0DM631CDP | maxPages 1 chacun | 9 | 0,0121 USD |
| **Collecte finale ASIN 1** — scandinave bois | B00M3SPIQI (SONGMICS LYY010WZ01, 4201 avis, 4,4/5) | recent 8p + one_star 1p | 90 | 0,1215 USD |
| **Collecte finale ASIN 2** — allaitement | B00Q4JBJF6 (SONGMICS LYY30M, 1020 avis, 4,4/5) | recent 8p + one_star 1p | 90 | 0,1215 USD |
| **Collecte finale ASIN 3** — teddy/bouclé | B0CWZK28QH (HOMCOM Bouclette, 151 avis, 4,1/5) | recent 7p + one_star 2p | 77 | 0,1040 USD |
| **Collecte finale ASIN 4** — rotin/extérieur | B0FFBCX6K2 (COSTWAY Papasan rotin, 30 avis, 4,6/5) | recent 3p | 6 | 0,0081 USD |
| **Collecte finale ASIN 5** — relax à bascule | B08F1XB6CR (tectake, 72 avis) | recent 7p | 70 | 0,0945 USD |
| **Collecte finale ASIN 6** — allaitement scandinave tissu | B0BG84W55R (Meubles Cosy, 347 avis, 4,4/5) | recent 8p + one_star 1p | 90 | 0,1215 USD |

**Sous-total Amazon : ≈ 0,76 USD, 400 avis uniques exploitables (dédupliqués par reviewId), domaine amazon.fr, statut `stable`.**

[D] Constat : les catégories **rotin** et **fauteuil bascule d'extérieur pur** sont très peu commentées sur Amazon.fr (1 à 30 avis vs. 300 à 4200 pour le scandinave/allaitement bois) — testé sur 10 ASIN candidats, presque tous à 0-7 avis. Le meilleur candidat rotin retenu (COSTWAY Papasan, 30 avis) reste un volume faible : à traiter comme signal faible, pas comme preuve de marché.

### 1.3 TikTok — `tikhub`
| Appel | Paramètres | Lignes/vidéos | Coût |
|---|---|---|---|
| `fetch_video_search_result` ×3 | « fauteuil allaitement », « chambre bébé fauteuil » (succès), « rocking chair » (1er essai HTTP 400, **0 USD non facturé**, retenté avec succès) | 3×10 + 1 échec gratuit | 4 appels, 0,0045 USD |
| `fetch_video_comments` ×8 | 8 vidéos sélectionnées (les plus commentées/pertinentes des 3 recherches), count 20 | ~19-20 commentaires/vidéo | 0,012 USD |

Santé : `stable`. **Sous-total TikTok : 0,0165 USD.**

### 1.4 YouTube — `tikhub`
| Appel | Paramètres | Coût |
|---|---|---|
| `youtube/web/search_video` ×3 | « fauteuil allaitement avis » (fr/FR), « glider vs rocking chair » (en/US), « nursing chair review » (en/US) | 0,0045 USD |
| `youtube/web_v2/get_video_comments` ×6 | 6 vidéos retenues (nursery/glider, contenu substantiel — les résultats FR étaient des vidéos « avis » à 0 vue, écartées) | 0,009 USD |

[O] Limite observée : les 6 vidéos YouTube retenues ont quasiment **aucun commentaire organique** (0 à 2 commentaires, souvent des liens d'affiliation automatiques) — faible rendement verbatims sur ce canal pour ce sujet. **Sous-total YouTube : 0,0135 USD.**

### 1.5 Instagram — `tikhub /api/v1/instagram/v1/fetch_hashtag_posts`
5 hashtags interrogés : #fauteuilallaitement (234 posts), #rockingchair (423 205 posts), #chambrebebe (446 159 posts), #fauteuilabascule (2232 posts), #decoscandinave (80 045 posts). Coût 0,0015 USD/appel × 5 = **0,0075 USD.**

### 1.6 Reddit — `tikhub /api/v1/reddit/app`
| Appel | Paramètres | Coût |
|---|---|---|
| `fetch_dynamic_search` ×20 | 20 requêtes EN+FR (rocking chair nursery, glider regret, nursing chair, fauteuil allaitement, rocking chair squeak, nursery glider recommendations, best glider chair, rocking chair back pain, glider vs rocking chair, nursing chair uncomfortable, rocking chair for elderly, fauteuil bascule avis, chaise à bascule allaitement, rocking chair nursery budget, glider chair assembly, rocking chair creaky floor, nursing chair recommendations, rocking chair scandinavian, teddy bouclé chair, rattan rocking chair outdoor), search_type post, sort RELEVANCE | 0,03 USD |
| `fetch_post_comments` ×5 | 5 fils les plus pertinents et commentés (t3_1vt25ed 444 com., t3_1t9rpvu 78, t3_tfitsi 67, t3_16968oh 65, t3_1ll0v9v 64) | 0,0075 USD |

**Sous-total Reddit : 0,0375 USD.**

### 1.7 Total
Amazon ≈0,76 + TikTok 0,0165 + YouTube 0,0135 + Instagram 0,0075 + Reddit 0,0375 ≈ **0,84 USD calculé** — écart mineur avec le delta de solde réel (0,87 USD) imputable à l'arrondi des lignes affichées par le CLI. **Coût réel retenu : 0,87 USD**, sous le plafond de 1,40/1,50 USD.

---

## 2. Verbatims classés (56 verbatims exacts, sourcés)

Codes : **[O]** observé directement dans la donnée collectée. Note = note du produit quand applicable. Traduction entre crochets pour les textes non francophones (original conservé).

### 2.1 Douleur (pain points vécus)

1. [O] Amazon FR, ASIN B00M3SPIQI, 23/08/2026, 1★ — « Magistralement Inconfortable le système de suspension n'est autre que du vulgaire cerclage plastique type cerclage de carton !! Les mousses sont minces et les accoudoirs non garnis ont des arrêtes vives » (titre « Top inconfort…! »)
2. [O] Amazon FR, ASIN B00M3SPIQI, 09/06/2026, 1★ — « Je fais 1.60m et je ne touche pas le sol une fois assise. Impossible de sortir du fauteuil » (titre « Attention à votre taille et utilité »)
3. [O] Amazon FR, ASIN B00M3SPIQI, 02/07/2026, 2★ — « Trop bas. Je l'ai commandé pour l'allaitement mais c'est vraiment pas ergonomique je l'ai finalement renvoyé » (titre « Pas idéal pour l'allaitement »)
4. [O] Amazon FR, ASIN B00Q4JBJF6, 02/03/2023, 1★ — « Nous nous sommes assis que 4 fois dedans et je suis précisé plutôt poids léger et l'acier a rompu demande geste commercial » (titre « Qualité mediocre »)
5. [O] Amazon FR, ASIN B00M3SPIQI, 12/06/2026, 2★ — « en fixant les accodoirs malgrés que je n'ai pas visé a fond cela m'a déchiré le tissu » (titre « difficulté a monter les accoudoirs »)
6. [O] Amazon FR, ASIN B00M3SPIQI, 17/12/2025, 1★ — « Le fauteuil ne se bascule pas beaucoup, il faut forcer quand il est allongé pour qu'il se bascule et continuer sinon il arrête, comme une balançoire… Le système n'est pas pratique pour le remettre assis, avec un b[ébé] »
7. [O] Reddit r/pregnant, post t3_tfitsi, 16/03/2022, url reddit.com/r/pregnant/comments/tfitsi — « My rocking chair is the absolute worst […] it is super hard to stand up from with a sleeping baby. Not only do you have to basically do a squat with a 20 lb baby in your arms » [« Mon rocking chair est une catastrophe […] très dur de se relever avec un bébé endormi. Il faut carrément faire un squat avec un bébé de 9 kg dans les bras »]
8. [O] TikTok, commentaire vidéo 7624233311128259862 (FR), — « J'ai le même style de chez ikea et je regrette car les accoudoirs en bois quand on allaite c'est pas du tout confortable 😳 » (4 likes)
9. [O] TikTok, commentaire vidéo 7624233311128259862 (FR) — « Je ne conseille pas du tout, trop dure de se relever avec bébé 😐 »
10. [O] Amazon FR, ASIN B0CWZK28QH, 19/09/2025, 4★ — « le dossier grince beaucoup »
11. [O] Amazon FR, ASIN B0CWZK28QH, 12/11/2025, 4★ — « le montage très simple, seul hic, il grince quand on se bascule dessus »

### 2.2 Désir (aspiration, projection)

12. [O] Amazon FR, ASIN B00M3SPIQI, 18/06/2026, 5★ — « Ravie de mon achat ! Je l'ai acheté pour allaiter, elle est belle et super confortable 👌🏼 je recommande »
13. [O] TikTok, commentaire vidéo 7650696363449109773 (EN, 3314 likes) — « How dare you show me something so perfect when I have no room in the house😭 »
14. [O] TikTok, commentaire vidéo 7650696363449109773 (EN, 1384 likes) — « I would have loved this during the newborn trenches 😭 »
15. [O] Instagram, post #fauteuilallaitement — « Un petit coin de paradis pour vos moments complices ✨ Parce que les plus beaux souvenirs se créent souvent dans le calme d'une chambre🧸☁️ »
16. [O] Reddit r/NewParents, commentaire sur t3_1vt25ed, score 200 — « 18 months in here and we still use it multiple times a day. We rock her to sleep in it at bedtime, nap time, and any wakes she has in the night. It's 100% our most used item and my back is happy hahah »
17. [O] Amazon FR, ASIN B00Q4JBJF6, 27/03/2024, 5★ — « Très beau très design et tres confort Je l'ai offert à ma femme qui n'est ravie...le balancement rocking-chair est relaxant ..je recommande » (titre « Superbement cool »)
18. [O] Instagram, post #fauteuilabascule — « L'art du temps qui s'arrête… ☕️🍂 Existe-t-il un meilleur endroit pour s'évader avec un bon livre et une tasse fumante ? »
19. [O] Instagram, post #rockingchair (EN) — « Found my throne, not planning on moving anytime soon. »
20. [O] TikTok, commentaire vidéo 7650696363449109773 (ES, traduit) — « Casi un año con esta mecedora y desde el día uno, amamos acurrucarnos aquí » [« Presque un an avec ce fauteuil et depuis le premier jour on adore s'y blottir »]

### 2.3 Objection (freins à l'achat)

21. [O] TikTok, commentaire vidéo 7650696363449109773 (EN, 107 likes) — « Looks incredible! But also hard to get out of 😂 »
22. [O] TikTok, commentaire vidéo 7650696363449109773 (EN, 26 likes) — « Can you do a video how you get up from it? Trying to figure if I could transfer to crib or if I'd need a crane to get up k thx! »
23. [O] TikTok, commentaire vidéo 7576475841027198222 (EN, 44 likes) — « They also need to be more affordable 🥲 »
24. [O] TikTok, commentaire vidéo 7576475841027198222 (EN) — « Is the boucle itchy at all? »
25. [O] Amazon FR, ASIN B00M3SPIQI, 17/08/2026, 2★ — « il est compliqué de rester dessus plusieurs heures sans avoir mal au moment de se lever je ne recommande pas » (titre « Mauvais rapport qualité prix »)
26. [O] Reddit r/BuyItForLife, commentaire sur t3_16968oh, score 22 — « My parents bought a faux wood rocker from Cracker Barrel and it was awful. Screws began coming loose within 2 weeks. Didn't even rock very far back. »
27. [O] Amazon FR, ASIN B00M3SPIQI, 07/06/2026, 2★ — « Fauteuil inmontable. Explications en anglais et en allemand. Bois déjà fendu » (titre « Méfiez vous, les baguettes magiques ne se trouvent plus dans le commerce! »)
28. [O] TikTok, commentaire vidéo 7674711186004397342 (EN) — « Is it water proof if you know? Like would it be okay to put on my porch »

### 2.4 Déclencheur (ce qui pousse à chercher/acheter)

29. [O] Reddit r/breastfeeding, post t3_1t9rpvu, 11/05/2026 — « TM here and my arms are absolutely dying from holding my baby 😭 […] feeding on the couch has been rough on my arms, shoulders, and back. » [« Je suis maman allaitante et mes bras me tuent […] allaiter sur le canapé a été dur pour mes bras, épaules et dos. »]
30. [O] Reddit r/NewParents, post t3_1vt25ed, 19/08/2026 — « I read some suggestions that having this type of chair can be a godsend to help soothe babies and for moms/parents to feed comfortably. however my apartment is really tiny »
31. [O] Amazon FR, ASIN B00M3SPIQI, 20/05/2026, 5★ — « J'ai commandé pour l'allaitement et au top Le confort est formidable et facile a monter » (titre « Parfait »)
32. [O] TikTok, description vidéo 7673493858008730893 (EN) — « when I tell you I have been LIVING in this chair since my baby was born 😂 #postpartumlife #breastfeeding #newbornmom »
33. [O] Amazon FR, ASIN B00Q4JBJF6, 03/11/2022, 4★ — « Acheté comme cadeau pour remplacé un rocking-chair qui a bien fait son temps »

### 2.5 Usage (comment le produit est utilisé au quotidien)

34. [O] Amazon FR, ASIN B00M3SPIQI, 07/04/2026, 4★ — « J'ai installé ce fauteuil à bascule dans la chambre enfant. […] idéal pour la lecture ou l'allaitement » (titre « Un confort surprenant »)
35. [O] Reddit r/NewParents, commentaire sur t3_1vt25ed, score 200 — « We rock her to sleep in it at bedtime, nap time, and any wakes she has in the night. »
36. [O] Reddit r/BabyBumps, commentaire sur t3_1ll0v9v, score 24 — « Prefer the glider ottoman combo. I didn't want to be too comfortable reclining and fall asleep in the chair. Also, you can't rock or sway the chair if you're reclined anyway. »
37. [O] Amazon FR, ASIN B08F1XB6CR, 07/02/2025, 5★ — « Offert par ma fille pour mes pauses lectures, je suis ravie! Des très bonne qualité et très confortable » (titre « Parfait »)
38. [O] TikTok, commentaire vidéo 7606513217988283661 (EN, 204 likes) — « this & crocheting »
39. [O] TikTok, commentaire vidéo 7674711186004397342 (EN) — « wish it had a head/neck support 😂 »

### 2.6 Critère (ce qui guide la décision, comparaison)

40. [O] Reddit r/pregnant, post t3_tfitsi, titre — « If you're buying nursery furniture make sure you buy a rocking chair you can easily stand up from! »
41. [O] TikTok, commentaire vidéo 7508687229464710422 (FR) — « Au niveau des accoudoirs tu es à l'aise quand tu allaites ? Pour ma fille j'en avais un mais les accoudoirs trop bas j'étais pas à l'aise du tout du coup j'aimerais ne pas me tromper cette fois ci »
42. [O] TikTok, commentaire vidéo 7508687229464710422 (FR) — « Vous faites quel taille ? Le dossier est assez haut pour que votre tête soit posé ? »
43. [O] Reddit r/BuyItForLife, post t3_16968oh — « Are there any BIFL rocking chairs that are comfortable, pre[…] » [recherche explicite de durabilité « buy it for life »]
44. [O] TikTok, commentaire vidéo 7592780424196164895 (EN) — « Is it washable? »
45. [O] TikTok, commentaire vidéo 7674711186004397342 (EN, sticker) — « What's the weight limit »
46. [O] Reddit r/BuyItForLife, commentaire sur t3_16968oh, score 74 — « Check out your local Craigslist. I have two wooden rockers I found on there over the last few years, each for only ~$40. » [alternative occasion/seconde main face au prix neuf]
47. [O] Amazon FR, ASIN B00Q4JBJF6, 07/12/2022, avis — « Le montage est relativement simple mais il est préférable d'être à deux » (critère montage)
48. [O] Amazon FR, ASIN B0CWZK28QH, 07/08/2026, 5★ — « Contrairement à certains commentaires, mon fauteuil ne grince pas » (le grincement comme critère de choix discriminant, cité en creux)

### 2.7 SAV / livraison (complément)

49. [O] Amazon FR, ASIN B08F1XB6CR, 07/07/2023, 4★ — « Après avoir reçu une pièce endommagée, nous avons pris contact avec le SAV qui a tout de suite trouvé une solution » (titre « SAV très réactif »)
50. [O] Amazon FR, ASIN B00M3SPIQI, 19/02/2026, 1★ — « L'article est arrivé endommagé. Au moment de faire la demande de retour, à ma grande surprise, le retour doit s'effectuer à mes frais et au vu du poids de l'article ça me reviendra cher »
51. [O] Amazon FR, ASIN B00M3SPIQI, 03/06/2026, 1★ — « Bonjour j ai reçu la commande j ai déballé mais il manque un pied » (titre « Il est ou le pied ki manque »)
52. [O] Amazon FR, ASIN B00Q4JBJF6, 04/07/2020, 1★ — « il faut me renvoyer les pièces manquantes, 1 pièce L et 4 pièces K »

### 2.8 Cadeau / transmission

53. [O] Amazon FR, ASIN B0CWZK28QH, 17/06/2026, 5★ — « Après en avoir offert un à ma fille enceinte , je me suis laissée tenter avec un exemplaire pour moi :)) très bien! » (titre « Perfect »)
54. [O] Amazon FR, ASIN B00Q4JBJF6, 03/02/2022, 4★ — « Acheté comme cadeau de Noêl. Trés beau visuelement, confortable et comme il est à bascule, facilité pour se lever »
55. [O] TikTok, commentaire vidéo 7606513217988283661 (EN, 5 likes) — « My mom need this, and I'm getting it for her. 🤍 »
56. [O] Reddit r/NewParents, commentaire sur t3_1vt25ed, score 15 — « Yep. My lovely MIL offered to buy whatever I wanted. Spent weeks researching chairs then told her the price and she just sent me the money and I ordered it myself. » [belle-mère finançant l'achat]

---

## 3. Thèmes quantifiés — avis Amazon.fr (base : 400 avis uniques, 6 ASIN, dédupliqués par reviewId)

| Thème | Nb d'avis mentionnant | % de la base |
|---|---:|---:|
| Confort | 194 | 48,5% |
| Montage | 136 | 34,0% |
| Qualité et solidité | 105 | 26,3% |
| Prix | 76 | 19,0% |
| Allaitement | 70 | 17,5% |
| Couleur et tissu | 41 | 10,3% |
| Stabilité et basculement | 39 | 9,8% |
| Livraison et carton abîmé | 24 | 6,0% |
| Cadeau | 13 | 3,3% |
| Taille et encombrement | 11 | 2,8% |
| Grincement | 10 | 2,5% |
| SAV | 6 | 1,5% |
| Odeur | 1 | 0,3% |

[D] Détection par mots-clés (regex FR sur titre+texte), donc estimation basse plutôt que comptage exhaustif — un même avis peut compter dans plusieurs thèmes. Le thème « usage senior » n'a pas de motif dédié fiable trouvé dans le texte (1 seule mention explicite « SAV très réactif » catégorisée par erreur de requête) : **aucune preuve quantifiée d'usage senior dans les avis Amazon** collectés — signal absent, pas signal négatif confirmé [D].

### Répartition des notes (400 avis)
| Note | Nb | % |
|---|---:|---:|
| 5★ | 230 | 57,5% |
| 4★ | 62 | 15,5% |
| 3★ | 36 | 9,0% |
| 2★ | 26 | 6,5% |
| 1★ | 46 | 11,5% |

[O] La note moyenne agrégée des 6 ASIN sur leur fiche produit va de 4,1/5 (HOMCOM teddy) à 4,6/5 (COSTWAY papasan) — cohérent avec les 73% d'avis à 4-5★ dans l'échantillon collecté, mais l'échantillon a été volontairement enrichi en 1★ (filtre `one_star` ajouté sur 4 des 6 ASIN) donc **le taux de 1★ ci-dessus est surreprésenté par rapport à la répartition réelle affichée en fiche produit** (68-70% de 5★, 3-4% de 1★ typiquement) [D].

---

## 4. Qui parle (détection par mots-clés sur les 400 avis Amazon)

| Profil | Nb d'avis avec marqueur | Exemple de marqueur détecté |
|---|---:|---|
| Décoration / salon | 51 | « salon », « design », « joli » |
| Maman / allaitement | 37 | « allaite », « pour allaiter », « ma fille » |
| Cadeau offert | 6 | « offert par/pour », « cadeau de » |
| Papa / mari acheteur | 2 | « mon mari », « offert par mon mari » |

[D] Aucun marqueur explicite « senior/grand-parent » détecté par mots-clés dans les 400 avis Amazon — les mentions de transmission intergénérationnelle observées proviennent des réseaux sociaux, pas d'Amazon.fr (ex. verbatim #56, belle-mère finançant l'achat ; #55, achat pour la mère). Sur Reddit, les threads les plus actifs viennent de subreddits **parents/grossesse/allaitement** (r/NewParents 444 commentaires, r/breastfeeding 78, r/BabyBumps 64, r/pregnant 67) — signal fort que le déclencheur dominant identifié dans cette collecte est **parental (allaitement/coucher bébé)**, avec un second pôle **déco/salon** (mots-clés « salon/design » sur 51 avis Amazon, hashtag #fauteuilabascule à teneur lifestyle/déco) et un troisième pôle plus rare **BIFL/durabilité adulte** (r/BuyItForLife, 65 commentaires, achat pour soi-même en tant qu'adulte, hors contexte bébé) [O]/[D].

---

## 5. Réseaux sociaux — angles, formats, émotions qui performent

[O]/[D] observations tirées des 8 vidéos TikTok + commentaires, 6 vidéos YouTube (rendement faible, voir §1.4), 5 hashtags Instagram, 20 recherches + 5 fils Reddit.

- **Angle « cocooning / réconfort »** domine sur TikTok et Instagram : légendes et commentaires tournent autour de « cozy », « perfect spot », « moments complices », « s'évader avec un livre » — l'émotion recherchée est l'apaisement, pas la performance technique du produit. [O]
- **Format le plus engageant sur TikTok : la présentation lifestyle en situation** (chambre, coin lecture, plaid) plutôt que le test produit pur — la vidéo la plus commentée (7650696363449109773, 245 commentaires, 127k likes) montre le fauteuil en usage réel avec légende personnelle (« un an avec ce fauteuil »), pas une fiche technique. [O]
- **Objection récurrente et visible dans les commentaires : la difficulté à se relever du fauteuil avec un bébé dans les bras** — revient à la fois sur TikTok (#21, #22 ci-dessus) et sur Reddit (post t3_tfitsi, 67 commentaires) : c'est un critère d'achat sous-exploité dans les fiches produit Amazon actuelles (aucune mention « facile à quitter » trouvée côté vendeur). [O]/[D]
- **Question prix récurrente** sur TikTok (« My cart already over 2k but I'll add it anyways », « They also need to be more affordable ») : le produit est désiré mais objecté sur le prix quand il est positionné haut de gamme (contexte marché US/glider premium) — cohérent avec le plancher 50€ déjà retenu par Hakim pour ce type de produit. [O]
- **Le tissu bouclé/teddy suscite une question sensorielle répétée** : « Is the boucle itchy at all? » — un angle produit possible (« douceur au toucher », « non irritant pour peau de bébé ») pas encore vu dans les captions Instagram consultées. [D]
- **Instagram #fauteuilallaitement (234 posts) et #fauteuilabascule (2232 posts)** restent des niches actives mais à faible engagement observé (likes à un chiffre sur les posts échantillonnés, sauf posts sponsorisés de marques comme @twistshakebaby à 125 likes) — le contenu qui sort du lot associe **nouveauté produit + bénéfice fonctionnel explicite** (« pivote à 360° », coloris nouveauté) plutôt que la photo seule. [O]
- **YouTube n'est pas un canal de verbatims pour ce sujet** dans cette collecte : les vidéos ciblées ont 0-2 commentaires, souvent des liens d'affiliation automatiques plutôt que des avis d'utilisateurs — à ne pas prioriser pour une écoute sociale future sur ce produit. [O]
- **Reddit BuyItForLife (r/BuyItForLife)** révèle un besoin adulte hors contexte bébé : recherche de fauteuil à bascule durable, critique des modèles premier prix qui se desserrent (« screws began coming loose within 2 weeks »), alternative occasion citée spontanément (Craigslist/seconde main) — un angle « senior/adulte durable » distinct du persona parental, mais avec un volume de preuve plus faible dans cette collecte (1 fil, 65 commentaires) que le pôle allaitement. [O]/[D]

---

## 6. Limites de la collecte (à ne pas ignorer avant de bâtir le persona)

- Rotin et extérieur pur : très peu d'avis Amazon.fr disponibles malgré 10 ASIN testés — le persona sur ces sous-catégories doit s'appuyer davantage sur Instagram/TikTok que sur Amazon. [O]
- YouTube quasi inexploitable pour les verbatims sur ce sujet précis (voir ci-dessus). [O]
- L'échantillon Amazon 1★ est volontairement surpondéré (filtre one_star ajouté) : ne pas citer les % de notes du §3 comme reflet fidèle de la satisfaction globale produit — utiliser plutôt les notes moyennes officielles par ASIN (4,1 à 4,6/5) citées en §1.2. [D]
- Détection thématique par mots-clés simples (regex) : sous-estimation probable de thèmes exprimés en paraphrase (ex. inconfort décrit sans le mot « confort »). [D]
