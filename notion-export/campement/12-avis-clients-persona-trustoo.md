# 12 · Avis clients — persona démo puis import Trustoo

- **URL Notion** : https://app.notion.com/p/3a71f38c31548193a23ae78afe68332f
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 3 · Design & contenu |
| Ordre | 12 |
| Statut | À faire |
| Responsable | Agent + validation Hakim |
| Dépend de | 02, 09, 10 |
| Livrable | Avis persona en place + avis réels AliExpress importés via Trustoo |

---

## Objectif

De la preuve sociale crédible : d'abord des avis persona (démo), puis les avis réels AliExpress importés.

## Phase 1 — avis persona (démo)

- Écrits depuis le persona du ticket 02 : thèmes = objections retournées (livraison tenue, SAV qui répond, qualité perçue, cadeau, réachat). Noms/prénoms FR variés, dates étalées, notes 4,5–5★.
- \~6 sur la PDP + \~6 sur la home. **Les sliders/placeholders démo restent la chasse gardée de Hakim : proposer, il tranche.**

## Phase 2 — avis réels (Trustoo)

Recette complète en mémoire (`import-avis-trustoo-bookmark`) : Chrome + app TT Import Reviews, bookmarklet JS pour l'import en masse depuis la page AliExpress du fournisseur. Pièges connus : postMessage, sélecteurs de `select`, iframe.
- Filtrer : photos privilégiées, retirer les avis qui mentionnent AliExpress/le prix fournisseur/une autre marque, traduire en FR si besoin.

## Fini quand

Phase 1 validée par Hakim ; phase 2 : chaque produit principal a ses avis réels filtrés, notes cohérentes avec les badges affichés.
