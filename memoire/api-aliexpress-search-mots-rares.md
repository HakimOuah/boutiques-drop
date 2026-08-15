# API AliExpress : `search` classe par popularité, pas par pertinence — écrire en mots rares

**Établi le 15/08/2026** sur le sourcing de repeuplement de Maison Noirmont (≈ 130 appels `search`).
Passerelle VPS en lecture seule, `codex-chasse-clusters/tools/aliexpress_vps_gateway.py`.

## Le piège

`search` fait un appariement **large** puis **trie par popularité globale**. Dès qu'une requête contient
un mot fréquent (`montre`, `boîte`, `watch`, `box`, `support`), elle ramène les best-sellers de la
**catégorie entière**, quelle que soit la suite de la requête.

| Requête | Ce qui remonte |
|---|---|
| `montre squelette` | 19 montres à quartz et LED à 2 €, **0 squelette** |
| `skeleton watch` | **exactement les mêmes 19 articles** |
| `montre squelette automatique homme saphir` | 0 résultat utile |
| `squelette` seul | des squelettes d'Halloween, d'aquarium, d'anatomie — le mot est bien indexé |
| **`squelette automatique`** | ✅ de vraies montres squelette |
| **`NH70`** | ✅ tout l'univers NH70 |
| **`fentes montres`** | ✅ les coffrets à emplacements |
| **`Tandorio plongée`** | ✅ huit listings pertinents d'un coup |

## La règle

**Deux mots rares, aucun mot fréquent.** Une requête bien écrite en français naturel est **la pire**.

Trois familles de mots rares qui paient :
1. **La référence technique** — `NH70`, `NH72`, `VK63`, `PT5000`.
2. **Le mot de métier que le traducteur emploie** — `fentes`, `emplacements`, `stérile`, `ajouré`.
3. **Le nom du magasin ou de la marque** — c'est la seule route vers les produits frères d'un vendeur,
   puisque l'API n'expose ni catalogue vendeur ni `related`. **Deviner le magasin est plus efficace que
   décrire le produit.**

⚠️ **Quand une famille n'a aucun mot rare, `search` ne la sert pas.** Cas vécu : « porte-montre,
présentoir » — quatorze requêtes, aucun résultat, parce que `support` est trop fréquent et qu'il
n'existe pas de terme technique propre. **Il faut alors trouver les magasins par le catalogue d'un
concurrent, puis interroger `search` sur leur nom.**

## Limites dures de l'endpoint

- **`--limit` plafonne à 20.** Au-delà, l'API renvoie une **liste vide sans erreur** — silencieux.
- **Le tri `latest` renvoie toujours 0.** Seuls `orders`, `price_desc` et `price_asc` fonctionnent.
- `orders` remonte les best-sellers globaux (bruit bas de gamme), `price_desc` remonte du luxe et des
  machines industrielles. **Balayer les deux et faire l'union**, puis filtrer sur le titre en local.

## Ce que l'API ne donne pas — plafond de preuve

- ⛔ **`variants` et `exact` renvoient toujours `rating: 0.0` et `evaluation_count: 0`**, même sur un
  article à 2 000 ventes. **La note ne s'obtient que par `search`** (note /5 + taux de satisfaction %),
  et **le nombre d'avis reste inaccessible**. Ne pas le maquiller dans un dossier.
- ⛔ **Pas de galerie produit.** Seules les **images de propriété SKU** sont exposées (une par coloris),
  plus l'image principale de `search`. Comptez ~3 images par fiche, pas 10. **La galerie complète ne se
  récupère qu'après l'import DSers**, par les noms de fichiers CDN.
- ✅ En revanche `variants` donne la **vérité chère** : ventes réelles au chiffre près, statut, vendeur,
  **prix et stock par SKU**. Et `exact` donne **fret France, transporteur, délai min/max, suivi**.

## Où le prix se lit

Le champ `price` de `search` est le **prix de liste**, souvent ≈ 2× le prix réel.
**Le coût est `offer_sale_price` dans `variants`/`exact`**, jamais `sku_price` ni `price`.
