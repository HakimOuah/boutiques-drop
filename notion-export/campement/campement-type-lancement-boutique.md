# 🏕️ Campement type — Lancement boutique

- **URL Notion** : https://app.notion.com/p/3a71f38c315481b88b28d745e54efc05
- **Date d'export** : 07/08/2026
- **Parent** : Pipeline Boutiques Drop

---

**Usage** : quand Hakim valide un produit (« je veux lancer une boutique sur X »), on **duplique cette page** en « 🏕️ Campement — \<Marque\> », on adapte l'en-tête ci-dessous, puis les tickets du Kanban sont délégués aux agents un par un (ou en parallèle quand les dépendances le permettent). Chaque ticket est un **brief d'agent autonome** : objectif, entrées, procédure, garde-fous, critères de fin.

**Règles transverses (valables pour tous les tickets)**
- Source de vérité = **fichiers locaux** (`boutique-pipeline/boutique-<nom>/`) ; Notion = tableau de bord. On écrit local d'abord, on synchronise Notion ensuite.
- **Ne JAMAIS utiliser `switch-shop`** sur le connecteur Shopify MCP (il invalide la connexion ; seule une ré-autorisation OAuth par Hakim la restaure).
- **Ne JAMAIS toucher aux SKU** (ils portent le mapping AliExpress → DSers).
- Résultats MCP \> \~25k tokens → sauvegardés dans `/tool-results/*.txt`, à parser sur disque.
- Requêtes variantes : toujours `first:250` + pagination par curseur (Shopify accepte jusqu'à 2048 variantes ; la « limite 100 » est obsolète).
- Promesses **vérifiables** uniquement : en dropshipping, rien n'est « inclus dans le colis » ; tout bonus est « offert / accès inclus » livré en **numérique**.
- Copywriting **bloqué** tant que le ticket Persona n'est pas Fait.
- QA **mobile-first** avant desktop.
- Tout placeholder d'avis/notes (badge héro, sliders) = **chasse gardée de Hakim** : proposer, ne jamais figer sans lui.
- **Skills globaux** (`~/.claude/skills`, installés le 26/07/2026) : les tickets 02, 03, 07, 08, 09, 10, 12b, 15 et 16 ont une section « Skills à invoquer » — les invoquer via le Skill tool en début de ticket. Post-lancement (pas de ticket) : campagnes pub = invoquer **`ads`** + **`ad-creative`** (stratégie/créas, playbooks Google & Meta 2026) ENSEMBLE avec les skills maison `google-ads-launcher`/`meta-ads-creator` (budgets, seuils ROAS, négatifs FR = les règles Hakim) ; capture e-mail = `popups` + `klaviyo-flow-builder`.

## En-tête à adapter à chaque duplication

- **Marque / boutique** : `<Marque>` — **Domaine** : `<marque>.fr` — **E-mail** : `contact@<marque>.fr`
- **Shopify** : `<store>.myshopify.com` — mot de passe storefront : `<mdp>`
- **Dossier local** : `boutique-pipeline/boutique-<nom>/` — **Runbook** : `runbook-<nom>.md`
- **Dossier de recherche produit** (verdicts GO) : `<lien>`
- **PDF types d'images produit** : « Carousel Photos Produit — 7 images dans l'ordre » (Arthur FMV) → distillé : `boutique-pipeline/docs/carousel-photos-produit.md` + pages PNG dans `docs/carousel-photos-produit/` (même référence pour toutes les boutiques)
- **Boutique de référence copie légale** : **Tuftéo** (défaut validé par Hakim) — lien : `<URL Tuftéo>`
- **Boutiques de référence arborescence** (ticket 00b) : `<liens concurrents>`

Le Kanban des tickets est ci-dessous. Statuts : À faire → En cours → Bloqué Hakim → Fait.

→ Base « Tickets — Lancement boutique (modèle) » : https://app.notion.com/p/da8b39cc1a4248f2aec7494df5ef247b (export : `bases/tickets-lancement-modele.md`, tickets détaillés dans `campement/`)

---

## ⚠️ Pièges vérifiés — passe Noirmont des 25-26/07/2026

Tous constatés en production, tous ont coûté une reprise. À lire avant d'écrire sur une boutique.

### Écritures qui échouent en silence

Quatre cas rencontrés sur le thème FullStack, tous **sans message d'erreur** :
1. Un **nom de schéma de bloc de plus de 25 caractères** fait rejeter le fichier.
2. `themeFilesUpsert` renvoie parfois `upsertedThemeFiles: []` **sans erreur** — traitement asynchrone. Re-interroger `updatedAt`/`size`/`checksumMd5` pour confirmer.
3. Le champ **CSS d'une section** fait rejeter le fichier. Passer par un fichier d'asset.
4. Envoyer `seo { description }` seul met **`seo.title` à `null`** : Shopify **remplace** l'objet SEO au lieu de le fusionner. Toujours envoyer les deux champs ensemble.

**Règle générale : après toute écriture de thème ou de métadonnée, relire ce qu'on vient d'écrire.** Une réponse sans erreur ne prouve rien.

### Médias partagés — le piège le plus coûteux

Attacher une image par son **URL** (`originalSource`) ne crée **pas** de copie : Shopify rattache **le même objet `MediaImage`** aux deux produits.
- L'`alt` étant une propriété du **fichier** et non du rattachement, chaque écriture successive **écrase celui des autres produits**. 31 textes alternatifs détruits en une passe, dont certains non récupérables.
- **Supprimer un média depuis une fiche le retire de toutes celles qui le partagent.**

✅ Pour rattacher un fichier existant sans effet de bord : `files: [{id: "gid://shopify/MediaImage/…"}]`, jamais `originalSource` + `alt`.

### Pastilles de variante (swatches)

Ce n'est **ni du développement ni un réglage de thème** : c'est de la **donnée Shopify**. Le thème rend une pastille dès qu'une valeur d'option porte un swatch, un bouton texte sinon.
Le champ `swatch` est en **lecture seule** : passer par les **métaobjets liés à l'option**. Pour la catégorie Montres, les clés sont `dial-color` / `case-color` — la clé générique `color-pattern` est refusée.
Il faut **aussi** une image par variante : sans elle, le clic ne change pas la galerie.

### DSers

- **L'auto-matching par SKU n'existe pas.** DSers rattache le fournisseur mais laisse les variantes vides. Lire les SKU via l'API Shopify pour bâtir la table, puis apparier à la main.
- Les listes de valeurs sont **virtualisées** (9 rendues sur 20) : provoquer le défilement, sinon des valeurs semblent absentes.
- Une boîte **« Appliquer le mapping »** doit être confirmée, sinon rien n'est écrit alors qu'on croit avoir enregistré.
- Chrome **bride les minuteries** quand l'onglet est en arrière-plan.
- Un produit créé par l'API n'entre pas seul dans DSers : bouton **« Import products from Shopify »**, additif, par lots de 10.

### Découpage d'un catalogue

- **Ne jamais supprimer une valeur d'option pour réduire un nombre de fiches** : cela détruit son mapping. Si deux valeurs sont trop proches pour mériter deux pages, les **fusionner** sur une fiche via une option secondaire — on garde le SKU.
- Découper **par modèle**, garder en variante ce qui est une **dimension** (une couleur est un modèle, une capacité ou une largeur est un choix).
- Toujours **sauvegarder l'état complet des variantes avant toute suppression** (id, SKU, prix, options, inventaire) : c'est le seul filet.
- Ne pas rattacher les fiches filles à la collection de la page d'accueil — elle se retrouve inondée.
- Chaque fiche créée **hérite du texte de sa mère**, écrit pour une gamme : purger les renvois à des choix qu'elle n'offre plus, et lui donner des **métadonnées SEO uniques**.

### Marques tierces — la nuance qui compte

Interdire « toute marque tierce » est **trop large et coûteux**. Distinguer :
- ✅ **Autorisé** : nommer le **fabricant du composant** réellement installé (mouvement Seiko NH35, Miyota 8215). C'est vrai, vérifiable, et c'est l'argument technique central qui justifie l'écart de prix entre variantes.
- ⛔ **Interdit** : les marques dont le produit reprend le **dessin**, et toute formulation suggérant une filiation.
- ⚠️ Attention à la **coordination grammaticale** : « Seiko NH34 ou DG3804 » laisse lire « Seiko » comme portant sur les deux. Mettre le calibre sans fabricant **en tête** : « Calibre DG3804 ou Seiko NH34 ».

### Modèles d'image

- **Ne jamais utiliser un modèle UGC/mode pour du packshot** : il fabrique de faux logos.
- Se méfier des modèles d'« édition » qui **réinventent l'objet** (l'un a ajouté un chiffre romain et une trotteuse inexistante lors d'un comparatif).
- Le coût réel des générations 4K est **\~30 % au-dessus** du tarif annoncé par l'API.
- **Régénérer plutôt qu'inpainter** : la retouche sur cadran sombre laisse des voiles visibles.

### Organisation

- **Le navigateur est une ressource unique partagée** entre l'orchestrateur et les agents. Sérialiser, ou utiliser deux navigateurs distincts (intégré / Chrome).
- Une session **connectée** évite les CAPTCHA d'AliExpress : le blocage n'est pas une protection du site mais l'absence de session.
- Quand un agent conclut « techniquement impossible », **faire revalider dans d'autres conditions** avant d'en faire une doctrine. Deux fausses limites ont été inscrites puis corrigées.

## ⚠️ Pièges vérifiés — passe du 26/07/2026

Tous constatés sur NOIRMONT, tous payés une fois. À relire avant chaque lancement.

### Écriture de thème : ne jamais se fier aux métadonnées

- **`size` et `updatedAt` ne prouvent rien.** Shopify comptabilise le bloc de commentaire tantôt dans la taille tantôt pas, et les horloges de la machine et du serveur divergent de plusieurs minutes. **Seule la relecture du contenu, ou son empreinte MD5, prouve qu'une écriture a eu lieu.** Corriger toute consigne qui dit « vérifier par size/updatedAt ».
- **Une requête `files(filenames: [...])` peut renvoyer un nœud étiqueté `templates/product.json` dont le contenu est celui de `templates/index.json`.** Détecté avant écriture ; sans ce contrôle, un gabarit en écrasait un autre. **Valider l'appariement nom ↔ contenu par empreinte avant toute réécriture.**
- ⚠️ **`themeFilesUpsert` qui renvoie `upsertedThemeFiles: []` sans `userErrors` n'est PAS un échec** : c'est une **écriture asynchrone**. Corrigé le 26/07 — nous avions traité pendant toute une passe un comportement normal comme un rejet silencieux, et refait des écritures qui avaient abouti. Vérifier par relecture, pas par la forme de la réponse.
- Rejets silencieux réels, confirmés : nom de schéma de bloc \> 25 caractères, et le champ CSS d'une section (passer par un fichier d'asset).

