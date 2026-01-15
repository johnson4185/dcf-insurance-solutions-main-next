import { Zap, Globe, Award, Building, Layers, TrendingUp, FileText, Users, ClipboardList, DollarSign, Monitor, Shield, CheckCircle, BarChart3, Globe2, Lock, Rocket, Smartphone, Settings, ClipboardCheck, Repeat, type LucideIcon } from "lucide-react";
import { ProductCard, CapabilityItem, FeatureItem, IdealForItem } from "@/types";

export const allProducts: ProductCard[] = [
  {
    icon: Zap,
    name: "Insurance Basic",
    tagline: "Start Your Digital Journey",
    description: "A foundational insurance product providing essential capabilities to manage policies, members, and claims with configurable compliance for local markets.",
    bestFor: ["Small insurers", "Pilot programs", "Focused operations"],
    path: "/products/insurance-basic",
    highlight: false,
    features: ["Policy Administration", "Member Management", "Claims Intake", "Local Compliance Support"],
  },
  {
    icon: TrendingUp,
    name: "Insurance Now",
    tagline: "Scale With Confidence",
    description: "An advanced insurance product designed to support growing insurers with complex workflows, pricing engines, and comprehensive digital experiences.",
    bestFor: ["Mid-size insurers", "Expanding operations", "High transaction volumes"],
    path: "/products/insurance-now",
    highlight: true,
    features: ["Claims Management", "Pre-Authorization", "Pricing Engine", "Local Integrations"],
  },
  {
    icon: Award,
    name: "Insurance Suite",
    tagline: "Enterprise Excellence",
    description: "A comprehensive enterprise insurance product covering the full insurance lifecycle with advanced analytics and complete regulatory compliance.",
    bestFor: ["Large insurers", "Enterprise organizations", "Regulated markets"],
    path: "/products/insurance-suite",
    highlight: false,
    features: ["Full Lifecycle", "Advanced Analytics", "Omnichannel Portals", "Enterprise SLA"],
  },
  {
    icon: Building,
    name: "TPA Product",
    tagline: "Operations Focused",
    description: "An operations-focused insurance product built specifically for third-party administrators managing claims and provider networks.",
    bestFor: ["TPAs", "Claims administrators", "Healthcare managers"],
    path: "/products/tpa-platform",
    highlight: false,
    features: ["Claims Processing", "Provider Network", "Client Reporting", "Multi-client Support"],
  },
  {
    icon: Layers,
    name: "Insurance Build",
    tagline: "Custom Solutions",
    description: "A customizable insurance product allowing organizations to select and combine modules based on their unique operational needs.",
    bestFor: ["Custom insurance models", "Specialized operations", "Unique workflows"],
    path: "/products/insurance-build",
    highlight: false,
    features: ["Modular Architecture", "Custom Workflows", "API-First Design", "Flexible Pricing"],
  },
];

export const productsOverviewContent = {
  title: "DCF Insurance Products",
  description: "DCF offers a range of insurance products designed to support different stages of insurance operations, from early-stage teams to large enterprises across global markets.",
  sectionTitle: "Choose Your Product",
  sectionDescription: "Select the right insurance platform for your organization's needs",
  heroImage: {
    src: "/images/hero-image.jpg",
    alt: "Modern business district",
  },
};

// Insurance Basic Product Data
export const insuranceBasicContent = {
  hero: {
    badge: { icon: Zap, text: "Quick Start Solution" },
    title: "Insurance Basic",
    subtitle: "Starting at SAR 2,500/month",
    description: "Essential coverage, Rapid-to-value experiences designed for small insurers looking to launch quickly, and long-term flexibility enabling you to migrate easily to advanced products.",
    cta: {
      primary: { text: "Start Free Trial", href: "/trial" },
      secondary: { text: "Buy Now", href: "/purchase" },
      tertiary: { text: "Compare Products", href: "/comparison" },
    },
    image: {
      src: "/images/products/insurance-basic-hero.jpg",
      alt: "Insurance Basic platform dashboard",
    },
  },
  features: [
    "Policy Admin",
    "Billing Center", 
    "Pricing Center",
    "API Access",
    "Mobile App",
    "24/7 Support",
  ],
};

export const insuranceBasicCapabilities: CapabilityItem[] = [
  { 
    icon: FileText, 
    name: "Policy Admin", 
    description: "Comprehensive life-cycle management from quote to renewal",
    features: ["Policy tracking", "Auto renewals", "Document center"]
  },
  { 
    icon: DollarSign, 
    name: "Billing Center", 
    description: "Smart invoicing, receipting and collection management",
    features: ["Invoice generation", "Payment tracking", "Collections"]
  },
  { 
    icon: TrendingUp, 
    name: "Pricing Center", 
    description: "Automate pricing calculations and configure pricing tables",
    features: ["Rate calculation", "Pricing rules", "Quote generation"]
  },
];

