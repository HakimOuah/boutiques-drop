---
name: gmc-acceptance
description: Framework d'approbation Google Merchant Center (GMC) — checklist Terry + isolation Hakim 24/08, chemin SMP (Simprosys, 1 Gmail = 1 Shopify = 1 MC = 1 Ads, NoBrand au lancement). Utiliser dès que Hakim prépare une nouvelle boutique pour Google Ads, mentionne GMC, Merchant Center, Simprosys, NoBrand, suspension, misrepresentation, refus/approbation Google, feed Shopping, ou policies Shopify. Pour scaler une campagne déjà approuvée, voir le skill shopping-scaling.
---

# GMC Acceptance — approbation Merchant Center

Tu aides Hakim (OH Ventures, boutiques Shopify dropshipping France) à obtenir et conserver l'approbation Google Merchant Center. Sources : playbooks Terry Ecom 2026, recap opérationnel du 24/08, avis Codex validé par Hakim le 24/08 soir (isolation = discipline de gestion, pas masquage du propriétaire), pack policies FR éprouvé, chemin SMP 11/09 (Simprosys + NoBrand). Le scaling post-approbation vit dans `shopping-scaling`.

**Chemin SMP (nouvelles mini-marques) — à coller au-dessus du parc historique :**

```
NDD + Workspace → 1 Gmail = 1 Shopify = 1 Merchant Center = 1 Google Ads
  → Mode NoBrand
  → Mise en ligne & indexation (2/3 jours)
  → Simprosys + Merchant Center (Gmail dédié)
  → Tous les produits verts + 24 h
       ├─ MC good  → Google Ads + tracking → PMax Feed Only
       └─ MC banni et non débannissable → Méthode Z   ← PLAN B seulement
  → FullBranding après 1–4 semaines selon niveau MC
```

**Simprosys** est le pont Shopify ↔ MC ↔ Ads pour une **nouvelle** muse. L'app **Google & YouTube** reste le flux **déjà vivant** du parc (Tuftéo, Bonum Vitae, Noirmont) : on ne le migre pas. Ne pas proposer Google & YouTube pour un lancement SMP.

**Méthode Z est hors chemin.** Hors ban GMC non débannissable, on ne l'exécute pas. Process : vidéo formation — ne pas inventer.

**Idée centrale : Google note des signaux, pas des intentions.** La review est machine d'abord, humain ensuite. La misrepresentation est **cumulative**. Les explications ne compensent jamais un mismatch.

**Socle qui reste non négociable :** boutique terminée avant review GMC · délais / retours / coordonnées cohérents partout · une seule demande de review après audit complet · stabilité 30 jours · délais publiés = ops réelle · aucune modification rétroactive du parc déjà validé (Tuftéo, Bonum Vitae, Noirmont — Bien Brûlé est fermé).

Plusieurs heuristiques Terry (domaine 30 j, Gmail chauffé 5–7 j, IP dédiée, n° unique, 5 produits / collection) sont des **précautions possibles**, pas des gates officiels. Ne pas les imposer comme des exigences démontrées.

## Références du skill

- `references/checklist-pre-soumission.md` — checklist pass/fail + **audit boutique terminée** (dont moyens de paiement). À lire pour tout audit ou préparation.
- `references/audit-lecons-noirmont.md` — défauts réellement corrigés sur Maison Noirmont (15–23/08) : scans + OneClickBrand + ban « déclarations trompeuses ». **À dérouler sur chaque boutique terminée.**
- `references/templates-policies.md` — paraphraser à partir du gabarit (même sens, texte différent). **Ne pas coller** le texte d’un autre domaine. Structure NoBrand conservée (CGV+CGU réunies, etc.).
- `references/templates-fr/` — 6 templates. Ton commercial = marque. Identité légale OH Ventures là où la loi l'exige (CGV, confidentialité, mentions légales). Chiffres = ops réelle.
- `references/proxy-iproyal.md` — recette IP ISP, **optionnelle**. Première boutique : IP box stable suffit. Jamais Shopify derrière un proxy.
- Mémoire `sources-audit-conformite-boutique.md` — recette paiement (footer vs checkout vs `/payments/config`).

## Principes