### Le caractère invisible

Une chaîne « introuvable » dans un fichier de thème est presque toujours une chaîne dont **un caractère invisible diffère** : apostrophe typographique `’` contre apostrophe droite `'`, ou espace insécable contre espace ordinaire avant un `:`. **Relever la convention réelle du fichier avant de composer une recherche**, et normaliser recherche *et* remplacement sur cette convention — jamais introduire trois caractères isolés d'une autre convention.

### Inventaires tronqués

**Les requêtes média sont plafonnées à 30 par appel.** Un inventaire non paginé avait compté 173 photos fournisseur là où il y en avait 186 — 13 photos AliExpress auraient survécu à une purge réputée complète. **Paginer explicitement et boucler ses totaux.** Vaut pour tout décompte : quand un chiffre sert de base à une purge, le recompter autrement.

### Le SKU ne prouve pas l'identité visuelle

Après un découpage de coloris, la galerie d'une fiche mère **date d'avant le découpage**. Un SKU identique entre mère et fille ne garantit donc pas que l'image montre le même produit : contrôle sur 6 mères, **6 échecs** — cadran crème là où la fille est argent, cuir brun 4 places là où la fille est bleu 3 places. **Vérifier les images à l'œil avant tout rattachement**, jamais sur la seule correspondance de SKU.

