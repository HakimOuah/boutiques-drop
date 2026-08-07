# 📝 7. Textes et contenus éditoriaux

- **URL Notion** : https://app.notion.com/p/3a11f38c3154815abb6ec385a5a1742b
- **Date d'export** : 07/08/2026
- **Parent** : Modèle Page Produit Shopify — Horizon

---

> Tous les textes actuels de Bonum Vitae sont conservés comme **exemples**. Statuts possibles : **Exemple à personnaliser** · **Texte global potentiellement réutilisable** · **Affirmation nécessitant une preuve** · **Donnée légale ou commerciale à vérifier**.

## Accordéons produit (exacts)

### 1. Description — *Texte global réutilisable (dynamique)*

```liquid
{{ closest.product.description }}
```

### 2. Livraison et retour — *Donnée commerciale à vérifier*

```html
<ul>
  <li>Livraison offerte en France : 4-8 jours</li>
  <li>Retours gratuits sous 14 jours</li>
</ul>
<p>Livraison suivie et assurée à domicile avec : Colissimo / DHL / Fedex / Chronopost</p>
```

### 3. Fabrication — *Exemple à personnaliser*

```html
<p>Nos produits sont fabriqués localement et dans le monde entier. Nous sélectionnons soigneusement nos partenaires de fabrication pour garantir que nos produits sont de haute qualité et d'un juste rapport qualité-prix.</p>
```

### 4. Garantie 2 ans — *Donnée légale à vérifier*

```html
<p>Nos produits sont garantis 2 ans selon la législation française.</p>
```

### 5. Contactez-nous — *Exemple à personnaliser (e-mail / tél / horaires)*

```html
<p>Une question avant d'acheter ? Notre service client vous répond en français, du lundi au vendredi de 9 h à 18 h. Écrivez-nous à <a href="mailto:contact@bonumvitae.fr">contact@bonumvitae.fr</a> ou appelez le 07 56 82 80 94.</p>
```

---

## USP (sections éditoriales longues)

### USP 1 — Écosystème — *Exemple à personnaliser*
- **Surtitre** : « Notre mission »
- **Titre** : « Une eau meilleure, à chaque point de la maison »
- **Rôle** : présenter l'écosystème de gamme.
- **CTA** : « Découvrir toutes les solutions »

### USP 2 — Installation — *Affirmation nécessitant une preuve*
- **Surtitre** : « En quelques minutes »
- **Titre** : « Installation facile, sans plombier »
- **Rôle** : réduire la peur de l'installation.
- **À adapter** à la complexité réelle du produit.

### USP 3 — Transparence — *Texte global potentiellement réutilisable*
- **Surtitre** : « Notre engagement »
- **Titre** : « On vous dit ce qui est prouvé — et ce qui ne l'est pas »
- **Rôle** : cadrer performances, limites et certifications.

### USP 4 — Gamme — *Exemple à personnaliser*
- **Surtitre** : « Du filtre à l'osmoseur »
- **Titre** : « Une solution pour chaque besoin et chaque budget »
- **Rôle** : présenter gamme, accessoires et consommables.
- **CTA** : « Explorer la gamme »

---

## FAQ — Objections — *Exemple à personnaliser (réponses à réécrire par produit)*

Questions actuelles :
1. Comment choisir la solution adaptée à mon eau ?
2. Faut-il des travaux ou un plombier ?
3. Vos produits sont-ils vraiment efficaces ?
4. Les dispositifs anti-calcaire adoucissent-ils l'eau ?
5. Combien coûte l'entretien ? Y a-t-il un abonnement ?
6. Quels sont les délais de livraison et les retours ?

> Pour une autre niche : conserver la **logique d'objections** mais réécrire toutes les réponses selon le produit, le fournisseur et les politiques réelles.

---

## Recommandations produit

- Le modèle contient **deux sections de recommandations** (« Complétez votre installation » + une 2e en bas de page).
- **Statut** : *Exemple à personnaliser* — pour une nouvelle boutique, **choisir une seule zone de recommandations** (collection liée) sauf justification CRO précise.

---

## Matrice de portabilité

| Élément | Portable ? | Action |
|---|---|---|
| Ordre CRO | Oui | Reproduire dans le thème cible |
| Custom Liquid | Partiellement | Adapter textes, classes, CDN et données |
| `bv-avis-clients.liquid` | Partiellement | Valider et brancher de vrais avis |
| `product*.json` | Non | Reconstruire selon les schémas cibles |
| IDs Horizon | Non | Générer de nouveaux IDs |
| App block TrustWILL | Non | Installer/configurer l'app |
| Médias `shopify://shop_images/...` | Non | Importer dans la nouvelle boutique |
| Coordonnées Bonum Vitae | Non | Remplacer |
| `4.8/5 — 312 avis` | Non | Utiliser une source réelle et dynamique |
