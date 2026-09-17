# Lexique interdit — termes et tournures qui font suspendre un compte

**Origine.** Lumière Matière, 17/09/2026 : compte Merchant Center accepté plusieurs jours, première
campagne lancée, compte suspendu le lendemain pour **déclarations trompeuses**. Le site était
cohérent avec lui-même — prix, délais, libellés alignés sur 51 fiches — mais il racontait une
entreprise qui n'existait pas. Détail : [`audit-lecons-lumiere-matiere.md`](audit-lecons-lumiere-matiere.md).

**La règle qui résume tout : chaque phrase doit rester vraie si un examinateur commande le produit,
suit le colis et le renvoie.** Une phrase qui n'est vraie que pour une boutique qui stocke, contrôle
et expédie elle-même est interdite sur une boutique qui ne le fait pas.

Ce lexique complète la charte « copy vendeur, jamais confessionnel » : on écrit comme un vendeur
sûr de lui, **sans jamais affirmer ce qu'on ne fait pas ou ce qu'on n'a pas vérifié**. Les deux
tiennent ensemble : « expédié directement par nos fabricants partenaires » est vendeur et vrai.

**Outil.** `scripts/scan_veracite.py https://domaine.fr --email contact@domaine.fr --metafields mf.json`
détecte la plupart de ces cas. Un faux positif se justifie dans le rapport, il ne se tait pas.

---

## 1. Le modèle d'activité — qui stocke, qui contrôle, d'où ça part

C'est la cause n°1. En dropshipping, **on ne touche jamais le produit**. Toute phrase qui dit le
contraire est fausse, même si elle est flatteuse et même si elle « fait pro ».

| Interdit | Pourquoi | À écrire à la place |
|---|---|---|
| « boutique en ligne **parisienne** / lyonnaise / française » | Laisse croire à un local ou un stock en France | « marque d'OH Ventures, société dont le siège est à Paris » |
| « nous sommes une marque française, **installée à Paris** » (en réponse à « où êtes-vous ? ») | Répond à côté d'une question sur l'origine | « … Nos luminaires sont expédiés par nos fabricants partenaires, depuis la Chine » |
| « l'équipe **répond de Paris** », « notre équipe à Paris » | Localise un service sans preuve | « Écrivez-nous, nous vous répondons » |
| la préparation « couvre **le contrôle** du luminaire, **l'emballage** » | Décrit une manipulation qui n'a pas lieu | « couvre la transmission de votre commande à notre fabricant partenaire, sa préparation et sa remise au transporteur » |
| « **vérifié / testé / inspecté** par nos soins », « une à une », « avant expédition » | Idem | Ne rien écrire, ou décrire ce que fait le fabricant |
| « **emballé avec soin** par notre équipe », « préparé dans nos locaux » | Idem | « préparé par notre fabricant partenaire » |
| « **On prépare** le colis en 1 à 2 jours » | « On » = nous | « La commande est préparée en 1 à 2 jours ouvrés puis expédiée depuis l'entrepôt de notre fabricant partenaire, en Chine » |
| « confiés à **Colissimo, DPD**, Chronopost, Mondial Relay, GLS, UPS, DHL… » | Transporteur nommé = transporteur utilisé de bout en bout | « transporteurs internationaux, avec suivi de bout en bout » |
| « expédié **depuis la France** », « **stock en France** », « depuis nos entrepôts » | Faux | « expédié directement par nos fabricants partenaires, depuis la Chine » |
| « **fabriqué** en France / en Europe », « made in… » | Faux | Rien |
| « **nos créations** », « **conçu / dessiné** par nous », « modèles **exclusifs** », « notre design » | Revendique une conception | « nos modèles », « notre sélection » |
| « **notre atelier** », « nos **artisans** », « **fait main** », « tressé / soufflé **à la main** » | Revendique une fabrication | « tressé », « émaillé », sans préciser qui ni comment |
| « livraison **express** / rapide », « expédié **sous 24 h** » | Promesse de vitesse | Le délai chiffré, et rien d'autre |

### Ce qui doit obligatoirement figurer

- **L'origine d'expédition**, en clair, dans la politique d'expédition **et** dans la FAQ **et** dans
  la réponse « Quel délai de livraison ? » des fiches. Pas seulement dans les CGV.
- **L'adresse de retour** : où elle est (France / hors France) et ce que ça coûte au client. Jamais
  « nous vous communiquons l'adresse » sans dire au moins le pays.
- **Les destinataires hors UE** dans la politique de confidentialité : les fabricants partenaires
  reçoivent le nom et l'adresse du client. Le RGPD exige de le dire.
