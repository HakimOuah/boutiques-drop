# 📚 Bibliothèque Liquid — Homepage

- **URL Notion** : https://app.notion.com/p/3a11f38c3154812c8dd3eb84f0419af3
- **Date d'export** : 07/08/2026
- **Parent** : Modèle homepage Shopify Horizon

---

> **Type** : `Horizon natif` (référence — lire les schémas du thème cible et reconstruire avec ses composants natifs) · `Custom BV` (personnalisé, réutilisable). Les gros fichiers natifs sont **documentés + intégrité MD5** ; le **code personnalisé** est collé en entier. Fichiers locaux = source byte-exacte.

> ⚠️ Ne pas présenter les fichiers Horizon comme universels. Pour une nouvelle boutique : lire les schémas du thème cible et reconstruire avec ses composants natifs.

## Inventaire des composants

### Sections

| Fichier | Type | Lignes | MD5 |
|---|---|---|---|
| `sections/header-announcements.liquid` | Horizon natif | 230 | `71aa108b` |
| `sections/header.liquid` | Horizon natif | 1755 | `65410bd6` |
| `sections/hero.liquid` | Horizon natif | 1487 | `3c0b0177` |
| `sections/product-list.liquid` | Horizon natif | 866 | `15521ae8` |
| `sections/collection-list.liquid` | Horizon natif | 874 | `558525a4` |
| `sections/section.liquid` | Horizon natif | 1755 | `d18bfa2b` |
| `sections/custom-liquid.liquid` | Horizon natif (wrapper) | 84 | `f860a174` |
| `sections/bv-avis-clients.liquid` | ⭐ Section perso BV | 189 | `b391b0dd` |
| `sections/footer.liquid` | Horizon natif | 265 | `7fcf2ac0` |
| `sections/footer-utilities.liquid` | Horizon natif | 214 | `8025e012` |

### Blocs

| Fichier | Lignes | MD5 |
|---|---|---|
| `blocks/accordion.liquid` | 292 | `6f214e55` |
| `blocks/_accordion-row.liquid` | 349 | `4a8f09cb` |
| `blocks/email-signup.liquid` | 815 | `9487cfee` |
| `blocks/group.liquid` | 521 | `d6091edf` |
| `blocks/icon.liquid` | 342 | `36c24298` |
| `blocks/image.liquid` | 349 | `fa72014a` |
| `blocks/text.liquid` | 389 | `8de85933` |
| `blocks/button.liquid` | 157 | `0b20126e` |
| `blocks/_product-card.liquid` | 196 | `41a5c035` |
| `blocks/_collection-card.liquid` | 193 | `97991568` |

### Structure / config / données

| Fichier | Type | Lignes | MD5 |
|---|---|---|---|
| `templates/index.json` | Horizon (auto-généré) | 1836 | `61333d94` |
| `sections/header-group.json` | Horizon | 150 | `fb8de032` |
| `sections/footer-group.json` | Horizon | 11 | `36ccca6a` |
| `layout/theme.liquid` | Horizon | 145 | `95904162` |
| `config/settings_data.json` | Horizon | 165 | `f45ea67b` |
| `config/settings_schema.json` | Horizon | 2121 | `5a4c151b` |
| `data/navigation-menus.json` | Données Shopify | 236 | `01bd6f25` |

### Code personnalisé

| Fichier | Type | Lignes | MD5 |
|---|---|---|---|
| `custom-liquid/comparatif-solutions.liquid` | ⭐ Custom BV | 2 (minifié) | `cc0fbde3` |

---

# ⭐ Fiche — comparatif-solutions.liquid (Custom Bonum Vitae)

- **Rôle** : tableau comparatif carafe / filtre robinet / osmoseur (guide de choix). Inséré via un bloc `custom-liquid` (section 10).
- **Type** : Custom BV. **Chemin** : `custom-liquid/comparatif-solutions.liquid` · MD5 `cc0fbde392545a609c0e2e2631f6e048`.
- **Dépendances** : variables CSS de police Horizon (`--font-subheading--family`, `--font-heading--family`, `--font-body--family`) avec fallbacks ; sinon **autonome** (HTML/CSS inline, aucun JS).
- **Valeurs codées en dur** 🔒 : tous les textes du tableau · couleurs (`#0e3a5a`, `#f7f4ee`, `#35b6aa`, `#dfe6e5`, `#3a4750`) · largeur min **640 px** · symboles budget €/€/€€€ · **3 URLs produit**.
- **Valeurs dynamiques** : aucune (100 % statique).
- **Compatibilité** : ✅ portable (HTML/CSS pur) — mais **contenu à reconstruire** à partir de données produit vérifiées et URLs réelles.
- **Risques** : URLs codées en dur → liens morts si les produits diffèrent ; caractéristiques non prouvées ; débordement si le contenu dépasse.
- **Statut** : À personnaliser.

### Code complet

