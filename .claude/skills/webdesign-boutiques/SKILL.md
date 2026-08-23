---
name: webdesign-boutiques
description: Direction artistique et web design des boutiques Shopify de Hakim — pont entre le moteur ui-ux-pro-max (84 styles, 192 palettes, 98 guidelines) et les règles maison (DA créative, mobile-first, base Horizon, finish gate PASS/HOLD anti-UI générique). Utiliser dès que Hakim demande une DA, un thème, une homepage, une page produit, des couleurs, des typos, un restyle, un avis design ou une QA visuelle avant publication — ou quand une nouvelle boutique atteint l'étape design du campement de lancement.
---

# Web design boutiques — DA et UI des boutiques Shopify

Tu conçois la direction artistique et l'UI des boutiques Shopify dropshipping France de Hakim (OH Ventures). Tu ne pars jamais de zéro : tu combines le moteur de recherche design `ui-ux-pro-max` (installé en global) avec les règles maison et la base technique Horizon.

## Workflow obligatoire

**1. Persona d'abord.** Aucune DA sans persona validé (règle bloquante du pipeline, cf. PLAYBOOK 1d). Le persona détermine le registre visuel — un particulier qui découvre le produit, jamais un pro du métier.

**2. Interroger le moteur ui-ux-pro-max.** Le script se lance par son chemin complet :

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

**3. Proposer et faire valider la DA par Hakim AVANT d'implémenter.** Règle maison ferme : pour les niches créatives/DIY, une DA « premium fade » (pastels sages, minimalisme froid) est un défaut, pas une qualité — viser pop, mouvement, personnalité (stickers, illustrations, micro-animations). Le moteur recommande justement « Vibrant & Block-based » + Motion-Driven pour l'e-commerce général : c'est la bonne famille par défaut. Réserver les styles glass/luxury aux produits réellement premium (ex. montres 150–400 €). Présenter 2–3 directions avec palette + typos + références, et attendre le choix de Hakim.

**4. Implémenter sur la base Horizon.** Ne pas réinventer la structure : partir des modèles éprouvés — `boutique-pipeline/docs/horizon-product-page-reference/` (code Liquid byte-exact : blocs PDP, buy-buttons, panier, homepage) et leur documentation dans `notion-export/modeles/` du hub. La DA s'applique par-dessus cette ossature CRO (variables, sections, tokens), pas en la remplaçant. Pour la syntaxe, le skill global `shopify-liquid` fait référence.

**5. QA mobile-first avant de rendre la main.** La majorité du trafic boutique est mobile : vérifier chaque build au viewport mobile d'abord (375px), puis desktop. Points durs issus des guidelines ux : cibles tactiles ≥ 44 px, pas de scroll horizontal, contraste 4,5:1, CLS < 0,1 (réserver l'espace des images), zoom jamais désactivé.

**6. Finish gate PASS/HOLD avant de rendre la main.** Pas un avis de goût : une décision binaire sur l'écran implémenté. Voir section dédiée ci-dessous.

## Finish gate boutique (PASS / HOLD)

Inspiré du UI Finish-Gate Reviewer (agency-agents), adapté e-com Shopify FR. On critique l'écran **tel qu'il est monté**, pas le brief. HOLD n'est pas une liste de « nice-to-have » — c'est bloquant.

### Lentille produit (1 paragraphe avant de juger)

- Qui : particulier qui découvre (persona validé), jamais un pro du métier
- Job : comprendre le produit → se rassurer → ajouter au panier
- Premier objet lu : marque / produit / offre (selon homepage vs PDP)
- Action primaire : une seule, observable (CTA dominant)

### Audit dans cet ordre

1. **Lisibilité boutique** — sans la nav, le premier viewport pourrait-il appartenir à une autre marque ? Si oui → HOLD (brand trop faible)
2. **Hiérarchie** — le poids visuel suit la décision d'achat, pas les defaults du thème
3. **Budget hero** — homepage : marque + 1 headline + 1 phrase + CTA + image dominante full-bleed. Pas de stats, cards, badges flottants, collages, ni grille de cartes dans le hero
4. **États** — panier vide, rupture, erreur checkout, loading images : intentionnels, pas oubliés
5. **Mobile** — le job (prix + CTA + bénéfice) survit à 375 px ; on ne se contente pas d'empiler les blocs desktop
6. **Fidélité DA** — tokens / typos / accents cohérents avec la direction validée par Hakim

### Defaults interdits (sauf raison produit écrite)

- Look « AI default » : Inter/Roboto + dégradé violet, cream + serif terracotta, glassmorphism gratuit
- **Premium fade** sur niche DIY/créative (pastels sages, minimalisme froid) — défaut maison, pas une qualité
- Cards dans le hero ; overlays / stickers promo détachés sur le média hero
- Fausse urgence, faux compteurs, avis démo publiés sans feu vert Hakim
- Emoji utilisés comme icônes (SVG uniquement)

### Rapport attendu

```markdown
# Finish gate — [page]

## Décision : PASS | HOLD

## Preuves
- [constat observé] → [pourquoi ça casse la lentille produit/marque]

## Requis avant PASS
1. [changement concret] — vérifier à [viewport / état]

## À garder
- [choix déjà juste — ne pas réécrire]

## Critères PASS
- Premier viewport identifiable à la boutique sans la nav
- Action primaire évidente sur mobile
- Aucun default interdit sans raison produit
```

## Cohérence de marque (légère)

Pas un rebrand : juste la garde-fou entre pages. Voice, typos et couleurs **identiques** homepage ↔ PDP ↔ FAQ ↔ footer. Si une page « pourrait être une autre boutique » après retrait du logo, la DA a dérivé — corriger avant publication. Pour une planche d'identité complète (logo, univers), passer par `brandkit`.

## Règles maison non négociables

- **Slider et avis de démo** : les placeholders de démonstration sont la chasse gardée de Hakim — ne jamais les remplacer/publier sans son feu vert.
- **Promesses vérifiables uniquement** : rien de « inclus dans le colis », pas de claims invérifiables, pas de fausse urgence ni faux compteurs — cohérent avec la conformité GMC (skill `gmc-acceptance` : le design du footer, des policies et des icônes de paiement fait partie des signaux de confiance scannés par Google).
- **Pédagogie particulier** : le design doit rassurer et expliquer (guides, schémas, FAQ visibles), jamais supposer un savoir métier.
- **Icônes SVG, jamais d'emoji en guise d'icône** (règle ui-ux-pro-max, s'applique aussi en Liquid).

## Skills complémentaires

`ui-ux-pro-max` (moteur générique — ce skill l'oriente), `shopify-liquid` (syntaxe thème), `cro` (optimisation conversion des pages), `frontend-design:frontend-design` (composants hors Shopify), `brandkit` (planches d'identité si besoin d'un logo/univers complet).
