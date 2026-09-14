# Rapport — onglet « Globe et cartographie » (Google Sheet Niches SMP)

**Tâche : vague 1 (arborescence + volumes, sans sourcing).** Onglet créé par duplication de `🧩 MODÈLE`, absent au préalable (vérifié par un `read` non-JSON sur A1 avant écriture). Aucun Chrome, aucun commit, aucun autre onglet touché.

## Ce qui a été écrit

- **En-tête** (`Globe et cartographie déco`, B2) : Mode `UNIVERS` (C3), Statut `Arborescence faite — sourcing en attente` (F3), Marché `FR` (C4), Date `2026-09-14` (F4), Notes de portée en C5 (sources, exclusions, réserves).
- **Arborescence A8:K72** (65 lignes) : 1 tête + **2 collections** + **62 lignes produit**. Niveau (A), arborescence graphique (B), mot-clé (C), volume (D), E–H laissés vides (sourcing = vague 2), prix cible en I sur les 4 produits chiffrés par le dossier, formule de marge en J (`=IF(AND(Hn<>"";In<>"");In-Hn;"")`), notes/sources en K.
- **Index, ligne 23** : `A23="Globe et cartographie"`, B–H en `INDIRECT` vers C3/C4/F3/C8/D8/K6/M6, I/J en `COUNTIF` sur Collection/Produit. Relu après écriture : `['Globe et cartographie','UNIVERS','FR','Arborescence faite — sourcing en attente','globe et cartographie déco',66550,30000,'PASS',2,62]` — cohérent.

## Collections (2)

| Collection | Volume (somme des familles vérifiées SERP) |
|---|---:|
| Globes terrestres et mappemondes | **39 760** |
| Cartes murales et planisphères déco | **26 790** |
| **Total tête (D8)** | **66 550** |

Le volume de chaque collection est la **somme des familles telles que vérifiées en SERP** dans `03-verification-serp.md` (§3), pas la somme des lignes produits qui suivent — ces dernières portent des volumes de mots-clés précis (souvent des sous-ensembles de la famille) et resommer les lignes produits sous-compterait la famille. Ce point est noté explicitement en K sur chaque ligne collection, en écho à la règle mémoire sur les volumes Google pré-agrégés (`migration-semrush-vers-dataforseo`).

**Sur `C6` (« Total retenu », ligne 6 non touchée) :** la formule du modèle additionne les D de tous les niveaux (tête + collections + produits) sans dédoublonner la hiérarchie, d'où **187 310** (66 550 + 66 550 + 54 210). Ce n'est pas le volume de l'univers — **le chiffre de référence reste D8 = 66 550**, identique au total vérifié du dossier du 15/08. `K6` (seuil) = 30 000, `M6` (verdict) = `PASS`.

## Lignes produit (62)

26 sous « Globes terrestres et mappemondes », 36 sous « Cartes murales et planisphères déco » — dans la fourchette visée de 50 à 80.

**Les 4 produits chiffrés par le dossier (prix cible en I) :**
- `globe terrestre` — 44,90 € (comparable univers-globe.com)
- `globe bar` — 199,00 € (comparable univers-globe.com / barsglobes-et-mappemondes.com) — **marqué en réserve en K : marge -9,9 %, ROAS break-even 10,1, ne tient pas**
- `carte du monde à gratter` — 19,90 € (comparable lemondeagratter.com)
- `carte du monde en bois murale` — 89,00 € (comparable woodwork08.com/creatifwood.com/68travel.fr)

**ID AliExpress repris du dossier (« AE connu » en K, pour la vague 2) :**
1005006987114384 · 1005005855031541 · 1005010155240772 · 1005005977787813 · 1005012370622195 · 1005012825681102 · 32877306422 · 1005012747055835 · 4001350010280 · 1005012822744899 · 33005856591 · 1005006527604495 · 1005010485103293 · 1005006560658164 · 1005010530325052

