# 08 · Images produit + visuels home (anti-faux-logos)

- **URL Notion** : https://app.notion.com/p/3a71f38c31548159ac68e7ad046ee9a7
- **Date d'export** : 07/08/2026
- **Base** : Tickets — Lancement boutique (modèle)

## Propriétés

| Propriété | Valeur |
|---|---|
| Phase | 3 · Design & contenu |
| Ordre | 8 |
| Statut | À faire |
| Responsable | Agent |
| Dépend de | 03, 05 |
| Livrable | Médias produit propres poussés, images AliExpress supprimées, visuels home |

---

## Objectif

Remplacer toutes les images AliExpress par des visuels charte, + produire les visuels home/illustration.

## Entrées

**Référence obligatoire : « Carousel Photos Produit — les 7 images dans l'ordre exact »** (Arthur FMV / Ecom Inner Circle) :
- Distillé texte : `boutique-pipeline/docs/carousel-photos-produit.md` (à lire par l'agent avant de générer)
- Pages complètes : `boutique-pipeline/docs/carousel-photos-produit/page-{1,2,3}.png` — PDF original : `~/Downloads/carousel_photos_produit.pdf`

Règles clés du doc : **1 seule DA du début à la fin** (même décor/lumière/palette, définie AVANT de générer, cf. charte ticket 03) ; 7 images dans l'ordre — émotion d'abord (1-4), rationnel ensuite (5-7) : ① produit seul wow (zéro texte) ② en situation ③ feature n°1 (1 titre + 1 sous-titre max) ④ en action ⑤ détails/dimensions ⑥ preuve sociale (note /5 + nb avis + garantie en GRAND, cohérents avec les badges du site) ⑦ témoignage client (citation des avis persona puis avis réel). Produits héros = les 7 ; accessoires/upsells = version allégée (min. ①③⑤).

## Skills à invoquer (globaux, via le Skill tool)

- `higgsfield-product-photoshoot` — packshots, lifestyle, hero banners, closeups avec mains : le prompt est assemblé par leurs templates backend, jamais freehand. Ne dispense PAS de la vérification visuelle anti-faux-logos ci-dessous.
- `higgsfield-marketplace-cards` — images de fiche produit conformes + modules type A+ : à croiser avec l'ordre des 7 images du carousel.
- `higgsfield-generate` — routage vers les bons modèles pour les autres besoins (visuels home, import produit depuis URL).

## Procédure de génération (recette éprouvée)

1. Générer via Higgsfield MCP (soul_2 ou équivalent) — ⚠️ le modèle imprime de faux logos/textes sur \~80 % des produits.
2. **Vérification visuelle OBLIGATOIRE de CHAQUE image** (l'ouvrir avec Read) : aucune lettre/logo ; chiffres tolérés uniquement s'ils sont légitimes ET nets (lunettes, guichets de date…). Vérifier la **fidélité produit** (nombre d'emplacements, forme exacte, pas d'objet parasite).
3. Retouche : venv Python + OpenCV — masque sur la zone → `cv2.inpaint` TELEA rayon 6-10 → feathered blur ; sinon régénération avec prompt plus contraint.
4. `manifest.json` : productId → fichiers, verified, notes ; budget crédits suivi.

## Procédure de push

1. `stagedUploadsCreate` (httpMethod PUT) → `curl -T` avec content-type → **`productCreateMedia`** (originalSource = resourceUrl ; PAS fileCreate) avec alt « \<Produit\> — \<Marque\> ».
2. `productDeleteMedia` des anciens médias AliExpress — **garde-fou : uniquement si la fiche a reçu ≥ 1 nouvelle image** ; ne jamais laisser une fiche sans visuel.
3. Visuels home/illustration : générer selon squelettes, uploader en fichiers thème/section.

## Fini quand

Plus aucune image AliExpress sur les fiches traitées, manifest à jour, échantillon de PDP vérifié à l'écran.
