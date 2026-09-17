#!/usr/bin/env python3
"""Scan de véracité d'une boutique Shopify avant review GMC ou lancement d'Ads.

Cherche les termes et tournures interdits (voir references/lexique-interdit.md) dans :
  - les pages publiques clés (home, pages CMS, policies),
  - toutes les fiches publiées (titre, corps, via products.json) et leur titre SEO rendu,
  - optionnellement les métachamps exportés en JSON (--metafields fichier.json).

Usage :
  python3 scan_veracite.py https://domaine.fr [--pages /pages/notre-histoire,/pages/faq] [--metafields mf.json]

Sortie : une ligne par occurrence, groupée par règle. Code de sortie 1 si au moins une
occurrence bloquante. Un faux positif se justifie dans le rapport d'audit, il ne se tait pas.
"""
import argparse, html, json, re, sys, time, urllib.error, urllib.request

UA = {"User-Agent": "Mozilla/5.0 (scan-veracite)"}

# (code, gravité, regex, explication)
RULES = [
    # --- Modèle d'activité : qui stocke, qui contrôle, d'où ça part ---
    ("OP-LIEU", "bloquant", r"boutique (en ligne )?(parisienne|lyonnaise|française|locale)", "Laisse croire à un stock ou un local physique"),
    ("OP-LIEU", "bloquant", r"r[ée]pond(ons|ent)? (depuis |de )?(paris|france|lyon)\b|[ée]quipe (bas[ée]e )?(à|a|de) paris", "Localise le service sans preuve"),
    ("OP-ATELIER", "bloquant", r"\bnos? ateliers?\b|\bartisan|fait(e|es|s)? (à la )?main|tress[ée]e?s? (à la )?main|souffl[ée]e?s? (à la )?bouche", "Revendique une fabrication maîtrisée"),
    ("OP-LIEU", "bloquant", r"marque fran[çc]aise,? install[ée]e (à|a) paris|install[ée]e? (à|a) paris", "Répond à une question d'origine par une localisation"),
    ("OP-ORIGINE", "bloquant", r"fabriqu[ée]e?s? en (france|europe)|made in (france|europe)|exp[ée]di[ée]e?s? (depuis|de) (la )?france|(stock|entrep[oô]t)s? en france|depuis nos entrep[oô]ts", "Origine ou stock en France non prouvés"),
    ("OP-CONTROLE", "bloquant", r"contr[oô]l(e|é|ée|er|ons) (du |le |chaque |de chaque |des )?(luminaire|produit|article|pi[èe]ce|colis)|(v[ée]rifi|inspect|test)[ée]e?s? (par nos soins|par notre [ée]quipe|une (à|a) une|avant (l.)?(envoi|exp[ée]dition))|emball[ée]e?s? (avec soin )?par (nos soins|notre [ée]quipe)|pr[ée]par[ée]e?s? (dans nos locaux|par nos soins)", "Décrit une manipulation du produit qui n'a pas lieu en dropshipping"),
    ("OP-TRANSPORT", "bloquant", r"\bcolissimo\b|\bdpd\b|\bchronopost\b|mondial ?relay|\bgls\b|\bups\b|\bfedex\b|\bdhl\b", "Transporteur nommé : seulement s'il est réellement utilisé de bout en bout"),
    ("OP-CREATION", "bloquant", r"nos cr[ée]ations|con[çc]ue?s? (par nous|par notre|à paris|en france)|dessin[ée]e?s? (par nous|par notre|à paris|en france)|notre (propre )?design|mod[èe]les? exclusifs?", "Revendique une conception"),
    ("OP-JARGON", "bloquant", r"attribut(s)? fournisseur|photo(s)? fournisseur|fiche fournisseur|\bdropship|aliexpress|\bdsers\b|\bcj ?dropshipping|\btemu\b", "Jargon interne qui fuit dans la copie client"),
    ("ID-EMAIL", "bloquant", r"mailto:(?!__EMAIL__)[\w.+-]+@[\w.-]+", "Second e-mail dans le code (à adapter au domaine de la boutique)"),
    ("OP-EXPRESS", "alerte", r"(?<!american )\bexpress\b|livraison rapide|exp[ée]di[ée]e?s? sous 24", "Promesse de vitesse à confronter au délai réel"),

    # --- Garanties sur ce qu'on ne vérifie pas ---
    ("GAR-ICONE", "bloquant", r"icon--verified|icon--new_releases|icon--workspace_premium|icon--military_tech", "Icône « vérifié / certifié » (thème Horizon, Material Symbols)"),
    ("GAR-MOT", "bloquant", r"\bv[ée]rifi[ée]e?s?\b|\bcertifi[ée]e?s?\b|\bgaranti(e|es|s)? (d.origine|authentique|conforme)", "« Vérifié / certifié » sans certificat"),
    ("GAR-PHOTO", "bloquant", r"texture que vous voyez|ce que vous voyez (en|sur la) photo|photos? (r[ée]elles?|non retouch[ée]e?s?|contractuelles?)|tel(le)?s? que (photographi|sur la photo)|conforme (à|a) la photo", "Garantit la photo alors que les visuels sont composés"),
    ("GAR-PHOTO", "bloquant", r"celui des photos|celle des photos|ceux des photos|ce qu.on regarde avant de mettre", "Garantie implicite sur photo ou contrôle"),
    ("GAR-SINCERITE", "bloquant", r"vocabulaire flou|transparence (totale|absolue)|on ne vous ment pas|z[ée]ro mauvaise surprise|sans mauvaise surprise|en toute honn[êe]tet[ée]", "Proclame une honnêteté que le catalogue doit prouver"),
    ("GAR-GAMME", "bloquant", r"qualit[ée] (premium|sup[ée]rieure|professionnelle)|haut de gamme|\bluxe\b|\bluxueu|\bpremium\b|\bprestige\b", "Claim de gamme invérifiable"),

    # --- Urgence, preuve sociale, prix ---
    ("URG", "bloquant", r"stock limit[ée]|derni[èe]res? pi[èe]ces|plus que \d+|victime de (son )?succ[èe]s|offre limit[ée]e|jusqu.à ce soir", "Fausse urgence"),
    ("SOC", "bloquant", r"best[- ]?sellers?|coup de c(œ|oe)ur (des|de nos) clients|nos clients (adorent|aiment|recommandent)|(plus de|déjà) \d[\d  ]* clients|\b[34][,.]\d ?/ ?5\b|\d+ avis", "Preuve sociale sans avis réels"),
    ("PRIX", "bloquant", r"prix usine|prix (de )?gros|au lieu de \d|meilleur prix|moins cher qu|[-−–]\s?\d{1,2} ?%", "Référence de prix trompeuse"),
]

