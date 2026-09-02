# Checklist GMC pass/fail — de la pré-build à la post-approbation

Consolidation Terry Ecom + décisions Hakim 24/08 soir (avis Codex validé). Un item en échec = corriger avant d'avancer.

Parc déjà validé (Tuftéo, Bonum Vitae, Noirmont) : ne pas rétro-corriger. Bien Brûlé est fermé — boutique, GMC et Ads — depuis début juillet 2026.

Les items marqués **(précaution)** ne sont pas des gates officiels Google.

## 0. Gate produit / fournisseur (avant tout abonnement)

Pour un appareil électrique (sèche-serviettes, luminaire, etc.) c'est **plus sérieux** que l'IP GMC.

- [ ] Variante exacte : stock France/UE, coût rendu, délai réel
- [ ] Déclaration UE de conformité, notice, tension / prise, puissance, indice IP
- [ ] Garanties fournisseur + procédure SAV
- [ ] Obligations importateur + REP / DEEE si applicables
- [ ] Échantillon commandé et testé (finition, température, odeur, fixation, notice, prise, emballage, casse, délai)
- [ ] Économie unitaire figée : TVA, paiement, retours, casse, SAV, remplacement, REP, CPA max
- [ ] Docs ou échantillon insatisfaisant → **STOP**, même si le domaine est acheté

Mode **PRODUIT PUR** : 1 héros + 2–4 variantes réellement différentes (5–8 max si chaque source est validée). Ne pas importer 32 ou 121 fiches pour « faire catalogue ».

## 1. Pré-build

**Domaine**
- [ ] Domaine dédié à la marque, neuf ou déjà actif — jamais d'expiré racheté
- [ ] **(précaution)** Quelques semaines d'âge avant review aident le trust ; ça ne rattrape pas un mauvais fournisseur
- [ ] Renouvellement automatique activé
- [ ] Ne pas créer le GMC le jour de l'achat

**Compte Google**
- [ ] E-mail pro **sur le domaine** (IONOS OK au départ). Workspace / compte Google dédié **quand la vérif SMS est possible** — pas un Gmail gratuit `contact.marque@gmail.com`
- [ ] Il devient vivant parce qu'il **sert** (support, Shopify, factures, Google) — pas de chauffe artificielle YouTube / Search pour simuler un humain
- [ ] **(précaution)** Attendre quelques jours avant de lier Ads / GMC. Pas de compte → GMC → Ads dans la même heure
- [ ] Pas de Gmail « aged » acheté
- [ ] Profil Chrome dédié. Connexion **stable** (box). IPRoyal = option après incident, voir `proxy-iproyal.md`
- [ ] Jamais Shopify derrière un proxy

**Téléphone**
- [ ] Joignable en vocal, testé. SIM physique > eSIM > VoIP
- [ ] Dédié **seulement** s'il est décroché et maintenu. Sinon le n° OH Ventures déjà testé
- [ ] Même écriture partout où le n° apparaît (footer, policies, GMC)

**Adresse et identité légale**
- [ ] Adresse **professionnelle réelle**, droit d'usage, localisable, **identique aux justificatifs KYC GMC**
- [ ] **Interdit** : adresse Maps décorative / empruntée « le temps de la review »
- [ ] Footer / ton commercial : nom de la **marque**
- [ ] Mentions légales, CGV, confidentialité, infos précontractuelles : **OH Ventures** identifié (siège, SIREN). Le relevé bancaire dira OH Ventures — ne pas le cacher
- [ ] Une fois l'adresse choisie, on la garde (pas de swap post-approbation)

**Isolation**
- [ ] Isoler les **accès** (compte Google, profil Chrome, domaine). Pas fabriquer une autre personne morale
- [ ] Policies jamais identiques mot pour mot entre deux boutiques

## 2. Build (signaux de confiance)

**Contact (les reviewers regardent souvent le footer en premier)**
- [ ] Email pro cliquable `mailto:`
- [ ] Téléphone vocal cliquable
- [ ] Adresse réelle (la même que KYC / mentions légales)
- [ ] Footer → `/policies/*`, pas une copie CMS des policies

**À propos**
- [ ] Court, humain, factuel. Pas de roman, pas de faux crédits

**Réseaux**
- [ ] Ne pas lier un compte vide ou tout neuf. Absence = neutre

**Trust externe**
- [ ] Trustpilot : absent, ou ≥ 3,0 (gate dur)
- [ ] ScamAdviser : viser 70+ ; bas sur un domaine neuf n'est **pas** un gate

**Transparence**
- [ ] ™/© seulement si les droits sont détenus
- [ ] Pas de fausse urgence
- [ ] Avant review : boutique sobre (pas de promo / avis / offres en façade)

## 3. Policies

Chiffres identiques partout. GMC s'appuie surtout sur **réglages structurés + URLs** : les conditions doivent matcher, le footer n'a pas à coller six textes.