export const insuranceBasicDigitalExperience: FeatureItem[] = [
  { 
    name: "Member Portal", 
    description: "Digital experience allowing members to view policies, claims, and access self-service tools",
    icon: Monitor
  },
  { 
    name: "Broker Portal", 
    description: "A broker-focused web and mobile portal for selling and managing policies on behalf of customers",
    icon: Users
  },
];

export const insuranceBasicRegulatorySupport: FeatureItem[] = [
  { name: "CHI", description: "Council of Cooperative Health Insurance", available: true },
  { name: "ZATCA", description: "Zakat, Tax and Customs Authority", available: true },
  { name: "WASFN", description: "Waseel Financial Network", available: true },
  { name: "NAFATH", description: "National Access Federation", available: true },
  { name: "MOHASAH", description: "Insurance Claims Platform", available: true },
  { name: "ABSHER", description: "National Portal Services", available: true },
];

export const insuranceBasicWhyChoose = [
  { 
    title: "Quick Deployment", 
    description: "Go live in weeks, not months",
    icon: Zap
  },
  { 
    title: "Scalable Platform", 
    description: "Grow seamlessly as your business expands",
    icon: TrendingUp
  },
  { 
    title: "Affordable Pricing", 
    description: "Enterprise features at a small business price",
    icon: DollarSign
  },
  { 
    title: "Local Support", 
    description: "24/7 support in Arabic and English",
    icon: Shield
  },
];

export const insuranceBasicIdealFor: IdealForItem[] = [
  { 
    title: "Small Insurers", 
    description: "Perfect for insurance companies with 10-50 employees looking to digitize operations",
    icon: Building
  },
  { 
    title: "Startups", 
    description: "Ideal for launching new insurance products quickly with minimal investment",
    icon: Zap
  },
  { 
    title: "Pilot Programs", 
    description: "Test and validate insurance concepts before scaling to larger operations",
    icon: CheckCircle
  },
];

// Insurance Now Product Data
export const insuranceNowContent = {
  hero: {
    badge: { icon: TrendingUp, text: "Most Popular" },
    title: "Insurance Now",
    subtitle: "Starting at SAR 5,500/month",
    description: "Launch faster, scale smarter, and give policyholders outstanding, pre-authorization, and full regulatory compliance—designed for growing insurers ready to level up.",
    cta: {
      primary: { text: "Start Free Trial", href: "/trial" },
      secondary: { text: "Buy Now", href: "/purchase" },
      tertiary: { text: "Compare Products", href: "/comparison" },
    },
    image: {
      src: "/images/products/insurance-now.jpg",
      alt: "Insurance Now platform dashboard",
    },
  },
  features: [
    "Claims Management",
    "Pre-Authorization",
    "Pricing Engine",
    "Document Management",
    "Mobile App",
    "Enterprise APIs",
  ],
};

export const insuranceNowCapabilities: CapabilityItem[] = [
  { 
    icon: FileText, 
    name: "Policy Admin", 
    description: "Complete policy lifecycle management with automated workflows",
    features: ["Policy tracking", "Auto renewals", "Endorsements", "Document center"]
  },
  { 
    icon: ClipboardList, 
    name: "Claims Management", 
    description: "End-to-end claims processing from intake to settlement",
    features: ["Claims tracking", "Pre-processing", "Approvals", "Settlements"]
  },
  { 
    icon: CheckCircle, 
    name: "Pre-Authorization", 
    description: "Streamlined pre-authorization with automated decisioning",
    features: ["Auto-approval", "Limit checks", "Provider validation"]
  },
  { 
    icon: DollarSign, 
    name: "Billing Center", 
    description: "Advanced invoicing with integrated payment gateways",
    features: ["Invoice generation", "Payment tracking", "Reconciliation", "Collections"]
  },
  { 
    icon: TrendingUp, 
    name: "Pricing Engine", 
    description: "Sophisticated pricing with rules engine capabilities",
    features: ["Rate calculation", "Discount rules", "Quote generation", "What-if analysis"]
  },
  { 
    icon: FileText, 
    name: "Rules Engine", 
    description: "Business rules automation for underwriting and claims",
    features: ["Rule builder", "Decision tables", "Workflow automation"]
  },
];

export const insuranceNowDigitalExperience: FeatureItem[] = [
  { 
    name: "Member Portal", 
    description: "Self-service portal with claims submission and policy management",
    icon: Monitor
  },
  { 
    name: "Provider Portal", 
    description: "Portal for healthcare providers to submit and track claims",
    icon: Users
  },
  { 
    name: "Broker Portal", 
    description: "Advanced broker tools with sales analytics and commission tracking",
    icon: BarChart3
  },
  { 
    name: "Mobile App", 
    description: "Native iOS and Android apps for members and providers",
    icon: Monitor
  },
];