```html
<div style="width:100%;max-width:1100px;margin:0 auto;box-sizing:border-box;min-width:0;"><p style="font-family:var(--font-subheading--family,sans-serif);font-weight:600;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;color:#35b6aa;margin:0 0 .5rem;">Guide de choix</p><h2 style="font-family:var(--font-heading--family,serif);font-weight:600;font-size:2rem;line-height:1.1;color:#0e3a5a;margin:0 0 1rem;">Quelle solution pour vous ?</h2><p style="font-family:var(--font-body--family,sans-serif);color:#3a4750;max-width:640px;margin:0 0 2rem;">Trois façons d'améliorer l'eau du robinet, du plus simple au plus complet. Un doute ? Écrivez-nous, nous répondons avant l'achat.</p><div style="width:100%;max-width:100%;min-width:0;overflow-x:auto;-webkit-overflow-scrolling:touch;"><table style="width:100%;min-width:640px;border-collapse:separate;border-spacing:0;border:1px solid #dfe6e5;border-radius:12px;overflow:hidden;"><thead><tr><th style="background:#0e3a5a;color:#f7f4ee;text-align:left;padding:16px;font-weight:600;font-size:.95rem;">Critère</th><th style="background:#0e3a5a;color:#f7f4ee;text-align:left;padding:16px;font-weight:600;font-size:.95rem;">Carafe filtrante</th><th style="background:#0e3a5a;color:#f7f4ee;text-align:left;padding:16px;font-weight:600;font-size:.95rem;">Filtre robinet</th><th style="background:#0e3a5a;color:#f7f4ee;text-align:left;padding:16px;font-weight:600;font-size:.95rem;">Osmoseur</th></tr></thead><tbody><tr><th scope="row" style="background:#f7f4ee;color:#0e3a5a;text-align:left;padding:14px 16px;font-weight:600;border-top:1px solid #dfe6e5;">Installation</th><td style="padding:14px 16px;color:#3a4750;font-weight:400;border-top:1px solid #dfe6e5;">Aucune : on remplit, on sert</td><td style="padding:14px 16px;color:#3a4750;font-weight:400;border-top:1px solid #dfe6e5;">Pose au point d'usage, compatibilité à vérifier</td><td style="padding:14px 16px;color:#3a4750;font-weight:400;border-top:1px solid #dfe6e5;">Installation sous évier à vérifier</td></tr><tr><th scope="row" style="background:#f7f4ee;color:#0e3a5a;text-align:left;padding:14px 16px;font-weight:600;border-top:1px solid #dfe6e5;">Idéal pour</th><td style="padding:14px 16px;color:#3a4750;font-weight:400;border-top:1px solid #dfe6e5;">Usage simple, sans raccordement</td><td style="padding:14px 16px;color:#3a4750;font-weight:400;border-top:1px solid #dfe6e5;">La cuisine, à petit prix</td><td style="padding:14px 16px;color:#3a4750;font-weight:400;border-top:1px solid #dfe6e5;">L'eau de boisson de tout le foyer</td></tr><tr><th scope="row" style="background:#f7f4ee;color:#0e3a5a;text-align:left;padding:14px 16px;font-weight:600;border-top:1px solid #dfe6e5;">Budget</th><td style="padding:14px 16px;color:#35b6aa;font-weight:700;border-top:1px solid #dfe6e5;">€</td><td style="padding:14px 16px;color:#35b6aa;font-weight:700;border-top:1px solid #dfe6e5;">€</td><td style="padding:14px 16px;color:#35b6aa;font-weight:700;border-top:1px solid #dfe6e5;">€€€</td></tr><tr><th scope="row" style="background:#f7f4ee;color:#0e3a5a;text-align:left;padding:14px 16px;font-weight:600;border-top:1px solid #dfe6e5;">Entretien</th><td style="padding:14px 16px;color:#3a4750;font-weight:400;border-top:1px solid #dfe6e5;">Référence de recharge à confirmer selon le modèle</td><td style="padding:14px 16px;color:#3a4750;font-weight:400;border-top:1px solid #dfe6e5;">Capacité et recharge selon le modèle</td><td style="padding:14px 16px;color:#3a4750;font-weight:400;border-top:1px solid #dfe6e5;">Références et durée selon le modèle</td></tr><tr><th scope="row" style="background:#f7f4ee;border-top:1px solid #dfe6e5;padding:14px 16px;"></th><td style="padding:14px 16px;border-top:1px solid #dfe6e5;"><a href="/products/carafe-filtrante-3-6-l-stock-ue-filtration-cuisine" style="color:#0e3a5a;font-weight:600;text-decoration:underline;text-decoration-color:#35b6aa;">Voir le produit</a></td><td style="padding:14px 16px;border-top:1px solid #dfe6e5;"><a href="/products/filtre-a-eau-pour-robinet-de-cuisine-modele-glq11" style="color:#0e3a5a;font-weight:600;text-decoration:underline;text-decoration-color:#35b6aa;">Voir le produit</a></td><td style="padding:14px 16px;border-top:1px solid #dfe6e5;"><a href="/products/osmoseur-ro-600g-sans-reservoir-eau-filtree-a-la-demande" style="color:#0e3a5a;font-weight:600;text-decoration:underline;text-decoration-color:#35b6aa;">Voir le produit</a></td></tr></tbody></table></div></div>
```
