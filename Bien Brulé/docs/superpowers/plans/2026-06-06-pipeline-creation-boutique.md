# Pipeline création boutique — Plan d'implémentation (starter-kit)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire le starter-kit réutilisable (Approche C : playbook + scripts ciblés) qui sert de socle à la création de toute nouvelle boutique Shopify mono-produit.

**Architecture:** Un dépôt autonome `boutique-pipeline/` contenant (1) des scripts Python testés qui automatisent les transformations *offline* (charte→thème, validation, scaffolding d'un projet boutique), (2) un `PLAYBOOK.md` qui orchestre les 6 phases, (3) des templates de livrables et des fiches de référence (checklist GMC, config livraison FR/BE/CH, conventions de nommage, guide de prompts image). Les étapes qui nécessitent l'API Shopify ou une décision créative restent pilotées par l'IA via le playbook, pas par des scripts (évite la complexité d'auth et garde l'humain aux 3 portes).

**Tech Stack:** Python 3.9 (stdlib uniquement : `json`, `pathlib`, `argparse`, `re`), `pytest` pour les tests, `git` pour le versioning. Thème cible : Self Made / Fullstack (OS 2.0).

**Emplacement du kit :** `/Users/Hakim/boutique-pipeline/` (nouveau dépôt git, séparé de la boutique Bien Brûlé).

---

## Structure de fichiers

```
/Users/Hakim/boutique-pipeline/
  README.md                          # Quoi/pourquoi + démarrage rapide
  PLAYBOOK.md                        # Orchestration des 6 phases (réf. spec)
  pytest.ini                         # config pytest
  schema/
    brand-tokens.schema.json         # schéma JSON de la charte
  scripts/
    __init__.py
    validate_tokens.py               # valide brand-tokens.json
    tokens_to_theme.py               # charte -> settings_data.json (cœur)
    new_boutique.py                  # scaffold d'un projet boutique
  templates/
    research-brief.template.md
    sitemap.template.md
    shot-list.template.md
  reference/
    gmc-checklist.md                 # audit Merchant Center 12 points
    delivery-fr-be-ch.md             # config livraison (GraphQL)
    naming-conventions.md            # SKU / ALT / SEO
    image-prompt-guide.md            # prompts ChatGPT image dans la charte
  examples/
    brand-tokens.example.json
  tests/
    __init__.py
    test_validate_tokens.py
    test_tokens_to_theme.py
    test_new_boutique.py
```

**Responsabilité de chaque script :**
- `validate_tokens.py` — pur : vérifie qu'un `brand-tokens.json` respecte le schéma (couleurs hex, polices présentes). Aucune dépendance API.
- `tokens_to_theme.py` — pur : transforme une charte en fragment de `settings_data.json` (color scheme + polices). Cœur réutilisable du kit.
- `new_boutique.py` — pur : crée l'arborescence d'un nouveau projet boutique (copie les templates de livrables + charte vierge).

---

## Task 0 : Initialiser le dépôt du kit

**Files:**
- Create: `/Users/Hakim/boutique-pipeline/README.md`
- Create: `/Users/Hakim/boutique-pipeline/pytest.ini`
- Create: `/Users/Hakim/boutique-pipeline/scripts/__init__.py`
- Create: `/Users/Hakim/boutique-pipeline/tests/__init__.py`

- [ ] **Step 1 : Créer le dossier et init git**

```bash
mkdir -p /Users/Hakim/boutique-pipeline/{schema,scripts,templates,reference,examples,tests}
cd /Users/Hakim/boutique-pipeline && git init
```

- [ ] **Step 2 : Créer les fichiers de base**

`pytest.ini` :
```ini
[pytest]
testpaths = tests
python_files = test_*.py
```

`scripts/__init__.py` : (fichier vide)

`tests/__init__.py` : (fichier vide)

`README.md` :
```markdown
# Boutique Pipeline — Starter-kit Shopify mono-produit

Socle réutilisable pour lancer une boutique Shopify (Approche C : playbook + scripts).

## Démarrage
1. `python3 scripts/new_boutique.py <nom-projet>` — crée un dossier projet avec les livrables vierges.
2. Suivre `PLAYBOOK.md` phase par phase.
3. `python3 scripts/validate_tokens.py <projet>/brand-tokens.json`
4. `python3 scripts/tokens_to_theme.py <projet>/brand-tokens.json <theme>/config/settings_data.json`

## Tests
`python3 -m pytest`
```

- [ ] **Step 3 : Vérifier que pytest tourne (0 test)**

Run: `cd /Users/Hakim/boutique-pipeline && python3 -m pytest`
Expected: `no tests ran` (exit 5), pas d'erreur de collecte.

- [ ] **Step 4 : Commit**

```bash
cd /Users/Hakim/boutique-pipeline
git add README.md pytest.ini scripts/__init__.py tests/__init__.py
git commit -m "chore: init boutique-pipeline starter-kit"
```

---

## Task 1 : Schéma de charte + validation

**Files:**
- Create: `/Users/Hakim/boutique-pipeline/schema/brand-tokens.schema.json`
- Create: `/Users/Hakim/boutique-pipeline/examples/brand-tokens.example.json`
- Create: `/Users/Hakim/boutique-pipeline/scripts/validate_tokens.py`
- Test: `/Users/Hakim/boutique-pipeline/tests/test_validate_tokens.py`

- [ ] **Step 1 : Créer le schéma et l'exemple**

`schema/brand-tokens.schema.json` :
```json
{
  "required_top": ["brand", "colors", "typography", "tone"],
  "required_colors": ["background", "text", "accent", "accent_text", "secondary"],
  "required_typography": ["heading", "subheading", "body"],
  "hex_color_fields": ["background", "text", "accent", "accent_text", "secondary"]
}
```

`examples/brand-tokens.example.json` (basé sur Bien Brûlé) :
```json
{
  "brand": { "name": "Bien Brûlé", "baseline": "Le café nomade, sans compromis." },
  "colors": {
    "background": "#FFFFFF",
    "text": "#2B1D14",
    "accent": "#B5651D",
    "accent_text": "#FFFFFF",
    "secondary": "#7C8471"
  },
  "typography": {
    "heading": "playfair_display_n5",
    "subheading": "work_sans_n4",
    "body": "work_sans_n4"
  },
  "tone": { "register": "vouvoiement premium chaleureux", "avoid": ["meilleur", "incroyable", "révolutionnaire"] }
}
```

- [ ] **Step 2 : Écrire le test qui échoue**

`tests/test_validate_tokens.py` :
```python
import json
from pathlib import Path
from scripts.validate_tokens import validate_tokens

ROOT = Path(__file__).resolve().parent.parent
SCHEMA = json.loads((ROOT / "schema/brand-tokens.schema.json").read_text())
EXAMPLE = json.loads((ROOT / "examples/brand-tokens.example.json").read_text())


def test_valid_tokens_return_no_errors():
    assert validate_tokens(EXAMPLE, SCHEMA) == []


def test_missing_top_key_detected():
    bad = {k: v for k, v in EXAMPLE.items() if k != "colors"}
    errors = validate_tokens(bad, SCHEMA)
    assert any("colors" in e for e in errors)


def test_missing_color_detected():
    bad = json.loads(json.dumps(EXAMPLE))
    del bad["colors"]["accent"]
    errors = validate_tokens(bad, SCHEMA)
    assert any("accent" in e for e in errors)


def test_invalid_hex_detected():
    bad = json.loads(json.dumps(EXAMPLE))
    bad["colors"]["accent"] = "B5651D"  # missing #
    errors = validate_tokens(bad, SCHEMA)
    assert any("accent" in e and "hex" in e.lower() for e in errors)


def test_missing_typography_detected():
    bad = json.loads(json.dumps(EXAMPLE))
    del bad["typography"]["heading"]
    errors = validate_tokens(bad, SCHEMA)
    assert any("heading" in e for e in errors)
```

- [ ] **Step 3 : Lancer le test (échec attendu)**

Run: `cd /Users/Hakim/boutique-pipeline && python3 -m pytest tests/test_validate_tokens.py -v`
Expected: FAIL — `ModuleNotFoundError: scripts.validate_tokens`

- [ ] **Step 4 : Écrire l'implémentation minimale**

`scripts/validate_tokens.py` :
```python
import json
import re
import sys
from pathlib import Path

HEX_RE = re.compile(r"^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$")


def validate_tokens(tokens: dict, schema: dict) -> list:
    errors = []
    for key in schema["required_top"]:
        if key not in tokens:
            errors.append(f"Clé manquante au niveau racine : '{key}'")
    colors = tokens.get("colors", {})
    for key in schema["required_colors"]:
        if key not in colors:
            errors.append(f"Couleur manquante : '{key}'")
    for key in schema["hex_color_fields"]:
        val = colors.get(key)
        if val is not None and not HEX_RE.match(val):
            errors.append(f"Couleur '{key}' n'est pas un hex valide (#RRGGBB ou #RRGGBBAA) : {val}")
    typo = tokens.get("typography", {})
    for key in schema["required_typography"]:
        if key not in typo:
            errors.append(f"Police manquante : '{key}'")
    return errors


def main(argv):
    if len(argv) != 2:
        print("Usage: validate_tokens.py <brand-tokens.json>", file=sys.stderr)
        return 2
    root = Path(__file__).resolve().parent.parent
    schema = json.loads((root / "schema/brand-tokens.schema.json").read_text())
    tokens = json.loads(Path(argv[1]).read_text())
    errors = validate_tokens(tokens, schema)
    if errors:
        for e in errors:
            print("ERREUR:", e)
        return 1
    print("OK : charte valide.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
```

- [ ] **Step 5 : Lancer le test (succès attendu)**

Run: `cd /Users/Hakim/boutique-pipeline && python3 -m pytest tests/test_validate_tokens.py -v`
Expected: PASS (5 tests)

- [ ] **Step 6 : Commit**

```bash
cd /Users/Hakim/boutique-pipeline
git add schema/brand-tokens.schema.json examples/brand-tokens.example.json scripts/validate_tokens.py tests/test_validate_tokens.py
git commit -m "feat: brand-tokens schema and validator"
```

---

## Task 2 : Mapper charte → thème (cœur du kit)

**Files:**
- Create: `/Users/Hakim/boutique-pipeline/scripts/tokens_to_theme.py`
- Test: `/Users/Hakim/boutique-pipeline/tests/test_tokens_to_theme.py`

Le mapper produit un color scheme Self Made/Fullstack complet à partir des rôles de couleur, et les handles de police Shopify. Les bordures réutilisent la couleur texte avec un suffixe alpha (`17`/`30`), exactement comme la charte Bien Brûlé observée dans `settings_data.json`.

- [ ] **Step 1 : Écrire le test qui échoue**

`tests/test_tokens_to_theme.py` :
```python
import json
from pathlib import Path
from scripts.tokens_to_theme import build_scheme, font_settings, apply_tokens

ROOT = Path(__file__).resolve().parent.parent
TOKENS = json.loads((ROOT / "examples/brand-tokens.example.json").read_text())


def test_scheme_maps_core_roles():
    s = build_scheme(TOKENS["colors"])
    assert s["background"] == "#FFFFFF"
    assert s["foreground"] == "#2B1D14"
    assert s["primary_button_background"] == "#B5651D"
    assert s["primary_button_text"] == "#FFFFFF"
    assert s["stars_icons_color"] == "#B5651D"


def test_scheme_borders_use_text_with_alpha():
    s = build_scheme(TOKENS["colors"])
    assert s["border"] == "#2B1D1417"
    assert s["secondary_button_border"] == "#2B1D1430"


def test_scheme_has_all_required_keys():
    s = build_scheme(TOKENS["colors"])
    required = {
        "background", "foreground", "border", "stars_icons_color",
        "primary_button_background", "primary_button_text", "primary_button_border",
        "secondary_button_background", "secondary_button_text", "secondary_button_border",
        "primary_badge_background", "primary_badge_text", "primary_badge_border",
        "secondary_badge_background", "secondary_badge_text", "secondary_badge_border",
        "input_background", "input_text_color", "input_border_color",
        "selected_input_background", "selected_input_text_color", "selected_input_border_color",
        "variant_background_color", "variant_text_color", "variant_border_color",
        "selected_variant_background_color", "selected_variant_text_color", "selected_variant_border_color",
        "tab_background_color", "tab_text_color", "tab_border_color",
        "selected_tab_background_color", "selected_tab_text_color", "selected_tab_border_color",
    }
    assert required.issubset(set(s.keys()))


def test_font_settings_map_typography():
    f = font_settings(TOKENS["typography"])
    assert f["type_heading_font"] == "playfair_display_n5"
    assert f["type_subheading_font"] == "work_sans_n4"
    assert f["type_body_font"] == "work_sans_n4"


def test_apply_tokens_injects_scheme_and_fonts():
    settings = {"current": {"color_schemes": {"scheme-1": {"settings": {"background": "#000000"}}}}}
    out = apply_tokens(TOKENS, settings)
    s1 = out["current"]["color_schemes"]["scheme-1"]["settings"]
    assert s1["background"] == "#FFFFFF"
    assert s1["primary_button_background"] == "#B5651D"
    assert out["current"]["type_heading_font"] == "playfair_display_n5"


def test_apply_tokens_does_not_mutate_input():
    settings = {"current": {"color_schemes": {"scheme-1": {"settings": {"background": "#000000"}}}}}
    apply_tokens(TOKENS, settings)
    assert settings["current"]["color_schemes"]["scheme-1"]["settings"]["background"] == "#000000"
```

- [ ] **Step 2 : Lancer le test (échec attendu)**

Run: `cd /Users/Hakim/boutique-pipeline && python3 -m pytest tests/test_tokens_to_theme.py -v`
Expected: FAIL — `ModuleNotFoundError: scripts.tokens_to_theme`

- [ ] **Step 3 : Écrire l'implémentation minimale**

`scripts/tokens_to_theme.py` :
```python
import copy
import json
import sys
from pathlib import Path


def _alpha(hex6: str, alpha: str) -> str:
    """Couleur #RRGGBB + suffixe alpha (2 hex) -> #RRGGBBAA."""
    return hex6 + alpha


def build_scheme(colors: dict) -> dict:
    bg = colors["background"]
    text = colors["text"]
    accent = colors["accent"]
    accent_text = colors["accent_text"]
    border = _alpha(text, "17")
    soft_border = _alpha(text, "30")
    return {
        "background": bg,
        "foreground": text,
        "border": border,
        "stars_icons_color": accent,
        "primary_button_background": accent,
        "primary_button_text": accent_text,
        "primary_button_border": accent,
        "secondary_button_background": bg,
        "secondary_button_text": accent,
        "secondary_button_border": soft_border,
        "primary_badge_background": bg,
        "primary_badge_text": text,
        "primary_badge_border": border,
        "secondary_badge_background": accent,
        "secondary_badge_text": accent_text,
        "secondary_badge_border": accent,
        "input_background": bg,
        "input_text_color": text,
        "input_border_color": border,
        "selected_input_background": bg,
        "selected_input_text_color": text,
        "selected_input_border_color": accent,
        "variant_background_color": bg,
        "variant_text_color": text,
        "variant_border_color": border,
        "selected_variant_background_color": accent,
        "selected_variant_text_color": accent_text,
        "selected_variant_border_color": accent,
        "tab_background_color": bg,
        "tab_text_color": text,
        "tab_border_color": border,
        "selected_tab_background_color": accent,
        "selected_tab_text_color": accent_text,
        "selected_tab_border_color": accent,
    }


def font_settings(typography: dict) -> dict:
    return {
        "type_heading_font": typography["heading"],
        "type_subheading_font": typography["subheading"],
        "type_body_font": typography["body"],
        "type_primary_font": typography["body"],
    }


def apply_tokens(tokens: dict, settings_data: dict) -> dict:
    out = copy.deepcopy(settings_data)
    current = out.setdefault("current", {})
    scheme = build_scheme(tokens["colors"])
    schemes = current.setdefault("color_schemes", {})
    target = schemes.setdefault("scheme-1", {"settings": {}})
    target.setdefault("settings", {}).update(scheme)
    current.update(font_settings(tokens["typography"]))
    return out


def main(argv):
    if len(argv) < 3:
        print("Usage: tokens_to_theme.py <brand-tokens.json> <settings_data.json> [--out path]", file=sys.stderr)
        return 2
    tokens = json.loads(Path(argv[1]).read_text())
    settings_path = Path(argv[2])
    raw = settings_path.read_text()
    settings_data = json.loads(raw)
    out = apply_tokens(tokens, settings_data)
    out_path = Path(argv[4]) if len(argv) >= 5 and argv[3] == "--out" else settings_path
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
    print(f"OK : charte appliquée -> {out_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
```

- [ ] **Step 4 : Lancer le test (succès attendu)**

Run: `cd /Users/Hakim/boutique-pipeline && python3 -m pytest tests/test_tokens_to_theme.py -v`
Expected: PASS (6 tests)

- [ ] **Step 5 : Commit**

```bash
cd /Users/Hakim/boutique-pipeline
git add scripts/tokens_to_theme.py tests/test_tokens_to_theme.py
git commit -m "feat: brand-tokens to Self Made theme scheme mapper"
```

---

## Task 3 : Scaffolder un nouveau projet boutique

**Files:**
- Create: `/Users/Hakim/boutique-pipeline/scripts/new_boutique.py`
- Test: `/Users/Hakim/boutique-pipeline/tests/test_new_boutique.py`

Dépend des templates de la Task 4. **Cette task doit être exécutée APRÈS la Task 4** (les templates doivent exister pour être copiés). Ordre d'exécution : 0 → 1 → 2 → 4 → 3 → 5 → 6.

- [ ] **Step 1 : Écrire le test qui échoue**

`tests/test_new_boutique.py` :
```python
import json
from scripts.new_boutique import scaffold


def test_scaffold_creates_expected_files(tmp_path):
    project = scaffold("ma-boutique", tmp_path)
    assert (project / "research-brief.md").exists()
    assert (project / "sitemap.md").exists()
    assert (project / "shot-list.md").exists()
    assert (project / "brand-tokens.json").exists()
    assert (project / "content").is_dir()


def test_scaffold_brand_tokens_is_valid_json(tmp_path):
    project = scaffold("ma-boutique", tmp_path)
    data = json.loads((project / "brand-tokens.json").read_text())
    assert "colors" in data and "typography" in data


def test_scaffold_refuses_existing_dir(tmp_path):
    scaffold("ma-boutique", tmp_path)
    try:
        scaffold("ma-boutique", tmp_path)
        assert False, "doit lever FileExistsError"
    except FileExistsError:
        pass
```

- [ ] **Step 2 : Lancer le test (échec attendu)**

Run: `cd /Users/Hakim/boutique-pipeline && python3 -m pytest tests/test_new_boutique.py -v`
Expected: FAIL — `ModuleNotFoundError: scripts.new_boutique`

- [ ] **Step 3 : Écrire l'implémentation minimale**

`scripts/new_boutique.py` :
```python
import json
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEMPLATES = ROOT / "templates"
EXAMPLE_TOKENS = ROOT / "examples/brand-tokens.example.json"


def scaffold(name: str, base_dir: Path) -> Path:
    project = Path(base_dir) / name
    if project.exists():
        raise FileExistsError(f"Le dossier existe déjà : {project}")
    project.mkdir(parents=True)
    (project / "content").mkdir()
    shutil.copy(TEMPLATES / "research-brief.template.md", project / "research-brief.md")
    shutil.copy(TEMPLATES / "sitemap.template.md", project / "sitemap.md")
    shutil.copy(TEMPLATES / "shot-list.template.md", project / "shot-list.md")
    tokens = json.loads(EXAMPLE_TOKENS.read_text())
    tokens["brand"] = {"name": name, "baseline": ""}
    (project / "brand-tokens.json").write_text(json.dumps(tokens, ensure_ascii=False, indent=2) + "\n")
    return project


def main(argv):
    if len(argv) < 2:
        print("Usage: new_boutique.py <nom-projet> [dossier-parent]", file=sys.stderr)
        return 2
    base = Path(argv[2]) if len(argv) >= 3 else Path.cwd()
    project = scaffold(argv[1], base)
    print(f"OK : projet créé -> {project}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
```

- [ ] **Step 4 : Lancer le test (succès attendu)**

Run: `cd /Users/Hakim/boutique-pipeline && python3 -m pytest tests/test_new_boutique.py -v`
Expected: PASS (3 tests)

- [ ] **Step 5 : Commit**

```bash
cd /Users/Hakim/boutique-pipeline
git add scripts/new_boutique.py tests/test_new_boutique.py
git commit -m "feat: scaffolder for new boutique projects"
```

---

## Task 4 : Templates de livrables

**Files:**
- Create: `/Users/Hakim/boutique-pipeline/templates/research-brief.template.md`
- Create: `/Users/Hakim/boutique-pipeline/templates/sitemap.template.md`
- Create: `/Users/Hakim/boutique-pipeline/templates/shot-list.template.md`

- [ ] **Step 1 : Créer `research-brief.template.md`**

```markdown
# Brief de recherche — {{produit}}

## Concurrents (shortlist 4-6)
| # | Nom / URL | Positionnement | Gamme de prix | Codes visuels | Angle différenciant |
|---|-----------|----------------|---------------|---------------|---------------------|
| 1 |  |  |  |  |  |

## Marché
- Cible probable :
- Fourchette de prix observée :
- Panier moyen visé :
- Canaux d'acquisition attendus :

## Codes visuels du marché (à CONTRASTER, pas imiter)
- Couleurs dominantes des concurrents :
- Typographies récurrentes :
- Tonalité éditoriale dominante :

## Angles différenciants retenus
1.
2.
3.

## Produit (extraction fournisseur)
- Specs techniques :
- Variantes :
- Images fournisseur dispo :
```

- [ ] **Step 2 : Créer `sitemap.template.md`**

```markdown
# Arborescence & wireframes — {{marque}}

## Collections
- Produit principal :
- Accessoires :
- Packs :

## Navigation
- Menu principal :
- Footer :

## Templates
- `product.json` (produit principal)
- `product.accessoire.json` (accessoire générique)

## Wireframes (liste de sections — 1 seul CTA dominant par page)
### Accueil
1. hero
2. preuve sociale
3. bénéfices
4. produit phare
5. réassurance
6. FAQ
7. CTA final

### Page produit principal
1. …

### Page accessoire
1. …

### À propos / FAQ / Contact
- …

## Plan de maillage SEO
| Page | Mot-clé cible | Meta title | Meta description |
|------|---------------|-----------|------------------|
| Accueil |  |  |  |
```

- [ ] **Step 3 : Créer `shot-list.template.md`**

```markdown
# Shot-list visuels — {{marque}}

Pour chaque visuel : emplacement, format, rôle, et un prompt prêt à coller dans ChatGPT image.
Voir `reference/image-prompt-guide.md` pour la méthode de rédaction des prompts.

| # | Emplacement (page > section) | Format / ratio | Rôle | Statut | Prompt ChatGPT image |
|---|------------------------------|----------------|------|--------|----------------------|
| 1 | Accueil > hero | 16:9 paysage | émotion via usage | À PRODUIRE |  |
| 2 | Page produit > galerie | 1:1 carré | vendre le produit | À PRODUIRE |  |
| 3 | À propos > lifestyle | 3:2 paysage | preuve d'usage | À PRODUIRE |  |

Légende statut : `FOURNISSEUR` (placeholder ok) / `À PRODUIRE` (photo pro ou ChatGPT image requise).
```

- [ ] **Step 4 : Commit**

```bash
cd /Users/Hakim/boutique-pipeline
git add templates/
git commit -m "feat: deliverable templates (research-brief, sitemap, shot-list)"
```

---

## Task 5 : Fiches de référence réutilisables

**Files:**
- Create: `/Users/Hakim/boutique-pipeline/reference/gmc-checklist.md`
- Create: `/Users/Hakim/boutique-pipeline/reference/delivery-fr-be-ch.md`
- Create: `/Users/Hakim/boutique-pipeline/reference/naming-conventions.md`
- Create: `/Users/Hakim/boutique-pipeline/reference/image-prompt-guide.md`

- [ ] **Step 1 : Créer `gmc-checklist.md` (12 points, rodés sur Bien Brûlé)**

```markdown
# Checklist Google Merchant Center (12 points)

À passer en Phase 6 via les outils MCP Shopify (graphql_query / productUpdate).

1. **Titre produit** — descriptif, mots-clés en tête, cohérent avec le meta title. Pas de superlatif absolu.
2. **Description** — structurée, specs réelles, pas de "meilleur/incroyable/révolutionnaire".
3. **Images** — pas de 220x220 ; au moins une image par variante ; fond propre.
4. **Prix** — cohérent boutique/flux ; devise EUR.
5. **Disponibilité** — stock > 0 sur les produits actifs (sinon "rupture").
6. **Pages légales** — mentions, CGV, confidentialité, retours présentes (rédigées à la main).
7. **Données structurées** — product schema actif sur la page produit.
8. **Variantes** — options déclarées ; image par variante.
9. **GTIN / MPN** — renseignés quand dispo ; flag dans l'app canal Google (manuel).
10. **SKU** — convention de nommage respectée (voir naming-conventions.md).
11. **ALT images** — texte alternatif descriptif sur chaque image.
12. **Cohérence** — specs sans contradiction (ex. température/temps), CTA unique par page.
```

- [ ] **Step 2 : Créer `delivery-fr-be-ch.md`**

```markdown
# Configuration livraison FR / BE / CH

Zones par défaut héritées de Bien Brûlé. À appliquer via MCP `graphql_mutation`
(`deliveryProfileUpdate`) en Phase 6. Récupérer d'abord le profil et le locationGroup
via `graphql_query` sur `deliveryProfiles`.

Pays par défaut (ISO) : `FR`, `BE`, `CH`, chacun avec `includeAllProvinces: true`.

Exemple de mutation (à adapter aux IDs réels du profil/zone) :
```graphql
mutation deliveryProfileUpdate($id: ID!, $profile: DeliveryProfileInput!) {
  deliveryProfileUpdate(id: $id, profile: $profile) {
    profile { id }
    userErrors { field message }
  }
}
```
Variables (structure) :
```json
{
  "id": "gid://shopify/DeliveryProfile/XXXX",
  "profile": {
    "locationGroupsToUpdate": [{
      "id": "gid://shopify/DeliveryProfileLocationGroup/XXXX",
      "zonesToUpdate": [{
        "id": "gid://shopify/DeliveryLocationGroupZone/XXXX",
        "countries": [
          { "code": "FR", "includeAllProvinces": true },
          { "code": "BE", "includeAllProvinces": true },
          { "code": "CH", "includeAllProvinces": true }
        ]
      }]
    }]
  }
}
```
Tarifs/seuils : répliquer le modèle Bien Brûlé, ajuster selon le panier moyen du produit.
```

- [ ] **Step 3 : Créer `naming-conventions.md`**

```markdown
# Conventions de nommage

## SKU
Format : `<CAT>-<PRODUIT>-<VARIANTE>` en majuscules, sans accents.
- CAT : `MACH` (machine), `MOUL` (moulin), `ACC` (accessoire), `MUG`, `PACK`.
- Exemple : `ACC-SUPPORT-PLIABLE`, `MACH-AUTO-NOIR`.

## ALT images
Descriptif court, FR, mentionne le produit + contexte/usage.
- Exemple : "Machine à café portable auto-chauffante posée sur un bureau".

## SEO
- Meta title ≤ 60 caractères, mot-clé en tête, marque en fin.
- Meta description ≤ 155 caractères, 1 bénéfice + 1 CTA.
- Le titre produit doit correspondre au meta title.
```

- [ ] **Step 4 : Créer `image-prompt-guide.md`**

```markdown
# Guide de rédaction des prompts ChatGPT image

Objectif : générer des visuels dans la charte qui vendent le produit ou font passer
une émotion via son usage.

## Structure d'un bon prompt
1. **Sujet** : le produit + ce qu'il fait.
2. **Mise en scène / contexte d'usage** : lieu, moment, personne (sans visage reconnaissable).
3. **Émotion visée** : calme, plaisir, liberté nomade, montée en gamme…
4. **Charte** : palette (reprendre les hex de `brand-tokens.json`), lumière, matières.
5. **Cadrage** : ratio attendu (cf. shot-list), gros plan / plan large.
6. **Contraintes** : pas de texte incrusté, fond cohérent avec le site.

## Exemple (Bien Brûlé, hero)
"Machine à café expresso portable posée sur une table en bois clair près d'une fenêtre,
lumière douce du matin, vapeur subtile, tasse en porcelaine, ambiance chaleureuse et premium,
palette crème (#F5F0E8) et terracotta (#B5651D), ratio 16:9, photographie réaliste, sans texte."
```

- [ ] **Step 5 : Commit**

```bash
cd /Users/Hakim/boutique-pipeline
git add reference/
git commit -m "feat: reusable reference sheets (GMC, delivery, naming, image prompts)"
```

---

## Task 6 : PLAYBOOK.md (orchestration)

**Files:**
- Create: `/Users/Hakim/boutique-pipeline/PLAYBOOK.md`

- [ ] **Step 1 : Créer le playbook**

```markdown
# PLAYBOOK — Création d'une boutique Shopify mono-produit

Réf. design complet : `docs/superpowers/specs/2026-06-06-pipeline-creation-boutique-design.md`
(dépôt Bien Brûlé). Suivre les 6 phases. 3 portes de validation humaine.

## Pré-requis manuels (avant de démarrer)
- Boutique Shopify créée (pas d'API) + thème Self Made/Fullstack installé + Shopify CLI connecté.

## Démarrage
`python3 scripts/new_boutique.py <nom-projet>` → crée le dossier projet avec livrables vierges.

## Phase 1 — Recherche → `research-brief.md`
- 1a Découverte concurrents : partir du/des concurrent(s) fourni(s), élargir par recherche web,
  shortlist 4-6 (PAS de gate de validation).
- 1b Analyse : recherche web + navigateur (Claude in Chrome). **Semrush désactivé** par défaut
  (n'activer que sur confirmation d'un essai actif).
- 1c Extraction fournisseur : specs/images/variantes.

## Phase 2 — Marque & Charte → `brand-tokens.json` — **PORTE 1**
- 3 noms + baseline (angles distincts). Palette en CONTRASTE des concurrents. Typo Google Fonts.
- Valider : `python3 scripts/validate_tokens.py <projet>/brand-tokens.json`
- **PORTE 1** : l'utilisateur choisit le nom + valide palette/typo.
- Manuel : logo.

## Phase 3 — Structure → `sitemap.md` — **PORTE 2**
- Arbo + wireframes (liste de sections) + plan SEO. Logique 2-templates par défaut.
- **PORTE 2** : valider la structure avant tout contenu/build.

## Phase 4 — Contenus → `content/` + `shot-list.md`
- Copywriting (ton des tokens, 1 CTA/page), fiches produit conformes GMC, SEO on-page,
  ALT + SKU (voir `reference/naming-conventions.md`).
- Visuels Option B : images fournisseur en placeholder, remplir `shot-list.md` avec prompts
  (voir `reference/image-prompt-guide.md`).

## Phase 5 — Build Shopify — **PORTE 3**
- Appliquer la charte : `python3 scripts/tokens_to_theme.py <projet>/brand-tokens.json <theme>/config/settings_data.json`
- Monter les pages (sections Phase 3 + contenus Phase 4), créer produits/collections via MCP.
- Push live via Shopify CLI.
- **PORTE 3** : validation sur le site live (rendu réel). C'est ici qu'on juge les contenus.

## Phase 6 — Conformité & livraison
- Audit GMC : `reference/gmc-checklist.md` (corrections via MCP).
- Livraison FR/BE/CH : `reference/delivery-fr-be-ch.md` (deliveryProfileUpdate).
- Réglages manuels listés : SEO homepage (Online Store → Preferences), GTIN/MPN (app Google),
  pages légales (rédigées à la main).
- Checklist go-live finale.
```

- [ ] **Step 2 : Vérifier que tous les tests passent encore**

Run: `cd /Users/Hakim/boutique-pipeline && python3 -m pytest -v`
Expected: PASS (14 tests : 5 + 6 + 3)

- [ ] **Step 3 : Commit**

```bash
cd /Users/Hakim/boutique-pipeline
git add PLAYBOOK.md
git commit -m "docs: add orchestration playbook for the 6-phase pipeline"
```

---

## Couverture de la spec (self-review)

- Phase 1 (découverte/analyse/extraction, Semrush off) → `research-brief.template.md` + PLAYBOOK §Phase 1. ✓
- Phase 2 (3 noms, design tokens, mapping Shopify, PORTE 1) → schema + validator + mapper + PLAYBOOK §Phase 2. ✓
- Phase 3 (arbo, wireframes liste, 2-templates, SEO, PORTE 2) → `sitemap.template.md` + PLAYBOOK §Phase 3. ✓
- Phase 4 (copy, fiches GMC, SEO, ALT/SKU, visuels Option B + shot-list prompts) → `shot-list.template.md` + `image-prompt-guide.md` + `naming-conventions.md` + PLAYBOOK §Phase 4. ✓
- Phase 5 (charte→thème, build, PORTE 3) → `tokens_to_theme.py` + PLAYBOOK §Phase 5. ✓
- Phase 6 (GMC, livraison FR/BE/CH, manuels) → `gmc-checklist.md` + `delivery-fr-be-ch.md` + PLAYBOOK §Phase 6. ✓
- Starter-kit réutilisable → l'ensemble du dépôt. ✓
- Manuels (boutique, logo, photos, légales) → documentés dans le PLAYBOOK. ✓

**Note de portée :** ce plan construit le *kit*. L'*exécution* des phases 1-6 pour une boutique
donnée se fera ensuite en suivant le PLAYBOOK (hors de ce plan).
```