export const insuranceNowIdealFor: IdealForItem[] = [
  { 
    title: "Growing Insurers", 
    description: "Mid-size insurance companies scaling to handle 50-500 employees",
    icon: TrendingUp
  },
  { 
    title: "Health Insurance", 
    description: "Companies offering health insurance with pre-authorization needs",
    icon: Shield
  },
  { 
    title: "Multi-Product Insurers", 
    description: "Organizations managing multiple insurance product lines",
    icon: Layers
  },
];

// Insurance Suite Product Data
export const insuranceSuiteContent = {
  hero: {
    badge: { icon: Award, text: "Enterprise Grade" },
    title: "Insurance Suite",
    subtitle: "Starting at SAR 15,000/month",
    description: "Insurance power tailored to your enterprise scale. Advanced analytics, regulatory compliance packages, configurable workflows, and white-labeling capabilities—perfect for large organizations and complex regulated markets.",
    cta: {
      primary: { text: "Contact Sales", href: "/contact" },
      secondary: { text: "Schedule Demo", href: "/contact" },
      tertiary: { text: "Compare Products", href: "/comparison" },
    },
    image: {
      src: "/images/products/insurance-suite.jpg",
      alt: "Insurance Suite enterprise platform",
    },
  },
  features: [
    "Full Lifecycle",
    "Advanced BI",
    "Rules Engine",
    "Document Management",
    "Omnichannel",
    "White-label",
  ],
};

export const insuranceSuiteCapabilities: CapabilityItem[] = [
  { 
    icon: Layers, 
    name: "Full Lifecycle Management", 
    description: "Complete insurance operations from quote to claims settlement",
    features: ["Policy admin", "Claims processing", "Billing", "Reinsurance", "Underwriting"]
  },
  { 
    icon: BarChart3, 
    name: "Advanced Analytics", 
    description: "Business intelligence and predictive analytics for decision making",
    features: ["Custom dashboards", "Predictive models", "Data warehouse", "AI insights"]
  },
  { 
    icon: Globe2, 
    name: "Multi-Market Support", 
    description: "Support for multiple countries and regulatory environments",
    features: ["Multi-currency", "Multi-language", "Local compliance", "Regional customization"]
  },
  { 
    icon: Shield, 
    name: "Enterprise Security", 
    description: "Bank-grade security with comprehensive audit trails",
    features: ["SOC 2 certified", "Encryption at rest", "Role-based access", "Audit logs"]
  },
  { 
    icon: Monitor, 
    name: "White-label Portals", 
    description: "Fully customizable branded digital experiences",
    features: ["Custom branding", "Domain mapping", "UI customization", "Mobile apps"]
  },
  { 
    icon: Zap, 
    name: "API-First Platform", 
    description: "Comprehensive APIs for seamless integrations",
    features: ["REST APIs", "Webhooks", "Real-time events", "Developer portal"]
  },
];

export const insuranceSuiteDigitalExperience: FeatureItem[] = [
  { 
    name: "Member Portal", 
    description: "Fully white-labeled portal with advanced self-service capabilities",
    icon: Monitor
  },
  { 
    name: "Provider Portal", 
    description: "Healthcare provider portal with claims management and analytics",
    icon: Users
  },
  { 
    name: "Broker Portal", 
    description: "Advanced broker platform with commission management and reporting",
    icon: BarChart3
  },
  { 
    name: "Employer Portal", 
    description: "Corporate client portal for employee benefit management",
    icon: Building
  },
];

export const insuranceSuiteIdealFor: IdealForItem[] = [
  { 
    title: "Large Insurers", 
    description: "Enterprise insurance companies with 500+ employees and complex operations",
    icon: Building
  },
  { 
    title: "Multi-National", 
    description: "Organizations operating across multiple countries and regulatory zones",
    icon: Globe
  },
  { 
    title: "Regulated Markets", 
    description: "Companies requiring strict compliance and audit capabilities",
    icon: Shield
  },
];

// Insurance Build Product Data - Modular Selection
export const insuranceBuildContent = {
  hero: {
    badge: { icon: Layers, text: "Build Your Own" },
    title: "Insurance Build",
    subtitle: "Custom pricing based on your selection",
    description: "Choose exactly what you need. Select individual modules or create custom combinations. Pay only for what you use. Perfect for unique workflows and specialized operations.",
    cta: {
      primary: { text: "Start Building", href: "#modules" },
      secondary: { text: "Talk to Sales", href: "/contact" },
    },
  },
  benefits: [
    "Pay only for what you need",
    "Mix and match any modules",
    "Scale as you grow",
    "No vendor lock-in",
  ],
};

// All available modules for Insurance Build
export interface BuildModule {
  id: string;
  icon: LucideIcon;
  name: string;
  category: "Core" | "Processing" | "Digital" | "Advanced";
  description: string;
  price: number; // SAR per month
  features: string[];
  dependencies?: string[]; // Module IDs that are required
  popular?: boolean;
}

