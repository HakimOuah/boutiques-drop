# 💧 Bénéfices osmoseur — benefits-osmoseur.liquid

- **URL Notion** : https://app.notion.com/p/3a11f38c3154818c903bc2dac88e9519
- **Date d'export** : 07/08/2026
- **Parent** : 3. Liquid personnalisé (Modèle Page Produit Horizon)

---

## Fichier

- **Nom** : `benefits-osmoseur.liquid`
- **Chemin local** : `boutique-pipeline/docs/horizon-product-page-reference/custom-liquid/benefits-osmoseur.liquid`
- **Emplacement exact** : même emplacement que les bénéfices génériques (sous PayPal/Klarna, avant le séparateur) — variante spécifique osmoseur.

## Fonction

Quatre bénéfices spécifiques à l'osmoseur.

## Valeurs codées en dur (à personnaliser)

- « Eau filtrée à la demande, sans réservoir »
- « S'installe sous l'évier, sans plombier »
- « Rejet optimisé 2:1 — moins de gaspillage d'eau »
- « Une eau plus agréable au goût »

## Valeurs à modifier pour une nouvelle boutique

> ⚠️ Ne pas reprendre les affirmations sur le goût, l'installation ou le ratio de rejet sans preuve propre au modèle vendu.

## Code complet

```liquid
<style>.bv-benef{list-style:none;margin:10px 0 2px;padding:0;display:flex;flex-direction:column;gap:11px;font-family:var(--font-body--family,'Inter',sans-serif);}.bv-benef li{display:flex;align-items:center;gap:11px;font-size:14px;line-height:1.3;color:#1C2830;}.bv-benef .bic{width:28px;height:28px;flex-shrink:0;border-radius:50%;background:#EAF3F1;display:flex;align-items:center;justify-content:center;}.bv-benef .bic svg{width:16px;height:16px;fill:none;stroke:#0E3A5A;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}</style><ul class="bv-benef"><li><span class="bic"><svg viewBox="0 0 24 24"><path d="M12 2.7C12 2.7 5.5 9.5 5.5 14.5a6.5 6.5 0 0 0 13 0C18.5 9.5 12 2.7 12 2.7z"/></svg></span>Eau filtrée à la demande, sans réservoir</li><li><span class="bic"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.7 3.7z"/></svg></span>S'installe sous l'évier, sans plombier</li><li><span class="bic"><svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 22 17 7"/></svg></span>Rejet optimisé 2:1 — moins de gaspillage d'eau</li><li><span class="bic"><svg viewBox="0 0 24 24"><path d="M12 3l1.9 4.8L19 9.5l-5.1 1.7L12 16l-1.9-4.8L5 9.5l5.1-1.7z"/></svg></span>Une eau plus agréable au goût</li></ul>
```

## Checklist de validation

- [ ] Bénéfices adaptés au modèle exact vendu
- [ ] Affirmations goût / rejet / installation prouvées
- [ ] Icônes cohérentes
