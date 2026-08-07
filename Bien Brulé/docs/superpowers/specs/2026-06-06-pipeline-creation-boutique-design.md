# Pipeline réutilisable de création de boutique Shopify — Design

**Date :** 2026-06-06
**Statut :** Design validé, en attente de relecture avant plan d'implémentation
**Approche retenue :** C — Hybride (playbook + scripts ciblés)

## Contexte & objectif

Après la finalisation de la boutique **Bien Brûlé** (café nomade premium), l'objectif est
de **capitaliser sur tout le travail déjà fait** pour lancer de nouvelles boutiques
mono-produit beaucoup plus vite, en automatisant un maximum d'étapes : recherche
concurrents, génération de charte graphique, structure du site, contenus, build Shopify
et conformité.

**Point de départ d'une nouvelle boutique :** un produit choisi, rien d'autre.
**Niveau d'automatisation visé :** le plus poussé possible, avec **3 portes de validation
humaine** aux moments de décision créative/structurante.

## Principes directeurs (hérités de Bien Brûlé)

- **Mobile-first & performance** (impacte le Quality Score Google Ads).
- **Un seul CTA dominant** par section/page.
- **Cohérence stricte de la charte** sur toutes les pages.
- **Conformité Google Merchant Center** intégrée dès la conception.
- **Logique 2-templates** (produit principal + accessoire générique) par défaut, pour
  éviter qu'un accessoire affiche les sections du produit principal.
- **Tout en français**, registre adapté à la cible.

## Architecture — 6 phases, 3 portes

| Phase | Sortie | Porte |
|---|---|---|
| **1** Recherche (découverte + analyse concurrents + extraction fournisseur) | `research-brief.md` | — |
| **2** Marque & Charte | `brand-tokens.json` + 3 noms | **PORTE 1** (nom + palette/typo) |
| **3** Structure | `sitemap.md` (arbo + wireframes + SEO) | **PORTE 2** (structure) |
| **4** Contenus | `content/` + `shot-list.md` (prompts ChatGPT image) | — |
| **5** Build Shopify | site live (charte appliquée, produits, placeholders) | **PORTE 3** (rendu live) |
| **6** Conformité & livraison | audit GMC + config expédition FR/BE/CH + checklist go-live | — |

---

## Phase 1 — Recherche

### 1a. Découverte automatique des concurrents
- Démarre du/des concurrent(s) fourni(s) par l'utilisateur (au moins 1).
- Recherche web sur les termes produit pour élargir.
- Reverse-discovery (sites similaires, marchés comparables).
- Constitue une **shortlist de 4 à 6 concurrents**.
- **Pas de gate de validation** sur la shortlist : l'analyse se déroule directement.

### 1b. Analyse concurrentielle
- Positionnement, gammes de prix, codes visuels du marché, angles différenciants.
- Outils : **recherche web + navigateur (Claude in Chrome)** par défaut.
- **Semrush (MCP) désactivé par défaut** — à n'activer que sur confirmation explicite
  d'un essai actif (raison : pas de compte permanent, usage ponctuel pour économiser la
  trésorerie).

### 1c. Extraction produit fournisseur
- Récupération des pages produit fournisseur (specs, images, variantes) qui alimenteront
  les fiches produit en Phase 4.

**Sortie :** `research-brief.md` (positionnement, prix, codes visuels, angles, specs produit).

---

## Phase 2 — Marque & Charte graphique → PORTE 1

**Entrée :** `research-brief.md`.

1. **Identité de marque** — 3 propositions de nom + baseline, chacune avec un angle de
   positionnement distinct, justifié face aux concurrents.
