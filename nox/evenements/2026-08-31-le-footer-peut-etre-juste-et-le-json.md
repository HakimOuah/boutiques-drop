---
type: evenement-nox
date: 2026-08-31
categorie: methode
titre: "Le footer peut etre juste et le JSON-LD mentir : deux pieges d audit GMC"
projet: lumiere-matiere
repo: boutiques-drop
axes: [ecommerce, agents]
agent: claude-code
statut_editorial: brut
commit:
---
# Le footer peut etre juste et le JSON-LD mentir : deux pieges d audit GMC

## Ce qui a changé

L'audit GMC de Lumière Matière a sorti deux pièges absents de la checklist héritée de Maison
Noirmont, et tous deux invisibles à la lecture du site. Ils entrent dans le protocole d'audit
d'une boutique terminée, au même titre que le contrôle des pictos de paiement.

## Pourquoi c'est notable

Les deux pièges partagent la même propriété : **la page lue par un humain est correcte, et la
donnée lue par Google ne l'est pas.** Un audit conduit à l'œil, ou même en lisant le texte rendu,
les rate intégralement. Il faut parser les données structurées et interroger les réglages de la
boutique, pas la page. C'est un déplacement du geste d'audit, pas un item de plus dans une liste.

## Le détail qui fait le contenu

**Piège 1 — le JSON-LD ne lit pas le footer, il lit les réglages Shopify.** Le footer, les
mentions légales, les CGV, la confidentialité, la FAQ, Contact et Notre histoire affichaient tous
`47 rue Vivienne, 75002 Paris` — l'adresse exacte du siège, vérifiable au registre public
(OH VENTURES, SIREN 103157251, activité 47.91B). Sept surfaces, zéro divergence. Et pourtant le
bloc `Organization` de la home déclarait `13 Allée Georges Brassens, 95390 Saint-Prix` avec un
autre numéro de téléphone. Le thème ne recopie pas le footer : il tire `shop.billingAddress` et
`shop.phone` des réglages de la boutique, restés sur l'adresse personnelle du jour de la création.
Le même champ alimente les e-mails de confirmation, les factures et les informations d'entreprise
que l'app Google & YouTube transmet au Merchant Center. Un champ dans Paramètres → Général, quatre
surfaces fausses, et rien de visible sur le site.

**Piège 2 — le SKU fournisseur DSers ressort en données structurées, et on ne peut pas le
réécrire.** Les 161 variantes portaient `136:200003938;200000531:173#Matte Orange2`, écrit par
DSers, et le thème le republiait tel quel dans le `sku` du JSON-LD de chaque fiche. Premier
réflexe : réécrire en SKU maison `LM-XXX`. Mauvaise réponse — Hakim a bloqué en signalant que ce
champ porte le mapping produit → fournisseur, et la documentation DSers ne dit nulle part si le
mapping est indexé sur la chaîne ou sur l'ID de variante Shopify. Sur 161 variantes avec des
commandes derrière, l'incertitude suffit à interdire le geste. La bonne réponse était ailleurs :
le problème n'est pas que le SKU existe, c'est qu'il est **publié**. Retirer la clé `sku` du
JSON-LD côté thème, et poser `identifier_exists: no` dans le flux — résultat identique côté
Google, mapping intact. **Règle générale : quand une donnée d'exploitation fuit vers le public,
couper la surface de publication, jamais la donnée elle-même.**

**Le piège du piège.** Le correctif du `sameAs` de démonstration — le thème Fullstack déclarait
comme profils officiels de la marque les comptes Facebook, YouTube et LinkedIn de son propre
éditeur — a été appliqué en supprimant le tableau sans supprimer la virgule qui le précédait.
Résultat : `json.loads` échoue sur *illegal trailing comma*, et Google ignore le bloc `Organization`
**en entier**, y compris l'adresse fraîchement corrigée. Le site n'affichait aucune anomalie. Cette
vérification était pourtant déjà dans la checklist Noirmont ; elle est passée à l'as le temps d'un
aller-retour. **Tout correctif sur un bloc de données structurées se re-valide au parseur strict,
pas à l'œil.**

Chiffres du passage : 52 produits publics, 161 variantes, 35 `alt` contenant un artefact interne
de génération sur 7 fiches (et non sur les 300 médias comme annoncé au premier tour — l'estimation
initiale extrapolait depuis un seul échantillon), 9 images sur une seule fiche gardant les noms de
fichiers AliExpress, 7 collections sur 18 sous le seuil de 5 produits publics dont deux à un seul
produit alors qu'elles figurent au menu principal.

## Ce qu'on ne peut pas encore dire

La boutique **n'est pas soumise** au Merchant Center et n'a donc reçu aucun verdict de Google. Rien
ici ne prouve que ces deux pièges provoquent un refus : ils sont classés comme mismatch d'identité
par analogie avec le ban de Maison Noirmont du 23/08, pas par observation directe. Le catalogue
reste inachevé, et l'audit des prix barrés dormants sur les brouillons n'a pas pu être conduit — le
token d'API ne porte que le scope `read_reports`. La question de la TVA (161 variantes en
`taxable: false` sur une boutique en `taxes_included: true`) est ouverte et relève du comptable. On
saura si la méthode tient quand une review aura été demandée, et pas avant.
