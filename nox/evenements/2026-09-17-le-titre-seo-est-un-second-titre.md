# Le titre SEO est un second titre, et c'est celui que Google lit

**17/09/2026 — Lumière Matière, après la passe de véracité.**

La passe du matin avait corrigé 30 titres produit : « travertin » → « effet travertin », « laiton »
→ « dorée », « soie » → « tissu plissé ». Scan de véracité : 0 bloquant. Les trois actions de Hakim
faites (politiques collées, thème publié, collections dépubliées), tout était vert.

En relançant le scan non pas sur `products.json` mais sur **les 51 fiches rendues**, 32 alertes sont
tombées. Les titres SEO n'avaient pas bougé. `seo.title` et `seo.description` sont des champs
distincts du titre et de la description du produit : `productUpdate(product: {title})` ne les touche
pas, et `products.json` ne les expose pas.

Résultat : 20 fiches dont l'onglet du navigateur disait « Applique murale double **travertin** »
pendant que la page disait « effet travertin ». Cinq collections, dont « Applique murale **pierre,
travertin** et verre ». Et trois méta descriptions qui annonçaient « LED intégrée, aucune ampoule à
prévoir » là où la fiche disait « l'ampoule est fournie, une LED 4 W sur douille E27 ».

**Ce que ça change.** Le titre SEO est ce que lit un examinateur avant d'ouvrir la page : onglet,
résultat Google, aperçu de partage. Un écart entre le titre d'un onglet et le corps de la même page
est le mismatch le plus facile à constater qui soit — et il avait survécu à deux audits parce que
les deux lisaient les champs de l'API.

**Règle.** Toute correction de matière, de nombre, de couleur ou de source lumineuse se répercute le
même jour sur `seo.title` et `seo.description`, de la fiche **et** de la collection. Et un audit de
véracité se fait sur la page rendue, jamais sur l'export API seul : `scan_veracite.py` charge
désormais chaque fiche et chaque collection publiée pour lire sa balise `<title>`.

Corollaire du 05/09 (« un site cohérent n'est pas un site vrai ») : **un champ corrigé n'est pas une
page corrigée.** Il faut regarder ce que le visiteur reçoit, pas ce qu'on a écrit.
