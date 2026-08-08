---
name: visuels-composes-jamais-photo-fournisseur
description: "Méthode visuelle maison : générer à partir de l'image produit du fournisseur en ne changeant que la mise en scène — et ne jamais publier la photo AliExpress brute"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 13cddbe7-55b7-4c89-837c-f3e82c64d234
  modified: 2026-08-08T19:16:33.520Z
---

Méthode de production des visuels en vigueur depuis le début du projet, recadrée par Hakim le 08/08/2026 : **on génère beaucoup d'images avec Codex, mais toujours à partir de l'image produit du fournisseur.** Le produit lui-même (cadran, index, aiguilles, bracelet, boîtier, couleur) est repris tel quel et **jamais réinventé** ; **seule la situation dans laquelle le produit est présenté change** — fond, décor, lumière, contexte de port. C'est de la composition / inpainting à partir du réel, pas de la génération à partir de rien.

Corollaire absolu : **ne jamais publier la photo AliExpress brute du fournisseur sur le site.** Elle est un **matériau de départ, jamais un livrable.**

**Why:** deux risques distincts. ① Google sait rapprocher ces images, identiques sur des dizaines de boutiques dropshipping ; ② le client les reconnaît aussi — c'est un tueur de crédibilité et un signal de revente non différenciée. À l'inverse, faire *inventer* un produit par l'IA serait une misrepresentation Merchant Center : partir de la photo fournisseur garantit la fidélité au produit réellement livré tout en différenciant la présentation.

**How to apply:** dans tout brief de production visuelle (exemple : `boutique-pipeline/boutique-seiko-mod/BRIEF-VISUELS-CODEX-2026-08-08.md`), poser les 4 règles non négociables — ① partir de la photo fournisseur, ne changer que la mise en scène ; ② aucune photo fournisseur brute publiée ; ③ **aucun logo ni sigle de marque sur les cadrans** (les modèles en impriment spontanément — contrôle cadran par cadran obligatoire, voir [[shopify-canal-et-visuels-ia]]) ; ④ aucun avis, note, étoile ou badge incrusté dans l'image (purge du 08/08 : 46 médias détachés sur 37 fiches Noirmont). Ne pas classer les visuels fournisseur en « récupérables à publier tels quels » : ils sont matière première. Voir aussi [[mobile-first-et-placeholders-demo]] et [[da-creative-pas-premium-fade]].
