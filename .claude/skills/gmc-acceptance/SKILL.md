---
name: gmc-acceptance
description: Préparer ou auditer la conformité Merchant Center, les informations marchandes et une demande de réexamen.
---

# GMC Acceptance — approbation Merchant Center

Tu aides Hakim (OH Ventures, boutiques Shopify dropshipping France) à obtenir et conserver l'approbation Google Merchant Center. Sources : playbooks Terry Ecom 2026, recap opérationnel du 24/08, avis Codex validé par Hakim le 24/08 soir (isolation = discipline de gestion, pas masquage du propriétaire), pack policies FR éprouvé. Le scaling post-approbation vit dans `shopping-scaling`.

**Idée centrale : Google note des signaux, pas des intentions.** La review est machine d'abord, humain ensuite. La misrepresentation est **cumulative**. Les explications ne compensent jamais un mismatch.

**Seconde idée, apprise sur Lumière Matière (17/09/2026) : un site cohérent n'est pas un site vrai.** Accepté plusieurs jours, suspendu le lendemain de la première campagne. Tout était aligné — prix, délais, libellés — mais le site décrivait un revendeur parisien qui contrôle et emballe, via Colissimo, des luminaires en « pierre ». C'était du dropshipping depuis la Chine, en composite. **Chaque phrase doit rester vraie pour un produit qu'on ne touche jamais.** Lexique complet : [`references/lexique-interdit.md`](references/lexique-interdit.md).

**Socle qui reste non négociable :** boutique terminée avant review GMC · délais / retours / coordonnées cohérents partout · demande de review étayée après correction · délais publiés = ops réelle · aucune modification du parc hors périmètre demandé.

Plusieurs heuristiques Terry (domaine 30 j, Gmail chauffé 5–7 j, IP dédiée, n° unique, 5 produits / collection) sont des **précautions possibles**, pas des gates officiels. Ne pas les imposer comme des exigences démontrées.

## Références du skill

- `references/checklist-pre-soumission.md` — checklist pass/fail + **audit boutique terminée** (dont moyens de paiement). À lire pour tout audit ou préparation.
- **`references/lexique-interdit.md` — termes et tournures interdits, avec leurs remplacements. À lire avant d'écrire ou de relire la moindre copie.**
- `references/audit-lecons-lumiere-matiere.md` — suspension du 17/09 après lancement d'Ads : récit d'entreprise faux, matière surévaluée, garanties sur photos générées, collections vides.
- `scripts/scan_veracite.py` — scan automatique du site public et des métachamps contre le lexique. À zéro occurrence bloquante avant toute review et avant toute campagne.
- `references/audit-lecons-noirmont.md` — défauts réellement corrigés sur Maison Noirmont (15–23/08) : scans + OneClickBrand + ban « déclarations trompeuses ». À consulter pour les défauts comparables, sans imposer le récit historique à chaque audit.
- `references/templates-policies.md` — règles d'usage du pack FR. **Ne jamais copier tel quel** entre domaines.
- `references/templates-fr/` — 6 templates. Ton commercial = marque. Identité légale OH Ventures là où la loi l'exige (CGV, confidentialité, mentions légales). Chiffres = ops réelle.
- `references/proxy-iproyal.md` — recette IP ISP, **optionnelle**. Première boutique : IP box stable suffit. Jamais Shopify derrière un proxy.
- Mémoire `sources-audit-conformite-boutique.md` — recette paiement (footer vs checkout vs `/payments/config`).

## Principes

