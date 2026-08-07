# Base « Boutiques »

- **URL Notion** : https://app.notion.com/p/3a26f4af523d448a907fce7b45b42bcc
- **Data source** : collection://e47a14f3-8d10-47be-8ce6-8e2748d5c4a5
- **Parent** : Pipeline Boutiques Drop
- **Date d'export** : 07/08/2026
- **Lignes exportées** : 3

## Schéma des propriétés

| Propriété | Type | Options / détails |
|---|---|---|
| Boutique | title | — |
| Réf | auto_increment_id | préfixe BTQ- |
| Statut | select | À créer, En construction, Prête à lancer, Lancée, Ads actives, Scaling, Kill, Ads lancées |
| Produit | relation | → Recherches produit (candidat produit source) |
| URL | url | — |
| Date lancement | date | — |
| Budget ads | number (euro) | — |
| CA | number (euro) | — |

## Vues

- Default view (table)
- Kanban boutiques (board groupé par Statut)

## Lignes

| Réf | Boutique | Statut | URL | Produit | Date lancement | Budget ads | CA | Créée le |
|---|---|---|---|---|---|---|---|---|
| BTQ-1 | 🧩 MODÈLE Boutique — dupliquer | À créer | — | — | — | — | — | 2026-07-18 |
| BTQ-2 | Montres Seiko Mod (Q4) | En construction | https://maisonnoirmont.fr | — | — | — | — | 2026-07-24 |
| BTQ-3 | 🧶 Boutique Tufting — Arborescence & sourcing | Ads lancées | — | — | — | — | — | 2026-07-19 |

## Pages-lignes riches (exportées)

- BTQ-1 → `../modeles/modele-boutique-dupliquer.md`
- BTQ-2 → `../boutiques/montres-seiko-mod-q4-noirmont.md`
- BTQ-3 → `../boutiques/boutique-tufting-arborescence-sourcing.md`
