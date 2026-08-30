---
type: evenement-nox
date: 2026-08-30
categorie: automatisation
titre: "Couche de journalisation éditoriale NOX sur les quatre repos"
projet: nox
repo: boutiques-drop
axes: [agents, automatisation]
agent: claude-code
statut_editorial: brut
commit:
---

# Couche de journalisation éditoriale NOX sur les quatre repos

## Ce qui a changé

Tout agent de développement — Claude Code, Codex, Cursor — écrit désormais un événement
structuré dans `nox/evenements/` après chaque étape significative, quel que soit le repo
dans lequel il travaille. Le compte X NOX lit un répertoire de notes datées au lieu de
reconstituer l'activité depuis l'historique Git.

## Pourquoi c'est notable

Le problème du contenu « build in public » n'est pas la rédaction, c'est la **captation** :
au moment de publier, on a oublié ce qu'on a fait il y a trois semaines, et `git log` ne
raconte rien — il liste des diffs. Le renversement consiste à faire écrire l'événement par
l'agent qui vient de le vivre, dans la même minute que le commit.

## Le détail qui fait le contenu

Le vrai obstacle n'était pas le schéma, c'était la **découvrabilité de la règle**. En
inspectant l'arborescence : quatre repos, des `CLAUDE.md` partout — et **aucun `AGENTS.md`
nulle part**. Codex et Cursor travaillaient depuis des mois sur ce projet sans lire une
seule règle de dépôt : elles étaient toutes écrites dans un fichier que seul Claude ouvre.

Le second piège évité : la tentation de recopier la règle dans les cinq fichiers
d'instructions. Une règle dupliquée en cinq exemplaires diverge en trois semaines et plus
personne ne sait laquelle fait foi. Un seul fichier porte la règle, les autres portent
trois lignes et un chemin.

Enfin, le champ que le schéma protège explicitement est cette section-ci. Un frontmatter se
reconstitue depuis Git — une date, une catégorie, un repo. Ce qui a surpris, non : ça
s'efface en trois jours. Le validateur refuse un événement dont cette section est vide,
alors qu'il accepte un `commit:` absent. Même logique que `signaux_ecartes` dans
`instrumentation/croyances/` : le champ le plus périssable est le seul qui vaudra quelque
chose dans six mois.

## Ce qu'on ne peut pas encore dire

Aucun événement n'a encore été produit par Codex ni par Cursor — la règle est posée, son
respect réel n'est pas observé. `hermes-orchestration` n'est pas cloné sur cette machine :
son pointeur reste à poser. Et le seuil de significativité ne se règle qu'à l'usage :
s'il produit du bruit, c'est le test à deux questions qu'il faudra durcir, pas le schéma.