1. **Isoler les accès et les opérations, pas fabriquer une autre personne morale.** Compte Google / Workspace dédié, profil Chrome dédié, domaine dédié. L'entité vendeur reste **OH Ventures**. Google autorise une entreprise à gérer plusieurs Merchant Center.
2. **La cohérence bat la perfection.** Chiffres (cut-off + fuseau, traitement, transit, fenêtre de retour, remboursement) identiques policies / FAQ / fiches / réglages GMC. C'est le déclencheur n°1. Le footer n'a pas à recopier six policies : il pointe vers `/policies/*` et affiche les mêmes coordonnées.
3. **Moins de reviews = plus de succès.** Après refus : tout corriger, attendre 7–10 jours.
4. **Adresse et identité = vraies, justificables.** Adresse professionnelle enregistrée, droit d'usage, identique aux docs KYC GMC. **Interdit :** adresse Maps décorative sans activité. Ton / footer au nom de la marque : oui. Disparition volontaire d'OH Ventures dans CGV, confidentialité, mentions légales, infos précontractuelles : non. Le relevé bancaire du client affichera OH Ventures — le cacher crée le mismatch.
5. **Produit / conformité avant infra GMC.** Appareil électrique (sèche-serviettes, luminaire) : fournisseur exact, échantillon, CE / notice / importateur / REP-DEEE **avant** Shopify et avant toute review. Un domaine âgé ne rattrape pas un produit non conforme.

## Décisions Hakim — 24/08 soir (après avis Codex)

Parc déjà validé : **on ne touche pas.**

**Nouvelles boutiques — isolation légère, identité honnête :**
- Domaine dédié, profil Chrome dédié, e-mail pro sur le domaine. Workspace **quand la vérif Google est possible** (SIM qui reçoit les short codes). Sinon boîte registrar (IONOS) à la même adresse — on bascule plus tard. Pas de Gmail gratuit boutique.
- Téléphone dédié **seulement** s'il est réellement décroché et maintenu. Sinon le n° vocal OH Ventures déjà testé.
- Adresse = siège / adresse pro **réelle** (47 rue Vivienne ou autre justificable). Pas d'adresse empruntée « le temps du GMC ».
- Footer et ton = marque. Mentions légales, CGV, confidentialité, KYC GMC = OH Ventures + siège + SIREN.
- IPRoyal : **option**, après un incident de compte identifié. Pas une première brique. Une IP box stable vaut mieux qu'un proxy cosmétique.
- Compte Google « vivant » parce qu'il sert (support, Shopify, factures, Google), pas parce qu'on lance des vidéos YouTube pour simuler un humain.
- Orysbain : aller au bout du test. Lumière Matière : domaine **lumierematiere.fr** (le `.com` existe aussi, identité = `.fr`), **Workspace en cours le 24/08**. E-mail boutique = `contact@lumierematiere.fr` (utilisateur Workspace), jamais le Gmail gratuit servant d'admin. Profil Chrome `Lumière Matière` connecté à cet utilisateur seulement. Téléphone affiché = `+33 7 56 82 80 94`.
- Téléphone **affiché** sur le site = toujours `+33 7 56 82 80 94` (ligne du parc). Un n° brûlé pour *créer un compte Google* reste utilisable en footer / SAV s'il décroche.
- Mode **PRODUIT PUR** : héros + 2–4 variantes (ou 5–8 max si chaque source est validée). Ne pas gonfler le catalogue pour satisfaire « 5 produits / collection × plusieurs collections ». Cette règle Terry vaut pour un univers, pas pour un test produit pur. **Chemin SMP = UNIVERS, sans plafond SKU.**
- **CSS / Dshop : mis de côté.** Ne pas l'ouvrir, ne pas le proposer comme prochaine étape, ne pas le présenter comme un contournement GMC. En France, Google Shopping passe déjà par un CSS. Détail : `drop-elite-google-os/docs/css-shopping-france.md`.

## Chemin SMP — isolation 1=1=1=1, Simprosys, NoBrand (11/09/2026)

Checklist pré-soumission **conservée telle quelle** (Q8 Hakim). En plus, pour chaque **nouvelle** mini-marque :

