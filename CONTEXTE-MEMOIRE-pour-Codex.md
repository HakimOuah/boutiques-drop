# Contexte mémoire — handoff pour Codex

_Export généré le 2026-06-23 à partir du dossier mémoire de Claude (`~/.claude/projects/-Users-Hakim-Bien-Brul-/memory/`). C'est un instantané (point-in-time) : vérifier l'état live avant d'agir sur une boutique en production._

---

## ⚠️ À LIRE D'ABORD — fraîcheur & contradictions connues

- **`reference_shopify_store.md` est ANCIEN (~08/06) et partiellement FAUX.** Il dit que Bien Brûlé = `bien-brule.myshopify.com` : c'est **faux**. Domaines réels (vérifiés mi-juin) :
  - **Bien Brûlé** = `2npa6w-x0.myshopify.com` (domaine public **bienbrule.com**)
  - **Lihyl** = `s001ti-nw.myshopify.com` (domaine public **lihyl.fr**)
  Ce fichier reste fiable uniquement pour : les **IDs de thèmes BB**, et le fait que le CLI exige `--allow-live`.
- Les fiches projet contiennent un **historique daté** (MAJ du 10 → 20/06). En cas de doute, **la MAJ la plus récente prime**.
- Règle d'or transverse : le **connecteur MCP Shopify ne peut PAS écrire le thème live ni les policies** → toute modif de thème live passe par le **Shopify CLI** (`theme push --allow-live`, piloté par `expect`).

---

## 1. QUI EST HAKIM (profil)

- E-commerçant en **SASU** (OH Ventures), **pas en micro-entreprise**. Tous les calculs de marge/pricing se font **en HT, TVA au réel, IS** :
  - IS **15 %** jusqu'à 42 500 € de bénéfice/an, puis **25 %**.
  - TVA collectée/déductible au réel ; **TVA autoliquidée sur Google/Meta Ads** (factures Irlande).
  - Le scénario « micro-entreprise » de la skill `margin-calculator` ne s'applique pas (sauf comparaison demandée).
  - **Réflexe récurrent** : vérifier que chaque fournisseur (AliExpress Business, etc.) fournit une **facture HT/autoliquidation avec n° de TVA intracom** — sinon la TVA d'achat est perdue et la marge réelle baisse.
- **Entité légale (OH Ventures, registre vérifié 10/06)** : SASU capital 1 000 € · SIREN **103157251** · SIRET siège **10315725100010** · RCS Paris · NAF **47.91B** · **47 rue Vivienne, 75002 Paris** · président **Hakim Ouahabi** · TVA intracom **FR55103157251** · tél **+33 7 56 82 80 94**.
- Trésorerie surveillée (éco tréso) → voir règle Semrush §2.

---

## 2. BONNES PRATIQUES & FAÇON DE TRAVAILLER (règles)

### 2.1 Semrush — n'activer que sur demande explicite
Ne PAS activer/appeler les outils Semrush (MCP keyword_research, organic_research, etc.) par défaut. Hakim n'a pas de compte permanent : il prend des **essais ponctuels** pour économiser sa tréso. Par défaut, recherche concurrents/marché via **recherche web + navigateur (Claude in Chrome)**. Ne proposer Semrush que si un essai est confirmé actif.

### 2.2 Déclencheur « nouvelle boutique » → pipeline outillé
Dès que Hakim dit **« nouvelle boutique »** (ou « nouveau site », « on lance une boutique ») **+ fournit le produit/concurrent**, enclencher la séquence outillée **sans attendre** :
- **Source de vérité** : `/Users/Hakim/boutique-pipeline/PLAYBOOK.md` (repo git). Réf. design : `docs/superpowers/specs/2026-06-06-pipeline-creation-boutique-design.md`.
- **Démarrage** : `python3 scripts/new_boutique.py <nom-projet>` (depuis `/Users/Hakim/boutique-pipeline/`).
- **6 phases, 3 portes de validation humaine** :
  1. **Recherche** → `research-brief.md` (concurrents : partir de ceux fournis, élargir web, shortlist 4-6 ; Semrush OFF par défaut ; extraction fournisseur). Le **pricing/positionnement** se décide ici, en **HT/IS**.
  2. **Marque & charte** → `brand-tokens.json` — **PORTE 1** (3 noms + baseline, palette EN CONTRASTE des concurrents, typo Google Fonts ; `validate_tokens.py` ; Hakim choisit nom + palette/typo ; logo manuel).
  3. **Structure** → `sitemap.md` — **PORTE 2** (arbo + wireframes + plan SEO, logique 2-templates par défaut).
  4. **Contenus** → `content/` + `shot-list.md` (copy 1 CTA/page, fiches GMC-compliant, SEO on-page, ALT + SKU via `reference/naming-conventions.md`, prompts images via `reference/image-prompt-guide.md`).
  5. **Build Shopify** — **PORTE 3** (`tokens_to_theme.py` applique la charte ; produits/collections via MCP ; push live via **CLI** ; validation sur le live).
  6. **Conformité & livraison** : audit `reference/gmc-checklist.md` (12 pts), livraison FR/BE/CH `reference/delivery-fr-be-ch.md`, réglages manuels (SEO homepage, GTIN/MPN, pages légales), checklist go-live.
