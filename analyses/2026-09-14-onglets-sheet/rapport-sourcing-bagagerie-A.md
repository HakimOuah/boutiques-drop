# Rapport de sourcing — Bagagerie moto, lot A (14/09/2026)

## Périmètre
8 collections : Sacoches de réservoir, Sacoches de selle et arrière, Sacoches latérales et cavalières, Sacoches de jambe et de cuisse, Sacoches de guidon/fourche/outils, Sacoches de crash bar, Sacoches moto vintage et cuir, Porte-bagages/supports/sangles.

31 lignes « À SOURCER » dans ce périmètre + 1 réserve de marge (Sacoche réservoir moto - GripBag, row_index 2).

## Résultat
- **29 lignes liées** sur 31 (+ 1 fiche de remplacement pour la réserve de marge GripBag) = **30 fiches LIE** au total.
- **2 lignes laissées « À SOURCER »** :
  - row_index 8 (Sacoche réservoir fixation bouchon) : aucune fiche à bague de bouchon (quick-lock ring) trouvée, ni dans les candidats pré-collectés ni en recherche live ; seuls des systèmes de bague OEM par modèle existent chez lepratique-du-motard.fr (pas une sacoche complète).
  - row_index 37 (Sacoche de fourche - Tête de mort) : seul candidat au design crâne trouvé mentionne « Harley Chopper Bobber » dans le titre → marque déposée exclue. Confirme le constat déjà noté par l'agent précédent.
- **Entrepôts UE : 0 %.** Toutes les fiches retenues expédient de Chine continentale (CN) ; aucun candidat en entrepôt UE/FR n'est apparu dans les requêtes disponibles pour ce lot.
- **Coût médian : 31,59 €** — **Prix cible médian : 76,90 €**.
- **11 produits sous le plancher de 50 €** (petits accessoires : jambe/cuisse ×3, banane, fourche vintage, sacoche cuir vintage 39,90€→37,90€, petite sacoche vintage, support bracket, sangle, filet, porte-bagage universel — rows 30, 31, 32, 33, 35, 90, 93, 96, 100, 95, 101). Ce sont des catégories d'accessoires low-ticket par nature (sangles, filets, petites sacoches de jambe) ; le comparable indépendant lui-même se situe souvent sous 50 € pour ces gammes.
- **5 produits en marge faible (< 15 €)** : rows 35 (fourche vintage, 4,11 €), 90 (cuir vintage moto, 11,52 €), 93 (petite sacoche vintage, 14,12 €), 100 (sangle, 9,82 €), 101 (filet, 6,62 €) — comparables indépendants eux-mêmes bas sur ces gammes, ou aucun comparable disponible malgré un coût déjà réduit.
- 1 délai anormalement long signalé : row 28 (sacoche rigide, 22–27 j) — seule fiche « rigide » universelle sans marque trouvée, stock 2 seulement.

## Réserve de marge — GripBag
Remplacement trouvé : sac réservoir magnétique universel (pid 1005008160351584, boutique GP Motor Knight, ★4.7), coût rendu 28,78 € pour le même prix cible 52,90 € → **marge 24,12 €** (contre 2,3 % avant). `row_index: 2`, `remplace: true`. Variante Gris ajoutée en variante supplémentaire (coût 29,18 €).

## Méthode
- Sélection à partir de `candidates/bagagerie.json` (25 requêtes déjà couvertes), 5 recherches live sur les 6 autorisées (tank bag cuir vintage, bague quick-release, porte-bagage arrière, plaque top case, + 1 non concluante sur la bague de bouchon).
- Chaque fiche vérifiée via `variants()` + `exact()` (livraison France, stock, prix rendu réel).
- Comparables cherchés sur `boutique-biker.com` (catalogue complet, 3212 produits sur 10 pages) et `lepratique-du-motard.fr` — le premier s'est révélé être la source principale de comparables pertinents (nombreux titres quasi identiques : « Sacoche de jambe moto - Vintage », « Sacoche de fourche moto - Custom », « Sacoche réservoir moto - GripBag/RoadTank », etc.).
- Aucun pid réutilisé (vérifié contre les 12 pids déjà liés dans `bagagerie_rows.json` et entre les fiches de ce lot).
- Marques exclues respectées (Harley, BMW, KTM, Shad, CFMoto, etc. écartées des titres candidats).