- [ ] Policies dans Shopify → Settings → Policies (`/policies/*`)
- [ ] Footer vers ces URLs, pas de page CMS dupliquée
- [ ] Textes reformulés vs les autres boutiques
- [ ] Cut-off + fuseau, traitement, transit, fenêtre de retour, délai de remboursement : **mêmes chiffres** policies / FAQ / fiches / GMC — ceux du **fournisseur et de l'échantillon**, pas un barème générique
- [ ] Adresse de **retour** réelle et utilisable (le client doit savoir où renvoyer)
- [ ] Médiateur nommé et couverture vérifiée (CM2C ou autre)
- [ ] Pack `templates-fr/` : marque en façade, OH Ventures en CGV / confidentialité

## 4. Produits, collections, feed

**Collections**
- [ ] Mode **UNIVERS** : viser ≥ 5 produits / collection, pas de vide
- [ ] Mode **PRODUIT PUR** : exception — héros + variantes, ne pas gonfler pour la règle des 5
- [ ] Aucune collection publiée vide

**Produits / images / technique**
- [ ] Titres, descriptions, SKU uniques ; titre cohérent avec l'URL
- [ ] Pas de claims invérifiables
- [ ] Specs / tailles de la zone (FR)
- [ ] Pas de texte incrusté, pas de collage, variante = image
- [ ] Pas d'images dans le body des descriptions
- [ ] 404 redirigées
- [ ] **(précaution)** vitesse > 65
- [ ] Produits en rupture archivés

## 5. Création GMC (quand le signal commercial le justifie)

Search borné peut précéder Shopping (Search n'exige pas Merchant Center).

1. Boutique terminée, commande test OK (mobile, checkout, mails, suivi, tél, 404, consentement)
2. Policies finalisées, chiffres ops
3. App Shopify **Google & YouTube** → Ads + GMC, **zéro campagne**
4. Claim domaine DNS TXT, HTTPS
5. Réglages structurés livraison / retours = policies
6. Une seule demande de review
7. 30 jours sans changement brutal

## 6. Audit boutique terminée (avant review)

Dérouler en pass/fail. Un échec = ne pas soumettre.

**Général**
- [ ] Footer = email / tél / adresse identiques aux policies et au KYC
- [ ] Policies accessibles desktop + mobile, pas de noindex
- [ ] Zéro 404
- [ ] Tél testé en vocal
- [ ] Trustpilot absent ou ≥ 3,0
- [ ] Mentions légales + CGV + confidentialité nomment OH Ventures
- [ ] Commande test complète passée

**Moyens de paiement — obligatoire (cas réel : Apple Pay affiché, pas activé)**

Les trois doivent matcher **exactement** : pictos footer · liste dans la policy « Moyens de paiement » · checkout en visiteur anonyme.

Recette (Maison Noirmont, 15/08 — détail en mémoire `sources-audit-conformite-boutique.md`) :

- [ ] Checkout visiteur anonyme : lister CB, PayPal, Apple Pay, Google Pay, Shop Pay, Klarna, etc. **réellement proposés**
- [ ] Footer : chaque picto = un moyen du checkout. Un picto en trop (souvent Apple Pay / Shop Pay) = échec
- [ ] Policy paiement : même liste, rien d'inventé
- [ ] `https://<domaine>/payments/config` : portefeuilles accélérés (`applePayConfig`, `shopifyPayConfig`, `paypalConfig`, `googlePayConfig`…). **Ne liste pas** les passerelles classiques — Klarna peut être en caisse et absent de ce JSON
- [ ] Devise facturée : `"currency":"EUR"` dans ce JSON
- [ ] Si le thème a « Afficher manuellement les icônes » **coché** : risque élevé de picto fantôme → le décocher (le footer suit alors `shop.enabled_payment_types`)
- [ ] Attribut HTML typique des pictos auto : `aria-labelledby="pi-<type>"`
- [ ] Pas de « 4× / Klarna » sous le seuil réel du fractionné, ni si Klarna est off
- [ ] Mention **TTC** près des prix

**Leçons Noirmont (15–23/08) — obligatoire, détail dans `audit-lecons-noirmont.md`**

Identité / JSON-LD
- [ ] `shop.email` = e-mail pro (pas un Gmail dans le JSON-LD)
- [ ] Une seule graphie du n° ; footer = adresse + `mailto:` + `tel:`
- [ ] JSON-LD `Organization` parse en strict ; Contact a l'adresse postale

Policies
- [ ] Une seule mentions légales (`/policies/legal-notice`), pas de page CMS jumelle
- [ ] Médiateur + **URL** ; pas d'`assistance@shopify.com`
- [ ] Page suivi colis si on l'annonce
- [ ] Une formulation de délai (pas « 2–3 semaines » **et** « 14–21 j »)
- [ ] Garantie / SAV / collection / configurateur : le site ne se ment pas

Produit / trust (causes du ban 23/08)
- [ ] 0 marque tierce (titre, body, JSON-LD, alt, tag, **filename CDN**)
- [ ] 0 « Qualité Premium » / verified / note dormante
- [ ] 0 `compareAtPrice` y compris brouillons ; 0 image partagée entre fiches actives
- [ ] Handle changé → 301 (pas 404)

Après correction d'un flag GMC : attendre **7–10 j**, pas d'ads.

## 7. Timeline & refus

Review 3–5 j · re-review 7–10 j · tout corriger, pas seulement le motif cité.

## 8. Post-approbation (30 j)

Pas de changement brutal. Surveiller les désapprobations produit.
