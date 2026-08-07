# ⌚ Montres Seiko Mod (Q4) — NOIRMONT

- **URL Notion** : https://app.notion.com/p/3a71f38c315481979cbfc1556049a1d9
- **Date d'export** : 07/08/2026
- **Base** : Boutiques (BTQ-2, statut « En construction », URL : https://maisonnoirmont.fr)

---

> **Source de vérité : fichiers locaux** `/Users/Hakim/Documents/Boutiques drop/boutique-pipeline/boutique-seiko-mod/` et `reports/phase4*.md`. Cette page est le dashboard.

## Décisions & état (24/07/2026)

- Cas limite du registre (vol. ≈ 17 600–20 000/mois) instruit en phase 4 sur décision Hakim → phases **4, 4b, 4c faites**, 4d (accessoires + SKX) en cours.
- **Deux offres** : (1) montres mod assemblées stériles en dropship ; (2) configurateur « sur mesure » — différenciateur, conditionné aux réponses vendeurs.
- **Messages vendeurs envoyés par Hakim le 24/07** (Corgeut Factory Store + BL Watches Parts Store) : config libre possible ? prix/délai ? logos sur cadrans ? → **en attente de réponses**.
- Garde-fou : **jamais de vente de pièce/montre logotée** (Seiko/couronne) — réplication esthétique en 100 % stérile (même coût, cf. 4c).
- Configurateur : **codé maison** (décision Hakim — pas Kickflip) ; prix unique envisagé 349 €. **Visuels des pièces : génération Higgsfield** (décision Hakim, à faire en temps voulu).

## Concurrents analysés

| Site | Modèle | Prix | Note |
|---|---|---|---|
| montreapapy.fr | ~100 mods assemblées + configurateur (app Kickflip/Mczr), thème Fullstack | 289–500 € | « Atelier français », garantie 2 ans — selon Hakim : dropshipper |
| goteia.fr | Configurateur maison Next.js « SEIKOJUST » 7 axes | prix unique 349 € | Cadrans siglés Seiko en preview ; selon Hakim : dropshipper |

## Catalogue v1 — montres assemblées (fiches pivot)

| Collection | Modèle | Fiche AliExpress | Coût rendu | Statut |
|---|---|---|---|---|
| Plongeuses (SUB) | Tandorio diver no-logo NH35 | https://fr.aliexpress.com/item/1005004626900765.html | 78,25 € | RETENU COMMANDE TEST (97,8 %) |
| Plongeuses (SUB) | BLIGER Submariner classique 3 inserts | https://fr.aliexpress.com/item/1005005629655849.html | 97,45 € | Candidate |
| GMT | Bliger GMT Rootbeer NH34 (9 colorways) | https://fr.aliexpress.com/item/1005009740849403.html | 111,95 € | Offre trouvée |
| Classiques (DJ) | Corgeut 36/39 cannelée jubilé no-logo | https://fr.aliexpress.com/item/1005009697365359.html | 106,99 € | À TESTER |
| Classiques (DJ) | BLIGER two-tone romain jubilé | https://fr.aliexpress.com/item/1005006277907428.html | 95,75 € | Candidate |
| Classiques (DJ) | Corgeut cannelée éco | https://fr.aliexpress.com/item/1005010776361944.html | 77,39 € | Candidate (0 vente) |
| Chronos (Dayto) | PARNSRPE VK63 39 mm — 20 cadrans | https://fr.aliexpress.com/item/1005004821593794.html | 58,69 € | À TESTER (374 vendus) |
| Sport chic (Naut) | Nautilus-style NH35 | https://fr.aliexpress.com/item/1005009821439225.html | 147,76 € | Offre trouvée |
| Oak | — aucune complète stérile | pièces uniquement | — | EN ATTENTE |
| SKX | — | — | — | Phase 4d en cours |

Marges brutes 145–235 € sur prix alignés concurrence (289–349 €). Arborescence détaillée : `boutique-seiko-mod/arborescence-site-2026-07-24.md`.

## Configurateur (offre 2)

- 7 axes réplicables (rapport 4c) : boîtiers 26,59–41,79 € (Timefront/PORSTIER) · bracelets 6–18 € · cadrans stériles 2,99–13 € (arabic 6 couleurs, waves) · aiguilles 3,69–19 € · loupe 2,47–4,29 € · NH35 28–67 €.
- **V1** : mapping des matrices fournisseur (36–56 combos/fiche, 8–14 j).
- **V2 « sur mesure »** : assemblage à la commande — Corgeut Factory (flux Personnaliser natif, prod. 30 j) ou BL Watches ; positionnement « 4–6 semaines » ; suspendu aux réponses vendeurs.
- Front : page configurateur codée maison (calques PNG par pièce, un produit unique 349 €, config en line item properties).

## Fournisseurs candidats « atelier distant »

1. **Corgeut Factory Store** (94,4 %) — builds DJ no-logo + Personnaliser natif
2. **BL Watches Parts Store / BLIGER** (94,9 %, +3 000 vendus) — pièces + builds multi-axes
3. **Timefront** (96,2 %) & **PORSTIER** (96,3–96,9 %, retours 90 j) — pièces

## Branding (brief Hakim 24/07)

**Nom validé par Hakim : NOIRMONT** (village horloger du Jura suisse). **Domaine acheté le 25/07 : maisonnoirmont.fr** — noirmont.fr pris depuis 1986 ; choix « maison » plutôt que « -paris » (cohérence maison horlogère, évite le pattern dropship) ; .fr en principal pour la confiance marché FR, .com optionnel en protection. À connecter à Shopify comme domaine principal. Direction : épuré, propre, moderne, ciblé homme. **Charte différée après persona/positionnement** (recherche Reddit en cours — décision Hakim).

## Risques & garde-fous

- **Marques (obstacle n°1 phase 3)** : hommage assumé, jamais de logo ; naming communautaire recommandé en titres de collections (SEO par le contenu).
- **Volatilité AliExpress** : 5 fiches mortes + 1 géobloquée FR pendant le sourcing — surveiller les pivots.
- Concurrence : ~20 boutiques FR au standard « assemblé en France + garantie 2 ans ».

## Prochaines étapes

- [x] **Réponse BL Watches (24/07) : assemblage config libre OK · stérile garanti (« no seiko, no Rolex ») · dropship à l'unité OK · 100+ montres/jour** → V2 confirmée chez BL ; relance envoyée (catalogue pièces, prix, délais, packaging, SAV). Corgeut : en attente
- [x] **Persona & positionnement faits (25/07)** — `personas/persona-noirmont-2026-07-25.md` + `boutique-seiko-mod/objections-positionnement-2026-07-25.md`. Persona « Julien, 34 ans » (non-collectionneur, YouTube/Google, hommage oui / contrefaçon non, racheteur) + acheteuse-cadeau majeure en Q4 (délai raté = 1★). Top objections : délais 1-4 mois concurrents (montreapapy Trustpilot 3,0/5), SAV fantôme, QC, étanchéité mensongère, ligne rouge = logo (avertissement officiel Seiko oct. 2025). **Positionnement v2 (arbitrage Hakim 25/07) : « Votre signature au poignet » — aspiration en front (allure, assurance, statut), réassurance en coulisse (PDP/FAQ) ; aucune promesse de délai absolue tant que la logistique n'est pas éprouvée ; no-logo = garde-fou produit, pas un slogan ; jamais « assemblée en France » ; vouvoiement.** Limite : Reddit inaccessible aux outils (signaux de seconde main).
- [x] **Charte NOIRMONT v2 (25/07)** — `boutique-seiko-mod/charte-noirmont-2026-07-25.md` + `brand-tokens-noirmont.json` + planche visuelle https://claude.ai/code/artifact/0084daa3-85b1-4b07-a3e8-c1529cb6f61b. Palette encre/craie/pierre + accent vert Jura + filets laiton · Bodoni Moda / Inter / Space Grotesk · signature « nomenclature » (vue éclatée) · vouvoiement · les 4 preuves parole tenue en UI · interdits verrouillés (jamais « assemblée en France », jamais de logo tiers). Brief monogramme prêt pour génération.
- [ ] Tri manuel Hakim logo/stérile sur fiches ⚠️
- [ ] Commandes test : Tandorio SUB 78,25 € + build DJ ~100 €
- [x] Phase 4d accessoires + SKX — faite le 24/07 (rapport `reports/phase4d-accessoires-skx-2026-07-24.md`) → shortlist 10 fiches à confirmer au panier

## Gamme accessoires v1 (phase 4d, coûts rendus 24/07)

| Catégorie | Coût | Repère marché FR | Pivot |
|---|---|---|---|
| Remontoir simple | 27,59 € (IBBETON, +1 000 v.) | 60–200 € | marge ~30–130 € — vigilance CE/électrique |
| Remontoir bois | 32,99 € (Embers, +3 000 v.) | — | — |
| Remontoirs multi (2-4-6) | 46,79–66 € | — | — |
| Watch roll cuir | 13,29–13,49 € (+2 000/+4 000 v.) | montreapapy : 48 € | marge ×3 |
| Boîte 12 slots | 8,59–15,39 € | — | — |
| Kit outils moddeur (bundle) | ~40 € | — | upsell Academy |
| Bracelet présidentiel 904L/or | 15–24 € (fiches dédiées confirmées) | — | trou 4c comblé |
| Bracelet FKM | 4,99–14,69 € (317–499 v.) | — | — |

- [ ] Génération du logo définitif (brief monogramme prêt dans la charte)
- [x] **Maquette home v1 (25/07)** — https://claude.ai/code/artifact/c014a131-18cb-499c-ba31-020ca98a0044 (DA v2 : hero « Votre signature au poignet », 5 collections, section configurateur en pivot, produits « prêts à porter » nommés sans marques, FAQ objections en coulisse, visuels de principe en attendant photos/Higgsfield)
- [ ] Visuels configurateur via Higgsfield
- [x] **Proto configurateur interactif (25/07)** — https://claude.ai/code/artifact/05ef1001-264d-4d51-8ff7-e7eac89c2082 (7 étapes : taille, boîtier ×7, cadran ×8, aiguilles, trotteuse, bracelet ×7, détails ; preview vivante CSS, résumé auto, aperçu des line item properties Shopify à 349 €). Axes = sourcing 4b/4c ; matrice finale à caler sur le catalogue BL Watches.
- [x] Compte Shopify NOIRMONT (en cours côté Hakim) → me connecter au MCP (switch-shop) pour le build
- [ ] Phase 5 (marge/CPA) puis build Shopify

## Liste d'import DSers — 26 fiches (25/07)

Liste COMPLÈTE (montres catalogue v1 + SKX + accessoires gamme v1 avec liens). Import via champ « lien produit » de la Liste d'import DSers (méthode fiable du log Tuftéo).

| # | Produit | Lien | Coût (24/07) |
|---|---|---|---|
| 1 | SUB Tandorio no-logo NH35 ⭐ | https://fr.aliexpress.com/item/1005004626900765.html | 78,25 € |
| 2 | SUB BLIGER céramique | https://fr.aliexpress.com/item/1005005629655849.html | 97,45 € |
| 3 | GMT Bliger rootbeer NH34 | https://fr.aliexpress.com/item/1005009740849403.html | 111,95 € |
| 4 | DJ Corgeut 36/39 no-logo | https://fr.aliexpress.com/item/1005009697365359.html | 106,99 € |
| 5 | DJ BLIGER two-tone romain | https://fr.aliexpress.com/item/1005006277907428.html | 95,75 € |
| 6 | DJ Corgeut éco | https://fr.aliexpress.com/item/1005010776361944.html | 77,39 € |
| 7 | Sport Corgeut 41 mm | https://fr.aliexpress.com/item/1005009622003765.html | 73,69 € |
| 8 | Chrono PARNSRPE VK63 (20 cadrans) | https://fr.aliexpress.com/item/1005004821593794.html | 58,69 € |
| 9 | Nautilus-style NH35 | https://fr.aliexpress.com/item/1005009821439225.html | 147,76 € |
| 10 | SKX Tandorio 41 mm (4 cadrans) | https://fr.aliexpress.com/item/1005012743636734.html | 123,39 € |
| 11 | SKX vintage 42 mm saphir | https://fr.aliexpress.com/item/1005008657937411.html | 75,69 € |
| 12 | Remontoir simple | https://fr.aliexpress.com/item/1005005458691284.html | 27,59 € |
| 13 | Remontoir bois Embers | https://fr.aliexpress.com/item/1005012102224533.html | 32,99 € |
| 14 | Remontoir 2/4/6 slots | https://fr.aliexpress.com/item/1005006938556690.html | 46,79 € |
| 15 | Remontoir vitrine 4+6 | https://fr.aliexpress.com/item/1005010272515996.html | 63,39 € |
| 16 | Watch roll cuir Embers | https://fr.aliexpress.com/item/1005008493748701.html | 13,29 € |
| 17 | Boîte 12 slots alu | https://fr.aliexpress.com/item/1005006704546094.html | 11,39 € |
| 18 | Boîte bambou 3-12 | https://fr.aliexpress.com/item/1005011740655464.html | 14,49 € |
| 19 | Pince spring bar 6825 | https://fr.aliexpress.com/item/1005007773609967.html | 4,19 € |
| 20 | Barrettes 360 pcs | https://fr.aliexpress.com/item/1005009697173922.html | 3,79 € |
| 21 | Tournevis précision ×10 | https://fr.aliexpress.com/item/1005008543517157.html | 27,79 € |
| 22 | Bracelet présidentiel 904L | https://fr.aliexpress.com/item/1005006496083816.html | 15-24 € |
| 23 | Bracelet présidentiel or 316L | https://fr.aliexpress.com/item/1005010705179185.html | 15-24 € |
| 24 | Bracelet FKM courbe | https://fr.aliexpress.com/item/1005012196723620.html | 13,79 € |
| 25 | Bracelet FKM tropical | https://fr.aliexpress.com/item/1005009760263668.html | 14,69 € |
| 26 | Loupe cyclope date | https://fr.aliexpress.com/item/1005011940440567.html | 2,47 € |

## Build du site — 24/07/2026 (session autonome)

**Fait pendant l'absence d'Hakim :**
- **Francisation** : 25 produits DSers renommés (noms propriétaires FR, handles propres, descriptions charte), ~540 prix de variantes fixés (montres 279–379 €, accessoires ×2,2 arrondi X4,90/X9,90).
- **Collections** : 6 collections assignées + nouvelle collection « Les Montres » (les 10 garde-temps). Tout publié sur le canal Boutique en ligne (les produits DSers n'étaient publiés nulle part).
- **Visuels Higgsfield** : 8 visuels de marque (hero, 5 bannières collections, accessoires, nomenclature La Maison) — style macro éditorial pierre, cadrans stériles. Les IA imprimaient de faux logos sur les cadrans → retouche inpainting locale + compositions cachant les cadrans. ~17 crédits utilisés (solde ≈ 619).
- **Logo intérimaire** : wordmark « MAISON NOIRMONT » en Bodoni Moda 500 (encre + craie), généré et installé (header/footer/page mot de passe). Le monogramme N reste à créer.
- **Thème brouillon « Maison Noirmont »** (jamais publié) : charte appliquée (craie/pierre/encre/vert-jura/laiton, Bodoni Moda + Inter + Space Grotesk en polices custom, angles nets, boutons uppercase), homepage complète calquée sur Tuftéo (hero + badge avis démo, ticker, garde-temps, avis démo étiquetés, section configurateur encre avec knolling, grille 6 collections, accessoires, La Maison, specs NH35/316L/Saphir, newsletter), template produit (accordéons livraison « généralement 2 à 3 semaines »/retours/FAQ/garantie 12 mois, sections marque), header (annonces) + footer (réassurance ×4, footer encre), menus principal + footer.
- **QA visuelle** : desktop + mobile OK via prévisualisation (mot de passe boutique : autheu).

**Reste à faire :**
- Remplacer les images produits AliExpress (watermarks vendeurs « Tandorio », « 6698 Watch Store »…) — tri manuel + génération.
- Traduire les options de variantes (Color/Size, valeurs EN) — à faire prudemment vs mapping DSers.
- Remplacer les avis démo (étiquetés « à remplacer ») et le badge avis du hero.
- Vrai logo/monogramme N + configurateur réel (proto existant).
- Seuil « livraison offerte dès 30 € » du panier à ajuster (livraison offerte partout en France).
- Publier le thème quand Hakim validera.

**25/07 — Images produit : catalogue 100 % propre.** 35 visuels charte en ligne (2/montre : face + portrait, 1/accessoire), corrigés par agent (anti-faux-logos + fidélité produit : 12 emplacements exacts, vraies barrettes à ressort, 10 tournevis, président 3 rangs, FKM sans montre). **351 médias AliExpress supprimés — il n'en reste aucun sur la boutique.** Crédits Higgsfield : 5,28 (génération) + 12,72 (corrections) = 18 au total. Détail : `boutique-pipeline/boutique-seiko-mod/runbook-pdp-variantes-images-2026-07-24.md`. Prochaine marche possible : compléter les fiches héros au format 7 images (doc `docs/carousel-photos-produit.md`).
