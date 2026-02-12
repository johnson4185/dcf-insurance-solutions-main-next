"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, Phone, X } from "lucide-react";

type PlanId = "basic" | "now" | "suite";

type Plan = {
  id: PlanId;
  name: string;
  slug: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
  highlight?: string;
  savingsLabel?: string;
};

const plans: Plan[] = [
  {
    id: "basic",
    name: "Insurance Basic",
    slug: "insurance-basic",
    tagline: "Core platform for fast rollout",
    priceMonthly: 499,
    priceAnnual: 498 * 12,
    features: [
      "Policy + Claims core",
      "Broker portal",
      "Email support",
      "Standard analytics"
    ],
    savingsLabel: "Save 15% on annual"
  },
  {
    id: "now",
    name: "Insurance Now",
    slug: "insurance-now",
    tagline: "Add more products as you grow",
    priceMonthly: 1850,
    priceAnnual: 1725 * 12,
    features: [
      "Policy, Claims, Billing, Payments",
      "Add-on products anytime",
      "Priority support",
      "Integration toolkit"
    ],
    highlight: "Most popular",
    savingsLabel: "Save 12% on annual"
  },
  {
    id: "suite",
    name: "Insurance Suite",
    slug: "insurance-suite",
    tagline: "High-end enterprise suite",
    priceMonthly: 3250,
    priceAnnual: 2950 * 12,
    features: [
      "All Now modules",
      "Advanced risk & fraud",
      "Dedicated success team",
      "Custom SLAs"
    ],
    savingsLabel: "Save 10% on annual"
  }
];

const comparisonRows: Array<{
  label: string;
  values: Record<PlanId, boolean | string>;
}> = [
  {
    label: "Core modules",
    values: { basic: true, now: true, suite: true }
  },
  {
    label: "Claims management",
    values: { basic: true, now: true, suite: true }
  },
  {
    label: "Pre-authorization workflows",
    values: { basic: false, now: true, suite: true }
  },
  {
    label: "Add-on products",
    values: { basic: "Limited", now: "Yes", suite: "Unlimited" }
  },
  {
    label: "Advanced analytics",
    values: { basic: false, now: "Standard", suite: "Advanced" }
  },
  {
    label: "Dedicated success team",
    values: { basic: false, now: false, suite: true }
  },
  {
    label: "Custom SLAs",
    values: { basic: false, now: false, suite: true }
  }
];

const formatCurrency = (value: number) => `$${value.toLocaleString("en-US")}`;

export default function UpgradePage() {
  const searchParams = useSearchParams();
  const rawPlanParam = searchParams.get("plan");
  const normalizedPlanParam = rawPlanParam === "build" ? "now" : rawPlanParam;
  const planParam = (normalizedPlanParam || "now") as PlanId;
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const currentPlan = useMemo(
    () => plans.find((plan) => plan.id === planParam) || plans[1],
    [planParam]
  );

  const otherPlans = useMemo(
    () => plans.filter((plan) => plan.id !== currentPlan.id),
    [currentPlan]
  );

  const displayPrice = (plan: Plan) => (
    billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual
  );

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_#e9f2ff,_#f8fafc_55%,_#eef2ff)] text-slate-900 py-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(transparent_24px,_rgba(15,23,42,0.06)_25px),linear-gradient(90deg,transparent_24px,_rgba(15,23,42,0.06)_25px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/profile"
            className="group relative inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-slate-900/70 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </div>

        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-700">Upgrade Options</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Choose the next level for your team
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Insurance Basic, Insurance Now, and Insurance Suite.
          </p>
          <div className="mt-5 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-sm relative shadow-sm">
            <span
              className={`absolute left-1 top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-blue-600 transition-transform duration-300 ${
                billingCycle === "annual" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative z-10 rounded-full px-5 py-2 font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`relative z-10 rounded-full px-5 py-2 font-semibold transition-all ${
                billingCycle === "annual"
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-slate-700">Plans</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold text-blue-700">Current plan</p>
                  <h4 className="text-base font-semibold text-slate-900 mt-1">{currentPlan.name}</h4>
                  <p className="text-xs text-slate-600 mt-1">{currentPlan.tagline}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-slate-500">
                    {billingCycle === "monthly" ? "Monthly" : "Annual"}
                  </p>
                  <p className="text-base font-bold text-slate-900">
                    {formatCurrency(displayPrice(currentPlan))}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-1">
                  {currentPlan.savingsLabel}
                </span>
                <Link href={`/products/${currentPlan.slug}`}>
                  <Button variant="outline" size="sm" className="text-[11px] border-slate-200 text-slate-700 hover:bg-slate-50">
                    Details
                  </Button>
                </Link>
              </div>
            </div>
            {otherPlans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-semibold text-slate-900">{plan.name}</h4>
                    <p className="text-xs text-slate-600 mt-1">{plan.tagline}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-slate-500">
                      {billingCycle === "monthly" ? "Monthly" : "Annual"}
                    </p>
                    <p className="text-base font-bold text-slate-900">
                      {formatCurrency(displayPrice(plan))}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-1">
                    {plan.savingsLabel}
                  </span>
                  <Button size="sm" className="text-[11px] bg-blue text-white hover:bg-blue-dark">
                    Upgrade
                  </Button>
                </div>
                <div className="mt-2">
                  <Link href={`/products/${plan.slug}`} className="text-[11px] text-blue-700 hover:underline">
                    View product details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Side-by-side comparison</h2>
              <p className="text-sm text-slate-600 mt-1">
                Compare what is included in each plan at a glance.
              </p>
            </div>
            <Link href="/comparison">
              <Button variant="outline" size="sm" className="text-xs border-slate-200 text-slate-700 hover:bg-slate-50">
                Explore the full matrix
              </Button>
            </Link>
          </div>
          <div className="mt-4 overflow-x-auto">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-4 gap-4 text-sm font-semibold text-slate-700">
                <div>Feature</div>
                <div>Insurance Basic</div>
                <div>Insurance Now</div>
                <div>Insurance Suite</div>
              </div>
              <div className="mt-3 space-y-2">
                {comparisonRows.map((row) => (
                  <div key={row.label} className="grid grid-cols-4 gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm">
                    <div className="font-medium text-slate-700">{row.label}</div>
                    {["basic", "now", "suite"].map((planId) => {
                      const value = row.values[planId as PlanId];
                      return (
                        <div key={planId} className="flex items-center gap-2 text-slate-600">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="h-4 w-4 text-emerald-500" />
                            ) : (
                              <X className="h-4 w-4 text-slate-300" />
                            )
                          ) : (
                            <span className="font-semibold text-slate-700">{value}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-blue-200/70 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-700">Insurance Suite</p>
              <h3 className="text-lg font-semibold text-slate-900 mt-1">Need enterprise-grade coverage?</h3>
              <p className="text-sm text-slate-600 mt-1">
                Talk to sales for custom SLAs, rollout plans, and enterprise pricing.
              </p>
            </div>
            <Link href="/contact">
              <Button className="text-xs bg-blue text-white hover:bg-blue-dark">
                <Phone className="mr-2 h-4 w-4" />
                Contact sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
