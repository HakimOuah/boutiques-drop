# 09 · Pages produit — structure Tuftéo + liquid custom

- **URL Notion** : https://app.notion.com/p/3a71f38c31548153910fcc0784d7438e
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 3 · Design & contenu |
| Ordre | 9 |
| Statut | À faire |
| Responsable | Agent |
| Dépend de | 02, 03, 07 |
| Livrable | templates/product.json + 3 blocs liquid custom poussés et vérifiés à l'écran |

---

## Objectif

PDP miroir de la structure Tuftéo (elle-même issue de la fiche osmoseur Bonum Vitae). Référence : `boutique-tufting/shopify/structure-templates-log-2026-07-21.md` + modèle Notion « Modèle Page Produit Shopify — Horizon ».

## Skills à invoquer (globaux, via le Skill tool)

- `copywriting` — copy PDP orienté conversion, ancré sur le persona et les objections (ticket 02).
- `marketing-psychology` — preuve sociale, ancrage, urgence honnête (promesses vérifiables uniquement).
- `cro` — relecture conversion de la structure PDP avant push.
- `offers` — cartes confiance, garanties, bonus numériques : framing de valeur et risk reversal (toujours vérifiables, cf. règle transverse).
- `shopify-liquid` — blocs liquid custom.

## Structure exacte (au-dessus de la flottaison)

1. Badge d'avis (lien #reviews) → 2. titre h1 → 3. prix (avec barré) → 4. **bloc liquide « Paiement fractionné »** : « Ou 4 × XX € avec PayPal ou Klarna », calcul auto sur la variante, seuil réglable \~30 € → 5. séparateur → variantes + ATC → 6. **barre livraison** : « Livraison estimée entre le \[J+12\] et le \[J+21\] · LIVRAISON GRATUITE » (dates auto, **mois FR codés en dur** si locale boutique EN) → 7. **4 cartes confiance** (livraison offerte et suivie / 14 j satisfait ou remboursé / garantie 12 mois / SAV français mailto contact@\<marque\>.fr) → 8. **accordéons ×5** : Description (\{\{ closest.product.description \}\}, ouverte) / Livraison & retours / Fabrication & contrôle / Garantie / Contact → 9. icônes paiement.

## Sous la flottaison

Marquee (4-5 promesses ✦) → avis persona (ticket 02) → **USP ×3 dont la n°3 débloque l'objection n°1 du doc objections** → aide + FAQ → recommandations.

## Pièges techniques (vécus)

- Nom de schéma de bloc **≤ 25 caractères** sinon rejet SILENCIEUX de themeFilesUpsert.
- Pousser les blocs liquid AVANT le template qui les référence.
- Push : stagedUploadsCreate PUT → themeFilesUpsert body \{type: URL, value: resourceUrl NON signé\} ou \{type: BASE64\}.
- Travailler sur le **thème brouillon**, et toujours re-tirer la dernière version avant d'éditer (ne jamais écraser les modifs de Hakim).
- Promesses vérifiables uniquement (bonus = numérique, jamais « dans le colis »).

## Fini quand

QA à l'écran d'au moins 2 PDP (1 chère, 1 accessoire \< seuil 4x) : tous les blocs rendus, dates FR, e-mail correct, accordéon Description propre, mobile OK.
