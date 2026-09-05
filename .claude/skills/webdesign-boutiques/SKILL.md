---
name: webdesign-boutiques
description: Concevoir ou modifier une direction artistique et une interface Shopify en respectant la vérité produit et la base Horizon.
---

# Web design boutiques — DA et UI des boutiques Shopify

Tu conçois la direction artistique et l'UI des boutiques Shopify dropshipping France de Hakim (OH Ventures). Tu ne pars jamais de zéro : tu combines le moteur de recherche design `ui-ux-pro-max` (installé en global) avec les règles maison et la base technique Horizon.

## Workflow obligatoire

**1. Contexte client.** Réutiliser le persona et la DA validés pour une correction locale. Une nouvelle direction nécessite un positionnement explicite ; une maquette réversible peut préparer sa validation. Le persona détermine le registre visuel — un particulier qui découvre le produit, jamais un pro du métier.

**2. Recherche design si nécessaire.** Pour une nouvelle DA, le moteur ui-ux-pro-max peut aider ; il n’est pas requis pour une correction dans une DA existante. Le script se lance par son chemin complet :

```bash
python3 ~/.claude/skills/ui-ux-pro-max/scripts/search.py --domain product "<type de produit + mots-clés>" --max-results 5
```

Requêtes utiles par étape :
- `--domain product "<niche>"` — styles recommandés pour le type de produit (les fiches « E-commerce » et « E-commerce Luxury » donnent la base ; chercher aussi la niche précise : plant shop, jewelry, kids…)
- `--domain style "<style candidat>"` — détails d'un style (caractéristiques, anti-patterns)
- `--domain color "<ambiance>"` et `--domain typography "<ambiance>"` — palettes et paires de polices
- `--domain ux "checkout conversion trust"` — guidelines conversion/confiance
- `--design-system --project-name "<boutique>" --format markdown --persist --variance 7 --motion 6` — génère un design system complet (jouer variance/motion selon la niche)
- Stack : `--stack html-tailwind` est le plus proche du contexte Shopify/Liquid.

**3. Valider une nouvelle DA avant son adoption.** Préparer une proposition locale révisable ; une correction conforme à la DA déjà approuvée peut avancer directement. Règle maison ferme : pour les niches créatives/DIY, une DA « premium fade » (pastels sages, minimalisme froid) est un défaut, pas une qualité — viser pop, mouvement, personnalité (stickers, illustrations, micro-animations). Le moteur recommande justement « Vibrant & Block-based » + Motion-Driven pour l'e-commerce général : c'est la bonne famille par défaut. Réserver les styles glass/luxury aux produits réellement premium (ex. montres 150–400 €). Présenter 2–3 directions avec palette + typos + références, et attendre le choix de Hakim.

**4. Implémenter sur la base Horizon.** Ne pas réinventer la structure : partir des modèles éprouvés — `boutique-pipeline/docs/horizon-product-page-reference/` (code Liquid byte-exact : blocs PDP, buy-buttons, panier, homepage) et leur documentation dans `notion-export/modeles/` du hub. La DA s'applique par-dessus cette ossature CRO (variables, sections, tokens), pas en la remplaçant. Pour la syntaxe, le skill global `shopify-liquid` fait référence.

**5. QA mobile-first avant de rendre la main.** La majorité du trafic boutique est mobile : vérifier chaque build au viewport mobile d'abord (375px), puis desktop. Points durs issus des guidelines ux : cibles tactiles ≥ 44 px, pas de scroll horizontal, contraste 4,5:1, CLS < 0,1 (réserver l'espace des images), zoom jamais désactivé.

## Règles maison non négociables

- **Slider et avis de démo** : les placeholders de démonstration sont la chasse gardée de Hakim — ne jamais les remplacer/publier sans son feu vert.
- **Promesses vérifiables uniquement** : rien de « inclus dans le colis », pas de claims invérifiables, pas de fausse urgence ni faux compteurs — cohérent avec la conformité GMC (skill `gmc-acceptance` : le design du footer, des policies et des icônes de paiement fait partie des signaux de confiance scannés par Google).
- **Pédagogie particulier** : le design doit rassurer et expliquer (guides, schémas, FAQ visibles), jamais supposer un savoir métier.
- **Icônes SVG, jamais d'emoji en guise d'icône** (règle ui-ux-pro-max, s'applique aussi en Liquid).

## Skills complémentaires

`ui-ux-pro-max` (moteur générique — ce skill l'oriente), `shopify-liquid` (syntaxe thème), `cro` (optimisation conversion des pages), `frontend-design:frontend-design` (composants hors Shopify), `brandkit` (planches d'identité si besoin d'un logo/univers complet).
