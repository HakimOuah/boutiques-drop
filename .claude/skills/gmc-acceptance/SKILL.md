---
name: gmc-acceptance
description: Framework d'approbation Google Merchant Center (GMC), basé sur les playbooks Terry Ecom 2026 (500+ reviews de boutiques réelles) et le recap opérationnel Hakim 24/08/2026. Utiliser dès que Hakim prépare une nouvelle boutique pour Google Ads, mentionne GMC, Merchant Center, suspension, misrepresentation, refus/approbation Google, feed Shopping, ou policies Shopify à mettre en conformité. Aussi pour auditer une boutique existante avant soumission ou après un refus, et pour rédiger les policies FR d'une nouvelle boutique (templates prêts à l'emploi inclus). Pour scaler une campagne déjà approuvée, voir le skill shopping-scaling.
---

# GMC Acceptance — approbation Merchant Center

Tu aides Hakim (OH Ventures, boutiques Shopify dropshipping France) à obtenir et conserver l'approbation Google Merchant Center. Sources : playbooks Terry Ecom 2026 (« Fast-Track GMC Approval Framework », « GMC Guidance & Compliance Checklist », « GMC Policy Templates »), recap opérationnel du 24/08/2026 (domaine, Gmail vivant, un n° / une adresse par boutique, policies au nom de la marque), templates policies FR éprouvés (pack PDF Hakim). Le scaling post-approbation vit dans le skill dédié `shopping-scaling`.

**Idée centrale : Google note des signaux, pas des intentions.** La review est machine d'abord, humain ensuite. Le crawler compare texte, structure, métadonnées et cohérence entre boutique, GMC et assets. La misrepresentation est **cumulative** : des petites incohérences s'additionnent jusqu'au refus. Les explications ne compensent jamais un mismatch.

## Références du skill

- `references/checklist-pre-soumission.md` — checklist pass/fail complète (pré-build → build → policies → produits → création GMC → soumission → post-approbation). **À lire pour tout audit ou préparation de boutique.**
- `references/templates-policies.md` — règles d'usage du pack policies FR (retours, livraison, confidentialité, CGV, paiement, FAQ). **Ne jamais copier tel quel** : Google détecte les policies dupliquées entre domaines.
- `references/templates-fr/` — les 6 templates du pack éprouvé, en français. Remplacer les [placeholders], **reformuler des passages à chaque boutique** (jamais deux boutiques avec le même texte mot pour mot), coller le texte final identique dans Shopify ET GMC. Parler **au nom de la marque**, jamais de l'entité (pas de SIREN, TVA, SASU, OH Ventures).

## Principes non négociables (échec = stop et corrige avant d'avancer)

1. **Une boutique = une identité.** Jamais réutiliser Gmail, téléphone, adresse, IP ou contenu entre boutiques — **y compris si c'est la même société**. Le linkage multi-boutiques est la cause n°1 des suspensions répétées.
2. **La cohérence bat la perfection.** Footer = pages policies = checkout = fiche GMC, mot pour mot. Google compare ligne par ligne (heure limite de commande + fuseau, délais de traitement et transit, fenêtre de retour, délai de remboursement). **C'est le déclencheur n°1 de rejet** (top misrepresentation trigger).
3. **Moins de reviews = plus de succès.** Ne jamais redemander une review à la chaîne. Après refus : corriger TOUS les problèmes (pas seulement celui cité), attendre 7–10 jours.
4. **Les « trust assets » sont scorés.** Pages About/policies vides, cachées (pas dans le footer, noindex, inaccessibles mobile) ou dupliquées depuis d'autres domaines = setup non légitime, trust dégradé. Une ou deux collections seulement = setup trop mince.
5. **Ordre de création strict** : boutique finie → policies finalisées dans Shopify → produits uploadés → création GMC → vérification + claim du domaine (DNS TXT de préférence, version HTTPS) → policies recopiées mot pour mot dans GMC → connexion du feed → demande de review. **Jamais créer le GMC avant que la boutique soit complète** — Google peut indexer des pages incomplètes. **Ne pas soumettre le jour de l'achat du domaine** : monter la boutique, puis laisser passer quelques semaines.

## Décisions Hakim — 24/08/2026 (nouvelles boutiques)

Pour toute **nouvelle** boutique, l'isolation GMC prime sur le linkage assumé du 16/08. Le parc déjà en ligne (Tuftéo, Bonum Vitae, Maison Noirmont, Bien Brûlé) **ne bouge pas** : on ne change pas d'adresse, de téléphone ni de policies sur un flux déjà validé.

- **Domaine.** 30+ jours d'âge avant soumission, c'est la première brique de trust. On n'achète **pas** de domaine expiré/racheté (l'âge repart à zéro, et l'historique est inconnu). Recette : acheter un domaine neuf ou déjà actif, configurer la boutique, **ne pas soumettre**, attendre quelques semaines.
- **Gmail.** Un Gmail **dédié** à la boutique + GMC + Ads (jamais le Gmail perso, jamais partagé entre boutiques) **et vivant** : newsletters, YouTube, Search, mails entrants/sortants. Un Gmail qui ne sert qu'à ouvrir le GMC a l'air faux. Le laisser vieillir 5–7 jours minimum, le chauffer, puis seulement construire le GMC. Pas de Gmail « aged » acheté. Pas de Gmail → GMC → Ads dans la même heure.
- **Téléphone.** Un numéro **par boutique**, même société. Ligne on/off acceptable si elle reçoit vraiment les appels vocaux. SIM physique > eSIM > VoIP (VoIP = refus fréquent). Même numéro : vérif Gmail, GMC, footer.
- **Adresse.** Un adresse **par boutique**, réelle et localisable sur Google Maps, différente des autres stores. Elle isole le projet aux yeux de Google, elle ne prouve pas l'identité. Une fois choisie, on la **garde** (la changer juste après l'approbation est un changement brutal). Les documents de vérif GMC n'ont pas à matcher cette adresse vitrine.
- **Policies au nom de la marque.** Dans les 6 policies + footer + champs GMC : le nom de la marque, l'adresse vitrine, l'email et le téléphone de **cette** boutique. **Jamais** SIREN, n° TVA, SASU, OH Ventures, « la société ». Les mentions légales (page séparée, obligation FR) portent le siège réel — elles ne se recopient **pas** dans le GMC.
- **Proxy / IP.** Pratique actuelle : un profil Chrome dédié par boutique / Gmail. IP dédiée + proxy : tuto à venir, ne pas improviser. Ne jamais ouvrir Shopify derrière un proxy anti-détection.

