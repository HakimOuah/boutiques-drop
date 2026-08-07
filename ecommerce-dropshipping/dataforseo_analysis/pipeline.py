#!/usr/bin/env python3
"""
DataForSEO pipeline for Tableau_Recherche_Produit_v2.xlsx
- search_volume + keyword_suggestions + SERP per product
- Scoring 0-100
- Outputs Tableau_Recherche_Produit_v3_dataforseo.xlsx
"""
import os
import sys
import json
import time
import base64
import requests
import pandas as pd
from pathlib import Path
from datetime import datetime

# --- Config ---
LOGIN = os.environ.get("DATAFORSEO_LOGIN", "houahabi@looking-for-soccer.com")
PASSWORD = os.environ.get("DATAFORSEO_PASSWORD", "adcc6cf99b87437a")
BASE_URL = "https://api.dataforseo.com/v3"
LOCATION_CODE = 2250  # France
LANGUAGE_CODE = "fr"
USD_TO_EUR = 0.92
MAX_CALLS = 200
INPUT_FILE = "/Users/Hakim/Downloads/Tableau_Recherche_Produit_v2.xlsx"
OUTPUT_DIR = Path(__file__).parent
OUTPUT_XLSX = OUTPUT_DIR / "Tableau_Recherche_Produit_v3_dataforseo.xlsx"
LOG_FILE = OUTPUT_DIR / f"api_log_{datetime.now().strftime('%Y%m%d_%H%M%S')}.jsonl"
CACHE_FILE = OUTPUT_DIR / "cache.json"

GIANTS = ["amazon", "cdiscount", "conforama", "leroymerlin", "leroy-merlin",
          "castorama", "ikea", "fnac", "darty", "boulanger", "manomano",
          "but.fr", "carrefour", "auchan"]

# --- Auth ---
def auth_header():
    token = base64.b64encode(f"{LOGIN}:{PASSWORD}".encode()).decode()
    return {"Authorization": f"Basic {token}", "Content-Type": "application/json"}


# --- Cache & logging ---
class State:
    def __init__(self):
        self.call_count = 0
        self.cache = {}
        if CACHE_FILE.exists():
            self.cache = json.loads(CACHE_FILE.read_text())
        self.log_fp = open(LOG_FILE, "a")

    def log(self, entry):
        self.log_fp.write(json.dumps(entry, ensure_ascii=False, default=str) + "\n")
        self.log_fp.flush()

    def save_cache(self):
        CACHE_FILE.write_text(json.dumps(self.cache, ensure_ascii=False, indent=2))

    def close(self):
        self.save_cache()
        self.log_fp.close()


state = State()


def call_api(endpoint, payload, cache_key=None):
    if cache_key and cache_key in state.cache:
        return state.cache[cache_key]
    if state.call_count >= MAX_CALLS:
        raise RuntimeError(f"API budget exhausted ({MAX_CALLS})")
    url = f"{BASE_URL}{endpoint}"
    t0 = time.time()
    try:
        r = requests.post(url, headers=auth_header(), json=payload, timeout=60)
        elapsed = time.time() - t0
        state.call_count += 1
        data = r.json()
        state.log({
            "ts": datetime.now().isoformat(),
            "endpoint": endpoint,
            "payload": payload,
            "status_code": data.get("status_code"),
            "status_message": data.get("status_message"),
            "elapsed_s": round(elapsed, 2),
            "call_n": state.call_count,
        })
        if cache_key:
            state.cache[cache_key] = data
            state.save_cache()
        return data
    except Exception as e:
        state.log({"ts": datetime.now().isoformat(), "endpoint": endpoint, "error": str(e)})
        raise


def get_search_volume(keyword):
    payload = [{"keywords": [keyword], "location_code": LOCATION_CODE, "language_code": LANGUAGE_CODE}]
    data = call_api("/keywords_data/google_ads/search_volume/live", payload, cache_key=f"sv::{keyword}")
    try:
        items = data["tasks"][0]["result"] or []
        if not items:
            return None
        return items[0]
    except Exception:
        return None


def get_keyword_suggestions(keyword, limit=30):
    payload = [{
        "keyword": keyword,
        "location_code": LOCATION_CODE,
        "language_code": LANGUAGE_CODE,
        "limit": limit,
        "include_seed_keyword": False,
    }]
    data = call_api("/dataforseo_labs/google/keyword_suggestions/live", payload, cache_key=f"sg::{keyword}")
    try:
        items = data["tasks"][0]["result"][0].get("items") or []
        return items
    except Exception:
        return []


