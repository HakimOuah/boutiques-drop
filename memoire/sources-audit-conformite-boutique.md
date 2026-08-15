# Audit de conformité d'une boutique : les bonnes sources et les faux positifs

Établi sur Maison Noirmont les 15/08/2026, après trois audits successifs qui se sont contredits.
Vaut pour **toute** boutique Shopify auditée avant une demande Merchant Center.

## Moyens de paiement : deux sources, et une seule ne suffit pas

- **`https://<domaine>/payments/config`** (public, sans authentification) n'expose que les
  **portefeuilles accélérés** : `applePayConfig`, `shopifyPayConfig`, `paypalConfig`,
  `googlePayConfig`, `amazonPayCv2Config`, plus `currency` et `offsiteConfigs`.
  **Il ne liste pas les passerelles classiques.** Klarna était actif en caisse et absent de ce JSON :
  en conclure « Klarna n'est pas activé » était faux.
- **`shop.enabled_payment_types`** (Liquid) est la liste des moyens que Shopify déclare accepter.
  On la lit **en visiteur anonyme** dès que le thème rend les icônes de pied de page depuis cette
  variable, c'est-à-dire dès que le réglage « Afficher manuellement les icônes » est **décoché**.
  Attribut à chercher dans le HTML : `aria-labelledby="pi-<type>"`.
- **Décocher « Afficher manuellement les icônes » est la bonne pratique par défaut** : le pied de page
  devient un témoin fidèle et auto-correctif de la caisse, et on ne peut plus afficher le picto d'un
  moyen de paiement indisponible.
- `/payments/config` reste **la** source pour la **devise réellement facturée** (`"currency":"EUR"`)
  et pour l'existence d'un prestataire de paiement fractionné accéléré.

## Chercher une chaîne dans du HTML rendu produit surtout des faux positifs

Quatre pièges payés sur la même boutique :

1. **`24h` / `48h` / n'importe quel nombre** : 15 des 20 occurrences de « 24 » sur une fiche produit
   étaient des **coordonnées de tracé SVG** des pictos de paiement.
2. **`star`, `avis`, `4.8`** : liste d'icônes Material Symbols, « 14 jours pour changer d'avis »,
   coordonnées SVG.
3. **`compare-at`, `Ancien prix`** : gabarit dormant masqué par CSS, jamais rempli.
4. **`<meta charset>` dans un corps de politique** : invisible dans le HTML rendu (le navigateur
   l'absorbe), visible seulement dans `shopPolicies.body` via l'API.

**Recette** : retirer `<script>`, `<style>` et `<svg>` avant de compter, puis **lire le contexte de
chaque occurrence restante**. Et toujours remonter à la donnée (`products.json`, JSON-LD,
`/payments/config`, `theme.files`) plutôt qu'au balisage.

## Passer les blocs JSON-LD à un parseur strict

Le bloc `Organization` de Maison Noirmont était **du JSON invalide** depuis toujours — une virgule
orpheline — et trois audits ne l'ont pas vu, parce qu'il **se lit parfaitement à l'œil**. Un bloc
JSON-LD invalide est **ignoré en entier** par Google : nom, adresse et e-mail du marchand
disparaissent alors qu'ils sont écrits.

Cause typique des thèmes : chaque champ optionnel est écrit **suivi d'une virgule**, et le dernier
champ conditionnel (souvent `sameAs`, alimenté par les réseaux sociaux) est vide.
**Remplir un champ de plus** (le téléphone de la fiche adresse Shopify, par exemple) suffit souvent
à réparer, sans toucher au code.

## Compter les produits d'une collection

`/collections/<handle>/products.json` dit ce qu'un **visiteur** voit. L'API Admin compte les
brouillons et ment donc sur le seuil de 5 produits de la checklist Merchant Center.

## Ce qu'un examinateur voit en premier

La règle Terry « **Footer = GMC exactement (email, téléphone, adresse)** » est littérale : beaucoup
de reviews ne regardent que le pied de page. Vérifier que les trois y sont **au caractère près**, et
qu'une seule écriture du numéro survit dans toute la boutique (le format `+33 X XX XX XX XX` des
politiques, avec `tel:+33XXXXXXXXX` en `href`). Sur Maison Noirmont, quatre écritures différentes du
même numéro cohabitaient, dont un champ vide dans la fiche adresse Shopify.

## Le vrai tueur, ce n'est pas l'absence, c'est la contradiction

Un délai annoncé à 24 h dans un bloc et à 48 h deux lignes plus bas, une garantie plus large sur la
fiche que dans la politique, un « 4 fois » à côté d'un « plusieurs fois » : c'est ce qu'un examinateur
relève, et ça ne se plaide pas. **Après tout changement de promesse, balayer le site entier** : le
texte vit souvent en cinq endroits (thème par blocs, code Liquid en dur, description produit, page
CMS, politique), et corriger un seul crée l'incohérence au lieu de la lever.
