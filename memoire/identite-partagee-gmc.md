---
name: identite-partagee-gmc
description: "Parc actuel : 4 boutiques, même adresse et même téléphone. Nouvelles boutiques (24/08) : un n° et une adresse Maps par store, policies au nom de la marque"
metadata: 
  node_type: memory
  type: project
  originSessionId: 578c8896-7f46-48a6-ab64-d0045d9c4b9c
  modified: 2026-08-24T13:10:00.000Z
---

Vérifié le 16/08/2026 : **les quatre boutiques en ligne publient la même adresse et le même téléphone**. Bien Brûlé, Bonum Vitae, Tuftéo et Maison Noirmont affichent toutes `47 rue Vivienne, 75002 Paris` et le `+33 7 56 82 80 94` (avec des écritures variables). Ce n'est pas une négligence : c'est le **siège social de la SASU OH Ventures** (SIREN 103157251), que le droit français impose de publier dans les mentions légales.

Précédent à connaître : le compte GMC **5806019978** a été suspendu le 15/06/2026 pour « misrepresentation » puis réintégré après correction — et c'est **l'entité OH Ventures** qui a été blanchie, pas seulement la boutique. La suspension attache l'entité.

**Décision de Hakim (16/08/2026) : on assume le linkage sur le parc alors en ligne.** Une seule adresse, un seul numéro, risque de cascade assumé. En contrepartie, soumission **séquentielle** : Tuftéo seul → 30 jours d'observation après approbation → Noirmont seulement ensuite.

**Décision de Hakim (17/08/2026 ~15h25) : le storefront Noirmont dort.** Pas d'écriture live, pas d'activation des 20 brouillons. Journal : `boutique-pipeline/boutique-seiko-mod/journal/2026-08-17-gel-storefront.md`.

**Décision de Hakim (18/08/2026 ~19h50) : GMC Noirmont via l'app Google & YouTube**, Workspace posé, **pas d'ads**. Le storefront reste gelé ; le flux se laisse vivre. Journal : `boutique-pipeline/boutique-seiko-mod/journal/2026-08-18-gmc-app.md`.

**Décision de Hakim (18/08/2026) : un flux déjà soumis se laisse vivre.** Tuftéo **et** Bonum Vitae ont un Merchant Center créé par l'app Shopify **Google & YouTube**, sans campagne. Produits d'abord limités, puis validés, stables depuis des semaines. On ne recrée pas, on ne resoumet pas. Chemin pour un nouveau lien : Workspace (adresse pro) → app Google & YouTube → Ads + GMC liés, **zéro ad**. Détail : [[app-google-youtube-flux-vivant]].

**Décision de Hakim (24/08/2026) : les nouvelles boutiques s'isolent.** Un numéro par store (ligne on/off vocale OK, SIM physique préférée), une adresse Maps distincte par storefront, Gmail dédié et vivant, policies au nom de la **marque** seulement (jamais SIREN / TVA / SASU / OH Ventures dans footer, policies Shopify, champs GMC). Mentions légales (page séparée) gardent le siège réel. Une adresse choisie se **garde** après l'approbation — on ne la swap pas. Le parc déjà validé **ne change pas** d'adresse ni de téléphone. Skill : [[skill-gmc-acceptance]].

**Why:** le 16/08, séparer les adresses était incompatible avec « GMC en août ». Le 24/08, la recette GMC (un n° / une adresse par boutique, même société) devient la règle des **prochains** lancements, sans rétro-corriger les flux qui tiennent. Le téléphone unique du parc actuel a été testé le 16/08 et répond en vocal, donc il satisfait la règle anti-VoIP.

**How to apply:** parc actuel = ne pas rouvrir le linkage, ne pas changer les coordonnées. Nouvelle boutique = isolation complète (voir skill `gmc-acceptance`). Policies jamais identiques mot pour mot entre deux boutiques. Mentions légales ≠ policies GMC.
