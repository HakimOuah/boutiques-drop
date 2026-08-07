# 01 · Sourcing AliExpress détaillé (liens /item/)

- **URL Notion** : https://app.notion.com/p/3a71f38c315481ebb68df10667c126bf
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 1 · Recherche & assets |
| Ordre | 1 |
| Statut | À faire |
| Responsable | Agent |
| Dépend de | 00b (arborescence validée) |
| Livrable | Tableau de sourcing local + base Notion : 1 ligne/produit avec URL /item/, prix rendu, délai, vendeur |

---

## Objectif

Un tableau de sourcing exploitable pour l'import DSers : chaque produit du catalogue avec son **lien AliExpress /item/ exact**, prix rendu, délai France, vendeur, risques.

## Entrées

**L'arborescence produit validée (ticket 00b)** = la liste fermée des produits à sourcer, ligne par ligne. En appui : dossier de recherche produit (registre + rapports de phase 4).

## Procédure

1. Dérouler l'arborescence du ticket 00b produit par produit (les candidats déjà sourcés en phase 4 ont déjà leur URL : la revérifier, pas la redécouvrir).
2. **URLs directes `/item/<id>.html` uniquement** — les URLs de recherche AliExpress ne se chargent pas ; extraire les détails par JS sur la page produit (recette éprouvée).
3. Relever pour chaque ligne : titre, URL /item/, prix + livraison (prix rendu), délai France (privilégier entrepôts UE \< 10 j pour le cœur de gamme), note vendeur, ventes, variantes disponibles, risques (délai, plug, fidélité photo).
4. Vérifier la cohérence des variantes avec ce qu'on veut vendre (couleurs, tailles, mouvements…).

## Livrables

- `boutique-pipeline/boutique-<nom>/sourcing-<date>.md` (source de vérité).
- Base Notion « Sourcing \<marque\> » sous la page campement (modèle : base Sourcing tufting — produit, catégorie, URL /item/, prix rendu, expédition, délai, preuve sociale, statut UE/Chine, risques).

## Fini quand

Chaque produit du catalogue prévu a une ligne complète avec URL /item/ cliquable et un statut sourcing (OK UE / OK Chine / à remplacer).

## ⚙️ Méthode AliExpress — recettes vérifiées (passe Noirmont 25/07/2026)

**Ce qui marche**
- URL directes `fr.aliexpress.com/item/<id>.html` au navigateur intégré, puis **une seule extraction JS immédiatement après la navigation** (titre, prix, note, avis, ventes, vendeur, délai, variantes, carrousel).
- **Meilleure voie de découverte : le carrousel « Vous aimerez aussi »** des pages vivantes. Il rend titre, prix, note et volume de ventes des voisins — plus fiable que n'importe quelle recherche.
- Pour élargir une gamme : ouvrir l'onglet **« Magasin »** d'un vendeur déjà validé (les vendeurs de bracelets/accessoires sont généralistes et couvrent souvent 3-4 lignes d'un coup).

**Ce qui ne marche pas**
- **WebFetch est inutilisable** sur AliExpress (rendu JS : seul le pied de page revient).

**⚠️ CORRECTION du 25/07 — deux « limites » qui n'en étaient pas**

Une première passe avait conclu que la recherche AliExpress était inexploitable (CAPTCHA) et que 60 % des annonces étaient mortes. Une seconde passe a démontré le contraire :
- Le **CAPTCHA n'est pas une protection du site mais la conséquence d'un navigateur sans session**. Depuis le Chrome de Hakim (déjà connecté), la recherche globale **et** la recherche interne à une boutique fonctionnent sans challenge et rendent 40 fiches. → **Utiliser le navigateur avec session pour le sourcing.** (La règle de ne jamais résoudre un CAPTCHA reste absolue — simplement, il n'y en a pas à résoudre.)
- Les **« listings morts » étaient un artefact** : identifiants tronqués et préfixes devinés. Les préfixes réels vont jusqu'à `1005012`. Toujours copier un identifiant en entier, ne jamais le reconstruire.

**Leçon méthodologique générale** : quand un agent conclut « c'est techniquement impossible », faire revalider par une seconde passe dans des conditions différentes avant d'inscrire la limite dans la doctrine. Une fausse limite coûte plus cher qu'une passe supplémentaire.

**Organisation**
- **Ne pas faire tourner deux agents navigateur en parallèle** : lors de la passe du 25/07, deux agents de sourcing simultanés ont coïncidé avec une instabilité d'onglet (re-navigation spontanée). Sérialiser les passes navigateur.
- Signaler les **variantes nommées « no logo » / « sterile »** : c'est le signal de stérilité le plus fiable.
- Les titres fournisseurs disent souvent « pour Rolex / Seiko » : ce sont des mots-clés vendeur, pas un marquage produit. **Nos fiches ne reprennent jamais ces marques**, et les photos fournisseur montrant des montres logotées sont à recadrer ou regénérer.
