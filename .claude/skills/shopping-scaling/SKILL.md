---
name: shopping-scaling
description: Framework de scaling Google Ads PMAX profit-first (Terry Ecom 2026) — 4 phases, règle des 2 jours verts / 2 jours rouges, paliers ±20–30 %, gate tracking et hygiène assets PMAX. Utiliser dès que Hakim veut scaler une campagne Google Ads ou PMAX, augmenter ou réduire un budget pub, décider quoi faire après des jours profitables ou déficitaires, structurer une campagne Shopping/PMAX au lancement, ou se demande si une boutique est prête à scaler (AOV, tracking, créas). Aussi quand il mentionne Performance Max, jours verts/rouges, budget ads, ou ROAS vs profit.
---

# Shopping Scaling — scaler PMAX sur le profit

Tu aides Hakim (OH Ventures, boutiques Shopify dropshipping France) à prendre les décisions de scaling Google Ads. Source : « Google Ads Scaling Framework 2026 » de Terry Ecom, construit sur des comptes PMAX réels.

**Philosophie : scaler sur le profit et des données propres, pas sur l'émotion, les hacks ou les screenshots.** Des règles nettes pour savoir quand monter, quand tenir, quand redescendre — sans surcomplication. Règle d'or : **ne pas ajouter de complexité tant qu'on n'est pas déjà profitable.**

PMAX est le moteur central : tous les canaux Google (Search, Shopping, YouTube, Display, Discover, Gmail), optimisation temps réel des enchères, placements, créas et audiences. Il surperforme les structures manuelles à l'échelle QUAND il est nourri de données de conversion propres et d'un budget suffisant. Pour l'e-commerce et le dropshipping, il capture ET étend la demande.

**Articulation maison** : le protocole de test de Hakim (30 €/j × 5 j sans toucher, tracking achats en place) couvre le lancement/test d'une campagne. Ce framework prend le relais pour la décision de scale. Pour l'approbation Merchant Center en amont, c'est le skill `gmc-acceptance`.

## Phase 1 — Lancement (jours 1–7) : des entrées propres

- **1 seule campagne PMAX**, feed produit complet, **aucune exclusion, aucune segmentation**. Concentrer la donnée accélère l'apprentissage.
- Pas de biais : ne pas trier les « best sellers », ne pas forcer de produits héros, ne pas sur-optimiser tôt. Laisser PMAX découvrir la demande naturellement.
- **Tagging produit non négociable dès le jour 1** : type de produit, catégorie, regroupements logiques. C'est ce qui permettra des exclusions et des variantes de campagne propres plus tard, sans reconstruire le feed.
- Apprentissage mains dans les poches : laisser tourner, ignorer le bruit quotidien, aucun reset. Si PMAX ne dépense pas : attendre 3–4 jours, puis relancer UNE seule fois si vraiment nécessaire.
- **Assets PMAX = levier restant.** Dès que l'algo gère enchères, placements et audiences, ce qu'on contrôle vraiment ce sont le feed, la landing et les assets. Voir section « Hygiène assets » ci-dessous — à poser dès le jour 1, pas après le scale.

## Gate tracking — avant toute décision de scale

Un mauvais tracking est pire que pas de tracking : l'algo optimise vers la mauvaise cible. Avant d'appliquer 2 jours verts / 2 jours rouges :

| Check | Attendu |
|---|---|
| Action **Achat** | Primary. Add-to-cart / begin_checkout = secondary seulement — **jamais** la cible d'optimisation |
| Payload purchase | `value` + `currency` (EUR) + `transaction_id` sur ≥ 95 % des conversions |
| Écart Ads ↔ Shopify (ou TrackBee) | < ~5 % sur 7 jours glissants ; sinon **HOLD** le scale |
| Enhanced conversions | Activées si possible (meilleur matching post-cookie) |
| Consent Mode (FR) | Les tags respectent le consentement ; ne pas « forcer » des conversions non consenties |

Si le tracking est douteux : **tenir**, diagnostiquer, ne pas monter ni descendre le budget sur des chiffres sales. Cohérent avec le protocole test Hakim (achats trackés + données Shopify) — ici on exige juste que l'écart reste exploitable avant de scaler.

## Phase 2 — Stabilisation (jours 7–14) : réparer l'économie, pas les ads

**Cette phase répare le business, pas les ads.** Les ads amplifient les problèmes, elles ne les résolvent pas.

Grille AOV (panier moyen) avant tout scaling :

| AOV | Statut |
|---|---|
| < 50 $ | Fragile |
| 50–60 $ | Limité |
| 60 $+ | Scalable |
| 70 $+ | Idéal |

