---
name: skills-sh-ecommerce-installes
description: "Skills communautaires skills.sh installés en global (~/.claude/skills) pour le e-commerce — CRO, copywriting, persona, UI/UX, brand kit, Liquid"
metadata: 
  node_type: memory
  type: reference
  originSessionId: dd34dfb2-47bc-4f0b-a40a-fced520209ba
  modified: 2026-07-26T14:07:49.048Z
---

Installés le 26/07/2026 via `npx skills add <owner/repo> -g -a claude-code -s <skill> -y` (flags `-s` répétés, la syntaxe virgule ne marche pas). Tous en global `~/.claude/skills/`, donc disponibles dans toutes les sessions.

- **coreyhaines31/marketingskills** (pack de référence, 48 skills dispo) : installés `cro`, `copywriting`, `marketing-psychology`, `customer-research` (personas/JTBD — complète [[persona-obligatoire-copywriting]]), `ab-testing`, `emails`, `offers`, `popups`, `competitor-profiling`, `analytics`, `pricing`, `ads`, `ad-creative`. ⚠️ Les noms de skills du repo diffèrent parfois des slugs skills.sh (`popups` pas `popup-cro`, `pricing` pas `pricing-strategy`, `analytics` pas `analytics-tracking`) — en cas d'échec silencieux d'install, vérifier le nom réel avec `-l`.
- **higgsfield-ai/skills** (officiel, exploite le MCP Higgsfield connecté) : `higgsfield-product-photoshoot` (visuels produit sans prompt freehand — répond au problème faux logos de [[shopify-canal-et-visuels-ia]]), `higgsfield-marketplace-cards` (images de fiche produit), `higgsfield-generate` (routage modèles, UGC, unboxing)
- `ads` + `ad-creative` (Corey Haines) remplacent en profondeur les skills maison `google-ads-launcher`/`meta-ads-creator` : 487+421 lignes + 18 playbooks de référence (google-search-playbook, meta-decision-system, hook-system, static-ad-templates, conversion-tracking…), playbook Meta ère Andromeda 2026. Les skills maison restent la couche « règles Hakim » (budgets 15-20 €/j, Shopping Standard d'abord, liste de négatifs FR, seuils ROAS) : les invoquer ENSEMBLE.
- **nextlevelbuilder/ui-ux-pro-max-skill** : `ui-ux-pro-max` (base locale 84 styles, 192 palettes, 74 paires fonts, 98 guidelines UX)
- **leonxlnx/taste-skill** : `brandkit` (brand boards / identité — utile phase DA, cf [[da-creative-pas-premium-fade]])
- **shopify/shopify-ai-toolkit** : `shopify-liquid` (thèmes Liquid)
- Pack Vercel `vercel-labs/agent-skills` (9 skills dont `web-design-guidelines`, `deploy-to-vercel`) installé la veille.

Intégrés au [[campement-type-lancement-boutique]] le 26/07/2026 : les tickets 02, 03, 07, 08, 09, 10, 12b, 15 et 16 du Kanban modèle ont une section « Skills à invoquer » (persona → customer-research/marketing-psychology/competitor-profiling, charte → brandkit/ui-ux-pro-max, prix → pricing [×1,3 reste la loi], images → higgsfield-product-photoshoot/marketplace-cards/generate, PDP/home → copywriting/cro/offers/shopify-liquid, réglages → analytics, QA → web-design-guidelines). Une règle transverse sur la page campement couvre le post-lancement : ads + ad-creative TOUJOURS avec google-ads-launcher/meta-ads-creator maison ; popups + klaviyo-flow-builder pour la capture e-mail.

Écarté : `nexscope-ai/ecommerce-skills` (frontmatter cassé, rejeté par le CLI) ; skills de recherche produit du registre inférieurs au pipeline maison. Gestion : `npx skills ls`, `npx skills update`, `npx skills remove`.
