import { ComparisonCategory } from "@/types";

export const comparisonPageContent = {
  title: "Product Comparison",
  description: "A detailed comparison of capabilities across our platform products.",
};

export const comparisonTableData = {
  products: [
    { 
      name: "Insurance Basic", 
      price: "SAR 2,500/mo", 
      subtext: "Essential policy and claims coverage for small teams",
      link: "/products/insurance-basic", 
      highlighted: false,
      color: "blue",
      image: "/images/products/basic-dashboard.jpg"
    },
    { 
      name: "Insurance Now", 
      price: "SAR 5,500/mo", 
      subtext: "Complete insurance platform for growing businesses",
      link: "/products/insurance-now", 
      highlighted: true,
      color: "purple",
      image: "/images/products/now-dashboard.jpg"
    },
    { 
      name: "Insurance Suite", 
      price: "SAR 15,000/mo", 
      subtext: "Enterprise-grade solution for large scale operations",
      link: "/products/insurance-suite", 
      highlighted: false,
      color: "amber",
      image: "/images/products/suite-dashboard.jpg"
    },
    { 
      name: "TPA Platform", 
      price: "SAR 5,500/mo", 
      subtext: "Specialized platform for third-party administrators",
      link: "/products/tpa-platform", 
      highlighted: false,
      color: "slate",
      image: "/images/products/tpa-dashboard.jpg"
    },
  ],
  categories: [
    {
      name: "CORE MODULES",
      features: [
        { name: "Policy Administration", availability: [true, true, true, true] },
        { name: "Claims Management", availability: [true, true, true, true] },
        { name: "Pre-authorization", availability: [false, true, true, true] },
        { name: "Billing Center", availability: [true, true, true, false] },
        { name: "Pricing Center", availability: [true, true, true, false] },
        { name: "Rules Engine", availability: [false, false, true, false] },
        { name: "Document Center", availability: [false, true, true, false] },
        { name: "Underwriting Module", availability: [false, true, true, false] },
        { name: "Reinsurance Management", availability: [false, false, true, false] },
        { name: "Commission Management", availability: [false, true, true, true] },
      ],
    },
    {
      name: "DIGITAL CAPABILITIES",
      features: [
        { name: "Member Portal", availability: [true, true, true, true] },
        { name: "Provider Portal", availability: [false, true, true, true] },
        { name: "Broker Portal", availability: [true, true, true, false] },
        { name: "Employer Portal", availability: [false, false, true, false] },
        { name: "Mobile App (iOS/Android)", availability: [false, true, true, true] },
        { name: "E-Commerce", availability: [false, false, true, false] },
        { name: "Service Center", availability: [false, true, true, false] },
        { name: "Self-Service Chatbot", availability: [false, false, true, false] },
        { name: "Digital Onboarding", availability: [false, true, true, true] },
        { name: "WhatsApp Integration", availability: [false, true, true, true] },
      ],
    },
    {
      name: "COMPLIANCE & INTEGRATIONS",
      features: [
        { name: "NPHIES", availability: [false, true, true, true] },
        { name: "CHI", availability: [true, true, true, true] },
        { name: "ZATCA", availability: [true, true, true, true] },
        { name: "WASFN", availability: [true, true, true, true] },
        { name: "NAFATH", availability: [true, true, true, true] },
        { name: "MOHASAH", availability: [true, true, true, true] },
        { name: "ABSHER", availability: [true, true, true, true] },
        { name: "MUSADR", availability: [false, true, true, false] },
        { name: "AMEED", availability: [false, true, true, false] },
        { name: "SAMA Regulatory Reporting", availability: [false, true, true, false] },
        { name: "CCHI Compliance", availability: [true, true, true, true] },
      ],
    },
    {
      name: "ANALYTICS & REPORTING",
      features: [
        { name: "Standard Reporting", availability: [false, true, true, false] },
        { name: "Custom Dashboards", availability: [false, false, true, false] },
        { name: "Advanced BI", availability: [false, false, true, false] },
        { name: "Regulatory Reporting", availability: [false, true, true, false] },
        { name: "Claims Analytics", availability: [false, true, true, true] },
        { name: "Financial Reporting", availability: [true, true, true, false] },
        { name: "Predictive Analytics", availability: [false, false, true, false] },
        { name: "Real-time KPI Monitoring", availability: [false, true, true, true] },
      ],
    },
    {
      name: "ENTERPRISE",
      features: [
        { name: "Multi-entity Support", availability: [false, false, true, false] },
        { name: "Custom Workflows", availability: [false, true, true, true] },
        { name: "SLA Management", availability: [false, true, true, true] },
        { name: "White Labeling", availability: [false, false, true, false] },
        { name: "Dedicated Support", availability: [false, true, true, true] },
        { name: "99.9% Uptime SLA", availability: [false, true, true, true] },
        { name: "Custom Integration Support", availability: [false, false, true, true] },
        { name: "Dedicated Account Manager", availability: [false, false, true, false] },
        { name: "Priority Support (24/7)", availability: [false, false, true, true] },
      ],
    },
    {
      name: "SECURITY & COMPLIANCE",
      features: [
        { name: "ISO 27001 Certified", availability: [true, true, true, true] },
        { name: "SOC 2 Type II", availability: [true, true, true, true] },
        { name: "Data Encryption at Rest", availability: [true, true, true, true] },
        { name: "Data Encryption in Transit", availability: [true, true, true, true] },
        { name: "Role-Based Access Control", availability: [true, true, true, true] },
        { name: "Audit Logs", availability: [false, true, true, true] },
        { name: "SSO/SAML Integration", availability: [false, false, true, false] },
        { name: "Multi-Factor Authentication", availability: [true, true, true, true] },
      ],
    },
  ],
};