/**
 * Use Cases Page Data
 * 
 * Content for the Solutions > By Use Case section.
 */

import { CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface UseCaseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}

export const useCases: UseCaseItem[] = [
  {
    icon: CheckCircle2,
    title: "Underwriting & Pricing",
    description: "Automate risk assessment and pricing with configurable rules, scoring, and approvals.",
    bullets: ["Rule-based underwriting", "Risk scoring and tiers", "Approval workflows"],
  },
  {
    icon: CheckCircle2,
    title: "Policy Administration",
    description: "Manage the full policy lifecycle across products, endorsements, and renewals.",
    bullets: ["Quote-to-bind", "Endorsements", "Renewals"],
  },
  {
    icon: CheckCircle2,
    title: "Claims Management",
    description: "Accelerate claims intake, adjudication, and settlement with automation and analytics.",
    bullets: ["FNOL to settlement", "Fraud checks", "Reserve tracking"],
  },
  {
    icon: CheckCircle2,
    title: "Customer Portals",
    description: "Deliver self-service experiences for policyholders, providers, brokers, and employers.",
    bullets: ["White-label portals", "Omnichannel notifications", "Document management"],
  },
  {
    icon: CheckCircle2,
    title: "Analytics & Reporting",
    description: "Get real-time visibility into operations, compliance, and portfolio performance.",
    bullets: ["Custom dashboards", "Regulatory reporting", "Operational KPIs"],
  },
  {
    icon: CheckCircle2,
    title: "Integrations & APIs",
    description: "Connect core systems, payment providers, and external data sources with secure APIs.",
    bullets: ["Open API layer", "Partner integrations", "Data exchange"],
  },
];
