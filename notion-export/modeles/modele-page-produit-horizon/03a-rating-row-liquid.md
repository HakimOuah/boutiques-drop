# ⭐ Ligne de note et avis — rating-row.liquid

- **URL Notion** : https://app.notion.com/p/3a11f38c31548156bbbfed780891c62f
- **Date d'export** : 07/08/2026
- **Parent** : 3. Liquid personnalisé (Modèle Page Produit Horizon)

---

## Fichier

- **Nom** : `rating-row.liquid`
- **Chemin local** : `boutique-pipeline/docs/horizon-product-page-reference/custom-liquid/rating-row.liquid`
- **Emplacement exact** : colonne d'informations, **avant le titre**.

## Fonction

Affiche la note globale et le nombre d'avis — preuve sociale immédiate au-dessus du titre.

## Dépendances

- Ancre `#shopify-section-template--20012964675850__trustpilot_7FTrR8` (propre à une ancienne configuration de section).
- Image `avis.png` chargée depuis un CDN tiers.

## Valeurs codées en dur (à personnaliser)

- `4.8/5`
- `312 avis vérifiés`
- URL de l'ancre de section
- URL CDN de l'image `avis.png`

## Valeurs à modifier pour une nouvelle boutique

- Note et nombre d'avis → source réelle et dynamique.
- Ancre → pointer vers la vraie section d'avis.
- Image → héberger sur le CDN de la boutique.

> ⚠️ Ne jamais afficher « vérifié » sans preuve réelle.

## Code complet

```liquid
<a href="#shopify-section-template--20012964675850__trustpilot_7FTrR8"
style="text-decoration: none;">
<div style="display: flex; align-items: center; margin-top: 0px; margin-bottom: 0px;
font-family: inherit;">
<img src="https://cdn.shopify.com/s/files/1/0776/3751/7627/files/avis.png?v=1687213619"
alt="" width="80" height="16" style="height: 16px; width: auto; margin-right: 6px;">
<span style="font-size: 12px; color: inherit; font-weight: normal;"><strong>4.8/5</strong>
basé sur 312 avis vérifiés</span>
</div>
</a>
```

## Checklist de validation

- [ ] Note et nombre d'avis remplacés par des données réelles
- [ ] Ancre pointant vers la vraie section d'avis
- [ ] Image hébergée sur le CDN de la boutique
- [ ] Mention « vérifié » justifiée par une preuve
