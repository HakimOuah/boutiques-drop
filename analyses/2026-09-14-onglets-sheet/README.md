# Remplissage du Sheet Niches SMP — 14/09/2026

Six onglets construits ou complétés par des sous-agents (Sonnet), orchestrés en deux vagues. **Vague 1** :
un éclaireur Chrome (904 candidats AliExpress, 45 requêtes) et trois agents d'arborescence. **Vague 2** :
cinq agents de sourcing (API Dropshipper `variants`/`exact`), puis un vérificateur Chrome des pages
publiques. Contrôle orchestrateur : dédoublonnage des volumes, retrait des lignes non rentables et des
fiches non conformes.

Volumes : **aucune nouvelle mesure** (DataForSEO à −0,09 $, OCB non connecté dans l'onglet de l'agent).
Tous les volumes viennent des dossiers existants (28/08 rideaux, 08/08 puzzle, 02/08 paravent, 03/09 poufs,
15/08 globe) ; Style biker n'a aucun volume.

## Bilan par onglet (état final du Sheet)

| Onglet | Volume (C6) | Collections | Lignes produit | Liées | Fiches | UE | Coût méd. | Cible méd. | Marge méd. | À sourcer |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Rideaux occultants | 90 000 | 6 | 78 | 78 | 42 | 0 | 24,19 € | 89,90 € | 43,21 € | 0 |
| Puzzle 3D bois | 68 450 | 9 | 96 | 96 | 92 | 0 | 10,48 € | 29,90 € | 19,06 € | 0 |
| Paravent | 52 070 | 7 | 30 | 30 | 24 | **30** | 86,99 € | 165,90 € | 76,21 € | 0 |
| Poufs | 46 830 | 9 | 74 | 62 | 25 | 9 | 58,84 € | 99,90 € | 37,62 € | 12 |
| Globe et cartographie | 54 210 | 2 | 66 | 52 | 29 | 3 | 15,59 € | 34,90 € | 21,72 € | 14 |
| Style biker | **non mesuré** | 10 | 106 | 63 | 25 | 3 | 37,35 € | 79,90 € | 36,92 € | 43 |

Vérification Chrome des pages publiques : **247 fiches ouvertes, 247 en ligne, 0 introuvable** (116 en vague 1,
131 en vague 2).

## Corrections de l'orchestrateur

1. **Volumes comptés deux fois** par les agents d'arborescence (totaux de famille recopiés comme mots-clés) :
   Rideaux 108 100 → 90 000 (pluriel de la tête) ; Puzzle 86 800 → 68 450 (générique « puzzle bois » 16 000
   rattaché aux animaux, sous-catégorie casse-têtes additionnée) ; Globe 187 310 → 54 210 (tête et collections
   = totaux de famille) ; Paravent 61 070 → 52 070 (variantes d'accent additionnées) ; Poufs 73 855 → 46 830
   (collections recomptant la tête ou leurs produits, canapé pouf à 50 % pertinent). Chaque correction est
   notée en colonne K.
2. **Lignes non rentables retirées** (coût livré supérieur au prix cible posé sous le comparable) : Style biker
   9 lignes (gilet « Américain », botte « Crew », sacoche de jambe « Freaty » et variantes) ; Poufs 5
   variantes supprimées et 3 lignes à mot-clé remises « à sourcer » (pouf compact, pouf géant XXL, fauteuil
   poire velours).
3. **Fiches non conformes au contrôle Chrome** : la « housse de pouf poire » était une housse de canapé
   (retirée) ; la « ceinture biker cuir » était une chaîne de sac à main (retirée avec 2 variantes).

## Réserves par niche

- **Rideaux** : 100 % Chine, délais de 7 à 37 j ; tailles non standardisées ; drapeau enseignes non arbitré.
- **Puzzle 3D** : panier médian 29,90 €, **sous le plancher de 50 €**, loin des 69,90 € du dossier d'août ;
  monuments minces (14 lignes, 6 fiches nouvelles) ; 8 conditions du GO toujours ouvertes (prix, repack,
  EN71/CE, REP, TVA…).
- **Paravent** : reprise motivée du STOP du 02/08 sur un plancher de 50 € ; **volume adressable ≥ 50 € estimé
  à 32 000–50 000, non mesuré** ; toile imprimée et miroir sans fiche ; 4 fiches en stock 1 ; comparable
  rotin extrapolé.
- **Poufs** : dossier REVIEW (seule la lecture « boutique complète » passe) ; beaucoup de **housses sans
  garnissage** et de délais > 20 j sur le rempli ; SONGMICS marqué.
- **Globe** : panier médian 34,90 € sous le plancher ; globe bar confirmé non rentable (coût 143 €) ; la carte
  murale la mieux prouvée d'août ne livre plus la France (remplacée) ; 14 lignes à sourcer (français,
  relief, armillaire, jouets de marque).
- **Style biker** : **volumes à mesurer** (25 mots-clés en colonne C) ; casques, gants, allégations EPI et
  licences exclus ; 43 lignes à sourcer (textile, déco, bijoux hors bagues).

## Fichiers

`onglet-*.md` (construction), `sourcing-*.md` (vague 2), `verif-publique-vague*.json` (contrôle Chrome).
