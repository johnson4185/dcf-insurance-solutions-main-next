import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface IndustryItem {
  icon: LucideIcon;
  name: string;
}

export interface ProductCard {
  name: string;
  description: string;
  path: string;
  highlight: boolean;
  icon: LucideIcon;
  tagline?: string;
  bestFor?: string[];
  features?: string[];
}

export interface SolutionItem {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export interface CapabilityItem {
  icon: LucideIcon;
  name: string;
  description: string;
  features?: string[];
}

export interface FeatureItem {
  name: string;
  description?: string;
  icon?: LucideIcon;
  available?: boolean;
}

export interface ComparisonCategory {
  name: string;
  features: ComparisonFeature[];
}

export interface ComparisonFeature {
  name: string;
  values: boolean[];
}

export interface IdealForItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface CategoryCard {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    linkedin?: string;
  };
}
