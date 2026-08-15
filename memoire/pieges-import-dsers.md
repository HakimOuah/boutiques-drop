# Pièges de l'import DSers — vérifié sur Maison Noirmont le 15/08/2026

## 1. Toujours vérifier qu'un article sourcé n'est pas DÉJÀ le fournisseur d'une fiche active

Le sourcing par l'API AliExpress ne sait pas qu'un article est déjà exploité par la boutique. Le 15/08,
une file de 22 fiches en contenait **2 qui étaient un doublon d'une fiche active** — même article
fournisseur, mêmes variantes, prix contradictoires (84,90 € contre 89 €, et 99,90 € contre 149 €).

**Contrôle, avant tout push, pour chaque article de la file :**

1. Dans DSers → **Mes Produits** → loupe → **Produit en magasin** : chercher un nom de fiche plausible.
2. Comparer le **coût affiché sur la carte** (`Cost $x ~ $y`) avec celui de la carte de la **Liste
   d'import**. Deux bornes identiques = même article, c'est le signal le plus rapide.
3. Confirmer en ouvrant l'icône **Mapping** de la fiche : le « Fournisseur par défaut » donne le titre de
   l'article, et la table donne les variantes appariées.

⚠️ **Un doublon de fiche est plus coûteux qu'un trou de catalogue** : deux offres du même objet à deux
prix, au flux Merchant Center. Arrêter le push et remonter l'arbitrage vaut mieux que créer la fiche.

✅ Cadeau au passage : ce contrôle révèle les **fiches sous-prixées**. Si le calcul de marge du sourcing
place l'article bien au-dessus du prix de la fiche existante, la grille de prix a un angle mort.

## 2. La boîte « Unsaved changes » s'ouvre même quand on n'a rien modifié

Fermer le panneau « Gérer les fournisseurs des produits » déclenche la boîte **même après une simple
consultation**. Sur une fiche **déjà mappée**, cliquer **`IGNORER`** — cliquer `ENREGISTRER` écraserait
un mapping correct par un mapping vide.

## 3. Le mapping fournisseur ne persiste pas (constaté, non résolu)

Sur 4 fiches issues d'une duplication Shopify, restées `Unmapped` : coller le lien fournisseur →
**Mapping basique** → la table s'auto-renseigne **correctement** → `Enregistrer` **ne fait rien**. La
fenêtre reste ouverte, la boîte « Unsaved changes » revient, son `ENREGISTRER` non plus, et après
rechargement l'onglet affiche toujours `Unmapped (4)`. Ne pas y passer du temps en séance : consigner et
poursuivre.

## 4. Ce que DSers apporte que l'API n'a pas

- **La galerie fournisseur complète** (l'API n'expose que les images de propriété SKU). 97 photos
  distinctes pour 20 fiches là où l'API en avait rendu 60.
- **L'image de propriété SKU posée sur la variante Shopify** : c'est le pont `coloris ↔ photo`, une
  **donnée relevée** et non une hypothèse. Il supprime le risque n°1 des livraisons d'images.

## 5. Une galerie fournisseur mélange les versions marquée et stérile du même boîtier

Sur la famille Tandorio 36 mm, **11 photos sur 15** montrent le cadran avec logo et mention de
spécification, alors que **la variante achetée est bien stérile**. Le fournisseur vend les deux versions
du même boîtier sous un seul listing. **Ne jamais conclure « cadran stérile » depuis la fiche ou le nom
de variante : contrôler chaque photo en zoom, une par une.** Le corollaire est brutal — après tri, il ne
restait qu'**une seule source de cadran par fiche**.

## 6. Le découpage par duplication propage la galerie entière

Le découpage d'un produit DSers multi-variantes en fiches d'une variante se fait par duplication
Shopify : chaque fiche sœur hérite de **la galerie complète, identique**. Ranger les sources **par
article fournisseur**, jamais par handle — sinon on stocke la même photo six fois.