# Matières « nobles » : interdites dans un titre ou une affirmation de matière sans preuve
# (plaque cotée, attribut fournisseur explicite, ou pièce reçue). Autorisées si qualifiées.
NOBLE = r"pierre|travertin|marbre|alb[âa]tre|onyx|granit|laiton|cuivre|bronze|soie|\blin\b|cuir|ch[êe]ne|noyer|bois massif|teck|verre souffl[ée]|cristal|porcelaine|c[ée]ramique artisanale|or fin|argent massif"
QUALIF = r"(effet|aspect|fa[çc]on|finition|imitation|coloris|teinte|couleur|ton|tons?)\s+(de\s+|d.)?"

def scan_prose_matiere(label, txt, hits):
    low = txt.lower()
    for m in re.finditer(NOBLE, low):
        before = low[max(0, m.start() - 30):m.start()]
        if re.search(QUALIF + r"$", before) or re.search(r"(qu.un bloc de|poids r[ée]el d.une|pas la|pas de la|ou de la|grain du|aspect|reprend[a-z]* le grain)\s*$", before):
            continue
        s_ = max(0, m.start() - 50); e_ = min(len(txt), m.end() + 50)
        hits.append(("alerte", "MAT-PROSE", label, txt[s_:e_].strip(), f"« {m.group(0)} » dans la prose : vérifier qu'il est qualifié ou prouvé"))

