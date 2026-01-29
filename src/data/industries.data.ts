/**
 * Industries Page Data
 * 
 * Centralized content for the industries listing page.
 */

import { Heart, Users, Car, Plane, Home, Building } from "lucide-react";
import { IndustryDetail } from "@/types";

export const industriesDetail: IndustryDetail[] = [
  {
    icon: Heart,
    name: "Health Insurance",
    description: "Modern health insurance platforms for provider networks, pre-auth, claims, and member servicing with built-in compliance.",
    highlights: [
      "Provider network integration",
      "Pre-authorization workflows",
      "Claims automation and audits",
    ],
    ctaHref: "/products",
  },
  {
    icon: Users,
    name: "Life Insurance",
    description: "Lifecycle management for life products with underwriting, beneficiary servicing, and policy administration.",
    highlights: [
      "Underwriting and risk scoring",
      "Policy admin and renewals",
      "Beneficiary management",
    ],
    ctaHref: "/products",
  },
  {
    icon: Car,
    name: "Motor Insurance",
    description: "Quote-to-claims automation with repair networks, payments, and fraud prevention for motor portfolios.",
    highlights: [
      "Instant quote and issuance",
      "Repair shop integrations",
      "Fraud detection controls",
    ],
    ctaHref: "/products",
  },
  {
    icon: Plane,
    name: "Travel Insurance",
    description: "Flexible travel products with fast issuance, multi-region coverage, and automated claims handling.",
    highlights: [
      "Multi-region coverage",
      "Embedded travel distribution",
      "Rapid claims settlement",
    ],
    ctaHref: "/products",
  },
  {
    icon: Home,
    name: "Property & Casualty",
    description: "End-to-end P&C workflows with endorsements, renewals, and risk management for complex portfolios.",
    highlights: [
      "Policy endorsements",
      "Renewals and mid-term changes",
      "Risk and exposure analytics",
    ],
    ctaHref: "/products",
  },
  {
    icon: Building,
    name: "Third Party Administrators",
    description: "Streamlined processing and delegated authority for TPAs managing multiple insurers and products.",
    highlights: [
      "Delegated authority controls",
      "Multi-client reporting",
      "Configurable workflows",
    ],
    ctaHref: "/products",
  },
];
