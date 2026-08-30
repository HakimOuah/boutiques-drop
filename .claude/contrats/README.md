# Contrats de sortie

**Posés le 31/08/2026, après le premier test de la chaîne Hermes.**

Ces schémas JSON sont passés en `output_schema` à `delegate_task`. Hermes annonce le contrat à
l'enfant au départ, valide sa réponse finale à l'arrivée, et lui renvoie **une** relance bornée
portant les erreurs exactes. Un sous-agent qui ne peut pas remplir le contrat échoue bruyamment
au lieu de rendre de la prose plausible.

## Pourquoi ils existent

Le test du 31/08 sur la niche basse-cour a rendu le **bon verdict** (STOP) avec un motif central
partiellement inventé : trois domaines annoncés comme appartenant au même opérateur, **un seul
vérifiable**. Le verdict était juste, la justification ne l'était pas — et seul un contrôle manuel
l'a révélé.

Passée au contrat `cartographie-concurrence`, cette même sortie est rejetée sur quatre points :
les trois acteurs sans preuve, et le lien entre domaines sans mention légale. L'agent aurait dû
aller chercher les preuves, et aurait découvert de lui-même qu'il ne pouvait en produire qu'une.

## Le principe

**Une affirmation sans preuve attachée n'est pas une affirmation, c'est une hypothèse.**

Chaque bloc `preuve` exige trois choses : un `type` (url, mention_legale, citation, mesure,
capture), une `source` (URL complète, chemin, ou commande exacte) et un `extrait` recopié mot pour
mot. Le champ le plus surveillé est `liens_entre_acteurs` — affirmer que deux domaines
appartiennent au même opérateur est la chose la plus facile à inventer et la plus lourde de
conséquences.

## Les trois contrats

| Contrat | Rôle | Ce qu'il protège |
|---|---|---|
| `mesure-cluster.json` | `recherche-mots-cles` | le témoin avant/après (zéros silencieux), la base qui a produit chaque chiffre, `null` ≠ 0, le plancher de lecture |
| `cartographie-concurrence.json` | `cartographie-concurrence` | une preuve par acteur, une mention légale par lien entre domaines |
| `verdict-niche.json` | synthèse / `phase5-marge` | une preuve par motif, et des `contre_arguments` obligatoires même vides |

`non_fait` est requis partout, y compris vide : un agent qui n'a pas pu faire quelque chose doit
le dire, jamais dégrader en silence.

## Usage

```python
delegate_task(tasks=[{
    "goal": "...",
    "context": "...",
    "output_schema": <contenu de .claude/contrats/cartographie-concurrence.json>
}])
```

Garder les schémas **permissifs** : n'exiger que les champs qu'on lira réellement. Un contrat trop
strict se fait contourner par des valeurs vides, ce qui est pire qu'un contrat absent.
