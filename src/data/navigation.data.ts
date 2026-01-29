/**
 * Navigation Configuration
 * 
 * Defines the main navigation structure for the website.
 * Used in the header component to render navigation menus with dropdowns.
 * 
 * @module data/navigation.data
 */

import { NavItem } from "@/types";

/**
 * Main navigation menu items
 * Each item can have nested children for dropdown menus
 */
export const mainNavigation: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products", href: "/products" },
      { label: "Insurance Basic", href: "/products/insurance-basic" },
      { label: "Insurance Now", href: "/products/insurance-now" },
      { label: "Insurance Suite", href: "/products/insurance-suite" },
      { label: "Compare Products", href: "/comparison" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "By Industry", href: "/solutions#industry" },
      { label: "By Use Case", href: "/solutions#use-case" },
      { label: "For Enterprise", href: "/solutions#enterprise" },
      { label: "For SMBs", href: "/solutions#smb" },
    ],
  },
  {
    label: "Why DCF",
    href: "/why-dcf",
    children: [
      { label: "Overview", href: "/why-dcf" },
      { label: "Customer Stories", href: "/why-dcf#stories" },
      { label: "Trust & Security", href: "/why-dcf#security" },
      { label: "Global Compliance", href: "/why-dcf#compliance" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Documentation", href: "/resources/docs" },
      { label: "Support", href: "/resources/support" },
    ],
  },
];