Le 16/08, le parc existant a assumé une adresse et un téléphone partagés (siège 47 rue Vivienne + un seul n° vocal). Ça reste vrai **pour ces boutiques-là**. Ça ne s'applique plus aux prochaines.

## Adaptation maison — flux déjà vivant (18/08/2026)

Terry dit « ne jamais créer le GMC avant que la boutique soit complète » et de connecter le feed via Simprosys. **Le parc déjà en ligne ne fait pas ça.** Le GMC naît de l'application Shopify **Google & YouTube**, liée à Ads **sans lancer de campagne**. Tuftéo et Bonum Vitae : flux soumis → produits d'abord **limités** → puis **validés**, stables depuis des semaines.

**Si un flux est déjà validé : on le laisse vivre.** Pas de nouveau compte, pas de resoumission « propre », pas de coupure du lien. L'objectif devient protéger l'actif (éviter un changement brutal de thème / e-mail / policies / catalogue). Workspace (adresse pro) **avant** de lier un nouveau compte. Détail en mémoire `app-google-youtube-flux-vivant.md`.

## Fenêtres de risque

- **48 premières heures** : scan automatique domaine/produits/policies — la plupart des échecs de setup incomplet tombent ici.
- **7 premiers jours** : checks profonds + review humaine possible, les mismatches de policies sont attrapés là.
- **30 premiers jours** : monitoring continu. Éviter tout changement brutal (thème, policies, coordonnées). **La plupart des suspensions arrivent APRÈS l'approbation, pas avant.**

## Erreurs à refus immédiat

Pages policies dupliquées · wording policies Shopify ≠ GMC ≠ footer · numéro VoIP · réseaux sociaux faux ou tout neufs liés trop tôt · Trustpilot < 3,0 (gate dur — pas de Trustpilot vaut mieux qu'un mauvais) · claims santé/résultats · reviews demandées à répétition · texte incrusté ou collages sur les images produit · collections de moins de 5 produits · 404 non redirigées · SIREN/TVA/entité dans les policies GMC (linkage) · promo / avis / offres affichés trop tôt sur une boutique pas encore reviewée.

## Adaptation France (contexte Hakim)

Les playbooks Terry sont écrits pour le marché US. Pour les boutiques FR :
- Policies **en français**, pack éprouvé du 24/08. Rétractation légale 14 jours, étendue commercialement à 30 jours. Mentions légales et médiation de la consommation : page **légale** séparée, pas dans les champs GMC.
- Cohérent avec les règles maison : promesses vérifiables uniquement, aucun claim santé/résultat, pas de fausse urgence ni faux compteurs — c'est exactement ce que Google flague aussi.
- Délais : le pack PDF éprouvé affiche préparation 3 j + transit 2–4 j + total 5–7 j. **Ces chiffres ne se publient que s'ils sont vrais.** Pour du dropshipping AliExpress, garder le barème maison 1–2 j de traitement + 6–8 j de transit (total 7–10 j) et l'écrire **identiquement** policies / FAQ / GMC. Un transit « 2–4 j » alors qu'on livre en 12 j = mismatch factuel, trigger n°1.

## Comment travailler

- **Préparer une nouvelle boutique** → dérouler `references/checklist-pre-soumission.md` section par section, en pass/fail, avant toute création de GMC. Isolation identité (Gmail vivant, n° dédié, adresse Maps unique, domaine qui a quelques semaines) **avant** le build.
- **Auditer / après un refus** → même checklist en mode audit : lister chaque item en échec, tout corriger, attendre 7–10 jours avant re-soumission.
- **Rédiger les policies** → lire `references/templates-policies.md`, partir de `references/templates-fr/`, remplacer tous les [placeholders], reformuler des passages (jamais le même texte entre deux boutiques), **zéro identifiant d'entité**, puis coller le texte final identique dans Shopify Settings → Policies ET dans GMC.
- **Scaler une campagne approuvée** → skill `shopping-scaling` (framework PMAX profit-first, hors périmètre de ce skill).