- **Pré-requis manuels Hakim** (hors API) : créer le store Shopify + installer le thème fullstack + connecter le CLI.

### 2.3 Règles design/conversion (héritées BB + Lihyl)
- **Mobile-first + performance** (lazy load, pas de scripts inutiles) — impacte le Quality Score Google Ads ; ~80 % du trafic est mobile.
- **Un seul CTA dominant** par section ; **pas de CTA répétés sur la fiche produit** (le sticky add-to-cart suffit).
- **Ordre page produit qui convertit** (acté sur Lihyl 20/06) : réassurance fine → galerie/titre/prix → **bénéfices (icônes)** → add-to-cart simple → bande paiement → comparatif/valeur → specs → FAQ → **cross-sell en bas**. Ne **jamais** demander de composer la commande (bundle de cases à cocher) AVANT la conviction.
- Cohérence stricte de la charte ; ne pas casser le style existant.

### 2.4 Conformité GMC / légal (CRITIQUE — piège récurrent)
- **JAMAIS de fausse preuve sociale** : pas de faux avis, fausses notes « X avis », faux compteurs « N personnes regardent ». C'est ce qui a fait suspendre BB (misrepresentation) et c'était aussi présent sur Lihyl. Contrainte légale stricte (DGCCRF).
- **Prix barré (compare-at)** : en France (loi Omnibus), le prix de référence barré doit être un **prix réellement pratiqué**. Lihyl affiche 599 € barré 799 € alors que 799 n'a jamais été pratiqué → **risque assumé par Hakim** ; ne pas annoncer de « -% promo » en pub.
- Images : pas de filigrane/marque tierce (ex. « Boundless Voyage » trouvé sur BB), pas de placeholder.
- Transparence : e-mail **pro** (pas Gmail perso), adresse complète, pages légales rédigées.

### 2.5 Technique Shopify récurrente (à connaître absolument)
- **Le connecteur MCP ne peut PAS écrire le thème live ni les policies.** → push live par **CLI** :
  `npx @shopify/cli@latest theme push --store <xxx>.myshopify.com --theme <id> --allow-live --nodelete --only <fichier>`
  - Le prompt TUI « live theme » se confirme **flèche-haut + Entrée** (`\033[A\r`) via `expect` (le défaut est « No »).
  - Fournir un **mini-skeleton de thème** (config/settings_schema.json=`[]`, layout/theme.liquid, config/settings_data.json=`{}`, locales/fr.default.json) pour éviter le prompt « pas un dossier de thème ».
- **Switch de boutique CLI** : la session CLI suit le dernier `auth`/`push`. Passer d'une boutique à l'autre nécessite une **ré-auth device-code** (`auth logout` → relancer le push → code `XXXX-XXXX` + URL `accounts.shopify.com/activate-with-code` → Hakim autorise dans son navigateur → le push reprend).
- **Switch de boutique connecteur MCP** : `switch-shop` révoque le token → Hakim doit ré-autoriser via claude.ai/settings/connectors.
- **`product_list` (cross-sell) = HANDLES BRUTS** (ni `shopify://` ni GID) sinon le bloc est vide.
- **Toujours vérifier la publication canal** (`resourcePublications` / `publishablePublish` sur « Boutique en ligne »), pas seulement le statut ACTIVE — les produits créés par API/DSers sont souvent ACTIVE mais publiés sur aucun canal (donc invisibles).
- **`custom-code` block** = seul moyen d'injecter du HTML/SVG/CSS brut (champ `liquid` non sanitizé) ; un bloc `text`/richtext strippe le `<svg>`.
- Un **bloc unique dans une `custom-section`** hérite de la grille N-colonnes de la section → mettre la section à **1 colonne** pour qu'il s'étale en pleine largeur.
- Storefront Shopify : **cache agressif** (ignore les `?param`) → hard refresh / vérifier via fichiers thème (API) plutôt que le rendu.
- Gros résultats GraphQL : sauvegardés sur disque ; parser en Python (retirer le commentaire `/* */` en tête avant `json.loads`).

