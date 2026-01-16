import { 
  Zap, Globe, Award, Building, Layers, TrendingUp, FileText, Users,
  DollarSign, Monitor, Shield, CheckCircle, BarChart3, Globe2, Lock,
  Smartphone, Settings, ClipboardCheck, Briefcase, Activity, Target
} from "lucide-react";
import type { CapabilityItem, FeatureItem, IdealForItem } from "@/types";

interface ProductData {
  slug: string;
  name: string;
  colorScheme: "blue" | "indigo" | "purple" | "orange";
  hero: {
    badge: { icon: any; text: string };
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    image?: { src: string; alt: string };
    cta: {
      primary: { text: string; href: string };
      secondary: { text: string; href: string };
    };
  };
  stats: { value: string; label: string }[];
  capabilities: {
    title: string;
    description: string;
    items: CapabilityItem[];
  };
  digitalExperience: {
    title: string;
    description: string;
    items: FeatureItem[];
  };
  integrations?: {
    title: string;
    description: string;
    items: { name: string; description: string }[];
  };
  idealFor: {
    title: string;
    description: string;
    items: IdealForItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: { text: string; href: string };
    secondaryButton?: { text: string; href: string };
    tertiaryButton?: { text: string; href: string };
  };
}

export const productsData: Record<string, ProductData> = {
  "insurance-basic": {
    slug: "insurance-basic",
    name: "Insurance Basic",
    colorScheme: "blue",
    hero: {
      badge: { icon: Zap, text: "Quick Start Solution" },
      title: "Insurance Basic",
      subtitle: "Starting at SAR 2,500/month",
      description: "Essential coverage, rapid-to-value experiences designed for small insurers looking to launch quickly, and long-term flexibility enabling you to migrate easily to advanced products.",
      features: ["Policy Admin", "Billing Center", "Pricing Center", "API Access", "Mobile App", "24/7 Support"],
      image: { src: "/images/products/basic-dashboard.svg", alt: "Insurance Basic platform dashboard" },
      cta: {
        primary: { text: "Start Free Trial", href: "/trial" },
        secondary: { text: "Buy Now", href: "/purchase" },
      },
    },
    stats: [
      { value: "500+", label: "Small Insurers" },
      { value: "20+", label: "Years Experience" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "24/7", label: "Support" },
    ],
    capabilities: {
      title: "Core capabilities for insurance operations",
      description: "Everything you need to launch and run your insurance operations efficiently.",
      items: [
        { icon: FileText, name: "Policy Administration", description: "Comprehensive lifecycle management from quote to renewal", features: ["Policy tracking", "Auto renewals", "Document center"] },
        { icon: DollarSign, name: "Billing Center", description: "Smart invoicing and collection management", features: ["Invoice generation", "Payment tracking", "Collections"] },
        { icon: TrendingUp, name: "Pricing Center", description: "Automate pricing calculations and configure pricing tables", features: ["Rate calculation", "Pricing rules", "Quote generation"] },
      ],
    },
    digitalExperience: {
      title: "Digital portals for members and brokers",
      description: "Provide modern digital experiences to your stakeholders.",
      items: [
        { name: "Member Portal", description: "Digital experience allowing members to view policies, claims, and access self-service tools", icon: Monitor },
        { name: "Broker Portal", description: "Agent platform for policy management and commission tracking", icon: Users },
      ],
    },
    integrations: {
      title: "Regulatory compliance and integrations",
      description: "Built-in compliance features and integration capabilities for local markets.",
      items: [
        { name: "SAMA Compliance", description: "Saudi Arabian Monetary Authority regulatory reporting" },
        { name: "Najm Integration", description: "Direct integration with Najm for motor insurance claims" },
        { name: "CCHI Integration", description: "Council of Cooperative Health Insurance connectivity" },
        { name: "Local Payment Gateways", description: "Support for Mada, STC Pay, and other local payment methods" },
        { name: "Government APIs", description: "MOI, MOH, and other government system integrations" },
        { name: "Banking Integration", description: "SADAD and bank payment file processing" },
      ],
    },
    idealFor: {
      title: "Perfect for growing insurers",
      description: "Insurance Basic is ideal for small to mid-size insurers looking to digitize.",
      items: [
        { title: "Small Insurers", description: "Companies with 10-100 employees launching digital operations", icon: Building },
        { title: "Pilot Programs", description: "Testing new insurance products or entering new markets", icon: Zap },
        { title: "Focused Operations", description: "Insurers specializing in specific product lines", icon: Target },
      ],
    },
    cta: {
      title: "Start your free 30-day trial",
      description: "Get full access to Insurance Basic. Credit card required. Cancel anytime.",
      primaryButton: { text: "Start free trial", href: "/trial" },
      secondaryButton: { text: "Buy now", href: "/purchase" },
      tertiaryButton: { text: "Talk to sales", href: "/contact" },
    },
  },

  "insurance-now": {
    slug: "insurance-now",
    name: "Insurance Now",
    colorScheme: "indigo",
    hero: {
      badge: { icon: TrendingUp, text: "Most Popular" },
      title: "Insurance Now",
      subtitle: "Starting at SAR 5,500/month",
      description: "Advanced insurance operations platform with claims management, pre-authorization, rules engine, and comprehensive digital portals for growing insurers.",
      features: ["Claims Management", "Pre-Authorization", "Rules Engine", "Provider Portal", "Mobile App", "Priority Support"],
      cta: {
        primary: { text: "Start Free Trial", href: "/trial" },
        secondary: { text: "Buy Now", href: "/purchase" },
      },
    },
    stats: [
      { value: "1000+", label: "Growing Companies" },
      { value: "50-500", label: "Employee Range" },
      { value: "99.95%", label: "Uptime SLA" },
      { value: "24/7", label: "Priority Support" },
    ],
    capabilities: {
      title: "Advanced features for growing operations",
      description: "Everything in Insurance Basic, plus pre-authorization, claims management, and advanced portals.",
      items: [
        { icon: FileText, name: "Policy Administration", description: "Complete policy lifecycle with advanced workflows", features: ["Policy management", "Renewals", "Endorsements", "Documents"] },
        { icon: ClipboardCheck, name: "Claims Management", description: "End-to-end claims processing and settlement", features: ["FNOL", "Adjudication", "Settlement", "Fraud detection"] },
        { icon: CheckCircle, name: "Pre-Authorization", description: "Medical pre-approval and authorization workflows", features: ["Approval workflows", "Medical checks", "Provider verification"] },
        { icon: DollarSign, name: "Billing Center", description: "Advanced billing with payment plans", features: ["Invoicing", "Collections", "Payment plans"] },
        { icon: TrendingUp, name: "Pricing Engine", description: "Sophisticated rating and pricing", features: ["Advanced rating", "Pricing rules", "Underwriting"] },
        { icon: Settings, name: "Rules Engine", description: "Business rules and workflow automation", features: ["Visual rule builder", "Workflow automation", "Decision tables"] },
      ],
    },
    digitalExperience: {
      title: "Complete digital experience suite",
      description: "Four powerful portals serving all stakeholders.",
      items: [
        { name: "Member Portal", description: "Self-service portal with claims submission and policy management", icon: Monitor },
        { name: "Provider Portal", description: "Healthcare provider portal with claims and eligibility", icon: Users },
        { name: "Broker Portal", description: "Agent platform with commission management", icon: BarChart3 },
        { name: "Mobile Application", description: "Native iOS and Android apps for members", icon: Smartphone },
      ],
    },
    integrations: {
      title: "Enterprise integrations and compliance",
      description: "Extended integration capabilities for complex operations.",
      items: [
        { name: "SAMA & CCHI Compliance", description: "Full regulatory compliance for Saudi market" },
        { name: "Najm & Tawuniya Network", description: "Motor insurance and health network integrations" },
        { name: "Provider Network APIs", description: "Integration with hospitals and clinics" },
        { name: "Payment Gateways", description: "Multiple payment processors and methods" },
        { name: "Third-party Systems", description: "ERP, CRM, and accounting system integrations" },
        { name: "Data Warehouse", description: "Export to BI and analytics platforms" },
      ],
    },
    idealFor: {
      title: "Perfect for growing companies",
      description: "Insurance Now is ideal for mid-size insurers ready to scale.",
      items: [
        { title: "Growing Insurers", description: "Companies with 50-500 employees scaling operations", icon: TrendingUp },
        { title: "Health Insurance", description: "Medical insurance with provider networks and pre-auth", icon: Activity },
        { title: "Multi-Product Insurers", description: "Organizations offering multiple insurance products", icon: Layers },
      ],
    },
    cta: {
      title: "Start your free 30-day trial",
      description: "Get full access to Insurance Now. Credit card required. Cancel anytime.",
      primaryButton: { text: "Start free trial", href: "/trial" },
      secondaryButton: { text: "Buy now", href: "/purchase" },
      tertiaryButton: { text: "Talk to sales", href: "/contact" },
    },
  },

  "insurance-suite": {
    slug: "insurance-suite",
    name: "Insurance Suite",
    colorScheme: "purple",
    hero: {
      badge: { icon: Award, text: "Enterprise Grade" },
      title: "Insurance Suite",
      subtitle: "Starting at SAR 15,000/month",
      description: "Complete enterprise insurance platform with full lifecycle management, advanced analytics, multi-market support, and white-label digital experiences.",
      features: ["Full Lifecycle", "Advanced BI", "Multi-Market", "White-label", "API Platform", "Dedicated Support"],
      cta: {
        primary: { text: "Contact Sales", href: "/contact" },
        secondary: { text: "Request Demo", href: "/trial" },
      },
    },
    stats: [
      { value: "100+", label: "Enterprise Clients" },
      { value: "50M+", label: "Policies Managed" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "24/7", label: "Dedicated Support" },
    ],
    capabilities: {
      title: "Enterprise-grade capabilities at scale",
      description: "Complete platform with advanced analytics, multi-market support, and white-label portals.",
      items: [
        { icon: Layers, name: "Full Lifecycle Management", description: "Complete insurance operations from quote to claims settlement", features: ["Policy admin", "Claims", "Billing", "Reinsurance", "Underwriting"] },
        { icon: BarChart3, name: "Advanced Analytics", description: "Business intelligence and predictive analytics", features: ["Custom dashboards", "Predictive models", "Data warehouse", "AI insights"] },
        { icon: Globe2, name: "Multi-Market Support", description: "Support for multiple countries and regulatory environments", features: ["Multi-currency", "Multi-language", "Local compliance", "Regional customization"] },
        { icon: Shield, name: "Enterprise Security", description: "Bank-grade security with comprehensive audit trails", features: ["SOC 2 certified", "Encryption", "Role-based access", "Audit logs"] },
        { icon: Monitor, name: "White-label Portals", description: "Fully customizable branded digital experiences", features: ["Custom branding", "Domain mapping", "UI customization", "Mobile apps"] },
        { icon: Zap, name: "API-First Platform", description: "Comprehensive APIs for seamless integrations", features: ["REST APIs", "Webhooks", "Real-time events", "Developer portal"] },
      ],
    },
    digitalExperience: {
      title: "White-label digital experience",
      description: "Fully customizable portals for all stakeholders with your brand.",
      items: [
        { name: "Member Portal", description: "Fully white-labeled portal with advanced self-service capabilities", icon: Monitor },
        { name: "Provider Portal", description: "Healthcare provider portal with claims management and analytics", icon: Users },
        { name: "Broker Portal", description: "Advanced broker platform with commission management and reporting", icon: BarChart3 },
        { name: "Employer Portal", description: "Corporate client portal for employee benefit management", icon: Building },
      ],
    },
    integrations: {
      title: "Enterprise integrations and APIs",
      description: "Comprehensive integration capabilities for large-scale operations.",
      items: [
        { name: "Multi-Country Compliance", description: "Support for regulatory requirements across regions" },
        { name: "Global Payment Systems", description: "Integration with international payment processors" },
        { name: "Reinsurance Platforms", description: "Connectivity with global reinsurance markets" },
        { name: "Core Banking Systems", description: "Integration with enterprise banking platforms" },
        { name: "Enterprise ERPs", description: "SAP, Oracle, and other ERP system integrations" },
        { name: "Data Lakes", description: "Export to enterprise data warehouses and lakes" },
        { name: "AI/ML Platforms", description: "Integration with machine learning and AI services" },
        { name: "Fraud Detection", description: "Advanced fraud detection and prevention systems" },
      ],
    },
    idealFor: {
      title: "Built for enterprise scale",
      description: "Insurance Suite is designed for large organizations with complex needs.",
      items: [
        { title: "Large Insurers", description: "Enterprise insurance companies with 500+ employees", icon: Building },
        { title: "Multi-National", description: "Organizations operating across multiple countries", icon: Globe },
        { title: "Regulated Markets", description: "Companies requiring strict compliance and audit capabilities", icon: Shield },
      ],
    },
    cta: {
      title: "Ready to transform your enterprise?",
      description: "Contact our enterprise team for a custom demo and pricing.",
      primaryButton: { text: "Contact Sales", href: "/contact" },
      secondaryButton: { text: "Request Demo", href: "/trial" },
    },
  },

  "tpa-platform": {
    slug: "tpa-platform",
    name: "TPA Platform",
    colorScheme: "orange",
    hero: {
      badge: { icon: Building, text: "Operations Focused" },
      title: "TPA Platform",
      subtitle: "Starting at SAR 4,500/month",
      description: "Purpose-built platform for third-party administrators managing claims, provider networks, and multi-client operations with complete transparency and reporting.",
      features: ["Claims Processing", "Provider Network", "Client Reporting", "Multi-client", "Commission Management", "24/7 Support"],
      cta: {
        primary: { text: "Start Free Trial", href: "/trial" },
        secondary: { text: "Buy Now", href: "/purchase" },
      },
    },
    stats: [
      { value: "200+", label: "TPA Clients" },
      { value: "100K+", label: "Claims/Month" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "24/7", label: "Support" },
    ],
    capabilities: {
      title: "Specialized features for TPAs",
      description: "Everything a third-party administrator needs to manage multiple clients efficiently.",
      items: [
        { icon: ClipboardCheck, name: "Claims Processing", description: "High-volume claims management and adjudication", features: ["FNOL", "Batch processing", "Adjudication", "Settlement", "Appeals"] },
        { icon: Users, name: "Provider Network", description: "Healthcare provider network management", features: ["Provider directory", "Credentialing", "Contract management", "Network analytics"] },
        { icon: BarChart3, name: "Client Reporting", description: "Comprehensive reporting for insurance clients", features: ["Custom reports", "Scheduled delivery", "Dashboards", "Data exports"] },
        { icon: Layers, name: "Multi-client Management", description: "Manage operations for multiple insurance clients", features: ["Client segregation", "Custom workflows", "Branding per client"] },
        { icon: DollarSign, name: "Commission Management", description: "Track and manage commissions and fees", features: ["Commission calculation", "Payment tracking", "Reconciliation"] },
        { icon: Lock, name: "Data Security", description: "Enterprise-grade security and client data isolation", features: ["Data segregation", "Audit trails", "Encryption", "Compliance"] },
      ],
    },
    digitalExperience: {
      title: "Portals for all stakeholders",
      description: "Digital experiences for providers, members, and your insurance clients.",
      items: [
        { name: "Provider Portal", description: "Healthcare provider portal for claims submission and status", icon: Users },
        { name: "Member Portal", description: "Member self-service for eligibility and claims tracking", icon: Monitor },
        { name: "Client Portal", description: "Insurance client portal for reporting and oversight", icon: Briefcase },
        { name: "Admin Dashboard", description: "TPA operations dashboard for managing all clients", icon: BarChart3 },
      ],
    },
    integrations: {
      title: "TPA-specific integrations",
      description: "Connect with provider networks, payment systems, and insurance clients.",
      items: [
        { name: "Provider Network APIs", description: "Integration with hospitals, clinics, and provider systems" },
        { name: "Insurance Client Systems", description: "Connect to your clients' policy and member systems" },
        { name: "Payment Processing", description: "Claims payment and provider settlement systems" },
        { name: "CCHI & Regulatory", description: "Compliance reporting to regulatory authorities" },
        { name: "Medical Coding", description: "ICD-10, CPT, and local medical coding systems" },
        { name: "Pharmacy Networks", description: "Integration with pharmacy benefit management" },
      ],
    },
    idealFor: {
      title: "Built for TPA operations",
      description: "TPA Platform is designed specifically for third-party administrators.",
      items: [
        { title: "Third-Party Administrators", description: "Companies managing claims and operations for insurers", icon: Building },
        { title: "Claims Administrators", description: "Organizations specializing in claims processing", icon: ClipboardCheck },
        { title: "Healthcare Managers", description: "Providers of healthcare management services", icon: Activity },
      ],
    },
    cta: {
      title: "Start managing TPA operations better",
      description: "Get full access to TPA Platform. Credit card required. Cancel anytime.",
      primaryButton: { text: "Start free trial", href: "/trial" },
      secondaryButton: { text: "Buy now", href: "/purchase" },
      tertiaryButton: { text: "Talk to sales", href: "/contact" },
    },
  },

  "insurance-build": {
    slug: "insurance-build",
    name: "Insurance Build",
    colorScheme: "orange",
    hero: {
      badge: { icon: Layers, text: "Build Your Own" },
      title: "Insurance Build",
      subtitle: "Custom pricing based on your selection",
      description: "Choose exactly what you need. Select individual modules or create custom combinations. Pay only for what you use. Perfect for unique workflows and specialized operations.",
      features: ["Pay only for what you need", "Mix and match modules", "Scale as you grow", "No vendor lock-in"],
      cta: {
        primary: { text: "Start Building", href: "#modules" },
        secondary: { text: "Talk to Sales", href: "/contact" },
      },
    },
    stats: [
      { value: "16", label: "Available Modules" },
      { value: "4", label: "Categories" },
      { value: "100%", label: "Flexible" },
      { value: "24/7", label: "Support" },
    ],
    capabilities: {
      title: "Available modules across all categories",
      description: "Choose from 16 modules across Core, Processing, Digital, and Advanced categories.",
      items: [
        { icon: FileText, name: "Core Modules", description: "Essential policy, billing, and pricing capabilities", features: ["Policy Administration (SAR 800/mo)", "Billing Center (SAR 600/mo)", "Pricing Engine (SAR 700/mo)"] },
        { icon: ClipboardCheck, name: "Processing Modules", description: "Claims, pre-authorization, rules, and document management", features: ["Claims Management (SAR 900/mo)", "Pre-Authorization (SAR 500/mo)", "Rules Engine (SAR 800/mo)", "Document Management (SAR 400/mo)"] },
        { icon: Monitor, name: "Digital Modules", description: "Member, provider, broker portals and mobile apps", features: ["Member Portal (SAR 600/mo)", "Provider Portal (SAR 700/mo)", "Broker Portal (SAR 600/mo)", "Mobile App (SAR 1,200/mo)"] },
        { icon: BarChart3, name: "Advanced Modules", description: "Analytics, APIs, reinsurance, and underwriting", features: ["Analytics & BI (SAR 900/mo)", "API Platform (SAR 800/mo)", "Reinsurance (SAR 1,000/mo)", "Underwriting (SAR 1,100/mo)"] },
      ],
    },
    digitalExperience: {
      title: "Flexible digital experiences",
      description: "Add only the portals your business needs.",
      items: [
        { name: "Member Portal", description: "Self-service portal for policyholders - SAR 600/month", icon: Monitor },
        { name: "Provider Portal", description: "Healthcare provider management - SAR 700/month", icon: Users },
        { name: "Broker Portal", description: "Agent and broker platform - SAR 600/month", icon: BarChart3 },
        { name: "Mobile Application", description: "Native iOS and Android apps - SAR 1,200/month", icon: Smartphone },
      ],
    },
    integrations: {
      title: "Modular integrations",
      description: "Add integration capabilities based on your needs.",
      items: [
        { name: "Basic Compliance", description: "SAMA and CCHI regulatory compliance" },
        { name: "Payment Gateways", description: "Multiple payment processors" },
        { name: "Provider Networks", description: "Healthcare provider integrations" },
        { name: "Third-party Systems", description: "ERP, CRM, and accounting integrations" },
        { name: "API Access", description: "RESTful APIs for custom integrations" },
        { name: "Data Export", description: "Export to BI and analytics platforms" },
      ],
    },
    idealFor: {
      title: "Perfect for unique requirements",
      description: "Insurance Build is ideal for organizations with specific needs.",
      items: [
        { title: "Custom Models", description: "Unique insurance products or business models", icon: Layers },
        { title: "Specialized Operations", description: "Niche markets or specialized workflows", icon: Target },
        { title: "Budget Conscious", description: "Pay only for features you actually need", icon: DollarSign },
      ],
    },
    cta: {
      title: "Ready to build your custom solution?",
      description: "Select your modules and get a custom quote based on your needs.",
      primaryButton: { text: "Start selecting modules", href: "#modules" },
      secondaryButton: { text: "Talk to sales", href: "/contact" },
    },
  },
};

// Helper function to get product by slug
export function getProductBySlug(slug: string): ProductData | null {
  return productsData[slug] || null;
}

// Helper function to get all product slugs (for static generation)
export function getAllProductSlugs(): string[] {
  return Object.keys(productsData);
}

// Keep existing exports for backward compatibility
export * from "./products.data";
