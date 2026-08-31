---
type: evenement-nox
date: 2026-08-31
categorie: methode
titre: "GET shops advertising est Meta only pas Google"
projet: bijoux-personnalises
repo: boutique-pipeline
axes: [agents, ecommerce]
agent: cursor
statut_editorial: brut
commit:
---
# GET shops advertising est Meta only pas Google

## Ce qui a changé

Le dump `GET /v1/shops/{id}` ne porte pas `googleAds`. `advertising.activeAds` = Meta. Le mix Google d’une boutique se lit sur `POST /v1/shops/query` (`searchType=domain`) : `googleAds.platformMix`, `liveAds`, geo.

## Pourquoi c'est notable

Sur Brother & Sisters, ça a fait écrire « canal n°1 = Meta 26 ads » alors que l’UI montre **386 Google Ads**. Pour un projet Shopping Hakim, le dossier aurait été rejeté sur un cloisonnement Search qui n’est pas le leur.

## Le détail qui fait le contenu

Docs TrendTrack : « existing advertising.activeAds, latestAds, and linked advertisers remain Meta/Facebook semantics. »

Lu le 31/08 sur brother-and-sisters.com via `shops/query` :

- `advertiser.liveAds.google` = **386** (aligné UI)
- Mix : Search **201** · Shopping **107** · Other 56 · YouTube 29
- France : **41 ads · 1,28 M reach**
- 64 lancées / 30 j
- Échantillon Search FR : 100 % `static_image` + `remarketing: true` — pas de RSA texte
- Onglet TikTok « 112 » = `tiktok.profileMetrics.totalPosts`, ads TikTok = 0

L’API `google-ads/query` avec `search: ["brother-and-sisters"]` est trop floue (soeur.fr, brother.fr, sistersrepublic). Filtrer `advertiser.domain == brother-and-sisters.com`.

## Ce qu'on ne peut pas encore dire

TrendTrack ne dit pas si les 201 « Search » sont du PMax, des PLA sur Search, ou du Demand Gen. Le 216 `shop.googleAds.liveAds` vs 386 UI n’est pas expliqué. Pas de lecture GMC live de leur feed.