def get_serp(keyword):
    payload = [{
        "keyword": keyword,
        "location_code": LOCATION_CODE,
        "language_code": LANGUAGE_CODE,
        "device": "desktop",
        "depth": 10,
    }]
    data = call_api("/serp/google/organic/live/advanced", payload, cache_key=f"serp::{keyword}")
    try:
        return data["tasks"][0]["result"][0]
    except Exception:
        return None


# --- Helpers ---
def safe_cpc_eur(cpc_usd):
    if cpc_usd is None:
        return None
    try:
        return round(float(cpc_usd) * USD_TO_EUR, 2)
    except Exception:
        return None


MONTH_FR = ["jan", "fév", "mar", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"]


def analyse_monthly(monthly):
    """monthly: list of {year, month, search_volume}"""
    if not monthly:
        return {"avg": None, "peak_vol": None, "peak_month": None, "ratio": None, "type": None}
    # take last 12
    sorted_m = sorted(monthly, key=lambda x: (x.get("year", 0), x.get("month", 0)))[-12:]
    vols = [m.get("search_volume", 0) or 0 for m in sorted_m]
    if not vols or sum(vols) == 0:
        return {"avg": None, "peak_vol": None, "peak_month": None, "ratio": None, "type": None}
    avg = sum(vols) / len(vols)
    peak_vol = max(vols)
    peak_idx = vols.index(peak_vol)
    peak_month_num = sorted_m[peak_idx].get("month")
    peak_year = sorted_m[peak_idx].get("year")
    trough = min(v for v in vols if v > 0) if any(v > 0 for v in vols) else 1
    ratio = peak_vol / max(trough, 1)
    if ratio > 4:
        type_ = "saisonnier fort"
    elif ratio > 2:
        type_ = "saisonnier modéré"
    else:
        type_ = "evergreen"
    return {
        "avg": round(avg, 1),
        "peak_vol": peak_vol,
        "peak_month": f"{MONTH_FR[peak_month_num-1]} {peak_year}" if peak_month_num else None,
        "peak_month_num": peak_month_num,
        "ratio": round(ratio, 2),
        "type": type_,
    }


def score_product(volume_fr, cpc_eur, competition_index, giants_top3,
                  season_type, season_ratio, variants_cumul, has_data):
    if not has_data:
        return 0, {"reason": "no data"}

    breakdown = {}

    # Volume FR
    if volume_fr is None:
        breakdown["volume"] = 0
    elif volume_fr > 5000:
        breakdown["volume"] = 25
    elif volume_fr >= 2000:
        breakdown["volume"] = 15
    else:
        breakdown["volume"] = 5

    # CPC EUR
    if cpc_eur is None or cpc_eur <= 0:
        breakdown["cpc"] = 0
    elif 0.30 <= cpc_eur <= 1.00:
        breakdown["cpc"] = 20
    elif 1.00 < cpc_eur <= 1.50:
        breakdown["cpc"] = 10
    else:
        breakdown["cpc"] = 0

    # Competition index
    if competition_index is None:
        breakdown["competition"] = 0
    elif competition_index < 40:
        breakdown["competition"] = 20
    elif competition_index <= 70:
        breakdown["competition"] = 10
    else:
        breakdown["competition"] = 0

    # Giants in top 3 Ads
    breakdown["giants"] = 0 if giants_top3 else 15

    # Seasonality
    if season_type == "evergreen":
        breakdown["season"] = 10
    elif season_type == "saisonnier modéré":
        breakdown["season"] = 5
    else:
        breakdown["season"] = 0 if (season_ratio and season_ratio > 6) else 5

    # Variants cumulative volume
    if variants_cumul is None:
        breakdown["variants"] = 0
    elif variants_cumul > 10000:
        breakdown["variants"] = 10
    elif variants_cumul >= 5000:
        breakdown["variants"] = 5
    else:
        breakdown["variants"] = 0

    total = sum(breakdown.values())
    return total, breakdown


# --- Main pipeline ---
def main():
    df = pd.read_excel(INPUT_FILE, sheet_name="Tableau produits")
    products = df.dropna(subset=["MOT-CLÉ"]).copy().reset_index(drop=True)
    print(f"[+] {len(products)} products to analyse")

    results = []
    variants_all = []

    for idx, row in products.iterrows():
        kw = str(row["MOT-CLÉ"]).strip()
        produit = row["PRODUIT"]
        print(f"\n[{idx+1}/{len(products)}] {produit[:60]}  ->  '{kw}'  (calls so far: {state.call_count})")

        out_row = row.to_dict()

        # 1) Search volume principal
        sv = get_search_volume(kw)
        vol_fr = sv.get("search_volume") if sv else None
        cpc_usd = sv.get("cpc") if sv else None
        competition = sv.get("competition") if sv else None  # "LOW","MEDIUM","HIGH"
        comp_idx = sv.get("competition_index") if sv else None
        monthly = sv.get("monthly_searches") if sv else None

        # Retry with fallback variants if 0 volume
        if (vol_fr is None or vol_fr == 0):
            print(f"    [!] no volume for '{kw}', trying fallback")
            words = kw.split()
            tries = []
            if len(words) > 2:
                tries.append(" ".join(words[:-1]))
                tries.append(" ".join(words[1:]))
            if len(words) > 3:
                tries.append(" ".join(words[:2]))
            for t in tries[:3]:
                sv2 = get_search_volume(t)
                if sv2 and sv2.get("search_volume"):
                    sv = sv2
                    vol_fr = sv.get("search_volume")
                    cpc_usd = sv.get("cpc")
                    competition = sv.get("competition")
                    comp_idx = sv.get("competition_index")
                    monthly = sv.get("monthly_searches")
                    kw_effective = t
                    print(f"    [✓] fallback '{t}' -> vol={vol_fr}")
                    break

        cpc_eur = safe_cpc_eur(cpc_usd)
        season = analyse_monthly(monthly)

        # 2) Keyword suggestions
        suggestions = get_keyword_suggestions(kw, limit=30)
        viable_variants = []
        for s in suggestions:
            kw_data = s.get("keyword_info") or {}
            v_vol = kw_data.get("search_volume")
            v_cpc_usd = kw_data.get("cpc")
            v_cpc_eur = safe_cpc_eur(v_cpc_usd)
            v_comp_idx = kw_data.get("competition_index")
            if v_vol and v_vol > 200 and v_cpc_eur is not None and 0.20 <= v_cpc_eur <= 2.00:
                viable_variants.append({
                    "produit": produit,
                    "keyword_principal": kw,
                    "variante": s.get("keyword"),
                    "volume": v_vol,
                    "cpc_eur": v_cpc_eur,
                    "competition_index": v_comp_idx,
                })
        variants_cumul = (vol_fr or 0) + sum(v["volume"] for v in viable_variants)
        variants_all.extend(viable_variants)

        # 3) SERP
        serp = get_serp(kw)
        nb_ads = 0
        top_organic = []
        top_ads_domains = []
        giants_top3 = False
        if serp:
            items = serp.get("items") or []
            organic_count = 0
            for it in items:
                t = it.get("type")
                if t == "paid":
                    nb_ads += 1
                    if len(top_ads_domains) < 5:
                        top_ads_domains.append(it.get("domain") or it.get("url", ""))
                elif t == "organic" and organic_count < 5:
                    top_organic.append(it.get("domain") or it.get("url", ""))
                    organic_count += 1
            # Detect giants in TOP 3 (ads first, fallback organic top3 if no ads)
            check_pool = top_ads_domains[:3] if top_ads_domains else top_organic[:3]
            for d in check_pool:
                d_low = (d or "").lower()
                if any(g in d_low for g in GIANTS):
                    giants_top3 = True
                    break

        # 4) Scoring
        has_data = (vol_fr is not None)
        score, breakdown = score_product(
            vol_fr, cpc_eur, comp_idx, giants_top3,
            season["type"], season["ratio"], variants_cumul, has_data
        )

        out_row.update({
            "VOLUME_FR": vol_fr,
            "CPC_EUR": cpc_eur,
            "COMPETITION_INDEX": comp_idx,
            "NB_ADS_SERP": nb_ads,
            "GEANTS_TOP3": "Oui" if giants_top3 else "Non",
            "MOIS_PIC": season["peak_month"],
            "RATIO_SAISONNALITE": season["ratio"],
            "TYPE_SAISON": season["type"],
            "VOLUME_CUMULE_VARIANTES": variants_cumul,
            "NB_VARIANTES_VIABLES": len(viable_variants),
            "SCORE_TOTAL": score,
            "TOP_ORGANIC": " | ".join(top_organic[:5]),
            "TOP_ADS": " | ".join(top_ads_domains[:5]),
            "SCORE_BREAKDOWN": json.dumps(breakdown, ensure_ascii=False),
        })
        results.append(out_row)
        print(f"    vol={vol_fr} cpc={cpc_eur}€ comp_idx={comp_idx} ads={nb_ads} giants_top3={giants_top3} score={score}")

    return results, variants_all


if __name__ == "__main__":
    try:
        results, variants_all = main()
    finally:
        state.close()

    # Save intermediate JSON
    (OUTPUT_DIR / "results.json").write_text(json.dumps({"products": results, "variants": variants_all}, ensure_ascii=False, indent=2, default=str))
    print(f"\n[✓] Done — {state.call_count} API calls. Saved results.json")
