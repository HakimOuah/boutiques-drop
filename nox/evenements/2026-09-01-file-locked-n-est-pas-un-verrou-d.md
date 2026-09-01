---
type: evenement-nox
date: 2026-09-01
categorie: methode
titre: "FILE_LOCKED n'est pas un verrou d'API : l'admin tape la meme file"
projet: maison-noirmont
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: cursor
statut_editorial: brut
commit: 90e38a4
---
# FILE_LOCKED n'est pas un verrou d'API : l'admin tape la meme file

## Ce qui a changé

On sait maintenant que `FILE_LOCKED` (« opération en attente ») survit à l'admin Shopify
et à `fileAcknowledgeUpdateFailed`. La REST produit peut changer un `alt` pendant ce
temps ; le nom de fichier CDN, lui, reste coincé.

## Pourquoi c'est notable

Après un ban GMC « déclarations trompeuses », le mot interdit dans une URL d'image
compte autant que dans un titre. Si le premier `fileUpdate` groupé rate, dix fichiers
`READY` peuvent rester innommables pendant des heures, et aucun bouton de l'admin
n'y change rien. Savoir ça évite de brûler une soirée à cliquer « Enregistrer »
en croyant contourner l'API.

## Le détail qui fait le contenu

Le brief du 01/09 disait : si l'API bloque, passer par Contenu → Fichiers, « l'interface
admin emprunte un autre chemin ». Faux. L'éditeur envoie `FileUpdateNext` — même
mutation, même message, HTTP 200 avec `code: FILE_LOCKED`. `fileAcknowledgeUpdateFailed`
répond sans erreur, remet `fileStatus: READY`, et le fichier est toujours verrouillé.
Shopify Support, sur le même code, n'a pas d'UI ni d'API publique pour lister ou
annuler l'opération en attente.

La voie qui passe : `PUT /products/{id}/images/{id}.json` avec le nouvel `alt`.
Les dix « Classique jubilé » sont devenus « Classique cinq rangs » ; trois vues
de face `c-690002-*` disaient encore « bracelet jubilé » — hors brief, trouvées
au grep de vérif. Côté `products.json` : 18 `jubil` restants, tous dans des noms
de fichiers. Sur les trois PDP, 0 alt rendu avec le mot, mais 98 / 78 / 60 hits
dans le JSON du thème, uniquement des URL. Tant que le filename ne change pas,
le crawler voit encore Jubilee.

Le geste à ne pas faire pour « aller plus vite » : `fileDelete` ou réimporter.
Les IDs et les rattachements doivent rester. Un fichier à la fois, quand le verrou
lâche tout seul.

## Ce qu'on ne peut pas encore dire

On ne sait pas combien de temps Shopify garde le verrou — la communauté parle
d'heures, parfois plus. On ne sait pas non plus si un ticket Support le lève
sans supprimer le fichier. Le compteur 7–10 jours avant réexamen GMC redémarrera
au prochain rename crawlable.
