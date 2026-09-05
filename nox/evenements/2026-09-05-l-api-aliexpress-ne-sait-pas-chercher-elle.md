---
type: evenement-nox
date: 2026-09-05
categorie: methode
titre: "L'API AliExpress ne sait pas chercher : elle vérifie, elle ne découvre pas"
projet: recherche-produit
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: claude-code
statut_editorial: brut
commit:
---
# L'API AliExpress ne sait pas chercher : elle vérifie, elle ne découvre pas

## Ce qui a changé

L'endpoint `aliexpress.ds.text.search` sort du poste de découverte du pipeline
produit : sur 15 familles mid-ticket instruites le 05/09/2026, il n'a rendu une
fiche exploitable que pour **une seule**. Il reste au poste de vérification, sur
`variants` et `exact`, à partir d'un `product_id` trouvé ailleurs.

## Pourquoi c'est notable

C'est le maillon sur lequel toute la chaîne se termine : sans coût livré, aucun
dossier ne devient un GO. Croire que cet endpoint sait chercher fait perdre une
passe entière — et fait surtout conclure « pas de fournisseur » là où le
fournisseur existe mais n'est pas sur AliExpress. Le corollaire est plus
important que le constat : **le catalogue dropshipping AliExpress ne couvre pas
le volumineux 80–500 €**, donc toute boutique mid-ticket a besoin d'une source
européenne, pas d'une meilleure requête.

## Le détail qui fait le contenu

Le moteur trie par popularité, jamais par pertinence, et ne comprend pas la
requête. En anglais et trié par ventes : `recovery boots` rend des **chaussures
de sécurité à embout acier**, `punching bag` des **sacs à dos de pêche à la
mouche**, `sunrise lamp` des **ampoules de phares LED H7**. En basculant sur
`price_desc` pour remonter le mid-ticket, il part à l'autre extrême et rend du
matériel industriel B2B : `shampouineuse` → extrudeuse à croquettes à 26 099 €,
`douche solaire` → conteneur congélateur solaire à 28 455 €, `sac de frappe` →
machine d'emballage à 18 731 €.

Le seul réglage qui a marché est **requête française courte + tri par ventes** —
parce que les titres sont renvoyés traduits en français. C'est ainsi que
« pressothérapie jambes » a sorti le JinKairui à 64,69 € livré France, 3 000+
ventes, note 4,5. Mais ça n'a fonctionné que sur 1 famille sur 15 : dès que
l'objet est volumineux (kamado, serre, poulailler, servante d'atelier, arbre à
chat, sauna), le catalogue est vide dans la bande 20–400 €.

Deux frottements du même jour, à consigner tant qu'on s'en souvient. L'API
**refuse l'IP du Mac** (`AppWhiteIpLimit`) : il faut passer par
`codex-chasse-clusters/tools/aliexpress_vps_gateway.py`, qui sort par le VPS
whitelisté — sinon on croit à une panne d'authentification. Et les endpoints
`live` de DataForSEO **n'acceptent qu'une tâche par requête** : un POST à six
mots-clés rend le premier et cinq résultats vides, **sans erreur**, facturés
0,005 $. On lit « 0 annonce » et on conclut « pas de concurrence » — alors qu'on
n'a rien mesuré.

## Ce qu'on ne peut pas encore dire

Le remplaçant n'est pas choisi : BigBuy, Octopia et Syncee sont identifiés mais
aucun prix de gros n'a encore été relevé, et la ligne `BIGBUY_API_KEY=` du dépôt
est vide — jamais renseignée, pas expirée. On ne sait donc pas si une source EU laisse réellement
la marge sur le volumineux — seulement qu'AliExpress ne la donne pas. Rien n'a
été testé en publicité, et aucun des cinq GO du jour n'a de coût fournisseur
vérifié, sauf la pressothérapie.
