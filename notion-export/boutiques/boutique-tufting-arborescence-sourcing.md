# 🧶 Boutique Tufting — Arborescence & sourcing (Tuftéo)

- **URL Notion** : https://app.notion.com/p/3a21f38c315481f7b452e27b7acdd84b
- **Date d'export** : 07/08/2026
- **Base** : Boutiques (BTQ-3, statut « Ads lancées »)

---

**PORTE 2 validée (21/07/2026)** — Sitemap approuvé avec 3 amendements Hakim : sections avis Liquid posées dans le squelette dès le build (alimentées en avis vérifiés par Hakim) · home/ton/images calqués sur letufting.fr (structure validée par 4 ans de marché) · pages Academy graphiques et colorées (infographies pas-à-pas). Persona enrichi d'une annexe Reddit r/Tufting (tension de toile = douleur n°1, gestes de base, ~5 h la première pièce). Logo : déclinaisons blanches draftées (wordmark blanc/terracotta + monogramme blanc). Détail : `boutique-tufting/sitemap.md` + `project-state.md`. Prochaine étape : Phase 4 Contenus.

**PORTE 1 validée (19–21/07/2026)** — Nom : **Tuftéo** · Baseline : « Ton premier tapis, guidé pas à pas. » · Palette : crème `#FAF4EC` / brun `#3D2C24` / terracotta `#C4593B` / sauge `#8FA98F` · Typo : Fraunces + Nunito Sans · Ton : tutoiement chaleureux. **Logo : direction hybride validée** — wordmark « tuftéo » avec accent-boucle sur le é (logo principal) + monogramme pelote de laine (favicon/avatar). Drafts SVG dans `boutique-tufting/assets/generated/` ; vectorisation finale à faire dans Canva (connecteur à autoriser). Domaines tufteo.fr/.com libres au 19/07 — achat à faire par Hakim. Détail : `boutique-tufting/brand-porte1-propositions.md` + `brand-logo-brief.md` + `brand-tokens.json` (validé).

Relevés du **19 juillet 2026** — modèle : catalogue letufting.fr (périmètre strict, aucun produit hors concurrent). Source de vérité : `boutique-pipeline/reports/arborescence-sourcing-tufting-2026-07-19.md`. Commande test Urban Corners lancée par Hakim le 19/07.

> ⚠️ Toutes les fiches AliExpress ci-dessous sont des **offres trouvées, jamais des fournisseurs validés**. Prix dynamiques des deux côtés (soldes en cours) — à reconfirmer avant tout achat. CE/RoHS/DEEE à exiger sur tout l'électrique.

# Arborescence proposée

Angle différenciant validé en phase 5 : **la pédagogie/notice FR** — la plainte n°1 dans les avis du concurrent.

- **Machines de tufting**
  - Tufting gun 2-en-1 CUT & LOOP — produit phare (kit Urban Corners, commande test en cours)
  - Tufting gun AK-V CUT avec écran — alternative premium
  - Punch needle : à décider (rupture chez le concurrent, priorité basse)
- **Kits de démarrage**
  - Kit machine + tondeuse — scénario A phase 5, cible 229 € TTC
  - Kit complet débutant — scénario B, cible 299 € TTC (tondeuse incluse = notre avantage vs leur kit 280 € sans tondeuse) — bloqué par le cadre, voir trous d'assortiment
- **Tondeuses & finitions** — tondeuse tapis, tondeuse pro 200 W, ciseaux électriques de sculpture, guides, lames
- **Tissus** — toile primaire (lignes), toile premium polyester, tissu de finition, antidérapant
- **Fils** — fil acrylique en cône (composant de kit, marge faible en unitaire) ; laine NZ : trou assumé au lancement
- **Cadres & tension** — grippers ; cadres bois : non viables en dropshipping (port 63 €), voir options
- **Accessoires** — ciseaux pélican/coupe-fil/pièces AK, enfile-laine, bobineuse, brosse, spatules, miroir acrylique, équilibreur, adaptateur secteur, rubans de finition
- **Pages d'aide (notre différenciation)**
  - Notice FR complète du gun (PDF + vidéo) — répond à LA plainte n°1 des avis concurrents
  - Guide « Débuter le tufting » · FAQ · Tutos réglages Cut/Loop
  - Livraison & retours · Garantie légale 2 ans (le concurrent n'affiche que 6 mois commerciaux)
- Plus tard : carte cadeau (natif Shopify) ; ateliers = non réplicable à court terme (notre équivalent = contenu en ligne)

# Synthèse sourçabilité (37 nœuds)

- **4 sourçables UE \< 10 j** : les 2 guns (DE 78,61 € / PL 151,51 €), la tondeuse pro 200 W (DE 40,27 €), les ciseaux électriques (PL 123,39 €) → **tout le cœur machines est couvert en UE**
- **≈ 20 sourçables Chine** : tissus, consommables, petits accessoires — délais annoncés 6–11 j (Colissimo/logistique AliExpress), marges 2–4×, preuve sociale 4,5–5,0
- **5 non viables** : laine NZ (≈ 40 € rendu vs 13,99 € chez eux), cadres 70/90 (port 63 €), fil acrylique unitaire, guide tondeuse pro
- **4 non trouvés / n.a.** : cartes échantillons (à produire), punch needle pro exact, carte cadeau, ateliers

**Trous d'assortiment à assumer au lancement** : laine NZ (le concurrent l'importe en volume hors AliExpress — piste grossiste UE à explorer plus tard) ; cadres bois (options : kit sans cadre = scénario A, page d'aide « fabriquer son cadre », ou sourcing local) ; à noter que la colle n'est vendue par personne — plainte client chez le concurrent aussi.

**Lecture stratégique** : leur modèle = machines chinoises rebrandées ×2,5–4 + consommables stockés localement + pédagogie. Réplicable en dropshipping : machines (UE) + accessoires (CN) + tissus à la découpe. Non réplicable tel quel : consommables lourds/volumineux.

La base de sourcing produit par produit (37 lignes) : voir `../bases/sourcing-tufting.md`.

## Sous-pages

- 🎯 Persona — validé par Hakim le 19/07 (tutoiement) → `boutique-tufting/persona-tufting.md`
- 📄 Notice fournisseur AK — analyse (19/07) → `boutique-tufting/notice-fournisseur-ak-analyse.md`
- 📝 Page produit Kit tufting — brief + draft (19/07) → `boutique-tufting/page-produit-kit-tufting-brief-draft.md`
