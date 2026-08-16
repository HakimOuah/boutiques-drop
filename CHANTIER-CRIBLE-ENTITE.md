# Chantier — crible des boutiques sœurs de l'entité

**Ouvert le 17/08/2026.** Chantier séparé, décidé par Hakim. Il ne porte pas sur Tuftéo, mais il
conditionne la sécurité de son compte Merchant Center.

---

## Pourquoi ce chantier existe

Les quatre boutiques du parc publient **la même adresse et le même téléphone** — 47 rue Vivienne,
75002 Paris et le `+33 7 56 82 80 94`. Ce n'est pas une négligence : c'est le siège social de la
SASU OH Ventures, que le droit français impose de publier. Hakim a **assumé le linkage** le
16/08/2026 (voir `PASSATION.md`, question n° 0).

La conséquence est mécanique : **Google rapproche ces signaux, et une misrepresentation sur une
boutique dégrade l'entité entière.** Le précédent est documenté — le compte GMC **5806019978** a été
suspendu le 15/06/2026 pour misrepresentation, et c'est **l'entité OH Ventures** qui a été blanchie
après correction, pas seulement la boutique.

Tuftéo a aujourd'hui un compte Merchant Center **approuvé, avec 173 produits**. C'est un actif. Un
déclencheur encore public sur une boutique sœur le met en risque sans que Tuftéo n'ait rien fait de
mal.

---

## Le principe : dépistage, pas remise à neuf

**On corrige les déclencheurs connus, on ne restaure pas ces boutiques à la perfection.** Sinon le
crible devient le nouveau chemin critique et Tuftéo attend encore. Ce sont des boutiques qu'on ne
relance pas — l'objectif est qu'elles cessent de nuire, pas qu'elles redeviennent exemplaires.

---

## Les déclencheurs à chercher

Ceux qui ont réellement causé la suspension de juin, plus ceux de la checklist :

1. **Faux avis, fausses notes, faux compteurs** — c'est le motif exact de juin : trois faux widgets
   « 4,5★ / 123 avis » et de faux témoignages (Camille, Thomas, Sophie).
2. **Images à filigrane ou marque tierce** — un « Boundless Voyage » avait été trouvé sur Bien Brûlé.
3. **Prix barrés jamais pratiqués** — loi Omnibus. Lihyl affiche 599 € barré 799 €, avec un 799 qui
   n'a jamais été pratiqué.
4. **Fausse urgence** : compte à rebours, « plus que X en stock », offre limitée sans date réelle.
5. **Allégations de santé ou de résultat.**
6. **Policies identiques mot pour mot** entre deux boutiques du parc — Google détecte la duplication
   entre domaines, et c'est le levier de séparation qui nous reste puisque l'adresse est commune.
7. **404 non redirigées, pages légales vides ou cachées.**

---

## Les trois boutiques

| Boutique | État | Ce qu'on sait déjà |
|---|---|---|
| **Bien Brûlé** | à cribler | C'est elle qui portait le compte suspendu en juin. Corrections faites à l'époque (faux widgets retirés, produits à filigrane passés en DRAFT, page Contact remplie). **À revérifier sur le site public** : les corrections de juin peuvent avoir été perdues, et deux thèmes coexistent avec **deux numéros de téléphone différents** (`+33 6 77 70 08 10` et `+33756828094`) |
| **Bonum Vitae** | à cribler | Jamais auditée. Footer connu : `+33 7 56 82 80 94`, `contact@bonumvitae.fr`, 47 rue Vivienne |
| **Lihyl** | à cribler | **599 € barré 799 €, le 799 n'a jamais été pratiqué** — risque assumé à l'époque, mais il change de nature avec le linkage. Faux avis également présents à l'origine |

---

## Une question à trancher sur Lihyl

Décision de Hakim : **on ne relance pas Lihyl** (niche brûlée — des dropshippers avaient arnaqué des
clients français sur le reformer pilates, la confiance marché est morte).

Mais **« ne pas relancer » n'est pas « hors ligne »**. Si la boutique est encore servie publiquement,
son prix barré fantôme et ses éventuels faux avis restent des signaux actifs sur l'entité, même sans
un euro de publicité derrière.

Trois issues, par coût croissant :

1. **Mettre la boutique sous mot de passe** (Boutique en ligne → Préférences). Instantané, réversible,
   supprime tout signal public. **C'est l'option recommandée** puisqu'on ne la relance pas.
2. Retirer les seuls déclencheurs — prix barrés, faux avis — et laisser le site en ligne.
3. Fermer la boutique. Irréversible, à ne pas faire sans raison comptable.

---

## Ce que ce chantier bloque, et ce qu'il ne bloque pas

**Il ne bloque pas** le travail sur Tuftéo : T-01 (publier le thème et retirer les faux avis) et les
autres tickets avancent en parallèle. Retirer une misrepresentation active n'attend rien.

**Il bloque** la montée en budget publicitaire sur Tuftéo, et la mise en production de Maison
Noirmont. Tant qu'un déclencheur connu est public sur une boutique sœur, augmenter l'exposition de
l'entité revient à parier sur le fait que Google ne regarde pas.

---

## Exécution

Ce crible est le premier travail réel du bot **AUDIT PUBLIC** (voir `GROK-BOT-FLEET.md`) : il se fait
en visiteur anonyme, sans aucun login, donc sans exposer le moindre compte de boutique sur une
machine partagée. À défaut, il se fait à la main — c'est une demi-journée pour trois boutiques.

**Livrable attendu** : un tableau par boutique — déclencheur cherché, trouvé ou non, URL, citation
exacte, capture — et une décision par ligne : corriger, laisser, ou mettre hors ligne.
