# 📚 11. Bibliothèque de code Liquid — Panier

- **URL Notion** : https://app.notion.com/p/3a11f38c3154816d8a6ef8d65326c365
- **Date d'export** : 07/08/2026
- **Parent** : Modèle panier Shopify Horizon

---

> Une fiche par composant. **Type** : `Horizon natif` (référence — ne pas coller ailleurs sans adaptation) ou `Personnalisé Bonum Vitae`. Les fichiers **natifs volumineux** sont documentés + référencés (intégrité MD5 + chemin local = source de vérité byte-exacte) ; le **code personnalisé réutilisable** est collé en entier.

## Inventaire des composants

| Composant | Type | Rôle | Emplacement | Fichier | Lignes | MD5 | Statut |
|---|---|---|---|---|---|---|---|
| cart-drawer-section | Horizon | Point d'entrée section tiroir (SRA) | Tiroir | `sections/cart-drawer-section.liquid` | 9 | `9f42c443` | Référence |
| cart-drawer | Horizon + 🔒 BV | Tiroir complet (en-tête, vide, bannière, upsell) | Tiroir | `snippets/cart-drawer.liquid` | 346 | `e0db5699` | Référence |
| cart-products | Horizon | Lignes produit, quantités, suppression | Tiroir + page | `snippets/cart-products.liquid` | 1014 | `7ce22520` | Référence |
| cart-summary | Horizon | Note, promo, remises, total, paiement | Tiroir + page | `snippets/cart-summary.liquid` | 618 | `61fd9f25` | Référence |
| main-cart | Horizon | Section de la page panier | Page | `sections/main-cart.liquid` | 231 | `e75c39a7` | Référence |
| _cart-products | Horizon | Bloc produits page panier | Page | `blocks/_cart-products.liquid` | 174 | `b2391450` | Référence |
| _cart-summary | Horizon | Bloc récapitulatif page panier | Page | `blocks/_cart-summary.liquid` | 239 | `dfaec478` | Référence |
| cart.json | Horizon (auto-généré) | Structure + réglages page panier | Page | `templates/cart.json` | 256 | `c1136ae5` | Référence |
| settings_data | Horizon | Valeurs courantes du thème | Global | `config/settings_data.json` | 165 | `f45ea67b` | Référence |
| settings_schema | Horizon | Définitions + défauts des réglages | Global | `config/settings_schema.json` | 2121 | `5a4c151b` | Référence |
| **cart-drawer-customizations** | ⭐ **Personnalisé BV** | Bannière + upsell isolés (réutilisable) | Tiroir | `custom-liquid/cart-drawer-customizations.liquid` | 86 | `be0c8c63` | Prêt à adapter |

---

# ⭐ Fiche — cart-drawer-customizations.liquid (Personnalisé Bonum Vitae)

