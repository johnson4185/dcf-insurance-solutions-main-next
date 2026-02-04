"use client";

import Link from "next/link";
import { footerData } from "@/data/footer.data";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container-wide mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="text-3xl font-bold font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DCF</span>
            <p className="mt-4 text-secondary-foreground/70 text-sm max-w-sm">
              {footerData.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm text-secondary-foreground/70">Global Headquarters</span>
            </div>
          </div>

          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 font-display">{section.title}</h4>
              <ul className="space-y-3 text-sm text-secondary-foreground/70">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            {footerData.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
