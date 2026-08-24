# Audit — leçons Maison Noirmont (15–23/08/2026)

À dérouler sur **toute** boutique terminée, en plus de la checklist §6. Sources : audits live 15 et 17/08, scan catégories (structure / contact / produit / trust / store info) + rapport **OneClickBrand** du 23/08, corrections appliquées le 23/08 après ban GMC « déclarations trompeuses ».

Journal : `boutique-pipeline/boutique-seiko-mod/journal/2026-08-15-audit-conformite-site-live.md`, `2026-08-17-audit-gmc-terry.md`, `2026-08-23-corrections-gmc-misrepresentation.md`. Recette sources : `memoire/sources-audit-conformite-boutique.md`.

Un item en échec = ne pas demander de review. Après correction d'un ban / mismatch : **attendre 7–10 jours**, pas d'ads, laisser le flux se resynchroniser.

---

## Identité et contact

- [ ] **Un seul e-mail public.** `shop.email` / `shop.contactEmail` = l'adresse pro du domaine. Cas Noirmont : Gmail `contact.noirmont@gmail.com` fuité dans le JSON-LD de **toutes** les pages alors que le site disait `.fr`.
- [ ] **Une seule écriture du téléphone** partout (footer, Contact, policies, JSON-LD) : `+33 X XX XX XX XX` visible, `tel:+33XXXXXXXXX` en `href`. Quatre graphies du même n° = mismatch.
- [ ] Footer : raison sociale **ou** marque + **adresse postale** + `mailto:` + `tel:`. Un footer sans adresse est un fail reviewer.
- [ ] Page Contact : même adresse postale que le footer (OneClickBrand : Contact sans adresse = flag).
- [ ] JSON-LD `Organization` passé dans un **parseur strict** (`json.loads`). Un bloc illisible à l'œil mais invalide (virgule orpheline si `sameAs` vide) est **ignoré en entier** par Google.
- [ ] JSON-LD : même e-mail, tél, adresse, `legalName` que le footer. Pas de second e-mail.

## Mentions légales et policies

- [ ] **Une seule** page mentions légales : `/policies/legal-notice`. Une page CMS `/pages/mentions-legales` en parallèle = deux dates, deux textes. Dépublier le doublon, 301 vers `/policies/*`.
- [ ] Médiateur : nom **et URL** du site (art. R. 616-1). « CM2C, 14 rue Saint Jean… » sans `https://www.cm2c.net/` = incomplet.
- [ ] **Pas d'e-mail Shopify** (`assistance@shopify.com`) dans les mentions légales. OneClickBrand l'a flaggé ; bloc « Contact technique Shopify » à retirer.
- [ ] Dates de version homogènes après chaque edit.
- [ ] Zéro marqueur à trou `[[…]]`, zéro `<meta charset>` dans le corps d'une policy.
- [ ] Page **suivi de commande** réelle (`/pages/suivre-mon-colis` ou équivalent), liée depuis FAQ / header si on l'annonce.

## Chiffres — une seule formulation

- [ ] Délai SAV : **un** chiffre partout (Noirmont : 24 h vs 48 h dans footer / cartes / accordéon).
- [ ] Livraison : **une** fenêtre, même unité. « 2 à 3 semaines » **et** « 14–21 jours » dans thème / panier / FAQ / policy = flag OneClickBrand. Choisir l'une, recopier partout (thème `product.json`, `cart.json`, `footer-group.json` compris).
- [ ] Garantie fiche / bandeau / footer **≤** garantie policy. Footer « mouvement, couronne, aiguilles » vs policy « mouvement interne seulement » = contradiction.
- [ ] Description de collection = **catalogue public réel** (compter via `/collections/<handle>/products.json`, pas l'Admin). Noirmont : « six modèles, céramique, bronze, Miyota » pour 3 aciers NH35 5 ATM.
- [ ] Configurateur / landing : pas de « pièce unique / sur mesure » si c'est un catalogue. La FAQ et la homepage doivent dire la même chose (rétractation en jeu).
- [ ] Politique cookies = état **actuel** (bandeau au présent ; pas de `storefront_digest` / mot de passe si la boutique est ouverte).

## Paiement (déjà en §6 — cas Noirmont en plus)

- [ ] Pas de bandeau « 4 fois » / « ou Klarna » si Klarna n'est pas au checkout, **ni** sous le seuil du paiement fractionné (12,90 € n'a pas de 4×).
- [ ] Picto Google Pay / Apple Pay / Shop Pay **absent** si `*PayConfig: null` dans `/payments/config`.
- [ ] Mention **TTC** près du prix (fiche, panier, footer) — obligation conso FR même si `shop.taxesIncluded = true`.

## Produit / trust (causes du ban 23/08)

- [ ] **Zéro marque tierce** dans titres, descriptions, `alt`, tags, **JSON-LD**, **noms de fichiers CDN**. Noirmont : 57/96 fiches « Seiko » ; « Présidentiel » (Rolex) ; tag `skx` ; `904l` dans les filenames.
- [ ] Claims vagues retirés : bandeau **« Qualité Premium »**, icône verified, « certifié », notes 4,5 / 123 dormantes dans le thème (`disabled` ne suffit pas si les valeurs restent).
- [ ] **0 avis / note / compteur** publics. Grep `star` / `avis` / `4.8` dans le HTML = surtout des SVG et « changer d'avis » — remonter à JSON-LD / `products.json`.
- [ ] **0 prix barré** sur les **actives**. Scanner aussi brouillons et archivées (`compareAtPrice`) : ils s'allument au publish. Gabarit « Ancien prix » vide + CSS ≠ absence de donnée.
- [ ] **0 photo fournisseur brute** (pas de `alicdn` sur le catalogue public).
- [ ] **0 image CDN partagée** entre deux fiches actives (mère / enfant coloris).
- [ ] SKU maison sur tout le feed ; cartes cadeau / SKU vides **exclus** du flux.
- [ ] Handle renommé → **301** tout de suite (sinon 404 = fail Terry). Scope API navigation parfois manquant : les poser à la main dans l'admin.

## Technique / cookies

- [ ] Consentement : bandeau dès la 1re visite, Accepter = Refuser (même taille), pas de GA/Meta avant choix. Ne pas tester `customerPrivacy === undefined` avant `loadFeatures`.
- [ ] Région du bandeau **EEE + UK avant** de poser une balise Google (la France seule rate les visiteurs BE/DE).
- [ ] Compter les collections en visiteur (`products.json`), jamais l'Admin.
- [ ] Après un changement de promesse : **balayer les 5 endroits** (bloc thème, Liquid en dur, description produit, CMS, policy).

## Après correction d'un flag / ban

- [ ] Ne pas redemander de review avant **7–10 jours**
- [ ] Ne pas lancer d'ads
- [ ] Laisser Google & YouTube resynchroniser
- [ ] Pièce d'identité GMC : fournir si demandée, nom/adresse = KYC
