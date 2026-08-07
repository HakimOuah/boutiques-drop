# 🛒 Modèle panier Shopify Horizon

- **URL Notion** : https://app.notion.com/p/3a11f38c31548100a387e34d1f3fc30a
- **Date d'export** : 07/08/2026
- **Parent** : Modèle Page Produit Shopify — Horizon

---

> 🔗 Complète la référence « Modèle Page Produit Shopify — Horizon ». Même boutique source (Bonum Vitae), même thème (Horizon).

> ⚠️ **Les valeurs Bonum Vitae et les éléments codés en dur sont conservés comme exemples de modèle — à personnaliser à chaque nouvelle boutique.** Ne rien modifier dans Shopify, ne rien publier.

**Légende des tags** : 🔎 **Observé** · 🔒 **Codé en dur** · ❓ **Manquant** · 💡 **Hypothèse** · 🛠️ **Décision à prendre**.

---

## 1. Vue d'ensemble

Le panier Bonum Vitae utilise un **tiroir latéral natif Horizon** qui s'ouvre automatiquement après l'ajout d'un produit. Il embarque **deux personnalisations** Bonum Vitae (bannière de livraison + module d'upsell). Le reste (note, code promo, sous-total, paiement échelonné, checkout, paiements accélérés) est natif Horizon, piloté par les réglages globaux. Une **page panier complète** existe aussi, avec une liste de 4 recommandations (collection `all`, titre « Complétez votre installation »).

| Champ | Valeur |
|---|---|
| Boutique | Bonum Vitae (`bonumvitae.fr`) |
| Thème | Horizon (principal publié `MAIN`) |
| Date de lecture | 18 juillet 2026 |
| Mode de contrôle | Lecture seule (fichiers du thème) |
| Modification Shopify pendant l'audit | Aucune |

> 📁 Dossier source : `boutique-pipeline/docs/horizon-product-page-reference/cart/`. Les fichiers sont une **copie de référence en lecture seule** — leur présence ne signifie pas qu'ils peuvent être copiés tels quels dans un autre thème.

---

## 2. Architecture du tiroir panier

Ordre fonctionnel observé :

| Ordre | Composant | Origine | Fichier principal | État |
|---|---|---|---|---|
| 1 | Enveloppe du tiroir, ouverture/fermeture | Horizon | `sections/cart-drawer-section.liquid` • `snippets/cart-drawer.liquid` | Actif |
| 2 | En-tête + compteur d'articles | Horizon | `snippets/cart-drawer.liquid` | Actif |
| 3 | État panier vide | Horizon | `snippets/cart-drawer.liquid` | Actif |
| 4 | Bannière « Livraison offerte en France » | 🔒 Bonum Vitae | `snippets/cart-drawer.liquid` | Codée en dur |
| 5 | Liste des articles + quantités | Horizon | `snippets/cart-products.liquid` | Actif |
| 6 | Module d'upsell (max 2 produits) | 🔒 Bonum Vitae | `snippets/cart-drawer.liquid` | Codé en dur |
| 7 | Note de commande | Horizon | `snippets/cart-summary.liquid` | Activée |
| 8 | Champ code promotionnel | Horizon | `snippets/cart-summary.liquid` | Activé |
| 9 | Remises + sous-total | Horizon | `snippets/cart-summary.liquid` | Actif |
| 10 | Paiement échelonné | Horizon | `snippets/cart-summary.liquid` | Défaut effectif : actif |
| 11 | Bouton de paiement | Horizon | `snippets/cart-summary.liquid` | Actif |
| 12 | Paiements accélérés | Horizon | `snippets/cart-summary.liquid` | Défaut effectif : actifs |

---

## 3. Architecture de la page panier

`templates/cart.json` contient **2 sections** dans l'ordre : `main-cart` (titre + produits + quantités + récapitulatif) puis `product-list` (4 recommandations, collection `all`).

| Élément | Valeur actuelle |
|---|---|
| Titre | `Panier` |
| Compteur à côté du titre | Affiché |
| Espacement lignes | 24 px |
| Ratio des images | Portrait |
| Séparateurs entre produits | Affichés |
| Nom du vendeur | Masqué |
| Fond du récapitulatif | Palette `color2` |
| Titre des recommandations | `Complétez votre installation` |
| Collection | `all` |
| Produits maximum | 4 |
| Grille ordinateur | 4 colonnes |
| Grille mobile | 2 colonnes |
| Libellé du bouton | `Tout voir` |

---

## 4. Fonctions natives Horizon

**`snippets/cart-products.liquid`** — image + lien produit, titre + options de variante, prix normal/remisé, propriétés de ligne, abonnements/plans de vente, changement de quantité, suppression, messages d'erreur, actualisation des sections après modification.

