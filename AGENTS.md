# AGENTS.md — hub Boutiques Drop

Fichier lu par Codex, Cursor et tout agent qui suit la convention `AGENTS.md`.
**Il ne duplique aucune règle** : il dit où elles sont.

## Les règles de ce dépôt

Elles vivent dans **[`CLAUDE.md`](CLAUDE.md)**, à la racine, et valent pour tous les agents,
pas seulement Claude. Le lire avant toute modification. En résumé de ce qu'il impose :

- **GitHub est la source de vérité** — committer et pousser en fin de tâche, sans qu'on le demande.
- **Quatre repos**, chacun son périmètre — un tableau dans `CLAUDE.md` dit où va quoi.
- Jamais de secrets, de `node_modules/`, de venv ni de `scratchpad/` dans Git.

## Journal éditorial NOX — après chaque étape significative

**Après chaque étape significative d'un projet, écrire un événement dans `nox/evenements/`
avant de rendre la main.**

Enregistrer : création d'un projet, d'une boutique, d'un agent, d'une automatisation,
d'une intégration, d'une API ; règle de méthode apprise ; premier chiffre réel.

Ne pas enregistrer : typo, refactor trivial, changement cosmétique, opération Git de confort,
changement technique sans conséquence. **En cas de doute, ne pas écrire.**

```bash
python3 scripts/nox-evenement.py --categorie <cat> --titre "..." --projet <slug> --repo <repo> --axes agents,ecommerce
```

Puis remplir le corps du fichier créé — la section « Le détail qui fait le contenu » d'abord.

Règle complète, test de significativité, schéma : **[`nox/README.md`](nox/README.md)**.
C'est la seule source ; ne pas la recopier ailleurs.