### Filtres de vitrine

- Les facettes ne se règlent **ni dans le thème ni par l'API** : elles dépendent de l'application **Search & Discovery**. Si la vitrine ne propose que « Disponibilité + Prix », **c'est le signe que l'application n'est pas installée**, pas un mauvais réglage.
- Son interface tourne dans une **iframe d'une autre origine** : non automatisable, les clics n'y entrent pas. Prévoir des gestes à confier au marchand.
- **Adosser une facette à un métachamp normalisé, jamais aux étiquettes.** Vu chez un concurrent : « Mecanique » et « Mécanique » côte à côte dans le même filtre. Fixer une forme canonique et vérifier l'unicité des valeurs avant d'activer.

### Publication et rangement

- **Un produit importé par DSers arrive publié sur aucun canal.** Le passer en `ACTIVE` ne suffit pas : sans `publishablePublish`, il reste invisible.
- **Les collections automatiques par étiquette sont sensibles au singulier/pluriel.** 13 fiches publiées portant `bracelet`/`outillage` sont restées hors de toute collection attendant `bracelets`/`outils` — visibles en direct, introuvables à la navigation. Contrôler les effectifs après chaque publication.

### Conformité

- **Les pages légales ne suffisent pas.** Les liens de la caisse viennent de **Réglages → Politiques**, pas des pages. Créer les deux.
- **Le médiateur de la consommation s'adhère par site, pas par société.** Ne jamais recopier la mention d'une autre boutique du même propriétaire : ce serait une fausse déclaration. Laisser un marqueur visible.
- **Garantie commerciale toujours présentée en sus des garanties légales**, jamais à leur place.
- **Le réglage « Dates de livraison estimées » est absent de l'API** et vaut « Automatisé » par défaut : Shopify calcule ses propres dates à la caisse, sans rien savoir du délai fournisseur. Source d'un **troisième délai** contredisant la fiche et le bloc de réassurance. À désactiver dans l'admin.

### Véracité produit

- **Un calibre méca-quartz n'est pas automatique.** Un VK63 fonctionne **à pile** : toute formule globale du type « nos montres sont automatiques » devient fausse dès qu'un chronographe entre au catalogue. Vérifier la nature du mouvement **par famille** avant d'écrire une promesse globale.
- **Une phrase de description peut désigner le client et non le produit.** « Si vous portez d'habitude du 38 ou 39 mm » parle du **poignet**, pas du boîtier. Un traitement automatique y aurait lu un diamètre.
- Rappel : **fabricant de composant = autorisé** (c'est une spécification), **marque de design = interdit**. Attention à la portée : « Seiko NH34 ou DG3804 » laisse « Seiko » qualifier les deux — inverser l'ordre.
