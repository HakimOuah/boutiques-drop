---
name: import-avis-trustoo-bookmark
description: "Importer en masse les avis AliExpress vers Shopify via le bookmarklet TT Import Reviews (TrustWILL/Trustoo) piloté en Chrome, sans dépendre de la barre de favoris"
metadata:
  node_type: memory
  type: reference
  originSessionId: 455c6a31-511d-4d11-a937-711aeb4be1b5
  modified: 2026-07-23T11:47:49.730Z
---

Méthode fiable (validée sur Tuftéo le 23/07/2026, 22 fiches importées) pour importer les avis AliExpress produit par produit sans cliquer la barre de favoris Chrome (non pilotable).

**Principe :** ouvrir la page standalone du bookmarklet `https://appadmin.trustoo.io/bookmark_import` dans un onglet Chrome, y lier la fiche AliExpress cible par `postMessage`, puis piloter le formulaire React en JS.

**Boucle par produit (un seul browser_batch : navigate + javascript_tool + screenshot) :**
1. `navigate` vers `.../bookmark_import`.
2. JS : attendre que le form soit prêt (poller ~16 s sur `document.body.innerText` contenant « Store: <nom boutique> » et `document.querySelectorAll('select').length>=5`), puis `window.postMessage({type:'import_reviews_url_message', url:'https://fr.aliexpress.com/item/<ID>.html', api_key:<clé Trustoo>}, '*')` suivi de `window.postMessage({type:'import_reviews_message', url:null}, '*')`.
3. JS : ouvrir le combobox Produit = `document.querySelector('.tt-relative button').click()` (le champ Produit est un combobox React custom, PAS un `<select>` ; il n'apparaît pas dans read_page qui ne traverse pas ce sous-arbre).
4. JS : sélectionner l'option par texte EXACT (`el.textContent.trim()===NOM`, en incluant accents et tirets cadratins « — »), en cliquant la ligne dont la hauteur est 4–70 px (évite de recliquer le toggle).
5. JS : régler Content Options en manipulant le `<select>` natif via le setter React (`Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value').set` + events input/change). Les autres champs (20 / No update / Original language / Publish / All) sont déjà les défauts.
6. Vérifier au screenshot que la fiche + « Text & Photo Reviews » sont bons, PUIS cliquer « Import reviews » (coord ~[966,613] à 1512×798). Modal succès « The import task has been successfully created. » → recharger pour le produit suivant (le formulaire ne se rouvre pas seul après « Continue importing »).

**Pièges :**
- Le return de `javascript_tool` est bloqué [BLOCKED: Cookie/query string data] si la chaîne contient `=` ou `&` (ex. « value=3 », « Text & Photo ») → ne renvoyer que des statuts en lettres, vérifier le reste au screenshot.
- Récupérer les titres produits EXACTS depuis Shopify (`products(first:60){nodes{title}}`) avant de mapper, l'égalité stricte casse sur le moindre écart.
- La liste produits se charge en async (~plusieurs sec) : le poll de disponibilité est obligatoire, sinon `.tt-relative button` est null.
- L'audit (Importer des avis > Produits/Tâches, et Gérer les avis) est dans un iframe cross-origin appadmin.trustoo.io : illisible en get_page_text/read_page, seulement au screenshot. Les tâches sont async, les compteurs montent sur plusieurs minutes.
- Config « All » ⇒ des avis 1–2★ passent aussi ; cohérent avec [[mobile-first-et-placeholders-demo]] (Hakim garde la main sur la preuve sociale) : lui laisser filtrer/traduire. Lié : [[notion-pipeline-boutiques]], [[promesses-verifiables-guide-numerique]].
