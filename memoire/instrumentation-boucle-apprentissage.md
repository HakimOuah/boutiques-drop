---
name: instrumentation-boucle-apprentissage
description: Ce qui se perd si on ne le capture pas maintenant — croyances pré-lancement, mesures hebdo
metadata:
  type: project
---

Chantier ouvert le 30/08/2026 dans `boutique-pipeline/instrumentation/` (détail dans son `README.md` et dans `CLAUDE.md`).

**Ordre de périssabilité, vérifié sur le parc — c'est ça qu'il faut retenir :**

1. **La croyance pré-lancement est irrécupérable.** Elle se réécrit rétroactivement dès que les résultats tombent. `research-brief.md` de Tuftéo était resté le template vierge ; Bonum Vitae n'en avait aucun. Reconstituées le 30/08 avec confiance haute, mais uniquement parce que les sources datées existaient encore.
2. **Le pourquoi des interventions** — 192 entrées de journal, récupérable à froid, coût croissant avec le volume.
3. **Les métriques commerce sont dans Shopify**, récupérables rétroactivement via ShopifyQL. En revanche `ETAT.md` est « l'état courant » et **s'écrase** : tout le non-Shopify (GMC approuvés/limités, PageSpeed, LCP, positions) est perdu à chaque révision.

**Deux trous ouverts, trouvés en reconstituant les croyances :**
- **Bonum Vitae** : le coût d'achat du produit héros (RO 600G à 299 €) n'est documenté nulle part — la marge n'a jamais été chiffrée. La boutique a été positionnée par comparaison au marché, pas par l'économie.
- **Tuftéo** : six produits avaient un coût rendu **supérieur** au prix du concurrent letufting.fr, noté en une ligne le 21/07 et jamais instruit. Soit il achète nettement mieux, soit il vend l'entrée de gamme à perte pour capter le kit.

**Ni l'une ni l'autre n'a reçu de score dimensionnel ou de prédiction chiffrée.** Les champs sont laissés vides à dessein : les remplir après coup fabriquerait une croyance qui n'a pas existé. Premier apport attendu de l'instrumentation : imposer un scoring **avant** le prochain lancement.

Répartition des 192 interventions par levier : catalogue 49, creative 36, sourcing 35, page 35, technique 34, conformité 29 — mais **prix 8, ads 2, vitesse 2**. Le parc a été construit, pas encore piloté.

Voir [[architecture-hermes-modele-par-role]].
