# 💧 Template produit osmoseur — product.osmoseur.json

- **URL Notion** : https://app.notion.com/p/3a11f38c315481c4915cce46ffd1e5ad
- **Date d'export** : 07/08/2026
- **Parent** : 6. Modèles JSON Horizon

---

## Fichier

- **Nom** : `templates/product.osmoseur.json`
- **Chemin local** : `boutique-pipeline/docs/horizon-product-page-reference/templates/product.osmoseur.json`
- **Intégrité** : 2150 lignes · 86 760 octets · MD5 `b92360f9cd76b69b45d1c520df28cd7b`

> ⚠️ **JSON propre au thème Horizon (auto-généré). Ne pas copier dans un autre thème sans lire ses schémas. Reconstruire la structure après lecture des schémas du thème cible.**

## Différence avec le template par défaut

Le template osmoseur reprend **toute la structure** de `product.json` et ajoute :

1. Une section **« Infographies osmoseur »** (`osmoseur_infographies`, type `section`) avec **3 images** alignées en ligne :
   - `shopify://shop_images/osmoseur-schema-osmose-inverse.png`
   - `shopify://shop_images/osmoseur-info-specs.png`
   - `shopify://shop_images/osmoseur-info-benefices.png`
2. Des **bénéfices de haut de page spécifiques à l'osmoseur** (voir la sous-page *Bénéfices osmoseur — benefits-osmoseur.liquid*).

> ⚠️ Les 3 images `shopify://shop_images/...` sont des médias de la boutique Bonum Vitae — **à importer et re-référencer** dans la nouvelle boutique.

### Extrait vérifié — section « Infographies osmoseur » (lignes 892–970)

```json
"osmoseur_infographies": {
  "type": "section",
  "blocks": {
    "img1": {
      "type": "image",
      "settings": {
        "image": "shopify://shop_images/osmoseur-schema-osmose-inverse.png",
        "link": "",
        "image_ratio": "square",
        "width": "custom",
        "custom_width": 32,
        "width_mobile": "fill",
        "custom_width_mobile": 100,
        "height": "fit",
        "border": "none",
        "border_width": 1,
        "border_opacity": 100,
        "border_color": "",
        "border_radius": 0,
        "padding-block-start": 0,
        "padding-block-end": 0,
        "padding-inline-start": 0,
        "padding-inline-end": 0
      },
      "blocks": {}
    },
    "img2": {
      "type": "image",
      "settings": {
        "image": "shopify://shop_images/osmoseur-info-specs.png",
        "link": "",
        "image_ratio": "square",
        "width": "custom",
        "custom_width": 32,
        "width_mobile": "fill",
        "custom_width_mobile": 100,
        "height": "fit",
        "border": "none",
        "border_width": 1,
        "border_opacity": 100,
        "border_color": "",
        "border_radius": 0,
        "padding-block-start": 0,
        "padding-block-end": 0,
        "padding-inline-start": 0,
        "padding-inline-end": 0
      },
      "blocks": {}
    },
    "img3": {
      "type": "image",
      "settings": {
        "image": "shopify://shop_images/osmoseur-info-benefices.png",
        "link": "",
        "image_ratio": "square",
        "width": "custom",
        "custom_width": 32,
        "width_mobile": "fill",
        "custom_width_mobile": 100,
        "height": "fit",
        "border": "none",
        "border_width": 1,
        "border_opacity": 100,
        "border_color": "",
        "border_radius": 0,
        "padding-block-start": 0,
        "padding-block-end": 0,
        "padding-inline-start": 0,
        "padding-inline-end": 0
      },
      "blocks": {}
    }
  },
  "block_order": [
    "img1",
    "img2",
    "img3"
  ],
  "name": "Infographies osmoseur",
```

> ℹ️ **Fichier complet byte-exact = fichier local `templates/product.osmoseur.json`** (2150 lignes, MD5 `b92360f9cd76b69b45d1c520df28cd7b`) — **source de vérité**. Le corps intégral n'est pas recopié ici pour garantir zéro altération silencieuse ; parties complètes disponibles sur demande.
