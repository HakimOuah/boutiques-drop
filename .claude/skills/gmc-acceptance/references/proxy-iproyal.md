# Proxy IPRoyal — recette (optionnelle)

**Décision Hakim, 24/08 soir :** IPRoyal n'est **pas** une première brique. Pour une boutique test (Orysbain), une IP de box **stable** suffit. Le proxy est une option **après un incident de compte identifié**. Une IP box propre vaut mieux qu'un proxy cosmétique (erreurs, récupération de compte, géo qui saute).

Si tu l'actives quand même : Google ne voit pas ta box. Il voit une **adresse internet française fixe**.

Sans proxy : ton Mac → Google (il voit ta box, la même pour toutes les boutiques).  
Avec IPRoyal : ton Mac → serveur IPRoyal en France → Google (il voit **cette** IP, une par boutique).

Tu as déjà un profil Chrome par boutique. On y ajoute juste cette IP. **Shopify s’ouvre ailleurs, sans proxy.**

Ne jamais activer le proxy dans les Réglages Mac (ça enverrait tout le Mac, Shopify compris).

---

## Quoi acheter

Site : [iproyal.com/isp-proxies](https://iproyal.com/isp-proxies/)

| Produit | On prend ? |
|---|---|
| **ISP Proxies** (IP dédiée, ~2,4–2,7 $/IP/mois) | **Oui.** Même IP pendant des semaines. |
| Residential (au Go, l’IP tourne) | **Non.** Google verrait le Gmail changer d’IP à chaque session. |
| Datacenter | **Non.** Trop facile à flagger. |

**1 IP France par boutique.** Plan 30 jours pour tester. Si la France ISP est en rupture : un pays EU, et on le **garde**.

---

## Une seule fois : le compte IPRoyal

1. Compte sur [iproyal.com](https://iproyal.com/).
2. Menu **ISP** (pas Residential, pas Datacenter).
3. **Create a new order** → pays **France** → quantité **1**.
4. 30 jours, paie.
5. Dashboard : tu récupères **hôte, port, utilisateur, mot de passe**.

Pour la boutique suivante : tu rachètes **1 IP France de plus**. Tu ne réutilises pas la première.

---

## Pour chaque boutique, dans l’ordre

**1. Ouvre le bon Chrome**  
Chrome en haut à droite → profil `GMC — [Marque]`.  
S’il n’existe pas : profil → Ajouter → nomme-le comme la boutique. Dedans : ce Gmail seulement, pas Shopify.

**2. Installe l’extension (dans ce profil)**  
[IPRoyal Proxy Manager](https://chromewebstore.google.com/detail/iproyal-proxy-manager/gjakohbhfclfjmhhlenfdkldieofkpjl) → Ajouter à Chrome.  
Épingle l’icône à droite de la barre d’adresse.

**3. Branche l’IP**  
Clique l’icône → **Manual Proxy** (ou Login si tu es déjà connecté).  
Colle hôte / port / user / pass → Save → **Connect**.

**4. Vérifie**  
Ouvre [whatismyipaddress.com](https://whatismyipaddress.com/).  
Tu dois voir une IP **France**, pas celle de ta box.  
Encore ta box = pas Connect, ou mauvais profil Chrome.

**5. Gmail, uniquement ici**  
Crée le Gmail de la boutique **dans cet onglet**, proxy encore Connecté.  
5 à 7 jours : YouTube, Google Search, 2–3 newsletters. Ensuite seulement GMC, puis Ads.  
Si tu ouvres ce Gmail une fois dans ton Chrome perso, l’isolation saute.

**6. Shopify, ailleurs**  
Ferme ce profil. Ouvre ton Chrome normal (ou un profil « Shopify ») **sans** l’extension Connect.  
Admin Shopify, thème, DSers : jamais dans le profil GMC.

---

## Au quotidien

Boutique A :
1. Profil `GMC — A`
2. Icône IPRoyal → **Connect** (l’IP A)
3. Gmail A, GMC A, Ads A
4. Shopify : autre fenêtre Chrome, proxy **off**

Boutique B : tu fermes le profil A, tu ouvres le profil B, tu Connect l’IP B. Les deux ne vivent jamais dans la même fenêtre.

---

## Trois trucs qui cassent tout

- Ouvrir le Gmail de la boutique dans ton Chrome perso.
- Laisser le proxy allumé et aller sur Shopify.
- Réutiliser la même IP IPRoyal pour deux boutiques, ou la changer après création du Gmail.

## Parc déjà validé

Ne **pas** coller un proxy neuf sur Tuftéo, Bonum Vitae, ou un Gmail déjà vivant. Changer d’IP d’un coup = signal. L’IP dédiée, c’est pour les **prochaines** identités.

## Dépannage

- Extension Connectée mais IP box → mauvais profil Chrome, ou pas Connect.
- Auth qui échoue → user/pass du dashboard IPRoyal.
- Shopify bizarre / login qui tourne → tu es dans le profil GMC. Couper le proxy, ouvrir Shopify ailleurs.
