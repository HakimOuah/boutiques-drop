---
name: contradiction
description: Contrôler les preuves déterminantes d’un dossier avant une décision engageante ou sur demande de revue critique.
---

# Contradiction — faire tomber avant d'engager

Tu orchestres la démolition d'un travail déjà fait. Tu ne le refais pas, tu ne le réécris pas, tu ne
le défends pas. Tu organises sa mise à l'épreuve et tu rapportes ce qui reste debout.

## Pourquoi cette boucle existe

Constat mesuré le 31/08/2026 sur trois passages de la chaîne : **les verdicts tombaient juste, les
justifications ne tenaient pas.**

- un motif de verrou nommait trois domaines liés au même opérateur — **un seul se vérifiait** ;
- une piste adjacente annonçait 4 400 recherches/mois pour un mot-clé qui en vaut **480** ;
- un plancher de prix à 17,70 € dans une bande allant à 210 € — c'était **un accessoire, pas le
  produit**.

Aucune de ces trois erreurs n'était détectable en relisant le raisonnement : il était cohérent.
Elles n'apparaissent qu'en allant vérifier les sources une par une. C'est le travail des
démolisseurs.

## La règle qui fait toute la valeur

**Un démolisseur ne reçoit jamais le raisonnement, seulement les affirmations et leurs preuves.**

Un raisonnement bien construit persuade — c'est sa fonction. Donner sa synthèse à un critique, c'est
lui demander d'être d'accord. On donne les briques, pas l'édifice.

L'indépendance porte sur les preuves et le contexte. Un autre modèle est utile s'il est disponible et autorisé, mais son absence ne rend pas une vérification factuelle impossible. Ne pas modifier la configuration des modèles pour satisfaire cette préférence.

## Procédure

### 1. Extraire les affirmations

Découpe le travail à démolir en affirmations **atomiques et vérifiables**, chacune avec sa preuve
telle qu'elle a été fournie. Une affirmation sans preuve entre quand même dans la liste : son
absence de preuve est précisément ce qu'il faut faire constater.

Ne reformule pas, ne corrige pas, n'améliore pas. Tu transportes, tu ne répares pas.

### 2. Examiner les angles pertinents

Une revue ciblée peut couvrir les trois angles. Déléguer seulement si autorisé ; plusieurs critiques se justifient par des risques distincts, pas par chaque STOP exploratoire.

| Angle | Mission |
|---|---|
| **PREUVE** | Chaque affirmation a-t-elle une source réellement consultable, qui dit bien ce qu'on lui fait dire ? Ouvre les URL. Lis les mentions légales. Une source qui existe mais ne soutient pas l'affirmation est un échec, pas une réussite. |
| **CHIFFRE** | Chaque nombre est-il re-mesurable et exact ? Re-interroge les volumes (`scripts/verifier-volumes.py`), recompte les prix, vérifie les rapports. Traque le volume d'un parent attribué à une longue traîne, et le plancher non comparable. |
| **CONTRE-THÈSE** | Construis le meilleur dossier possible pour la conclusion **opposée**. Pas pour la caricaturer — pour la rendre défendable. Si tu n'y arrives pas, dis-le : c'est en soi un résultat. |

Une revue indépendante reçoit affirmations et preuves. Utiliser `contradiction.json` si le consommateur le requiert ; sinon un rapport précis suffit.

### 3. Arbitrer

Une affirmation n'est retenue que si **aucun** démolisseur ne la fait tomber. Le doute ne profite
pas au travail examiné.

Trois sorties possibles, et une seule est un succès :

- **tient** — aucune démolition n'a mordu ;
- **ne tient pas** — au moins un démolisseur produit une preuve contraire ;
- **invérifiable** — aucune preuve consultable, ni pour ni contre. **C'est un échec**, pas un
  match nul : une affirmation invérifiable ne peut fonder aucune décision.

### 4. Rendre

Le verdict d'origine survit-il quand on retire tout ce qui ne tient pas ? C'est la seule question.

Si le verdict change une fois les affirmations tombées retirées, **dis-le en tête de rapport**.
C'est le cas le plus important et le plus facile à noyer.

## Bornes

- **Un tour par défaut, deux au maximum.** Au-delà, les démolisseurs cessent de trouver des
  faiblesses et se mettent à en inventer — on remplace un excès de confiance par un excès de doute.
- **Tu ne répares pas ce qui tombe.** Tu signales. La réparation est un autre travail, confié à
  l'agent d'origine avec la liste des affirmations tombées.
- **Tu ne prononces aucun verdict métier.** Ni GO, ni STOP. Tu dis ce qui reste debout ; Hakim et
  l'orchestrateur décident de ce que ça vaut.
- **Compte le coût.** Trois démolisseurs sur un dossier chargé, c'est l'ordre de grandeur d'une
  mission complète. Ne lance la boucle que devant un engagement réel : dépense, publication,
  commande fournisseur, décision de lancement.

## Quand la lancer

Avant une décision réelle de lancement, publication, dépense ou commande, ainsi que pour une demande explicite ou un cas limite déterminant. Un STOP exploratoire étayé ne déclenche pas automatiquement la boucle.

**Pas** sur un travail exploratoire ni sur une mesure brute — démolir une liste de volumes ne sert à
rien, `verifier-volumes.py` le fait pour 0,09 $.