---

## 3. RÉFÉRENCE TECHNIQUE SHOPIFY (stores & thèmes)

### Bien Brûlé
- Store : **`2npa6w-x0.myshopify.com`** — domaine **bienbrule.com**.
- Thème live : **`copie-de-fullstack-2-3`** (« fullstack »), id **`200135213388`**. Architecture récente (dossier `blocks/`, `custom-section`, `comparison-table`). C'est le thème publié.
- Anciens thèmes (non publiés) : `self-made-theme-updated` id `199931822412` (ex-live, **obsolète**, NE PLUS pousser ici) · `Horizon` id `199897743692` · `theme-impact-tristan-version` id `200022360396`.
- Éditeur thème live : `…/admin/themes/200135213388/editor`.

### Lihyl
- Store : **`s001ti-nw.myshopify.com`** — domaine **lihyl.fr**.
- Thème live : **`copie-de-fullstack-2-3`** (même base fullstack), id **`185642385737`**.

### Environnement local CLI
- Shopify CLI via `npx @shopify/cli@latest` (déjà connecté, auth en cache selon dernier store). Sur l'ancienne config : CLI dans `~/.npm-global` (PATH dans `~/.zshrc`).
- Pour pousser le live, flag `--allow-live` obligatoire.

---

## 4. PROJET BIEN BRÛLÉ (café nomade premium)

