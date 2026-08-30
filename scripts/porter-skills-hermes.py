#!/usr/bin/env python3
"""Porte les skills du parc vers Hermes, sans les dupliquer a la main.

La source de verite reste `.claude/skills/<nom>/` — un seul endroit ou une
regle se modifie. Ce script en derive la version Hermes dans
`~/.hermes/skills/oh-ventures/<nom>/`, en ajoutant le frontmatter attendu par
Hermes et un bloc d'execution (toolsets, chemins absolus, chargement des
identifiants) que Claude Code n'a pas besoin de lire mais qu'Hermes exige.

Lecon de GROK-BOT-FLEET.md : une instruction recopiee a la main ne se propage
pas. Celle-ci se regenere.

    python3 scripts/porter-skills-hermes.py --tous
    python3 scripts/porter-skills-hermes.py recherche-mots-cles
"""
from __future__ import annotations

import argparse
import re
import shutil
import sys
from pathlib import Path

RACINE = Path(__file__).resolve().parent.parent
SOURCE = RACINE / ".claude" / "skills"
CIBLE = Path.home() / ".hermes" / "skills" / "oh-ventures"

# Les agents .claude/agents/ ne sont pas des skills : ce sont des ROLES, les
# prompts que l'orchestrateur donne a un sous-agent lance par delegate_task.
# Hermes n'a pas de format d'agent — on les expose donc comme skills dans un
# espace de noms distinct, que le sous-agent charge lui-meme au demarrage.
# L'identifiant reste celui de l'agent, pour que les renvois entre skills
# (<< delegue a phase4-sourcing >>) continuent de resoudre.
SOURCE_ROLES = RACINE / ".claude" / "agents"
CIBLE_ROLES = Path.home() / ".hermes" / "skills" / "oh-ventures-roles"

# Outils dont chaque skill a besoin cote Hermes. Volontairement large : Hermes
# intersecte avec ce que la session autorise, il ne peut pas gagner d'outil ici.
TOOLSETS = "terminal, file, web, browser, todo"

BLOC = """
## Exécution sous Hermes

**Outils requis :** {toolsets}. Si l'un manque, dis-le et arrête-toi — pas de mode dégradé
silencieux.

**Racine du parc :** `{racine}`
Les chemins cités plus bas sont relatifs à cette racine. Hermes ne partage pas le répertoire de
travail de Claude Code : utilise des chemins absolus, ou place-toi explicitement.

**Identifiants.** Ils vivent dans des `.env` jamais versionnés, à charger avant tout appel :

```bash
cd "{racine}/ecommerce-dropshipping" && set -a && . ./.env && set +a   # DataForSEO
cd "{racine}/boutique-pipeline"      && set -a && . ./.env && set +a   # Shopify
```

Aucune valeur n'est codée en dur nulle part. Un script qui manque d'identifiant échoue avec le
nom exact de la variable attendue — lis le message, ne devine pas.

**Coût.** `kw_dfs.py` met en cache sur disque : relancer une graine déjà interrogée coûte 0.
Une graine neuve coûte ~0,13 USD la page de 1 000 lignes. Annonce le coût dans ton dépôt.

**Dépôt.** Écris ton rapport dans un fichier du dépôt, pas seulement dans la conversation —
la conversation se perd, le fichier est versionné.

---
"""


BLOC_ROLE = """
## Ce que tu es

Tu es lancé comme **sous-agent**, dans un contexte vierge : tu ne sais rien de la conversation qui
t'a créé, et c'est voulu. Tout ce dont tu as besoin est ci-dessous ou dans les fichiers cités.

Ton périmètre est **fermé**. Les interdits de ce rôle ne sont pas des recommandations : ils
existent parce qu'un agent qui déborde produit un résultat que personne ne peut plus vérifier.
Si la tâche demandée sort de ce périmètre, dis-le et arrête-toi plutôt que de l'élargir.

Ta réponse finale **est** le livrable — elle sera lue par une machine, pas par un humain. Respecte
le format de dépôt demandé. Si un schéma de sortie t'a été imposé, il prime sur tout le reste.

**Racine du parc :** `{racine}`
Utilise des chemins absolus : tu ne partages le répertoire de travail de personne.

---
"""