AOV bas + dépense en hausse = pertes amplifiées. **D'abord augmenter l'AOV** : bundles, upsells +10–15 %, prix dégressifs par quantité, navigation claire, pages produit solides. Puis **CRO avant tweaks d'ads** : signaux de confiance, clarté, simplicité du checkout. Ne jamais scaler des ads pour compenser une mauvaise économie unitaire.

## Phase 3 — Scaling : décision par le profit

Métrique de décision : **CA − dépense pub du jour**. Le ROAS donne du contexte ; le profit tranche. Vérifier la fiabilité du tracking (outil type TrackBee) avant toute décision — ne pas faire confiance aveuglément aux analytics Shopify.

- **Jour vert** = net profitable après dépense pub du jour. **Jour rouge** = net déficitaire.
- **Scale UP — règle des 2 jours verts.** Conditions : 2 jours verts consécutifs, PMAX dépense normalement, aucun problème de tracking ou de site. Alors : **+20–30 % par palier** (ex. 120 → 160 → 220 → 300 $). Des checkpoints nets, pas des micro-ajustements quotidiens.
- **Scale DOWN — règle des 2 jours rouges.** Conditions : 2 jours rouges consécutifs, profit net négatif, pas de cause externe claire. Alors : **−20–30 %**, ou retour au dernier palier profitable. Cela évite les réactions émotionnelles à une mauvaise journée isolée tout en protégeant le capital.
- **Incertain → tenir.** Ne rien toucher.

### Diagnostic avant de descendre (causes externes)

Sur 2 jours rouges, vérifier **avant** le −20–30 % :

1. Tracking cassé ou écart Ads/Shopify qui vient d'exploser
2. Site / checkout / stock / délais transporteur
3. Spike CPC d'enchère temporaire (pas une tendance)
4. Fatigue créa évidente (CTR assets en chute nette) → **refresh assets d'abord**, budget ensuite

Cause externe claire → **tenir** (ou corriger la cause), ne pas scaler down par réflexe.

## Hygiène assets PMAX (créa = ce qu'on contrôle encore)

À poser au lancement et à revoir quand le scale stagne — ce n'est pas un prétexte pour complexifier la structure de campagne.

- **Asset group** : headlines / descriptions **diversifiées** (bénéfice, preuve, offre, CTA) — pas cinq reformulations du même texte. Images aux ratios PMAX, produit net, **pas de texte incrusté** (sinon conflit GMC — skill `gmc-acceptance`).
- **Message match** : promesse de l'asset ↔ H1 / offre de la PDP. Un clic qui arrive sur une page qui dit autre chose brûle le budget et pourrit le signal.
- **Fatigue** : baisse prolongée de CTR / perf assets → itérer la créa **avant** de toucher le budget (sauf règle 2 jours rouges déjà déclenchée).
- Copy RSA / Meta / frameworks créa longs → skills `ads` / `ad-creative` s'ils sont installés. Ici on reste au minimum indispensable pour ne pas scaler une campagne sous-alimentée en assets.

## Phase 4 — Optimisation (après le scale, jamais avant)

- Une fois scalé, les produits gagnants deviennent évidents et les décisions deviennent pilotées par la donnée.
- Alors seulement : améliorer les marges, négocier le COGS, monter en gamme fournisseur.
- Exclusions intelligentes (optionnel) via les tags produit : exclure les perdants récurrents, créer des variantes de campagne. **Jamais d'exclusion émotionnelle.**

## Produits qui scalent le mieux

Faible risque de retour, pas de complexité de taille, décision d'achat simple (ex. lunettes de soleil, montres, basiques homme). Moins de retours = scaling plus sûr.

## Erreurs classiques à éviter

- Plusieurs campagnes PMAX trop tôt (architecture multi-campagnes = phase 4 optionnelle, jamais phase 1)
- Scaler avant d'avoir réparé l'AOV
- Faire confiance aveuglément aux analytics Shopify / ignore l'écart Ads↔boutique
- Optimiser sur add-to-cart au lieu de l'achat
- Resets fréquents de campagne
- Scaler sans discipline de profit
- Toucher le budget alors que le tracking ou la créa est clairement cassé

## Checklist express

**Avant de scaler** : gate tracking OK (achat primary, écart < ~5 %) · assets PMAX diversifiés + message match PDP · AOV sain (≥ 60 $) · PMAX dépense régulièrement.
**2 jours verts** → budget +20–30 %.
**2 jours rouges** → exclure cause externe → sinon budget −20–30 %, ou retour au dernier palier profitable.

PMAX récompense la discipline, la confiance et les données propres. Scaler les profits, pas les émotions. Tenir dans le doute. Redescendre quand les pertes se répètent.
