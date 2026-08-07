const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN || "";
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD || "";
const BASE_URL = "https://api.dataforseo.com/v3";

function getAuthHeader(): string {
  const credentials = Buffer.from(
    `${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`
  ).toString("base64");
  return `Basic ${credentials}`;
}

export interface KeywordMetrics {
  keyword: string;
  searchVolume: number;
  cpc: number;
  competition: string;
  competitionIndex: number;
}

interface DataForSEOTask {
  status_code: number;
  result: {
    keyword: string;
    search_volume: number | null;
    cpc: number | null;
    competition: string | null;
    competition_index: number | null;
  }[] | null;
}

interface DataForSEOResponse {
  status_code: number;
  status_message: string;
  tasks: DataForSEOTask[];
}

/**
 * Fetch real keyword metrics from DataForSEO Google Ads Search Volume (Live).
 * Uses Standard mode — $0.0006/keyword.
 * Location: France (2250), Language: French (fr)
 * Max 1000 keywords per request.
 */
export async function getKeywordMetrics(
  keywords: string[]
): Promise<KeywordMetrics[]> {
  if (!DATAFORSEO_LOGIN || !DATAFORSEO_PASSWORD) {
    throw new Error("DataForSEO credentials not configured");
  }

  if (keywords.length === 0) return [];

  // API limit: 1000 keywords per request
  const batch = keywords.slice(0, 1000);

  const res = await fetch(
    `${BASE_URL}/keywords_data/google_ads/search_volume/live`,
    {
      method: "POST",
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          keywords: batch,
          location_code: 2250, // France
          language_code: "fr",
        },
      ]),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DataForSEO API error ${res.status}: ${text}`);
  }

  const data: DataForSEOResponse = await res.json();

  if (data.status_code !== 20000) {
    throw new Error(`DataForSEO: ${data.status_message}`);
  }

  const results: KeywordMetrics[] = [];
  for (const task of data.tasks) {
    if (task.status_code === 20000 && task.result) {
      for (const item of task.result) {
        results.push({
          keyword: item.keyword,
          searchVolume: item.search_volume ?? 0,
          cpc: item.cpc ?? 0,
          competition: item.competition ?? "UNKNOWN",
          competitionIndex: item.competition_index ?? 0,
        });
      }
    }
  }

  return results;
}

/**
 * Aggregate keyword metrics for a niche:
 * - avgVolume: average monthly search volume across keywords
 * - avgCPC: average CPC in EUR
 * - avgKD: competition index (0-100) as proxy for keyword difficulty
 * - totalVolume: sum of all keyword volumes
 */
export function aggregateMetrics(metrics: KeywordMetrics[]) {
  if (metrics.length === 0) {
    return { avgVolume: 0, avgCPC: 0, avgKD: 0, totalVolume: 0 };
  }

  const totalVolume = metrics.reduce((s, m) => s + m.searchVolume, 0);
  const avgVolume = Math.round(totalVolume / metrics.length);
  const avgCPC =
    Math.round(
      (metrics.reduce((s, m) => s + m.cpc, 0) / metrics.length) * 100
    ) / 100;
  const avgKD =
    Math.round(
      (metrics.reduce((s, m) => s + m.competitionIndex, 0) / metrics.length) *
        100
    ) / 100;

  return { avgVolume, avgCPC, avgKD, totalVolume };
}
