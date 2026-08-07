# ✅ Bénéfices génériques — benefits-default.liquid

- **URL Notion** : https://app.notion.com/p/3a11f38c3154819a8f79c75ce417248f
- **Date d'export** : 07/08/2026
- **Parent** : 3. Liquid personnalisé (Modèle Page Produit Horizon)

---

## Fichier

- **Nom** : `benefits-default.liquid`
- **Chemin local** : `boutique-pipeline/docs/horizon-product-page-reference/custom-liquid/benefits-default.liquid`
- **Emplacement exact** : **sous PayPal/Klarna et avant le séparateur**.

## Fonction

Liste de quatre bénéfices produit avec icônes (désir / réassurance).

## Valeurs codées en dur (à personnaliser)

- Les 4 textes de bénéfices : « S'installe soi-même, sans plombier », « Prêt à poser en quelques minutes », « Sélectionné pour sa fiabilité », « Conseil d'expert avant l'achat ».

## Valeurs à modifier pour une nouvelle boutique

> ⚠️ Ces textes ne sont pas universels. Remplacer les quatre bénéfices par des affirmations vérifiées pour le produit.

## Code complet

```liquid
<style>.bv-benef{list-style:none;margin:10px 0 2px;padding:0;display:flex;flex-direction:column;gap:11px;font-family:var(--font-body--family,'Inter',sans-serif);}.bv-benef li{display:flex;align-items:center;gap:11px;font-size:14px;line-height:1.3;color:#1C2830;}.bv-benef .bic{width:28px;height:28px;flex-shrink:0;border-radius:50%;background:#EAF3F1;display:flex;align-items:center;justify-content:center;}.bv-benef .bic svg{width:16px;height:16px;fill:none;stroke:#0E3A5A;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}</style><ul class="bv-benef"><li><span class="bic"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.7 3.7z"/></svg></span>S'installe soi-même, sans plombier</li><li><span class="bic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>Prêt à poser en quelques minutes</li><li><span class="bic"><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg></span>Sélectionné pour sa fiabilité</li><li><span class="bic"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z"/></svg></span>Conseil d'expert avant l'achat</li></ul>
```

## Checklist de validation

- [ ] 4 bénéfices réécrits et vérifiés pour le produit
- [ ] Icônes cohérentes avec chaque bénéfice
- [ ] Couleurs alignées sur la charte de la boutique