1. **Isoler les accès et les opérations, pas fabriquer une autre personne morale.** Compte Google / Workspace dédié, profil Chrome dédié, domaine dédié. L'entité vendeur reste **OH Ventures**. Google autorise une entreprise à gérer plusieurs Merchant Center.
2. **La cohérence bat la perfection.** Chiffres (cut-off + fuseau, traitement, transit, fenêtre de retour, remboursement) identiques policies / FAQ / fiches / réglages GMC. C'est le déclencheur n°1. Le footer n'a pas à recopier six policies : il pointe vers `/policies/*` et affiche les mêmes coordonnées.
3. **Après refus :** corriger les motifs, vérifier les preuves et respecter la fenêtre de réexamen effectivement indiquée par Google ; 7–10 jours est un repère historique, pas une garantie.
4. **Adresse et identité = vraies, justificables.** Adresse professionnelle enregistrée, droit d'usage, identique aux docs KYC GMC. **Interdit :** adresse Maps décorative sans activité. Ton / footer au nom de la marque : oui. Disparition volontaire d'OH Ventures dans CGV, confidentialité, mentions légales, infos précontractuelles : non. Le relevé bancaire du client affichera OH Ventures — le cacher crée le mismatch.
5. **Le récit décrit l'opération réelle.** Dropshipping = on ne stocke pas, on ne contrôle pas, on n'emballe pas. L'origine d'expédition est dite (politique d'expédition, FAQ, FAQ fiche), l'adresse de retour et son coût aussi, les fabricants partenaires hors UE figurent dans la politique de confidentialité. Ton vendeur, jamais confessionnel — mais jamais faux.
6. **Le titre ne ment jamais sur la matière.** Pierre, travertin, laiton, soie, noyer, verre soufflé… exigent une preuve (pièce reçue, ou plaque fournisseur non contredite par l'attribut de commande). Sans preuve : « effet », « aspect », « finition », « teinte ». Le même mot partout : titre, variante, specs, FAQ, collection, menu.
7. **Produit / conformité avant infra GMC.** Appareil électrique (sèche-serviettes, luminaire) : fournisseur exact, échantillon, CE / notice / importateur / REP-DEEE avant publication marchande et review ; le build gratuit réversible après GO_FINAL suit les critères canoniques. Un domaine âgé ne rattrape pas un produit non conforme.

## Décisions et état actuel

Les [décisions du 24 août](references/decisions-2026-08-24.md) gardent leur provenance. Vérifier coordonnées, accès et statut de la boutique dans son dossier courant. Les fenêtres temporelles et signaux de risque du formateur ne sont pas des règles officielles ; vérifier les exigences Google en vigueur quand elles déterminent une action. Ne pas remplacer une identité ou un contact sans autorisation.

## Erreurs à refus / mismatch immédiat

**Récit d'entreprise faux** (local, stock, contrôle, emballage, transporteur nommé non utilisé, « répond de Paris ») · **origine d'expédition tue** · **adresse de retour sans pays ni coût** · **matière noble affirmée sans preuve** (titre, collection, menu) · **garantie sur photo générée** · icône `verified` · jargon interne dans la copie (« attribut fournisseur ») · **collection publiée vide ou décrivant des brouillons** · nom de collection qui ne correspond pas à son contenu · Policies dupliquées ou chiffres qui divergent · picto de paiement affiché (Apple Pay, etc.) alors que le checkout ne l'offre pas · adresse décorative / identité vendeur absente là où la loi l'exige · VoIP · Trustpilot < 3,0 · claims santé · reviews à répétition · texte incrusté sur images · 404 · promo / avis trop tôt avant review.

## Adaptation France

Policies en français. Rétractation 14 j + 30 j commercial si assumé. Mentions légales + médiation + **vendeur identifié** (OH Ventures). Délais = ops du fournisseur retenu, pas un barème générique. Pack PDF : 3 + 2–4 + 5–7 j **uniquement si c'est vrai**.

## Comment travailler

- **Préparer une nouvelle boutique** → gate fournisseur / échantillon d'abord (checklist §0), puis `checklist-pre-soumission.md`. Isolation légère, identité honnête.
- **Auditer une boutique terminée** → checklist §6 **et §6 bis (véracité)** + `lexique-interdit.md` + `scan_veracite.py` + `audit-lecons-noirmont.md`. Un audit qui ne relit pas Notre histoire, la préparation, les transporteurs et l'adresse de retour avec la question « est-ce vrai pour un produit qu'on ne touche jamais ? » n'est pas un audit GMC. Y compris **moyens de paiement** (footer = checkout = policy) et les flags Noirmont (marque tierce, JSON-LD, délais, mentions légales doublons, claims « premium »). Recette sources : `sources-audit-conformite-boutique.md`.
- **Avant la première campagne** → refaire l'audit de véracité, même si Merchant Center a validé. La validation initiale ne lit pas le récit ; le lancement d'Ads, si.
- **Rédiger ou relire une fiche** → `lexique-interdit.md` §2 à §4 avant d'écrire.
- **Rédiger les policies** → `templates-policies.md` + `templates-fr/`, reformuler, chiffres ops, marque en façade, OH Ventures en CGV / confidentialité / mentions légales.
- **Proxy** → seulement si incident. Recette `proxy-iproyal.md`. Jamais Shopify derrière.
- **Scaler** → `shopping-scaling`.
