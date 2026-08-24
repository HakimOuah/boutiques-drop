# Checklist GMC pass/fail — de la pré-build à la post-approbation

Consolidation du « Fast-Track GMC Approval Framework 2026 », de la « GMC Guidance & Compliance Checklist » (Terry Ecom) et du recap Hakim 24/08/2026. Dérouler dans l'ordre. Un item en échec = corriger avant de passer à la suite.

Parc déjà validé (Tuftéo, Bonum Vitae, Noirmont, Bien Brûlé) : ne pas rétro-corriger adresse / téléphone / policies pour « isoler » après coup. Cette checklist s'applique aux **nouvelles** boutiques et aux audits sans resoumission.

## 1. Pré-build (avant même de créer la boutique ou le GMC)

La plupart des échecs GMC naissent ici.

**Domaine**
- [ ] Domaine neuf accepté, mais 30+ jours d'âge améliore matériellement le trust — c'est la première brique que Google observe
- [ ] Jamais de domaine supprimé / expiré / racheté (l'âge est remis à zéro, l'historique est inconnu)
- [ ] Recette : acheter → configurer la boutique → **ne pas soumettre** → laisser passer quelques semaines
- [ ] Ne pas créer le GMC le jour de l'achat du domaine

**Gmail (dédié ET vivant)**
- [ ] Gmail neuf, **dédié** exclusivement à cette boutique + GMC + Ads (pas le Gmail perso, pas partagé)
- [ ] **Et vivant** dans l'écosystème Google : newsletters, YouTube, Search, Google Play, mails entrants et sortants, connexions / déconnexions naturelles. Un Gmail qui ne sert qu'à ouvrir le GMC a l'air faux
- [ ] Vieilli **5–7 jours minimum** avant toute création GMC (plusieurs jours chez Terry ; 5–7 est le plancher opérationnel)
- [ ] Antidetect / proxy du bon pays pour Gmail, GMC et Ads — **jamais Shopify derrière ce proxy**
- [ ] Pas de Gmail « aged » acheté
- [ ] Pas de Gmail → GMC → Ads dans la même heure
- [ ] Profil Chrome dédié + **1 IP ISP IPRoyal France** (statique) sur ce profil. Pas de residential tournant, pas de datacenter. Recette : `proxy-iproyal.md`

**Téléphone — un numéro par boutique, même société**
- [ ] SIM physique de préférence (eSIM moins bon, VoIP = refus fréquent)
- [ ] Ligne on/off acceptable **si** elle reçoit vraiment les appels vocaux (pas SMS-only)
- [ ] Même numéro partout : vérification Gmail, coordonnées GMC, footer boutique
- [ ] Mismatch de pays toléré si le numéro accepte les appels vocaux — le tester réellement
- [ ] Jamais le même numéro sur deux boutiques

**Adresse — une par boutique, même société**
- [ ] Adresse réelle, localisable sur Google Maps, **différente** de toutes les autres boutiques
- [ ] Adresse boutique = adresse GMC (les documents de vérification d'identité, eux, n'ont pas besoin de correspondre)
- [ ] Une fois choisie, on la garde : la changer juste après l'approbation est un changement brutal
- [ ] Policies / footer / GMC : cette adresse vitrine + le nom de la **marque**. Jamais SIREN / TVA / SASU / OH Ventures
- [ ] Mentions légales (page séparée, obligation FR) : siège réel. Cette page ne se recopie pas dans le GMC

**Isolation d'environnement (multi-boutiques)**
- [ ] Proxy + navigateur anti-détection uniquement pour Gmail, GMC et Ads
- [ ] Ne JAMAIS accéder à Shopify derrière le proxy (risque de ban élevé)
- [ ] Par boutique : 1 GMC, 1 compte Ads, 1 Gmail dédié-vivant, 1 moyen de paiement unique, 1 adresse, 1 numéro, 1 IP/proxy propre, 1 profil navigateur isolé
- [ ] Zéro réutilisation de détails entre boutiques — même un petit chevauchement crée du linkage

## 2. Build de la boutique (signaux de confiance)

**Contact & identité (règle « footer d'abord » — les reviewers ne regardent souvent QUE le footer)**
- [ ] Email cliquable en `mailto:`
- [ ] Téléphone joignable en vocal, cliquable
- [ ] Adresse réelle, localisable sur une carte
- [ ] Cohérence exacte boutique / policies / GMC
- [ ] Email professionnel (pas de gmail perso en façade)
- [ ] Footer au nom de la **marque**, pas de l'entité

**Page À propos**
- [ ] Copy courte, simple, ton humain — éviter le texte détectable comme IA
- [ ] Pas d'historique exagéré, de claims ou de fausses références
- [ ] Pas de SIREN / TVA / « filiale de… »

**Réseaux sociaux (risqué si fait trop tôt)**
- [ ] Pas de liens sociaux plutôt que des pages faibles ou toutes neuves
- [ ] Followers achetés / activité faible = trust en baisse
- [ ] Lier les réseaux seulement quand une activité réelle existe
- [ ] Absence = neutre. Signal faible ou faux = négatif actif

**Trust externe**
- [ ] Si un Trustpilot existe : note ≥ 3,0 obligatoire avant toute review (< 3,0 = gate de refus dur). Pas de Trustpilot > mauvais Trustpilot
- [ ] ScamAdviser (scamadviser.com) : viser 70+. < 70 = signal négatif, **pas un gate** — un domaine neuf score bas, le GMC peut quand même passer. Ne pas paniquer
- [ ] Leviers ScamAdviser utiles : âge du domaine, SSL, adresse physique affichée, sociaux avec historique, mentions tierces. WHOIS public aide le score ; la privacy le fait baisser — ne pas exposer l'entité pour autant (l'isolation GMC prime)

