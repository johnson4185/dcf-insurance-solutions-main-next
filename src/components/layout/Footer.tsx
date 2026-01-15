"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { footerData } from "@/data/footer.data";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-5">
        <div className="container-wide mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-semibold text-primary-foreground text-lg">
            SIGN UP FOR PRODUCT UPDATES
          </span>
          <div className="flex gap-2">
            <input
              suppressHydrationWarning
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2.5 rounded-full bg-white text-foreground text-sm w-40 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              suppressHydrationWarning
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2.5 rounded-full bg-white text-foreground text-sm w-48 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-navy-light transition-colors">
              SUBMIT
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

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