export const insuranceBuildModules: BuildModule[] = [
  // Core Modules
  {
    id: "policy-admin",
    icon: FileText,
    name: "Policy Administration",
    category: "Core",
    description: "Comprehensive policy lifecycle management from quote to renewal",
    price: 800,
    features: ["Policy tracking", "Quote generation", "Auto renewals", "Document center", "Endorsements"],
    popular: true,
  },
  {
    id: "billing-center",
    icon: DollarSign,
    name: "Billing Center",
    category: "Core",
    description: "Smart invoicing and collection management",
    price: 600,
    features: ["Invoice generation", "Payment tracking", "Collections", "Receipt management", "Payment plans"],
    popular: true,
  },
  {
    id: "pricing-engine",
    icon: TrendingUp,
    name: "Pricing Engine",
    category: "Core",
    description: "Automate pricing calculations and configure rating tables",
    price: 700,
    features: ["Rate calculation", "Pricing rules", "Quote generation", "Underwriting rules", "Rating tables"],
    popular: true,
  },
  
  // Processing Modules
  {
    id: "claims-management",
    icon: ClipboardCheck,
    name: "Claims Management",
    category: "Processing",
    description: "End-to-end claims processing and settlement",
    price: 900,
    features: ["FNOL", "Claims tracking", "Adjudication", "Settlement", "Fraud detection"],
    popular: true,
  },
  {
    id: "pre-authorization",
    icon: CheckCircle,
    name: "Pre-Authorization",
    category: "Processing",
    description: "Medical pre-approval and authorization workflows",
    price: 500,
    features: ["Approval workflows", "Medical necessity checks", "Provider verification", "Status tracking"],
  },
  {
    id: "rules-engine",
    icon: Settings,
    name: "Rules Engine",
    category: "Processing",
    description: "Business rules and workflow automation",
    price: 800,
    features: ["Visual rule builder", "Workflow automation", "Decision tables", "Rule versioning"],
  },
  {
    id: "document-management",
    icon: FileText,
    name: "Document Management",
    category: "Processing",
    description: "Centralized document storage and management",
    price: 400,
    features: ["Document storage", "Template management", "E-signatures", "Version control"],
  },
  
  // Digital Experience Modules
  {
    id: "member-portal",
    icon: Monitor,
    name: "Member Portal",
    category: "Digital",
    description: "Self-service portal for policyholders",
    price: 600,
    features: ["Policy viewing", "Claims submission", "Document downloads", "Payment options", "Profile management"],
    dependencies: ["policy-admin"],
    popular: true,
  },
  {
    id: "provider-portal",
    icon: Users,
    name: "Provider Portal",
    category: "Digital",
    description: "Healthcare provider management portal",
    price: 700,
    features: ["Claims submission", "Eligibility checks", "Payment tracking", "Provider directory"],
    dependencies: ["claims-management"],
  },
  {
    id: "broker-portal",
    icon: BarChart3,
    name: "Broker Portal",
    category: "Digital",
    description: "Agent and broker management platform",
    price: 600,
    features: ["Commission tracking", "Policy management", "Client reports", "Sales dashboard"],
    dependencies: ["policy-admin"],
  },
  {
    id: "mobile-app",
    icon: Smartphone,
    name: "Mobile Application",
    category: "Digital",
    description: "Native iOS and Android applications",
    price: 1200,
    features: ["Native apps", "Push notifications", "Offline access", "Mobile payments", "Biometric auth"],
    dependencies: ["member-portal"],
  },
  
  // Advanced Modules
  {
    id: "analytics-bi",
    icon: BarChart3,
    name: "Analytics & BI",
    category: "Advanced",
    description: "Business intelligence and reporting",
    price: 900,
    features: ["Custom dashboards", "Report builder", "Data exports", "Scheduled reports", "KPI tracking"],
  },
  {
    id: "api-platform",
    icon: Zap,
    name: "API Platform",
    category: "Advanced",
    description: "RESTful APIs for integrations",
    price: 800,
    features: ["REST APIs", "Webhooks", "API documentation", "Rate limiting", "API keys"],
  },
  {
    id: "reinsurance",
    icon: Repeat,
    name: "Reinsurance Module",
    category: "Advanced",
    description: "Reinsurance treaty and facultative management",
    price: 1000,
    features: ["Treaty management", "Bordereau processing", "Claims allocation", "Settlement"],
  },
  {
    id: "underwriting",
    icon: Shield,
    name: "Underwriting Workbench",
    category: "Advanced",
    description: "Advanced underwriting and risk assessment",
    price: 1100,
    features: ["Risk assessment", "Underwriter workflows", "Medical underwriting", "Automated decisions"],
  },
];
