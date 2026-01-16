/**
 * Home Page Data Configuration
 * 
 * This file contains all static content and configuration data for the homepage.
 * Centralizing content here makes it easier to maintain and update marketing copy.
 * 
 * @module data/home.data
 */

import { 
  Heart, Users, Car, Plane, Home, Building, 
  Zap, Globe, Award, Shield, Briefcase 
} from "lucide-react";
import { IndustryItem, StatItem, ProductCard, CategoryCard } from "@/types";

/**
 * Hero Section Content
 * Main value proposition displayed prominently at the top of the homepage
 */
export const heroContent = {
  badge: "Trusted by Leading Insurers Worldwide",
  title: "Enterprise Insurance Products for Global Markets",
  description: "DCF builds insurance products that help insurers worldwide operate efficiently, stay compliant with regional regulations, and scale with confidence.",
  cta: {
    primary: { text: "Get Started", href: "/comparison" },
    secondary: { text: "Explore Products", href: "/products" },
  },
  posterImage: "/images/hero-image.jpg",
  posterAlt: "Insurance professionals collaborating in a modern office",
} as const;

/**
 * Statistics Section
 * Key metrics that demonstrate company credibility and scale
 */
/**
 * Statistics Section
 * Key metrics that demonstrate company credibility and scale
 */
export const stats: StatItem[] = [
  { value: "50+", label: "Insurance Clients" },
  { value: "5M+", label: "Policies Managed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Global Support" },
];

/**
 * Why DCF Section
 * Core value proposition explaining the platform's benefits
 */
export const whyDCFContent = {
  badge: "WHY DCF",
  title: "Proven insurance platforms for modern insurers",
  description: "A unified, enterprise-grade insurance platform covering core systems, digital experiences, analytics, and compliance — built for insurers, brokers, TPAs, and reinsurers.",
  image: {
    src: "/images/hero-image.jpg",
    alt: "Business collaboration",
  },
  cta: {
    title: "Request a Consultation",
    description: "Talk to our team to explore how DCF can serve as the core insurance platform for your organization.",
    linkText: "Contact Us",
    href: "/contact",
  },
} as const;

/**
 * Digital Transformation Section
 * Highlights the comprehensive technology stack offered
 */
export const digitalTransformationContent = {
  badge: "Digital Transformation",
  title: "Accelerate your insurance digital transformation",
  description: "From core policy administration to advanced analytics, DCF provides the full stack of insurance technology your organization needs to compete in today's market.",
  features: [
    "End-to-end policy lifecycle management",
    "Omnichannel digital experiences",
    "Real-time analytics and reporting",
    "Regulatory compliance built-in",
    "Cloud-native architecture",
    "API-first integration",
  ],
  image: {
    src: "/images/digital-dashboard.jpg",
    alt: "Digital insurance dashboard",
  },
} as const;

/**
 * Team Collaboration Section
 * Emphasizes cross-functional collaboration features
 */
export const teamCollaborationContent = {
  badge: "Team Collaboration",
  title: "Built for collaboration across your organization",
  description: "DCF brings together underwriters, claims teams, customer service, and IT on a single platform — improving efficiency and reducing operational silos.",
  image: {
    src: "/images/team-collaboration.jpg",
    alt: "Team collaboration in modern office",
  },
} as const;

/**
 * Industries Served
 * List of insurance verticals the platform supports
 */
export const industries: IndustryItem[] = [
  { icon: Heart, name: "Health Insurance" },
  { icon: Users, name: "Life Insurance" },
  { icon: Car, name: "Motor Insurance" },
  { icon: Plane, name: "Travel Insurance" },
  { icon: Home, name: "Property & Casualty" },
  { icon: Building, name: "Third Party Administrators" },
];

/**
 * Products Showcase
 * Featured products displayed on the homepage
 */
export const productsShowcase: ProductCard[] = [
  {
    name: "Insurance Basic",
    description: "Essential insurance product for small or focused teams starting their digital journey.",
    path: "/products/insurance-basic",
    highlight: false,
    icon: Zap,
  },
  {
    name: "Insurance Now",
    description: "Advanced insurance product for growing organizations with complex workflows.",
    path: "/products/insurance-now",
    highlight: true,
    icon: Globe,
  },
  {
    name: "Insurance Suite",
    description: "Complete enterprise insurance product covering the full lifecycle end-to-end.",
    path: "/products/insurance-suite",
    highlight: false,
    icon: Award,
  },
];

/**
 * Products Section Header
 * Section title and CTA for the products showcase
 */
export const productsSection = {
  badge: "Our Solutions",
  title: "Choose Your Product",
  description: "Select the right insurance product for your organization's needs",
  ctaText: "View All Products",
  ctaHref: "/products",
} as const;

/**
 * Closing CTA Section
 * Final call-to-action at the bottom of the homepage
 */
export const closingCTAContent = {
  title: "Ready to modernize your insurance operations?",
  description: "Join leading insurers worldwide who trust DCF for their digital transformation journey.",
  cta: {
    primary: { text: "Contact Sales", href: "/comparison" },
    secondary: { text: "Compare Products", href: "/products" },
  },
} as const;

/**
 * Solutions Category Cards
 * Different customer segments and their specific needs
 */
export const solutionsCategoryCards: CategoryCard[] = [
  {
    icon: Building,
    title: "Insurers",
    description: "Modernize operations, adapt in the digital age, and flourish with a strategic consulting partner.",
    href: "/solutions#insurers",
  },
  {
    icon: Users,
    title: "Agents & Brokers",
    description: "Scale operations and strengthen critical relationships by accelerating essential administrative tasks.",
    href: "/solutions#brokers",
  },
  {
    icon: Briefcase,
    title: "Managing General Agents",
    description: "Achieve a sustainable competitive edge with a one-stop consulting, technology, and insurance services partner.",
    href: "/solutions#mga",
  },
  {
    icon: Shield,
    title: "Reinsurers",
    description: "Streamline processes, upgrade systems, and bolster data security with solutions for modern reinsurers.",
    href: "/solutions#reinsurers",
  },
];
