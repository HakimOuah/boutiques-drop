# NOX — journal éditorial des projets

**Décision Hakim, 30/08/2026.** NOX est le compte X consacré à l'intersection
**AI Agents × Automatisation × E-commerce**. Pour qu'il puisse parler de ce qui se
passe réellement ici, il faut que ce qui se passe soit *écrit au moment où ça se passe*.

Ce dossier est la seule source de vérité de cette règle. Les `CLAUDE.md` et `AGENTS.md`
des quatre repos n'en portent qu'un pointeur de trois lignes — la règle ne se recopie pas.

## La règle

**Après chaque étape significative d'un projet, l'agent qui l'a réalisée écrit un
événement éditorial avant de rendre la main.** Au même moment que le commit, pas plus tard.

Un événement n'est pas un compte rendu. `journal/`, `TABLEAU.md`, `CHANGELOG.md` et
`OPERATIONS_LOG.md` gardent exactement leur rôle actuel : **rien n'est remplacé, rien
n'est déplacé**. Un événement NOX est la couche au-dessus : *ce qui, dans ce qui vient
d'être fait, mérite d'être raconté à quelqu'un qui ne travaille pas ici.*

## Le test de significativité

Deux questions, dans cet ordre. Les deux doivent être « oui ».

1. **Est-ce que le système sait faire quelque chose qu'il ne savait pas faire avant —
   ou est-ce qu'on sait quelque chose qu'on ignorait ?**
2. **Est-ce que je peux en tirer trois phrases qui tiennent debout sans montrer le diff ?**

Si la seule façon d'en parler est de décrire le changement de code, ce n'est pas un
événement. C'est un commit, et le commit suffit.

### À enregistrer

| Catégorie | Ce que ça couvre |
|---|---|
| `projet` | création d'un projet, d'un repo, d'un chantier structurant |
| `boutique` | nouvelle boutique, mise en ligne, changement d'axe |
| `agent` | nouvel agent, nouveau skill, nouveau rôle dans l'orchestration |
| `automatisation` | nouvelle boucle qui tourne sans intervention humaine |
| `integration` | nouveau système branché sur un autre (Obsidian, Notion, Shopify, n8n…) |
| `api` | nouvelle API consommée ou exposée, migration de fournisseur |
| `methode` | règle de méthode nouvelle ou invalidée, piège découvert |
| `resultat` | premier chiffre réel : vente, campagne, refus GMC, échec instructif |

### À ne pas enregistrer

Correction de typo · refactor trivial · changement cosmétique · opération Git sans intérêt
(merge, rebase, `.gitignore`) · changement technique sans conséquence · relance d'un script
existant · mise à jour de mémoire ou de registre qui n'apprend rien de neuf.

**En cas de doute, ne pas écrire.** Un journal éditorial se meurt du bruit, pas du silence.
Dix événements vrais sur un mois valent mieux que cent lignes de diff reformulées.

## Où

**Un seul endroit, quel que soit le repo dans lequel on travaille :**

```
~/Documents/Boutiques drop/nox/evenements/AAAA-MM-JJ-slug.md
```

Un événement issu d'un travail dans `boutique-pipeline/` ou `drop-elite-google-os/`
s'écrit **quand même ici**, dans le repo `boutiques-drop`, et se commit ici. C'est
volontaire : NOX lit un répertoire, pas cinq. Le champ `repo:` garde la trace de l'origine.

## Comment

```bash
python3 "$HOME/Documents/Boutiques drop/scripts/nox-evenement.py" \
  --categorie automatisation \
  --titre "Journal éditorial NOX branché sur les quatre repos" \
  --projet nox --repo boutiques-drop --axes agents,automatisation
```

Le script crée la note, valide les champs et affiche le chemin. **Il faut ensuite ouvrir
le fichier et remplir le corps** — le frontmatter seul ne sert à rien.

Pas de Python sous la main : copier `_templates/evenement.md`, le nommer à la date du jour.
Le script ne fait que garantir le schéma, il n'est pas une dépendance.

Vérifier tout le corpus : `python3 scripts/nox-evenement.py --valider`

## Le schéma

```yaml
---
type: evenement-nox
date: 2026-08-30            # date du fait, pas de l'écriture
categorie: automatisation   # une des huit ci-dessus
titre: "..."                # phrase nominale, lisible seule dans une liste
projet: nox                 # slug court et stable : nox, tufting, bonum-vitae, hermes, pipeline
repo: boutiques-drop        # boutiques-drop | boutique-pipeline | dropshipping-product-factory
                            # | drop-elite-google-os | hermes-orchestration | aucun
axes: [agents, automatisation]   # au moins un : agents, automatisation, ecommerce
agent: claude-code          # qui écrit : claude-code, codex, cursor, hakim, hermes
statut_editorial: brut      # brut | retenu | publie | ecarte — seul Hakim fait bouger ce champ
commit:                     # sha court, si applicable
---
```

**Aucun agent ne passe un événement en `retenu` ou `publie`.** Un agent écrit `brut`
et s'arrête là. Le tri éditorial est une décision humaine, comme la promotion d'une règle
en `validee` dans `instrumentation/regles/`.

## La règle qui compte plus que le schéma

Le frontmatter est reconstituable : une date, une catégorie, un repo se retrouvent dans Git.
**Une seule section ne se retrouve nulle part : « Le détail qui fait le contenu ».**

C'est ce qui a surpris, ce qui a cassé, le chiffre exact, l'erreur qu'on a faite avant de
trouver. C'est le seul contenu qui distingue un post NOX d'un changelog, et c'est ce qui
s'efface le plus vite — trois jours plus tard, on se souvient que ça a marché, plus de
pourquoi ça ne marchait pas.

Même logique que `signaux_ecartes` dans `instrumentation/croyances/` : le champ le plus
périssable est le seul qui a de la valeur plus tard.

## Lecture

Obsidian, vue `nox/vues/evenements.base` — le vault est la racine du hub, il n'y a rien
à exporter ni à synchroniser.

## Voisinage

| Ce dossier | `boutique-pipeline/instrumentation/` |
|---|---|
| pourquoi c'est **racontable** | pourquoi ça a **marché ou non** |
| tous projets, y compris hors boutique | boutiques uniquement |
| alimente NOX | alimente les post-mortems et les règles |

Les deux se citent : un événement NOX peut lier `[[tufting-2026-W35]]`, une mesure peut
lier un événement. Aucun des deux ne remplace l'autre.
