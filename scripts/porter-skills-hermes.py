#!/usr/bin/env python3
"""Derive les Skills/roles Hermes de .claude ; --check ne modifie aucun fichier."""
from __future__ import annotations
import argparse
import hashlib
import json
import os
import re
import subprocess
from pathlib import Path

RACINE = Path(__file__).resolve().parent.parent
PROFILS = ('oh-ventures', 'oh-scout', 'oh-ideation', 'oh-filtre', 'oh-demande',
           'oh-sourcing', 'oh-concurrence', 'oh-marge', 'oh-contradicteur')


def empreinte(data):
    return hashlib.sha256(data).hexdigest()


def racine_execution():
    try:
        common = subprocess.check_output(
            ['git', '-C', str(RACINE), 'rev-parse', '--path-format=absolute', '--git-common-dir'],
            text=True, stderr=subprocess.DEVNULL).strip()
        return Path(common).parent
    except (OSError, subprocess.CalledProcessError):
        return RACINE


def generer(nom, role, runtime_root):
    relative = Path('.claude/agents') / f'{nom}.md' if role else Path('.claude/skills') / nom / 'SKILL.md'
    src = RACINE / relative
    texte = src.read_text(encoding='utf-8')
    m = re.match(r'---\n(.*?)\n---\n(.*)', texte, re.S)
    if not m:
        raise ValueError(f'Frontmatter absent : {relative}')
    desc = re.search(r'^description:\s*(.+)$', m.group(1), re.M)
    if not desc or desc.group(1).strip() in ('|', '>'):
        raise ValueError(f'Description scalaire requise : {relative}')
    description = desc.group(1).strip().strip('"').strip("'")
    bloc = (f'\n## Exécution Hermes\n\nRacine du parc : `{runtime_root}`. '
            'Lire ses `instructions/README.md` si absentes du contexte. '
            'Utiliser les seuls outils et identifiants nécessaires à la tâche, sans afficher de secret. '
            'Un outil manquant bloque les actions dépendantes ; poursuivre le travail indépendant utile. '
            'Comptabiliser les appels payants dans le budget autorisé ; un cache ne rend pas les contrôles live gratuits.\n')
    if role:
        bloc += ('\nRôle délégué : respecter le brief, fournir preuves et limites au responsable. '
                 'Un schéma est obligatoire seulement si le destinataire le consomme. '
                 'Ne pas changer la branche d’un checkout partagé ; livrer dans le worktree de mission.\n')
    prefix = Path('oh-ventures-roles' if role else 'oh-ventures') / nom
    front = ('---\n' + f'name: {nom}\ndescription: {json.dumps(description, ensure_ascii=False)}\n'
             'version: 2.0.0\nauthor: Hakim Ouahabi — OH Ventures\nlicense: proprietary\nplatforms: [macos]\n'
             f'metadata:\n  hermes:\n    source: {relative.as_posix()}\n'
             f'    source_sha256: {empreinte(src.read_bytes())}\n---\n')
    files = {prefix / 'SKILL.md': (front + bloc + '\n' + m.group(2)).encode()}
    if not role:
        for sub in ('references', 'scripts', 'templates', 'assets'):
            for p in sorted((src.parent / sub).rglob('*')):
                if p.is_file() and '__pycache__' not in p.parts and p.suffix != '.pyc':
                    files[prefix / p.relative_to(src.parent)] = p.read_bytes()
    return files


def plan_sync(dest, expected):
    """Preserve unknown files and refuse to destroy locally modified generated files."""
    manifest = dest / '.oh-ventures-generated.json'
    previous = json.loads(manifest.read_text()) if manifest.exists() else {}
    hashes = dict(previous)
    writes, removes = {}, []
    # Partial runs update only selected skill/role folders.
    selected = {Path(p).parts[:2] for p in expected}
    for relative, old_hash in previous.items():
        rp = Path(relative)
        if rp.is_absolute() or '..' in rp.parts:
            raise ValueError('Chemin non sûr dans le manifeste')
        if rp.parts[:2] not in selected:
            continue
        p = dest / rp
        if p.exists() and empreinte(p.read_bytes()) != old_hash:
            if rp not in expected or p.read_bytes() != expected[rp]:
                raise ValueError(f'Copie générée modifiée localement : {p}')
        if rp not in expected:
            removes.append(p)
            hashes.pop(relative, None)
    for relative, data in expected.items():
        p = dest / relative
        hashes[relative.as_posix()] = empreinte(data)
        if not p.exists() or p.read_bytes() != data:
            writes[p] = data
    data = (json.dumps(hashes, indent=2, sort_keys=True) + '\n').encode()
    if not manifest.exists() or manifest.read_bytes() != data:
        writes[manifest] = data
    return writes, removes


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('skills', nargs='*')
    ap.add_argument('--tous', action='store_true')
    ap.add_argument('--roles', action='store_true')
    ap.add_argument('--all-profiles', action='store_true', help='synchroniser les neuf profils OH existants')
    ap.add_argument('--check', action='store_true', help='comparaison seule, code 1 si une copie diffère')
    ap.add_argument('--profiles-root', type=Path, default=Path.home()/'.hermes/profiles')
    ap.add_argument('--runtime-root', type=Path, default=racine_execution())
    args = ap.parse_args()
    profils = PROFILS if args.all_profiles else (os.environ.get('HERMES_PROFIL_BOUTIQUES', 'oh-ventures'),)
    if any(not re.fullmatch(r'oh-[a-z0-9-]+', p) for p in profils):
        ap.error('Profil OH invalide')
    expected = {}
    noms = [p.parent.name for p in sorted((RACINE/'.claude/skills').glob('*/SKILL.md'))] if args.tous else args.skills
    if any(not re.fullmatch(r'[a-z0-9-]+', n) for n in noms):
        ap.error('Nom de Skill invalide')
    try:
        for nom in noms:
            expected.update(generer(nom, False, args.runtime_root))
        if args.roles:
            for p in sorted((RACINE/'.claude/agents').glob('*.md')):
                expected.update(generer(p.stem, True, args.runtime_root))
        if not expected:
            ap.error('Indiquer un nom, --tous ou --roles')
        plans = []
        for profil in profils:
            dest = args.profiles_root / profil
            if not dest.is_dir():
                raise ValueError(f'Profil absent, aucun profil créé : {dest}')
            plans.append((profil, *plan_sync(dest/'skills', expected)))
        # Preflight every profile before the first write.
        changed = False
        for profil, writes, removes in plans:
            changed |= bool(writes or removes)
            if not args.check:
                for p,data in writes.items():
                    p.parent.mkdir(parents=True, exist_ok=True)
                    p.write_bytes(data)
                for p in removes:
                    p.unlink()
            print(f'{profil}: {len(writes)} fichiers à actualiser, {len(removes)} anciennes copies générées à retirer')
        return int(args.check and changed)
    except (OSError, ValueError) as exc:
        print(f'ERREUR : {exc}')
        return 2


if __name__ == '__main__':
    raise SystemExit(main())