**`snippets/cart-summary.liquid`** — note de commande, saisie/suppression des codes de réduction, affichage des remises, sous-total, taxes/expédition, conditions de paiement échelonné, bouton principal de paiement, boutons de paiement accéléré.

> 💡 Ces fonctions sont **plus portables comme logique métier que comme copie de code** : dans un nouveau thème, utiliser d'abord ses composants et schémas natifs.

---

## 5. Personnalisations Bonum Vitae

Deux ajouts, tous deux **codés en dur** dans `snippets/cart-drawer.liquid` (version isolée réutilisable dans `custom-liquid/cart-drawer-customizations.liquid`) :
1. **Bannière de livraison** (§ 6)
2. **Module d'upsell du tiroir** (§ 7)

Le **code complet** est dans la sous-page *11. Bibliothèque de code Liquid — Panier*.

---

## 6. Bannière de livraison

- **Texte** 🔒 : « Livraison offerte en France »
- **Icône** : camion (SVG inline)
- **Emplacement** : au-dessus de la liste des articles du tiroir
- **Couleurs** 🔒 : dégradé bleu `#0E3A5A` → vert `#35B6AA`, texte blanc
- **Nature** : 🔒 texte codé en dur — **non lié** au montant du panier, à une zone de livraison, au marché client ou à une règle Shopify Shipping.

> 🛠️ **À vérifier avant publication** : politique de livraison réelle · pays/zones concernés · seuil minimum éventuel · exclusions géographiques · exclusions de produits · cohérence avec les profils d'expédition Shopify · couleurs de marque. Ne publier que si la politique de livraison le confirme.

---

## 7. Upsells et recommandations

**Module d'upsell du tiroir** — titre 🔒 : « Complétez votre installation ».

Parcourt 4 handles dans un ordre fixe ; pour chacun : charge via `all_products[handle]`, ignore si absent/indisponible, vérifie qu'il n'est pas déjà au panier, sélectionne la 1re variante disponible, affiche image + titre + prix + bouton « Ajouter », **s'arrête après 2 affichés**.

**Handles codés en dur** 🔒 (ordre de priorité) :
1. `membrane-d-osmose-inverse-ro-cartouche-de-remplacement`
2. `elements-filtrants-de-robinet-anti-chlore-lot-alloet`
3. `aerateur-de-robinet-economie-d-eau-buse-remplacable`
4. `filtre-de-douche-parfume-anti-calcaire-corps-abs`

| Règle | Valeur actuelle |
|---|---|
| Source | Liste fixe de handles |
| Candidats | 4 |
| Max affiché | 2 |
| Exclure produit déjà au panier | Oui |
| Exclure produit indisponible | Oui |
| Choix de variante | 1re variante disponible |
| Sélecteur de variante | Non (ajout direct) |

> 🛠️ **À personnaliser** : les 4 handles · leur ordre · le titre du module · le nombre max de reco · le texte du bouton · les couleurs · la stratégie de recommandation · le comportement des variantes.

**Page panier** : une 2e zone de recommandations (section `product-list`, collection `all`, 4 produits, titre « Complétez votre installation », bouton « Tout voir »). 🛠️ Décider si tiroir + page ne sont pas redondants.

---

## 8. Note et code promotionnel

Gérés nativement par `snippets/cart-summary.liquid` :
- **Note de commande** : activée (`show_order_note = true`), fermée par défaut (`open_by_default = false`, valeur effective).
- **Code promotionnel** : champ activé (`show_discount_code = true`), saisie + suppression, gestion code valide/invalide.

---

## 9. Récapitulatif et paiement

- **Remises + sous-total** : natifs.
- **Paiement échelonné** : conditions affichées (défaut effectif `true`).
- **Bouton principal de paiement** : ouvre le checkout.
- **Paiements accélérés** : affichés (défaut effectif `true`).

> 🛠️ Les moyens de paiement réellement actifs doivent être vérifiés dans la boutique cible (l'affichage ne prouve pas l'activation).

---

## 10. Réglages globaux

Depuis `config/settings_data.json` (🔎 observé) :

| Réglage | Valeur actuelle |
|---|---|
| Type de panier | `drawer` (tiroir) |
| Ouvrir automatiquement après ajout | `true` |
| Afficher la note de commande | `true` |
| Afficher le champ code promo | `true` |
| Afficher le code devise dans les lignes | `false` (masqué) |
| Palette du tiroir | Réglages du thème |

Hérités du schéma Horizon (non surchargés — 💡 valeur effective par défaut) :

| Réglage | Valeur effective par défaut |
|---|---|
| Ouvrir la note par défaut | `false` |
| Afficher les conditions de paiement échelonné | `true` |
| Afficher les boutons de paiement accéléré | `true` |

