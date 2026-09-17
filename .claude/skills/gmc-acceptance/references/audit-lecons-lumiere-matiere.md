# Leçons Lumière Matière — suspension après la première campagne (17/09/2026)

À lire avec [`lexique-interdit.md`](lexique-interdit.md), qui en tire les règles. Ce fichier garde
le cas : ce qui s'est passé, ce qui était faux, ce qui a été corrigé, ce qui reste à Hakim.

Rapports : `boutique-pipeline/catalogues/lumierematiere/shopify/AUDIT-GMC-POST-SUSPENSION-2026-09-17.md`
et `…/journal/2026-09-17-correction-veracite.md`.

## Chronologie

- 24/08 — domaine créé. 05/09 — audit pré-soumission : « le catalogue ne ment plus nulle part ».
- Mi-septembre — Merchant Center accepté ; il tient plusieurs jours.
- Première campagne lancée → compte suspendu **le lendemain** pour déclarations trompeuses.
- Même entité (OH Ventures) et même siège que Maison Noirmont, suspendue pour le même motif le
  23/08 et fermée le 15/09. Aggravant probable, non démontré.

## Pourquoi l'audit du 05/09 n'a rien vu

Il a comparé **le site à lui-même** : prix, délais, libellés, images de variantes, TTC, JSON-LD.
Tout était aligné. Il n'a pas comparé **le site à l'entrepôt** : qui stocke, qui contrôle, d'où
part le colis, de quoi est fait le produit. **Un audit de cohérence n'est pas un audit de véracité.**

Et c'est l'auditeur lui-même qui avait écrit « Suspension **travertin** cuisine » sur une fiche qui
disait déjà « composite » — l'écart avait été vu le 07/09 et laissé.

## Ce qui était faux

1. **Le modèle d'activité.** « Boutique en ligne parisienne », préparation qui « couvre le contrôle
   du luminaire, l'emballage », colis « confiés à Colissimo, DPD », « l'équipe répond de Paris »,
   FAQ « Où se situe Lumière Matière ? — une marque française, installée à Paris ». **Aucune
   mention de l'origine Chine.** Adresse de retour « communiquée » sans pays ni coût.
2. **La matière.** 11 titres « pierre / travertin » (6 corps disaient « composite ») ; « C'est de la
   vraie pierre ? — Le corps est un bloc de pierre » sur une applique jamais reçue ; « Du travertin,
   pas un placage » ; 7 « laiton » ; « soie » ; « verre soufflé » ; « chanvre tressé à la main » ;
   collection « Osier » ne contenant que du rotin ; « Plafonniers LED » contenant deux E27 sans
   ampoule, avec « La LED est intégrée » dans sa description.
3. **Les garanties.** Trois icônes `verified` sous « Ce qu'on regarde avant de mettre une pièce en
   ligne » ; « la texture que vous voyez en photo est celle qui jouera chez vous » sous des rendus
   générés ; « Pas de vocabulaire flou » ; « Du bambou tressé, celui des photos ».
4. **Le jargon.** « Certaines photos fournisseur portent le mot waterproof », « l'attribut
   fournisseur dit… », « le fournisseur la montre au-dessus d'un lavabo ».
5. **Les collections.** 4 collections publiées **vides** (pampilles, statement, modernes, papier)
   décrivant des modèles en brouillon ; XXL à 1 fiche décrite comme une gamme, avec l'ancien délai
   « 6 à 15 / 7 à 17 » ; Salon, Chambre, Plafonniers cuisine décrivant des modèles non publiés.
6. **Les détails.** Policy Coordonnées à 9 h au lieu de 10 h, `mailto:contact@ohventures.fr` caché,
   « Maestro » listé sans picto, procédure « défectueux » contradictoire entre FAQ et politique.
7. **Le prix.** Coefficient médian ×4,7 sur le coût AliExpress, max ×10,3 ; 20 fiches sur 51 à
   199 € pile. Pas une infraction en soi, mais ce qui rend le reste visible à une recherche d'image.

## Ce qui a été corrigé par l'API (17/09)

- 30 titres, 11 descriptions, **95 métachamps**, 6 libellés de variantes (SKU DSers intacts).
- Les 51 FAQ fiches disent l'origine (« expédiée depuis l'entrepôt de notre fabricant partenaire,
  en Chine ») et la destination des retours (« une adresse en France »).
- Pages Notre histoire, FAQ, Paiement réécrites.
- Collection « Pierre » → « Effet pierre » (nom, description, SEO, menu) ; deux E27 sortis de
  « Plafonniers LED » ; « Osier » retiré du menu ; 15 descriptions de collection réécrites sur le
  catalogue public.

## Le trou de la passe du 17/09 : les titres SEO

Les 3 actions faites, le scan est retombé à 0 bloquant. En rescannant les **fiches rendues** plutôt
que les champs de l'API, 32 alertes sont apparues : **les titres SEO et les méta descriptions
n'avaient pas suivi les titres produit.** 20 disaient encore « travertin », « laiton », « soie »,
« osier » ; 5 collections aussi, dont « Applique murale **pierre, travertin** et verre » ; et trois
méta descriptions annonçaient « LED intégrée, aucune ampoule à prévoir » là où la fiche disait
« l'ampoule est fournie, une LED 4 W sur douille E27 ».

C'est la balise `<title>` de l'onglet et le résultat Google. Corrigé le jour même : 30 fiches et
5 collections. Le scanner charge maintenant chaque page publiée pour lire son `<title>` et sa méta
description — **`products.json` ne les montre pas**, et c'est ce qui a permis au trou de passer deux
audits. Voir la section « Le titre SEO est un second titre » du lexique.

## Ce que le connecteur refuse — à faire par Hakim

- **Politiques** (`write_legal_policies` absent) : textes prêts dans
  `…/shopify/politiques-2026-09-17/`.
- **Thème publié** (écriture bloquée sur MAIN) : copie `LM Véracité 2026-09-17` prête, à publier.
- **Dépublication** de collections (bloquée) : pampilles, statement, modernes, papier, XXL, osier.

## Recette technique retenue

- `themeFilesUpsert` accepte `body: {type: URL}` pointant sur le `resourceUrl` d'un
  `stagedUploadsCreate` (resource `FILE`, `text/plain`, `PUT`) : on pousse un template de 75 Ko sans
  le recopier dans l'appel. Tâche asynchrone : vérifier `job.done` puis relire le fichier.
- `themeDuplicate` est autorisé : c'est la voie pour préparer une version corrigée du thème publié.
- Aperçu vérifiable en visiteur : `https://domaine/?preview_theme_id=<id>` avec un pot à cookies.
