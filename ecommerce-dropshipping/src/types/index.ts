export type AgentType =
  | "niche-analyst"
  | "niche-discovery"
  | "product-writer"
  | "pricing-engine"
  | "ads-architect"
  | "cro-optimizer"
  | "ux-auditor"
  | "gmc-checker"
  | "image-maker";

export type AgentRunStatus = "running" | "completed" | "failed";
export type NicheVerdict = "GO" | "MAYBE" | "NO-GO";
export type MarginVerdict = "WINNER" | "GO" | "MAYBE" | "FAIBLE";
export type PageStatus = "draft" | "approved" | "published";
export type CampaignType = "search" | "shopping" | "pmax";
export type CampaignStatus = "draft" | "active" | "paused";

export type ActivityType =
  | "niche_analyzed"
  | "product_created"
  | "page_generated"
  | "campaign_built"
  | "import_completed";

export interface NicheAnalysisResult {
  totalScore: number;
  volumeScore: number;
  cpcScore: number;
  concurrenceScore: number;
  margeScore: number;
  fournisseursScore: number;
  verdict: NicheVerdict;
  avgCPC: number;
  avgVolume: number;
  avgKD: number;
  priceRangeMin: number;
  priceRangeMax: number;
  keywords: KeywordData[];
  rationale: string;
  recommendations: string[];
}

export interface KeywordData {
  keyword: string;
  volume: number;
  cpc: number;
  kd: number;
}

export interface PricingEngineResult {
  purchasePrice: number;
  shippingCost: number;
  shippingClient: number;
  salePriceHT: number;
  salePriceTTC: number;
  tva: number;
  stripeCommission: number;
  shopifyCommission: number;
  cpaHT: number;
  fixedCosts: number;
  netMargin: number;
  netMarginPct: number;
  verdict: MarginVerdict;
  adjustments: PricingAdjustment[];
}

export interface PricingAdjustment {
  type: "price" | "cpa" | "supplier";
  suggestion: string;
  impact: string;
}

export interface ProductPageResult {
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  bulletPoints: string[];
  technicalSpecs: Record<string, string>;
  seoKeywords: string[];
  schemaMarkup: string;
}

export interface CampaignStructure {
  campaigns: CampaignDef[];
  negativeKeywords: string[];
  adCopy: {
    titles: string[];
    descriptions: string[];
  };
  biddingStrategy: string;
  dailyBudget: number;
  targetCPA: number;
  targetROAS: number;
  scalingPlan: {
    day30: ScalingPhase;
    day60: ScalingPhase;
    day90: ScalingPhase;
  };
}

export interface CampaignDef {
  name: string;
  type: CampaignType;
  adGroups: AdGroup[];
  budget: number;
}

export interface AdGroup {
  name: string;
  intent: "purchase" | "comparison" | "information";
  keywords: string[];
  matchTypes: ("exact" | "phrase" | "broad")[];
}

export interface ScalingPhase {
  budget: number;
  focus: string;
  actions: string[];
}

export interface LogEntry {
  message: string;
  type: "info" | "success" | "error" | "data";
  phase?: string;
  timestamp: number;
}
