#!/usr/bin/env python3
"""Crée et valide les événements éditoriaux NOX.

La règle, le test de significativité et le schéma vivent dans nox/README.md.
Ce script ne fait que garantir le schéma — il n'est jamais une dépendance :
sans lui, copier nox/_templates/evenement.md fait le même travail.
"""

from __future__ import annotations

import argparse
import datetime as dt
import re
import sys
import unicodedata
from pathlib import Path

RACINE = Path(__file__).resolve().parents[1]
EVENEMENTS = RACINE / "nox" / "evenements"
GABARIT = RACINE / "nox" / "_templates" / "evenement.md"

CATEGORIES = ["projet", "boutique", "agent", "automatisation",
              "integration", "api", "methode", "resultat"]
AXES = ["agents", "automatisation", "ecommerce"]
REPOS = ["boutiques-drop", "boutique-pipeline", "dropshipping-product-factory",
         "drop-elite-google-os", "hermes-orchestration", "aucun"]
AGENTS = ["claude-code", "codex", "cursor", "hakim", "hermes"]
STATUTS = ["brut", "retenu", "publie", "ecarte"]


def slugifier(texte: str) -> str:
    texte = unicodedata.normalize("NFKD", texte).encode("ascii", "ignore").decode()
    texte = re.sub(r"[^a-zA-Z0-9]+", "-", texte).strip("-").lower()
    return "-".join(texte.split("-")[:8]) or "evenement"


def frontmatter(chemin: Path) -> dict:
    """Lecture volontairement minimale : pas de dépendance YAML."""
    lignes = chemin.read_text(encoding="utf-8").splitlines()
    if not lignes or lignes[0].strip() != "---":
        return {}
    champs = {}
    for ligne in lignes[1:]:
        if ligne.strip() == "---":
            break
        if ":" not in ligne or ligne.startswith((" ", "\t", "#")):
            continue
        cle, _, valeur = ligne.partition(":")
        valeur = valeur.split("#")[0].strip().strip('"').strip("'")
        champs[cle.strip()] = valeur
    return champs


def creer(args) -> int:
    erreurs = []
    if args.categorie not in CATEGORIES:
        erreurs.append(f"catégorie inconnue : {args.categorie} (attendu : {', '.join(CATEGORIES)})")
    if args.repo not in REPOS:
        erreurs.append(f"repo inconnu : {args.repo} (attendu : {', '.join(REPOS)})")
    if args.agent not in AGENTS:
        erreurs.append(f"agent inconnu : {args.agent} (attendu : {', '.join(AGENTS)})")
    axes = [a.strip() for a in args.axes.split(",") if a.strip()]
    inconnus = [a for a in axes if a not in AXES]
    if not axes:
        erreurs.append("au moins un axe NOX est requis : " + ", ".join(AXES))
    if inconnus:
        erreurs.append(f"axe(s) inconnu(s) : {', '.join(inconnus)} (attendu : {', '.join(AXES)})")
    try:
        date = dt.date.fromisoformat(args.date)
    except ValueError:
        erreurs.append(f"date invalide : {args.date} (format AAAA-MM-JJ)")
        date = None
    if erreurs:
        for e in erreurs:
            print(f"ERREUR : {e}", file=sys.stderr)
        return 1

    EVENEMENTS.mkdir(parents=True, exist_ok=True)
    base = f"{date.isoformat()}-{slugifier(args.titre)}"
    chemin = EVENEMENTS / f"{base}.md"
    n = 2
    while chemin.exists():
        chemin = EVENEMENTS / f"{base}-{n}.md"
        n += 1

    corps = GABARIT.read_text(encoding="utf-8").split("---", 2)[2].lstrip("\n")
    corps = corps.replace("{{titre}}", args.titre)
    entete = "\n".join([
        "---",
        "type: evenement-nox",
        f"date: {date.isoformat()}",
        f"categorie: {args.categorie}",
        f'titre: "{args.titre}"',
        f"projet: {args.projet}",
        f"repo: {args.repo}",
        f"axes: [{', '.join(axes)}]",
        f"agent: {args.agent}",
        "statut_editorial: brut",
        f"commit: {args.commit or ''}".rstrip(),
        "---",
        "",
    ])
    chemin.write_text(entete + corps, encoding="utf-8")
    print(chemin.relative_to(RACINE))
    print("→ ouvrir le fichier et remplir le corps, « Le détail qui fait le contenu » en premier.",
          file=sys.stderr)
    return 0


def valider() -> int:
    if not EVENEMENTS.exists():
        print("aucun événement", file=sys.stderr)
        return 0
    problemes = []
    fichiers = sorted(EVENEMENTS.glob("*.md"))
    for f in fichiers:
        champs = frontmatter(f)
        nom = f.name
        if champs.get("type") != "evenement-nox":
            problemes.append(f"{nom} : frontmatter absent ou type != evenement-nox")
            continue
        if champs.get("categorie") not in CATEGORIES:
            problemes.append(f"{nom} : categorie « {champs.get('categorie')} » hors liste")
        if champs.get("repo") not in REPOS:
            problemes.append(f"{nom} : repo « {champs.get('repo')} » hors liste")
        if champs.get("statut_editorial") not in STATUTS:
            problemes.append(f"{nom} : statut_editorial « {champs.get('statut_editorial')} » hors liste")
        axes = [a.strip() for a in champs.get("axes", "").strip("[]").split(",") if a.strip()]
        if not axes or any(a not in AXES for a in axes):
            problemes.append(f"{nom} : axes « {champs.get('axes')} » invalides")
        try:
            dt.date.fromisoformat(champs.get("date", ""))
        except ValueError:
            problemes.append(f"{nom} : date « {champs.get('date')} » invalide")
        texte = f.read_text(encoding="utf-8")
        bloc = texte.split("## Le détail qui fait le contenu", 1)
        if len(bloc) < 2:
            problemes.append(f"{nom} : section « Le détail qui fait le contenu » absente")
        elif not [l for l in bloc[1].split("##")[0].splitlines()
                  if l.strip() and not l.strip().startswith("*(")]:
            problemes.append(f"{nom} : « Le détail qui fait le contenu » vide — c'est la seule section irrécupérable")
    for p in problemes:
        print(f"ERREUR : {p}", file=sys.stderr)
    print(f"{len(fichiers)} événement(s), {len(problemes)} problème(s)")
    return 1 if problemes else 0


def main() -> int:
    p = argparse.ArgumentParser(description="Événements éditoriaux NOX — règle : nox/README.md")
    p.add_argument("--valider", action="store_true", help="contrôle tout le corpus et sort en erreur si besoin")
    p.add_argument("--categorie", choices=CATEGORIES)
    p.add_argument("--titre")
    p.add_argument("--projet")
    p.add_argument("--repo", choices=REPOS, default="boutiques-drop")
    p.add_argument("--axes", default="", help="liste séparée par des virgules : " + ", ".join(AXES))
    p.add_argument("--agent", choices=AGENTS, default="claude-code")
    p.add_argument("--date", default=dt.date.today().isoformat())
    p.add_argument("--commit", default="")
    args = p.parse_args()
    if args.valider:
        return valider()
    manquants = [n for n in ("categorie", "titre", "projet") if not getattr(args, n)]
    if manquants:
        p.error("champs requis manquants : --" + ", --".join(manquants))
    return creer(args)


if __name__ == "__main__":
    sys.exit(main())
