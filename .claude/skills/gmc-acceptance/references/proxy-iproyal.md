# Proxy IPRoyal — une IP dédiée par boutique

Pratique Hakim : un **profil Chrome par boutique / Gmail**. On y ajoute **une IP statique IPRoyal** (produit **ISP Proxies**, aussi appelé static residential). Tuto proxy / IP, 24/08/2026.

## Quoi acheter (et quoi éviter)

| Produit IPRoyal | Pour Gmail / GMC / Ads ? |
|---|---|
| **ISP Proxies** (IP dédiée, statique, ~2,4–2,7 $/IP/mois) | **Oui.** Même IP pendant des semaines. C’est ça qu’il faut. |
| Residential (rotation au Go) | **Non.** Google verrait le Gmail se connecter depuis une IP différente à chaque session. |
| Datacenter | **Non.** Trop facile à flagger. |

Commander **1 IP par boutique**, localisation **France** (même pays que la boutique et le GMC). Plan 30 ou 60 jours pour commencer. Si la France ISP est en rupture, prendre un pays EU et **le garder** — ne pas changer de pays en cours de route.

Site : [iproyal.com/isp-proxies](https://iproyal.com/isp-proxies/)

## Règle d’or

**Profil Chrome boutique = Gmail + YouTube + GMC + Ads, derrière l’IP IPRoyal.**

**Shopify = un autre Chrome (ou le profil par défaut), SANS proxy.** Ouvrir Shopify derrière un proxy anti-détection = risque de ban boutique élevé.

Ne jamais activer le proxy au niveau macOS (Réglages → Réseau) : ça enverrait **tout** le Mac, Shopify compris, dans le tunnel.

## Montage (nouvelle boutique)

### 1. Profil Chrome (déjà en place chez Hakim)

Chrome → icône de profil → **Ajouter** → nommer `GMC — [Marque]`. Rien d’autre dans ce profil : pas de Shopify, pas d’autre Gmail.

### 2. Commander l’IP

1. Compte sur [iproyal.com](https://iproyal.com/)
2. Menu **ISP** → **Create a new order**
3. Localisation : **France** · quantité : **1**
4. Durée : 30 ou 60 jours
5. Payer, puis ouvrir le dashboard ISP : tu récupères `hôte` · `port` · `user` · `pass` (ou tu whitelistes ton IP d’authentification)

Une IP = une boutique. Ne pas partager une IP entre deux Gmail.

### 3. Brancher l’IP sur CE profil Chrome seulement

L’extension se pose **dans le profil**, pas sur tout Chrome.

1. Dans le profil `GMC — [Marque]`, installer [IPRoyal Proxy Manager](https://chromewebstore.google.com/detail/iproyal-proxy-manager/gjakohbhfclfjmhhlenfdkldieofkpjl)
2. Épingler l’icône
3. **Login** IPRoyal (le plus simple) **ou** **Manual Proxy** et coller `hôte:port:user:pass`
4. Nommer le profil proxy comme la boutique
5. Protocole : HTTPS (ou SOCKS5 si le dashboard le donne)
6. **Connect**
7. **IP Lookup** dans l’extension, ou [whatismyipaddress.com](https://whatismyipaddress.com/) : l’IP affichée doit être l’IP ISP France, pas ta box

### 4. Faire vivre le Gmail derrière cette IP

Toujours dans ce profil, proxy **Connecté** :

1. Créer le Gmail (ou t’y connecter s’il est déjà créé **uniquement** ici)
2. 5–7 jours de chauffe : YouTube, Search, newsletters, quelques mails. Sessions on/off, pas 24/7
3. Ensuite seulement : GMC, puis Ads (zéro campagne tant que la review n’est pas l’objectif)

Si tu te connectes une fois à ce Gmail depuis le Chrome perso (IP box), tu casses l’isolation.

### 5. Vérifier avant de continuer

- [ ] IP Lookup = France, IP stable d’un jour à l’autre
- [ ] Gmail ouvert **uniquement** dans ce profil
- [ ] Shopify ouvert **ailleurs**, proxy off
- [ ] Pas deux boutiques sur la même IP IPRoyal
- [ ] On ne change pas d’IP après création du Gmail (même logique que l’adresse Maps : on garde)

## Parc déjà validé

Ne pas coller un proxy neuf sur un Gmail / GMC déjà vivant (Tuftéo, Bonum, etc.). L’IP changerait d’un coup = signal. L’IP dédiée, c’est pour les **prochaines** identités.

## Dépannage express

- Extension connectée mais IP box toujours affichée → mauvais profil Chrome, ou proxy pas Connect.
- Auth qui échoue → user/pass du dashboard, ou whitelister l’IP de la box dans IPRoyal (dans ce cas la box doit rester la même).
- Shopify bizarre / login qui tourne → tu es dans le mauvais profil. Couper le proxy, ouvrir Shopify ailleurs.
