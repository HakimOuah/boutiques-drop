# Synchronisation Hermes

Sources : `.claude/skills/` et `.claude/agents/`. Les versions installées dans les neuf profils OH sont générées ; ne pas les éditer à la main.

```bash
python3 scripts/porter-skills-hermes.py --tous --roles --all-profiles
python3 scripts/porter-skills-hermes.py --tous --roles --all-profiles --check
```

`--check` ne modifie aucun fichier, retourne 1 en cas d'écart et 2 en cas d'erreur. Le script vérifie tous les profils avant l'écriture, conserve les fichiers non gérés et refuse d'écraser une copie générée modifiée depuis son dernier manifeste. Résoudre cette divergence à la source avant de relancer. Pour une première migration, sauvegarder les répertoires installés avant génération.

`--profiles-root` permet une validation isolée ; les neuf dossiers de profils doivent exister. `--runtime-root` désigne le hub d'exécution ; par défaut il est résolu depuis le Git commun, même dans un worktree. Les identifiants, modèles et processus Hermes ne sont pas modifiés. Les Skills et rôles ne chargent que les outils/identifiants nécessaires, pas tous les secrets du parc.

Les modèles réellement configurés se vérifient dans le profil concerné lorsqu'une mission en dépend ; une ancienne note sur leur répartition n'est pas une configuration actuelle.
