---
name: rejets-terrain-2026-09-05-saisonnalite-et-deja-fait
description: "05/09/2026 — kamado rejeté sur saisonnalité (on entre en hiver), poulailler et serre de jardin rejetés parce que déjà très faits en dropshipping ; bioéthanol et pressothérapie retenus à creuser"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 895fd40e-b314-43c7-8ecf-c1bc8bf54472
  modified: 2026-09-05T08:14:48.074Z
---

Le 05/09/2026, sur les 5 GO de la passe « rejeu de la méthode Codex »
(`boutique-pipeline/analyses/2026-09-05-passe-claude-vs-codex.md`), Hakim a
tranché en trois lignes :

- **Barbecue kamado — NON, saisonnalité.** « On rentre en hiver. » Le dossier
  était pourtant le plus propre de la passe (SERP 0/12 grandes enseignes,
  forest-grill.com à 207 annonces Search). La fenêtre de lancement prime sur la
  qualité du dossier.
- **Poulailler — NON, « trop fait par d'autres dropshippers ».**
- **Serre de jardin — NON**, même motif.
- **Cheminée bioéthanol — OUI, à creuser.**
- **Pressothérapie — OUI, à creuser**, avec la réserve de Hakim lui-même :
  « je crois qu'il a pas mal été fait en drop aussi ».

**Why:** Deux filtres que le pipeline ne mesure pas et qui éliminent pourtant
des dossiers validés sur la demande et la concurrence. (1) La **saisonnalité de
lancement** : un produit d'extérieur validé en septembre n'a plus de fenêtre
avant le printemps — le volume annuel moyen le masque complètement. (2) Le
**« déjà fait en drop »**, qui prolonge le signal « winner dropship saturé » de
[[rejets-terrain-handpan-litcabane-purificateur]] : ce n'est plus seulement le
winner Meta des communautés e-commerce, c'est aussi la famille jardin/animalerie
classique que les dropshippers FR se repassent.

**How to apply:** Avant de présenter un GO, poser deux questions au dossier —
*« la fenêtre de vente est-elle ouverte dans les 60 jours ? »* (sinon le dire
explicitement et le classer en vivier printemps) et *« combien de boutiques
dropship FR sont déjà dessus ? »* (TrendTrack donne la réponse : chercher la
famille en `search_shops`, pas seulement la boutique preuve isolée). Ne pas
reproposer kamado, poulailler ni serre de jardin sans thèse nouvelle validée par
Hakim. Voir [[boucle-chasse-clusters-volume-first]] et
[[plafond-niches-kraken-evidentes]].