> 🛠️ Avant reconstruction, vérifier la **valeur effective dans l'éditeur de thème** et le rendu réel, pas seulement les défauts.

---

## 11. Bibliothèque de code Liquid

→ Voir la sous-page dédiée **« 11. Bibliothèque de code Liquid — Panier »** (`modele-panier-horizon/11-bibliotheque-code-liquid-panier.md`).

## 12. Valeurs à personnaliser

→ Voir la base **« Valeurs codées en dur — Panier »** (`../bases/valeurs-codees-en-dur-panier.md`).

---

## 13. Dépendances techniques

Le module d'upsell (et le tiroir) dépendent de :
- objet Liquid `cart` ;
- objet Liquid `all_products` ;
- composant Horizon `product-form-component` ;
- JavaScript de formulaire produit Horizon (`product-form.js`) ;
- fichier + identifiant de section `cart-drawer-section` ;
- variables CSS Horizon (`--cart-drawer-padding`, `--gap-lg`, `--gap-md`, variables de bordure `--style-border-width`, `--color-foreground-rgb`, `--opacity-10-25`…).

> ⚠️ Ce code peut servir de **référence dans Horizon**, mais **ne doit pas être collé directement dans un autre thème sans adaptation** (composants, schémas et variables CSS différents).

---

## 14. Risques de migration

- 🔒 Les **handles** ne fonctionneront pas dans une boutique aux identifiants différents → module vide.
- La **1re variante disponible** n'est pas toujours celle voulue par le client.
- L'**ajout direct** est risqué pour les produits nécessitant un choix (taille/couleur/format).
- Les **recommandations sont identiques** quel que soit le contenu du panier.
- **Tiroir + page panier** peuvent être redondants.
- La **promesse de livraison** n'est pas reliée automatiquement aux règles Shopify.
- Les **composants JS et variables CSS** sont propres à Horizon.
- Les **moyens de paiement** doivent être vérifiés dans la boutique cible.

---

## 15. Checklist de reconstruction

1. Identifier le thème cible et son type de panier
2. Sauvegarder ou dupliquer le thème avant modification
3. Lire les schémas de la section panier cible
4. Activer les fonctions natives : note, remise, paiements, ouverture automatique
5. Ajouter la bannière avec une promesse de livraison vérifiée
6. Créer une configuration d'upsell propre à la boutique
7. Préférer réglages de section / metafields / metaobject aux handles en dur
8. Définir le comportement des variantes avant d'autoriser l'ajout direct
9. Éviter de dupliquer les recommandations tiroir/page
10. Tester panier vide, rempli, remise valide/invalide, quantité, suppression, épuisé
11. Tester les boutons de paiement et le checkout réel (mode approprié)
12. Vérifier mobile, clavier, lecteurs d'écran, textes longs, traductions
13. Confirmer politiques livraison, taxes, retours, paiements avant publication

---

## 16. Checklist QA

- [ ] Le tiroir s'ouvre après un ajout au panier
- [ ] Le tiroir se ferme au clavier et au clic
- [ ] Le compteur d'articles est exact
- [ ] Les quantités se mettent à jour sans double ajout
- [ ] La suppression fonctionne
- [ ] Les erreurs réseau/stock sont visibles
- [ ] La bannière de livraison correspond à la politique réelle
- [ ] Les produits d'upsell existent et sont disponibles
- [ ] Aucun produit déjà au panier n'est recommandé
- [ ] La bonne variante est ajoutée
- [ ] Le bouton d'upsell ne provoque pas de double soumission
- [ ] Le champ de réduction accepte et retire un code
- [ ] La note de commande est enregistrée
- [ ] Le sous-total et les remises sont exacts
- [ ] Les paiements accélérés affichés sont réellement utilisables
- [ ] Le bouton principal ouvre le checkout
- [ ] La page panier complète fonctionne aussi sans JS avancé
- [ ] Les recommandations ne sont pas redondantes/incohérentes
- [ ] Le rendu mobile ne déborde pas
- [ ] Navigation clavier OK
- [ ] Les textes sont traduits/adaptés au marché cible
- [ ] Cohérence avec les politiques de livraison et de paiement

---

## 17. Historique des versions

| Version | Date | Source | Notes |
|---|---|---|---|
| v1 (référence) | 18 juillet 2026 | Horizon `MAIN` Bonum Vitae, lecture seule | Capture initiale : tiroir + page panier + 2 personnalisations. Aucune modification Shopify. |

> Cette documentation décrit le code et les réglages **observés le 18 juillet 2026**. Elle ne prouve pas à elle seule que chaque moyen de paiement, règle de livraison ou remise fonctionne pour toutes les adresses et variantes — à tester dans la boutique cible avant publication.
