import type { LucideIcon } from "lucide-react";
import {
  Calculator,
  FileText,
  ClipboardCheck,
  Home,
  TrendingUp,
  AlertTriangle,
  Clock,
  Palette,
  FileCheck,
  BookOpen,
  Wrench,
  GitCompare,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ResourceStatus = "active" | "coming-soon";
export type ResourceCategory = "tools" | "guides" | "getting-started";
export type ResourceTag = "Free Download" | "Interactive Tool" | "Coming Soon";

export interface Resource {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: ResourceCategory;
  tier: 1 | 2 | 3;
  status: ResourceStatus;
  tag: ResourceTag;
  icon: LucideIcon;
}

// ---------------------------------------------------------------------------
// Tier labels
// ---------------------------------------------------------------------------

export const TIER_LABELS: Record<1 | 2 | 3, { label: string; sectionLabel: string }> = {
  1: { label: "Tier 1", sectionLabel: "Plan Your Project" },
  2: { label: "Tier 2", sectionLabel: "Make Smart Decisions" },
  3: { label: "Tier 3", sectionLabel: "Get Started" },
};

// ---------------------------------------------------------------------------
// Resources
// ---------------------------------------------------------------------------

export const RESOURCES: Resource[] = [
  // ── Tier 1 — Plan Your Project ──────────────────────────────────────
  {
    slug: "cost-guide",
    title: "2026 Southern California Remodeling Cost Guide",
    shortTitle: "Cost Guide",
    description:
      "Get accurate, up-to-date remodeling costs for Southern California — from kitchens and bathrooms to full home renovations.",
    category: "guides",
    tier: 1,
    status: "active",
    tag: "Free Download",
    icon: FileText,
  },
  {
    slug: "budget-calculator",
    title: "Free Project Budget Calculator",
    shortTitle: "Budget Calculator",
    description:
      "Instantly estimate your remodeling budget with our interactive calculator tailored to SoCal material and labor costs.",
    category: "tools",
    tier: 1,
    status: "active",
    tag: "Interactive Tool",
    icon: Calculator,
  },
  {
    slug: "adu-starter-kit",
    title: "ADU Planning Starter Kit",
    shortTitle: "ADU Starter Kit",
    description:
      "Everything you need to start planning your Accessory Dwelling Unit — zoning basics, cost ranges, and a step-by-step checklist.",
    category: "guides",
    tier: 1,
    status: "active",
    tag: "Free Download",
    icon: Home,
  },
  {
    slug: "roi-report",
    title: "Remodeling ROI Report: Which Upgrades Pay Off in SoCal",
    shortTitle: "ROI Report",
    description:
      "Discover which home upgrades deliver the highest return on investment in the Southern California market.",
    category: "guides",
    tier: 1,
    status: "active",
    tag: "Free Download",
    icon: TrendingUp,
  },

  // ── Tier 2 — Make Smart Decisions ───────────────────────────────────
  {
    slug: "contractor-checklist",
    title: "The Homeowner's Contractor Vetting Checklist",
    shortTitle: "Contractor Checklist",
    description:
      "A printable checklist to evaluate and compare contractors so you hire with confidence every time.",
    category: "guides",
    tier: 2,
    status: "active",
    tag: "Free Download",
    icon: ClipboardCheck,
  },
  {
    slug: "10-costly-mistakes",
    title: "10 Mistakes That Cost SoCal Homeowners Thousands",
    shortTitle: "10 Costly Mistakes",
    description:
      "Learn the most common (and expensive) remodeling mistakes and how to avoid them before breaking ground.",
    category: "guides",
    tier: 2,
    status: "active",
    tag: "Free Download",
    icon: AlertTriangle,
  },
  {
    slug: "project-timeline",
    title: "What to Expect: Your Remodeling Project Timeline",
    shortTitle: "Project Timeline",
    description:
      "Understand realistic timelines for every phase of a remodel — from permits and demolition to final walkthrough.",
    category: "guides",
    tier: 2,
    status: "active",
    tag: "Free Download",
    icon: Clock,
  },
  {
    slug: "design-lookbook",
    title: "Design Inspiration Lookbook",
    shortTitle: "Design Lookbook",
    description:
      "Browse curated design ideas for kitchens, bathrooms, and living spaces trending in Southern California homes.",
    category: "guides",
    tier: 2,
    status: "active",
    tag: "Free Download",
    icon: Palette,
  },

  // ── Tier 3 — Get Started ────────────────────────────────────────────
  {
    slug: "permit-guide",
    title: "SoCal Homeowner's Permit Guide",
    shortTitle: "Permit Guide",
    description:
      "Navigate the permitting process with clarity — know which projects require permits and how to file in your city.",
    category: "getting-started",
    tier: 3,
    status: "active",
    tag: "Free Download",
    icon: FileCheck,
  },
  {
    slug: "planning-workbook",
    title: "Home Renovation Planning Workbook",
    shortTitle: "Planning Workbook",
    description:
      "A fillable workbook to organize your renovation goals, priorities, and budget before your first contractor meeting.",
    category: "getting-started",
    tier: 3,
    status: "active",
    tag: "Free Download",
    icon: BookOpen,
  },
  {
    slug: "maintenance-checklist",
    title: "Seasonal Home Maintenance Checklist for SoCal Homes",
    shortTitle: "Maintenance Checklist",
    description:
      "Keep your home in top shape year-round with this seasonal maintenance guide designed for Southern California climates.",
    category: "getting-started",
    tier: 3,
    status: "active",
    tag: "Free Download",
    icon: Wrench,
  },
  {
    slug: "adu-vs-addition",
    title: "ADU vs. Addition: Which One Is Right for Your Property?",
    shortTitle: "ADU vs. Addition",
    description:
      "Compare the costs, timelines, and benefits of building an ADU versus a traditional room addition for your property.",
    category: "getting-started",
    tier: 3,
    status: "active",
    tag: "Free Download",
    icon: GitCompare,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getActiveResources(): Resource[] {
  return RESOURCES.filter((r) => r.status === "active");
}

export function getResourcesByTier(tier: 1 | 2 | 3): Resource[] {
  return RESOURCES.filter((r) => r.tier === tier);
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