Chaque ligne produit porte une requête AliExpress anglaise suggérée en K (sauf les deux mots-clés « à gratter » où l'anglais `scratch map` est explicitement déconseillé — piège mesuré en 04-sourcing-economie.md : 20/20 résultats hors-sujet).

**Réserves reprises explicitement en K (à ne pas perdre en vague 2) :**
- `globe terrestre interactif`, `mappemonde interactive`, `globe terrestre enfant`, `mappemonde enfant`, `planisphère enfant` — segment jouet fermé par des marques (VTech, Clementoni, Ravensburger) + réglementation EN 71 / directive Jouets.
- `globe terrestre en français` — aucun globe francophone observé sur 58 fiches AliExpress ; condition du `GO_CONDITIONNEL` du dossier.
- `globe bar`, `globe bar vintage` — palier haut de l'univers, marge négative au prix cible, fournisseur `DTrade Store FR` à 0 vente/0 note.
- `carte du monde liège`, `carte du monde en liège`, `globe en liège`, `carte du monde en liège à épingler` — risque fournisseur unique (marque Aqumotic sur 5 références sur 7).
- `carte du monde en bois murale` (et variantes) — un seul AE à prix dropship (3 ventes), le reste du catalogue AE à 320-955 € sans vente ; woodwork08.com vend 199-989 € (fabrication française à la demande, pas du drop).
- `carte du monde murale` — cartes « terre plate » présentes au catalogue AliExpress (dont une à 114 ventes) : à exclure strictement du feed (conformité Google Merchant Center).
- `poster carte du monde` (et variante « en poster ») — porte `STOP_PRIX_PANIER` non franchie (médiane 17 €, 51 % des prix < 15 €, page 1 verrouillée par 6 marques) ; recommandation du dossier : format secondaire, pas de collection autonome — repris ici en ligne produit seulement.
- `mappemonde` (tête nue) et `carte mappemonde` — SERP à dominante encyclopédie/dictionnaire, gros retrait mesuré (mappemonde-objet 18 260 → 9 380 après SERP).
- `globe rotatif` — famille inexistante en demande FR (contredit le backlog catalogue MOVA) ; ne pas sourcer.
- 6 lignes non mesurées, ajoutées sur instruction de la mission et citées comme trous connus du dossier (`carte du monde en métal`, `carte du monde à épingles`, `carte du monde magnétique`, `carte de France murale`, `globe rotatif`/cinétique déjà couvert en STOP, `globe terre de nuit`) : D vide, à chiffrer en vague 2.

## Réserve d'économie du 15/08 à rappeler à Hakim

Le dossier source conclut `GO marché, SOURCING INSUFFISANT` (59 concepts observés contre 200 visés) et `GO_CONDITIONNEL` économique **sur le globe seul** (43 % du volume, marge 26,35 €/58,7 %, ROAS break-even 1,70, ratio prix/CPC 249 — seul dossier sain de bout en bout). Quatre conditions posées avant tout lancement, reprises en C5 et sur la ligne tête (K) : recentrer sur le globe, mesurer le fret/poids (aucun chiffre à ce jour, tout le chiffrage économique est fret à 0 €), résoudre la langue (aucun globe francophone sourcé), mesurer la saisonnalité Q4 (non mesurée, widget SEMrush vide sur deux rapports d'affilée). Les familles globe-bar et carte du monde en bois — les mieux notées côté demande Google — sont aussi les moins fournies côté AliExpress ; c'est le paradoxe central du dossier, à ne pas perdre en vague 2.

## Ce qui n'a pas été fait (hors mandat vague 1)

- Aucun sourcing (colonnes G/H vides partout).
- Aucun verdict produit par produit, aucune décision GO/STOP — seules les réserves déjà tranchées par le dossier du 15/08 sont reprises en notes.
- La réserve « planisphère » (46 000, sortie à ~80 % en SERP) reste hors total, comme dans le dossier source.
- La frontière U4b (carte du ciel, corps célestes) n'a pas été reprise dans cet onglet — elle appartient à un autre univers.