def porter_role(nom: str) -> bool:
    src = SOURCE_ROLES / f"{nom}.md"
    if not src.exists():
        print(f"  ✗ {nom} — introuvable ({src})")
        return False
    texte = src.read_text(encoding="utf-8")
    m = re.match(r"---\n(.*?)\n---\n(.*)", texte, re.S)
    if not m:
        print(f"  ✗ {nom} — pas de frontmatter")
        return False
    champs = dict(re.findall(r"^(\w+):\s*(.*)$", m.group(1), re.M))
    description = champs.get("description", "").strip().replace('"', "'")
    corps = m.group(2)

    # `model:` et `tools:` sont propres a Claude Code — Hermes ne sait pas
    # choisir un modele par sous-agent, et les outils sont herites du parent.
    nouveau = (
        "---\n"
        f"name: {nom}\n"
        f'description: "{description}"\n'
        "version: 1.0.0\n"
        "author: Hakim Ouahabi — OH Ventures\n"
        "license: proprietary\n"
        "platforms: [macos]\n"
        "metadata:\n"
        "  hermes:\n"
        "    tags: [OH-Ventures, Role, Sous-agent]\n"
        f"    source: .claude/agents/{nom}.md\n"
        "---\n\n"
        f"# Rôle — {nom}\n"
        + BLOC_ROLE.format(racine=RACINE)
    )
    dest = CIBLE_ROLES / nom
    dest.mkdir(parents=True, exist_ok=True)
    (dest / "SKILL.md").write_text(nouveau + corps, encoding="utf-8")
    print(f"  ✓ {nom} → {dest}")
    return True


def porter(nom: str) -> bool:
    src = SOURCE / nom / "SKILL.md"
    if not src.exists():
        print(f"  ✗ {nom} — introuvable ({src})")
        return False

    texte = src.read_text(encoding="utf-8")
    m = re.match(r"---\n(.*?)\n---\n(.*)", texte, re.S)
    if not m:
        print(f"  ✗ {nom} — pas de frontmatter")
        return False
    tete, corps = m.group(1), m.group(2)

    champs = dict(re.findall(r"^(\w+):\s*(.*)$", tete, re.M))
    description = champs.get("description", "").strip().replace('"', "'")

    nouveau = (
        "---\n"
        f"name: {nom}\n"
        f'description: "{description}"\n'
        "version: 1.0.0\n"
        "author: Hakim Ouahabi — OH Ventures\n"
        "license: proprietary\n"
        "platforms: [macos]\n"
        "metadata:\n"
        "  hermes:\n"
        "    tags: [OH-Ventures, E-commerce, France]\n"
        "    source: .claude/skills/" + nom + "/SKILL.md\n"
        "---\n"
    )

    # Le bloc d'execution s'insere apres le titre H1, avant le contenu metier.
    bloc = BLOC.format(toolsets=TOOLSETS, racine=RACINE)
    if re.search(r"^# .+$", corps, re.M):
        corps = re.sub(r"^(# .+\n)", r"\1" + bloc, corps, count=1, flags=re.M)
    else:
        corps = bloc + corps

    dest = CIBLE / nom
    dest.mkdir(parents=True, exist_ok=True)
    (dest / "SKILL.md").write_text(nouveau + corps, encoding="utf-8")

    # references/ et scripts/ eventuels
    for sous in ("references", "scripts", "templates"):
        o = SOURCE / nom / sous
        if o.is_dir():
            shutil.rmtree(dest / sous, ignore_errors=True)
            shutil.copytree(o, dest / sous)

    print(f"  ✓ {nom} → {dest}")
    return True


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("skills", nargs="*")
    ap.add_argument("--tous", action="store_true")
    ap.add_argument("--roles", action="store_true", help="porte les agents .claude/agents/")
    a = ap.parse_args()

    if a.roles:
        noms = [f.stem for f in sorted(SOURCE_ROLES.glob("*.md"))]
        print(f"Portage des rôles vers {CIBLE_ROLES}")
        return 0 if all([porter_role(n) for n in noms]) else 1

    noms = ([d.name for d in sorted(SOURCE.iterdir()) if (d / "SKILL.md").exists()]
            if a.tous else a.skills)
    if not noms:
        print("Rien à porter. Donne un nom de skill ou --tous.")
        print("Disponibles :", ", ".join(d.name for d in sorted(SOURCE.iterdir()) if d.is_dir()))
        return 1
    print(f"Portage vers {CIBLE}")
    return 0 if all([porter(n) for n in noms]) else 1


if __name__ == "__main__":
    sys.exit(main())
