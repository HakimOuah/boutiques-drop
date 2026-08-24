---
name: gmc-acceptance
description: Framework d'approbation Google Merchant Center (GMC), basé sur les playbooks Terry Ecom 2026 (500+ reviews de boutiques réelles) et les décisions Hakim 24/08/2026 (isolation opérationnelle, identité légale honnête). Utiliser dès que Hakim prépare une nouvelle boutique pour Google Ads, mentionne GMC, Merchant Center, suspension, misrepresentation, refus/approbation Google, feed Shopping, ou policies Shopify à mettre en conformité. Aussi pour auditer une boutique existante avant soumission ou après un refus, et pour rédiger les policies FR d'une nouvelle boutique. Pour scaler une campagne déjà approuvée, voir le skill shopping-scaling.
---

# GMC Acceptance — approbation Merchant Center

Tu aides Hakim (OH Ventures, boutiques Shopify dropshipping France) à obtenir et conserver l'approbation Google Merchant Center. Sources : playbooks Terry Ecom 2026, recap opérationnel du 24/08, avis Codex validé par Hakim le 24/08 soir (isolation = discipline de gestion, pas masquage du propriétaire), pack policies FR éprouvé. Le scaling post-approbation vit dans `shopping-scaling`.

**Idée centrale : Google note des signaux, pas des intentions.** La review est machine d'abord, humain ensuite. La misrepresentation est **cumulative**. Les explications ne compensent jamais un mismatch.

**Socle qui reste non négociable :** boutique terminée avant review GMC · délais / retours / coordonnées cohérents partout · une seule demande de review après audit complet · stabilité 30 jours · délais publiés = ops réelle · aucune modification rétroactive du parc déjà validé (Tuftéo, Bonum Vitae, Noirmont, Bien Brûlé).

Plusieurs heuristiques Terry (domaine 30 j, Gmail chauffé 5–7 j, IP dédiée, n° unique, 5 produits / collection) sont des **précautions possibles**, pas des gates officiels. Ne pas les imposer comme des exigences démontrées.

## Références du skill

- `references/checklist-pre-soumission.md` — checklist pass/fail + **audit boutique terminée** (dont moyens de paiement). À lire pour tout audit ou préparation.
- `references/templates-policies.md` — règles d'usage du pack FR. **Ne jamais copier tel quel** entre domaines.
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
- Domaine dédié, Workspace / compte Google dédié, profil Chrome dédié.
- Téléphone dédié **seulement** s'il est réellement décroché et maintenu. Sinon le n° vocal OH Ventures déjà testé.
- Adresse = siège / adresse pro **réelle** (47 rue Vivienne ou autre justificable). Pas d'adresse empruntée « le temps du GMC ».
- Footer et ton = marque. Mentions légales, CGV, confidentialité, KYC GMC = OH Ventures + siège + SIREN.
- IPRoyal : **option**, après un incident de compte identifié. Pas une première brique. Une IP box stable vaut mieux qu'un proxy cosmétique.
- Compte Google « vivant » parce qu'il sert (support, Shopify, factures, Google), pas parce qu'on lance des vidéos YouTube pour simuler un humain.
- Orysbain : aller au bout du test. Lumière Matière : acheter le domaine, s'arrêter là (pas Shopify, pas Workspace, pas GMC) tant qu'Orysbain n'a pas parlé.
- Mode **PRODUIT PUR** : héros + 2–4 variantes (ou 5–8 max si chaque source est validée). Ne pas gonfler le catalogue pour satisfaire « 5 produits / collection × plusieurs collections ». Cette règle Terry vaut pour un univers, pas pour un test produit pur.

## Adaptation maison — flux déjà vivant (18/08/2026)

Le GMC du parc naît de l'app Shopify **Google & YouTube**, liée à Ads **sans campagne**. Flux déjà validé = on le laisse vivre. Workspace (adresse pro) avant de lier un nouveau compte.

## Fenêtres de risque

48 h (scan auto) · 7 j (humain possible) · 30 j (suspensions surtout **après** approbation). Pas de changement brutal.

## Erreurs à refus / mismatch immédiat

Policies dupliquées ou chiffres qui divergent · picto de paiement affiché (Apple Pay, etc.) alors que le checkout ne l'offre pas · adresse décorative / identité vendeur absente là où la loi l'exige · VoIP · Trustpilot < 3,0 · claims santé · reviews à répétition · texte incrusté sur images · 404 · promo / avis trop tôt avant review.

## Adaptation France

Policies en français. Rétractation 14 j + 30 j commercial si assumé. Mentions légales + médiation + **vendeur identifié** (OH Ventures). Délais = ops du fournisseur retenu, pas un barème générique. Pack PDF : 3 + 2–4 + 5–7 j **uniquement si c'est vrai**.

## Comment travailler

- **Préparer une nouvelle boutique** → gate fournisseur / échantillon d'abord (checklist §0), puis `checklist-pre-soumission.md`. Isolation légère, identité honnête.
- **Auditer une boutique terminée** → checklist section **Audit boutique terminée**. Y compris **moyens de paiement** : footer = checkout = policy. Recette `sources-audit-conformite-boutique.md`.
- **Rédiger les policies** → `templates-policies.md` + `templates-fr/`, reformuler, chiffres ops, marque en façade, OH Ventures en CGV / confidentialité / mentions légales.
- **Proxy** → seulement si incident. Recette `proxy-iproyal.md`. Jamais Shopify derrière.
- **Scaler** → `shopping-scaling`.
