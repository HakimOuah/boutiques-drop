# 💳 Paiement en quatre fois — payment-installments.liquid

- **URL Notion** : https://app.notion.com/p/3a11f38c3154817d96b6df095dbbf87e
- **Date d'export** : 07/08/2026
- **Parent** : 3. Liquid personnalisé (Modèle Page Produit Horizon)

---

## Fichier

- **Nom** : `payment-installments.liquid`
- **Chemin local** : `boutique-pipeline/docs/horizon-product-page-reference/custom-liquid/payment-installments.liquid`
- **Emplacement exact** : **sous le prix**.

## Fonction

Affiche un paiement fractionné 4x (visuel PayPal/Klarna) calculé depuis le prix de la variante.

## Dépendances

- Logos PayPal/Klarna liés au CDN d'une autre boutique.
- Variable `product.selected_or_first_available_variant.price`.

## Valeurs codées en dur (à personnaliser)

- URL CDN des logos PayPal et Klarna.
- Libellé « Ou 4x » et logique de division par 4.

## Valeurs à modifier pour une nouvelle boutique

- Logos → héberger sur le CDN de la boutique.
- Ne pas promettre PayPal/Klarna s'ils ne sont pas activés.
- Montant non formaté avec la locale (calcul purement visuel, sans contrôle d'éligibilité).

## Code complet

```liquid
<style>
.payment-installments {
display: flex;
align-items: center;
gap: 6px;
margin-top: -20px;
font-family: var(--font-body-family);
font-size: 13px;
color: #475569;
}
.payment-installments .price {
font-weight: 530;
color: #1e293b;
}
.payment-logos {
display: flex;
align-items: center;
gap: 6px;
}
.payment-logos img {
height: 20px;
width: auto;
}
.payment-logos .paypal-card {
background: white;
border: 1px solid #e2e8f0;
border-radius: 4px;
padding: 3px 6px;
}
.payment-logos .klarna-card {
height: 20px;
width: auto;
}
.payment-logos span {
font-size: 12px;
color: #64748b;
}
</style>
<div class="payment-installments">
{% assign price = product.selected_or_first_available_variant.price | divided_by: 100.0 %}
{% assign installment = price | divided_by: 4 | round: 2 %}
<span>Ou 4x <span class="price">{{ installment }}€</span> avec</span>
<div class="payment-logos">
<img class="paypal-card"
src="https://cdn.shopify.com/s/files/1/0941/1667/5917/files/2_f6abbd15-09dc-434d-81bf-fa03
92a7ea0c.svg?v=1767533573" alt="PayPal" width="64" height="20">
<span>et</span>
<img class="klarna-card"
src="https://cdn.shopify.com/s/files/1/0941/1667/5917/files/1.svg?v=1767533573"
alt="Klarna" width="40" height="20">
</div>
</div>
```

## Checklist de validation

- [ ] PayPal/Klarna réellement activés sur la boutique
- [ ] Logos hébergés sur le CDN de la boutique
- [ ] Montant formaté avec la locale
- [ ] Éligibilité réelle du paiement fractionné vérifiée
