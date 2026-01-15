import type { LucideIcon } from "lucide-react";
import { 
  FileText, DollarSign, TrendingUp, ClipboardCheck, CheckCircle, Settings,
  Monitor, Users, BarChart3, Smartphone, Zap, Repeat, Shield
} from "lucide-react";

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
