# Rapport — onglet « Style biker » (Google Sheet Niches SMP)

## Ce qui a été fait

1. **Sources introuvables sur la branche courante** (`agents/rasoir-economie-2026-09-04`) : les fichiers `analyses/2026-09-14-pistes-ads-120j/equipement-biker.md` et `README.md` n'existent que sur la branche `agents/trendtrack-ads-120j-2026-09-14` (commit `50edd81`). Lus directement via `git show 50edd81:<chemin>` sans changer de branche ni rien committer.
2. **Correction d'un point de blocage sur le pont Sheets** : le nom réel de l'onglet index n'est pas « 📇 Index » (mémoire obsolète) mais **« 🗂 Index »** (U+1F5C2, card index dividers) — l'ancien nom faisait planter le script Apps Script (`getSheetByName` renvoyait `null`) et produisait une page d'erreur Google au lieu de JSON. À corriger dans la note mémoire `google-sheet-niches-smp.md`.
3. Vérifié que l'onglet « Style biker » n'existait pas (`read A1` → réponse non JSON), puis dupliqué `🧩 MODÈLE` → **« Style biker »**.
4. Rempli l'en-tête : B2 « Style biker », C3 « UNIVERS », F3 « Volumes à mesurer (SEMrush/OCB) — sourcing en attente », C4 « FR », F4 « 2026-09-14 », C5 (note de périmètre + exclusions + preuve). Ligne 6 non touchée (formules auto : Seuil=30 000 en mode UNIVERS).
5. Récupéré le catalogue complet via `products.json?limit=250` (10 pages, 2 462 produits confirmés) et isolé les **1 614 produits du vendor générique « Boutique biker »** (marques exclues : NOX, RUSTY STITCHES, Furygan, Simpson, Stylmartin, etc.).
6. Construit l'arborescence A8:K89 (82 lignes : 1 tête + 10 collections + 71 produits), colonnes E-H laissées intactes (formules héritées / sourcing vague 2), I = prix cible (≈10 % sous le prix boutique-biker.com, arrondi X,90), J = formule `=IF(AND(Hn<>"";In<>"");In-Hn;"")` sur chaque ligne, K = requête AliExpress anglaise + prix comparable + avertissement EPI où pertinent.
7. Écrit la ligne 24 de l'onglet **🗂 Index** avec les formules `INDIRECT` demandées, et relu : `A24="Style biker"`, mode UNIVERS, FR, statut, Seuil 30 000, **Collections = 10, Produits = 71**.

Colonne D vide partout (aucun volume mesuré, DataForSEO hors service) → total retenu = 0 en ligne 6, comme prévu par la mission.

## Collections et fourchettes de prix cible (I)

| Collection | Produits | Prix cible (I) |
|---|---|---|
| Vestes et blousons cuir style biker | 8 | 61,90 – 196,90 € |
| Gilets biker cuir | 6 | 34,90 – 88,90 € |
| Bottes et baskets style biker | 7 | 61,90 – 129,90 € |
| Sacoches de selle et sacoches latérales | 6 | 34,90 – 106,90 € |
| Sacoches de jambe et de fourche | 6 | 23,90 – 34,90 € |
| Sacoches de réservoir et sacs à dos moto | 7 | 39,90 – 113,90 € (dont 1 top case en SKU secondaire) |
| Bagues, bracelets et colliers biker | 8 | 18,90 – 25,90 € |
| Chaînes de portefeuille et maroquinerie | 7 | 16,90 – 30,90 € |
| Textile biker (t-shirts, tours de cou, casquettes) | 8 | 18,90 – 25,90 € |
| Déco biker (patchs, porte-clés, garage) | 8 | 12,90 – 43,90 € |
| **Total** | **71 produits / 10 collections** | **12,90 – 196,90 €** |

Chaque prix cible est calculé ~10 % sous le prix affiché par boutique-biker.com pour le produit équivalent (source citée en colonne K de chaque ligne). Casques et gants **absents de l'arborescence** (bloqués réglementairement) ; les collections vestes/gilets/bottes portent un avertissement « ⚠ ne pas revendiquer de protection EPI ».

## Mots-clés à faire mesurer par Hakim (SEMrush/OCB, colonne D vide)

Les 25 mots-clés du rapport source, déjà posés en colonne C partout où ils s'appliquent dans l'arborescence :

1. veste biker cuir homme
2. veste biker femme cuir
3. blouson biker vintage
4. blouson cuir motard homme
5. veste perfecto cuir véritable
6. bottes biker cuir homme
7. bottes moto style vintage
8. baskets biker cuir
9. sacoche de selle moto
10. sacoche de jambe moto
11. sacoche de réservoir moto
12. sac à dos moto cuir
13. guardian bell moto
14. cloche porte-bonheur moto
15. bijoux biker acier
16. bague biker homme
17. bracelet cuir biker
18. patch brodé motard
19. tour de cou moto
20. cagoule moto hiver
21. gilet biker cuir
22. casquette moto vintage
23. ceinture biker cuir
24. porte-clés biker
25. décoration biker garage

(Casque moto homologué / gants moto homologués volontairement exclus de la mesure — famille bloquée, cf. rapport §3.)

## Points d'attention pour Hakim

- Le sourcing (G/H) est entièrement vide : vague 2.
- Le prix cible est indicatif (comparable = boutique-biker.com lui-même, seul concurrent FR significatif identifié) ; à recroiser avec les comparables Shopping du 14/09 (vestes 90-200 €, bottes 120-260 € chez les spécialistes) une fois les volumes mesurés.
- Top case (ligne « Sacoches de réservoir et sacs à dos moto ») porte une note : déjà en STOP comme produit isolé dans un lot antérieur — à garder en SKU secondaire seulement.
- La note mémoire `google-sheet-niches-smp.md` contient une coquille sur le nom de l'onglet Index (📇 au lieu de 🗂) : à corriger pour éviter de reproduire l'échec de lecture rencontré ici.