2. **Charte = design tokens** (`brand-tokens.json`, cœur réutilisable) :
   - Palette (primaire, secondaire, accent, neutres clairs/foncés), choisie **en contraste**
     avec les concurrents.
   - Typographie (1 serif titre + 1 sans-serif corps, depuis Google Fonts Shopify).
   - Rayons, ombres, espacements, densité (premium = plus d'air ; malin = plus dense).
   - Ton éditorial (vouvoiement, registre, mots à éviter).
3. **Mapping tokens → Shopify** — ces tokens se traduiront en `settings_data.json`
   (color schemes + font_picker) à la Phase 5.

**PORTE 1 :** l'utilisateur choisit 1 nom parmi 3 et valide/ajuste palette + typo.

**Manuel (hors pipeline) :** le **logo** (le pipeline propose une direction seulement).

---

## Phase 3 — Structure & arborescence → PORTE 2

**Entrée :** `brand-tokens.json` + `research-brief.md`.

1. **Arborescence** — collections (produit principal / accessoires / packs) déduites de la
   gamme fournisseur et des concurrents ; pages fixes (Accueil, Produit, À propos, FAQ,
   Contact, légales) ; navigation menu + footer.
2. **Wireframe par page = liste ordonnée de sections** (texte, pas de maquette visuelle).
   Chaque page = un seul CTA dominant.
3. **Templates** — logique 2-templates par défaut (produit principal + accessoire
   générique), même si la boutique démarre avec un seul produit.
4. **Plan de maillage SEO** — quelle page cible quel mot-clé.

**PORTE 2 :** validation de l'arborescence + liste des sections par page avant tout contenu
ou build.

**Sortie :** `sitemap.md` (arbo + wireframes + mapping SEO).

---

## Phase 4 — Contenus (textes, SEO, visuels)

**Entrée :** `sitemap.md` + `brand-tokens.json` + `research-brief.md`.

1. **Copywriting complet** — hero, bénéfices, descriptions, À propos, FAQ, réassurance ;
   respecte le ton éditorial ; un seul CTA dominant par page.
2. **Fiches produit** — depuis l'extraction Phase 1c, déjà conformes aux règles GMC
   (pas de superlatifs absolus, cohérence des specs).
3. **SEO on-page** — meta title + meta description par page/produit/collection.
4. **ALT images** + nomenclature SKU (conventions Bien Brûlé).
5. **Visuels — stratégie Option B :** images fournisseur comme placeholders + génération
   des pictos/icônes de réassurance dans la charte. Le pipeline **signale explicitement**
   les visuels à remplacer par des photos pro.

### `shot-list.md` (livrable visuel clé)
Pour chaque emplacement du site, une ligne avec :
- **Emplacement** (page + section, ex. « Accueil > hero »).
- **Format/ratio** + orientation (ex. 16:9 paysage, 1:1 carré).
- **Rôle** (vendre le produit / faire passer une émotion / preuve d'usage).
- **Prompt prêt-à-coller pour ChatGPT image**, rédigé dans la charte (palette, ambiance,
  mise en scène, émotion via l'usage du produit).

**Pas de porte ici** — validation des contenus en contexte à la PORTE 3 (site live).

**Sortie :** dossier `content/` (un fichier par page/produit) + assets visuels (SVG charte, ALT).

---

## Phase 5 — Construction Shopify → PORTE 3

**Entrée :** tokens + `sitemap.md` + `content/` + `shot-list.md`.

1. **Application de la charte** — `brand-tokens.json` → `settings_data.json`
   (color schemes + font_picker).
2. **Montage des pages** — assemblage des sections validées (Phase 3) dans les templates
   JSON du thème + injection des contenus (Phase 4).
3. **Création produits/collections** via API Shopify (create-product, collections,
   templates, SKU, ALT, SEO meta).
4. **Placeholders visuels** posés aux emplacements du `shot-list.md`.
5. **Push live** via Shopify CLI.

**PORTE 3 (la plus importante) :** validation du **site réel en ligne**, charte appliquée,
contenus en place. C'est ici que les contenus de la Phase 4 sont jugés en contexte.

**Pré-requis manuel incontournable :** **création de la boutique Shopify** (pas d'API) +
connexion du thème et du CLI. Le pipeline démarre une fois la boutique vierge créée.

---

## Phase 6 — Conformité & mise en ligne

1. **Audit Google Merchant Center automatisé** — checklist 12 points (rodée sur Bien
   Brûlé), corrections via API.
2. **Configuration expédition / livraison automatisée** (via `deliveryProfileUpdate`) —
   zones par défaut **France + Belgique + Suisse** avec `includeAllProvinces`, tarifs/seuils
   sur le modèle Bien Brûlé (à ajuster selon le panier moyen). Étape reproductible à chaque
   boutique.
3. **Réglages finaux manuels listés** : SEO homepage (Online Store → Preferences, pas
   d'API), GTIN/MPN dans l'app canal Google.
4. **Checklist go-live** finale.

**Manuel (choix utilisateur) :** **pages légales** rédigées à la main (mentions, CGV,
confidentialité, retours). Pas de configuration du scope `write_legal_policies`.

---

## Réutilisable (starter-kit)
- Mapping tokens → Shopify (`brand-tokens.json` → `settings_data.json`).
- Logique 2-templates (produit principal + accessoire générique).
- Checklist GMC 12 points.
- Profil de livraison FR/BE/CH.
- Conventions SKU / ALT / SEO.

## Manuel incontournable (à chaque boutique)
- Création de la boutique Shopify (pas d'API).
- Logo.
- Vraies photos produit (guidées par le `shot-list.md`).
- Pages légales.

## Décisions verrouillées
- Approche **C** (hybride playbook + scripts ciblés).
- **3 portes** : nom+charte / structure / rendu live.
- Découverte concurrents **automatisée**, sans gate sur la shortlist.
- **Semrush off** par défaut.
- Visuels en **Option B** + `shot-list.md` avec prompts ChatGPT image.
- 2-templates par défaut.
- Pages légales **manuelles** ; livraison **FR/BE/CH automatisée**.
