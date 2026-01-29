"use client";

import Link from "next/link";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";
import { ArrowRight, BookOpen, Headphones, Video, Download } from "lucide-react";

export default function ResourcesPage() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and product documentation",
      href: "/resources/docs",
      items: ["Getting Started", "Product Guides", "Best Practices"]
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides and demos",
      href: "/resources/videos",
      items: ["Product Overview", "Integration Guide", "Admin Training"]
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Product sheets, whitepapers, and more",
      href: "/resources/downloads",
      items: ["Whitepapers", "Datasheets", "Compliance Docs"]
    },
    {
      icon: Headphones,
      title: "Support Center",
      description: "Get help from our support team",
      href: "/resources/support",
      items: ["Submit Ticket", "Knowledge Base"]
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
        
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <ScrollFadeIn>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display">
                Resources & Support
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to succeed with DCF Insurance Solutions
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <Link href={category.href} className="block group">
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <ul className="space-y-2 mb-4">
                      {category.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                Popular Resources
              </h2>
              <p className="text-lg text-muted-foreground">
                Most viewed and helpful resources from our library
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ScrollFadeIn delay={0.1}>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-sm text-primary font-semibold mb-2">GUIDE</div>
                <h3 className="font-bold text-foreground mb-2">Quick Start Guide</h3>
                <p className="text-muted-foreground text-sm mb-4">Get up and running in minutes with our comprehensive quick start guide.</p>
                <Link href="/resources/docs/quickstart" className="text-primary font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-sm text-primary font-semibold mb-2">VIDEO</div>
                <h3 className="font-bold text-foreground mb-2">Product Demo</h3>
                <p className="text-muted-foreground text-sm mb-4">Watch a complete walkthrough of all our product features and capabilities.</p>
                <Link href="/resources/videos/demo" className="text-primary font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Watch Now
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn delay={0.3}>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-sm text-primary font-semibold mb-2">DOCUMENTATION</div>
                <h3 className="font-bold text-foreground mb-2">Developer & API Guides</h3>
                <p className="text-muted-foreground text-sm mb-4">Reference, authentication, and integration examples for developers.</p>
                <Link href="/resources/docs" className="text-primary font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  View Docs
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
        
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <ScrollFadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                Need Help? We're Here for You
              </h2>
              <p className="text-xl text-white/90">
                Our support team is ready to assist you 24/7
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/resources/support" className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  Contact Support
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Sales Inquiry
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </main>
  );
}