def fetch(url, essais=3):
    """Charge une URL. Shopify renvoie 429 au-delà d'environ deux requêtes par seconde :
    un scan complet en fait une centaine, donc on temporise et on réessaie."""
    for n in range(essais):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=40) as r:
                out = r.read().decode("utf-8", "replace")
            time.sleep(0.4)
            return out
        except urllib.error.HTTPError as ex:
            if ex.code != 429 or n == essais - 1:
                raise
            time.sleep(2 * (n + 1))

def text_of(raw):
    raw = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", raw)
    # on garde les classes d'icônes pour la règle GAR-ICONE
    icons = " ".join(re.findall(r"icon--[a-z_]+|mailto:[\w.+-]+@[\w.-]+", raw))
    return icons + " " + re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", raw)))

def scan(label, txt, hits):
    low = txt.lower()
    for code, grav, rx, why in RULES:
        for m in re.finditer(rx, low):
            s = max(0, m.start() - 60); e = min(len(txt), m.end() + 60)
            hits.append((grav, code, label, txt[s:e].strip(), why))

def scan_matiere(label, txt, hits):
    for m in re.finditer(r"mati[èe]re\s*:\s*(.{0,140}?)(?=\s+[A-ZÉÈÀ][\w’' éèêàç]{2,30}\s*:|\.|$)", txt, re.I):
        seg = m.group(1).lower()
        for n in re.finditer(NOBLE, seg):
            before = seg[max(0, n.start() - 20):n.start()]
            if not re.search(QUALIF + r"$", before):
                hits.append(("bloquant", "MAT-SPEC", label, m.group(0)[:140],
                             f"« {n.group(0)} » affirmé comme matière sans qualificatif ni preuve"))

def scan_title(label, title, hits):
    low = title.lower()
    for m in re.finditer(NOBLE, low):
        before = low[max(0, m.start() - 20):m.start()]
        if not re.search(QUALIF + r"$", before):
            hits.append(("bloquant", "MAT-TITRE", label, title,
                         f"« {m.group(0)} » affirmé sans qualificatif (effet / aspect / finition) — exige une preuve de matière"))

TITLE_TAG = re.compile(r"<title[^>]*>(.*?)</title>", re.S | re.I)
META_DESC = re.compile(r"""<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)""", re.I)