- **Le vendeur réel** là où la loi l'exige : OH Ventures, siège, SIREN.

---

## 2. La matière — le titre ne ment jamais

Le titre part tel quel dans le flux Merchant Center et dans l'annonce. **Un titre qui affirme une
matière que la fiche dément est la forme la plus directe de déclaration trompeuse.** Sur Lumière
Matière, 11 titres disaient « pierre » ou « travertin » pendant que 6 corps disaient « effet pierre,
composite », et la collection s'appelait « Pierre » avec une description « effet pierre en composite ».

### Matières qui exigent une preuve

`pierre` · `travertin` · `marbre` · `albâtre` · `onyx` · `granit` · `laiton` · `cuivre` · `bronze` ·
`soie` · `lin` · `cuir` · `chêne` · `noyer` · `bois massif` · `teck` · `verre soufflé` · `cristal` ·
`porcelaine` · `céramique artisanale` · `or` · `argent massif` · `fibre naturelle` · `chanvre` · `osier`

**Preuve acceptable :** la pièce reçue, ou une plaque fournisseur **qui ne se contredit pas avec
l'attribut de commande**. Un titre de listing AliExpress n'est pas une preuve : les vendeurs y
empilent les mots-clés.

**Sans preuve, qualifier :**

| Interdit | À écrire |
|---|---|
| « Suspension **travertin** » | « Suspension **effet travertin** » |
| « Applique **pierre** », « Pierre pleine », « Bloc de pierre » | « Applique **effet pierre** », « Aspect pierre », « Bloc effet pierre » |
| « **C'est de la vraie pierre ?** — Le corps est un bloc de pierre » | Supprimer la question. Ne jamais affirmer « vraie » |
| « Du travertin, **pas un placage** », « **taillé dans la pierre** » | « Un aspect travertin », « reprend le grain du travertin » |
| « monture **laiton** », « douille en **laiton** » | « monture **dorée** », « douille dorée » |
| « **cuivre** et bois » | « métal **cuivré** et bois » |
| « **soie** plissée » | « **tissu** plissé » |
| « **verre soufflé** » | « verre » |
| « corde de **chanvre** » | « corde tressée » |
| « bois clair ou **noyer** » (teinte) | « bois clair ou **teinte noyer** » |
| « **fibre naturelle** tressée » | « fibre tressée » |
| « rotin » sur une fiche dont une partie des variantes est synthétique | « rotin **ou fibre synthétique** » |
| collection « **Osier** » qui ne contient que du rotin | Ne pas créer la collection |

**Le même mot doit dire la même chose partout** : titre, libellé de variante, description,
« Matière : » des specs, FAQ, `alt`, nom et description de la collection, entrée de menu.

### Autres attributs du titre

- **Un nombre** (« 6 boules », « 5 anneaux ») n'est permis que si **toutes** les variantes l'ont.
- **Une couleur** (« fumé », « chrome », « noir ») n'est permise que si elle vaut pour la majorité
  des variantes — sinon « … en verre », « chromé ou cuivré ».
- **« LED »** dans un titre, une description ou un nom de collection n'est permis que si la source
  est une LED intégrée ou fournie. Un plafonnier à douille E27 sans ampoule n'est pas un
  « plafonnier LED », et n'a rien à faire dans une collection « Plafonniers LED ».
- **« Max 60 W »** est le calibre d'une douille. Une LED intégrée n'a pas de maximum, elle a une
  puissance. `4W(Max 60W)` = douille E27 + ampoule 4 W fournie, pas « LED intégrée ».

---

## 3. Se porter garant de ce qu'on ne vérifie pas

Les visuels sont composés (générés à partir de la photo fournisseur). **Le site ne doit jamais
garantir une photo, une matière ou un contrôle.**

| Interdit | Pourquoi |
|---|---|
| « **La texture que vous voyez en photo** est celle qui jouera chez vous » | Garantit un rendu généré |
| « photos **réelles** / **non retouchées** / **contractuelles** », « **tel que photographié** », « conforme à la photo » | Idem |
| « Du bambou tressé, **celui des photos** » | Idem, en plus discret |
| Icônes **`verified`**, `new_releases`, `workspace_premium`, `military_tech` (Material Symbols) | Symbole de certification |
| « **Ce qu'on regarde avant de mettre une pièce en ligne** » | Laisse croire à un contrôle produit |
| « **vérifié** », « **certifié** », « garanti d'origine / authentique » | Sans certificat, c'est un faux |
| « **Pas de vocabulaire flou** », « transparence totale », « on ne vous ment pas », « zéro mauvaise surprise », « en toute honnêteté » | Proclamer l'honnêteté attire l'examen ; c'est le catalogue qui doit la prouver |
| « qualité **premium** / supérieure / professionnelle », « **haut de gamme** », « **luxe** », « prestige » | Claim de gamme invérifiable |