Boutique Shopify mono-niche « café nomade premium » (machines expresso portables, moulins, accessoires). Thème live fullstack `copie-de-fullstack-2-3` (id 200135213388), store `2npa6w-x0.myshopify.com`, domaine bienbrule.com. _(L'ancien thème Self Made v1.2.2 #199931822412 est obsolète.)_

- **Cible** : CSP+ 30-50 ans, télétravail/voyage. Panier moyen visé 130 €+. Trafic principal : Google Ads, majoritairement mobile.
- **Direction design « Torréfaction artisanale »** (chaleureux, tactile, artisanal premium) : crème #F5F0E8, brun expresso #2B1D14, terracotta #B5651D, vert sauge #7C8471 ; titres serif (Playfair Display/Cormorant), corps sans-serif (Work Sans/Inter).
- **État (17/06)** : site **EN LIGNE**, **campagne Google Shopping lancée** → toute modif est publique, prudence.
- NE PAS toucher au checkout (verrouillé Shopify Basic).
- **Cross-sell** « Ajoutez les essentiels » (cases à cocher, auto-exclusion du produit courant) LIVE sur les 4 fiches ; **Coffret exclu** de la liste.
- **Faux avis supprimés** des **DEUX** templates produit : `product.json` (→ Machine, Étui, Coffret) **ET** `product.accessoire.json` (→ Support égouttoir). ⚠️ Piège : un produit peut utiliser un template à `templateSuffix` différent → vérifier le suffix de CHAQUE produit.
- **Produits clés** (gid) : machine auto-chauffante NOIRE 139 € `15789788987724` (produit d'appel) ; machine dorée 119 € `15796701987148` → DRAFT ; Tasse Titane `15799396237644` → DRAFT (image filigranée « Boundless Voyage »).

### 4b. Suspension GMC « misrepresentation » — ✅ RÉSOLUE
- **Compte GMC 5806019978** suspendu le 15/06 pour « Déclarations trompeuses / Misrepresentation » → **réintégré** après correction du site (pas eu besoin de recréer le GMC). L'entité OH Ventures est de nouveau clean → débloque la soumission GMC de Lihyl. Garder l'hygiène : compte Google dédié par marque + surveiller le moyen de paiement Ads.
- **Déclencheurs corrigés** : 3 faux widgets « 4,5★/123 avis » (home + fiches) supprimés ; faux `rating_001` + section `avis` (faux témoignages Camille/Thomas/Sophie) du `product.accessoire.json` supprimés (17/06) ; Tasse Titane (filigrane) → DRAFT ; machine dorée → DRAFT ; page Contact (vide) remplie.
- **Fait par Hakim** : marché **France uniquement** (BE+CH retirés), une seule livraison (offerte), e-mail/tél/adresse dans Réglages.
- **PDF de référence Hakim** : `/Users/Hakim/Downloads/Misrepresentation.pdf` (checklist communautaire 7 points).
- Reste manuel possible : e-mail de contact pro (pas `contact.bienbrule@gmail.com`), ville d'adresse de facturation, lien « Suivre votre commande » (/apps/parcelpanel) sans 404.

---

## 5. PROJET LIHYL (reformer pilates pliable) — LIVE

Boutique mono-produit lancée le 10/06. Store `s001ti-nw.myshopify.com` / **lihyl.fr** (Basic, EUR, contact@lihyl.fr). Thème live fullstack id **185642385737**. Mot-clé principal « **reformer pilates** ». Cible femmes 25-45, branding « core atelier » (rose pâle #F6E8E1 / brun moka #7B5C45 / chocolat #33271F / doré #C2A36B ; titres serif minuscules avec mots en `<em>` italique).

### Produit & pricing
- **Reformer** : gid **`10236589932873`**, handle `reformer-pilates-pliable`, variant gid **`54580595261769`**, SKU **LIHYL-REF-01**.
- **Prix actuel : 599 € TTC, barré (compare-at) 799 €** (repositionné depuis 499 € le 18/06 pour +~81 €/vente net + tolérance CPA ; le gain vient du passage à 599, pas du barré).
- Fournisseur AliExpress « YOLO-EU Store », ~184,31 € livré (Pologne). **Specs usine** : déplié 197×57 cm, h 72,5 cm ; plié 112×56×28,5 cm ; ~32 kg ; acier/ABS/PP ; charge 200 kg. _(L'ancien schéma « 218 cm » était inventé par l'IA → remplacé par v2 correct.)_
- Économie (SASU) : marge nette après IS ~208 €/vente à 499 € (50 % du HT) si TVA produit récupérée ; à 599 € marge supérieure. CAC max ~120 € HT, break-even 245 €. Concurrence FR : Pilateo 1 990 €, Pilates&Me 1 490 € → « premium accessible ».

### 4 accessoires (ACTIFS, publiés, stock 100, fulfillment 100 % MANUEL)
_(DSers n'a pas pu être reconnecté à Lihyl → commander sur AliExpress avec l'adresse client + coller le tracking)_
- **Tapis** 24 dalles EVA noires (240×90) — 49,90 € — SKU LIHYL-MAT-24 — gid 10237561045321 (fournisseur vend par 12 → commander ×2).
- **Anneau** pilates noir — 34,90 € — SKU LIHYL-RING-01 — gid 10237561078089.
- **Socquettes** lot 4 paires (blanc/rose/gris/noir) — 19,90 € — SKU LIHYL-SOCKS-LOW-04 — gid 10237561143625.
- **Chaussettes** montantes côtelées rose poudré lot de 3 — 19,90 € — SKU LIHYL-SOCKS-MID-03 — handle `chaussettes-pilates-montantes-rose` — gid 10237561176393.
- Stock à « Stock Lihyl » (Location gid 115690733897). Stock vendable car `tracksInventory:false` (toujours dispo).

### Structure thème (home 13 sections / produit) + cross-sell
- Cross-sell natif : `blocks/_toggle-cross-sell.liquid` (checkbox « ajoutez les essentiels », **JS-lié au product-form**) + `blocks/cross-sell.liquid` (cartes « découvrez aussi »). **product_list = handles bruts** ; **exclusion auto** du produit courant (`product.id != closest.product.id`). Handles : `tapis-sol-modulaire-reformer`, `anneau-pilates`, `socquettes-pilates-antiderapantes`, `chaussettes-pilates-montantes-rose`.
- Pages : **FAQ** (gid 170906747209), **Notre histoire** (gid 170906779977), **Contact** (gid 170889052489). Menu « Informations » gid 308353859913. Collection `reformer` gid 692349698377.
- France uniquement. App ParcelPanel installée (lien /apps/parcelpanel OK).

### MAJ 18/06 — repositionnement prix 499 → 599 € (barré 799)
Comparatif « faites le calcul » réécrit (home `comparatif_lihyl` + produit `comparatif_produit`) : 1 560 €/an studio · 1 490 € concurrent pliable · 599 € Lihyl. Bloc anti-objection « bas de gamme <1000 € » ajouté (`garantie_cta_*` > `text_materiaux_qlt`). Page « Notre histoire » réécrite (499→599 + retrait de la promesse « pas de prix barrés fictifs » qui contredisait le 799). Méta-description home passée à 599 € (manuel Hakim).

### MAJ 19/06 — audit pré-ads complet : SITE ADS-READY
Mot de passe storefront RETIRÉ. 5 pages 200 sans gate ; 31 images 200 (0 cassée) ; 36 assets 200 ; tous liens internes 200 ; prix 599/799 cohérents partout + JSON-LD/og:price = 599 ; policies complètes (contact, mentions légales, confidentialité, remboursement, expédition, CGV, CGU). Avant lancement : brancher **tracking Google Ads conversion + GA4**. Annonces « reformer pilates » → **page produit**.

### MAJ 20/06 — refonte page produit pour la conversion (taux d'ajout panier 0 %)
Diagnostic : le bundle checkbox était juste sous le prix (décision d'achat avant conviction). Refonte de `templates/product.json` (push CLI live) :
1. **Bloc bénéfices** `custom-code` `benefits_code` sous le prix (4 icônes **SVG inline**, line-style, currentColor, sans emoji ni lib externe).
2. **`toggle_xsell` retiré** du product-form (barrière supprimée) ; cross-sell bas via cartes `decouvrez_cards` relabellisées « complétez votre pratique » _(le toggle checkbox est JS-lié au form → ne peut pas descendre seul en bas)_.
3. Colonne `main` réordonnée : titre → prix → bénéfices → add-to-cart simple → badges paiement → bande « Paiement 100% sécurisé / Livraison offerte / Retour sous 14 jours » → estimation livraison → accordéons → description.
4. Ordre sections : bandeau réassurance fin (TOP) → main → comparatif → specs → FAQ → garantie → cross-sell bas.
- Bandeau réassurance du haut refait en `custom-code` `reassure_strip` (strip d'icônes SVG, grille 2×2 mobile / 1 ligne desktop, section en 1 colonne pleine largeur, padding réduit) — **validé OK par Hakim sur mobile**.
- Backups locaux : `/tmp/lihyl-push/templates/product.json.bak2` (et .bak3/.bak4).

### Reste possible
Brancher tracking Ads/GA4 ; (optionnel) bundle « Pack Studio Complet » ~549 € ; commande test fournisseur (fournisseur fragile : peu de ventes, limite 1 article/commande → prévoir vendeurs backup AVANT la pub).

---

## 6. PROJET PETIT ASTRE (canapé modulable enfant) — en préparation

Nouvelle boutique mono-produit (lancée 17/06) : **canapé modulable enfant 10 pièces** type « play couch », **motif étoiles phosphorescent (glow)** = différenciateur clé. Mousse 25D, housses déhoussables/lavables, CE, ~128×67×44 cm, 1-9 ans. Fournisseur AliExpress « Urban Corners Store » (DSers), **expédié d'Allemagne**, **coût ~113 € livré**. Mot-clé « canapé modulable enfant ».

- **Validation marché = GO.** Concurrents DTC FR : Pagaille (leader, 295-335 €), Tipichou (269,90 €, 10 pièces, comparable direct), Meowbaby (314 €), Me More Cool (169,99 €), MagiLumi/CasaCorner. **White space = seul à combiner 10 pièces modulable + glow étoiles.** SERP prenable sur « canapé modulable/de jeu/phosphorescent » ; head terms (« canapé enfant ») verrouillés par marketplaces → à éviter.
- **Décisions Hakim** : nom **Petit Astre** · prix **289 € TTC** (ancrage barré ~349 € ; sous Pagaille, au-dessus de Tipichou) · style « doux & étoilé premium » crème/beige + bleu nuit lumineux — **MAIS design EN ATTENTE** (réutilisation du thème fullstack, pas de design généré).
- **Économie (SASU, coût 113 €)** : à 289 € → marge brute HT 136,58 € ; net après IS ~110 € pré-pub (38 %) ; ~74 € après pub à CAC 50 € (25,7 %) ; break-even CAC ~155 € TTC. TVA produit (~19 €/vente) récupérable seulement avec facture intracom conforme.
- **Statut** : boutique Shopify **pas encore créée** (prérequis manuel Hakim : créer le store + installer fullstack + connecter CLI). Phase 1 (recherche/pricing) + début Phase 2 (nom) faits en ad-hoc (cwd `/Users/Hakim/Boutiques drop/Canapé enfant`, images dans `images aliexpress/`) → **à réaligner** sur le pipeline `/Users/Hakim/boutique-pipeline`. Reste : brand-tokens, sitemap, contenus (fiche 289 € GMC), build fullstack, conformité.
- Répliquer de Lihyl/BB : home ~13 sections, produit ~9 sections, cross-sell natif (handles + exclusion auto), estimateur livraison, 1 seul CTA, PAS de faux avis, push live via CLI, vérifier publication canal.

---

_Fin de l'export. Pour le détail opératoire des lancements, la source vivante reste `/Users/Hakim/boutique-pipeline/PLAYBOOK.md` + `reference/`._