def scan_meta(label, page_html, hits):
    """Scanne le titre SEO et la méta description d'une page rendue.

    Ce sont des champs **distincts** du titre et de la description du produit : corriger un
    titre par `productUpdate(product: {title})` ne les touche pas. Ce sont eux que Google lit
    et qui s'affichent dans l'onglet. Angle mort qui a survécu à la passe du 17/09 sur
    Lumière Matière : 20 titres SEO disaient encore « travertin », « laiton », « soie » alors
    que les titres produit étaient corrigés, et trois méta descriptions annonçaient une LED
    intégrée là où la fiche disait l'ampoule fournie.
    """
    for rx, quoi in ((TITLE_TAG, "titre SEO"), (META_DESC, "méta description")):
        m = rx.search(page_html)
        if not m:
            continue
        t = html.unescape(re.sub(r"\s+", " ", m.group(1))).strip()
        lab = f"{label} ({quoi})"
        scan(lab, t, hits)
        scan_title(lab, t, hits) if quoi == "titre SEO" else scan_prose_matiere(lab, t, hits)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("site")
    ap.add_argument("--pages", default="/,/pages/notre-histoire,/pages/faq,/pages/contact,/policies/shipping-policy,/policies/refund-policy,/policies/terms-of-service,/policies/legal-notice,/policies/privacy-policy,/policies/contact-information,/pages/conditions-paiement,/cart")
    ap.add_argument("--email", default=None, help="seul e-mail public autorisé (ex. contact@domaine.fr)")
    ap.add_argument("--metafields", help="JSON {handle: {cle: valeur}} exporté depuis l'Admin")
    ap.add_argument("--sans-meta", action="store_true",
                    help="ne pas charger chaque page fiche / collection pour lire son titre SEO")
    a = ap.parse_args()
    site = a.site.rstrip("/")
    allowed = re.escape(a.email or ("contact@" + re.sub(r"^https?://(www\\.)?", "", site)))
    for i, r in enumerate(RULES):
        if "__EMAIL__" in r[2]:
            RULES[i] = (r[0], r[1], r[2].replace("__EMAIL__", allowed), r[3])
    hits = []
    for p in a.pages.split(","):
        try:
            t_ = text_of(fetch(site + p)); scan(p, t_, hits); scan_prose_matiere(p, t_, hits)
        except Exception as ex:
            hits.append(("alerte", "HTTP", p, str(ex), "page illisible"))
    prods = json.loads(fetch(site + "/products.json?limit=250"))["products"]
    for pr in prods:
        lab = "fiche " + pr["handle"]
        scan_title(lab, pr["title"], hits)
        scan(lab + " (titre)", pr["title"], hits)
        scan(lab + " (corps)", text_of(pr.get("body_html") or ""), hits)
        scan_matiere(lab + " (corps)", text_of(pr.get("body_html") or ""), hits)
        scan_prose_matiere(lab + " (corps)", text_of(pr.get("body_html") or ""), hits)
        if not a.sans_meta:
            try:
                scan_meta(lab, fetch(f"{site}/products/{pr['handle']}"), hits)
            except Exception as ex:
                hits.append(("alerte", "HTTP", lab, str(ex), "fiche illisible"))
    # collections publiées : vides, maigres, descriptions
    try:
        cols = json.loads(fetch(site + "/collections.json?limit=250")).get("collections", [])
    except Exception:
        cols = []
    for c in cols:
        h = c["handle"]
        if h == "frontpage":
            continue
        try:
            n = len(json.loads(fetch(f"{site}/collections/{h}/products.json?limit=250"))["products"])
        except Exception:
            n = -1
        lab = "collection " + h
        if n == 0:
            hits.append(("bloquant", "COL-VIDE", lab, c["title"], "Collection publiée vide : dépublier"))
        elif 0 < n < 5:
            hits.append(("alerte", "COL-MAIGRE", lab, f"{c['title']} ({n} fiche(s))", "Moins de 5 fiches : justifier ou dépublier ; vérifier que la description ne décrit pas des brouillons"))
        scan_title(lab, c["title"], hits)
        body = text_of(c.get("body_html") or "")
        scan(lab, body, hits); scan_matiere(lab, body, hits); scan_prose_matiere(lab, body, hits)
        if not a.sans_meta and n != 0:
            try:
                scan_meta(lab, fetch(f"{site}/collections/{h}"), hits)
            except Exception as ex:
                hits.append(("alerte", "HTTP", lab, str(ex), "collection illisible"))
    if a.metafields:
        for h, mf in json.load(open(a.metafields, encoding="utf-8")).items():
            for k, v in mf.items():
                scan(f"fiche {h} (mf {k})", text_of(str(v)), hits)
                scan_matiere(f"fiche {h} (mf {k})", text_of(str(v)), hits)
                scan_prose_matiere(f"fiche {h} (mf {k})", text_of(str(v)), hits)
    seen = set(); out = []
    for h in hits:
        key = (h[1], h[2], h[3][:80])
        if key not in seen:
            seen.add(key); out.append(h)
    out.sort(key=lambda h: (h[0] != "bloquant", h[1], h[2]))
    for g, c, lab, ctx, why in out:
        print(f"[{g}] {c:<13} {lab:<45} …{ctx}…  → {why}")
    nb = sum(1 for h in out if h[0] == "bloquant")
    print(f"\n{len(prods)} fiches, {len(a.pages.split(','))} pages — {nb} occurrence(s) bloquante(s), {len(out)-nb} alerte(s).")
    sys.exit(1 if nb else 0)

if __name__ == "__main__":
    main()