- **Nom** : `cart-drawer-customizations.liquid`
- **Rôle** : version **isolée et lisible** des 2 personnalisations Bonum Vitae (bannière de livraison + module d'upsell). Point de départ de reconstruction.
- **Emplacement** : contenu non vide du tiroir, **après la liste des articles et avant le récapitulatif**.
- **Type** : Personnalisé Bonum Vitae.
- **Chemin** : `boutique-pipeline/docs/horizon-product-page-reference/cart/custom-liquid/cart-drawer-customizations.liquid`
- **Dépendances** : `cart`, `all_products`, `product-form-component`, `product-form.js`, section id `cart-drawer-section`, variables CSS Horizon (`--cart-drawer-padding`, `--gap-lg`, `--gap-md`, `--style-border-width`, `--color-foreground-rgb`, `--opacity-10-25`).
- **Réglages Shopify associés** : aucun (codé en dur ; 🛠️ à rendre configurable via réglages de section / metafields).
- **Valeurs codées en dur** 🔒 : « Livraison offerte en France », « Complétez votre installation », « Ajouter », `#0E3A5A`, `#35B6AA`, les 4 handles, limite `bv_count >= 2`.
- **Valeurs dynamiques** : `p.url`, `p.featured_image`, `p.title`, `v.price`, `v.id`, `cart.items`.
- **À remplacer** : handles + ordre, titre, texte bouton, couleurs, nombre max, stratégie de recommandation, comportement variante, texte/politique de livraison.
- **Compatibilité autres thèmes** : ⚠️ non — dépend de composants/variables Horizon. Référence uniquement.
- **Risques** : handles inexistants → module vide ; 1re variante pas toujours pertinente ; ajout direct risqué si choix requis ; reco identique quel que soit le panier ; redondance tiroir/page.
- **QA** : voir Checklist QA (§ 16 de la page parente).
- **Statut de validation** : Prêt à adapter (non validé pour une nouvelle boutique).

### Code complet

```liquid
{% comment %}
  Référence portable extraite du panier Bonum Vitae.
  Dépendances Horizon : cart, all_products, product-form-component et product-form.js.
  À insérer dans le contenu non vide du tiroir, après la liste des articles et avant le récapitulatif.
  Les poignées produit, textes, couleurs et politique de livraison sont à adapter par boutique.
{% endcomment %}

<div class="bv-cart-banner">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M1 3h15v13H1z"/>
    <path d="M16 8h4l3 3v5h-7z"/>
    <circle cx="5.5" cy="18.5" r="1.6"/>
    <circle cx="18.5" cy="18.5" r="1.6"/>
  </svg>
  <span>Livraison offerte en France</span>
</div>

{%- liquid
  assign bv_upsell = 'membrane-d-osmose-inverse-ro-cartouche-de-remplacement,elements-filtrants-de-robinet-anti-chlore-lot-alloet,aerateur-de-robinet-economie-d-eau-buse-remplacable,filtre-de-douche-parfume-anti-calcaire-corps-abs' | split: ','
  assign bv_count = 0
-%}

{%- capture bv_upsell_items -%}
  {%- for h in bv_upsell -%}
    {%- if bv_count >= 2 -%}{%- break -%}{%- endif -%}
    {%- assign p = all_products[h] -%}
    {%- if p != empty and p.available -%}
      {%- assign in_cart = false -%}
      {%- for item in cart.items -%}
        {%- if item.product.handle == h -%}
          {%- assign in_cart = true -%}
        {%- endif -%}
      {%- endfor -%}
      {%- unless in_cart -%}
        {%- assign v = p.selected_or_first_available_variant -%}
        {%- assign bv_form_id = 'BvUpsellForm-' | append: p.id -%}
        <div class="bv-cart-upsell__item">
          <a href="{{ p.url }}" class="bv-cart-upsell__media">
            <img src="{{ p.featured_image | image_url: width: 160 }}" alt="{{ p.title | escape }}" width="56" height="56" loading="lazy">
          </a>
          <div class="bv-cart-upsell__info">
            <a href="{{ p.url }}" class="bv-cart-upsell__name">{{ p.title }}</a>
            <div class="bv-cart-upsell__row">
              <span class="bv-cart-upsell__price">{{ v.price | money }}</span>
              <product-form-component data-section-id="cart-drawer-section" data-product-id="{{ p.id }}" data-product-url="{{ p.url }}" on:submit="/handleSubmit" data-quantity-default="1">
                {%- form 'product', p, id: bv_form_id, class: 'bv-upsell-form', data-type: 'add-to-cart-form' -%}
                  <input type="hidden" name="id" value="{{ v.id }}">
                  <button type="submit" name="add" class="bv-upsell-add">Ajouter</button>
                {%- endform -%}
              </product-form-component>
            </div>
          </div>
        </div>
        {%- assign bv_count = bv_count | plus: 1 -%}
      {%- endunless -%}
    {%- endif -%}
  {%- endfor -%}
{%- endcapture -%}

{%- assign bv_upsell_trim = bv_upsell_items | strip -%}
{%- if bv_upsell_trim != '' -%}
  <div class="bv-cart-upsell">
    <p class="bv-cart-upsell__title">Complétez votre installation</p>
    <div class="bv-cart-upsell__list">{{ bv_upsell_items }}</div>
  </div>
{%- endif -%}

<style>
  .bv-cart-banner{display:flex;align-items:center;justify-content:center;gap:.5rem;margin:0 var(--cart-drawer-padding) var(--gap-lg);padding:.6rem 1rem;border-radius:12px;background:linear-gradient(90deg,#0E3A5A,#35B6AA);color:#fff;font-size:.85rem;font-weight:500}
  .bv-cart-banner svg{width:20px;height:20px;flex-shrink:0}
  .bv-cart-upsell{padding-block-start:var(--gap-lg);padding-block-end:var(--gap-md);padding-inline:var(--cart-drawer-padding);border-top:var(--style-border-width) solid rgb(var(--color-foreground-rgb) / var(--opacity-10-25));margin-block-start:var(--gap-lg)}
  .bv-cart-upsell__title{font-family:var(--font-heading--family);color:#0E3A5A;font-size:1.05rem;margin:0 0 .8rem}
  .bv-cart-upsell__list{display:flex;flex-direction:column;gap:.9rem}
  .bv-cart-upsell__item{display:grid;grid-template-columns:56px 1fr;align-items:center;gap:.75rem}
  .bv-cart-upsell__media{display:block}
  .bv-cart-upsell__item img{width:56px;height:56px;object-fit:cover;border-radius:10px;background:#f2f2f2;display:block}
  .bv-cart-upsell__info{display:flex;flex-direction:column;gap:.35rem;min-width:0}
  .bv-cart-upsell__name{font-size:.85rem;line-height:1.25;color:#1C2830;text-decoration:none}
  .bv-cart-upsell__name:hover{text-decoration:underline}
  .bv-cart-upsell__row{display:flex;align-items:center;justify-content:space-between;gap:.5rem}
  .bv-cart-upsell__price{font-size:.9rem;font-weight:600;color:#0E3A5A;white-space:nowrap}
  .bv-upsell-form{margin:0}
  .bv-upsell-add{border:0;cursor:pointer;background:#0E3A5A;color:#fff;font-size:.78rem;font-weight:600;padding:.4rem .85rem;border-radius:999px;white-space:nowrap;transition:background .15s ease}
  .bv-upsell-add:hover{background:#35B6AA}
</style>
```

---

# Fiche — cart-drawer-section.liquid (Horizon natif)

- **Rôle** : point d'entrée SRA (Section Rendering API) du tiroir ; rend `cart-drawer` sans wrapper.
- **Emplacement** : cible des endpoints `/cart` ; identifiant de section `cart-drawer-section` (référencé par l'upsell).
- **Type** : Horizon natif. **Chemin** : `sections/cart-drawer-section.liquid`.
- **Dépendances** : snippet `cart-drawer`. **Compatibilité** : Horizon uniquement.

```liquid
{% # SRA target for /cart endpoints. The Section Rendering API provides the section wrapper. %}
{% render 'cart-drawer', render_wrapper: false %}

{% schema %}
{
  "name": "t:names.cart_drawer"
}
{% endschema %}
```

---

# Fiche — templates/cart.json (Horizon natif, auto-généré)

- **Rôle** : structure + réglages de la **page panier** (2 sections : `main-cart` puis `product-list`).
- **Type** : Horizon natif (auto-généré). **Chemin** : `templates/cart.json` · 256 lignes · MD5 `c1136ae57be7c79765523ff5099ca6bd`.
- **Valeurs codées en dur** 🔒 : titre `Panier`, titre reco `Complétez votre installation`, bouton `Tout voir`, collection `all`, `max_products: 4`, `columns: 4`, `mobile_columns: 2`.
- **Compatibilité** : ⚠️ non — reconstruire selon les schémas du thème cible.

```json
/*
 * ------------------------------------------------------------
 * IMPORTANT: The contents of this file are auto-generated.
 *
 * This file may be updated by the Shopify admin theme editor
 * or related systems. Please exercise caution as any changes
 * made to this file may be overwritten.
 * ------------------------------------------------------------
 */{
  "sections": {
    "cart-section": {
      "type": "main-cart",
      "blocks": {
        "cart-page-title": {
          "type": "_cart-title",
          "static": true,
          "settings": {
            "title": "Panier",
            "show_count": true,
            "type_preset": "h4",
            "alignment": "left",
            "padding-block-start": 0,
            "padding-block-end": 0,
            "padding-inline-start": 0,
            "padding-inline-end": 0
          },
          "blocks": {}
        },
        "cart-page-items": {
          "type": "_cart-products",
          "static": true,
          "settings": {
            "gap": 24,
            "image_ratio": "portrait",
            "dividers": true,
            "vendor": false,
            "padding-block-start": 0,
            "padding-block-end": 0,
            "padding-inline-start": 0,
            "padding-inline-end": 0
          },
          "blocks": {}
        },
        "cart-page-summary": {
          "type": "_cart-summary",
          "static": true,
          "settings": {
            "extend_summary": true,
            "background_color": "{{ settings.color_palette.color2 }}",
            "border": "none",
            "border_width": 1,
            "border_opacity": 100,
            "border_radius": 0
          },
          "blocks": {}
        }
      },
      "settings": {
        "section_width": "page-width",
        "background_color": "{{ settings.color_palette.background }}",
        "padding-block-start": 24,
        "padding-block-end": 0
      }
    },
    "product_list_NNFgcy": {
      "type": "product-list",
      "blocks": {
        "static-header": {
          "type": "_product-list-content",
          "name": "t:names.header",
          "static": true,
          "settings": {
            "content_direction": "row",
            "vertical_on_mobile": false,
            "horizontal_alignment": "space-between",
            "vertical_alignment": "flex-end",
            "align_baseline": true,
            "horizontal_alignment_flex_direction_column": "flex-start",
            "vertical_alignment_flex_direction_column": "center",
            "gap": 12,
            "width": "fill",
            "custom_width": 100,
            "width_mobile": "fill",
            "custom_width_mobile": 100,
            "height": "fit",
            "custom_height": 100,
            "background_media": "none",
            "video_position": "cover",
            "background_image_position": "cover",
            "border": "none",
            "border_width": 1,
            "border_opacity": 100,
            "border_radius": 0,
            "padding-block-start": 0,
            "padding-block-end": 0,
            "padding-inline-start": 0,
            "padding-inline-end": 0
          },
          "blocks": {
            "product_list_text_fifeh4": {
              "type": "_product-list-text",
              "name": "t:names.collection_title",
              "settings": {
                "text": "<h3>Complétez votre installation</h3>",
                "width": "fit-content",
                "max_width": "normal",
                "alignment": "left",
                "type_preset": "h4",
                "font": "var(--font-body--family)",
                "line_height": "normal",
                "letter_spacing": "normal",
                "case": "none",
                "wrap": "pretty",
                "background": false,
                "background_color": "#00000026",
                "corner_radius": 0,
                "padding-block-start": 0,
                "padding-block-end": 0,
                "padding-inline-start": 0,
                "padding-inline-end": 0
              },
              "blocks": {}
            },
            "product_list_button_eibbma": {
              "type": "_product-list-button",
              "name": "t:names.product_list_button",
              "settings": {
                "label": "Tout voir",
                "open_in_new_tab": false,
                "style_class": "link",
                "width": "fit-content",
                "custom_width": 100,
                "width_mobile": "fit-content",
                "custom_width_mobile": 100
              },
              "blocks": {}
            }
          },
          "block_order": [
            "product_list_text_fifeh4",
            "product_list_button_eibbma"
          ]
        },
        "static-product-card": {
          "type": "_product-card",
          "name": "t:names.product_card",
          "static": true,
          "settings": {
            "product_card_gap": 4,
            "border": "none",
            "border_width": 1,
            "border_opacity": 100,
            "border_radius": 0,
            "padding-block-start": 0,
            "padding-block-end": 0,
            "padding-inline-start": 0,
            "padding-inline-end": 0
          },
          "blocks": {
            "product_card_gallery_PEPpfq": {
              "type": "_product-card-gallery",
              "name": "t:names.product_card_media",
              "settings": {
                "image_ratio": "adapt",
                "border": "none",
                "border_width": 1,
                "border_opacity": 100,
                "border_radius": 0,
                "padding-block-start": 0,
                "padding-block-end": 0,
                "padding-inline-start": 0,
                "padding-inline-end": 0
              },
              "blocks": {}
            },
            "product_title_WNMpHe": {
              "type": "product-title",
              "name": "t:names.product_title",
              "settings": {
                "width": "100%",
                "max_width": "normal",
                "alignment": "left",
                "type_preset": "rte",
                "font": "var(--font-body--family)",
                "line_height": "normal",
                "letter_spacing": "normal",
                "case": "none",
                "wrap": "pretty",
                "background": false,
                "background_color": "#00000026",
                "corner_radius": 0,
                "padding-block-start": 4,
                "padding-block-end": 0,
                "padding-inline-start": 0,
                "padding-inline-end": 0
              },
              "blocks": {}
            },
            "price_yXfkPX": {
              "type": "price",
              "name": "t:names.product_price",
              "settings": {
                "show_sale_price_first": true,
                "show_installments": false,
                "show_tax_info": false,
                "type_preset": "h6",
                "width": "100%",
                "alignment": "left",
                "font": "var(--font-body--family)",
                "font_size": "1rem",
                "line_height": "normal",
                "letter_spacing": "normal",
                "case": "none",
                "padding-block-start": 0,
                "padding-block-end": 0,
                "padding-inline-start": 0,
                "padding-inline-end": 0
              },
              "blocks": {}
            }
          },
          "block_order": [
            "product_card_gallery_PEPpfq",
            "product_title_WNMpHe",
            "price_yXfkPX"
          ]
        }
      },
      "name": "Featured collection",
      "settings": {
        "collection": "all",
        "layout_type": "grid",
        "carousel_on_mobile": false,
        "max_products": 4,
        "columns": 4,
        "mobile_columns": "2",
        "mobile_card_size": "60cqw",
        "columns_gap": 8,
        "rows_gap": 24,
        "icons_style": "arrow",
        "icons_shape": "none",
        "section_width": "page-width",
        "horizontal_alignment": "flex-start",
        "gap": 28,
        "background_color": "{{ settings.color_palette.background }}",
        "padding-block-start": 48,
        "padding-block-end": 48
      }
    }
  },
  "order": [
    "cart-section",
    "product_list_NNFgcy"
  ]
}
```

---

# Fiches — composants natifs Horizon (référence)

> ⚠️ Code **Horizon natif** : sert de **référence de logique**, ne pas coller dans un autre thème sans adaptation. Le **fichier local** est la source byte-exacte (MD5 fourni). À reconstruire avec les composants/schémas natifs du thème cible.

## cart-drawer.liquid *(Horizon + 🔒 personnalisations BV publiées)*

- **Rôle** : tiroir complet publié — en-tête + compteur, état vide, **bannière de livraison (BV)**, liste des articles, **module d'upsell (BV)**, puis récapitulatif.
- **Emplacement** : tiroir. **Chemin** : `snippets/cart-drawer.liquid` · 346 lignes · MD5 `e0db569920efed91dd0a72b4ecb3e16b`.
- **Valeurs codées en dur** 🔒 : bannière + upsell (versions publiées) — la version **isolée réutilisable** est la fiche ⭐ `cart-drawer-customizations.liquid` ci-dessus.
- **Dépendances** : `cart`, `all_products`, `product-form-component`, snippets `cart-products` / `cart-summary`, variables CSS Horizon.
- **Compatibilité** : Horizon uniquement. **Statut** : Référence.

## cart-products.liquid *(Horizon natif)*

- **Rôle** : lignes produit — image/lien, titre + options de variante, prix normal/remisé, propriétés de ligne, abonnements/plans de vente, changement de quantité, suppression, messages d'erreur, actualisation des sections.
- **Emplacement** : tiroir + page panier. **Chemin** : `snippets/cart-products.liquid` · 1014 lignes · MD5 `7ce225206eca878d9cccf294b44401ab`.
- **Valeurs dynamiques** : `cart.items`, quantités, prix, variantes. **Codé en dur** : aucun (natif).
- **Compatibilité** : Horizon uniquement (Web Components + SRA). **Statut** : Référence.

## cart-summary.liquid *(Horizon natif)*

- **Rôle** : note de commande, saisie/suppression codes de réduction, remises, sous-total, taxes/expédition, conditions de paiement échelonné, bouton principal de paiement, boutons de paiement accéléré.
- **Emplacement** : tiroir + page panier. **Chemin** : `snippets/cart-summary.liquid` · 618 lignes · MD5 `61fd9f25ebea25f58fbc8102bb834e4d`.
- **Réglages associés** : `show_order_note`, `show_discount_code`, `show_cart_note_open_by_default`, paiement échelonné, paiements accélérés (voir § 10 de la page parente).
- **Compatibilité** : Horizon uniquement. **Statut** : Référence.

## main-cart.liquid *(Horizon natif)*

- **Rôle** : section de la **page panier** (assemble titre, produits, récapitulatif).
- **Emplacement** : page panier. **Chemin** : `sections/main-cart.liquid` · 231 lignes · MD5 `e75c39a766e55bb841213b3a63c3c8b7`.
- **Compatibilité** : Horizon uniquement. **Statut** : Référence.

## _cart-products.liquid *(Horizon natif — bloc)*

- **Rôle** : bloc « produits » de la page panier (schéma + réglages : gap, ratio image, séparateurs, vendeur).
- **Chemin** : `blocks/_cart-products.liquid` · 174 lignes · MD5 `b2391450c7acd9076a9dc1db6244c3f7`. **Statut** : Référence.

## _cart-summary.liquid *(Horizon natif — bloc)*

- **Rôle** : bloc « récapitulatif » de la page panier (schéma + réglages : extend_summary, background, bordures).
- **Chemin** : `blocks/_cart-summary.liquid` · 239 lignes · MD5 `dfaec4788ba423486da11796c988022d`. **Statut** : Référence.

---

# Fiches — réglages du thème

## config/settings_data.json *(Horizon — valeurs courantes)*

- **Rôle** : valeurs actives du thème (🔎 observé). **Chemin** : `config/settings_data.json` · 165 lignes · MD5 `f45ea67bc1832699adef505fa5e4840e`.
- **Valeurs panier observées** : type `drawer` · ouverture auto `true` · note de commande `true` · code promo `true` · code devise dans les lignes `false`.

## config/settings_schema.json *(Horizon — définitions + défauts)*

- **Rôle** : définitions et **valeurs par défaut** des réglages du thème. **Chemin** : `config/settings_schema.json` · 2121 lignes · MD5 `5a4c151b4e014cd07f44fb5cd668784f`.
- **Défauts effectifs panier** (💡 non surchargés dans settings_data) : ouvrir la note par défaut `false` · conditions de paiement échelonné `true` · boutons de paiement accéléré `true`.
- **Compatibilité** : ⚠️ propre à Horizon. **Statut** : Référence (fichier local = source byte-exacte).

> ℹ️ Les 4 fichiers natifs volumineux (`cart-products` 1014 l, `cart-summary` 618 l, `settings_schema` 2121 l, `cart-drawer` 346 l) ne sont pas recopiés intégralement dans Notion : ce sont des composants Horizon **à ne pas copier tels quels**, et les fichiers locaux restent la source byte-exacte (MD5 ci-dessus).
