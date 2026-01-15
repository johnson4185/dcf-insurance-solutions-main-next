"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { mainNavigation } from "@/data/navigation.data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DCF</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 font-semibold transition-colors ${
                    isActive(item.href) ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-4">
                    <div className="bg-card border border-border rounded-2xl shadow-xl py-4 min-w-[280px] animate-in fade-in-0 zoom-in-95 duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button suppressHydrationWarning className="p-2 text-foreground hover:text-blue-600 transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              href="/signin" 
              className="font-semibold text-blue-600 px-3 py-2 rounded-md hover:bg-gradient-to-b hover:from-gray-50 hover:to-gray-100 transition-all"
            >
              Sign in
            </Link>            <Link
              href="/contact"
              className="px-5 py-2.5 bg-blue-600 text-white text-[15px] font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Sales
            </Link>          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {mainNavigation.map((item) => (
                <div key={item.href}>
                  <Link 
                    href={item.href} 
                    className="block py-2.5 font-medium text-foreground hover:text-primary transition-colors" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <Link href="/signin" className="text-sm font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>
                  Sign in
                </Link>
                <Link href="/contact" className="btn-primary text-sm" onClick={() => setIsMenuOpen(false)}>
                  Contact Sales
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
