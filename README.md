# Boutiques Drop — hub OH Ventures

Hub central du projet e-commerce de Hakim (OH Ventures) : boutiques Shopify dropshipping France. **GitHub est la source de vérité** — tout ce qui est modifié localement est commité et poussé (règle détaillée dans [CLAUDE.md](CLAUDE.md)).

## Les 3 repos du projet

| Repo | Contenu | Local |
|---|---|---|
| **[boutiques-drop](https://github.com/HakimOuah/boutiques-drop)** (ce repo) | Hub : skills & agents Claude, mémoire, export Notion, boutiques historiques, docs transverses | `~/Documents/Boutiques drop/` |
| **[boutique-pipeline](https://github.com/HakimOuah/boutique-pipeline)** | Pipeline de recherche produit actif : registre des candidats, chasse aux clusters (Claude + Codex), rapports de phases, boutiques Tufting & Seiko Mod | `~/Documents/Boutiques drop/boutique-pipeline/` |
| **[dropshipping-product-factory](https://github.com/HakimOuah/dropshipping-product-factory)** | Ancienne usine à produits (« New project ») : playbook recherche, broyeur DropPilot, fiches produits, outputs de recherches (images) | `~/Documents/Boutiques drop/New project/` |

## Contenu de ce hub

- **`.claude/`** — la configuration Claude du projet : skills (`recherche-produit`, `chasse-clusters`, `qualifie-idees`, `gmc-acceptance`, `shopping-scaling`) et les 9 sous-agents du pipeline (phase0 à phase5, sonde-prix, critique-candidat, mineur-brandsearch).
- **`memoire/`** — copie versionnée de la mémoire persistante de Claude (`~/.claude/projects/-Users-Hakim-Documents-Boutiques-drop/memory/`). Synchronisée par `scripts/sync-memoire.sh`. `MEMORY.md` est l'index.
- **`notion-export/`** — export markdown du workspace Notion (hub Pipeline Boutiques Drop, bases Boutiques / Recherches produit / Tickets de lancement, campement type, modèles Horizon). Notion reste le dashboard visuel ; l'export est le backup versionné.
- **`ecommerce-dropshipping/`** — projet Next.js d'outillage + analyses (DataForSEO, baromètres Amazon).
- **`Bien Brulé/`**, **`Canapé enfant/`**, **`lihyl-lancement/`** — dossiers historiques des boutiques passées (Lihyl : leçon « niche brûlée », voir mémoire).
- **`CONTEXTE-MEMOIRE-pour-Codex.md`** — contexte historique transmis à Codex.
- **`scripts/`** — utilitaires du hub (`sync-memoire.sh`).

## Installer sur une nouvelle machine

```bash
mkdir -p ~/Documents && cd ~/Documents
git clone https://github.com/HakimOuah/boutiques-drop.git "Boutiques drop"
cd "Boutiques drop"
git clone https://github.com/HakimOuah/boutique-pipeline.git
git clone https://github.com/HakimOuah/dropshipping-product-factory.git "New project"
```

Puis ouvrir Claude Code dans `~/Documents/Boutiques drop/` : les skills et agents sont dans `.claude/`, la mémoire de référence est consultable dans `memoire/` (la mémoire vivante de Claude se reconstruira localement ; `memoire/` sert de sauvegarde et de référence).

## Ce qui n'est PAS versionné

Secrets (`.env`, `dataforseo_analysis/cache.json` — contient une clé API), `node_modules/`, environnements Python, `scratchpad/` (jetable), `settings.local.json` (permissions propres à la machine).
