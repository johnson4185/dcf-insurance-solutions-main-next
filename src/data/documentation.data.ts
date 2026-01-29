/**
 * Documentation Page Data
 * 
 * Content and configuration for the Documentation page.
 * Contains documentation sections, guides, and API references.
 * 
 * @module data/documentation.data
 */

export const documentationData = {
  hero: {
    title: "Documentation & Developer Resources",
    description: "Comprehensive guides, API references, and tutorials to help you get the most out of DCF Insurance Solutions.",
  },
  
  quickStart: {
    title: "Quick Start Guides",
    description: "Get up and running quickly with our step-by-step guides",
    guides: [
      {
        title: "Getting Started",
        description: "Complete setup guide for new users",
        duration: "15 min",
        level: "Beginner",
        topics: ["Account Setup", "Initial Configuration", "First Steps"],
      },
      {
        title: "API Integration",
        description: "Integrate DCF products via REST APIs",
        duration: "30 min",
        level: "Intermediate",
        topics: ["Authentication", "Making Requests", "Error Handling"],
      },
      {
        title: "Configuration Guide",
        description: "Configure products for your organization",
        duration: "45 min",
        level: "Intermediate",
        topics: ["Product Settings", "User Management", "Workflows"],
      },
    ],
  },
  
  productDocs: [
    {
      name: "Insurance Basic",
      description: "Essential insurance operations for small businesses",
      sections: [
        {
          title: "Getting Started",
          items: ["Installation", "Basic Configuration", "First Policy"],
        },
        {
          title: "Core Features",
          items: ["Policy Management", "Customer Portal", "Reporting"],
        },
        {
          title: "Administration",
          items: ["User Management", "Settings", "Data Import/Export"],
        },
      ],
    },
    {
      name: "Insurance Now",
      description: "Comprehensive insurance platform for growing businesses",
      sections: [
        {
          title: "Getting Started",
          items: ["Setup Guide", "Configuration", "Migration Guide"],
        },
        {
          title: "Policy Administration",
          items: ["Policy Creation", "Endorsements", "Renewals", "Cancellations"],
        },
        {
          title: "Claims Management",
          items: ["Claims Intake", "Processing Workflow", "Adjudication"],
        },
        {
          title: "Billing & Payments",
          items: ["Billing Schedules", "Payment Processing", "Collections"],
        },
      ],
    },
    {
      name: "Insurance Suite",
      description: "Enterprise insurance solution for large organizations",
      sections: [
        {
          title: "Architecture & Setup",
          items: ["System Architecture", "Deployment Options", "Infrastructure Requirements"],
        },
        {
          title: "Core Modules",
          items: ["Policy Administration", "Claims Management", "Billing Engine", "Analytics"],
        },
        {
          title: "Integration",
          items: ["API Documentation", "Webhooks", "Third-party Systems"],
        },
        {
          title: "Enterprise Features",
          items: ["Multi-tenant Setup", "Advanced Security", "Compliance"],
        },
      ],
    },
  ],
  
  apiReference: {
    title: "API Reference",
    description: "Complete REST API documentation for all products",
    sections: [
      {
        category: "Authentication",
        endpoints: [
          { method: "POST", path: "/auth/token", description: "Get access token" },
          { method: "POST", path: "/auth/refresh", description: "Refresh access token" },
        ],
      },
      {
        category: "Policies",
        endpoints: [
          { method: "GET", path: "/policies", description: "List all policies" },
          { method: "POST", path: "/policies", description: "Create new policy" },
          { method: "GET", path: "/policies/{id}", description: "Get policy details" },
          { method: "PUT", path: "/policies/{id}", description: "Update policy" },
          { method: "DELETE", path: "/policies/{id}", description: "Cancel policy" },
        ],
      },
      {
        category: "Claims",
        endpoints: [
          { method: "GET", path: "/claims", description: "List all claims" },
          { method: "POST", path: "/claims", description: "Create new claim" },
          { method: "GET", path: "/claims/{id}", description: "Get claim details" },
          { method: "PUT", path: "/claims/{id}", description: "Update claim status" },
        ],
      },
      {
        category: "Customers",
        endpoints: [
          { method: "GET", path: "/customers", description: "List all customers" },
          { method: "POST", path: "/customers", description: "Create new customer" },
          { method: "GET", path: "/customers/{id}", description: "Get customer details" },
          { method: "PUT", path: "/customers/{id}", description: "Update customer" },
        ],
      },
    ],
  },
  
  resources: [
    {
      title: "Code Examples",
      description: "Sample code and integration examples",
      items: [
        "JavaScript/Node.js Examples",
        "Python Examples",
        "C# .NET Examples",
        "Java Examples",
      ],
    },
    {
      title: "SDKs & Libraries",
      description: "Official SDKs for popular languages",
      items: [
        "JavaScript SDK",
        "Python SDK",
        ".NET SDK",
        "Java SDK",
      ],
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      items: [
        "Platform Overview",
        "API Integration Tutorial",
        "Admin Configuration",
        "Advanced Features",
      ],
    },
    {
      title: "Best Practices",
      description: "Recommended patterns and practices",
      items: [
        "Security Best Practices",
        "Performance Optimization",
        "Error Handling",
        "Testing Strategies",
      ],
    },
  ],
  
  support: {
    title: "Need Help?",
    description: "Our support team is here to help you succeed",
    options: [
      {
        title: "Documentation",
        description: "Browse our comprehensive guides and tutorials",
        cta: "Browse Docs",
        href: "/docs",
      },
      {
        title: "API Reference",
        description: "Detailed API documentation and examples",
        cta: "View API Docs",
        href: "/docs/api",
      },
      {
        title: "Support Center",
        description: "Submit tickets and get help from our team",
        cta: "Get Support",
        href: "/resources/support",
      },
      {
        title: "Contact Us",
        description: "Talk to our sales or technical team",
        cta: "Contact Us",
        href: "/contact",
      },
    ],
  },
  
  changelog: {
    title: "Recent Updates",
    updates: [
      {
        date: "January 2026",
        version: "4.5.0",
        changes: [
          "Added new AI-powered claims assessment features",
          "Enhanced API rate limiting and error handling",
          "Improved dashboard performance and analytics",
        ],
      },
      {
        date: "December 2025",
        version: "4.4.0",
        changes: [
          "Launched new customer portal features",
          "Added support for multi-currency billing",
          "Updated security protocols and certifications",
        ],
      },
      {
        date: "November 2025",
        version: "4.3.0",
        changes: [
          "New integration with leading payment gateways",
          "Enhanced reporting and export capabilities",
          "Performance improvements across all modules",
        ],
      },
    ],
  },
};
