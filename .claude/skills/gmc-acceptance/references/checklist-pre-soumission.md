# Checklist GMC pass/fail — de la pré-build à la post-approbation

Consolidation du « Fast-Track GMC Approval Framework 2026 » et de la « GMC Guidance & Compliance Checklist » (Terry Ecom). Dérouler dans l'ordre. Un item en échec = corriger avant de passer à la suite.

## 1. Pré-build (avant même de créer la boutique ou le GMC)

La plupart des échecs GMC naissent ici.

**Domaine**
- [ ] Domaine neuf accepté, mais 30+ jours d'âge améliore matériellement le trust
- [ ] Jamais de domaine supprimé/récupéré (l'âge est remis à zéro) — acheter uniquement des domaines actifs non supprimés

**Gmail (souvent négligé)**
- [ ] Gmail neuf, dédié exclusivement GMC + Google Ads
- [ ] Gmail « réchauffé » plusieurs jours avant usage : abonnements à des services, YouTube, connexion aux apps Google, envoi/réception d'emails. Google évalue le comportement du compte, pas sa simple existence.

**Téléphone**
- [ ] SIM physique (les VoIP sous-performent nettement, virtuel = refus fréquent)
- [ ] Même numéro partout : vérification Gmail, coordonnées GMC, footer boutique
- [ ] Mismatch de pays toléré si le numéro accepte les appels vocaux — le tester réellement

**Isolation d'environnement (multi-boutiques)**
- [ ] Proxy + navigateur anti-détection uniquement pour Gmail, GMC et Ads
- [ ] Ne JAMAIS accéder à Shopify derrière le proxy (risque de ban élevé)
- [ ] Par boutique : 1 GMC, 1 compte Ads, 1 Gmail dédié, 1 moyen de paiement unique, 1 adresse, 1 numéro local, 1 IP/proxy propre, 1 profil navigateur isolé
- [ ] Zéro réutilisation de détails entre boutiques — même un petit chevauchement crée du linkage

## 2. Build de la boutique (signaux de confiance)

**Contact & identité (règle « footer d'abord » — les reviewers ne regardent souvent QUE le footer)**
- [ ] Email cliquable en `mailto:`
- [ ] Téléphone joignable en vocal, cliquable
- [ ] Adresse réelle, localisable sur une carte
- [ ] Cohérence exacte boutique / policies / GMC
- [ ] Email professionnel (pas de gmail perso en façade)

**Adresses (multi-boutiques)**
- [ ] Jamais réutiliser une adresse entre boutiques
- [ ] Adresse boutique = adresse GMC (les documents de vérification, eux, n'ont pas besoin de correspondre)

**Page À propos**
- [ ] Copy courte, simple, ton humain — éviter le texte détectable comme IA
- [ ] Pas d'historique exagéré, de claims ou de fausses références

**Réseaux sociaux (risqué si fait trop tôt)**
- [ ] Pas de liens sociaux plutôt que des pages faibles ou toutes neuves
- [ ] Followers achetés / activité faible = trust en baisse
- [ ] Lier les réseaux seulement quand une activité réelle existe

**Trust externe**
- [ ] Si un Trustpilot existe : note ≥ 3,0 obligatoire avant toute review (< 3,0 = gate de refus dur)

**Branding & transparence**
- [ ] ™ ou © uniquement si les droits sont réellement détenus
- [ ] Aucune fausse urgence : fausse rareté, comptes à rebours trompeurs
- [ ] Icônes de paiement du footer = moyens réellement proposés au checkout

## 3. Policies (premier déclencheur de misrepresentation)

- [ ] Policies UNIQUEMENT dans Shopify → Settings → Policies (URLs `/policies/*`)
- [ ] Liens du footer pointant vers `/policies/*`
- [ ] Aucune page policy dupliquée dans la boutique
- [ ] Aucune policy copiée d'un autre domaine (Google compare entre domaines)
- [ ] Wording strictement identique entre Shopify, footer et champs GMC
- [ ] Google vérifie ligne à ligne : heure limite de commande + fuseau horaire, délais de traitement et de transit, fenêtre de retour, délai de remboursement — mêmes chiffres partout (policies, FAQ, fiches produit)

## 4. Produits, collections & feed

**Collections**
- [ ] Minimum 5 produits par collection (< 5 = red flag qualité)
- [ ] Aucune collection vide ou cachée

**Produits**
- [ ] Titres, descriptions, SKU uniques et originaux
- [ ] Titre produit cohérent avec l'URL du produit
- [ ] Pas de claims exagérés ou invérifiables ; pas d'avis faux ou manipulés
- [ ] Specs et tailles correctes pour la région de vente

**Images**
- [ ] Aucun texte incrusté, aucun collage
- [ ] Pas d'images dupliquées entre produits
- [ ] Image de variante = variante sélectionnée
- [ ] Pas d'images embarquées dans les descriptions

**Technique**
- [ ] Toutes les 404 redirigées ; aucun lien cassé
- [ ] Score de vitesse > 65
- [ ] Anciens codes de vérification GMC supprimés (dupliqués = risque)
- [ ] Pas de thème dupliqué à l'identique entre boutiques
- [ ] Produits en rupture archivés

## 5. Création & vérification GMC (ordre strict)

1. Boutique terminée
2. Policies finalisées dans Shopify
3. Produits uploadés
4. Création du GMC
5. Vérification + claim du domaine — méthode DNS TXT de préférence (tag HTML et upload de fichier en secours), vérifier la version HTTPS
6. Policies recopiées **mot pour mot** dans les champs GMC (ne pas reformuler, ne pas simplifier)
7. Connexion du feed — app Simprosys sur Shopify ; tous les produits approuvés dans le feed, désapprobations corrigées AVANT la review
8. Demande de review

Ne jamais créer le GMC avant la fin de la boutique : Google peut indexer des pages incomplètes.

## 6. Avant de demander la review

- [ ] Auto-audit complet (checklist ci-dessus, ou scan automatisé type GMC Scout)
- [ ] Footer = GMC exactement (email, téléphone, adresse)
- [ ] Toutes les pages policies accessibles (desktop ET mobile, pas de noindex)
- [ ] Zéro 404
- [ ] Numéro testé : accepte réellement les appels vocaux
- [ ] Un seul item en échec → ne pas soumettre

## 7. Timeline & refus

- Review initiale : 3–5 jours ouvrés
- Re-review après refus : 7–10 jours minimum
- Reviews rapides répétées = taux de succès en chute
- Après refus : lire la raison, corriger **TOUS** les problèmes (pas seulement celui cité), attendre 7–10 jours, ne jamais faire appel sans avoir corrigé le fond

## 8. Post-approbation (30 premiers jours critiques)

- Google peut re-reviewer à tout moment ; la plupart des suspensions arrivent APRÈS l'approbation
- Aucun changement brutal (thème, policies, coordonnées, gros volumes de produits)
- Coordonnées et policies stables et cohérentes
- Surveiller les désapprobations produit de près
- Re-dérouler cette checklist au moindre signal