1. **Isolation des comptes :** **1 Gmail = 1 Shopify = 1 Merchant Center = 1 Google Ads.** Un compte brûlé n'entraîne pas les autres. Workspace / Gmail **dédié à cette boutique**.
2. **Simprosys** (pas l'app Google & YouTube) : Get Started with Google Shopping → Sign in with Google (Gmail dédié) → scopes Ads + Shopping + sites. Attendre **tous les produits verts (approuvés) + 24 h** avant Ads.
3. **NoBrand au lancement**, jusqu'au FullBranding (1 / 2 / 3–4 sem. selon niveau MC ; le board écrit aussi « attendre 2 semaines ») :
   - **Identiques partout** (site, politiques, Paramètres › Général, Emplacements) : e-mail, téléphone, adresse.
   - **Interdit :** timer, prix barrés / code promo, avis, garantie commerciale, satisfait ou remboursé, popup, page 404.
   - **Obligatoire :** header, footer, pages générales et légales, fiches, checkout conformes. Mentions légales **obligatoires**. Entité **OH Ventures** visible en CGV, confidentialité et mentions.
   - Vendor Shopify (`marque` du flux) = **nom de la mini-marque**, 100 % du catalogue.
4. **Policies.** **Paraphraser** à partir du gabarit NoBrand : même sens, **texte différent**. Pas de copier-coller d’un domaine à l’autre. Structure conservée : **CGV et CGU réunies** dans « Conditions d’utilisation » (ne pas remplir « Conditions de vente » à part), confidentialité, retours, livraison, mentions. Entité, CM2C, e-mail / tél / adresse identiques. Les blocs HTML d'une autre niche (carport, colis lourds) **ne se collent pas** sur une mini-marque textile — on les réécrit pour le produit réel.
5. Délais publiés = **ops réelle** du fournisseur (Chine longue OK si c'est vrai). Pas le barème 7–10 j des templates s'il est faux.

Pack hub = rétractation 14 j + 30 j commercial **sauf** si Hakim dit que NoBrand (14 j légal, aucune garantie commerciale) l'écrase — aujourd'hui la checklist l'emporte.

## Adaptation maison — flux déjà vivant (18/08/2026)

Le GMC du **parc déjà validé** naît de l'app Shopify **Google & YouTube**, liée à Ads **sans campagne**. Flux déjà validé = on le laisse vivre. **Nouvelles mini-marques SMP : Simprosys**, voir section ci-dessus. Compte Google / Workspace **quand on peut le vérifier** ; pas le jour du mur SMS. L'e-mail boutique (IONOS ou Workspace) doit déjà être celui du domaine.

## Fenêtres de risque

48 h (scan auto) · 7 j (humain possible) · 30 j (suspensions surtout **après** approbation). Pas de changement brutal.

## Erreurs à refus / mismatch immédiat

Policies **identiques mot pour mot** d’un domaine à l’autre, ou chiffres qui divergent · picto de paiement affiché (Apple Pay, etc.) alors que le checkout ne l'offre pas · adresse décorative / identité vendeur absente là où la loi l'exige · VoIP · Trustpilot < 3,0 · claims santé · reviews à répétition · texte incrusté sur images · 404 · promo / avis trop tôt avant review.

## Adaptation France

Policies en français. Rétractation 14 j + 30 j commercial si assumé. Mentions légales + médiation + **vendeur identifié** (OH Ventures). Délais = ops du fournisseur retenu, pas un barème générique. Pack PDF : 3 + 2–4 + 5–7 j **uniquement si c'est vrai**.

## Comment travailler

- **Préparer une nouvelle boutique** → gate fournisseur / échantillon d'abord (checklist §0), puis `checklist-pre-soumission.md`. Isolation 1=1=1=1, Simprosys, NoBrand, identité honnête.
- **Auditer une boutique terminée** → checklist §6 + `audit-lecons-noirmont.md`. Y compris **moyens de paiement** (footer = checkout = policy) et les flags Noirmont (marque tierce, JSON-LD, délais, mentions légales doublons, claims « premium »). Recette sources : `sources-audit-conformite-boutique.md`.
- **Rédiger les policies** → `templates-policies.md` + `templates-fr/` + structure NoBrand (CGV+CGU réunies). **Paraphraser** : même obligations, autre formulation. Ne pas coller le texte d’un autre domaine ni le HTML Sous Abri tel quel. Chiffres = ops réelle. Marque en façade, OH Ventures en CGV / confidentialité / mentions légales.
- **Proxy** → seulement si incident. Recette `proxy-iproyal.md`. Jamais Shopify derrière.
- **Scaler** → `shopping-scaling`.
