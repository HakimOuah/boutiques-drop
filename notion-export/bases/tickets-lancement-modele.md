# Base « Tickets — Lancement boutique (modèle) »

- **URL Notion** : https://app.notion.com/p/da8b39cc1a4248f2aec7494df5ef247b
- **Data source** : collection://139e0897-e0dd-4645-a1d6-681e54a919b2
- **Parent** : 🏕️ Campement type — Lancement boutique
- **Date d'export** : 07/08/2026
- **Lignes exportées** : 20

## Schéma des propriétés

| Propriété | Type | Options |
|---|---|---|
| Ticket | title | — |
| Phase | select | 0 · Pré-lancement, 1 · Recherche & assets, 2 · Catalogue, 3 · Design & contenu, 4 · Réglages, 5 · QA & clôture |
| Ordre | number | — |
| Statut | select | À faire, En cours, Bloqué Hakim, Fait |
| Responsable | select | Agent, Hakim, Agent + validation Hakim |
| Dépend de | text | — |
| Livrable | text | — |

## Vues

- Default view (table) · Kanban (board par Statut) · Ordre d'exécution (table triée par Ordre)

## Lignes (triées par Ordre — toutes « À faire » dans le modèle)

| Ordre | Ticket | Phase | Responsable | Dépend de | Livrable | Export |
|---|---|---|---|---|---|---|
| 0 | 00 · Kick-off — création boutique & fiche | 0 · Pré-lancement | Agent + validation Hakim | Produit validé GO (4 gates) | Boutique Shopify accessible + campement dupliqué + dossier local + runbook | `../campement/00-kick-off-creation-boutique-fiche.md` |
| 0.5 | 00b · Arborescence produit — catalogue cible | 1 · Recherche & assets | Agent + validation Hakim | 00 | arborescence-\<marque\>.md : catégories + liste fermée des produits à sourcer | `../campement/00b-arborescence-produit-catalogue-cible.md` |
| 1 | 01 · Sourcing AliExpress détaillé (liens /item/) | 1 · Recherche & assets | Agent | 00b (arborescence validée) | Tableau de sourcing local + base Notion | `../campement/01-sourcing-aliexpress-detaille.md` |
| 2 | 02 · Persona & objections (BLOQUANT copywriting) | 1 · Recherche & assets | Agent | 00 | personas/persona-\<marque\>.md + objections-positionnement.md | `../campement/02-persona-objections.md` |
| 3 | 03 · Charte graphique + squelettes de pages | 1 · Recherche & assets | Agent + validation Hakim | 02 | charte-\<marque\>.md + polices woff2 + squelettes | `../campement/03-charte-graphique-squelettes.md` |
| 4 | 04 · Import DSers → Shopify (mapping intact) | 2 · Catalogue | Agent + validation Hakim | 01 | Produits importés, mapping DSers vérifié | `../campement/04-import-dsers-shopify.md` |
| 5 | 05 · Canal Online Store + collections + menus | 2 · Catalogue | Agent | 04 | Produits publiés, collections, navigation | `../campement/05-canal-online-store-collections-menus.md` |
| 6 | 06 · Francisation des variantes (méthode Tuftéo) | 2 · Catalogue | Agent + validation Hakim | 04 | Options/valeurs 100 % FR, Ships From supprimé, 0 SKU/prix modifié | `../campement/06-francisation-variantes.md` |
| 7 | 07 · Prix & prix barrés (règle ×1,3) | 2 · Catalogue | Agent + validation Hakim | 06 | Grille de prix + compareAt sur 100 % des variantes | `../campement/07-prix-prix-barres.md` |
| 8 | 08 · Images produit + visuels home (anti-faux-logos) | 3 · Design & contenu | Agent | 03, 05 | Médias propres poussés, images AliExpress supprimées | `../campement/08-images-produit-visuels-home.md` |
| 9 | 09 · Pages produit — structure Tuftéo + liquid custom | 3 · Design & contenu | Agent | 02, 03, 07 | templates/product.json + 3 blocs liquid custom | `../campement/09-pages-produit-structure-tufteo.md` |
| 10 | 10 · Homepage — structure Tuftéo | 3 · Design & contenu | Agent + validation Hakim | 02, 03, 08 | templates/index.json poussé + QA écran | `../campement/10-homepage-structure-tufteo.md` |
| 11 | 11 · Étoiles vert Trustpilot #05b67a | 3 · Design & contenu | Agent | 09, 10 | settings_data.json : stars_icons_color = #05b67a partout | `../campement/11-etoiles-vert-trustpilot.md` |
| 12 | 12 · Avis clients — persona démo puis import Trustoo | 3 · Design & contenu | Agent + validation Hakim | 02, 09, 10 | Avis persona + avis réels importés via Trustoo | `../campement/12-avis-clients-persona-trustoo.md` |
| 12.5 | 12b · Panier — bannière + upsells (structure Tuftéo) | 3 · Design & contenu | Agent | 05, 09, 13 | cart-drawer-group.json + cart.json poussés, QA drawer | `../campement/12b-panier-banniere-upsells.md` |
| 13 | 13 · Paramétrer la livraison | 4 · Réglages | Agent + validation Hakim | 04 | Profils d'expédition cohérents avec les promesses | `../campement/13-parametrer-livraison.md` |
| 14 | 14 · Pages légales — dupliquer la référence et adapter | 4 · Réglages | Agent | 00 | CGV, mentions, confidentialité, retours, livraison | `../campement/14-pages-legales.md` |
| 15 | 15 · Réglages boutique (devise, marchés, e-mails, paiements) | 4 · Réglages | Agent + validation Hakim | 00 | Boutique FR/EUR propre, e-mail expéditeur, paiements | `../campement/15-reglages-boutique.md` |
| 16 | 16 · QA complète mobile-first | 5 · QA & clôture | Agent | 09–15 | Rapport QA + correctifs | `../campement/16-qa-complete-mobile-first.md` |
| 17 | 17 · Clôture — synchro Notion, runbook, mémoire | 5 · QA & clôture | Agent | 16 | Fiche Boutiques à jour, runbook, mémoire | `../campement/17-cloture-synchro-notion-runbook-memoire.md` |

*(20 lignes dans la base ; chaque ticket a sa page-ligne complète exportée dans `campement/`.)*