**Ce qu'on écrit à la place :** dans les CGV, « Les visuels présentent les luminaires en situation ;
ils sont mis en scène et peuvent différer légèrement de la pièce reçue. » Sur la home, décrire ce que
**la fiche** donne (matière nommée, dimensions, source), pas ce que **nous** aurions vérifié.

---

## 4. Jargon interne qui fuit

La copie client ne parle jamais de la chaîne d'approvisionnement en termes internes. Ce n'est pas
de la transparence : c'est un aveu mal placé, et il se lit comme tel.

**Interdit dans toute copie client :** « attribut fournisseur », « photo fournisseur », « fiche
fournisseur », « le fournisseur la montre… », « le fournisseur écrit parfois… », « photo de
variante », « dropshipping », « AliExpress », « DSers », « CJ », « Temu ».

| Interdit | À écrire |
|---|---|
| « Certaines **photos fournisseur** portent le mot waterproof : aucun indice n'est lisible dans les **attributs** » | « Cette applique ne porte aucun indice de protection contre l'eau » |
| « **L'attribut fournisseur** dit ampoule non incluse. Une photo de variante annonce 1 LED offerte : nous ne reprenons pas cette mention » | « Non. Prévoyez une LED G9, blanc chaud » |
| « **Le fournisseur la montre** au-dessus d'un lavabo, nous ne reprenons pas cette promesse » | Supprimer la phrase |

Le **bon** mot pour le client : « nos fabricants partenaires ».

---

## 5. Urgence, preuve sociale, prix

| Interdit | Pourquoi |
|---|---|
| « stock limité », « dernières pièces », « plus que 3 », « victime de son succès », « offre limitée », « jusqu'à ce soir » | Fausse urgence |
| « best-seller », « coup de cœur de nos clients », « nos clients adorent », « déjà 2 000 clients », « 4,8/5 », « 123 avis » | Preuve sociale sans avis réels |
| « prix usine », « prix de gros », « au lieu de 399 € », « meilleur prix », « moins cher que », « −40 % » | Référence de prix trompeuse |
| Un compteur de stock (« 1 079 disponibles ») recopié du fournisseur | Stock fictif pour le client |

---

## 6. Collections et navigation

- **Aucune collection publiée vide.** Compter en visiteur : `/collections/<handle>/products.json`,
  jamais l'Admin (qui compte les brouillons).
- **La description d'une collection décrit le catalogue public**, pas les brouillons. « Cinq modèles
  ici : un dôme, deux cloches… » pour 2 fiches publiées = faux.
- **Le nom de la collection est une promesse.** « Osier » contenant du rotin, « Plafonniers LED »
  contenant des E27, « Pierre » contenant du composite : trois mensonges de navigation.
- **Une entrée de menu reprend le nom qualifié** (« Effet pierre », pas « Pierre »).
- Une collection qu'on garde sous 5 fiches se justifie par écrit ; une collection vide se dépublie.

---

## 7. Les chiffres

- **Une formulation par délai**, sur toutes les surfaces : policies, FAQ page, FAQ fiche, accordéon
  « Livraison et retour » du thème, panier, footer, **descriptions de collection**. Lumière Matière a
  gardé « 6 à 15 / 7 à 17 » dans la collection XXL après avoir corrigé tout le reste.
- **Une procédure par cas** : un produit défectueux ne se traite pas « sous 30 jours » dans la FAQ et
  « sous 48 h avec photos » dans la politique.
- **Horaires identiques** partout (la policy Coordonnées disait 9 h, le reste 10 h).
- **Moyens de paiement** : la liste des pages = pictos du footer = checkout. Pas de « Maestro » écrit
  s'il n'a pas de picto.
- **Un seul e-mail**, y compris dans les liens `mailto:` invisibles (un `mailto:contact@ohventures.fr`
  vide traînait dans la policy Coordonnées).

---

## 8. Avant de lancer une campagne

**La validation Merchant Center n'est pas une validation du récit.** Le lancement d'une campagne
déclenche un examen plus poussé. Avant la première dépense :

1. `scan_veracite.py` à zéro occurrence bloquante.
2. Lecture humaine de Notre histoire, de la politique d'expédition (préparation, transporteurs,
   origine) et de la politique de retour (adresse, coût), avec la question : **« est-ce vrai pour
   un produit qu'on ne touche jamais ? »**
3. Chaque titre relu contre la matière de sa fiche.
4. Commande test passée : c'est la seule preuve de la matière, de l'ampoule et du délai.
