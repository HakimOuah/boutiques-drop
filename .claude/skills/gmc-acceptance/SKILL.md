---
name: gmc-acceptance
description: Framework d'approbation Google Merchant Center (GMC), basé sur les playbooks Terry Ecom 2026 (500+ reviews de boutiques réelles). Utiliser dès que Hakim prépare une nouvelle boutique pour Google Ads, mentionne GMC, Merchant Center, suspension, misrepresentation, refus/approbation Google, feed Shopping, ou policies Shopify à mettre en conformité. Aussi pour auditer une boutique existante avant soumission ou après un refus, et pour rédiger les policies FR d'une nouvelle boutique (templates prêts à l'emploi inclus). Pour scaler une campagne déjà approuvée, voir le skill shopping-scaling.
---

# GMC Acceptance — approbation Merchant Center

Tu aides Hakim (OH Ventures, boutiques Shopify dropshipping France) à obtenir et conserver l'approbation Google Merchant Center. Source : playbooks Terry Ecom 2026 (« Fast-Track GMC Approval Framework », « GMC Guidance & Compliance Checklist », « GMC Policy Templates »), fondés sur 500+ reviews réelles de boutiques. Le scaling post-approbation vit dans le skill dédié `shopping-scaling`.

**Idée centrale : Google note des signaux, pas des intentions.** La review est machine d'abord, humain ensuite. Le crawler compare texte, structure, métadonnées et cohérence entre boutique, GMC et assets. La misrepresentation est **cumulative** : des petites incohérences s'additionnent jusqu'au refus. Les explications ne compensent jamais un mismatch.

## Références du skill

- `references/checklist-pre-soumission.md` — checklist pass/fail complète (pré-build → build → policies → produits → création GMC → soumission → post-approbation). **À lire pour tout audit ou préparation de boutique.**
- `references/templates-policies.md` — règles d'usage et structure attendue des 6 policies (retours, livraison, confidentialité, CGV, facturation, FAQ). **Ne jamais copier tel quel** : Google détecte les policies dupliquées entre domaines.
- `references/templates-fr/` — les 6 templates traduits en français, prêts à l'emploi pour les boutiques FR (`retours.md`, `livraison.md`, `confidentialite.md`, `cgv.md`, `facturation.md`, `faq.md`). Remplacer les [placeholders], **reformuler des passages à chaque boutique** (jamais deux boutiques avec le même texte mot pour mot), puis coller le texte final identique dans Shopify ET GMC.

## Principes non négociables (échec = stop et corrige avant d'avancer)

1. **Une boutique = une identité.** Jamais réutiliser Gmail, téléphone, adresse, IP ou contenu entre boutiques. Le linkage multi-boutiques est la cause n°1 des suspensions répétées.
2. **La cohérence bat la perfection.** Footer = pages policies = checkout = fiche GMC, mot pour mot. Google compare ligne par ligne (heure limite de commande + fuseau, délais de traitement et transit, fenêtre de retour, délai de remboursement).
3. **Moins de reviews = plus de succès.** Ne jamais redemander une review à la chaîne. Après refus : corriger TOUS les problèmes (pas seulement celui cité), attendre 7–10 jours.
4. **Les « trust assets » sont scorés.** Pages About/policies vides, cachées (pas dans le footer, noindex, inaccessibles mobile) ou dupliquées depuis d'autres domaines = setup non légitime, trust dégradé.
5. **Ordre de création strict** : boutique finie → policies finalisées dans Shopify → produits uploadés → création GMC → vérification + claim du domaine (DNS TXT de préférence, version HTTPS) → policies recopiées mot pour mot dans GMC → connexion du feed (Simprosys) → demande de review. **Jamais créer le GMC avant que la boutique soit complète** — Google peut indexer des pages incomplètes.

## Fenêtres de risque

- **48 premières heures** : scan automatique domaine/produits/policies — la plupart des échecs de setup incomplet tombent ici.
- **7 premiers jours** : checks profonds + review humaine possible, les mismatches de policies sont attrapés là.
- **30 premiers jours** : monitoring continu. Éviter tout changement brutal (thème, policies, coordonnées). **La plupart des suspensions arrivent APRÈS l'approbation, pas avant.**

## Erreurs à refus immédiat

Pages policies dupliquées · numéro VoIP (préférer SIM physique, joignable en vocal, identique partout : vérif Gmail, GMC, footer) · réseaux sociaux faux ou tout neufs liés trop tôt · Trustpilot < 3,0 (gate dur — pas de Trustpilot vaut mieux qu'un mauvais) · claims santé/résultats · reviews demandées à répétition · texte incrusté ou collages sur les images produit · collections de moins de 5 produits · 404 non redirigées.

## Adaptation maison (Hakim, 18/08/2026) — flux déjà vivant

Terry dit « ne jamais créer le GMC avant que la boutique soit complète » et de connecter le feed via Simprosys. **Le parc ne fait pas ça.** Le GMC naît de l'application Shopify **Google & YouTube**, liée à Ads **sans lancer de campagne**. Tuftéo et Bonum Vitae : flux soumis → produits d'abord **limités** → puis **validés**, stables depuis des semaines.

**Si un flux est déjà validé : on le laisse vivre.** Pas de nouveau compte, pas de resoumission « propre », pas de coupure du lien. L'objectif devient protéger l'actif (éviter un changement brutal de thème / e-mail / policies / catalogue). Workspace (adresse pro) **avant** de lier un nouveau compte. Détail en mémoire `app-google-youtube-flux-vivant.md`.

## Adaptation France (contexte Hakim)

Les playbooks sont écrits pour le marché US. Pour les boutiques FR :
- Policies **en français**, adaptées au droit FR : rétractation légale 14 jours minimum (les templates disent 30 jours — c'est au-dessus du minimum, garder 30 si assumé opérationnellement), mentions légales obligatoires, médiation de la consommation.
- Cohérent avec les règles maison : promesses vérifiables uniquement, aucun claim santé/résultat, pas de fausse urgence ni faux compteurs — c'est exactement ce que Google flague aussi.
- Délais de livraison réalistes dropshipping (traitement 1–2 j ouvrés + transit 6–8 j ouvrés) et **identiques** entre policy Shopify, GMC et FAQ.

## Comment travailler

- **Préparer une nouvelle boutique** → dérouler `references/checklist-pre-soumission.md` section par section, en pass/fail, avant toute création de GMC.
- **Auditer / après un refus** → même checklist en mode audit : lister chaque item en échec, tout corriger, attendre 7–10 jours avant re-soumission.
- **Rédiger les policies** → lire les règles dans `references/templates-policies.md`, partir des templates FR de `references/templates-fr/`, remplacer tous les [placeholders], reformuler des passages (jamais le même texte entre deux boutiques), puis coller le texte final identique dans Shopify Settings → Policies ET dans GMC.
- **Scaler une campagne approuvée** → skill `shopping-scaling` (framework PMAX profit-first, hors périmètre de ce skill).
