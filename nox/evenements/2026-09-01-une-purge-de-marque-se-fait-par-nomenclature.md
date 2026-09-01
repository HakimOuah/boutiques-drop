---
type: evenement-nox
date: 2026-09-01
categorie: methode
titre: "Une purge de marque se fait par nomenclature, pas mot par mot"
projet: maison-noirmont
repo: boutique-pipeline
axes: [ecommerce]
agent: claude-code
statut_editorial: brut
commit:
---
# Une purge de marque se fait par nomenclature, pas mot par mot

## Ce qui a changé

L'audit de contrôle du 01/09 sur Maison Noirmont, neuf jours après le ban GMC « déclarations
trompeuses », montre que les trois passes de nettoyage (23, 30, 31 août) ont chacune retiré
**le mot cité**, jamais la famille de noms dont il venait. Règle posée : avant de purger, écrire
la nomenclature complète de la marque concernée, puis grepper la liste — pas le mot du mail Google.

## Pourquoi c'est notable

Le ban du 23/08 a été attribué à « Seiko » et à « Président ». Le 30/08, Seiko revenait par les
metafields SEO. Le 31/08, le même signal revenait sous « Miyota » (marque Citizen). Le 01/09,
il est encore là sous « **Jubilé** » — troisième nom de bracelet Rolex de la série, resté sur
**19 fiches** dont 8 titres, 8 handles, les SEO titles et les noms de fichiers CDN, pendant que
« Président » avait été renommé « maillons arrondis » le 23 août. Trois passes, trois fois le
même angle mort, et chaque passe remet le compteur d'attente à zéro : le ban date du 23 août,
la fenêtre d'examen est aujourd'hui repoussée au 9–12 septembre.

## Le détail qui fait le contenu

Le grep de contrôle avait été écrit à partir du mail Google et du rapport OneClickBrand.
Il cherchait `seiko`, `miyota`, `mingzhu`, `president`, `904l`, `skx` — la liste des choses
**déjà reprochées**. `jubile` n'y était pas, parce que personne ne l'avait reproché.

Or Rolex nomme ses bracelets Oyster, Jubilee et President : les trois appartiennent au même
registre, et l'un des trois avait déjà déclenché la correction du 23 août. La bonne liste de
départ n'était pas « ce que Google a cité » mais « ce que la marque appelle ses pièces ».

Faux positif à noter au passage : chercher `casio` dans le feed remonte la carte cadeau, parce que
« oc**casio**ns » contient la chaîne. Le catalogue des pièges de lecture SERP vaut aussi pour les
scans de conformité — lire le contexte de chaque occurrence avant de la compter.

## Ce qu'on ne peut pas encore dire

Que « Jubilé » est bien ce qui maintient le ban : le compte GMC n'a pas été rouvert, et le motif
Google reste générique. Que la liste par nomenclature est complète : elle a été écrite pour Rolex,
pas encore pour les autres maisons dont le catalogue emprunte le vocabulaire. Et les brouillons et
archivées n'ont pas été re-scannés le 01/09 — le connecteur Shopify Admin était déconnecté.