**Branding & transparence**
- [ ] ™ ou © uniquement si les droits sont réellement détenus
- [ ] Aucune fausse urgence : fausse rareté, comptes à rebours trompeurs
- [ ] Icônes de paiement du footer = moyens réellement proposés au checkout
- [ ] Avant la review GMC : pas de promotions, pas d'avis, pas d'offres commerciales affichées. Boutique sobre et factuelle

## 3. Policies (premier déclencheur de misrepresentation)

Trois copies **identiques** : Shopify → Réglages → Politiques · champs GMC · liens du footer. Un écart, même léger = échec de confiance. Google compare du texte, pas des intentions.

- [ ] Policies UNIQUEMENT dans Shopify → Settings → Policies (URLs `/policies/*`)
- [ ] Liens du footer pointant vers `/policies/*`
- [ ] Aucune page policy dupliquée ailleurs sur le site (pas de page CMS « Politique de retour »)
- [ ] Aucune policy copiée d'un autre domaine (Google compare entre domaines)
- [ ] Wording strictement identique entre Shopify, footer et champs GMC
- [ ] Google vérifie ligne à ligne : heure limite de commande + fuseau horaire, délais de traitement et de transit, fenêtre de retour, délai de remboursement — mêmes chiffres partout (policies, FAQ, fiches produit)
- [ ] Au nom de la **marque** uniquement : pas de SIREN, n° TVA, forme juridique, OH Ventures
- [ ] Bloc contact identique sur les 6 policies (marque, adresse vitrine, email, téléphone, horaires, délai de réponse 24 h ouvrées)
- [ ] Partir de `templates-fr/`, reformuler à chaque boutique, remplacer tous les placeholders

## 4. Produits, collections & feed

**Collections**
- [ ] Minimum 5 produits par collection (< 5 = red flag qualité)
- [ ] Pas seulement 1–2 collections (setup trop mince)
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

1. Domaine acheté, boutique montée, **quelques semaines** d'âge
2. Gmail dédié-vivant, vieilli 5–7 jours
3. Boutique terminée (sobre : pas de promo / avis / offres)
4. Policies finalisées dans Shopify (marque seule, chiffres cohérents)
5. Produits uploadés
6. Création du GMC
7. Vérification + claim du domaine — méthode DNS TXT de préférence (tag HTML et upload de fichier en secours), vérifier la version HTTPS
8. Policies recopiées **mot pour mot** dans les champs GMC (ne pas reformuler, ne pas simplifier)
9. Connexion du feed — parc actuel : app Shopify **Google & YouTube** (Ads lié, **zéro campagne**). Terry cite Simprosys : ne pas l'imposer sur un flux déjà vivant
10. Demande de review

Ne jamais créer le GMC avant la fin de la boutique : Google peut indexer des pages incomplètes.

## 6. Avant de demander la review

- [ ] Auto-audit complet (checklist ci-dessus, ou scan automatisé type GMC Scout)
- [ ] Footer = GMC exactement (email, téléphone, adresse) — point de contrôle n°1 des reviewers
- [ ] Toutes les pages policies accessibles (desktop ET mobile, pas de noindex)
- [ ] Zéro 404
- [ ] Numéro testé : accepte réellement les appels vocaux
- [ ] Trustpilot absent ou ≥ 3,0
- [ ] Un seul item en échec → ne pas soumettre

## 7. Timeline & refus

- Review initiale : 3–5 jours ouvrés
- Re-review après refus : 7–10 jours minimum
- Reviews rapides répétées = taux de succès en chute
- Après refus : lire la raison, corriger **TOUS** les problèmes (pas seulement celui cité), attendre 7–10 jours, ne jamais faire appel sans avoir corrigé le fond

## 8. Post-approbation (30 premiers jours critiques)

- Google peut re-reviewer à tout moment ; la plupart des suspensions arrivent APRÈS l'approbation
- Aucun changement brutal (thème, policies, coordonnées, gros volumes de produits, adresse, téléphone)
- Coordonnées et policies stables et cohérentes
- Surveiller les désapprobations produit de près
- Re-dérouler cette checklist au moindre signal
